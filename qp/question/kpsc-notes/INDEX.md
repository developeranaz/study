# KPSC Civil Engineering — Knowledge Database (Master Index)

**Goal:** Crack Kerala PSC JE/AE Civil Engineering exams.
**Source of truth:** 800 previous questions in `../sorted_question.json` + `../answers.json` (analysis in `../TOPIC_RELEVANCE_GUIDE.md`).
**Method:** Notes are NOT textbook summaries. They are reverse-engineered from actual KPSC questions — every file lists what PSC has asked, the exact facts/figures PSC expects, likely variations, and traps.

---

## Folder Structure

```
kpsc-notes/
├── INDEX.md                      ← this file (start here)
├── RESUME.md                     ← session-handoff / progress tracker
├── 00-exam-pattern-analysis.md   ← how KPSC asks Surveying (read first)
├── surveying/                    ← 203 Qs = 25.4% of paper 🔴
    ├── 01-fundamentals.md            (principles, classification, scales, maps)
    ├── 02-chain-surveying.md         (chains, tapes, ranging, offsets, corrections)
    ├── 03-compass-surveying.md       (bearings, declination, dip, calculations)
    ├── 04-levelling.md               (BIGGEST single topic — RL calcs, curvature)
    ├── 05-contouring.md              (characteristics, methods, interval)
    ├── 06-plane-table-surveying.md   (radiation/intersection/resection, problems)
    ├── 07-theodolite-traversing.md   (axes, angle sums, latitude/departure)
    ├── 08-curves.md                  (elements, degree of curve, formulas)
    ├── 09-tacheometry.md             (stadia constants, distance formula)
    ├── 10-areas-and-volumes.md       (Simpson's, trapezoidal, planimeter)
    ├── 11-errors-and-precision.md    (error types, permissible errors)
    ├── 12-modern-surveying.md        (Total station, EDM, GPS, remote sensing)
    └── 13-minor-instruments.md       (optical square, pantagraph, fathometer…)
└── building-materials/           ← 79 Qs = 9.9% of paper 🟠
    ├── 00-bm-exam-pattern.md         (how KPSC asks BM, sub-topic weights)
    ├── 01-cement.md                  (composition, Bogue, numbers, special cements)
    ├── 02-stones-and-rocks.md        (rock classification — guaranteed Q)
    ├── 03-concrete-mortar-aggregates.md (w/c, slump, aggregates, grades)
    ├── 04-bricks-and-clay-products.md (brick earth %, sizes, bonds, porcelain)
    ├── 05-timber.md                  (structure, defects, seasoning, plywood)
    ├── 06-lime-and-gypsum.md         (lime classes, fat vs hydraulic, PoP)
    ├── 07-metals-and-alloys.md       (carbon %, cast iron, ores, brass)
    └── 08-paints.md                  (base/vehicle/drier/thinner, types)
└── construction-technology/      ← 66 Qs = 8.3% of paper 🟠
    ├── 00-ct-exam-pattern.md         (style, trap catalogue, master number sheet)
    ├── 01-building-planning-byelaws.md (NBC/KMBR — BIGGEST CT topic, 16 Qs)
    ├── 02-stairs.md                  (terminology, numbers, riser/tread numerical)
    ├── 03-brick-stone-masonry.md     (bonds, pointing, mortar, rubble)
    ├── 04-arches.md                  (intrados/soffit trap, types by centres)
    ├── 05-roofs-and-trusses.md       (span-selection ladder, truss members)
    ├── 06-doors-windows-lintels.md   (stile/rail/mullion/transom, lintel numbers)
    ├── 07-temporary-works.md         (shoring/underpinning/scaffolding/formwork)
    └── 08-floors-and-misc.md         (floor types, CPM vs PERT)
└── estimation/                   ← 65 Qs = 8.1% of paper 🟠
    ├── 00-est-exam-pattern.md        (master constants sheet — 8 marks on one page)
    ├── 01-types-of-estimates.md      (estimate types, %, provisions, rate analysis)
    ├── 02-plinth-carpet-areas.md     (area definitions, % table, approx. estimates)
    ├── 03-material-constants.md      (bricks 500/m³, cement bags, out-turns)
    ├── 04-units-of-measurement.md    (IS 1200 item→unit, deduction rules)
    ├── 05-bar-bending-steel.md       (d²/162, crank 0.42d, steel %)
    ├── 06-painting-coefficients.md   (coefficient table, cost template)
    ├── 07-earthwork-quantity-takeoff.md (lead/lift, centre-line method)
    └── 08-valuation.md               (salvage/scrap, depreciation, YP, mortgagor)
└── irrigation/                   ← 64 Qs = 8.0% of paper 🟠
    ├── 00-ie-exam-pattern.md         (28% is fluid mechanics! trap catalogue)
    ├── 01-water-requirement-of-crops.md (duty/delta Δ=8.64B/D, GCA/CCA, paleo/kor)
    ├── 02-hydrology.md               (precipitation 4×!, rain gauges, flood formulas)
    ├── 03-canals.md                  (alignment, Lacey/Kennedy, CD works, divide wall)
    ├── 04-dams-weirs-hydro.md        (dam types, surge tank 3×, head/tail race)
    └── 05-fluid-mechanics.md         (BIGGEST — Bernoulli, Re/Fr/We, notches)
└── engineering-drawing/          ← 55 Qs = 6.9% of paper 🟡
    ├── 00-ed-exam-pattern.md         (27% of ED = sheet/board sizes! trap catalogue)
    ├── 01-drawing-sheets-boards-layout.md (A-series table, boards B/D, title block, folding)
    ├── 02-lines-lettering-dimensioning.md (IS 9609, h/14, arrowhead 3:1, 2H pencil)
    ├── 03-projections-and-views.md   (quadrants, xy-line rules, isometric 0.815)
    ├── 04-conics-curves-solids.md    (cone sections, e>1, dodecahedron, pentagon 108°)
    ├── 05-scales-and-rf.md           (RF numericals — 5m→25mm asked 2× verbatim)
    └── 06-instruments-threads-fits.md (bevel protractor 5', M20, H8/g7)
└── units-measurements/           ← 53 Qs = 6.6% of paper 🟡
    ├── 00-um-exam-pattern.md         (34% = conversion factors! trap catalogue)
    ├── 01-unit-systems-conversions.md (25.4mm, 735.5W, 10⁷ ergs, ha/acre, 7850)
    ├── 02-areas-plane-figures.md     (10 worked numericals — all calculator-free)
    ├── 03-volumes-surface-areas.md   (cone d²-form, bucket=frustum trap)
    ├── 04-geometry-basics.md         (trapezium/trapezoid/rhomboid, segment/sector)
    ├── 05-arithmetic-algebra.md      (train+bridge, successive %, sum/diff pairs)
    └── 06-trigonometry.md            (1+tan²=sec², cot(90+θ)=−tanθ, shadow 30°)
└── transportation/               ← 35 Qs = 4.4% of paper 🟡
    ├── 00-te-exam-pattern.md         (railways=geometrics 29% each! trap catalogue)
    ├── 01-highway-cross-section-definitions.md (ROW 2×, 12m/2.5m widths, IRC 1934)
    ├── 02-geometric-design.md        (camber table, ruling gradient 1 in 30 2×, PIEV, 3×OSD)
    ├── 03-pavements.md               (rigid=CC 2×, bitumen tests)
    ├── 04-railways.md                (FF rail 66.67mm 2×, sleeper 275×25×13, hump yard)
    └── 05-bridges.md                 (pier/abutment/crib trio, span ladder)
```

