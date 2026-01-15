# Geotechnical Engineering: High-Yield Exam Formulas & Concepts

## 1. Soil Properties & Classification

### 1.1 Relative Density (Cohesionless Soils)

**Used Quantities**

| Symbol | Meaning |
| :--- | :--- |
| $e$ | In-situ void ratio |
| $e_{max}$ | Void ratio in loosest state |
| $e_{min}$ | Void ratio in densest state |

**Formulas**

* **Relative Density ($D_r$):**
    $$D_r = \frac{e_{max} - e}{e_{max} - e_{min}}$$

* **Void Ratio from Phase Data:**
    $$e = \frac{G_s \gamma_w}{\gamma_d} - 1$$

> **Concept Trigger:**
> * Applicable **only** to cohesionless soils (sands/gravels).
> * Always convert density values ($\gamma$) to void ratios ($e$) before calculating $D_r$.

---

### 1.2 Phase Relationships (Partially Saturated Soil)

**Core Relations**

| Relation | Formula |
| :--- | :--- |
| **Water Content** | $w = \frac{S e}{G_s}$ |
| **Volume of Voids** | $V_v = n V$ |
| **Volume of Air** | $V_a = V_v (1 - S)$ |
| **Volume of Water** | $V_w = S V_v$ |
| **Weight of Water** | $W_w = \gamma_w V_w$ |

> **Concept Trigger:**
> * **"Rule of 3":** Given any three of $\{w, S, e, G_s\}$, the fourth can be found using $Se = wG_s$.
> * **Saturation Problems:** Calculate the volume of air voids that needs to be filled with water.

---

### 1.3 Clay Activity

**Definition**

* **Activity ($A$):**
    $$A = \frac{PI}{\% \text{ clay fraction}}$$

* **Plasticity Index ($PI$):**
    $$PI = LL - PL$$

**Interpretation Table**

| Activity Value | Classification | Swell Potential |
| :--- | :--- | :--- |
| $< 0.75$ | Inactive | Low |
| $0.75 - 1.25$ | Normal | Medium |
| $> 1.25$ | Active | High |

> **Concept Verification:**
> * Statement: "Activity physically signifies swell potential." $\rightarrow$ **TRUE**

---

## 2. Permeability & Seepage

### 2.1 Flow Net & Piping (Quick Condition)

**Key Formulas**

* **Critical Hydraulic Gradient ($i_c$):**
    $$i_c = \frac{G_s - 1}{1 + e}$$

* **Exit Gradient ($i_e$):**
    $$i_e = \frac{\Delta H}{N_d \times L_{element}}$$

* **Factor of Safety ($FOS$) against Piping:**
    $$FOS = \frac{i_c}{i_e}$$

> **Concept Trigger:**
> * For piping, boiling, or quicksand problems $\rightarrow$ **Check Exit Gradient**.
> * Void ratio ($e$) is often derived using the Critical Gradient relation first.

---

### 2.2 Permeability Test Selection

| Soil Type | Recommended Test |
| :--- | :--- |
| **Clay** (Low $k$) | **Falling Head Test** |
| **Sand** (High $k$) | Constant Head Test |

---

### 2.3 Anisotropic Soil (Flow Net Scaling)

**Transformation Formula**

To convert anisotropic soil to isotropic for plotting:
$$z' = z \sqrt{\frac{k_H}{k_V}}$$

> **Concept Trigger:**
> * **Vertical dimension ($z$) is scaled.**
> * Horizontal dimension ($x$) remains unchanged.

---

## 3. Consolidation & Settlement

### 3.1 Time–Settlement Relation

**Formulas**

* **Degree of Consolidation ($U$):**
    $$U = \frac{S_t}{S_c}$$

* **Time Factor ($T_v$):**
    $$T_v = \frac{C_v t}{H_d^2}$$

**Key Values (Memorize)**

| Degree of Consolidation ($U$) | Time Factor ($T_v$) |
| :---: | :---: |
| **50%** | **0.197** |
| 60% | 0.286 |

> **Concept Trigger:**
> * **Drainage Path ($H_d$):**
>     * Double drainage (Top & Bottom): $H_d = H_{layer}/2$
>     * Single drainage: $H_d = H_{layer}$

---

### 3.2 Coefficient of Permeability from Consolidation

$$k = C_v \cdot m_v \cdot \gamma_w$$

---

### 3.3 Sampler Disturbance

**Inside Clearance Ratio (ICR)**

$$ICR = \frac{D_i - D_c}{D_c} \times 100$$
*(Where $D_i$ is tube inner diameter, $D_c$ is cutting edge inner diameter)*

