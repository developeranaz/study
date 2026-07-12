# 03 — Compass Surveying & Bearings

*KPSC weight: ~34 of 203 Qs (17%) — second-biggest sub-topic. Half are numericals with fixed templates.*

## 3.1 Meridians & Bearings

| Meridian | Reference |
|----------|-----------|
| True meridian | Geographic N–S (convergent at poles) |
| Magnetic meridian | Direction of freely suspended needle |
| Arbitrary meridian | Any convenient direction |

- ⭐ Magnetic & true meridian are **parallel (coincide) at equator**… PSC's Q166 answer: "parallel at equator". (Strictly they coincide along agonic lines; accept PSC's version.)
- **WCB (Whole Circle Bearing):** 0–360°, clockwise from North. Prismatic compass reads WCB.
- **QB / Reduced Bearing:** 0–90° from N or S toward E/W. Surveyor's compass reads QB.

## 3.2 WCB ⇄ QB Conversion — 🧮 asked 3×

| WCB range | QB | Quadrant |
|-----------|-----|----------|
| 0–90° | N (WCB) E | I |
| 90–180° | S (180−WCB) E | II |
| 180–270° | S (WCB−180) W | III |
| 270–360° | N (360−WCB) W | IV |

- 🧮 Q35: N12°24′E → WCB = **12°24′** (⚠️ TRAP: quadrant I needs NO arithmetic).
- 🧮 Q24: N25°15′E → **25°15′** (same trap, asked twice!).
- 🧮 Q116: WCB 327°24′ → N(360−327°24′)W = **N32°36′W**.

## 3.3 Fore Bearing & Back Bearing — 🧮 asked 3×

- WCB system: **BB = FB ± 180°** (+ if FB < 180°, − if FB > 180°).
- QB system: **swap N↔S and E↔W, angle unchanged** ⭐.
  - 🧮 Q10: FB N34°30′W → BB = **S34°30′E** ✓
  - 🧮 Q36: FB N86°12′W → BB = **S86°12′E** ✓
- ⚠️ TRAP options keep the letters same or change the angle — only the letters flip.
- Difference between FB and BB of a line should be exactly 180° (WCB); discrepancy → **local attraction** at one/both stations.

## 3.4 Magnetic Declination — 🧮 asked 5× (GUARANTEED)

**Declination = horizontal angle between magnetic meridian and true meridian.**

**Master formula: True Bearing = Magnetic Bearing + Declination(East) / − Declination(West)**
Mnemonic: **"Declination East → Add"** ("East is least? NO — East ADD here").

- 🧮 Q9: MB 85°30′, decl. 4°30′E → TB = **90°** ✓
- 🧮 Q89: MB 50°10′, decl. 1°20′E → TB = **51°30′** ✓
- 🧮 Q131: MB 55°30′, decl. 4°10′E → TB = **59°40′** ✓
- 🧮 Q34 (QB + West decl.): MB S28°30′E, decl. 7°30′W. In S…E quadrant, west declination *adds* to the S-E angle → TB = **S36°0′E** ✓
  ⚠️ TRAP: with quadrantal bearings, draw a quick sketch — mechanical ± fails in S/W quadrants.
- **Sun-at-noon trick (asked 2×):** At local noon the sun is on the TRUE meridian → true bearing = 180°.
  - 🧮 Q75: magnetic bearing of sun at noon = 140° (< 180) → declination = 180−140 = **40°E** ✓
  - 🧮 Q122: MB of sun at noon = 150° → decl = 30°E ✓ (PSC answer B). Rule: **MB < 180° → East declination = 180 − MB.** (If MB >180 → West.)

**Variations of declination (🎯 know all four):** Diurnal (daily; more in day, more in summer, more at poles), Annual, Secular (long-period, largest), Irregular (magnetic storms).
- **Isogonic lines** = equal declination ⭐; **Agonic line** = zero declination ⭐(distractor); **Isoclinic** = equal dip; **Aclinic** = zero dip (magnetic equator). ⚠️ classic confusion set.

## 3.5 Dip of Magnetic Needle — 🔁 3×