## Subject Status

| # | Subject | Qs | Weight | Notes status |
|---|---------|---:|-------:|--------------|
| 1 | **Surveying** | 203 | 25.4% | ✅ 13 files complete (this folder) |
| 2 | **Building Materials** | 79 | 9.9% | ✅ 9 files complete (`building-materials/`) |
| 3 | **Construction Technology** | 66 | 8.3% | ✅ 9 files complete (`construction-technology/`) |
| 4 | **Estimation, Costing & Valuation** | 65 | 8.1% | ✅ 9 files complete (`estimation/`) |
| 5 | **Irrigation Engineering** | 64 | 8.0% | ✅ 6 files complete (`irrigation/`) |
| 6 | **Engineering Drawing** | 55 | 6.9% | ✅ 7 files complete (`engineering-drawing/`) |
| 7 | **Units and Measurements** | 53 | 6.6% | ✅ 7 files complete (`units-measurements/`) |
| 8 | **Transportation Engineering** | 35 | 4.4% | ✅ 6 files complete (`transportation/`) |
| 9 | Environmental Engineering | 32 | 4.0% | ⬜ not started |
| 10 | AutoCAD | 30 | 3.8% | ⬜ not started |
| 11 | Strength of Materials | 26 | 3.3% | ⬜ not started |
| 12 | Engineering Mechanics | 21 | 2.6% | ⬜ not started |
| 13 | Geotechnical Engineering | 21 | 2.6% | ⬜ not started |
| 14 | Structural Engineering | 16 | 2.0% | ⬜ not started |

## How to Study (recommended order)

1. Read `00-exam-pattern-analysis.md` — understand HOW KPSC asks.
2. Study surveying files in this order (by exam weight):
   `04-levelling` → `03-compass` → `02-chain` → `05-contouring` → `06-plane-table` → `12-modern` → `07-theodolite` → `08-curves` → `09-tacheometry` → `11-errors` → `10-areas` → `01-fundamentals` → `13-minor-instruments`
3. Drill with `../quiz.html` (choose Surveying, Practice mode, shuffle ON).
4. Building Materials: read `building-materials/00-bm-exam-pattern.md`, then files 01→08 (already in priority order).
5. Export quiz history → paste to AI → identify weak sub-topics → re-read that file.

## Conventions Used in All Note Files

- **⭐ PSC FACT** — a fact directly asked in the 203-question bank (memorize verbatim).
- **🔁 Repeat count** — e.g. "asked 5×" = appeared 5 times in the bank; near-certain to reappear.
- **⚠️ TRAP** — confusing pairs / near-identical options PSC uses to trick.
- **🎯 Likely variation** — not yet asked, but the obvious next question from the same concept.
- **🧮 Solved pattern** — worked numerical in exactly the PSC style.