> **Concept Trigger:**
> * Used to ensure minimal disturbance.
> * Typically requires simple substitution to find $D_c$.

---

## 4. Shear Strength

### 4.1 Triaxial Test – Failure Plane

**Failure Plane Inclination ($\theta$)**

$$\theta = 45^\circ + \frac{\phi}{2}$$

> **Concept Trigger:**
> * Applies to **drained conditions**.
> * $\theta$ is measured relative to the **major principal plane** (horizontal plane in standard vertical loading).

---

### 4.2 Skempton’s Pore Pressure Parameter B

$$B = \frac{\Delta u}{\Delta \sigma_3}$$

> **Concept Trigger:**
> * Relates cell pressure change ($\Delta \sigma_3$) to pore pressure response ($\Delta u$).
> * For fully saturated soil, $B \approx 1$.

---

### 4.3 Test Selection for Stability

| Stability Condition | Appropriate Test |
| :--- | :--- |
| **Long-term stability** (Drained) | **CD (Consolidated Drained) Test** |
| Short-term stability (Undrained) | UU or CU Test |

---

## 5. Earth Pressure & Retaining Walls

### 5.1 Rankine Failure Plane Inclinations

| Condition | Failure Plane Angle (from Horizontal) |
| :--- | :--- |
| **Active** | $$45^\circ + \frac{\phi}{2}$$ |
| **Passive** | $$45^\circ - \frac{\phi}{2}$$ |

---

### 5.2 Wall Movement & Friction

> **Concept Trigger:**
> * **Passive Condition:** Wall moves **towards** the backfill.
> * **Wall Friction:** Mobilizes in the **upward** direction along the wall surface.
> * **Statement Status:** **TRUE**

---

## 6. Foundations

### 6.1 Bearing Capacity (Pure Clay)

**Terzaghi’s Net Ultimate Capacity**

$$q_{nu} = 5.7 c_u$$

> **Concept Trigger:**
> * Assumption: $\phi = 0$ (Undrained).
> * **Water Table:** Fluctuations have **NO effect** on the *net* ultimate capacity of pure clay.

---

### 6.2 Contact Pressure Distribution

| Soil Type | Pressure Distribution Shape |
| :--- | :--- |
| **Cohesionless (Sand)** | Maximum at Center, Zero at Edges |
| **Cohesive (Clay)** | Maximum at Edges, Minimum at Center |

---

### 6.3 Meyerhof Bearing Capacity

**General Equation**

$$q_u = c N_c + \gamma D_f N_q + 0.5 \gamma B N_\gamma$$

**Allowable Load**

$$q_{allow} = \frac{q_u}{FOS}$$

---

### 6.4 Pile Uplift Capacity (Clay)

**Skin Friction Resistance**

$$Q_s = \alpha \cdot c_u \cdot A_s$$
*(Where $\alpha$ is adhesion factor, $A_s$ is surface area $\pi D L$)*

**Net Uplift Capacity**

$$Q_{u,net} = Q_s - W_{pile}$$
*(Depending on convention, pile weight aids resistance against uplift)*

---

## 7. Slope Stability

### 7.1 Infinite Slope (Cohesionless + Seepage)

**Factor of Safety**

$$FOS = \frac{\tan \phi'}{\tan \beta}$$

**Critical Stability Condition ($FOS = 1$)**

$$\phi' = \beta$$

> **Concept Trigger:**
> * Assumes seepage is parallel to the slope.
> * Independent of soil depth ($z$) for cohesionless soil.

---

### 7.2 Finite Slope (Homogeneous Clay, $\phi = 0$)

**Taylor’s Stability Number ($N_s$)**

$$N_s = \frac{c_u}{\gamma H FOS}$$

> **Concept Trigger:**
> * Specific to homogeneous clay slopes.
> * Often requires reading $N_s$ from charts based on slope angle and depth factor.

---

## Final Review and Structure Summary

* **Content Precision:** All narration removed; content strictly limited to formulas, definitions, and logic required for solving the cited GATE problems.
* **Formatting:**
    * **Tables:** Used for quick comparisons (e.g., Test Selection, Contact Pressure).
    * **Math:** LaTeX (`$$`) used for all calculation formulas.
    * **Hierarchy:** Clear `#` to `###` structure mapping to the user's specific topics.
* **Exam Utility:** "Concept Triggers" added to highlight common exam traps (e.g., drainage path doubling, unit weight conversions).
* **Compliance:** Output is a single, clean Markdown block with no external UI elements.
