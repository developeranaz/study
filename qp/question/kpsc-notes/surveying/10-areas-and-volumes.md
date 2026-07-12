# 10 — Areas & Volumes (Computations)

*KPSC weight: ~8 of 203 Qs. The Simpson's-rule fact alone was asked 4×.*

## 10.1 Simpson's Rule — ⭐🔁4× GUARANTEED

**Requires ODD number of ordinates/offsets (= EVEN number of equal divisions).**
(Q2, Q17, Q77, Q180 — all answered ODD. PSC words it "offsets" or "ordinates" interchangeably.)

```
A = (d/3) × [(first + last) + 4(sum of even ordinates) + 2(sum of remaining odd ordinates)]
```

- ⭐ Assumption: boundaries are **parabolic arcs** (Q163) — "short lengths of boundary between ordinates are parabolic".
- ⭐ **Simpson's rule is MORE accurate than trapezoidal** (Q167) (exact for parabolic boundaries).
- If even number of ordinates given → apply Simpson's to odd part + treat last strip by trapezoidal. 🎯
- Results comparison: Simpson's may give more or less than trapezoidal depending on concavity (concave towards baseline → Simpson's < trapezoidal). 🎯 AE-level.

## 10.2 Trapezoidal Rule (any number of ordinates)

```
A = d × [(first + last)/2 + sum of intermediate ordinates]
```
Assumption: boundary segments are **straight lines**. ⚠️ TRAP pair with Simpson's assumption (parabolic vs straight).

Mid-ordinate rule: A = d·Σ(mid-ordinates); Average-ordinate rule: A = (Σordinates/n) × length.

## 10.3 Planimeter — ⭐🔁2×

- ⭐ **Area of ANY irregular figure on a plotted map/plan is obtained ACCURATELY by PLANIMETER** (Q3); **area enclosed in a contour → planimeter** (Q86).
- Amsler polar planimeter: anchor point, tracing point, roller.
  A = M(F.R. − I.R. ± 10N + C) — M = multiplier, N = full dial revolutions, C added only when anchor INSIDE the figure. 🎯 likely formula-recognition.
- Zero circle: circle traced with roller not rotating (sliding only). 🎯
- ⚠️ Distractors always offered: **pantagraph (enlarges/reduces plans ⭐ Q192), sextant (angles), optical square (right angles)** — know what each does so you can eliminate.
- Digital planimeter / coordinate methods for modern papers 🎯.

## 10.4 Area by Coordinates 🎯

Shoelace/coordinate rule for traverse area: A = ½|Σ(xᵢyᵢ₊₁ − xᵢ₊₁yᵢ)|.
Area from latitudes & double meridian distances (DMD): A = ½ Σ(DMD × latitude) — likely AE-level question: "double meridian distance method".

## 10.5 Volumes (overlaps Estimation subject — asked there!)

| Formula | Expression | Note |
|---------|-----------|------|
| **Trapezoidal (end-area)** | V = d/2 × [A₁ + Aₙ + 2(A₂+…+Aₙ₋₁)] | assumes straight-line variation |
| **Prismoidal (Simpson's)** | V = d/3 × [A₁ + Aₙ + 4(even areas) + 2(odd areas)] | needs ODD number of sections; most accurate |

- ⭐ (from Estimation bank): **prismoidal formula gives LESS volume than trapezoidal** for typical earthwork (trapezoidal over-estimates): V_prismoidal = V_trapezoidal − prismoidal correction. Asked as "volume by prismoidal compared to trapezoidal → less".
- Prismoid = solid with two parallel end faces connected by plane surfaces.
- Capacity of reservoir & earthwork from contours → same two formulas with contour areas, d = contour interval.

## 10.6 🎯 High-Probability Variations

- Simple Simpson's/trapezoidal numerical with 5 or 7 offsets (do one practice example!).
  e.g. offsets 0, 2.5, 3.5, 5.0, 4.6, 3.2, 0 m at 15 m intervals:
  Simpson's A = (15/3)[(0+0) + 4(2.5+5.0+3.2) + 2(3.5+4.6)] = 5[0 + 42.8 + 16.2] = 295 m².
- "Which rule necessarily requires even number of strips?" → Simpson's.
- Planimeter constant / zero circle definition.
