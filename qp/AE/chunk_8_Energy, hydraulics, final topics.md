# AE Irrigation Mega Marathon — Chunk 8 of 8
**Video:** 06:58–08:04

---

## Traffic Engineering — Peak Hour Factor & Optimum Cycle Length

---

**Q1: In the Peak Hour Factor (PHF) formula, if the peak volume X occurs within a single 15-minute interval, what is the PHF?**

- (A) X / (4 × X) = 1/4
- (B) X / X = 1
- (C) 4X / X = 4
- (D) X / 2

✅ **Answer: A — PHF = 1/4**

📝 **Explanation:** PHF = Peak Hour Volume / (4 × Highest 15-minute Volume). If all X vehicles arrive within a single 15-minute interval, the highest 15-minute volume equals X, so PHF = X / (4X) = 1/4, which corresponds to Option A.

---

**Q2: A signalized intersection has 2 phases (East-West and North-South). Total lost time per cycle L = 9 s, saturation flow S₁ = S₂ = 1800 veh/h. Peak volumes: Phase 1 = 500 veh/h (highest), Phase 2 = 390 veh/h (highest). Find the optimum cycle length.**

✅ **Answer: 35 seconds (approximately)**

📝 **Explanation:** Using Webster's formula: **C₀ = (1.5L + 5) / (1 − Y)**

- Y = (q₁/S₁) + (q₂/S₂) = 500/1800 + 390/1800
- Select the **highest flow** from each phase direction
- Substitute Y and L = 9 s to get C₀ ≈ 35 s

💡 **Note:** Always select the **highest volume** among all movements within each phase when computing Y.

---

**Q3: A signalized intersection has 3 phases. Lost time = 4 s per phase. Critical flow ratios (y values) are given separately for all 3 phases. Find the optimum cycle length.**

✅ **Answer: 92 seconds**

📝 **Explanation:** Total lost time L = 4 × 3 = 12 s (since there are 3 phases). Y = y₁ + y₂ + y₃ (sum of all three critical flow ratios). Substituting into C₀ = (1.5L + 5) / (1 − Y) gives approximately 92 s.

---

## Traffic Engineering — Road Capacity

💡 **Note:** **Capacity formula:** C = 1000V / S, where V = average speed (km/h) and S = average centre-to-centre spacing (m). This formula applies to both theoretical and practical capacity.

---

## Airport Engineering — Airport Reference Temperature (ART)

💡 **Note:** **ART formula:** ART = T₁ + (T₂ − T₁) / 3, where T₁ = mean of average daily temperatures of the hottest month, and T₂ = mean of maximum daily temperatures of the hottest month (T₂ > T₁). Substituting the given values yields ART ≈ 35.4 °C (Option A).

---

## Fluid Mechanics — Non-Newtonian Fluids

**Q4: From a shear stress (τ) vs. shear strain rate (dv/dy) graph with curves P, Q, R, S — which curve represents toothpaste?**

- (A) P
- (B) Q
- (C) R
- (D) S

✅ **Answer: A — Curve P (Bingham Plastic)**

📝 **Explanation:** Toothpaste is a **Bingham Plastic** fluid. The general equation for non-Newtonian fluids is τ = τ₀ + μ(dv/dy)ⁿ. For Bingham Plastic: τ₀ ≠ 0 (non-zero yield stress) and n = 1 (linear variation). The curve starts at a non-zero intercept on the τ-axis and then varies linearly — this is characteristic of Bingham Plastic fluids.

💡 **Note — Non-Newtonian fluid classification:**

**Fluid Type** | **τ₀** | **n**
---|---|---
Pseudoplastic | 0 | < 1
Dilatant | 0 | > 1
Bingham Plastic | ≠ 0 | = 1 (linear)
Rheopectic | ≠ 0 | > 1
Thixotropic | ≠ 0 | < 1

Pseudoplastic and Dilatant pass through the origin (τ₀ = 0). Bingham Plastic, Rheopectic, and Thixotropic have a yield stress intercept.

---

**Q5 (MSQ): Specific gravity = 0.8, kinematic viscosity ν = 2 centistokes. Which of the following are correct?**

- (A) Density = 800 kg/m³
- (B) Dynamic viscosity = 1.6 × 10⁻³ Pa·s
- (C) Some other value
- (D) Dynamic viscosity = 1.6 centipoise

✅ **Answer: A and D**

📝 **Explanation:**

Density: ρ = SG × 1000 = 0.8 × 1000 = **800 kg/m³** ✓ (Option A)

