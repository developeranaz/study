# 04 — Levelling ⭐ THE BIGGEST TOPIC

*KPSC weight: ~35 direct Qs (+14 contouring in file 05) ≈ 6% of the ENTIRE 800-question paper. Master this file first.*

## 4.1 Basic Definitions

| Term | Meaning |
|------|---------|
| **Levelling** | Art of determining relative **heights/elevations** of points ⭐ (asked as definition) |
| Level surface | Surface parallel to mean spheroidal surface (normal to plumb line everywhere) |
| Level line | Line on a level surface (curved) |
| Horizontal line | Tangent to level line at a point (straight) |
| **Datum** | Reference surface (India: MSL) |
| **Reduced Level (RL)** | Elevation w.r.t. datum |
| **Benchmark (BM)** | Fixed point of KNOWN RL |
| **MSL** | Mean of **hourly** tides over **19 years** ⭐⚠️ (Q172 = 19; Q124 accepted ~20 — prefer 19) |

**Benchmark types 🎯:** GTS (by Survey of India, precise, on MSL datum), Permanent, Arbitrary, Temporary.

**Sight types:**
- **Back Sight (BS):** FIRST reading after setup — on point of KNOWN RL. (+ve sight)
- **Fore Sight (FS):** LAST reading before shifting — on point whose RL is to be found. (−ve sight)
- **Intermediate Sight (IS):** all readings between BS and FS.
- **Change Point (CP):** point receiving both FS (from old setup) and BS (from new setup).
- **Height of Instrument (HI):** RL of the line of collimation = RL + BS.

## 4.2 RL Computation — 🧮 THE #1 GUARANTEED NUMERICAL (asked 6×)

### Height of Instrument (Collimation) Method
```
HI = RL(known point) + BS
RL(new point) = HI − FS (or − IS)
```
- 🧮 Q57: BM RL 100.00, BS 2.350 at A, FS 0.420 at C → HI = 102.350; RL(C) = 102.350−0.420 = **101.930** ✓
- 🧮 Q69: BM 200.00, BS 2.685, FS 1.305 → RL = 200+2.685−1.305 = **201.380** ✓
- 🧮 Q87: BM 100.00, BS 2.350, FS 1.520 → **100.830** ✓
- 🧮 Q133: BM 100.00, BS 1.745, FS 0.820 → **100.925** ✓
- 🧮 Q142: BM 500, BS 2.685, FS 1.345 → **501.340** ✓
- 🧮 Q73 (two-part): BM 250.000, BS 2.985, FS 1.845 → HI = **252.985**, RL = **251.140** ✓
**One-line shortcut: RL_new = RL_BM + BS − FS. Just add-subtract; ignore drama in the wording.**

### Rise & Fall Method
```
Rise/Fall between consecutive points = (previous reading) − (next reading)
positive → Rise; negative → Fall
RL(new) = RL(old) + Rise (or − Fall)
```
- 🧮 Q43: BS on BM = 2.045, IS = 2.68 → 2.045−2.68 = −0.635 → **0.635 FALL** ✓

### Arithmetic Checks — ⭐ asked
| Method | Check |
|--------|-------|
| HI method | ΣBS − ΣFS = Last RL − First RL |
| Rise & Fall | ΣBS − ΣFS = ΣRise − ΣFall = Last RL − First RL (3-way, checks IS too) |

- ⭐ Q80: In perfect *check levelling* (closed back on BM), the arithmetic check result = **ZERO**.
- ⚠️ HI method does NOT check intermediate sights; Rise & Fall does (safer but slower). 🎯 classic question.

## 4.3 Types of (Direct) Levelling — definitions asked

| Type | Purpose |
|------|---------|
| Simple levelling | One setup, two points |
| Differential/Compound | Several setups for distant points |
| **Fly levelling** | ⭐ "solely to determine difference in elevation of two points regardless of horizontal positions" (Q197 answer); rapid, only BS & FS, for connecting/checking |
| **Check levelling** | Run at end of day to check day's work; closes on starting BM ⭐ |
| **Profile / Longitudinal-section levelling** | Along an alignment (roads, rails, sewers) |
| Cross-sectioning | At right angles to alignment |
| **Reciprocal levelling** | Two setups across a river — eliminates curvature, refraction & collimation errors 🎯 near-certain future Q |
| **Precise levelling** | High accuracy; permissible error **± 3√K mm** ⭐ (Q13) |
| Barometric / Hypsometric | By pressure / boiling point (indirect) 🎯 |

