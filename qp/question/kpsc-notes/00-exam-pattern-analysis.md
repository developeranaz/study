# 00 — How KPSC Asks Surveying (Exam Pattern Analysis)

*Derived from forensic reading of all 203 Surveying questions in the bank.*

## 1. Question-Type Mix

| Type | Share | Example from bank |
|------|------:|-------------------|
| **Single-fact recall** (definitions, instrument facts, numbers) | ~55% | "Number of links in a 30 m metric chain" → 150 |
| **One-step numericals** (plug into one formula) | ~25% | RL = BM + BS − FS; true bearing = MB ± declination |
| **Concept discrimination** (pick the right method/term among near-synonyms) | ~15% | Radiation vs Intersection vs Resection vs Traversing |
| **Formula identification** (recognize the formula, not derive) | ~5% | Long chord = 2R sin(Δ/2) |

**Depth expected: Diploma level (Punmia/Kanetkar Vol. 1).** No derivations, no multi-step numericals. If a calculation takes more than 2 lines, you're overthinking it.

## 2. The Repeat Phenomenon — PSC recycles questions

The same questions reappear across years with reworded options. Highest repeats in the bank:

| Fact | Times asked |
|------|:-:|
| Principle of surveying = **work from whole to part** | 5× |
| Theodolite measures **horizontal AND vertical angles** | 5× |
| Simpson's rule needs **odd** number of ordinates/offsets | 4× |
| RL by Height-of-Instrument numericals (BS/FS) | 6× |
| True bearing from magnetic bearing ± declination | 5× |
| Included angle between two bearings | 5× |
| Dip at equator = 0°, at poles = 90° | 3× |
| Links in 30 m chain = 150 | 2× (identical) |
| Optical square: mirrors 45°, sets out 90° | 4× |
| Curvature/refraction corrections (0.0785D², 0.0112D², 0.0673D²) | 5× |
| Plane table resection / two-point / three-point problem | 6× |

**Strategy: mastering ~120 hard facts + 6 numerical templates covers ≳80% of Surveying marks.**

## 3. PSC's Favourite Numerical Templates (only these 6!)

1. **RL from BS/FS:** RL = BM_RL + BS − FS; HI = BM_RL + BS. (asked 6×)
2. **True bearing:** TB = MB + declination(E) or MB − declination(W). (5×)
3. **Included angle** = difference of two WCBs (add 360° if negative; if >180°, PSC may want the other angle — check options). (5×)
4. **Chain correction:** True length = (L′/L) × measured length. (2×)
5. **Curvature/refraction:** Cc=0.0785D², Cr=0.0112D², Ccomb=0.0673D², D in km. (3× numerical)
6. **Curve elements:** R = 1719/D° (30 m arc), Long chord = 2R sin(Δ/2). (2×)

## 4. Trap Catalogue (PSC's confusion pairs)

| Trap | Resolution |
|------|-----------|
| **Prismatic vs Surveyor's compass zero** | Prismatic: 0° at **South** end (reading under prism = 0 when needle points N; graduations inverted). Surveyor's: 0° at **both N & S** ends. PSC asked BOTH. |
| **WCB vs QB conversions** | N25°15′E = WCB 25°15′ (1st quadrant unchanged!). Don't "convert" what's already in quadrant I. |
| **Back bearing of QB** | Just swap N↔S and E↔W; angle unchanged. N34°30′W → S34°30′E. |
| **Simpson's rule: odd/even** | ODD ordinates (= even number of divisions). PSC words it as "offsets" or "ordinates" — answer stays ODD. |
| **Refraction vs curvature signs** | Curvature makes objects appear **lower**; refraction partially cancels it (1/7th of curvature); combined = 6/7 of curvature correction. |
| **Contours crossing** | Same-elevation contours **cannot cross**; different-elevation contours cross only at **overhanging cliff**; they merge/unite at **vertical cliff**. |
| **Transiting vs swinging** | Transiting/plunging/reversing = rotating telescope about **horizontal (trunnion) axis** in vertical plane. Swinging = rotating about **vertical axis** in horizontal plane. |
| **Interior vs exterior vs deflection angle sums (closed traverse)** | Interior: (2n−4)×90°. Exterior: (2n+4)×90°. Deflection: 360°. |
| **Latitude vs departure** | Latitude = *l·cos θ* (N–S). Departure = *l·sin θ* (E–W). "L-cos, D-sin". |
| **Intersection vs resection (plane table)** | Intersection: locate **inaccessible/distant objects** (rivers, broken boundaries). Resection: locate the **station occupied by the table**. Two-point & three-point problems = resection/orientation methods. |
| **Radiation use-case** | Details from stations already fixed by triangulation; also best for contouring **steep/broken ground**. |
| **MSL period** | Textbook: **19 years** (Metonic cycle). One PSC paper accepted ~20 years. Prefer 19; if 19 absent, pick 20. |
| **Limit of plane surveying** | Different PSC papers accepted 200, 250 and 260 km². Textbook: ~250 km². Pick 250 if present; else nearest given value. |
| **Least counts** | Levelling staff: 5 mm. Stadia rod: 5 mm (0.005 m). Vernier theodolite: 20″. Prismatic compass: 30′. Surveyor's compass: 30′. |

## 5. Kerala-Specific Observations

- Questions come from **Diploma-level Kerala Technical Education syllabus** — the phrasing often matches Kerala polytechnic textbooks (e.g. "Ceylon ghat tracer", "fathometer", "line ranger" — minor instruments are unusually frequent vs other state PSCs).
- **Modern surveying is rising:** 16 of 203 Qs (~8%) are Total Station / EDM / GPS / remote sensing — recent papers ask more. Expect DGPS, RTK, prism, optical plummet, error types in total station.
- Options frequently contain **corrupted/garbled distractors** (OCR artifacts in PSC papers). If one option is nonsense, it's a distractor — don't panic.
- Answer language style: PSC prefers the *textbook phrase* ("work from whole to part", "fiducial edge", "contour gradient") — memorize exact terms.

## 6. Marks Budget (if Surveying = 25 marks in a 100-mark paper)

| Sub-topic | Expected marks |
|-----------|:-:|
| Levelling + contouring | 6–7 |
| Compass/bearings | 4–5 |
| Chain surveying | 3 |
| Plane table | 2 |
| Modern (TS/GPS/EDM) | 2 |
| Theodolite/traverse | 1–2 |
| Curves | 1 |
| Tacheometry | 1 |
| Areas/errors/minor instruments | 2–3 |
