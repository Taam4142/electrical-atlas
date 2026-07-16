# What Is Electricity lesson review — v0.1

<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.what-is-electricity.v0.1",
  "recordState": "in-review",
  "sourceStatus": "verified",
  "reviewedRevision": "sha256:3cd003f56afde310b82f37acaf207a02f00d76eb4d57c81335293bf67e4d50d2",
  "reviewedAt": "2026-07-16",
  "nextReviewAt": "2027-07-16",
  "qualifiedReviewRequired": false,
  "qualifiedReviewReason": "The reviewed revision is a low-risk conceptual explanation with an explicit no-mains and no-construction boundary, no live-work procedure, no installation instruction, and no claim that an exact Thai rule applies.",
  "blockers": [
    "preview-deployment-verification",
    "owner-thai-language-approval",
    "owner-publication-approval"
  ],
  "reviewedFiles": {
    "electrical-atlas-site/src/lib/lessonRegistry.ts": "8a3606a4742d6c5a0e7bb9224a0603fb4365f99e01045acfeb7e8d4eb8a41593",
    "electrical-atlas-site/src/content/lessons/en/what-is-electricity.mdx": "662fd84322391e06bd1f1f961de0e8823c49d6a11e92e7ddb4cbd43e136ba306",
    "electrical-atlas-site/src/content/lessons/th/what-is-electricity.mdx": "b0b87f546802fb2d47921fa7ae04ee101903894bfdf14dab73524f7f83bc7517",
    "electrical-atlas-site/src/components/CircuitFieldDemo.tsx": "5cbb98bfea354cf0ed340ad0ce13b92ccd0793d0f4e8db4c7b67ce4c2202ddb6",
    "electrical-atlas-site/src/lib/physics.ts": "9d981d77f41304211bd37e6f71f695499851e4e513a4e360b6a5d66a5adbaec7",
    "electrical-atlas-site/src/pages/en/lessons/what-is-electricity.astro": "95ea74542db08f8d9eac7db16abcd6fa4175a497d831fe6e49a4f62df2de3567",
    "electrical-atlas-site/src/pages/th/lessons/what-is-electricity.astro": "96fdfeb678842876f24c548b3694884e21a263a7b07df6ce9f2580cfdeacfea4",
    "electrical-atlas-site/src/lib/relationships.ts": "d5ae80218424add43359cf3c8408b7f28d18575519da1262cb53376700a50217",
    "electrical-atlas-site/src/lib/suggestions.ts": "21c5c24f3c21fbedd83767123126c54620b20644a28ea85ff4d8f29054111024",
    "electrical-atlas-site/src/components/SuggestionSection.astro": "68dcf8965bc3a612104f655cfca7852a482990ab217950288878eb6f864a321f",
    "electrical-atlas-site/src/styles/global.css": "a3d77fbdded3732744a7be81e825ae8b46c2d4c47ab5d71d6233e4ee51869613",
    "electrical-atlas-site/src/layouts/BaseLayout.astro": "61bdf275bc02f1daef8f59c04246a50fa718b2085ba82d30a0d5bf537090d408",
    "electrical-atlas-site/src/components/LanguageSwitch.astro": "8885360403db09c26c56775e6aa46bac334c44780cde3c988d234ad1921ea287",
    "electrical-atlas-site/src/components/LessonShell.astro": "4f883c4196dc691e89e26fd17bb32ea4349984ed02bd2bbb9a62454ec8e77852",
    "electrical-atlas-site/src/components/LessonModeToggle.tsx": "ad868979e1a10a369676c87306a3ba487e7114a8b339d4ed39841fdbb9366177",
    "electrical-atlas-site/src/lib/generated/atlasTopics.ts": "97ebe07b32cec59b107bef8329e847eebc5aca081591d2092904127e837968ed",
    "electrical-atlas-site/src/lib/topicLabels.ts": "aa8613f68e11228ebe9d793a06a141956cc81c8975df30dcb26830202a92cf69",
    "electrical-atlas-site/src/lib/navigation.ts": "bf6f57be6e15bf4f98980885ce39f6f3b7732ab36f89cd5b62a828c0cfd6801f"
  },
  "approvals": {
    "sourceReview": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer source audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "Exact definitions, equations, material behavior, lamp claims, propagation boundaries, and general safety claims are mapped below; Thai installation and legal claims are explicitly out of scope."
    },
    "technicalAccuracy": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer technical audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "Causal wording, equation scopes, units, open-circuit fields, conventional-current direction, drift, steady-state limits, lamp behavior, and the corrected two-state demo were reviewed for this low-risk conceptual scope."
    },
    "englishContent": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer content audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "The gateway sequence, definitions, misconceptions, model boundaries, learner sources, and relationship-driven continuation were reviewed for clarity and internal consistency."
    },
    "thaiLanguage": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "An independent maintainer-level parity pass corrected meaning-sensitive Thai wording for neutrality, force, grounding, topology, model scope, and Thai regulatory boundaries. Project-owner language approval has not been granted."
    },
    "qualifiedHuman": {
      "status": "not-required",
      "reviewer": "Publication governance risk matrix",
      "reviewerAuthority": "policy",
      "reviewedAt": "2026-07-16",
      "note": "Not required for this exact conceptual scope; reassess if practical, hazardous, installation, regulatory, standards-sensitive, or live-work instruction is added."
    },
    "implementationVerification": {
      "status": "passed",
      "reviewer": "Maintainer automated verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "The revision-bound candidate passed 12 Node checks, 80 Vitest tests across 13 files, Astro diagnostics for 93 files, the 3,245-page production build, 3,214 topic robots policies, and 3,246 internal references."
    },
    "visualAccessibility": {
      "status": "passed",
      "reviewer": "Maintainer browser review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "English and Thai local previews passed default desktop, 390 px, and 320 px checks for responsive geometry, visible focus, 64–86 px demo controls, localized phrasing-only live output, visible model boundary, transcript, current-language metadata, English language marking on canonical topic text, no page overflow, coherent endpoint values, and no console errors. The essential wire stroke is now 3.36:1 against the lesson canvas. The backend did not demonstrate Enter/Space activation or a named screen reader, so no platform assistive-technology result is claimed; native button semantics and click state changes were verified."
    },
    "previewDeployment": {
      "status": "pending",
      "reviewer": "Maintainer deployment verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": null,
      "note": "The promoted revision has not yet been verified on the public Vercel deployment."
    },
    "publication": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "Lesson-level publication approval has not been granted."
    }
  }
}
-->

