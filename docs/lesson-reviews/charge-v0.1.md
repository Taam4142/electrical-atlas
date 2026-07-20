# Electric Charge lesson review — v0.1

<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.charge.v0.1",
  "recordState": "in-review",
  "sourceStatus": "verified",
  "reviewedRevision": "sha256:5459cf8df3a5375af3abc340038f6a3a667fa3dc62a3e6eeb220fa67194124d8",
  "reviewedAt": "2026-07-20",
  "nextReviewAt": "2027-07-20",
  "qualifiedReviewRequired": false,
  "qualifiedReviewReason": "The reviewed revision is a low-risk conceptual lesson with a bounded electron-transfer model, no live-work procedure, no installation instruction, and no claim that a Thai or international ESD standard supplies a universal human-safety threshold.",
  "blockers": [
    "preview-deployment-verification",
    "owner-thai-language-approval",
    "owner-publication-approval"
  ],
  "reviewedFiles": {
    "electrical-atlas-site/src/lib/lessonRegistry.ts": "7b01e3c8cd9c174f1aafb573520f28a7cba0c9c62961a7ee00456237b97eb475",
    "electrical-atlas-site/src/content/lessons/en/charge.mdx": "f7cc556851d08e1eae894b5ff9b088177d15852bb09f065427837f6c6c36d30b",
    "electrical-atlas-site/src/content/lessons/th/charge.mdx": "08c6fd05459309be3f00e1749b568efa59cf1a865a10fe5943ac987c9e310557",
    "electrical-atlas-site/src/components/ChargeTransferDemo.tsx": "3485d19203f1a3c66a8d81aab131960c53a7ce8c6e54492b06222f2501486693",
    "electrical-atlas-site/src/lib/chargeModel.ts": "4a08a5754b32c0707f5022cbcf6fee140de878177bd2da99217c3d70e5a3e3d4",
    "electrical-atlas-site/src/lib/physics.ts": "9d981d77f41304211bd37e6f71f695499851e4e513a4e360b6a5d66a5adbaec7",
    "electrical-atlas-site/src/pages/en/lessons/charge.astro": "92da6cd843155bffbc238ea993d9e04818c79e2000c2ead227bdc7c9e54983fe",
    "electrical-atlas-site/src/pages/th/lessons/charge.astro": "ad8d529a28f9c6e7bd368fe3ad3f80da27732f88a831fe492bc84861acc2a880",
    "electrical-atlas-site/src/styles/charge-demo.css": "ab07aa6f24c5c9e7ba5c3003cd96f1645f3845e7a0b9ebe611a4d83c4a852b30",
    "electrical-atlas-site/src/styles/global.css": "a3d77fbdded3732744a7be81e825ae8b46c2d4c47ab5d71d6233e4ee51869613",
    "electrical-atlas-site/src/layouts/BaseLayout.astro": "61bdf275bc02f1daef8f59c04246a50fa718b2085ba82d30a0d5bf537090d408",
    "electrical-atlas-site/src/components/LanguageSwitch.astro": "8885360403db09c26c56775e6aa46bac334c44780cde3c988d234ad1921ea287",
    "electrical-atlas-site/src/components/LessonShell.astro": "4f883c4196dc691e89e26fd17bb32ea4349984ed02bd2bbb9a62454ec8e77852",
    "electrical-atlas-site/src/components/LessonModeToggle.tsx": "ad868979e1a10a369676c87306a3ba487e7114a8b339d4ed39841fdbb9366177",
    "electrical-atlas-site/src/lib/generated/atlasTopics.ts": "97ebe07b32cec59b107bef8329e847eebc5aca081591d2092904127e837968ed",
    "electrical-atlas-site/src/lib/topicLabels.ts": "aa8613f68e11228ebe9d793a06a141956cc81c8975df30dcb26830202a92cf69",
    "electrical-atlas-site/src/lib/navigation.ts": "bf6f57be6e15bf4f98980885ce39f6f3b7732ab36f89cd5b62a828c0cfd6801f",
    "electrical-atlas-site/src/lib/relationships.ts": "5aacc0d5c587c696691f25daa9dd13278c9de32bd558e7583124971ef6a8be37",
    "electrical-atlas-site/src/lib/suggestions.ts": "21c5c24f3c21fbedd83767123126c54620b20644a28ea85ff4d8f29054111024",
    "electrical-atlas-site/src/components/SuggestionSection.astro": "68dcf8965bc3a612104f655cfca7852a482990ab217950288878eb6f864a321f"
  },
  "approvals": {
    "sourceReview": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer source audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "Primary and authoritative sources are mapped to the exact conceptual, equation, material-carrier, ESD, and Thai-context claims. Standards are scope-limited and final publication approval remains separate."
    },
    "technicalAccuracy": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer technical audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "Definitions, signed bookkeeping, conservation, ordinary-matter quantization boundary, carrier distinctions, polarization, continuity equation, Coulomb model, and the bounded electron-transfer demo were reviewed for this low-risk conceptual scope."
    },
    "englishContent": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer content audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "The English lesson was checked for defined notation, explicit model limits, common misconceptions, safety boundaries, source presentation, and beginner-to-technical progression."
    },
    "thaiLanguage": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "The Thai lesson is implemented and checked for structural parity, but final Thai wording approval belongs to the project owner."
    },
    "qualifiedHuman": {
      "status": "not-required",
      "reviewer": "Publication governance risk matrix",
      "reviewerAuthority": "policy",
      "reviewedAt": "2026-07-20",
      "note": "Not required for this exact low-risk conceptual scope; reassess if practical ESD control, live work, hazardous-location, installation, lightning, or regulatory procedure is added."
    },
    "implementationVerification": {
      "status": "passed",
      "reviewer": "Maintainer automated verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "Charge-model unit tests, interaction contract tests, registry and relationship checks, the complete automated suite, Astro diagnostics, and the production build pass for the bound candidate."
    },
    "visualAccessibility": {
      "status": "passed",
      "reviewer": "Maintainer browser review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "English and Thai local pages were reviewed across narrow and desktop layouts for hydration, overflow, control size, limits, reset, localized live status, focus retention, transcript, suggestions, and console output. Native buttons and focus behavior are present; this browser backend did not reliably demonstrate Enter/Space activation, OS reduced motion, a named screen reader, or actual 400% browser zoom, so those platform results are not claimed."
    },
    "previewDeployment": {
      "status": "pending",
      "reviewer": "Maintainer deployment verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": null,
      "note": "The exact reviewed candidate must be pushed, deployed, and checked on the public English and Thai routes before this gate can pass."
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

Status: the lesson is `review-ready`, not approved for publication.

## Control record

| Field | Value |
| --- | --- |
| Lesson ID | `ea.lesson.charge.v0.1` |
| Slug | `charge` |
| Primary topic | `ea.fundamentals.charge` |
| Languages | English and Thai |
| Registry status before review | `prototype` |
| Registry status after preparation | `review-ready` |
| Publication status | Pending project-owner decision |
| Source status | `verified` for this reviewed conceptual scope |
| Safety level | `low` — conceptual explanation with explicit no-mains and no-procedure boundaries |
| Thailand context | No Thai installation claim; one Thai ESD device-protection standard and Thai educational/metrology sources are scope-labelled |
| Evidence review date | 2026-07-20 |
| Next source currency check | 2027-07-20, or earlier after a source, standard, safety scope, or material lesson change |

## Approval ownership and gates

| Gate | Owner/reviewer | Current result | Publication effect |
| --- | --- | --- | --- |
| Source review | Codex-assisted maintainer source audit | Passed 2026-07-20 | Supports `sourceStatus: verified`; does not grant publication. |
| Low-risk technical accuracy | Codex-assisted maintainer technical audit | Passed 2026-07-20 | Must be reassessed if hazardous or practical scope is added. |
| English content | Codex-assisted maintainer content audit | Passed 2026-07-20 | Bound to the reviewed file manifest. |
| Thai language | Project owner | Pending | Blocks publication, not review-ready preparation. |
| Qualified-human review | Publication governance risk matrix | Not required 2026-07-20 | Applies only to this low-risk conceptual revision. |
| Implementation verification | Maintainer automated verification | Passed 2026-07-20 | Bound tests and build must remain green. |
| Visual/accessibility | Maintainer browser review | Passed 2026-07-20 with stated platform limits | Supports review readiness; does not claim screen-reader certification. |
| Preview deployment | Maintainer deployment verification | Pending | Exact deployed candidate must be checked. |
| Publication | Project owner | Pending | Blocks `published`. |

## Exact sources

| ID | Authority / author | Exact source | Direct locator | Reviewed | Scope used here | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | IEC | IEC 60050, IEV 113-02-10, “electric charge” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=113-02-10&openform=) | 2026-07-20 | Canonical quantity definition and coulomb unit context; no wording is copied into the lesson. | On IEC entry or edition change |
| S02 | IEC | IEC 60050, IEV 121-11-04, “electrically neutral” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=121-11-04&openform=) | 2026-07-20 | Net-charge terminology; does not imply absence of charged constituents. | On IEC entry or edition change |
| S03 | IEC | IEC 60050, IEV 113-05-16, “elementary electric charge” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=113-05-16&openform=) | 2026-07-20 | Elementary-charge terminology and sign convention. | On IEC entry or edition change |
| S04 | BIPM | *The International System of Units (SI)*, 9th edition (2019), current official text | [SI Brochure](https://www.bipm.org/en/publications/si-brochure/) | 2026-07-20 | Coulomb, ampere-second, and exact SI elementary-charge value. | On new SI edition |
| S05 | NIST | CODATA Value: elementary charge | [NIST constant page](https://physics.nist.gov/cuu/Constants/Value/e.html) | 2026-07-20 | Independent authoritative display of the exact elementary-charge value and unit. | On CODATA or page change |
| S06 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.1, “Electric Charge” (2016) | [§5.1](https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-charge) | 2026-07-20 | Sign, neutrality, conservation, electron/proton bookkeeping, and introductory ordinary charge quantization. | On material lesson revision |
| S07 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.2, “Conductors, Insulators, and Charging by Induction” (2016) | [§5.2](https://openstax.org/books/university-physics-volume-2/pages/5-2-conductors-insulators-and-charging-by-induction) | 2026-07-20 | Charge redistribution, contact charging, conductors, insulators, polarization, and bounded induction explanation. | On material lesson revision |
| S08 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §5.3, “Coulomb's Law” (2016) | [§5.3](https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law) | 2026-07-20 | Two stationary point charges in vacuum and explicit limits of the elementary force model. | On technical-track revision |
| S09 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.1, “Electrical Current” (2016) | [§9.1](https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current) | 2026-07-20 | Current as signed charge-transfer rate and carrier-dependent transport. | On current-scope revision |
| S10 | MIT OpenCourseWare | *Electromagnetic Fields and Energy*, Chapter 2, “Maxwell's Differential Laws in Free Space” (Spring 2008) | [Official chapter PDF](https://ocw.mit.edu/courses/res-6-001-electromagnetic-fields-and-energy-spring-2008/1e8d59800f74bd41872c7a673e473509_02.pdf) | 2026-07-20 | Local and integral continuity-equation support; advanced free-space treatment, not a beginner transport model. | On technical-track revision |
| S11 | OpenStax | *Chemistry 2e*, §11.2, “Electrolytes” | [§11.2](https://openstax.org/books/chemistry-2e/pages/11-2-electrolytes) | 2026-07-20 | Positive and negative ions as mobile charge carriers in electrolytes. | On carrier-scope revision |
| S12 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 3*, §9.6, “Semiconductors and Doping” (2016) | [§9.6](https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping) | 2026-07-20 | Introductory electron and hole carrier behavior; no device-level transport claim. | On semiconductor-scope revision |
| S13 | U.S. Department of Energy | “DOE Explains...Plasma,” current public explainer | [Official DOE page](https://www.energy.gov/science/doe-explainsplasma) | 2026-07-20 | Electrons and ions as charged constituents of ionized gas/plasma; not a plasma-device model. | 2027-07-20 or source change |
| S14 | U.S. Department of Energy | “DOE Explains...Batteries,” current public explainer | [Official DOE page](https://www.energy.gov/science/doe-explainsbatteries) | 2026-07-20 | High-level electrochemical separation and external electron path; no chemistry-specific design claim. | 2027-07-20 or source change |
| S15 | EOS/ESD Association | *Fundamentals of Electrostatic Discharge — Part One: An Introduction to ESD* | [Official PDF](https://www.esda.org/assets/Documents/Fundamentals-of-ESD-Part-1-An-Introduction-to-ESD.pdf) | 2026-07-20 | Contact/separation factors and damage to electrostatic-discharge-sensitive devices; not a universal personnel-safety threshold. | 2027-07-20 or source change |
| S16 | Thai Industrial Standards Institute | TIS 3458 Part 5(2)-2565, *Electrostatics: Protection of electronic devices from electrostatic phenomena — User guide* | [Official TISI record](https://a.tisi.go.th/t/?n=7020) | 2026-07-20 | Thai standards context for electronic-device ESD protection; identical adoption of IEC TR 61340-5-2:2018, not a human-safety or installation procedure. | 2027-07-20 or TIS revision |
| S17 | U.S. Occupational Safety and Health Administration | *OSHA Technical Manual*, Section IV, Chapter 5, “Ethanol Processing” | [Official OSHA chapter](https://www.osha.gov/otm/section-4-safety-hazards/chapter-5) | 2026-07-20 | Industry-specific evidence that static discharge can ignite a flammable vapour–air mixture; explicitly not Thai law. | 2027-07-20 or source change |
| S18 | U.S. Occupational Safety and Health Administration | *Hazard Communication Guidance for Combustible Dusts*, OSHA 3371-08 2009 | [Official OSHA publication](https://www.osha.gov/publications/3371combustible-dust) | 2026-07-20 | Combustible-dust explosion/ignition context; not a design method or Thai regulatory rule. | 2027-07-20 or source change |
| S19 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, video 14, charge and conservation | [Official IPST lesson](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-014/) | 2026-07-20 | Thai educational terminology and curriculum alignment for charge and conservation; not publication-language approval. | On IPST lesson change |
| S20 | Institute for the Promotion of Teaching Science and Technology | Project 14, Physics M.5 Book 4, video 15, charging by induction | [Official IPST lesson](https://proj14.ipst.ac.th/m4-6-physics/m5-phys-book4/phys-m5b4-015/) | 2026-07-20 | Thai educational terminology and curriculum context for induction. | On IPST lesson change |
| S21 | National Institute of Metrology (Thailand) | Thai public metrology article on the revised SI | [Official NIMT article](https://www.nimt.or.th/main/?p=29005) | 2026-07-20 | Thai metrology context for SI definitions; BIPM remains the canonical value source. | On NIMT article or SI change |
| S22 | IEC | IEC 60050, IEV 121-12-02, “conductor” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=121-12-02&openform=) | 2026-07-20 | Condition-dependent conductor terminology; no material is labelled absolutely conductive under all conditions. | On IEC entry or edition change |
| S23 | IEC | IEC 60050, IEV 121-11-37, “electric polarization” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=121-11-37&openform=) | 2026-07-20 | Polarization terminology and distinction from net charging. | On IEC entry or edition change |
| S24 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.2, “Model of Conduction in Metals” (2016) | [§9.2](https://openstax.org/books/university-physics-volume-2/pages/9-2-model-of-conduction-in-metals) | 2026-07-20 | Introductory conduction-electron drift in a bound metal lattice; no universal material parameter is claimed. | On carrier-scope revision |

## Claim-to-source mapping

| Claim ID | Lesson/demo locator | Risk class | Reviewed claim | Supporting sources | Verdict / limitation |
| --- | --- | --- | --- | --- | --- |
| CH-C01 | EN/TH §1; route summary | Foundational definition | Electric charge is an additive signed scalar quantity associated with electromagnetic interaction; `q` and `Q` are context-dependent notation and `C` is the SI unit. | S01, S04 | Verified. The plain-language “property, not substance” statement is explanatory. |
| CH-C02 | EN/TH §2 and §6; demo transcript | Metrology/physics | Electron `−e`, proton `+e`, neutron zero net charge, and exact `e = 1.602 176 634 × 10⁻¹⁹ C`; ordinary-matter bookkeeping uses signed elementary-charge units. | S03, S04, S05, S06 | Verified for the explicitly bounded introductory ordinary-matter model; no universal advanced-particle claim is made. |
| CH-C03 | EN/TH §2 and common mistakes | Conceptual physics | Neutral means zero net signed charge, not absence of charged constituents; positive and negative are sign conventions. | S02, S06 | Verified. |
| CH-C04 | EN/TH §3 and technical track | Conservation law | Charge transfer changes subsystem charge while total charge of an isolated system is conserved; open-system change is accounted for at its boundary. | S06, S10 | Verified. Annihilation and specialist field-theory cases are not taught here. |
| CH-C05 | Interactive demo and model helper | Model behavior | Moving one displayed electron A→B yields `+e` on A and `−e` on B; pair total remains zero; the visual model is bounded to five transfers in either direction and reset restores neutrality. | S04, S06 | Verified for the declared two-neutral-metal-object teaching model. The drawing is not atomic scale or a force simulation. |
| CH-C06 | EN/TH §4 | Materials/transport | Mobile carriers depend on material: metal conduction electrons, electrolyte ions, semiconductor electrons/holes, and plasma electrons/ions. | S09, S11, S12, S13, S24 | Verified as introductory categories. Detailed band, electrochemical, and plasma transport is deferred. |
| CH-C07 | EN/TH §5 | Materials | Conductors redistribute charge and insulating media permit negligible bulk current only under stated conditions; moisture, temperature, field, frequency, direction, and material condition can change behavior. | S07, S15, S22 | Verified as a qualitative and condition-dependent distinction; no numeric leakage or breakdown threshold is supplied. |
| CH-C08 | EN/TH §5 | Charging mechanism | Contact and separation can transfer charge; rubbing repeats such contacts, and the amount/direction depends on materials and conditions rather than creating charge from nothing. | S06, S07, S15 | Verified at introductory level. Triboelectric series ranking and microscopic mechanism are intentionally deferred. |
| CH-C09 | EN/TH §5 and common mistakes | Electrostatics | Polarization can redistribute charge while net charge stays zero; attraction does not alone prove opposite net charge; lasting induction requires a complete defined sequence. | S07, S20, S23 | Verified. The lesson does not teach a hands-on charging procedure. |
| CH-C10 | EN/TH §6 and technical track | Equation/transport | `1 C = 1 A·s`; after defining an oriented surface, `I = dQ_transferred/dt`; local and fixed-control-volume continuity equations express charge conservation. | S04, S09, S10 | Verified with symbols, orientation, carrier-current-density meaning, and control-volume boundary defined. |
| CH-C11 | EN/TH technical track | Electrostatic model | The vector Coulomb expression applies to two stationary point charges in vacuum; sign sets direction and extended/material/time-varying systems need richer models. | S08 | Verified within the displayed limitations. |
| CH-C12 | EN/TH §7 | Energy-storage context | A battery separates charge and maintains terminal potential difference through electrochemical processes; it is not a tank of spare electrons. | S14 | Verified only as a high-level bridge to the later battery lesson. |
| CH-C13 | EN/TH §9 and sources | ESD/equipment safety | Electrostatic discharge can damage electronic devices; Thai TIS 3458 Part 5(2)-2565 is device-protection guidance, not a universal human-safety threshold or installation procedure. | S15, S16 | Verified with the scope distinction visible beside the source. |
| CH-C14 | EN/TH §9 | Ignition/safety boundary | Static discharge can ignite some flammable vapour–air mixtures or combustible-dust clouds, and risk cannot be reduced to one universal charge or voltage. | S17, S18 | Verified as general hazard context. The sources are U.S.-specific and do not establish Thai law, a threshold, or a work procedure. |
| CH-C15 | Thai lesson; sources | Thai educational/metrology context | Thai terms and sequencing are aligned with public IPST and NIMT context, while final Thai-language approval remains with the project owner. | S19, S20, S21 | Prepared, not owner-approved. Source alignment cannot substitute for native editorial approval. |

## Corrections made during review

- Defined `q` and `Q` as context-dependent notation instead of imposing one universal convention.
- Replaced the literal “fixed nuclei” metal picture with lattice ions bound near lattice sites.
- Defined the oriented surface and signed transferred charge before `I = dQ/dt`.
- Limited `Q = Ne` to the ordinary isolated-particle and bulk-matter teaching scale.
- Defined transport current density and corrected the continuity-equation volume/boundary notation.
- Scoped Coulomb's law to stationary point charges in vacuum and named its missing cases.
- Narrowed ESD ignition language to ignitable vapour–air mixtures and combustible-dust clouds.
- Added a Thai TIS device-protection source with an explicit warning that it is not a human-safety threshold or installation procedure.
- Clamped the interactive model at `±5e`, made the limit explicit, shortened live announcements, localized spoken directions, and removed redundant accessibility descriptions.

## Implementation and browser evidence

| Check | Evidence |
| --- | --- |
| Deterministic model | Unit tests cover neutral, positive, negative, conserved-pair, exact-constant, count, direction, and bounded display cases. |
| Component contract | Tests cover native controls, localized accessible names, concise live output, transcript, limit status, reset, CSS import, and disclosed model boundaries. |
| Registry and relationships | Charge is curriculum order 2, routes exist in both languages, source/review metadata is linked, topic coverage resolves, and suggestions are generated from structured relationships. |
| Automated project checks | Complete Vitest, Astro diagnostics, production generation, robots policy, and internal-link validation pass for the bound candidate. |
| English browser behavior | Hydration, both transfer directions, `±5e` clamp, disabled-at-limit behavior, reset, live wording, focus retention, ten suggestions, layout, and console were inspected. |
| Thai browser behavior | Thai language metadata, wrapping, localized controls/live text, interaction, reset, ten suggestions, layout, and console were inspected. |
| Responsive geometry | Narrow 320 px and 375 px, intermediate 760 px, and desktop layouts were checked for document overflow and minimum control size. Narrow viewport is an approximation of reflow pressure, not a claim of actual browser 400% zoom. |
| Assistive-technology boundary | Native semantic buttons and focus behavior were inspected. This browser backend did not reliably demonstrate Enter/Space activation, an OS reduced-motion preference, or a named screen reader; those platform checks remain future manual QA rather than hidden claims. |

## Known limitations and review triggers

- The two-object demo visualizes signed bookkeeping, not atomic geometry, field lines, force, capacitance, or real discharge dynamics.
- The exact elementary-charge constant is represented by an ordinary JavaScript number in calculations; displayed text retains the SI-defined decimal value, while machine arithmetic uses binary floating-point approximation.
- Carrier bullets are introductory category examples, not complete transport theories.
- The technical track does not cover relativistic field theory, quantum electrodynamics, specialist quasiparticle descriptions, or charge renormalization.
- Safety text is a boundary, not a safe-work procedure. Adding experiments, ESD workstation design, hazardous-location thresholds, grounding/bonding steps, lightning protection, or Thai installation requirements triggers qualified and standards-specific review.
- A material lesson, model, shared registry, route shell, suggestion system, or presentation change invalidates the recorded file hashes and requires deliberate re-review.
- Final Thai-language approval, exact public-deployment verification, and final publication approval remain open.

## Decision history

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-07-20 | Bound the lesson to schema-v2 review evidence and moved it from `prototype`/`draft` to `review-ready`/`verified`. | Exact sources, claims, implementation, and local visual evidence meet the preparation gates for this low-risk conceptual scope. |
| 2026-07-20 | Marked qualified-human review not required for this revision. | The lesson contains no live-work, installation, or practical hazardous procedure; the decision must be revisited if scope expands. |
| 2026-07-20 | Kept Thai-language, preview-deployment, and publication gates pending. | These decisions require project-owner authority or evidence from the exact deployed commit and cannot be inferred from local implementation. |

## Publication decision

The lesson is available as a review-ready page so it can be inspected. It is **not published in the governance sense**. Promotion to `published` requires:

1. project-owner approval of the Thai wording;
2. public verification of the exact hash-bound candidate;
3. project-owner publication approval; and
4. no material file change or expired evidence before that decision.