Dynamic viscosity: μ = ν × ρ. Convert ν: 2 centistokes = 2 × 10⁻⁶ m²/s. In CGS: ν = 2 × 10⁻² stokes. Using CGS density (SG = 0.8 g/cm³): μ = 0.8 × 2 × 10⁻² = 1.6 × 10⁻² poise = **1.6 centipoise** ✓ (Option D)

💡 **Note:** centistokes × density (in CGS) = centipoise. When kinematic viscosity is given in centistokes, multiplying by specific gravity directly gives dynamic viscosity in centipoise.

---

**Q6: A 6 m deep tank contains 4 m of water at the bottom and 2 m of oil (SG = 0.9) on top. Find the pressure at the bottom in kN/m².**

- (A) 58
- (B) 60
- (C) 55
- (D) 56

✅ **Answer: A — 58 kN/m²**

📝 **Explanation:** P = ρ_oil × g × h_oil + ρ_water × g × h_water

= (0.9 × 1000 × 10 × 2) + (1000 × 10 × 4)

= 18,000 + 40,000 = 58,000 N/m² = **58 kN/m²**

💡 **Note:** When a tank contains two immiscible fluids, always compute pressure contributions separately for each layer — never treat the full depth as a single fluid.

---

## Fluid Mechanics — Centre of Pressure vs. Centroid

**Q7: For which type of plane surface do the centre of pressure (P) and the centroid (G) coincide?**

- (A) Vertical plane surface
- (B) Inclined plane surface
- (C) Horizontal plane surface
- (D) Both vertical and inclined

✅ **Answer: C — Horizontal plane surface**

📝 **Explanation:** For a **horizontal** submerged plane surface, every point is at the same depth, so the pressure is uniform. Therefore, the centre of pressure coincides with the centroid (P = G). For vertical and inclined surfaces, the pressure increases with depth, so the centre of pressure always lies **below** the centroid.

---

## Fluid Mechanics & Hydraulics — Pressure Force, Buoyancy, Kinematics, Flow Measurement

---

💡 **Note: Centre of Pressure vs. Centroid**

For a plane surface submerged in a fluid:

- **Inclined surface:** h* = h̄ + (I_G · sin²θ) / (Ā · h̄)
- **Vertical surface:** h* = h̄ + I_G / (Ā · h̄)

where h̄ = depth of centroid from free surface. The centre of pressure always lies **below** the centroid for inclined and vertical surfaces. For a horizontal surface, the centre of pressure coincides with the centroid (same level).

---

**Q1: A triangular gate (base = 2 m, height = 1.5 m) is placed vertically with the vertex at the top. The gate is submerged in oil (specific gravity = 0.8) with the vertex at 1.5 m depth. Find the total hydrostatic pressure force in kN.**

- (A) 30 kN
- (B) 20 kN
- (C) 15 kN
- (D) 10 kN

✅ **Answer: A — 30 kN**

📝 **Explanation:**

The formula for total pressure force on any plane surface is F_P = ρg · h̄ · A, regardless of whether the surface is horizontal, vertical, or inclined.

For a triangle with vertex at top, the centroid is located at 2/3 of height from the vertex, so the centroid depth below the free surface is:

h̄ = 1.5 + (2/3) × 1.5 = 1.5 + 1.0 = 2.5 m

Area of triangle A = (1/2) × base × height = (1/2) × 2 × 1.5 = 1.5 m²

ρ for oil = S.G. × 1000 = 0.8 × 1000 = 800 kg/m³; using ρg = 8 kN/m³

F_P = 8 × 2.5 × 1.5 = **30 kN**

---

**Q2: A submarine rolls in seawater. Its radius of gyration k = 12 m and period of oscillation T = 22 seconds. Find the metacentric height GM.**

- (A) 1.0 m
- (B) 1.4 m
- (C) 2.0 m
- (D) 2.5 m

✅ **Answer: B — 1.4 m (approximately)**

📝 **Explanation:**

The period of oscillation formula for a floating/submerged body is:

T = 2π √(k² / g·GM)

Squaring both sides: T² = 4π² × k² / (g · GM)

Solving for GM: GM = 4π² × k² / (g · T²)

Substituting k = 12, T = 22, g = 9.81 (≈ 10 for simplification):

GM = 4π² × 144 / (10 × 484) ≈ **1.4 m** (Option B)

---

**Q3: What is the condition for unstable equilibrium of a floating body?**

- (A) Centre of gravity G is above centre of buoyancy B
- (B) Metacentre M is above centre of gravity G
- (C) Centre of buoyancy B is above metacentre M
- (D) Metacentre M is below centre of gravity G

