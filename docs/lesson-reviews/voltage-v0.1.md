# Voltage lesson review — v0.1

<!-- lesson-review-control
{
  "schemaVersion": 2,
  "lessonId": "ea.lesson.voltage.v0.1",
  "recordState": "in-review",
  "sourceStatus": "verified",
  "reviewedRevision": "sha256:e7478278251d1b652bc817ae6b7590aaf99e4adf6f39a71973fff680b371df16",
  "reviewedAt": "2026-07-20",
  "nextReviewAt": "2027-01-14",
  "qualifiedReviewRequired": false,
  "qualifiedReviewReason": "The reviewed revision is a low-risk conceptual lesson with general safety boundaries, no live-work procedure, no installation instruction, and no claim that an exact Thai rule applies universally.",
  "blockers": [
    "owner-thai-language-approval",
    "owner-publication-approval"
  ],
  "reviewedFiles": {
    "electrical-atlas-site/src/lib/lessonRegistry.ts": "7b01e3c8cd9c174f1aafb573520f28a7cba0c9c62961a7ee00456237b97eb475",
    "electrical-atlas-site/src/content/lessons/en/voltage.mdx": "801061c892c21be084e18a73c09fe4dd202cf9cb95a849b319dbcd3a2587d883",
    "electrical-atlas-site/src/content/lessons/th/voltage.mdx": "7ff016ed44376d2c6979314d0ce8f45c296fe5a713466fb8a163e09af38c0e3c",
    "electrical-atlas-site/src/components/VoltageEnergyDemo.tsx": "df37130d9eba89fddb523d0da5ff56ffa013538ebd2bfe3a7f9706034d32a5e7",
    "electrical-atlas-site/src/lib/interaction.ts": "d76cac73cace1f61231aea7c3fc6bca60da10538a0f9a77c206134aa28792269",
    "electrical-atlas-site/src/lib/numberFormatting.ts": "afe52e71cad5c75720046dc4ec6c9771ad67c1f937b36131fa99fd5b0a84df6c",
    "electrical-atlas-site/src/lib/physics.ts": "9d981d77f41304211bd37e6f71f695499851e4e513a4e360b6a5d66a5adbaec7",
    "electrical-atlas-site/src/pages/en/lessons/voltage.astro": "26c874054cdf863b1b4fa57c2fd8dcc037185b8ea7aa06f7bba2154192960f3d",
    "electrical-atlas-site/src/pages/th/lessons/voltage.astro": "4ea78b5255c6140b8e10321a3bf980876ca7e3c0c4b05b35a030776997df9583",
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
      "reviewedAt": "2026-07-14",
      "note": "Exact sources and claim scopes recorded; final publication approval remains separate."
    },
    "technicalAccuracy": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer technical audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-16",
      "note": "The Voltage numeric model remains unchanged. The shared physics-file diff affects only the separate lamp demo: it uses discrete open/closed states and explicit source-voltage, load-resistance, steady-current, and load-power fields. Voltage functions and claims were re-inspected. Low-risk conceptual scope only; qualified review is required if practical or hazardous scope is added."
    },
    "englishContent": {
      "status": "passed",
      "reviewer": "Codex-assisted maintainer content audit",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-15",
      "note": "Definition, notation, sign convention, safety boundary, source presentation, and the rounded spoken energy value were reviewed."
    },
    "thaiLanguage": {
      "status": "pending",
      "reviewer": "Project owner",
      "reviewerAuthority": "project-owner",
      "reviewedAt": null,
      "note": "Project-owner review of the prepared Thai wording is required."
    },
    "visualAccessibility": {
      "status": "passed",
      "reviewer": "Maintainer browser review",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "The established English and Thai desktop and narrow-layout evidence remains valid. The rebound local candidate retained review-ready/source metadata, localized range behavior and live output, correct language metadata, no document overflow, and now renders eleven relationship-driven suggestions with Charge first. CSS still provides the 3 px focus-visible rule and reduced-motion override. This browser backend could not emulate keyboard-only focus modality, actual 400% zoom, the OS reduced-motion preference, or a named screen reader, so no platform result for those checks is claimed."
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
      "reviewedAt": "2026-07-20",
      "note": "The rebound candidate passed the complete Node and Vitest suites, Astro diagnostics, production generation, topic robots-policy audit, and internal-link validation. Voltage content and calculations remain unchanged; shared registry and relationship changes add the reviewed Charge lesson and its prerequisite links."
    },
    "previewDeployment": {
      "status": "passed",
      "reviewer": "Maintainer deployment verification",
      "reviewerAuthority": "maintainer",
      "reviewedAt": "2026-07-20",
      "note": "Vercel reported success for exact rebound commit d10c466. Public English and Thai Voltage routes retained review-ready/verified metadata, no narrow-layout overflow, eleven suggestions with Charge first, correct localized paths and Thailand-context labels, and no browser-console warning or error. Commits 7414277 and 0bea714 remain historical evidence."
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

Status: review preparation is complete; the lesson is `review-ready`, not approved for publication.

## Control record

| Field | Value |
| --- | --- |
| Lesson ID | `ea.lesson.voltage.v0.1` |
| Slug | `voltage` |
| Primary topic | `ea.fundamentals.voltage` |
| Languages | English and Thai |
| Registry status before review | `prototype` |
| Target preparation status | `review-ready` |
| Registry status after preparation | `review-ready` |
| Publication status | Pending project-owner decision |
| Source status | `verified` for this reviewed conceptual scope |
| Safety level | `low` — conceptual lesson with explicit live-measurement and mains boundaries |
| Thailand context | Required for one narrowly scoped ERC tariff/service example; no installation rule is given |
| Evidence review date | 2026-07-20 (source review completed 2026-07-14) |
| Next Thai-source currency check | 2027-01-14, or sooner if the ERC page changes |

## Approval ownership and gates

| Gate | Owner/reviewer | Current result | Publication effect |
| --- | --- | --- | --- |
| Source review | Codex-assisted maintainer source audit | Passed 2026-07-14 | Supports `sourceStatus: verified`; does not grant publication. |
| Low-risk technical accuracy | Codex-assisted maintainer technical audit | Passed 2026-07-16 for the current scope | Must be reassessed if hands-on, hazardous, or regulated practice is added. |
| English content | Codex-assisted maintainer content audit | Passed 2026-07-15 | No owner action required unless wording changes materially. |
| Thai language | Project owner | Pending | Blocks publication. |
| Visual/accessibility | Maintainer browser review | Passed 2026-07-20 with documented emulation boundaries | Supports `review-ready`; does not grant Thai-language or publication approval. |
| Preview/live deployment | Maintainer deployment verification | Passed 2026-07-20 on commit `d10c466` | The rebound English/Thai lesson surfaces render eleven cards with Charge first. |
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
- Made the spoken and visible energy values reuse one localized, rounded string so assistive output no longer exposes a floating-point artifact such as `89.99999999999999` for the visible `90 µJ` result.
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
| Focused localized-number regression | Passed: English and Thai formatting tests both convert the real default-model artifact to the shared `90` display/announcement value. |
| Focused keyboard-value regression | Passed: Arrow, Home, End, Page, boundary, and unrelated-key cases cover the bounded range-value helper used by both Voltage sliders. |
| Full website test suite | All Node checks and Vitest files passed for the rebound candidate. |
| Astro/type check | Passed with 0 errors, warnings, or hints for the rebound candidate. |
| Production build and internal-link validation | Production generation, topic robots policies, and internal references passed for the rebound candidate. |
| Desktop English/Thai visual check | Passed on deployed commit `bc12ec1`: the demo retained its two-column desktop layout, 44 px controls, localized values, and no document-level horizontal overflow or console errors. |
| Mobile English/Thai visual check | Passed at 390 × 844 on deployed commit `bc12ec1`: the demo used one column, its stage, controls, metrics, header, and document did not overflow, and both range targets remained 44 px. The navigation's three-pixel excess is contained by its intentional `overflow-x: auto` mobile rail rather than expanding the document. |
| Native keyboard controls and visible focus | Passed for control behavior: actual Arrow, Home, End, and Page input changed both sliders, localized `aria-valuetext`, the live result, and the zero/maximum visual states. CSS inspection confirmed the range control's 3 px `:focus-visible` outline; the browser backend could not synthesize keyboard-only focus modality, so no rendered Tab-modality claim is made. |
| Reduced-motion behavior | Passed by CSSOM and information-path inspection: the parsed `prefers-reduced-motion: reduce` rule reduces animation and transition duration to `0.01ms`; the demo has no animations and only three nonessential 0.18 s visual transitions, while all changing information is also present as text/live output and in the transcript. OS preference emulation was unavailable. |
| Screen-reader-oriented names, live output, and transcript | Passed browser-semantic inspection: both native ranges have associated labels and localized `aria-valuetext`; the result is an `output` with `aria-live="polite"` and `aria-atomic="true"`; the diagram is hidden by an `aria-hidden="true"` stage and has a text transcript. The rounded spoken/visible result contains no raw floating artifact. No named platform screen reader was tested. |
| Deployed English/Thai pages | Exact commit `d10c466` passed public verification; commits `7414277` and `0bea714` remain historical evidence. |
| Current rebound candidate | Local and public checks passed in English and Thai: review-ready/source metadata, language switch, eleven suggestion cards with Charge first, correct localized paths and Thailand-context labels, no document overflow, and no browser-console warning/error. |

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
| 2026-07-15 | Inspect rendered English and Thai demo semantics and narrow layout | Maintainer browser review | Responsive layout, language metadata, semantic names, transcript, touch targets, and console state were acceptable, but the live output exposed a raw floating-point value to assistive text; visual/accessibility remained pending. |
| 2026-07-15 | Correct localized assistive energy output | Codex-assisted maintainer implementation | Spoken and visible energy values now share one rounded localized string; focused regression verification added. Deployment and remaining manual rendered checks are still required. |
| 2026-07-15 | Verify corrected bound candidate | Maintainer automated verification | Focused English/Thai regression, 12 Node checks, 75 Vitest tests, 92-file Astro diagnostics, the 3,245-page production build, robots policy, and internal-reference validation passed. |
| 2026-07-15 | Verify corrected production deployment | Maintainer deployment verification | English and Thai routes served the corrected bundle and localized rounded output with no raw artifact, horizontal overflow at the narrow viewport, or console errors; no visual/accessibility or owner approval was inferred. |
| 2026-07-16 | Reproduce and correct slider keyboard defect | Maintainer browser and implementation review | Focus styling worked, but native Arrow/Home/End input did not change the deployed sliders. Added explicit bounded keyboard stepping plus `input` handling and focused regression coverage; deployment verification remains pending. |
| 2026-07-16 | Verify keyboard-corrected bound candidate | Maintainer automated verification | Focused interaction tests, 12 Node checks, 76 Vitest tests, 92-file Astro diagnostics, the 3,245-page production build, robots policy, and internal-reference validation passed. |
| 2026-07-16 | Verify deployed keyboard-corrected candidate | Maintainer browser review | English and Thai desktop and 390 px checks passed responsive, semantic, 44 px target, console, localized input, and actual keyboard behavior checks. Focus-modality, reduced-motion preference, and named screen-reader emulation were unavailable and are recorded as evidence boundaries rather than silently inferred results. |
| 2026-07-16 | Complete maintainer review preparation | Codex-assisted maintainer review | The required maintainer-controlled gates passed and the lesson moved from `prototype` to `review-ready`. Thai-language approval, promoted-deployment verification, and final publication approval remain separate blockers. |
| 2026-07-16 | Verify promoted production deployment | Maintainer deployment verification | Commit `7414277` displayed the promoted status consistently on English and Thai lesson and registry routes; live localized Arrow-key interaction also passed. The deployment blocker was removed, leaving only project-owner Thai-language and final-publication decisions. |
| 2026-07-16 | Rebind the review to current shared dependencies | Independent lifecycle audit and maintainer correction | The manifest now covers the shared rendering and suggestion inputs that materially affect the lesson. Because commit `7414277` predates those bytes, deployment verification returned to pending until the new promoted commit is checked. |
| 2026-07-16 | Verify rebound production deployment | Maintainer deployment verification | Commit `0bea714` passed English and Thai lesson and registry status checks, 390 px layout, localized ArrowRight/live-output behavior, ten-card suggestions, Thai-card language metadata, and public-console inspection. The current deployment blocker was removed. |
| 2026-07-20 | Rebind after Electric Charge integration | Maintainer implementation and browser review | Shared registry and relationship bytes changed. Automated and local visual gates were reaffirmed, Charge became the first related lesson, the rendered relationship list increased to eleven cards, and public deployment returned to pending until the exact candidate is live. |
| 2026-07-20 | Verify rebound public deployment | Maintainer deployment verification | Vercel reported exact commit `d10c466` successful; English and Thai Voltage routes retained review-ready/verified metadata, eleven cards with Charge first, correct localized and Thailand-context labels, no narrow-layout overflow, and no browser-console warning/error. |

## Publication decision

- Registry status after review preparation: `review-ready`. Technical, English, implementation, visual/accessibility, source, and rebound deployment gates passed; both project-owner decisions remain pending, so the lesson must stay below `published`.
- Public promoted-deployment verification: Passed 2026-07-20 on exact commit `d10c466`; commit `0bea714` remains historical evidence.
- Project-owner publication decision: Pending.
- Thai-language decision: Pending.
- Qualified-review decision: Not required for the current low-risk conceptual scope; reassess if scope changes.
- Final publication date: Pending.
- Remaining limitations accepted by owner: Pending.

Do not mark this lesson `published` until the project owner explicitly completes the pending decisions above.