Status: maintainer review preparation is complete; the lesson is `review-ready`, not approved for publication.

## Control record

| Field | Value |
| --- | --- |
| Lesson ID | `ea.lesson.what-is-electricity.v0.1` |
| Slug | `what-is-electricity` |
| Primary topic | `ea.fundamentals.electricity` |
| Languages | English and prepared Thai |
| Registry status before review | `prototype` |
| Registry status after preparation | `review-ready` |
| Publication status | Pending project-owner decision |
| Source status | `verified` for the bound conceptual scope |
| Safety level | `low` — conceptual explanation with no-mains and no-construction boundaries |
| Thailand context | No Thai compliance, installation, utility, or legal claim is made; IEC terminology is used only for conceptual distinctions. |
| Evidence review date | 2026-07-16 |
| Next source currency check | 2027-07-16, or earlier on material content/source change |

## Approval ownership and gates

| Gate | Owner/reviewer | Current result | Publication effect |
| --- | --- | --- | --- |
| Source review | Codex-assisted maintainer source audit | Passed 2026-07-16 | Supports `sourceStatus: verified`; does not grant publication. |
| Low-risk technical accuracy | Codex-assisted maintainer technical audit | Passed 2026-07-16 | Must be reassessed if practical, hazardous, or regulated scope is added. |
| English content | Codex-assisted maintainer content audit | Passed 2026-07-16 | No owner action required unless wording changes materially. |
| Thai language | Project owner | Pending | Blocks publication. |
| Qualified review | Publication governance risk matrix | Not required for this scope | Becomes required if the risk class or instruction scope changes. |
| Implementation | Maintainer automated verification | Passed 2026-07-16 | Supports review preparation for the exact file manifest. |
| Visual/accessibility | Maintainer browser review | Passed 2026-07-16 with explicit backend boundaries | Supports `review-ready`; does not infer Thai or publication approval. |
| Preview/live deployment | Maintainer deployment verification | Pending | Must pass for the promoted public candidate. |
| Final publication | Project owner | Pending | Blocks `published`. |

