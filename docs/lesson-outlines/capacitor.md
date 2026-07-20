# Capacitance and Capacitors lesson outline

<!--
Lesson control block

slug: capacitor
lessonId: ea.lesson.capacitor.v0.1
registryStatus: review-ready
primaryTopicId: ea.component.capacitor
coveredTopicIds:
  - ea.component.capacitor
  - ea.em.capacitance
  - ea.circuit.element.capacitor-ideal
prerequisiteLessons:
  - what-is-electricity
  - charge
  - voltage
  - current
  - resistance
  - series-parallel
  - power-energy
successorLessons:
  - diode
  - ac-basics
  - rc-filters
  - inductance-inductors
  - power-supplies
safetyLevel: moderate
sourceStatus: verified
requiresQualifiedReview: true
requiresThailandContext: true
publicLanguages: en, th
lastSourceReview: 2026-07-20
nextSourceReview: 2027-01-20
-->

Implementation status: bilingual implementation candidate created on 2026-07-20. Public-facing content lives in `electrical-atlas-site/src/content/lessons/en/capacitor.mdx` and `electrical-atlas-site/src/content/lessons/th/capacitor.mdx`; route wrappers and an interactive field model live in the Astro site. Exact public-deployment verification passed for commit `182a8b0`. This status does **not** grant Thai-language, qualified-human, or publication approval.

## 1. Purpose and learning outcome

This lesson must stop three closely related meanings from becoming one vague idea:

1. **Capacitance** is a physical quantity that relates separated terminal charge to voltage under stated conditions.
2. **A capacitor** is a physical two-terminal component designed to provide capacitance.
3. **An ideal capacitor** is a circuit model defined by a charge-voltage relationship and its resulting current-voltage relationship.

By the end, a learner should be able to explain a capacitor physically, use the elementary equations without treating them as universal, recognize common real-component limits, and understand why a disconnected capacitor may still require a stored-energy safety assessment.

## 2. Core mental model

A capacitor has two conductors separated by a dielectric. An external source redistributes charge through the wires: one terminal has `+q` and the other `-q` in the ideal two-terminal model. The dielectric does not become a bridge through which ordinary conduction electrons travel. Instead, an electric field exists in the dielectric, and the material can polarize.

The complete ideal two-terminal capacitor remains net neutral because `(+q) + (-q) = 0`. The component stores energy in its electromagnetic configuration, commonly described in this electrostatic model as energy in the electric field—not as a container full of electrons in the dielectric.

## 3. Required distinctions and equations

### Charge-voltage relation

Choose `v` as the voltage of one terminal relative to the other and `q` as the charge on that referenced positive terminal. For an ideal linear capacitor with constant capacitance:

`q = Cv`

The other terminal carries `-q`. Charge and voltage are not independent controls once `C` and the sign convention are fixed.

### Geometry model

For two large parallel conducting plates, a uniform linear dielectric, negligible fringing, and plate separation much smaller than the plate dimensions:

`C ≈ εA/d`

This equation is a bounded approximation, not a universal formula for every capacitor shape, dielectric, field strength, temperature, or frequency.

### Stored energy

For a fixed, linear capacitance charged quasistatically from zero voltage:

`U = ½Cv² = q²/(2C) = ½qv`

The first form is the beginner focus. Nonlinear, voltage-dependent, hysteretic, or time-varying devices require the more general work integral and their own models.

### Current-voltage relation

Current is generally related to terminal charge by:

`i = dq/dt`

Under the passive sign convention—current entering the terminal whose voltage is referenced positive—and for constant `C`:

`i = C dv/dt`

If `C` varies or the device is nonlinear, `i = C dv/dt` is insufficient by itself.

### Ideal series-RC transient

For an initially uncharged ideal capacitor charged by an ideal DC source `V_s` through an ideal resistor `R` at `t = 0`:

`v_C(t) = V_s[1 - e^(-t/RC)]`

For an initial capacitor voltage `V_0` discharged only through `R`:

`v_C(t) = V_0e^(-t/RC)`

The time constant is `τ = RC`. After `5τ`, the ideal charging curve has reached about `99.3%` of its final value; it is not mathematically complete. These equations do not automatically describe source resistance, ESR, leakage, nonlinear capacitance, switching arcs, or a real discharge procedure.

## 4. Required lesson sequence

