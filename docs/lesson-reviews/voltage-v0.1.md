# Voltage lesson review — v0.1

<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.voltage.v0.1",
  "recordState": "in-review",
  "sourceStatus": "verified",
  "reviewedRevision": "sha256:a157e3492aad3cc891569779826789b9a55456fc7efbf50966d01cd251414b7b",
  "reviewedAt": "2026-07-15",
  "nextReviewAt": "2027-01-14",
  "qualifiedReviewRequired": false,
  "qualifiedReviewReason": "The reviewed revision is a low-risk conceptual lesson with general safety boundaries, no live-work procedure, no installation instruction, and no claim that an exact Thai rule applies universally.",
  "blockers": [
    "owner-thai-language-approval",
    "visual-accessibility-review",
    "owner-publication-approval"
  ],
  "reviewedFiles": {
    "electrical-atlas-site/src/lib/lessonRegistry.ts": "e4cceaf27a952fde5d48d6c34cca262f75d69c2ef103d1d48f4871d40814d867",
    "electrical-atlas-site/src/content/lessons/en/voltage.mdx": "801061c892c21be084e18a73c09fe4dd202cf9cb95a849b319dbcd3a2587d883",
    "electrical-atlas-site/src/content/lessons/th/voltage.mdx": "7ff016ed44376d2c6979314d0ce8f45c296fe5a713466fb8a163e09af38c0e3c",
    "electrical-atlas-site/src/components/VoltageEnergyDemo.tsx": "96df4ef23f85535664f471785bd2c9ae77f6bee1d7a1635ace5e8644b47afce6",
    "electrical-atlas-site/src/lib/physics.ts": "ddd14938b8f49a96f9221699263faeabeb9fa9d4b866bf5135581d0a6ade9c67",
    "electrical-atlas-site/src/pages/en/lessons/voltage.astro": "26c874054cdf863b1b4fa57c2fd8dcc037185b8ea7aa06f7bba2154192960f3d",
    "electrical-atlas-site/src/pages/th/lessons/voltage.astro": "4ea78b5255c6140b8e10321a3bf980876ca7e3c0c4b05b35a030776997df9583",
    "electrical-atlas-site/src/styles/global.css": "c16eed3e51a98d8faf0fb1a6ff22ee64a94a7dda08d819b6e71ab9eef2026355"
  },
  "approvals": {
    "sourceReview": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer source audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-14",
      "note": "Exact sources and claim scopes recorded; final publication approval remains separate."
    },
    "technicalAccuracy": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer technical audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-14",
      "note": "Low-risk conceptual scope only; qualified review is required if practical or hazardous scope is added."
    },
    "englishContent": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer content audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-14",
      "note": "Definition, notation, sign convention, safety boundary, and source presentation corrected."
    },
    "thaiLanguage": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "Project-owner review of the prepared Thai wording is required."
    },
    "visualAccessibility": {
      "status": "pending",
      "reviewer": "Maintainer browser review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": null,
      "note": "Revised demo still requires desktop/mobile and assistive-semantics verification."
    },
    "qualifiedHuman": {
      "status": "not-required",
      "reviewer": "Publication governance risk matrix",
      "reviewerAuthority": "policy",
      "reviewedAt": "2026-07-14",
      "note": "Not required for this exact low-risk conceptual scope; reassess if practical, hazardous, installation, regulatory, or standards-sensitive instruction is added."
    },
    "implementationVerification": {
      "status": "passed",
      "reviewer": "Maintainer automated verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-15",
      "note": "Twelve Node checks, 73 Vitest tests across 11 files, Astro diagnostics for 90 files, the 3,245-page production build, 3,214 topic robots policies, and 3,246 internal references passed for the bound candidate files."
    },
    "previewDeployment": {
      "status": "passed",
      "reviewer": "Maintainer deployment verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-15",
      "note": "The deployed English and Thai Voltage routes returned HTTP 200 and exposed unique bound-candidate content markers after commit 764c7d3 reached production; rendered visual/accessibility review remains a separate gate."
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

Status: evidence is in review; the lesson is not approved for publication.

## Control record

| Field | Value |
| --- | --- |
| Lesson ID | `ea.lesson.voltage.v0.1` |
| Slug | `voltage` |
| Primary topic | `ea.fundamentals.voltage` |
| Languages | English and Thai |
| Registry status before review | `prototype` |
| Target preparation status | `review-ready` |
| Publication status | Pending project-owner decision |
| Source status | `verified` for this reviewed conceptual scope |
| Safety level | `low` — conceptual lesson with explicit live-measurement and mains boundaries |
| Thailand context | Required for one narrowly scoped ERC tariff/service example; no installation rule is given |
| Evidence review date | 2026-07-15 (source review completed 2026-07-14) |
| Next Thai-source currency check | 2027-01-14, or sooner if the ERC page changes |

## Approval ownership and gates

| Gate | Owner/reviewer | Current result | Publication effect |
| --- | --- | --- | --- |
| Source review | Codex-assisted maintainer source audit | Passed 2026-07-14 | Supports `sourceStatus: verified`; does not grant publication. |
| Low-risk technical accuracy | Codex-assisted maintainer technical audit | Passed 2026-07-14 for the current scope | Must be reassessed if hands-on, hazardous, or regulated practice is added. |
| English content | Codex-assisted maintainer content audit | Passed 2026-07-14 | No owner action required unless wording changes materially. |
| Thai language | Project owner | Pending | Blocks publication. |
| Visual/accessibility | Maintainer browser review | Pending | Blocks handoff as review-ready. |
| Preview/live deployment | Maintainer deployment verification | Passed 2026-07-15 at HTTP/content-integrity level | Rendered visual/accessibility review remains separate. |
| Final publication | Project owner | Pending | Blocks `published`. |

The project owner's acceptance of the governance model on 2026-07-14 approved these roles, not this lesson revision.

## Exact sources

| ID | Authority/author | Exact source | URL/locator | Reviewed | Scope and limitation | Next review |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | BIPM | *The International System of Units (SI)*, 9th edition (2019), official text updated 2026 | [SI Brochure](https://www.bipm.org/en/publications/si-brochure/) | 2026-07-14 | International SI units, symbols, and exact elementary-charge constant; not a circuit-design source. | On new SI edition |
| S02 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §7.2, “Electric Potential and Potential Difference” (2016) | [§7.2](https://openstax.org/books/university-physics-volume-2/pages/7-2-electric-potential-and-potential-difference) | 2026-07-14 | Foundational physics: `ΔV`, `ΔU`, `q`, `1 V = 1 J/C`, reference potential, and charge-sign behavior. | On material lesson revision |
| S03 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §7.4, “Determining Field from Potential” (2016) | [§7.4](https://openstax.org/books/university-physics-volume-2/pages/7-4-determining-field-from-potential) | 2026-07-14 | Electrostatic relation `𝐄 = -∇V`; does not justify the scalar-potential path relation for arbitrary induced fields. | On material lesson revision |
| S04 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §13.4, “Induced Electric Fields” (2016) | [§13.4](https://openstax.org/books/university-physics-volume-2/pages/13-4-induced-electric-fields) | 2026-07-14 | Supports the nonconservative induced-field limitation in the technical track. | On material lesson revision |
| S05 | Ling, Moebs, Sanny / OpenStax | *University Physics Volume 2*, §9.1, “Electrical Current” (2016) | [§9.1](https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current) | 2026-07-14 | Closed-path/current and carrier-response foundations; simplified lumped-circuit scope. | On material lesson revision |
| S06 | OpenStax | *College Physics*, §20.1, “Current” | [§20.1](https://openstax.org/books/college-physics/pages/20-1-current) | 2026-07-14 | Background distinction between carrier drift and electrical response. The reviewed lesson deliberately avoids publishing a propagation-speed comparison. | On material lesson revision |
| S07 | OpenStax | *College Physics 2e*, §21.4, “DC Voltmeters and Ammeters” | [§21.4](https://openstax.org/books/college-physics-2e/pages/21-4-dc-voltmeters-and-ammeters) | 2026-07-14 | Voltmeter parallel connection and finite input/loading concept; not a live-mains procedure. | On measurement-scope expansion |
| S08 | MIT OpenCourseWare | *Electromagnetic Fields and Energy*, Chapter 11, “Energy, Power Flow, and Forces” (Spring 2008) | [Chapter 11](https://ocw.mit.edu/courses/res-6-001-electromagnetic-fields-and-energy-spring-2008/pages/chapter-11/) | 2026-07-14 | Supports careful field-based energy-flow wording; advanced theory, not needed for beginner calculations. | On material lesson revision |
| S09 | CDC/NIOSH | “Electrical Safety in the Workplace” (2024) | [Official page](https://www.cdc.gov/niosh/electrical-safety/about/index.html) | 2026-07-14 | General occupational safety: qualified work, shock, burn/arc, and fire boundaries; not Thai law. | 2027-07-14 or source change |
| S10 | CDC/NIOSH and CPWR | *Electrical Safety: Power*, DHHS (NIOSH) Publication 2022-141 (2022) | [Official publication page](https://www.cdc.gov/niosh/docs/2022-141/default.html) | 2026-07-14 | De-energization and stored-energy warning; occupational context, not a complete procedure for this site. | 2027-07-14 or source change |
| S11 | Energizer | E91 AA alkaline product datasheet, form E91NA1018 | [Official PDF](https://data.energizer.com/pdfs/e91.pdf) | 2026-07-14 | One alkaline AA/LR6 product with nominal `1.5 V`; does not generalize to every AA chemistry. | On example/product change |
| S12 | Thailand Energy Regulatory Commission (สำนักงาน กกพ.) | “อัตราค่าบริการพลังงาน” — residential tariff page, live edition | [Official page](https://www.erc.or.th/th/tariff/1288) | 2026-07-14 | Notes some residential meter categories at `230 V`, 1 phase, 2 wire. Tariff/service classification only; not a universal installation rule. | 2027-01-14 or page change |
| S13 | Provincial Electricity Authority (PEA / กฟภ.) | PEA-METER-001 Ed.1, *Electronic Energy Meter Requirement*, dated 2024-05-02 | [Official PDF](https://www.pea.co.th/sites/default/files/documents/PEA-product-acceptance/7.PEA-METER-001%20Ed.1.pdf) | 2026-07-14 | PEA three-phase four-wire meter product requirement listing `230/400 V AC ±10%`, `50 Hz`; used only to prove why product/utility scope must not become a blanket national claim. | 2027-01-14 or new edition |
| S14 | IEC | IEC 60050-195:2021 and IEV 195-01-01, “reference earth” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsF/IEVref_xref/en%3A195-01-01) | 2026-07-14 | Terminology support for distinguishing a reference from Earth; no claim that all circuit grounds are protective earth. | On IEC edition change |
| S15 | Texas Instruments | SNVA559C, *Application Hints for Switching Regulators*, rev. February 2019 | [Official PDF](https://www.ti.com/lit/an/snva559c/snva559c.pdf) | 2026-07-14 | Engineering example for parasitic inductance, switching voltage spikes, and non-equipotential real ground paths; not a general safety rule. | On technical-track expansion |
| S16 | Fluke | “Dual Impedance Digital Multimeters,” live technical article | [Official article](https://www.fluke.com/en-us/learn/blog/digital-multimeters/dual-impedance-digital-multimeters) | 2026-07-14 | Explains capacitively coupled “ghost” readings on floating/open conductors; not permission to troubleshoot live mains. | On measurement-scope expansion |
| S17 | OpenStax | *Physics*, §18.3, “Electric Field” | [§18.3](https://openstax.org/books/physics/pages/18-3-electric-field) | 2026-07-14 | Introduces electric-field independence from a test charge and gives air-breakdown context; the lesson does not publish a universal insulation threshold. | On failure-mode expansion |
| S18 | IEC | IEC 60050-195, IEV 195-02-09, “protective conductor” | [IEC Electropedia entry](https://www.electropedia.org/iev/iev.nsf/display?ievref=195-02-09&openform=) | 2026-07-14 | Defines the electrical-safety role of a protective conductor; supports distinguishing it from an arbitrary circuit reference without providing an earthing design rule. | On IEC edition or entry change |

## Claim-to-source mapping

| Claim ID | Lesson locator | Risk class | Supported claim | Sources | Verdict and limitation |
| --- | --- | --- | --- | --- | --- |
| V-C01 | EN/TH §1; route subtitle | Conceptual physics/metrology | Voltage is electric potential difference; `ΔV = ΔU/q`; `1 V = 1 J/C`; voltage compares two points. | S01, S02 | Verified. Wording uses electric potential energy, not generic “electric energy.” |
| V-C02 | EN/TH §1 and §6; demo intro/transcript | Conceptual physics | The height analogy uses a positive test charge; `ΔU = qΔV`, so sign depends on charge and direction. | S02 | Verified. Demo reports magnitudes and explicitly declares positive `q`. |
| V-C03 | EN/TH §4–5 | Conceptual circuits/fields | A field can exist without a closed conductor; a closed path permits sustained current, and a source maintains terminal potential difference. | S02, S05 | Verified within introductory electrostatic/lumped-circuit scope. |
| V-C04 | EN/TH §5 | Conceptual electromagnetism | Mobile carriers are already present throughout a metal conductor, respond to the operating field, and a load does not wait for one particular electron to traverse the complete circuit. | S05, S08 | Verified without publishing a propagation-speed comparison or treating carrier motion as the mechanism of field-mediated energy transfer. |
| V-C05 | EN/TH §6 and technical track | Technical physics | Signed energy relation, `𝐄 = -∇V`, bounded path integral, and nonconservative-field limitation. | S02, S03, S04 | Verified for electrostatic/conservative fields; limitation is visible. |
| V-C06 | EN/TH §7 | Measurement/safety | A voltmeter compares two points and is conceptually connected in parallel; finite input resistance loads the circuit slightly. | S07 | Verified. Immediate no-live-measurement boundary prevents the paragraph becoming a novice procedure. |
| V-C07 | EN/TH §2 and §10; demo model note | Safety | Voltage alone does not determine all shock, thermal, arc, burn, or fire risk; work on or near exposed energized parts needs task-appropriate qualification and controls; disconnected equipment may retain energy. | S09, S10 | Verified as general U.S. occupational-safety framing, explicitly not Thai law or a complete safe-work method. |
| V-C08 | EN/TH §2 | Component example | An alkaline AA cell may be labelled `1.5 V`, while operating voltage varies. | S11 | Verified only for the explicitly named alkaline chemistry/product class. |
| V-C09 | EN/TH §2 Thailand callout | Thai descriptive context | An ERC residential tariff note describes some meter categories at `230 V`, 1 phase, 2 wire. | S12 | Verified as a narrowly scoped tariff/service example. S13 is retained only as separate PEA product-scope context and is not evidence for this ERC claim; the lesson explicitly rejects a universal installation interpretation. |
| V-C10 | EN/TH §3 and §8 | Terminology/safety | Circuit ground/reference, chassis, Earth, and protective earth are not automatically interchangeable or safe. | S14, S15, S18 | Verified at conceptual terminology level; no earthing design or wiring instruction is provided. |
| V-C11 | EN/TH §9 | Failure modes | Excess field can cause breakdown; energy can remain stored; switching/parasitic inductance can cause spikes; floating conductors may show coupled potential. | S10, S15, S16, S17 | Verified as broad mechanisms. Exact limits, ratings, and diagnostic procedures are out of scope. |
| V-C12 | Demo component and physics helper | Equation/model behavior | Magnitude model uses `|ΔU| = |q||ΔV|`, returns zero energy at zero difference, deliberately holds the `+q` marker fixed because motion is not simulated, hides the field at zero, and scales to `24 V × 25 µC = 600 µJ`. The displayed `|ΔU|` is the hypothetical change across the full selected plate-to-plate `|ΔV|`. | S01, S02 | Verified conceptually; implementation/test and browser evidence are recorded separately below. |

## Corrections made during review

- Replaced “electric energy” with “electric potential energy.”
- Replaced the symbol collision `E = Vq` / electric field `E` with `ΔU = qΔV` and vector `𝐄`.
- Added the charge-sign and direction boundary to the height analogy and 9 V example.
- Explicitly distinguished change “from A to B,” `V_B - V_A`, from the “A relative to B” notation `V_AB = V_A - V_B`.
- Corrected the field/path explanation: a battery has terminal potential difference with an open circuit; closing a conducting path permits sustained current.
- Removed an unsupported surface-charge mechanism and narrowed the carrier-response explanation so it no longer makes an unnecessary propagation-speed claim.
- Added bounds and the electrostatic/conservative-field limitation to the path integral.
- Separated shock risk from high-current short-circuit, arc, burn, and fire hazards.
- Distinguished circuit ground/reference, chassis, Earth, and protective earth.
- Put the no-live-measurement warning directly beside the voltmeter paragraph.
- Removed the unsupported battery-specific low-voltage arc example and narrowed the qualified-work statement to work on or near exposed energized parts, with the U.S.-guidance/Thai-law boundary stated explicitly.
- Replaced the generalized Thai mains claim with a directly linked, narrowly scoped ERC tariff/service example and explicit limitation.
- Reworked the demo to hold the marker fixed while explicitly stating that motion is not simulated and that the displayed energy change is hypothetical across the full selected plate-to-plate difference.
- Added equal-potential/zero-field behavior, the positive-charge sign, high-to-low field direction, the real energy-bar maximum, and light-theme diagram colors that keep essential strokes at useful contrast.
- Added native range semantics, spoken value text with a meaningful live-output prefix, visible focus, touch-target sizing, localized interactive labels, scientific notation for electron count, and collision-resistant IDs.
- Corrected route metadata, removed the obsolete language-switch label prop, and aligned browser theme color with the current light theme.
- Removed the manually named “good next lessons” sentence; the relationship-driven suggestion section remains authoritative.

## Thai-language review preparation

The revision now uses:

- `พลังงานศักย์ไฟฟ้า` for electric potential energy;
- `ประจุทดสอบบวก` when sign convention matters;
- `จุดต่อ` in beginner prose and `โหนด` in the technical track;
- explicit distinctions among `กราวด์ของวงจร`, `โครงเครื่อง`, `ดิน`, and `สายดินป้องกัน`;
- `การทะลุทางไฟฟ้าของฉนวน`, `แรงดันพุ่งชั่วขณะ`, and other glossary-aligned terms used by this revision;
- `สมอ. / มอก.` in the correct TISI/TIS mapping order.

Final judgment of natural Thai wording belongs to the project owner and is still pending.

## Verification evidence

| Gate | Result |
| --- | --- |
| Focused lifecycle and implementation tests | Passed 2026-07-15; included in the full results below. |
| Full website test suite | Passed: 12 Node checks and 73 Vitest tests across 11 files. |
| Astro/type check | Passed: 90 files, 0 errors, warnings, or hints. |
| Production build and internal-link validation | Passed: 3,245 pages, 3,214 topic robots policies, and 3,246 unique root-relative references validated. |
| Desktop English/Thai visual check | Pending browser review |
| Mobile English/Thai visual check | Pending browser review |
| Native keyboard controls and visible focus | Source/code review passed; rendered keyboard verification remains pending. |
| Reduced-motion behavior | Source/code review passed; rendered reduced-motion verification remains pending. |
| Screen-reader-oriented names, live output, and transcript | Source/code review passed; assistive-technology verification remains pending. |
| Deployed English/Thai pages | Passed HTTP/content-integrity check: both routes returned 200 and exposed unique candidate markers after commit `764c7d3`; rendered review remains pending. |

## Known limitations and review triggers

- This lesson explains voltage conceptually; it does not teach live measurement, installation, protection selection, or compliance.
- The parallel-plate visual is a deliberately simplified positive-test-charge model, not a literal wire-level circuit animation.
- Component label examples are illustrative; operating voltage varies with device, load, state, temperature, chemistry, and specification.
- The ERC `230 V` statement is limited to the residential tariff/service wording cited. It must not be reused as a universal Thai installation requirement.
- Add a qualified reviewer before adding exact shock thresholds, safe-working limits, test procedures, or Thai installation requirements.
- Set `sourceStatus` to `needs-update` if a cited source disappears, a Thai page or document changes scope, or the lesson expands beyond this evidence.

## Decision history

| Date | Decision | By | Result |
| --- | --- | --- | --- |
| 2026-07-14 | Approve governance roles and begin Voltage pilot | Project owner | Approved process only; no lesson publication approval. |
| 2026-07-14 | Source, technical, English, Thai-preparation, and demo audit | Codex-assisted maintainer review | Corrections implemented; owner Thai review and browser/deployment evidence remain. |
| 2026-07-15 | Run revision-bound implementation gate | Maintainer automated verification | Tests, Astro diagnostics, production build, robots policy, and internal-reference validation passed; rendered browser review remains pending. |
| 2026-07-15 | Verify deployed candidate routes | Maintainer deployment verification | English and Thai routes returned HTTP 200 with unique current-candidate markers; no visual/accessibility approval inferred. |

## Publication decision

- Registry status after review preparation: Implementation and deployment-integrity gates passed; rendered visual/accessibility and owner gates remain, so the lesson must stay below `published`.
- Project-owner publication decision: Pending.
- Thai-language decision: Pending.
- Qualified-review decision: Not required for the current low-risk conceptual scope; reassess if scope changes.
- Final publication date: Pending.
- Remaining limitations accepted by owner: Pending.

Do not mark this lesson `published` until the project owner explicitly completes the pending decisions above.
