# Civil Engineering Question Paper — Progress & Knowledge Database
**Project:** Reclassify & answer 800 civil engineering JE/AE exam questions  
**Completed:** 2026-07-11 | **Status: ALL 800 QUESTIONS DECIDED — FINAL OUTPUTS WRITTEN**

---

## Final Output Files

| File | Description |
|------|-------------|
| `sorted_question.json` | 800 questions sorted by subject, renumbered 1..n per subject |
| `answers.json` | Answers keyed to sorted_question.json numbering (A/B/C/D/X) |
| `ditto.json` | 3 groups of exact-duplicate questions (by normalised text) |
| `progress/decisions.jsonl` | Append-only raw decisions log (source of truth, 800 lines) |

---

## Completion Summary

| Metric | Value |
|--------|-------|
| Total questions decided | **800 / 800** |
| Cleanly answered (A/B/C/D) | **743** |
| Unanswerable / corrupt (X) | **57** |
| Exact duplicate groups found | **3** |
| Sessions to complete | ~16 batches of 50 |

---

## Questions Per Subject

| Code | Subject | Count | X (corrupt/unanswerable) | Completed |
|------|---------|------:|-------------------------:|:---------:|
| SUR | Surveying | 203 | 7 | ✅ |
| BM | Building Materials | 79 | 6 | ✅ |
| CT | Construction Technology | 66 | 4 | ✅ |
| EST | Estimation, Costing & Valuation | 65 | 6 | ✅ |
| IE | Irrigation Engineering | 64 | 4 | ✅ |
| ED | Engineering Drawing | 55 | 4 | ✅ |
| UM | Units and Measurements | 53 | 7 | ✅ |
| TE | Transportation Engineering | 35 | 2 | ✅ |
| OTH | Others (unclassifiable) | 34 | 8 | ✅ |
| EE | Environmental Engineering | 32 | 1 | ✅ |
| AC | Autocad | 30 | 4 | ✅ |
| SOM | Strength of Materials | 26 | 2 | ✅ |
| EM | Engineering Mechanics | 21 | 2 | ✅ |
| GT | Geotechnical Engineering | 21 | 0 | ✅ |
| SE | Structural Engineering | 16 | 0 | ✅ |
| **TOTAL** | | **800** | **57** | ✅ |

---

## Answer Distribution

| Answer | Count | % |
|--------|------:|--:|
| A | 209 | 26.1% |
| B | 204 | 25.5% |
| C | 182 | 22.8% |
| D | 148 | 18.5% |
| X (invalid/corrupt) | 57 | 7.1% |

---

## All 57 Unanswerable / Corrupt Questions (X)