**Permissible closing errors (E in mm, K in km) — memorize the ladder:**
| Class | E |
|-------|---|
| Rough levelling | **± 96√K** ⭐ (Q143 answer; some books ±100√K) |
| Ordinary | ± 24√K |
| Accurate | ± 12√K |
| Precise | ± 3√K ⭐ |

## 4.4 Plotting Sections — ⚠️ TRAP PAIR (both asked)

- **Longitudinal section (profile):** vertical scale **enlarged 10×** horizontal ⭐ (to make elevations visible).
- **Cross-section:** vertical and horizontal scales **kept EQUAL** ⭐ (Q58).

## 4.5 Levels (Instruments)

| Level | Key feature |
|-------|-------------|
| **Dumpy level** | Telescope rigidly fixed to vertical spindle; **4 fundamental lines** ⭐ (Q141) |
| Wye (Y) level | Telescope removable from Y-supports |
| Tilting level | Telescope tilts about horizontal axis; quick setup per sight |
| Auto level | Compensator (pendulum) auto-levels line of sight 🎯 |

**Fundamental lines of a dumpy level (4) ⭐:** (1) line of collimation, (2) axis of bubble tube, (3) axis of telescope, (4) vertical axis. Permanent adjustment relation: line of collimation ∥ bubble-tube axis (two-peg test 🎯 very likely).
- **Levelling head parts:** trivet (lowest plate), **tribrach (upper plate)** ⭐ (Q83 answer: "Tribarch"), foot screws (3 in modern).
- Telescope: objective forms image on cross-hair plane — image is **real and inverted** ⭐ (Q195); eyepiece magnifies both. Parallax = image not on cross-hair plane; removed by focusing objective + eyepiece 🎯.

## 4.6 Levelling Staff — ⭐ number facts

- **Least count of metric levelling staff = 5 mm** ⭐ (graduations 5 mm thick).
- **Subdivisions per metre = 200** ⭐ (Q60).
- Self-reading staves: solid (3 m one piece), folding (4 m two pieces), **telescopic (4 m/5 m, three pieces: 4 m = 1.5+1.5+1 sliding)**.
- **Target staff used for LONG sights** ⭐ (Q42) — staffman moves target; for sights > ~100 m.
- **Least count of stadia rod = 5 mm (0.005 m)** ⭐ (Q45).

## 4.7 Curvature & Refraction — 🧮 asked 5× (GUARANTEED)

| Correction | Formula (m; D in km) | Sense |
|------------|---------------------|-------|
| Curvature Cc | **0.0785 D²** | objects appear **lower** ⭐ (Q196); correction is −ve to staff reading |
| Refraction Cr | **0.0112 D²** ⭐🔁2× | opposite to curvature; = **1/7 of Cc** |
| **Combined** | **0.0673 D²** ⭐🔁2× | = **6/7 of Cc** ⭐ (Q16) |

- 🧮 Q59: D = 800 m = 0.8 km → Cc = 0.0785 × 0.64 = **0.05 m** ✓
- 🧮 Q173: D = 3 km → combined = 0.0673 × 9 = **0.6057 m** ✓
- Distance to visible horizon: D = 3.8553√h km (h in m) 🎯 likely variation.
- Curvature effect eliminated by: reciprocal levelling / equalizing BS & FS distances ⭐🎯.

## 4.8 Common Errors in Levelling 🎯

- Collimation error → eliminated by **equal BS and FS distances** (near-certain future Q).
- Staff not vertical → reading too LARGE (take lowest reading while waving staff).
- Bubble not centred = most serious ordinary error.
- Earth curvature/refraction: negligible for short equal sights.
- Settlement of tripod/CP → cumulative.

## 4.9 Misc Asked Facts

- ⭐ **Boning rods & sight rails** — used for setting out **gradients/sewers & excavation levels** (Q149 was corrupt, but know this).
- ⭐ **Ceylon ghat tracer** — setting out a **grade contour / gradients** on hilly ground (Q72 ✓; it hangs from a stand, weighted tube).
- Datum adopted in India = MSL (Mumbai). GTS benchmarks established w.r.t. it.
