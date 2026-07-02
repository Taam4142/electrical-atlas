# Lesson quality and source-review checklist

Use this checklist before marking a lesson `review-ready` or `published`.

For early planning, use the same checklist lightly: unanswered boxes become outline tasks, not blockers. For publication, unanswered boxes are blockers.

## Metadata and structure

- [ ] Lesson has a stable slug.
- [ ] Lesson has a stable lesson ID, such as `ea.lesson.voltage.v0.1`.
- [ ] Primary atlas node is identified.
- [ ] Secondary topic links are identified.
- [ ] Registry entry exists in `electrical-atlas-site/src/lib/lessonRegistry.ts`.
- [ ] Registry status matches the real state: `planned`, `outlined`, `prototype`, `review-ready`, or `published`.
- [ ] Safety level, source status, and Thailand-context flag are set.
- [ ] English page route exists.
- [ ] Thai page route exists, or Thai is clearly marked pending.
- [ ] Language switch points to the correct counterpart page.
- [ ] Relationship records exist for meaningful suggested next lessons/topics.
- [ ] No empty public route exists for a lesson that is only planned or outlined.

## Teaching quality

- [ ] First definition is short and beginner-safe.
- [ ] The lesson explains why the topic matters.
- [ ] The lesson gives real-world examples.
- [ ] The physical mechanism is explained before equations.
- [ ] Equations define every symbol and unit.
- [ ] The lesson states the limits of simplified models.
- [ ] Common mistakes are included.
- [ ] Failure modes or limitations are included where relevant.
- [ ] Technical track is separated from beginner explanation when needed.

## Visual quality

- [ ] Visuals teach a specific relationship or mechanism.
- [ ] Diagram labels are readable on mobile.
- [ ] Colors are consistent with project meaning.
- [ ] Any animation or interaction has a clear purpose.
- [ ] Interactive controls do not require prior expert knowledge.
- [ ] Visuals avoid copying existing explainer-channel artwork.

## Safety and standards

- [ ] Safety relevance is classified: none, low, moderate, or high.
- [ ] Mains, battery, high-voltage, high-current, thermal, rotating, RF, medical, vehicle, building, and grid hazards are considered.
- [ ] Dangerous hands-on actions are not implied.
- [ ] Safety warnings are visible before risky examples.
- [ ] Thailand-specific installation or regulatory claims are verified before publication.
- [ ] Relevant source families are listed, such as IEC, IEEE, ISO, TISI, EIT, MEA, PEA, or ERC.
- [ ] The lesson separates conceptual explanation from practical installation/design instruction.
- [ ] The lesson does not imply that reading the page qualifies someone to perform regulated electrical work.
- [ ] Any standard number, legal requirement, utility rule, edition, or threshold has a source URL/name and review date.
- [ ] Moderate/high safety lessons are not marked `published` while `sourceStatus` is `needed`, `draft`, or `needs-update`.

## Source-review workflow

Use this workflow for every nontrivial lesson. The heavier the safety or standards relevance, the stricter the evidence needs to be.

### 1. Classify each claim

Mark claims by risk:

| Claim type | Examples | Required source strength before publication |
| --- | --- | --- |
| Conceptual physics | charge, current, voltage, field, resistance | recognized textbook, university material, or standards vocabulary where relevant |
| Component behavior | switch contact resistance, MOSFET gate charge, battery internal resistance | datasheet, manufacturer application note, textbook, or peer-reviewed/engineering reference |
| Safety warning | shock, arc, fire, stored energy, hot surfaces | safety standard/source family, manufacturer safety note, official public safety guidance, or professional engineering reference |
| Installation/practice | building wiring, grid connection, earthing, protection devices | current local authority/utility/standard source and qualified-review note |
| Thailand-specific claim | TIS/TISI, EIT guidance, MEA/PEA service rules, ERC/NBTC/NIMT context | official Thai source checked close to publication date |

### 2. Record source families before writing

Each outline should list source families even before exact citations are chosen. Example:

- textbooks or university material for the core concept;
- manufacturer datasheets/application notes for component behavior;
- IEC/IEEE/ISO or other standards families when standards language is used;
- Thai official or professional sources when the lesson touches Thailand-specific practice.

### 3. Verify exact sources before review-ready

Before setting a lesson to `review-ready`, record:

- exact source name or URL;
- standard number and edition/date if used;
- access or review date;
- which claim the source supports;
- any uncertainty or local-scope limitation.

Do not copy standards text, paid-book content, or third-party diagrams. Use sources to verify facts, then write original explanations and draw original visuals.

### 4. Source status meanings

| `sourceStatus` | Meaning |
| --- | --- |
| `not-needed` | Only low-risk original explanation; no external factual dependency beyond common foundations. Use rarely. |
| `needed` | Source review is required and no usable source plan exists yet. |
| `draft` | Source families or candidate sources are listed, but exact claims are not verified. |
| `verified` | Claims needed for the current lesson status are checked and recorded. |
| `needs-update` | Previously checked sources may be stale or incomplete for current content. |

### 5. Source family directory

Use official/current sources at review time. These links are starting points, not a guarantee that a specific standard or rule is current.

Last URL availability check for this directory: 2026-07-02.

| Family | Use for | Starting point |
| --- | --- | --- |
| TISI / TIS | Thai Industrial Standards and product standard references | [tisi.go.th](https://www.tisi.go.th/) |
| EIT | Thai engineering practice and professional guidance | [eit.or.th](https://eit.or.th/) |
| MEA | Bangkok, Nonthaburi, Samut Prakan electricity service/practice context | [mea.or.th](https://www.mea.or.th/) |
| PEA | Provincial electricity service/practice context | [pea.co.th](https://www.pea.co.th/) |
| ERC Thailand | Energy regulation and electricity-sector regulatory context | [erc.or.th](https://www.erc.or.th/) |
| NBTC | Spectrum, telecom, RF, broadcast, and radio regulatory context | [nbtc.go.th](https://www.nbtc.go.th/) |
| NIMT | Thai metrology, calibration, and measurement traceability context | [nimt.or.th](https://www.nimt.or.th/) |
| IEC | International electrotechnical standards families | [iec.ch](https://www.iec.ch/) |
| IEEE SA | IEEE standards, recommended practices, and standards search | [standards.ieee.org](https://standards.ieee.org/) |
| ISO | International non-electrical and cross-domain standards families | [iso.org/standards](https://www.iso.org/standards.html) |

## Thai language quality

- [ ] Thai title is natural.
- [ ] Thai explanation is not a stiff word-for-word translation.
- [ ] English technical terms are kept where useful.
- [ ] Thai terminology is added where useful.
- [ ] Safety wording is especially clear in Thai.
- [ ] Thai page describes the current content status, not a future translation promise.

## Website quality

- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] Page loads locally.
- [ ] Page loads after Vercel deployment.
- [ ] No broken internal links.
- [ ] Suggested-next links work.
- [ ] Topic search still works.
- [ ] Mobile layout remains readable.
- [ ] Status board reflects the lesson's current status correctly.

## Review notes

Record unresolved questions here before publishing:

- Source questions:
- Technical accuracy questions:
- Thai terminology questions:
- Safety questions:
- Standards/local-practice questions:
- Visual improvement ideas:
- Future expansion topics:

## Publication decision

Only mark `published` when all required boxes are complete or explicitly not applicable.

Decision record:

- Lesson slug:
- Registry status before review:
- Registry status after review:
- Reviewer:
- Review date:
- Source status:
- Safety level:
- Thailand-context result:
- Remaining known limitations:
