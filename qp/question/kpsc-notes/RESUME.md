# RESUME.md — Session Handoff & Progress Tracker

> **Purpose:** If a session ends, a new AI session (or you) reads this file + `INDEX.md` to continue exactly where work stopped.

## Current State (last updated: 2026-07-12)

| Item | Status |
|------|--------|
| Question bank | `../sorted_question.json` (800 Qs, 15 subjects) + `../answers.json` (A/B/C/D/X) |
| Topic weight analysis | `../TOPIC_RELEVANCE_GUIDE.md` ✅ done |
| Quiz app | `../quiz.html` ✅ done (offline, timer, localStorage history, JSON export) |
| Exam pattern analysis | `00-exam-pattern-analysis.md` ✅ done |
| **Surveying notes (13 files)** | ✅ **COMPLETE** — see `surveying/` |
| **Building Materials notes (9 files)** | ✅ **COMPLETE** — see `building-materials/` |
| **Construction Technology notes (9 files)** | ✅ **COMPLETE** — see `construction-technology/` |
| **Estimation notes (9 files)** | ✅ **COMPLETE** — see `estimation/` |
| **Irrigation notes (6 files)** | ✅ **COMPLETE** — see `irrigation/` |
| **Engineering Drawing notes (7 files)** | ✅ **COMPLETE** — see `engineering-drawing/` |
| **Units and Measurements notes (7 files)** | ✅ **COMPLETE** — see `units-measurements/` |
| **Transportation Engineering notes (6 files)** | ✅ **COMPLETE** — see `transportation/` |
| Environmental Engineering notes | ⬜ NEXT UP (32 Qs, 4.0%) |
| All other subjects | ⬜ pending, priority order in INDEX.md |

## Instructions for a Fresh Session

1. Read `INDEX.md` (structure + conventions) and this file.
2. The methodology for writing notes for the NEXT subject:
   a. Dump that subject's Qs+answers: `python3` over `sorted_question.json` + `answers.json`.
   b. Read ALL questions carefully (not keyword search) — group into sub-topics.
   c. Count repeats; identify numerical patterns, traps, contradictions between papers.
   d. Write per-sub-topic markdown files into `kpsc-notes/<subject>/` following the
      conventions in INDEX.md (⭐ PSC FACT / 🔁 / ⚠️ TRAP / 🎯 / 🧮).
   e. Notes must cover the *concept neighbourhood* — related facts PSC could ask next,
      not just the literal questions.
   f. Update the status tables in INDEX.md and this file.
3. Keep file naming: `NN-topic-name.md`, numbered in study-priority order.

## Known Data Quirks (carry into future sessions)

- 57 questions are marked `X` (corrupt/unanswerable) — ignore for notes, but some X
  questions still hint at testable topics (e.g. Q169 sexagesimal system, Q149 boning rods).
- PSC papers contradict themselves on some facts (different years, different setters).
  These are documented as ⚠️ TRAPs with both PSC-given answers, e.g.:
  - Limit of plane surveying: 200 / 250 / 260 km² all appear as "correct" in different papers.
  - MSL averaging period: 19 years (Q172) and ~20 years (Q124) both accepted.
  - Surveyor's compass zero: "N & S ends" (Q5, Q51) vs prismatic compass zero at South (Q158).
- Duplicate questions exist across the bank (3 exact-dup groups in `../ditto.json`).

## Completed Log

- 2026-07-11: 800 Qs classified, answered, sorted → JSON outputs.
- 2026-07-12: TOPIC_RELEVANCE_GUIDE.md (subject + sub-topic weights).
- 2026-07-12: quiz.html v2 (timer + localStorage + AI export).
- 2026-07-12: kpsc-notes/ created; Surveying complete (13 files + pattern analysis).
- 2026-07-12: Building Materials complete (9 files incl. 00-bm-exam-pattern.md). All 79 Qs
  cited in notes (verified). BM data quirks found:
  - Cement bag volume: 0.034 m³ (Q14) AND 0.035 m³ (Q61) both accepted — TRAP noted.
  - Slump values: road 25–50 mm (Q22), normal RCC 80–150 mm (Q67) — PSC-given, textbooks vary.
  - Mild steel carbon: PSC accepts 0.10–0.25% (Q68).
  - 6 X-questions (24,45,46,54,62,66) → topics covered anyway (curing temp, C3S, marine cement,
    annual rings, low-heat composition, silica % dup of Q6).
- 2026-07-12: Construction Technology complete (9 files incl. 00-ct-exam-pattern.md).
  All 66/66 Qs cited (verified). CT observations:
  - Biggest sub-topic = building bye-laws/NBC/KMBR (16 Qs) — Kerala-specific number recall.
  - PSC keys that differ from common textbooks (noted as-is in files): bathroom+WC 2.1 m²
    (Q45), street ≥12 m → height ≤24 m (Q65), garden-wall bond 10 cm (Q63), flat-arch
    skewback 60° with springing line (Q22).
  - 4 X-questions (39,40,47,54) → topics covered anyway (truss struts, FSI definition,
    educational = Group B, ventilation air rate).
- 2026-07-12: Estimation complete (9 files incl. 00-est-exam-pattern.md). 62/65 cited;
  3 X-questions (6,9,65) topics covered. Estimation quirks:
  - Q52 key 0.45d vs Q47 0.42D vs Q58 0.414d for crank lengths — rule noted in file 05.
  - Horizontal circulation: 10–15% of plinth area (Q46) vs 20–25% of total plan area (Q50).
  - Panelled door: coefficient 2¼ (Q1) vs "painting constant" 1.30 (Q2) — stem-dependent.
  - NBC site plan scale = 1:500 (Q63) — corrected the 1:400 reference in CT file 01.
- 2026-07-12: Irrigation complete (6 files incl. 00-ie-exam-pattern.md). 64/64 cited.
  Key insights: ~28% of "Irrigation" Qs are fluid mechanics; "precipitation" definition
  asked 4× (Q17/32/34/35); surge tank asked 3×; centre of pressure H/3 asked 2×.
  X-questions (8,9,19,36): groynes, Ryve's formula, commanded area, Δ=8.64B/D — all covered.
- 2026-07-12: Engineering Drawing complete (7 files incl. 00-ed-exam-pattern.md). 55/55 cited
  (verified). ED insights:
  - 15/55 Qs (27%) = drawing sheet & board sizes alone — one table covers them.
  - RF numerical "5 m → 25 mm = 1:200" asked verbatim 2× (Q36, Q46); A2 size asked 2× (Q5, Q40);
    arrowhead 3:1 asked both directions (Q23, Q53); "letter size = height" 2× (Q42, Q51).
  - PSC keys noted as-is: 2H pencil for construction/dimension lines (Q13), sub-titles 6–8 mm
    (Q14), chain-line dash ratio 6:1–4:1 (Q4), truncated (not frustum) for inclined cut (Q37).
  - Boards appear under both B- and D-designations (B2=D2=700×500×15) — trap noted.
  - 4 X-questions (2,30,35,45): third-angle, T-square horizontal lines, parabola section,
    pentagon 108° — all covered in notes.
- 2026-07-12: Units and Measurements complete (7 files incl. 00-um-exam-pattern.md). 53/53
  cited (verified). UM insights:
  - Two-part subject: conversion factors (18 Qs) + school mensuration (21 Qs); numericals
    all calculator-free by design (3-4-5 triples, r=7 circles, perfect squares).
  - Hectare/are/acre cluster asked 3× (Q7/8/22 + X Q33). Metric HP 735.5 vs British 746 trap.
  - PSC keys as-is: trapezium = "two parallel, four angles different" (Q11, Indian convention);
    bucket volume keyed "None of these" because frustum formula absent (Q20).
  - 7 X-questions (4,18,33,37,41,47,53) — highest X-rate of any subject (13%); all intents
    recovered and covered (kcal, rhombus d₁d₂/2, 24.7 acres, micro, 1 g/cm³, mean 20, π rad).
- 2026-07-12: Transportation Engineering complete (6 files incl. 00-te-exam-pattern.md).
  35/35 cited (verified). TE insights:
  - Railways = geometric design = 29% each; pure definition-recall subject, no numericals.
  - Repeats: FF-rail head width 66.67 mm asked 2× verbatim (Q30/Q35, keys 66.67 vs 66.68);
    right of way 2× (Q11/Q16); ruling gradient plains 1 in 30 2× (Q14/Q23); rigid=CC 2×
    (Q4/Q27); camber CC 1-in-50–60 (Q1) vs WBM 3–2.5% (Q12).
  - TRAPs: min overtaking zone 3×OSD (vs desirable 5×OSD); PIEV = total reaction time
    (not perception); gauge = INNER faces; bearing plate (not fish plate) fixes FF rail
    to wooden sleeper; pier vs abutment vs crib (temporary).
  - PSC key as-is: rectangular drain for heavy discharge (Q29).
  - 2 X-questions (2, 26): bitumen softening point 35–70 °C and superelevation intent —
    both covered in notes.