- Dip = vertical angle of needle below horizontal.
- ⭐ **Equator: dip = 0°** (🔁 2×). **Poles: dip = 90°** ⭐.
- Balancing weight/rider on needle compensates dip (N hemisphere: on S end of needle) 🎯.
- ⭐ Earth's magnetic field lines run **South to North** (geographically, external field enters at N magnetic pole)… ⚠️ PSC contradiction: Q170 answer "South to North", Q189 answer "north to south". Both appear! If options include both, prefer **south to north** for "lines of force of earth's magnetic field run generally from" phrasing; read stem carefully.

## 3.6 Prismatic vs Surveyor's Compass — ⚠️ TOP TRAP AREA (asked 4×)

| Feature | **Prismatic** | **Surveyor's** |
|---------|--------------|----------------|
| Graduation zero | **South end** ⭐ | **North & South ends** ⭐🔁2× |
| Graduations | 0–360° WCB, **inverted** (read via prism) | Quadrantal 0–90°, erect |
| Reading | Under prism, simultaneous with sighting | Directly at needle end, after sighting |
| Needle | Broad, attached to ring (floats with ring) | Edge-bar needle acts as index |
| 90° marked at | **West end** ⭐ (inverted ring) | E & W (E-W interchanged) |
| When needle points N, reading under prism | **0°** ⭐ |
| Tripod | Optional (can be hand-held) | Required |

- ⭐ Compass box made of **brass** (non-magnetic) — asked. Also aluminium.
- ⭐ **When the needle points north, prism reading = 0°** (because 0 is at south end + prism reads the near side).
- **Local attraction** (🔁 2×): due to **presence of magnetic materials** nearby ⭐ (iron poles, keys, wires, buttons — NOT instrument faults). Detection: FB−BB ≠ 180°. Correction: start from a line whose FB−BB = 180° exactly.
- ⭐ Inaccurate levelling of compass box = **personal error** (PSC answer B — the observer's handling; note some books call it instrumental ⚠️).

## 3.7 Included Angle from Two Bearings — 🧮 asked 5× (GUARANTEED)

**Template:** Angle between OA & OB = difference of their WCBs; if result > 180°, subtract from 360° **only if the question wants the internal angle — check options**.

- 🧮 Q61: OA 26°10′, OB 332°18′ → diff = 306°08′ → angle BOA = 360−306°08′ = **53°52′** ✓
- 🧮 Q85: AB 65°, AC 170° → BAC = 170−65 = **105°** ✓
- 🧮 Q112: AB N15°15′E, AC N87°10′E → 87°10′−15°15′ = **71°55′** ✓
- 🧮 Q139: OA 126°00′, OB 300°15′ → **174°15′** ✓ (here they wanted the direct difference!)
- 🧮 Q62 (angle at B from bearings of AB & BC): angle ABC = BB of AB − FB of BC = (75°10′+180°) − 100°20′ = **154°50′** ✓
  **Template for traverse station angle: Included angle at B = Bearing of BA − Bearing of BC.**

## 3.8 Bearings Around Closed Shapes

- 🧮 Q68: square ABCD, bearing AB = 52°45′ → each side turns 90°: BC = 142°45′, CD = **232°45′** ✓ (add 90° per side, mod 360).
- 🧮 Q76 (open traverse): FB of BC = FB of AB ± included angle ± 180°. Given FB AB = 240°30′, clockwise angle at B = 120°15′ → bearing BC = 240°30′+120°15′−180° = **180°45′** ✓
  **Template: Bearing of next line = Bearing of previous line + included (clockwise) angle − 180° (+360/−360 to normalize).**

## 3.9 🎯 High-Probability Variations

- Convert QB S40°E to WCB (=140°). Convert WCB 210° to QB (=S30°W).
- Local attraction numerical: given FB/BB table, find corrected bearings.
- Which stations are free of local attraction.
- Dip circle, aclinic/agonic definitions.
- Compass survey suitable when area is large & details many but accuracy low; unsuitable in magnetic-disturbance areas (iron ore, power lines).
