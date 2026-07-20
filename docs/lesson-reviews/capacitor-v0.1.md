# Capacitance and Capacitors lesson review — v0.1

<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.capacitor.v0.1",
  "recordState": "in-review",
  "sourceStatus": "verified",
  "reviewedRevision": "sha256:9066feacfdce98b37be4c42d20b3d079fbad356376a3cb975abf5800c8d19ac2",
  "reviewedAt": "2026-07-20",
  "nextReviewAt": "2027-01-20",
  "qualifiedReviewRequired": true,
  "qualifiedReviewReason": "The lesson is conceptual and gives no live-work or discharge procedure, but its moderate-safety scope discusses retained energy, polarized-component misuse, component failure, and mains-connected application classes. A qualified human must review that exact scope before publication.",
  "blockers": [
    "qualified-human-review",
    "owner-thai-language-approval",
    "owner-publication-approval"
  ],
  "reviewedFiles": {
    "electrical-atlas-site/src/lib/lessonRegistry.ts": "75e1f10a3945ef7aa4ff29c836b67897867148977b7ca46d72de09e8265846bc",
    "electrical-atlas-site/src/lib/relationships.ts": "0b26312a35c77ba6964043898a51e2a219fae5af8c7db7057b490a1b34645a30",
    "electrical-atlas-site/src/content/lessons/en/capacitor.mdx": "b973dea967edb62304418e932b1d846723d4dfecfd2acdf5337ba31f7860a47e",
    "electrical-atlas-site/src/content/lessons/th/capacitor.mdx": "6fc5730485940c9253fd4260de393261729b41184bda9bcbc32e245d924d2736",
    "electrical-atlas-site/src/components/CapacitorFieldDemo.tsx": "c4ff8f37f765c8305b56136051dfc2523648a5a44232ad5508c1e04741503f15",
    "electrical-atlas-site/src/lib/capacitorModel.ts": "62b3a4fc17f94a0eed532a44681dab2366e0ff5823c3b86ea7c35a6f150b725b",
    "electrical-atlas-site/src/lib/interaction.ts": "d76cac73cace1f61231aea7c3fc6bca60da10538a0f9a77c206134aa28792269",
    "electrical-atlas-site/src/lib/numberFormatting.ts": "afe52e71cad5c75720046dc4ec6c9771ad67c1f937b36131fa99fd5b0a84df6c",
    "electrical-atlas-site/src/pages/en/lessons/capacitor.astro": "9f412bd1e384e8348cfa59fee9409473a5c2f58e4ce080086a5c3fd1c1f9834d",
    "electrical-atlas-site/src/pages/th/lessons/capacitor.astro": "44de53359062b0cf55d1493c8b8186b00cc9298b1bb37487a28266bba97c2308",
    "electrical-atlas-site/src/styles/capacitor-demo.css": "06908daa65e476362efc1d8b2d8c5733573d672053134f48bd1092192b91183d",
    "electrical-atlas-site/src/styles/global.css": "a3d77fbdded3732744a7be81e825ae8b46c2d4c47ab5d71d6233e4ee51869613",
    "electrical-atlas-site/src/layouts/BaseLayout.astro": "61bdf275bc02f1daef8f59c04246a50fa718b2085ba82d30a0d5bf537090d408",
    "electrical-atlas-site/src/components/LanguageSwitch.astro": "8885360403db09c26c56775e6aa46bac334c44780cde3c988d234ad1921ea287",
    "electrical-atlas-site/src/components/LessonShell.astro": "4f883c4196dc691e89e26fd17bb32ea4349984ed02bd2bbb9a62454ec8e77852",
    "electrical-atlas-site/src/components/LessonModeToggle.tsx": "ad868979e1a10a369676c87306a3ba487e7114a8b339d4ed39841fdbb9366177",
    "electrical-atlas-site/src/lib/generated/atlasTopics.ts": "97ebe07b32cec59b107bef8329e847eebc5aca081591d2092904127e837968ed",
    "electrical-atlas-site/src/lib/topicLabels.ts": "aa8613f68e11228ebe9d793a06a141956cc81c8975df30dcb26830202a92cf69",
    "electrical-atlas-site/src/lib/navigation.ts": "bf6f57be6e15bf4f98980885ce39f6f3b7732ab36f89cd5b62a828c0cfd6801f",
    "electrical-atlas-site/src/lib/suggestions.ts": "21c5c24f3c21fbedd83767123126c54620b20644a28ea85ff4d8f29054111024",
    "electrical-atlas-site/src/components/SuggestionSection.astro": "68dcf8965bc3a612104f655cfca7852a482990ab217950288878eb6f864a321f"
  },
  "approvals": {
    "sourceReview": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer source audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "IEC, BIPM, OpenStax, manufacturer, occupational-safety, IPST, and TISI sources are mapped below to bounded claims. Standards are kept within their product or jurisdictional scope and this result does not grant publication."
    },
    "technicalAccuracy": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer technical audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "The component/quantity/model distinction, sign convention, equal-and-opposite terminal-charge model, dielectric polarization, equations, RC limits, displacement current, nonidealities, and demo calculations were reviewed for the declared conceptual scope."
    },
    "englishContent": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer content audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "The English lesson was checked for defined notation, assumption boundaries, misconceptions, real-component limits, source scope, safety language, and guided-to-technical progression."
    },
    "thaiLanguage": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "The Thai lesson is implemented with IPST-aligned terminology and maintainer parity checking, but final natural-language approval belongs to the project owner."
    },
    "qualifiedHuman": {
      "status": "pending",
      "reviewer": "Qualified electrical/electronic reviewer",
      "reviewerAuthority": "qualified-human",
      "reviewedAt": null,
      "note": "Required before publication because retained energy, polarized-component failure, and mains-application boundaries are within this moderate-safety lesson. No qualified-human decision has been inferred."
    },
    "implementationVerification": {
      "status": "passed",
      "reviewer": "Maintainer automated verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "The exact bound revision passed 12 Node checks, 119 Vitest tests across 17 files, Astro diagnostics for 105 files with zero errors, warnings, or hints, and the 3,249-page production build with robots and internal-reference validation."
    },
    "visualAccessibility": {
      "status": "passed",
      "reviewer": "Maintainer browser review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "Local English and Thai routes were reviewed at desktop, 760 px, 390 px, and 320 px widths. Hydration, static accessible slider names, localized value text and live output, keyboard steps and endpoints, 44 px controls, zero-field state, transcript, guided/technical modes, deterministic suggestions, contained mobile navigation, page overflow, and console output passed. This does not claim a named screen reader, OS reduced-motion mode, or actual 400 percent browser zoom."
    },
    "previewDeployment": {
      "status": "passed",
      "reviewer": "Maintainer deployment verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "GitHub reported Vercel success for exact commit 182a8b0. Public English and Thai Capacitor routes retained review-ready/verified metadata, twelve localized suggestions, static slider names, localized value/live output, hydrated keyboard changes and zero-field endpoint, desktop and 390 px containment, and no browser-console warning or error."
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

Status: the lesson is a `review-ready` candidate, not approved for publication.

## Control record

| Field | Value |
| --- | --- |
| Lesson ID | `ea.lesson.capacitor.v0.1` |
| Slug | `capacitor` |
| Primary topic | `ea.component.capacitor` |
| Additional reviewed coverage | `ea.em.capacitance`; `ea.circuit.element.capacitor-ideal` |
| Languages | English and Thai |
| Registry status | `review-ready` |
| Source status | `verified` for this exact conceptual scope |
| Safety level | `moderate` — retained energy and failure boundaries, without a work procedure |
| Thailand context | IPST terminology and one application-specific TIS motor-capacitor record; no Thai installation or legal claim |
| Evidence review date | 2026-07-20 |
| Next source currency check | 2027-01-20, or earlier after a source, standard, product-scope, safety-scope, or material lesson change |

## Approval ownership and gates

| Gate | Owner/reviewer | Current result | Publication effect |
| --- | --- | --- | --- |
| Source review | Codex-assisted maintainer source audit | Passed 2026-07-20 | Supports `sourceStatus: verified`; does not grant publication. |
| Technical accuracy | Codex-assisted maintainer technical audit | Passed 2026-07-20 | Applies only to the bounded conceptual and equation scope. |
| English content | Codex-assisted maintainer content audit | Passed 2026-07-20 | Bound to the reviewed file manifest. |
| Thai language | Project owner | Pending | Blocks publication, not review-ready preparation. |
| Qualified-human review | Qualified electrical/electronic reviewer | Pending | Blocks publication because safety is `moderate`; it does not block review-ready preparation. |
| Implementation verification | Maintainer automated verification | Passed 2026-07-20 | The exact bound manifest passed the complete repository test, diagnostic, and production-build gates. |
| Visual/accessibility | Maintainer browser review | Passed 2026-07-20 with stated platform limits | Supports review readiness; does not claim named-screen-reader or 400-percent-zoom certification. |
| Preview deployment | Maintainer deployment verification | Passed 2026-07-20 on commit `182a8b0` | Exact English/Thai pages, interaction, suggestions, narrow layout, metadata, and console state were live-checked. |
| Publication | Project owner | Pending | Blocks `published`. |

## Exact sources

| ID | Authority / author | Exact source | Direct locator | Reviewed | Scope used here | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | IEC | IEC 60050, IEV 151-13-28, capacitor | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=151-13-28&openform=) | 2026-07-20 | Canonical capacitor component and two-terminal definition. | On IEC entry or edition change |
| S02 | IEC | IEC 60050, IEV 131-12-13, capacitance | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-13&openform=) | 2026-07-20 | Quantity definition and charge-to-voltage relation. | On IEC entry or edition change |
| S03 | IEC | IEC 60050, IEV 131-12-12, ideal capacitor | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-12&openform=) | 2026-07-20 | Ideal linear capacitor model and constant-capacitance boundary. | On IEC entry or edition change |
| S04 | IEC | IEC 60050, IEV 131-12-10, capacitive two-terminal element | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=131-12-10&openform=) | 2026-07-20 | Terminal charge, voltage, and circuit-element framing. | On IEC entry or edition change |
| S05 | BIPM | The International System of Units, 9th edition, version 4.01, June 2026 | [SI Brochure](https://www.bipm.org/en/si-brochure-9) | 2026-07-20 | SI farad, coulomb, volt, ampere, second, and joule context. | On new SI edition or version |
| S06 | Ling, Moebs, Sanny / OpenStax | University Physics Volume 2, section 8.1, Capacitors and Capacitance | [Section 8.1](https://openstax.org/books/university-physics-volume-2/pages/8-1-capacitors-and-capacitance) | 2026-07-20 | Introductory structure, parallel-plate model, capacitance, units, and combination context. | On material lesson revision |
| S07 | Ling, Moebs, Sanny / OpenStax | University Physics Volume 2, section 8.3, Energy Stored in a Capacitor | [Section 8.3](https://openstax.org/books/university-physics-volume-2/pages/8-3-energy-stored-in-a-capacitor) | 2026-07-20 | Linear-capacitor energy equations and field-energy interpretation. | On material lesson revision |
| S08 | Ling, Moebs, Sanny / OpenStax | University Physics Volume 2, section 8.4, Capacitor with a Dielectric | [Section 8.4](https://openstax.org/books/university-physics-volume-2/pages/8-4-capacitor-with-a-dielectric) | 2026-07-20 | Dielectric polarization and permittivity effects in bounded models. | On material lesson revision |
| S09 | Ling, Moebs, Sanny / OpenStax | University Physics Volume 2, section 10.5, RC Circuits | [Section 10.5](https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits) | 2026-07-20 | Ideal RC charging/discharging equations and time constant. | On transient-scope revision |
| S10 | Ling, Moebs, Sanny / OpenStax | University Physics Volume 2, section 16.1, Maxwell's Equations and Electromagnetic Waves | [Section 16.1](https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves) | 2026-07-20 | Introductory displacement-current explanation. | On technical-track revision |
| S11 | IEC | IEC 60384-1:2021, Fixed capacitors for use in electronic equipment, Part 1 generic specification | [IEC publication record](https://webstore.iec.ch/en/publication/62499) | 2026-07-20 | International fixed-capacitor product-family context only. | On amendment, replacement, or scope change |
| S12 | IEC | IEC 60384-14:2023 plus Amendment 1:2025, suppression capacitors and connection to the supply mains | [IEC consolidated publication record](https://webstore.iec.ch/en/publication/108455) | 2026-07-20 | Application-specific mains/suppression scope; no selection or Thai-compliance claim. | On amendment, replacement, or Thai adoption claim |
| S13 | Panasonic Industry | Basic capacitor characteristics and impedance | [Manufacturer technical page](https://industrial.panasonic.com/ww/ds/ss/technical/lc3) | 2026-07-20 | Qualitative ESR, ESL, leakage, loss, and frequency-dependent real-component behaviour. | 2027-01-20 or page change |
| S14 | Nichicon | Application Guidelines for Aluminum Electrolytic Capacitors | [Manufacturer guide PDF](https://www.nichicon.co.jp/english/products/pdf/aluminum.pdf) | 2026-07-20 | Polarity, ratings, ripple, heating, pressure vent, ageing, failure, and residual/reappearing voltage context for aluminium electrolytics. | 2027-01-20 or guide revision |
| S15 | CDC / NIOSH | Electrical Safety in the Workplace | [NIOSH electrical-safety page](https://www.cdc.gov/niosh/electrical-safety/about/index.html) | 2026-07-20 | General de-energization and qualified-work safety context; not Thai law or a capacitor procedure. | 2027-01-20 or page change |
| S16 | U.S. Occupational Safety and Health Administration | 29 CFR 1910.333, Selection and use of work practices | [OSHA regulation page](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.333) | 2026-07-20 | Stored-electric-energy workplace boundary; explicitly U.S.-specific and not a DIY procedure. | 2027-01-20 or rule change |
| S17 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, lesson 24, capacitor operation | [IPST lesson 24](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-024/) | 2026-07-20 | Thai curriculum sequence and operation terminology. | On IPST lesson change |
| S18 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, lesson 25, capacitance | [IPST lesson 25](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-025/) | 2026-07-20 | Thai capacitance terminology and school-level context. | On IPST lesson change |
| S19 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, lesson 26, capacitor energy | [IPST lesson 26](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-026/) | 2026-07-20 | Thai stored-energy terminology and curriculum context. | On IPST lesson change |
| S20 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, lesson 27, capacitor connections | [IPST lesson 27](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-027/) | 2026-07-20 | Thai curriculum continuation context; the present lesson does not claim full connection coverage. | On IPST lesson change |
| S21 | Thai Industrial Standards Institute | TIS 60252 Part 1-2568, AC motor capacitors, Part 1 general requirements | [Official TISI record](https://a.tisi.go.th/t/?n=9179) | 2026-07-20 | Current Thai example of an application-specific motor-capacitor product standard; no general capacitor or servicing rule. | 2027-01-20 or TIS revision/status change |
| S22 | IEC | IEC 60050, IEV 121-11-37, electric polarization | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=121-11-37&openform=) | 2026-07-20 | Polarization terminology and distinction from net charge. | On IEC entry or edition change |
| S23 | IEC | IEC 60050, IEV 121-12-13, relative permittivity | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=121-12-13&openform=) | 2026-07-20 | Permittivity terminology in the bounded dielectric model. | On IEC entry or edition change |
| S24 | KEMET / YAGEO Group | Tantalum and Polymer FAQs | [Manufacturer FAQ](https://www.kemet.com/en/us/capacitors/polymer/tantalum-polymer-faqs.html) | 2026-07-20 | Tantalum/polymer polarity and handling context; not a rule for every capacitor family. | 2027-01-20 or page revision |

## Claim-to-source mapping

| Claim ID | Locator | Risk class | Claim | Sources | Verdict and limitation |
| --- | --- | --- | --- | --- | --- |
| CAP-C01 | EN/TH sections 1–2 | Definition | Capacitance is a quantity, a capacitor is a physical two-terminal component, and an ideal capacitor is a circuit model. | S01, S02, S03, S04 | Verified; the terms are related but deliberately not interchangeable. |
| CAP-C02 | EN/TH sections 1 and 4 | Equation and units | With the stated voltage reference and linear constant `C`, `q = Cv` and `1 F = 1 C/V`. | S02, S03, S04, S05, S06 | Verified for the declared sign convention and model, not nonlinear or time-varying capacitance. |
| CAP-C03 | EN/TH section 2 and demo | Physical model | The ideal complete two-terminal device has equal-and-opposite terminal charges and zero modeled net charge; external conduction current redistributes charge without depicting electrons crossing the dielectric. | S01, S04, S06 | Verified for the initially neutral ideal two-terminal model; environmental stray capacitance and leakage are outside it. |
| CAP-C04 | EN/TH sections 3–4 | Geometry/material model | `C ≈ εA/d` is a bounded large-parallel-plate approximation; dielectric polarization can increase capacitance relative to vacuum for the same stated geometry and voltage. | S06, S08, S22, S23 | Verified with uniform linear dielectric and negligible-fringing assumptions visible. |
| CAP-C05 | EN/TH section 4 and demo | Energy/model behaviour | For fixed linear `C`, `U = ½Cv²`; doubling `C` at fixed voltage doubles charge and energy, while doubling voltage doubles charge and quadruples energy. | S07 | Verified; nonlinear, hysteretic, and time-varying cases are excluded. |
| CAP-C06 | Demo and `capacitorModel.ts` | Deterministic calculation | At `10 µF` and `5 V`, the model gives `50 µC`, `125 µJ`, equal-and-opposite plate charges, and zero complete-device net charge. | S02, S07 | Verified by the equations and unit tests; the graphic is symbolic, not a field solver. |
| CAP-C07 | EN/TH section 5 | Circuit equation | Generally `i = dq/dt`; with passive sign convention and constant linear `C`, `i = C dv/dt`, so finite current cannot produce an instantaneous ideal-capacitor voltage jump. | S03, S04 | Verified for the stated reference and model; leakage and variable capacitance are separated. |
| CAP-C08 | EN/TH section 6 | Transient model | The displayed ideal series-RC equations use `τ = RC`; the charging curve is about 63.2 percent after one time constant and 99.3 percent after five. | S09 | Verified for the stated ideal initial conditions; not a universal waiting time or discharge instruction. |
| CAP-C09 | EN/TH technical track | Electromagnetism | The displacement-current term reconciles the gap surface with terminal current without treating it as conduction electrons jumping through the dielectric. | S10 | Verified at introductory level; a full Maxwell/material derivation is deferred. |
| CAP-C10 | EN/TH sections 7–8 | Real components | Real capacitor application and selection depend on family, ratings, leakage, ESR, ESL, frequency, temperature, bias, ripple, tolerance, ageing, lifetime, and environment. | S11, S13, S14 | Verified qualitatively; no universal numerical selection rule is supplied. |
| CAP-C11 | EN/TH sections 8–10 | Failure and polarity | Many aluminium and tantalum electrolytics are polarized, and misuse or excessive electrical/thermal stress can lead to family- and fault-dependent leakage, heating, venting, rupture, smoke, or fire. | S13, S14, S24 | Verified with `many` and fault-dependent qualifiers; tantalum polarity is supported separately from the aluminium failure guidance, and this is not a claim that every capacitor fails identically. |
| CAP-C12 | EN/TH section 10 | Safety boundary | Disconnection does not prove absence of stored energy, and this page cannot supply a universal safe waiting time or discharge procedure. | S14, S15, S16 | Verified as a conservative boundary. OSHA is labelled U.S.-specific; no Thai law or DIY procedure is inferred. |
| CAP-C13 | EN/TH sections 7, 10, and 11 | Product-standard scope | Supply-mains suppression capacitors fall under application-specific requirements; IEC 60384-14 is not itself proof of Thai legal applicability or a part-selection approval. | S12 | Verified within IEC scope; X/Y selection, replacement, wiring, and Thai adoption are intentionally not taught. |
| CAP-C14 | EN/TH section 11 | Thai curriculum | IPST Project 14 supplies Thai curriculum context for operation, capacitance, stored energy, and capacitor connections. | S17, S18, S19, S20 | Verified as terminology/sequence context; it cannot substitute for project-owner Thai-language approval. |
| CAP-C15 | EN/TH section 11 | Thai standard | TIS 60252 Part 1-2568 is an application-specific Thai standard for AC motor capacitors, not a general rule or permission to service motors or mains circuits. | S21 | Verified from the official TISI record; status/scope must be rechecked before later compliance claims. |
| CAP-C16 | EN/TH misconceptions and model notes | Misconception boundary | Capacitance is not simply maximum charge, `q`, `C`, and `v` are not independent in the linear model, five time constants is not mathematical completion, and “blocks DC/passes AC” is only a circuit-dependent shortcut. | S02, S06, S09, S13 | Verified as bounded corrections; detailed frequency response and component qualification are successor topics. |

## Corrections and risk reductions made during preparation

- Kept capacitor, capacitance, and ideal capacitor as distinct definitions while routing their three canonical atlas nodes to the one lesson that substantively covers them.
- Made `C` and voltage magnitude the only interactive inputs; charge and energy are derived, preventing an impossible three-independent-control model.
- Defined the terminal reference and passive sign convention before the ideal current equation.
- Qualified the parallel-plate, stored-energy, RC, impedance, and “blocks DC/passes AC” statements with their assumptions.
- Kept equal-and-opposite charge on the conductors, used symbolic dielectric dipoles, and explicitly stated that the visual does not show electrons crossing the dielectric.
- Used 99.3 percent at five time constants instead of calling the capacitor fully charged.
- Separated generic capacitor behaviour from family-specific ratings and failures.
- Scoped IEC 60384-14 to its mains/suppression product context and TIS 60252 Part 1-2568 to AC motor capacitors.
- Added explicit no-mains, no-opening-equipment, no-universal-wait-time, and no-improvised-discharge boundaries.
- Marked the moderate-safety qualified-human gate as pending rather than treating maintainer research as that approval.

## Implementation and verification evidence

| Check | Evidence |
| --- | --- |
| Deterministic model | Unit tests cover the `10 µF`, `5 V` reference state, SI conversions, zero-voltage state, capacitance scaling, voltage-squared energy scaling, and invalid inputs. |
| Component contract | Source-contract tests cover two native range controls, explicit keyboard stepping, localized value text, unique IDs, one polite live summary, transcript, CSS import, no independent charge/energy setters, and visible model limits. |
| Registry and topic coverage | The registry exposes both language routes, moderate safety, verified sources, Thailand context, one review record, and three covered canonical topics. |
| Relationships | Exact tests keep Capacitor suggestions deterministic, prefer the available lesson over its covered topic stubs, avoid self-suggestions, and validate every endpoint and relation. |
| Astro routes | English and Thai diagnostic/build checks render the new route wrappers with counterpart links, metadata, lesson shell, guided/technical toggle, and relationship-driven suggestions. |
| Full repository gate | Passed: 12 Node checks, 119 Vitest tests in 17 files, 105-file Astro diagnostics with zero findings, and 3,249 generated pages with 3,214 topic robots policies and 3,250 unique root-relative references validated. |
| Browser review | Local English/Thai desktop, 760 px, 390 px, and 320 px checks passed: hydration, keyboard controls and endpoints, localized live output, zero-field state, 44 px targets, transcript, track toggle, suggestions, contained mobile navigation, page overflow, and console. |
| Public deployment | Passed: GitHub reported Vercel success for exact commit `182a8b0`; public EN/TH pages retained review-ready/verified metadata, twelve localized suggestions, hydrated keyboard and zero-field behavior, desktop/390 px containment, and a clean console. |

## Known limitations and review triggers

- The interactive is an ideal, linear, constant-capacitance algebra model and symbolic field picture, not a field solver, particle simulation, transient simulator, or component-selection tool.
- The complete-device zero-charge result belongs to the declared ideal two-terminal model; parasitic capacitance to the environment and non-ideal leakage are omitted.
- The lesson introduces families and nonidealities but does not teach detailed dielectric classes, ageing laws, impedance measurement, tolerance stacks, derating, lifetime calculation, or sourcing.
- The RC equations use ideal initial conditions and one resistor. A material change involving nonlinear loads, several paths, switch arcs, source impedance, or real discharge work requires new technical and safety review.
- The safety text is a boundary, not a safe-work method. Any numerical threshold, discharge design, probing, replacement, mains selection, motor servicing, installation, or compliance instruction triggers current exact-standard and qualified-human review.
- The TIS record is evidence of one Thai product-standard scope only. Do not infer universal Thai applicability, legal status for another product, or IEC-to-TIS equivalence.
- The local browser backend did not provide a named screen reader, OS-level reduced-motion emulation, or actual 400-percent zoom. English phrases inside Thai prose also need a future site-wide inline-language strategy rather than a lesson-specific partial convention.
- Final Thai-language approval, qualified-human review, and final publication approval remain open; exact-deployment verification passed on commit `182a8b0`.
- A material lesson, model, registry, relationship, route-shell, suggestion-system, or presentation change invalidates the recorded file hashes and requires deliberate re-review.

## Decision history

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-07-20 | Cover the component, capacitance quantity, and ideal capacitor in one lesson. | The lesson substantively teaches all three and this prevents duplicate-looking lesson/topic suggestions while preserving separate canonical IDs. |
| 2026-07-20 | Keep the interactive to independent `C` and voltage-magnitude controls. | `q = Cv` and `U = ½Cv²` make charge and energy dependent outputs; the complete modeled device remains neutral. |
| 2026-07-20 | Set safety to `moderate` and require qualified-human review. | Retained energy, polarized failure, and mains-application boundaries are material even though no practical procedure is given. |
| 2026-07-20 | Use TIS 60252 Part 1-2568 only as an application-specific Thai example. | Its official scope is AC motor capacitors, not every capacitor or general servicing work. |
| 2026-07-20 | Keep Thai-language, qualified-human, exact-deployment, and publication decisions pending. | Their required authority or exact public evidence cannot be inferred from implementation and maintainer research. |
| 2026-07-20 | Verify the exact public candidate. | GitHub reported Vercel success for commit `182a8b0`; public English/Thai lesson pages passed metadata, interaction, deterministic suggestions, responsive containment, and console checks without inferring the remaining approvals. |

## Publication decision

The lesson is available at `review-ready` so the exact bilingual candidate can be inspected. It is **not published in the governance sense**. Promotion to `published` requires:

1. qualified-human review of this exact moderate-safety scope;
2. project-owner approval of the Thai wording;
3. successful exact-commit public deployment verification — passed on commit `182a8b0`;
4. project-owner publication approval; and
5. no material file change or expired evidence before those decisions.