The project owner's governance acceptance assigns roles; it does not approve this lesson revision.

## Exact sources

| ID | Authority/author | Exact source | URL/locator | Reviewed | Scope and limitation | Next review |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | IEC | IEC 60050, IEV 151-11-01, “electricity,” published 2001-07 | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=151-11-01&openform=) | 2026-07-16 | Supports the umbrella definition involving electric charge and current; the lesson's field/energy frame is explanatory, not quoted IEC wording. | On IEC entry/edition change |
| S02 | BIPM | *The International System of Units (SI)*, 9th edition (2019), current official text | [SI Brochure](https://www.bipm.org/en/publications/si-brochure/) | 2026-07-16 | SI units, symbols, derived-unit relations, and exact elementary-charge magnitude; not a circuit-model source. | On new SI edition |
| S03 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.1, “Electric Charge” (2016) | [§5.1](https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-charge) | 2026-07-16 | Charge, sign, neutrality, conservation, and ordinary charge quantization; quark-scale qualification remains outside the beginner explanation. | On material lesson revision |
| S04 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.2, “Conductors, Insulators, and Charging by Induction” (2016) | [§5.2](https://openstax.org/books/university-physics-volume-2/pages/5-2-conductors-insulators-and-charging-by-induction) | 2026-07-16 | Introductory conductor, insulator, mobile-charge, polarization, and induction behavior; does not provide universal breakdown limits. | On material lesson revision |
| S05 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.4, “Electric Field” (2016) | [§5.4](https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field) | 2026-07-16 | Electric field and force-per-positive-test-charge model; the full moving-charge force needs the magnetic term stated in the technical track. | On material lesson revision |
| S06 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §7.2, “Electric Potential and Potential Difference” (2016) | [§7.2](https://openstax.org/books/university-physics-volume-2/pages/7-2-electric-potential-and-potential-difference) | 2026-07-16 | Potential difference, potential-energy change per charge, volts, and sign/direction; electrostatic framing does not cover every induced-field case. | On material lesson revision |
| S07 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.1, “Electrical Current” (2016) | [§9.1](https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current) | 2026-07-16 | Current as charge-transfer rate, conventional direction, and carrier response; simplified introductory conductor scope. | On material lesson revision |
| S08 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.2, “Model of Conduction in Metals” (2016) | [§9.2](https://openstax.org/books/university-physics-volume-2/pages/9-2-model-of-conduction-in-metals) | 2026-07-16 | Metal-electron drift, `I = nqAv_d`, copper-density example, and incandescent-filament context; the demo's carrier density remains an approximation. | On model/material revision |
| S09 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.3, “Resistivity and Resistance” (2016) | [§9.3](https://openstax.org/books/university-physics-volume-2/pages/9-3-resistivity-and-resistance) | 2026-07-16 | Resistance, geometry, temperature dependence, and incandescent cold/hot behavior; no exact lamp product is represented. | On lamp-model revision |
| S10 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.4, “Ohm's Law” (2016) | [§9.4](https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law) | 2026-07-16 | `V = IR`, ohmic/non-ohmic distinction, and operating-range limitation; not a universal device law. | On material lesson revision |
| S11 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.5, “Electrical Energy and Power” (2016) | [§9.5](https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power) | 2026-07-16 | Power, energy, Joule heating, and steady-DC `P = VI`; arbitrary AC average power requires later treatment. | On power-scope expansion |
| S12 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §10.1, “Electromotive Force” (2016) | [§10.1](https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force) | 2026-07-16 | Source emf, terminal potential difference, chemical energy, and internal resistance; no chemistry-specific battery rating is claimed. | On source-model expansion |
| S13 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 3*, §9.6, “Semiconductors and Doping” (2016) | [§9.6](https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping) | 2026-07-16 | Introductory electron/hole and doping behavior; device-specific field, optical, and thermal response belongs in later lessons. | On semiconductor-scope expansion |
| S14 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 3*, §6.1, “Blackbody Radiation” (2016) | [§6.1](https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation) | 2026-07-16 | Thermal spectrum and visible/infrared emission; a tungsten filament is not claimed to be an ideal blackbody. | On lamp-radiation expansion |
| S15 | MIT OpenCourseWare | 6.013 *Electromagnetics and Applications*, Chapter 7, “TEM Transmission Lines” (Spring 2009) | [Official chapter PDF](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/790b8f65328723ec194cb440b303f8fb_MIT6_013S09_chap07.pdf) | 2026-07-16 | Distributed propagation, geometry/material dependence, reflections, and transients; ideal TEM results are not presented as a universal battery-loop speed. | On propagation-model expansion |
| S16 | MIT OpenCourseWare | 6.013 *Electromagnetics and Applications*, Chapter 2, “Introduction to Electrodynamics” (Spring 2009) | [Official chapter PDF](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/5d9f5c06b6e82844f59979eeb093388c_MIT6_013S09_chap02.pdf) | 2026-07-16 | Maxwell equations, charge continuity, `𝐉 = σ𝐄` constitutive scope, and units; advanced theory is optional-track support. | On technical-track revision |
| S17 | MIT OpenCourseWare | *Electromagnetic Fields and Energy*, Chapter 11, “Energy, Power Flow, and Forces” (Spring 2008) | [Official chapter](https://ocw.mit.edu/courses/res-6-001-electromagnetic-fields-and-energy-spring-2008/pages/chapter-11/) | 2026-07-16 | Poynting theorem/vector and electromagnetic power flow; does not justify an “only inside” or “only outside” slogan. | On energy-flow revision |
| S18 | U.S. Department of Energy | “DOE Explains...Batteries,” current public explainer | [Official DOE page](https://www.energy.gov/science/doe-explainsbatteries) | 2026-07-16 | High-level electrochemical battery explanation, external electrons, and electrolyte ions; not Thai law or a product datasheet. | 2027-07-16 or source change |
| S19 | OpenStax | *Physics*, Chapter 11, “Key Terms,” plasma entry | [Chapter 11 key terms](https://openstax.org/books/physics/pages/11-key-terms) | 2026-07-16 | Supports the introductory plasma description as ionized matter with mobile charged particles; no plasma-device behavior is claimed. | On material lesson revision |
| S20 | CDC/NIOSH | “Electrical Safety in the Workplace,” updated 2024 | [Official NIOSH page](https://www.cdc.gov/niosh/electrical-safety/index.html) | 2026-07-16 | General shock, burn, fire, de-energization, and qualified-work boundaries; explicitly not Thai law or a complete work procedure. | 2027-07-16 or source change |
| S21 | IEC | IEC 60050-195, IEV 195-01-01, “reference earth” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsF/IEVref_xref/en%3A195-01-01) | 2026-07-16 | Terminology for reference Earth; does not make an arbitrary circuit reference a protective connection. | On IEC entry/edition change |
| S22 | IEC | IEC 60050-195, IEV 195-02-09, “protective conductor” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=195-02-09&openform=) | 2026-07-16 | Terminology for a protective conductor; no earthing design or Thai installation instruction is provided. | On IEC entry/edition change |
| S23 | IEC | IEC 60050-131, IEV 131-11-29, “current direction,” published 2008-09 | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-11-29&openform=) | 2026-07-16 | Conventional current-direction terminology; copper-electron drift is separately scoped to metal conduction. | On IEC entry/edition change |
| S24 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §10.2, “Resistors in Series and Parallel” (2016) | [§10.2](https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel) | 2026-07-16 | Same-current behavior in an ideal series path and current division at junctions; the lesson adds steady lumped-model and negligible-accumulation boundaries. | On circuit lesson revision |
| S25 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §13.1, “Faraday's Law” (2016) | [§13.1](https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law) | 2026-07-16 | Changing magnetic flux and induced emf; transformer, generator, motor, and sensor details remain successor topics. | On induction lesson revision |
| S26 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §15.1, “AC Sources” (2016) | [§15.1](https://openstax.org/books/university-physics-volume-2/pages/15-1-ac-sources) | 2026-07-16 | Introductory distinction between one-direction DC and periodically reversing AC; waveform and power detail remain later scope. | On DC/AC lesson revision |
| S27 | Panasonic Energy | “For safety,” current public battery-safety guidance | [Official manufacturer page](https://www.panasonic.com/global/energy/study/academy/safety.html) | 2026-07-16 | Supports the general warning not to short-circuit batteries and the risk of heat generation or accidents; not Thai law, a complete procedure, or a substitute for the exact product datasheet. | 2027-07-16 or source change |

## Claim-to-source mapping

| Claim ID | Lesson locator | Risk class | Supported claim | Sources | Verdict and limitation |
| --- | --- | --- | --- | --- | --- |
| E-C01 | EN/TH §1; route subtitle | Foundational definition | Electricity is an umbrella term for phenomena associated with electric charge and current; fields, forces, materials, and energy transfer are the explanatory frame used by the lesson. | S01 | Verified. The first sentence aligns with IEC; no IEC wording is copied. |
| E-C02 | EN/TH §2; technical track | Conceptual physics/metrology | Ordinary matter contains positive and negative charge; neutrality is near-zero net charge, charge is conserved, and ordinary observable charge is quantized as `q = Ne` with exact SI `e`. | S02, S03 | Verified for ordinary observable charge. Quark-scale fractional charge is outside beginner scope. |
| E-C03 | EN/TH §2 | Materials/transport | Metals, insulators, semiconductors, electrolytes, and plasmas provide different carrier and polarization behavior. | S04, S13, S18, S19 | Verified as introductory categories. Leakage, breakdown, device physics, and chemistry-specific behavior remain later topics. |
| E-C04 | EN/TH §1–3; demo open state | Conceptual electromagnetism | Charge distributions produce fields; neutral objects can polarize; an open circuit can retain terminal voltage and fields, including near the switch gap. | S04, S05, S06, S12 | Verified. The lesson no longer says fields appear only after the switch closes. |
| E-C05 | EN/TH §3–5 | Potential/source physics | Voltage is potential difference between two points in the stated model, and battery electrochemistry maintains terminal potential difference by doing work on charge. | S06, S12, S18 | Verified within electrostatic/lumped-circuit and high-level electrochemical scope. |
| E-C06 | EN/TH §2–5 and §8; demo | Current/transport | `I = dQ/dt`; conventional current follows positive-charge direction; copper electrons drift oppositely and much more slowly than the electromagnetic state change propagates; steady current is equal through each component of the stated ideal single series path when significant charge accumulation is absent. | S07, S08, S15, S23, S24 | Verified within the stated transport and lumped-series scopes. No universal propagation speed is published. |
| E-C07 | EN/TH §3, §5–6; demo transition boundary | Distributed electromagnetism | Closing the switch changes boundary conditions; propagation, reflections, and transients precede steady operation and depend on geometry/materials. | S15 | Verified as a qualitative distributed-system boundary. The demo does not calculate transient time. |
| E-C08 | EN/TH §4 and technical track | Circuit model | Resistance is `V/I` for a stated two-terminal operating condition; `V = IR` is limited to approximately ohmic behavior over a range. | S09, S10 | Verified. Resistance is not described as a universal constant or force. |
| E-C09 | EN/TH §4–6; demo | Power/thermal physics | For steady DC, `P = VI`; energy accumulates as the time integral of power; filament heating produces thermal radiation including infrared and visible light. | S11, S14 | Verified. No arbitrary-AC power rule or ideal-blackbody claim is made. |
| E-C10 | EN/TH §6; demo model note | Model limitation | A real lamp's cold/hot resistance changes, initial current may be higher, and source/wire/contact resistance and inductance affect turn-on. | S08, S09, S12 | Verified qualitatively. No real battery or lamp product is represented. |
| E-C11 | EN/TH §7–8 | Gateway orientation | Static, one-direction DC, periodically reversing AC, magnetic, induction, and electronic branches are connected continuations rather than exhaustive treatment on this page; changing magnetic flux can induce emf. | S05, S07, S12, S13, S16, S25, S26 | Verified as a bounded orientation. Dedicated lessons must source their detailed claims independently. |
| E-C12 | EN/TH technical track | Technical physics | `𝐅 = q(𝐄 + 𝐯 × 𝐁)`, electrostatic `𝐄 = −∇V`, `𝐉 = σ𝐄` with local linear isotropic scope, and `∇·𝐉 + ∂ρ/∂t = 0` use defined symbols and units; Maxwell's equations connect charge, current, and time-varying electric and magnetic fields. | S02, S05, S06, S07, S16 | Verified with the stated conservative-field and constitutive limitations. |
| E-C13 | EN/TH §8 and technical track | Electromagnetic energy | `𝐒 = 𝐄 × 𝐇` is electromagnetic power-flow density; field theory does not support an “energy only inside copper” or “only outside copper” slogan. | S16, S17 | Verified at conceptual/technical-track level. No full field solution is attempted. |
| E-C14 | EN/TH §9 | General safety | The page is not a mains, wiring, or live-work procedure; the visual must not be connected to mains; batteries must not be short-circuited; correctly rated real parts are required; conductors, contacts, and filaments can become hot enough to burn or contribute to fire. | S20, S27 | Verified as a general safety boundary, not a complete work procedure or Thai compliance claim. |
| E-C15 | Demo component and physics helper | Numeric/model behavior | The open state gives zero sustained current/power; the closed 9 V, 30 Ω state gives `0.300 A`, `2.70 W`, and approximately `0.0441 mm/s` drift for the disclosed copper-area/density assumptions. | S02, S08, S09, S10, S11 | Verified for the hypothetical steady model. The 30 Ω value is illustrative, not a lamp datasheet value. |
| E-C16 | EN/TH §8–9 | Grounding terminology | Circuit reference, chassis, system ground, reference Earth, and protective conductor are distinct; the word “ground” alone does not establish a safe-to-touch point. | S20, S21, S22 | Verified as conceptual safety and IEC terminology. No earthing design or exact Thai requirement is supplied. |

## Corrections made during review

- Replaced “charge separation makes fields appear” with charge-distribution and field wording that remains valid in an open circuit.
- Reframed the battery as an electrochemical source that does work on charge and maintains terminal potential difference while remaining nearly neutral overall.
- Scoped voltage to a two-point electrostatic/lumped-circuit explanation and stated the nonconservative-field limitation in technical mode.
- Defined conventional current and opposite copper-electron drift.
- Qualified same-series-current wording to a steady lumped single-path model with negligible charge accumulation.
- Separated power from energy and defined units for charge, field, force, potential difference, current, current density, resistance, conductivity, power, energy, and Poynting flux.
- Scoped `𝐉 = σ𝐄`, `𝐄 = −∇V`, `P = VI`, and the Poynting vector instead of presenting them as universal formulas.
- Replaced the former percentage slider with open and closed steady-state buttons; fractional current/power interpolation was removed from the physics helper.
- Rebuilt the diagram as a true two-terminal circuit, retained an open-gap field cue, made the lamp fully dark at zero power, and distinguished current from electron-drift direction.
- Added a visible model boundary and no-mains/no-construction safety boundary.
- Corrected meaning-sensitive Thai wording for charge neutrality and quantization, force on a charge, ground safety, the Thailand non-claim boundary, circuit topology, transient terminology, and drift-speed labeling; owner language approval remains pending.
- Replaced the lamp estimate's inherited Ohm's-law result with explicit source-voltage, load-resistance, steady-current, and load-power fields so the open state no longer violates the helper type's meaning.
- Kept the live `output` to phrasing content, raised essential circuit-wire contrast above 3:1, and exposed the full model boundary without requiring the transcript disclosure to be opened.
- Added direct source coverage for series-current behavior, DC/AC and induction orientation, Maxwell linkage, and the battery short-circuit warning.
- Expanded the reviewed manifest to include material shared layout, language, lesson-mode, topic-label, navigation, and generated suggestion inputs.
- Moved the visual after the prerequisite charge, field, voltage, current, resistance, power, and energy explanation.
- Replaced internal production language and generic source directions with learner-facing connections and exact reading links.
- Replaced the narrow lithium-ion suggestion with charge/charge-carrier relationships, recorded DC/AC branches, capped this gateway at ten cards, and marked canonical English topic text with `lang="en"` on Thai pages.
- Replaced the cramped mobile quantity table with a definition list after the 320 px browser review.

## Implementation and browser evidence

| Check | Result |
| --- | --- |
| Focused model/physics/relationship/suggestion tests | 33 tests across 4 files passed before the full gate |
| Astro diagnostics after content and component revision | 93 files; 0 errors, warnings, or hints |
| Full repository test gate | 12 Node checks and 80 Vitest tests across 13 files passed |
| Astro and production build | 93 files produced 0 errors/warnings/hints; 3,245 pages built; 3,214 topic robots policies and 3,246 internal references validated |
| English local browser review | Default desktop and 390 px passed coherent values, responsive stacking, visible focus, large controls, live output, transcript, relationship cap, no overflow, and no console errors |
| Thai local browser review | 390 px and 320 px passed localized state/output, 64–86 px controls, `lang="th"`, current-language switch, `lang="en"` on canonical topic text, readable definition list, no overflow, and no console errors |
| Browser evidence boundary | Native semantic buttons and click state changes passed. The browser backend did not demonstrate Enter/Space activation, OS reduced-motion emulation, or a named screen reader; no result for those platform checks is inferred. |

## Known limitations and deferred scope

- The visual compares stable endpoints. It does not simulate distributed propagation time, reflection amplitude, contact bounce, arcing, filament inrush, temperature, light output, or source voltage sag.
- `30 Ω` is an illustrative hot-state resistive load. `9 V` is an ideal source label, not a named battery product. The copper drift estimate uses `8.5 × 10²⁸ m⁻³`, uniform current density, one effective conduction electron per atom, fixed cross-section, and fixed temperature.
- The technical equations are presented with Unicode symbols and prose definitions rather than a dedicated math-rendering/accessibility system. A future math system must preserve readable text equivalents.
- The planned 3D material viewer remains deferred because the gateway is complete without it. No Lighthouse ≥90 claim is recorded for this revision.
- `coveredTopicIds` retains only the gateway's primary electricity node. Charge, field, voltage, current, resistance, power, energy, DC, and AC are introduced and cross-linked, not claimed as fully covered; dedicated lessons remain authoritative for those topic-page links.
- Canonical topic records are still English-first. Thai suggestion cards mark that English content with `lang="en"`; full Thai topic localization belongs to the later taxonomy/localization phase.
- No exact Thai standard, installation clause, utility requirement, or legal threshold is asserted. Add `requiresThailandContext`, current official evidence, and the appropriate reviewer if that scope changes.
- The prepared Thai prose has not received project-owner language approval.
- The current review binds the full generated topic inventory because it determines relationship-driven suggestions. A deterministic lesson-specific suggestion snapshot may narrow future invalidation without weakening traceability.

## Decision history

| Date | Decision/event | Owner/evidence | Result |
| --- | --- | --- | --- |
| 2026-07-16 | Begin review without owner publication approval | Publication governance | Allowed: owner decisions are needed for Thai approval and `published`, not for maintainer review preparation. |
| 2026-07-16 | Audit the existing lesson and visual | Technical, site, governance, and source audits | Found causal wording, equation, source, navigation, accessibility, and multi-timescale demo risks. |
| 2026-07-16 | Replace the fractional transition model | Maintainer implementation | Open state now has zero sustained current/power; closed steady state obeys Ohm's law; transition and warm-up are explicitly unmodeled. |
| 2026-07-16 | Complete exact source and content review | Codex-assisted maintainer review | Source, technical, and English gates passed for the bound low-risk conceptual revision. |
| 2026-07-16 | Complete local rendered review | Maintainer browser review | English/Thai desktop and narrow layouts, semantics, localization, focus, target size, live state, overflow, and console checks passed within documented backend limits. |
| 2026-07-16 | Promote review preparation | Maintainer review | Registry moved to `review-ready`; public deployment, Thai-language approval, and final publication remain pending. |
| 2026-07-16 | Complete independent final audits | Read-only code, Thai-parity, and lifecycle reviews | Corrected the lamp result type, live-output HTML structure, wire contrast, visible model assumptions, Thai meaning-sensitive wording, source coverage, shared dependency manifest, and stale Voltage deployment binding before commit. No owner approval was inferred. |

## Publication decision

- Registry status after review preparation: `review-ready`.
- Source status: `verified` for the bound conceptual scope.
- Qualified-review decision: Not required for the current scope; reassess on any practical, hazardous, regulated, installation, or standards-sensitive expansion.
- Public promoted-deployment verification: Pending.
- Project-owner Thai-language decision: Pending.
- Project-owner publication decision: Pending.
- Final publication date: Pending.

Do not mark this lesson `published` or remove either owner blocker until the project owner explicitly completes the corresponding decision.