1. Define capacitance, capacitor, and ideal capacitor separately.
2. Show the physical structure: conductors, terminals, dielectric, package.
3. Explain equal and opposite terminal charge, complete-device neutrality, field formation, and dielectric polarization.
4. Derive the learner-facing meanings of `q = Cv`, `C ≈ εA/d`, and `U = ½Cv²`, including assumptions.
5. Use the interactive model to vary only capacitance and voltage while deriving charge and energy.
6. Explain `i = dq/dt`, `i = C dv/dt`, sign convention, and ideal RC transients.
7. Introduce uses, component families, ratings, and nonidealities.
8. Correct common misconceptions.
9. Establish the stored-energy, polarity, mains, and qualified-work boundary.
10. Add a technical-only explanation of displacement current.
11. State the Thai curriculum and product-standard context without turning it into installation guidance.

## 5. Interactive visual specification

The first interactive should use only two independent controls:

- capacitance in microfarads;
- magnitude of terminal voltage in volts.

It should derive:

- charge magnitude on each plate, `|q| = C|v|`;
- stored energy, `U = ½C|v|²`;
- complete-device net charge, `0` in the ideal two-terminal model.

The diagram should show labelled plates, equal-and-opposite charge symbols, field direction, and symbolic dielectric polarization. It must not animate electrons crossing the dielectric. It must include a text transcript and explain that plate spacing, area, material, fringing, leakage, ESR, ESL, breakdown, temperature, frequency, and nonlinear effects are outside the interactive model.

## 6. Real-device scope

Introduce, without trying to teach selection in full:

- ceramic capacitors;
- film capacitors;
- aluminium electrolytic capacitors;
- tantalum electrolytic capacitors;
- supercapacitors as a distinct high-capacitance family.

Ratings and behaviours to name:

- nominal capacitance and tolerance;
- rated voltage and polarity where applicable;
- leakage current;
- equivalent series resistance (`ESR`);
- equivalent series inductance (`ESL`);
- ripple-current and temperature limits;
- frequency and voltage dependence;
- dielectric absorption;
- lifetime and environmental limits;
- impulse, inrush, and application-specific ratings.

The lesson must say that a type name alone is not a complete selection rule. Datasheets and the exact circuit/application determine suitability.

## 7. Applications to introduce

- local decoupling and bulk energy support;
- signal coupling and DC bias separation;
- RC timing and filtering;
- resonant networks with inductors;
- snubbers and interference suppression;
- sensing and capacitive touch;
- motor start/run applications using specifically rated products;
- short-term energy storage and pulse delivery.

The phrase “a capacitor blocks DC and passes AC” may appear only as a misconception to refine: an ideal capacitor has zero steady-state current after a DC transient, while a changing voltage produces current; the complete circuit and frequency still determine what passes.

## 8. Failure and safety boundaries

Safety level: **moderate**.

Required public boundaries:

- A capacitor can retain energy after its source is removed; “off” and “unplugged” do not prove zero voltage or zero stored energy.
- There is no universal safe waiting time or discharge method for all equipment.
- Wrong polarity, overvoltage, excessive ripple current, overheating, mechanical cracking, ageing, or using the wrong product class can cause leakage, short circuit, heating, venting, rupture, smoke, or fire depending on the device and fault.
- Do not instruct learners to open or probe mains equipment, microwave ovens, CRT equipment, inverters, EV systems, industrial controls, photovoltaic systems, or high-energy battery equipment.
- Mains-connected suppression capacitors require products and designs intended and certified for the exact position and use; this lesson is not a selection or installation procedure.
- Work on stored-energy equipment needs task-specific qualification, procedures, verification, and current local requirements.

Do not publish a universal voltage threshold, waiting time, resistor value, or “one-hand” procedure as a general safety rule.

## 9. Common misconceptions to correct

- Capacitance is not “the maximum amount of charge a capacitor can hold.”
- The dielectric is not normally crossed by the conduction electrons that accumulate on the terminals.
- The complete ideal capacitor is not net charged merely because its terminals carry `+q` and `-q`.
- A capacitor does not consume charge; external circuits redistribute charge and exchange energy.
- `q`, `C`, and `v` are not three independent settings.
- `C ≈ εA/d` is not valid for every geometry and material condition.
- `U = ½Cv²` is not universal for every nonlinear or variable capacitor.
- An ideal capacitor does not “pass all AC and block all DC” independently of frequency and the rest of the circuit.
- Five time constants is approximately `99.3%`, not exactly fully charged or discharged.
- A low-voltage classroom capacitor does not establish the safety of a mains or high-energy capacitor.

## 10. Technical-track boundary: displacement current

The technical track should reconcile continuous circuit current with the absence of conduction electrons crossing an ideal dielectric. A changing electric displacement field contributes the displacement-current term. For an appropriate surface spanning the capacitor gap:

`I_d = d/dt ∫_S D · dA`

