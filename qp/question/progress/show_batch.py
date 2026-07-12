import json, sys, re
lo, hi = int(sys.argv[1]), int(sys.argv[2])
master = json.load(open('progress/master.json', encoding='utf-8'))
codes = json.load(open('progress/codes.json', encoding='utf-8'))
rev = {v: k for k, v in codes.items()}
for m in master[lo:hi+1]:
    q = re.sub(r'\s+', ' ', m['question']).strip()
    o = ' | '.join(f"{k}: {re.sub(chr(92)+'s+',' ',str(v)).strip()}" for k, v in m['options'].items())
    print(f"#{m['gid']} [{rev[m['orig_subject']]}] {q} || {o}")