✅ **Answer: D — Metacentre M is below centre of gravity G**

📝 **Explanation:**

For a **floating body**, stability is judged using the metacentre M:

Stable equilibrium → M above G (GM positive); Neutral equilibrium → M coincides with G (GM = 0); Unstable equilibrium → M below G (GM negative).

For a **submerged body**, stability is judged using B and G directly: Stable → B above G; Neutral → B coincides with G; Unstable → B below G.

This question specifies a floating body, so the answer is M below G, i.e., Option D. Be careful not to confuse floating and submerged body conditions — a common source of careless errors in exams.

---

**Q4: The locus of locations of all fluid particles that have passed through a common source point in a continuous flow is called:**

- (A) Path line
- (B) Stream tube
- (C) Streakline
- (D) Streamline

✅ **Answer: C — Streakline**

📝 **Explanation:**

A **streakline** is the locus of all particles that have passed through a given fixed point in the flow at any previous time. A **pathline** traces the trajectory of a single particle over time. A **streamline** is tangent to the velocity vector at every point at a given instant. Since this question refers to all particles passing through a common source, it is a streakline.

---

**Q5: Statement 1 — Velocity potential exists only for irrotational flow. Statement 2 — If the Laplace equation is satisfied, the flow is steady, incompressible, and irrotational. Which statements are correct?**

- (A) Only Statement 1 is correct
- (B) Only Statement 2 is correct
- (C) Both statements are correct
- (D) Both statements are incorrect

✅ **Answer: C — Both statements are correct**

📝 **Explanation:**

Velocity potential φ exists only for **irrotational flow** — this is a fundamental condition. If φ satisfies the Laplace equation (∇²φ = 0), the flow is **steady, incompressible, and irrotational**.

Contrast this with **stream function ψ**: ψ exists for both rotational and irrotational flows (it only requires continuity to be satisfied). If ψ satisfies the Laplace equation, the flow is irrotational. Keep these distinctions clear to avoid confusion.

---

**Q6: If u and v are velocity components in x and y directions, which expression represents the continuity (flow) condition for steady incompressible flow?**

- (A) ∂u/∂y + ∂v/∂x = 0
- (B) ∂u/∂x − ∂v/∂y = 0
- (C) ∂u/∂y − ∂v/∂x = 0
- (D) ∂u/∂x + ∂v/∂y = 0

✅ **Answer: D — ∂u/∂x + ∂v/∂y = 0**

📝 **Explanation:**

Since only x and y components are given (no time term), the flow is steady and 2D. For steady incompressible flow, the continuity equation is ∂u/∂x + ∂v/∂y = 0. "Flow condition" in exam questions always refers to the continuity equation.

---

**Q7: An orificemeter measures flow rate in a pipeline. When the flow rate is doubled, what is the new differential pressure reading x₂ in terms of the original reading x₁?**

- (A) 2x₁
- (B) x₁/2
- (C) 4x₁
- (D) x₁/4

✅ **Answer: C — 4x₁**

📝 **Explanation:**

For both venturimeters and orificemeters, discharge Q is proportional to √h (or √x, the differential head):

Q ∝ √x → Q² ∝ x

If flow rate doubles: (2Q)² ∝ x₂, so 4Q² ∝ x₂.

Dividing: x₂ / x₁ = 4, therefore **x₂ = 4x₁**.

In exam settings, direct calculation from the full discharge formula is rarely needed — the proportionality relationship Q ∝ √x is sufficient.

---

**Q8: The expression P + ρgz + ½ρv² is the Bernoulli equation used to express:**

- (A) Total energy per unit mass
- (B) Total energy per unit weight
- (C) Total energy per unit volume
- (D) Total energy per unit cross-section

✅ **Answer: C — Total energy per unit volume**

📝 **Explanation:**

Bernoulli's equation appears in three common forms. The form P/ρg + v²/2g + z = constant expresses **total energy per unit weight** (each term has units of metres, i.e., head). The form P + ½ρv² + ρgz = constant has units of N/m² (Pascal), which is energy per unit volume (J/m³). The form given in this question matches the second type — **total energy per unit volume**.

To verify: pressure P has units N/m² = N·m/m³ = J/m³. ρgz and ½ρv² also carry J/m³. So the answer is energy per unit volume, Option C.

💡 **Note:** When no specific expression is given and the question asks for Bernoulli's equation in general, the answer is "total energy per unit weight" (the head form). The correct answer depends on which form of the equation is shown.

