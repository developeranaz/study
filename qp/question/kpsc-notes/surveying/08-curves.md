# 08 — Curves & Setting Out

*KPSC weight: ~8 of 203 Qs. Formula-recognition style; overlaps Transportation Engineering.*

## 8.1 Curve Nomenclature — ⭐ definitions asked

Simple circular curve between two tangents (straights) intersecting at **Point of Intersection (PI/vertex)**, deflecting by angle **Δ** (deflection angle of curve = external angle at PI).

| Point | Name |
|-------|------|
| **Beginning of curve (tangent→curve)** | **Point of Curve (PC / T₁)** ⭐ (Q150) — also called tangent point |
| End of curve (**curve→tangent/straight**) | **Point of Tangency (PT / T₂)** ⭐ (Q198) |
| Intersection of tangents | Point of Intersection (PI) |

⚠️ TRAP pair: PC = start (tangent changes to curve); PT = end (curve changes to tangent). PSC asked BOTH directions.

## 8.2 Elements of a Simple Circular Curve — 🧮 formula bank

R = radius, Δ = deflection angle:

| Element | Formula |
|---------|---------|
| Tangent length | T = **R tan(Δ/2)** |
| **Length of long chord** | **L = 2R sin(Δ/2)** ⭐🔁2× (Q174, Q188) |
| Length of curve | l = πRΔ/180 = RΔ (Δ in radians) |
| **Apex/External distance (mid-curve→PI)** | **E = R[sec(Δ/2) − 1]** ⭐ (Q148 — "distance from mid point of curve to PI" = external distance) |
| Mid-ordinate (versed sine) | M = R[1 − cos(Δ/2)] |
| Chainage of T₁ | Chainage of PI − T |
| Chainage of T₂ | Chainage of T₁ + l |

⚠️ TRAP: External distance E vs Mid-ordinate M — E goes up to PI, M is inside the curve to the long chord.

## 8.3 Degree of Curve — 🧮 asked

**Arc definition (Indian practice):** D° = angle subtended at centre by a 30 m arc.
**R = 1719 / D°** (30 m arc) [for 20 m arc: R = 1146/D°]

- 🧮 Q193: D = 4.5° → R = 1719/4.5 = **382 m** ✓
- Chord definition: R = 15/sin(D/2) ≈ 1719/D for small D. 🎯

## 8.4 Types of Curves 🎯 (definitions likely)

- **Simple** (one arc), **Compound** (two arcs, same side, different radii), **Reverse/Serpentine** (arcs opposite sides — common on hill roads; avoided on highways/high speed), **Transition/spiral** (radius ∞ → R; ideal = **clothoid**; on Indian Railways = **cubic parabola**), **Vertical curves** (summit/valley — usually **parabolic**).
- Purpose of transition curve: gradual introduction of centrifugal force/superelevation; length by rate of change of radial acceleration (Shortt's) L = v³/(C·R). 🎯 overlaps Transportation.
- Superelevation/cant e = v²/(gR) — see Transportation notes.

## 8.5 Setting Out Methods 🎯 (asked as "which method")

**Linear (chain & tape only):** offsets from long chord, successive bisection of arcs, offsets from tangents (radial/perpendicular: Ox = x²/2R approx.), offsets from chords produced (deflection distances).
**Angular (instrumental):** **Rankine's deflection angle method** (one theodolite + tape; deflection angle for chord c: δ = 1718.9·c/R minutes 🎯), two-theodolite method (no chaining needed), tacheometric method, total station coordinates.

## 8.6 🎯 High-Probability Variations

- δ = 1718.9 c/R minutes (deflection angle constant — the "1719" reappears!).
- Versine formula, chainage arithmetic ("chainage of T₁ if PI = 1000 m, T = 86 m…").
- Obstacle cases: PI inaccessible → measure auxiliary angles.
- Q151/Q153 conflict note: deflection angle max value — both papers say 0–180° ✓ consistent.
