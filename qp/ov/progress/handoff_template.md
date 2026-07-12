# SESSION HANDOFF — Civil Engineering Question Paper Reclassification
Updated: {{TS}} | Progress: {{DONE}}/800 questions decided | **RESUME AT gid {{NEXT}}**

## For the resuming chat: on "continue", do exactly this
1. Work dir (bash): `/sessions/<session>/mnt/question/` (the user-selected folder; adjust mount name). Do NOT re-read questions.json wholesale; do NOT re-analyze completed gids.
2. Show next batch of 50: `python3 progress/show_batch.py <NEXT_GID> <NEXT_GID+49>`
3. For each question decide subject + answer from actual engineering knowledge (NO keyword matching), then append via:
   `python3 progress/record.py << 'EOF'` + one JSON line per gid + `EOF`
   Line format: `{"g":<gid>,"s":"<CODE>","a":"<A|B|C|D|X>"}` — optional keys: `"q":"fixed question text"`, `"o":{full replacement options}`, `"n":"note"`.
   record.py auto-refreshes sessionhandoff.md after every batch (crash-safe; no manual handoff edits needed).
4. Repeat until 800/800. Then: `python3 progress/assemble.py` (builds sorted_question.json + answers.json), then run ditto detection (progress/ditto.py if present, else build near-dup detection + merge review flags noted in decisions.jsonl "n" fields).
5. Verify: counts per subject sum to 800; answers.json covers every question; JSON structure identical to input (2-space indent, keys: question_number, question, options).

## Remaining work
{{REMAIN}}

## Subject codes (progress/codes.json)
SUR Surveying | BM Building Materials | CT Construction Technology | ED Engineering Drawing | SE Structural Engineering | EE Environmental Engineering | TE Transportation Engineering | IE Irrigation Engineering | EST "Estimation, Costing & Valuation" | EM Engineering Mechanics | SOM Strength of Materials | GT Geotechnical Engineering | UM Units and Measurements | AC Autocad | OTH Others

## Processing rules (user-approved decisions)
- Reclassify into the EXISTING 15 categories only; OTH strictly for non-classifiable.
- Output sorted_question.json: same structure as input {Subject:[{question_number,question,options}]}, questions RENUMBERED 1..n per subject (original numbers collide up to 12x — user approved renumbering).
- answers.json: {"Subject":{"<new question_number>":"A|B|C|D"}} keyed to sorted_question.json numbering; unanswerable/invalid = "X". This single file satisfies both answer-file requests (user's two answer-file asks collapse into one under renumbering).
- Keep ALL 800 in sorted_question.json even if duplicated; ditto.json lists duplicate/similar groups (as final Subject+question_number refs after assembly).
- LaTeX: convert real math expressions to $...$ LaTeX via "q"/"o" overrides when broken/plain-unicode (², √, ° in formulas...). Plain prose/units stay untouched. Already-valid $...$ left alone.
- Incomplete questions: reconstruct via "q"/"o" override ONLY when the intended standard question is unambiguous (note in "n"); else answer "X" and leave text as-is.
- Answer from own engineering knowledge; standard JE/AE exam conventions (IS codes, Indian practice) apply.

## Files
- questions.json — INPUT (untouched)
- progress/master.json — 800 questions flattened, gid 0-799 (source of truth for text)
- progress/decisions.jsonl — one line per decided gid (append-only)
- progress/codes.json, show_batch.py, record.py — tooling
- progress/assemble.py — final assembly (created near end; if missing, see step 4)
- sorted_question.json, answers.json, ditto.json — FINAL OUTPUTS (in user folder root)

## Important context/decisions so far
- Input: 800 Qs in 15 buckets, heavily misclassified (e.g. "Others" 222 Qs holds drawing/surveying/RCC/irrigation items). question_number NOT unique (1-432, repeats up to 12x -> merged papers).
- gid = position in original file order (master.json). orig_subject/orig_num preserved in master.json for traceability.
- Batches of 50 gids: batch k = gids (k-1)*50 .. k*50-1, k=1..16.
{{NOTES}}
