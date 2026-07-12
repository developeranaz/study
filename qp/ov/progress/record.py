import json, sys, os, datetime
codes = json.load(open('progress/codes.json', encoding='utf-8'))
done = {}
if os.path.exists('progress/decisions.jsonl'):
    for line in open('progress/decisions.jsonl', encoding='utf-8'):
        if line.strip():
            d = json.loads(line); done[d['g']] = d
new, errs = [], []
for i, line in enumerate(sys.stdin):
    line = line.strip()
    if not line: continue
    try:
        d = json.loads(line)
        assert d['s'] in codes, f"bad subject {d.get('s')}"
        assert d['a'] in list('ABCDX'), f"bad answer {d.get('a')}"
        assert isinstance(d['g'], int) and 0 <= d['g'] <= 799, "bad gid"
        if d['g'] in done: errs.append(f"line {i}: gid {d['g']} already recorded, skipped"); continue
        new.append(d); done[d['g']] = d
    except Exception as e:
        errs.append(f"line {i}: {e} :: {line[:80]}")
with open('progress/decisions.jsonl', 'a', encoding='utf-8') as f:
    for d in new: f.write(json.dumps(d, ensure_ascii=False) + '\n')
n = len(done)
missing = [g for g in range(800) if g not in done]
nxt = missing[0] if missing else None
# auto-update handoff
hh = open('progress/handoff_template.md', encoding='utf-8').read()
hh = hh.replace('{{DONE}}', str(n)).replace('{{NEXT}}', str(nxt)).replace('{{TS}}', datetime.datetime.now().isoformat(timespec='minutes'))
notes = open('progress/notes.md', encoding='utf-8').read() if os.path.exists('progress/notes.md') else ''
hh = hh.replace('{{NOTES}}', notes)
hh = hh.replace('{{REMAIN}}', f"gids {nxt}-799 ({800-n} questions)" if nxt is not None else "NONE - all 800 done. Run progress/assemble.py, then ditto detection.")
open('sessionhandoff.md', 'w', encoding='utf-8').write(hh)
print(f"recorded {len(new)} | total {n}/800 | next gid: {nxt}")
for e in errs: print("ERR:", e)