| gid | Subject | Reason |
|-----|---------|--------|
| 39 | SUR | Options (Traversing/Radiation/Resection/Intersection) do not match question about dip |
| 51 | SUR | Garbled question; options (Planimeter/Metallic tape/…) unrelated |
| 75 | SUR | Options unrelated to question (dip at poles); unanswerable |
| 82 | ED | Top view above front view = 3rd angle projection, not among options |
| 181 | EST | Options corrupt (A=C='3', units lost) |
| 184 | TE | Options corrupt (stray degree values); paving bitumen softening point ~35–70°C |
| 192 | EST | Question fragment about units; options are site-area percentages |
| 203 | BM | Options corrupt; correct silica % (50–60%) not offered |
| 245 | BM | Question truncated mid-sentence and merged with next question |
| 246 | BM | All options corrupted fragments with stray $ signs |
| 250 | EST | 'One unit' undefined; per m³ RCC 1:1.5:3 needs ~8 bags — no option matches |
| 267 | BM | Options B–D are admixture chemicals merged from another question |
| 277 | BM | Correct answer (spring wood + autumn wood) not offered; option D truncated |
| 287 | AC | Question garbled ('limited for installation'); intent unclear |
| 296 | BM | Options corrupt (stray '('); IS curing/testing temp 27±2°C not offered |
| 343 | ED | Options are map scales, unrelated to T-square question |
| 349 | CT | Options are areas, unrelated to truss-brace question (answer: struts) |
| 355 | EE | Match question: Column II items missing entirely |
| 372 | CT | FSI = Floor Space Index; options are unrelated plan/line terms |
| 379 | SUR | Boning rods/sight rails question; options describe contour spacing — unrelated |
| 393 | TE | Highway overturning question but options are irrigation values — unrelated |
| 395 | IE | Groynes question; options are hectare values — unrelated |
| 396 | IE | Ryve formula Q=C×A^(2/3); all options are corrupted LaTeX fragments |
| 406 | IE | CCA definition question; options are compaction rollers — unrelated |
| 429 | EST | Answer = 'analysis of rates' — not among options (valuation terms) |
| 435 | EM | Question about retardation; options are numeric HP values — unrelated |
| 437 | UM | Options are bare numbers; unit of heat (kcal) not represented |
| 438 | OTH | Mo melts ~2620°C; no option correct |
| 478 | SOM | Question text almost entirely missing ('kN 60 kN') |
| 500 | EST | All options truncated at '('; prismoidal formula — options indistinguishable |
| 505 | ED | Section parallel to generator = parabola; options are circle parts — unrelated |
| 512 | EM | All options are truncated LaTeX fragments |
| 513 | SUR | Question fragment about overhanging cliffs; options are stray numbers |
| 518 | UM | Options are corrupted pi fragments; rhombus area = d1×d2/2 |
| 548 | UM | 10 ha = 24.7 acres; no option correct (options confuse direction of conversion) |
| 549 | IE | Delta = 8.64B/D; options corrupted/truncated |
| 566 | AC | QuickCalc = Ctrl+8; none of the F-key options is correct |
| 572 | AC | Construction line = XLINE; not among options |
| 575 | AC | Ortho shortcut = F8; options are editing commands — unrelated |
| 588 | CT | Options corrupt ('(' and bare 'Group'); educational = NBC Group B |
| 597 | UM | SI prefix 10⁻⁶ = micro; options are inch/cm conversion numbers — unrelated |
| 599 | SUR | Options corrupt (meridian terms + trailing junk) |
| 613 | UM | Density of water = 1 g/cm³; no option correct; junk in options |
| 627 | OTH | Options garbled + trailing fragment of next question |
| 629 | OTH | Question (31st amendment / LS seats) does not match options |
| 630 | OTH | Question (Ayyankali) does not match options (women-scheme objectives) |
| 632 | OTH | Dharmaraja = Karthika Thirunal Rama Varma; not among options |
| 635 | ED | Regular pentagon interior angle = 108°; not offered (72° is exterior angle) |
| 645 | OTH | Options truncated to initials; time-dependent 'present AG' question |
| 658 | CT | Question text corrupt beyond recovery (ventilation air per person) |
| 720 | OTH | Question text reduced to 'kg'; unrecoverable |
| 727 | UM | Mean = 140/7 = 20; not among options (option A corrupt '12.') |
| 739 | SOM | Z = (π/32)(D⁴-d⁴)/D; options truncated identically, key unrecoverable |
| 746 | SUR | Numbered computation list missing from question |
| 749 | OTH | Question text reduced to 'mm'; unrecoverable |
| 794 | EST | Options corrupted (A–C garbled); NBC Group B Educational |
| 798 | UM | Options corrupted; correct = π radians, none of A–D match |

---

## Processing Rules Applied

- Reclassified into 15 existing categories only; OTH strictly for non-classifiable
- All 800 questions kept in sorted_question.json (including duplicates)
- Questions renumbered 1..n per subject (original numbers repeat up to 12×)
- answers.json keyed to sorted_question.json new numbering
- Fluid mechanics/hydraulics → Irrigation Engineering (no separate FM category)
- LaTeX math converted to $...$ notation where broken/plain-unicode
- Incomplete/corrupted questions: answered X when intended answer unrecoverable
- IS codes and Indian JE/AE exam conventions used throughout
- Duplicate detection: 3 exact-match groups found (see ditto.json)

---

## Batch Processing History

| Batch | gids | Status |
|-------|------|--------|
| 1 | 0–49 | ✅ Done |
| 2 | 50–99 | ✅ Done |
| 3 | 100–149 | ✅ Done |
| 4 | 150–199 | ✅ Done |
| 5 | 200–249 | ✅ Done |
| 6 | 250–299 | ✅ Done |
| 7 | 300–349 | ✅ Done |
| 8 | 350–399 | ✅ Done |
| 9 | 400–449 | ✅ Done |
| 10 | 450–499 | ✅ Done |
| 11 | 500–549 | ✅ Done |
| 12 | 550–599 | ✅ Done |
| 13 | 600–649 | ✅ Done |
| 14 | 650–699 | ✅ Done |
| 15 | 700–749 | ✅ Done |
| 16 | 750–799 | ✅ Done |