In the ideal lumped model this matches the terminal current. The explanation should distinguish conduction current in wires from the displacement-current term in the dielectric and avoid treating displacement current as a stream of electrons jumping through the insulator.

## 11. Thai localization and standards context

Canonical Thai title: **ความจุไฟฟ้าและตัวเก็บประจุ**

Key terms:

- capacitance: ความจุไฟฟ้า
- capacitor: ตัวเก็บประจุ
- dielectric: ไดอิเล็กทริก
- electric polarization: โพลาไรเซชันทางไฟฟ้า
- stored energy: พลังงานสะสม
- time constant: ค่าคงตัวเวลา
- transient response: การตอบสนองในภาวะชั่วครู่
- leakage current: กระแสรั่ว
- equivalent series resistance: ความต้านทานอนุกรมสมมูล
- equivalent series inductance: ความเหนี่ยวนำอนุกรมสมมูล
- rated voltage: แรงดันพิกัด

Thailand-specific decisions:

- Use the IPST Project 14 Physics Book 4 sequence to support Thai school-level terminology for capacitor operation, capacitance, stored energy, and capacitor connections.
- Use TISI **TIS 60252 Part 1-2568** only as an example of an application-specific Thai product standard for AC motor capacitors. It is not a general rule for all capacitors and not permission to service a motor or mains circuit.
- Do not infer that IEC 60384-1 or IEC 60384-14 has automatically become Thai law or a Thai national standard. Cite them as international component-standard families and verify the exact current Thai adoption and application before making a compliance claim.
- Thai language, standards-sensitive claims, and publication remain separate approval gates.

## 12. Authoritative source map

Foundational definitions and models:

- [IEC Electropedia, IEV 151-13-28 — capacitor](https://www.electropedia.org/iev/iev.nsf/display?ievref=151-13-28&openform=)
- [IEC Electropedia, IEV 131-12-13 — capacitance](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-13&openform=)
- [IEC Electropedia, IEV 131-12-12 — ideal capacitor](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-12&openform=)
- [IEC Electropedia, IEV 131-12-10 — capacitive two-terminal element](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-10&openform=)
- [BIPM, SI Brochure, 9th edition, version 4.01](https://www.bipm.org/en/si-brochure-9)
- OpenStax *University Physics Volume 2*: [capacitors and capacitance](https://openstax.org/books/university-physics-volume-2/pages/8-1-capacitors-and-capacitance), [energy](https://openstax.org/books/university-physics-volume-2/pages/8-3-energy-stored-in-a-capacitor), [dielectrics](https://openstax.org/books/university-physics-volume-2/pages/8-4-capacitor-with-a-dielectric), [RC circuits](https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits), and [Maxwell/displacement current](https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves)

Real components and product standards:

- [IEC 60384-1:2021 — fixed capacitors for use in electronic equipment, generic specification](https://webstore.iec.ch/en/publication/62499)
- [IEC 60384-14:2023 with Amendment 1:2025 — suppression capacitors and connection to the supply mains](https://webstore.iec.ch/en/publication/108455)
- [Panasonic Industry — basic characteristics of real capacitors](https://industrial.panasonic.com/ww/ds/ss/technical/lc3)
- [Nichicon — application guidelines for aluminium electrolytic capacitors](https://www.nichicon.co.jp/english/products/pdf/aluminum.pdf)
- [KEMET — tantalum and polymer capacitor FAQs](https://www.kemet.com/en/us/capacitors/polymer/tantalum-polymer-faqs.html)

Safety and Thai context:

- [CDC/NIOSH — Electrical Safety in the Workplace](https://www.cdc.gov/niosh/electrical-safety/about/index.html)
- [OSHA 29 CFR 1910.333 — stored electric energy](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333) (U.S. workplace rule, not Thai law or a hobby procedure)
- IPST Project 14: [capacitor operation](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-024/), [capacitance](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-025/), [stored energy](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-026/), and [connections](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-027/)
- [Thai Industrial Standards Institute, TIS 60252 Part 1-2568 — AC motor capacitors](https://a.tisi.go.th/t/?n=9179)

## 13. Review questions before publication

- Does every equation state its sign convention and model boundary?
- Does the diagram keep charge on conductors and avoid showing electrons crossing the dielectric?
- Is the complete-device net charge distinguished from terminal charge?
- Does the RC section say `99.3%` at `5τ`, not “fully charged”?
- Are real capacitor families described without turning generic traits into universal selection rules?
- Are polarity, stored-energy, and mains warnings visible in both languages?
- Is every Thai standards reference scoped to the exact product/application rather than presented as a general installation rule?
- Have qualified-human, Thai-language, exact-deployment, and publication approvals been recorded separately?