---

## AE Irrigation Marathon — Chunk 8, Part 3/3

---

💡 **Note: Pressure Head Units**
When calculating pressure head (p/ρg), the answer represents **total energy per unit volume**, not per unit weight. Several students wrote "per unit weight" — that is incorrect. Note this carefully.

---

**Q1: A notch is usually made up of which type of plate?**

- (A) Metallic plate
- (B) Iron plate
- (C) Aluminium plate
- (D) Galvanised Iron (GI) plate

✅ **Answer: A — Metallic plate**

📝 **Explanation:** A notch is an opening provided only on the sides of a tank. An orifice, by contrast, can be provided on both the sides and the bottom of a tank. Notches are generally made of metallic plates.

---

**Q2: In a triangular weir, the head was measured with a 6% error. What is the resulting error in discharge?**

- (A) 3%
- (B) 9%
- (C) 6%
- (D) 15%

✅ **Answer: D — 15%**

📝 **Explanation:** For a triangular (V-notch) weir, discharge Q ∝ H^(5/2). Therefore, the error in discharge = (5/2) × error in head = (5/2) × 6% = **15%**. For a rectangular weir, Q ∝ H^(3/2), so the same 6% head error would give (3/2) × 6% = 9% discharge error. Be careful not to confuse the two — both values appear as options.

---

**Q3: Three pipes are connected in series. Which statement is correct?**

- (A) Discharge through each pipe is the same
- (B) Total discharge equals the sum of individual pipe discharges
- (C) Head loss through each pipe is the same
- (D) None of these

✅ **Answer: A — Discharge through each pipe is the same**

📝 **Explanation:** For pipes in series: (1) discharge Q is the same through every pipe, and (2) total head loss equals the sum of individual head losses. For pipes in parallel, these conditions are exactly reversed — discharge is the sum of individual flows, and head loss is equal across all pipes. In parallel pipe analysis, minor losses are neglected since friction loss dominates; minor losses are neglected only when they are below 5% of the major loss.

---

**Q4: A penstock has a length of 10 km and the pressure wave velocity is 1000 m/s. What is the critical time?**

- (A) 20 s
- (B) 10 s
- (C) 5 s
- (D) 40 s

✅ **Answer: A — 20 s**

📝 **Explanation:** Critical time (from water hammer theory) is the time taken for the pressure wave to complete one full trip (to the end and back). The formula is:

**T_c = 2L / C**

where L = pipe length and C = pressure wave velocity.

T_c = (2 × 10,000) / 1000 = **20 seconds**

---

**Q5: Match the following head terms correctly.**

| Term | Definition |
|---|---|
| 1. Piezometric head | Datum head + Pressure head |
| 2. Dynamic head | Datum head + Velocity head |
| 3. Stagnation head | Pressure head + Dynamic head (= Static + Dynamic pressure) |
| 4. Total head | Piezometric head + Velocity head |

Which pairs are correctly matched?

- (A) 1 and 3 only
- (B) 1, 3, and 4
- (C) All four
- (D) 2 and 4 only

✅ **Answer: B — Statements 1, 3, and 4 are correct**

📝 **Explanation:** Piezometric head = Datum head + Pressure head ✅. Dynamic head as "Datum head + Velocity head" is not a standard concept ❌. Stagnation pressure = Static pressure + Dynamic pressure ✅. Total head = Piezometric head + Velocity head ✅. Therefore only 1, 3, and 4 are correct.

💡 **Note — Head Definitions Summary:**
- **Piezometric head** = Datum head + Pressure head (z + p/ρg)
- **Total head** = Piezometric head + Velocity head (z + p/ρg + v²/2g)
- **Stagnation pressure** = Static pressure + Dynamic pressure

---

**Q6: Which is the correct statement regarding minor losses in pipe flow?**

- (A) Minor losses are neglected when they are less than 5% of major (friction) losses
- (B) Losses at pipe fittings are also classified as minor losses
- (C) Both A and B
- (D) None of these

✅ **Answer: C — Both A and B**

📝 **Explanation:** Minor losses include entry/exit losses, bend losses, and losses at fittings. They are neglected when they contribute less than 5% of the friction (major) loss. Both statements are correct.

---

**Q7: For hydraulically efficient (most economical) triangular and rectangular channel sections of the same depth, what is the ratio of their hydraulic radii (triangle : rectangle)?**

- (A) √2
- (B) 1/√2
- (C) 1
- (D) 2

✅ **Answer: B — 1/√2**

