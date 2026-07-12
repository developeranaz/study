"""
assemble.py  — build sorted_question.json, answers.json, ditto.json
Run from the project root:  python3 progress/assemble.py
"""
import json, re, os
from collections import defaultdict

CODES = json.load(open('progress/codes.json', encoding='utf-8'))
CODE_TO_FULL = CODES          # e.g. "SUR" -> "Surveying"
FULL_TO_CODE = {v: k for k, v in CODES.items()}

master = json.load(open('progress/master.json', encoding='utf-8'))

# load decisions
decisions = {}
for line in open('progress/decisions.jsonl', encoding='utf-8'):
    if line.strip():
        d = json.loads(line)
        decisions[d['g']] = d

missing = [g for g in range(800) if g not in decisions]
if missing:
    print(f"WARNING: {len(missing)} gids have no decision: {missing[:20]}...")

# build per-subject lists in gid order (preserves original ordering within subject)
by_subject = defaultdict(list)
for m in master:
    gid = m['gid']
    dec = decisions.get(gid, {})
    subj_code = dec.get('s', 'OTH')
    subj_full = CODE_TO_FULL.get(subj_code, 'Others')
    # apply any text overrides from decision
    question = dec.get('q', m['question'])
    options  = dec.get('o', m['options'])
    by_subject[subj_full].append({
        'gid': gid,
        'question': question,
        'options': options,
        'answer': dec.get('a', 'X'),
    })

# ---- sorted_question.json ------------------------------------------------
# Renumber 1..n within each subject
sorted_q = {}
answers  = {}
for subj_full in sorted(by_subject.keys()):
    items = by_subject[subj_full]
    sorted_q[subj_full] = []
    answers[subj_full]  = {}
    for new_num, item in enumerate(items, 1):
        sorted_q[subj_full].append({
            'question_number': new_num,
            'question': item['question'],
            'options':  item['options'],
        })
        answers[subj_full][str(new_num)] = item['answer']

with open('sorted_question.json', 'w', encoding='utf-8') as f:
    json.dump(sorted_q, f, ensure_ascii=False, indent=2)
print("wrote sorted_question.json")

with open('answers.json', 'w', encoding='utf-8') as f:
    json.dump(answers, f, ensure_ascii=False, indent=2)
print("wrote answers.json")

# ---- ditto.json  ----------------------------------------------------------
# Near-duplicate detection: exact question text match (after normalising whitespace)
from collections import defaultdict as dd

norm = lambda s: re.sub(r'\s+', ' ', s).strip().lower()
groups = dd(list)
for subj_full, items in sorted_q.items():
    for item in items:
        key = norm(item['question'])
        groups[key].append({'subject': subj_full, 'question_number': item['question_number']})

dupes = {k: v for k, v in groups.items() if len(v) > 1}
ditto = [{'question': k, 'occurrences': v} for k, v in dupes.items()]

with open('ditto.json', 'w', encoding='utf-8') as f:
    json.dump(ditto, f, ensure_ascii=False, indent=2)
print(f"wrote ditto.json  ({len(ditto)} duplicate groups)")

# ---- summary -------------------------------------------------------------
total = sum(len(v) for v in sorted_q.values())
print(f"\nTotal questions in sorted_question.json: {total}")
print("Per-subject counts:")
for subj in sorted(sorted_q.keys()):
    n = len(sorted_q[subj])
    x = sum(1 for v in answers[subj].values() if v == 'X')
    print(f"  {subj:40s}  {n:4d}  (X={x})")