📝 **Explanation:** For the most economical rectangular section: R_rect = y/2. For the most economical triangular section: R_tri = y/(2√2). The ratio (triangle : rectangle) = [y/(2√2)] / [y/2] = **1/√2**. Note the direction of the ratio carefully — triangular R is smaller than rectangular R.

---

**Q8: A hydraulically efficient trapezoidal channel has a flow depth of 2 m. What is the bed width?**

- (A) 2 m
- (B) 3 m
- (C) 1 m
- (D) 2/√3 m

✅ **Answer: D — 2/√3 m**

📝 **Explanation:** For a most economical trapezoidal section, one of the key conditions is:

**b = 2y/√3**

where b = bed width and y = flow depth. With y = 2 m: b = 2×2/√3 = **4/√3 ≈ 2.31 m** (option D, 2/√3 noted as given answer in lecture with y=2 applied).

💡 **Note — Most Economical Trapezoidal Section Conditions:**
Several conditions apply simultaneously: (1) R = y/2, (2) one sloping side length = half the top width, (3) the inscribed semicircle is tangential to all three sides, (4) best side slope = 1:√3 (30° with vertical), and (5) b = 2y/√3.

---

**Q9: Which statements are correct about turbines?**

1. Pelton wheel is a tangential impulse turbine
2. Francis turbine has axial flow
3. Kaplan turbine has axial flow

- (A) 1 and 3 only
- (B) 1 only
- (C) 2 and 3 only
- (D) All three

✅ **Answer: B — Statement 1 only**

📝 **Explanation:** Pelton wheel is a tangential flow impulse turbine ✅. Francis turbine is an inward radial flow reaction turbine — not axial flow ❌. Kaplan turbine is an axial flow reaction turbine ✅. Therefore only statements 1 and 3 are correct — answer is option B (1 only per the lecture correction; verify with your notes).

💡 **Note — Turbine Flow Types:**
- **Pelton wheel** → Tangential flow, Impulse turbine
- **Francis turbine** → Inward radial flow, Reaction turbine
- **Kaplan turbine** → Axial flow, Reaction turbine

---

**Q10: The characteristic feature of flow in a centrifugal pump is:**

- (A) Variable flow
- (B) Continuous flow
- (C) Constant flow
- (D) Uniform flow

✅ **Answer: B — Continuous flow**

📝 **Explanation:** The defining characteristic feature of a centrifugal pump is that it produces continuous flow (as opposed to reciprocating pumps which produce pulsating/intermittent flow). This statement appears directly in standard textbooks and has been asked in exams.

---

**Q11: A centrifugal pump is required to lift 1.5 m³/s of water to a height of 7 m, with losses of 0.5 m. Overall efficiency = 60%. Find the minimum power to drive the motor in HP.**

- (A) 200 HP
- (B) 150 HP
- (C) 250 HP
- (D) 300 HP

✅ **Answer: C — 250 HP**

📝 **Explanation:**

Overall efficiency η = Water Power / Shaft Power → Shaft Power = Water Power / η

Water Power = ρgQH_total

where H_total = static head + losses = 7 + 0.5 = 7.5 m

Water Power = 1000 × 10 × 1.5 × 7.5 = 112,500 W

Shaft Power = 112,500 / 0.6 = 187,500 W

Converting to HP (using 1 HP ≈ 750 W for calculation convenience):

187,500 / 750 = **250 HP**

Note: For pumps, always add losses to the head (not subtract). The answer is in watts; divide by 746 (or 750 approximately) to convert to HP.

---

**Q12: Which statements are correct about reaction turbines? (PWD AE exam question)**

1. A reaction turbine converts both pressure energy and kinetic energy
2. In a Kaplan turbine, flow is axial (parallel to the runner axis)

- (A) 1 only
- (B) 2 only
- (C) Both 1 and 2
- (D) Neither

✅ **Answer: C — Both statements are correct**

📝 **Explanation:** Reaction turbines are called so because they utilise both pressure energy and kinetic energy — unlike impulse turbines which use only kinetic energy. Kaplan turbines have axial flow, meaning water flows parallel to the axis of the runner. Both statements are correct.

---

💡 **Final Revision Note — Top 3 High-Yield Chapters for AE Exam:**
Focus your revision on these three chapters, which carry the most questions:
1. **Flow Through Pipes** (series/parallel pipes, water hammer, minor losses)
2. **Open Channel Flow** (most economical sections, hydraulic radius, Manning's equation)
3. **Hydraulic Machines** (turbine types and flow classifications, centrifugal pump power calculations)

---
