# Taxonomy Model

## 1. Design principles

1. **Graph first, hierarchy second.** Every node has one canonical home for navigation, but any number of typed relationships.
2. **Classification is not publication.** A topic may be mapped years before a lesson is ready.
3. **Stable identity.** IDs never contain locale, maturity, vendor, or page location and should survive renaming.
4. **Progressive depth.** One node may support intuitive, technical, mathematical, practical, and research layers.
5. **Originality and traceability.** Published claims require sources; third-party illustrations and wording are never copied merely because they informed classification.
6. **Models disclose limits.** Every analogy, animation, simulation, and equation identifies its assumptions and validity range.

## 2. Canonical identifiers

Use lowercase dotted identifiers:

```text
ea.<domain>.<subdomain>.<topic>[.<specialization>]
```

Examples:

- `ea.fundamentals.electricity.charge`
- `ea.device.semiconductor.mosfet`
- `ea.device.semiconductor.mosfet.gate-charge`
- `ea.power.protection.distance-relay`
- `ea.computing.fpga.static-timing-analysis`

Rules:

- Use singular nouns unless the recognized term is plural.
- Prefer the technology-neutral canonical name; store abbreviations and vendor terms as aliases.
- Do not encode hierarchy changes into an existing ID. If an ID must change, retain a permanent alias mapping.
- Use a suffix only when a child is independently teachable and reusable.

## 3. Node kinds

| Kind | Definition | Examples |
|---|---|---|
| `concept` | Abstract explanatory idea | impedance, feedback, entropy |
| `law` | Named or formal relationship | Coulomb's law, Kirchhoff's laws |
| `quantity` | Measurable property or unit-bearing variable | voltage, flux density, jitter |
| `phenomenon` | Observable physical behavior | avalanche breakdown, skin effect |
| `material` | Substance or engineered material system | copper, FR-4, silicon carbide |
| `component` | Discrete or integrated physical part | resistor, MOSFET, connector |
| `circuit` | Connected electrical topology | buck converter, differential pair |
| `architecture` | Structural organization or design pattern | Harvard architecture, microgrid |
| `system` | Interacting assembly with system-level behavior | inverter drive, cellular network |
| `method` | Analysis, design, fabrication, or operational procedure | nodal analysis, lockout/tagout |
| `tool` | Instrument, software, language, or platform | oscilloscope, SPICE, VHDL |
| `standard` | Normative specification or code family | IEC 61131, IEEE 802.3 |
| `failure` | Fault, degradation mechanism, or unsafe state | electromigration, latch-up |
| `application` | Use context or industry capability | medical imaging, traction drive |
| `history` | Historical technology, event, or development | vacuum-tube era, War of Currents |

## 4. Scope roles

- `core` — owned primarily by electrical/electronic engineering.
- `prerequisite` — needed to understand core nodes but primarily belongs to another discipline.
- `enabling` — needed to design, manufacture, operate, or maintain implementations.
- `application` — a destination domain that consumes electrical/electronic capability.

## 5. Relationship vocabulary

Relationships are directional. Store an inverse label where useful.

| Relation | Meaning | Typical inverse |
|---|---|---|
| `prerequisite-of` | Understanding A is materially needed before B | `requires` |
| `part-of` | A is a constituent of B | `has-part` |
| `made-of` | A is physically realized using B | `material-for` |
| `explains` | A provides a causal/model explanation of B | `explained-by` |
| `implements` | A is a realization of B | `implemented-by` |
| `measured-by` | A is observed or estimated using B | `measures` |
| `controlled-by` | A's state is controlled by B | `controls` |
| `fails-by` | A is susceptible to failure mechanism B | `affects` |
| `used-in` | A has a meaningful use in B | `uses` |
| `alternative-to` | A and B serve substantially similar roles | symmetric |
| `derived-from` | A follows mathematically or historically from B | `derives` |
| `contrasts-with` | Pair whose distinction is educationally important | symmetric |
| `supersedes` | A replaced B for a stated context | `superseded-by` |
| `related-to` | Meaningful association lacking a stronger type | symmetric |

Do not use `related-to` when a more precise relation exists. Prerequisite edges form a directed learning graph; ordinary relationships may contain cycles.

## 6. Maturity and era

| Tag | Meaning |
|---|---|
| `historical` | Important chiefly for history or conceptual lineage |
| `legacy` | Still encountered in installed systems but rarely selected for new designs |
| `established` | Stable and broadly taught or deployed |
| `current` | Active mainstream engineering practice |
| `emerging` | Early commercialization or rapidly developing practice |
| `experimental` | Primarily research-stage or not yet generally validated |

A node may carry two tags, such as `historical+legacy` or `current+emerging`, when context requires.

## 7. Depth, mathematics, and safety

### Expected depth

- `D0 Orientation` — recognize and place the topic.
- `D1 Intuition` — explain causal behavior without formal derivation.
- `D2 Working` — calculate, select, connect, or operate safely.
- `D3 Engineering` — design, model, verify, and diagnose.
- `D4 Advanced` — derive, optimize, critique assumptions, and read research literature.

### Mathematics prerequisites

Use tags: `arithmetic`, `algebra`, `trigonometry`, `complex-analysis`, `linear-algebra`, `calculus`, `differential-equations`, `probability`, `statistics`, `numerical-methods`, `optimization`, `discrete-math`, and `information-theory`.

### Safety relevance

- `S0` — no unusual physical hazard in normal learning context.
- `S1` — caution; component damage, heat, low-energy shock, optical, or ESD concerns.
- `S2` — hazardous energy, mains, batteries, rotating machinery, RF exposure, chemicals, or stored energy.
- `S3` — professional controls required; high voltage, arc flash, explosive atmospheres, radiation, life-critical systems, or regulated clinical/industrial work.

Safety tags do not replace a task-specific hazard analysis or applicable law.

## 8. Content status

Statuses are monotonic except when review expires or an error is discovered:

```text
mapped → outlined → researched → reviewed → translated → published
```

- `mapped` — placed in taxonomy with a defensible scope.
- `outlined` — learning objectives, boundaries, prerequisites, and visuals defined.
- `researched` — claims traced to authoritative sources; uncertainties recorded.
- `reviewed` — technically and editorially reviewed.
- `translated` — target locale is complete and parity-checked.
- `published` — accessible, tested, and released.

Use `needs-correction`, `needs-rereview`, or `deprecated-page` as flags rather than replacing the base status.

## 9. Full node template

```yaml
id: ea.device.semiconductor.mosfet
canonical_name: Metal–oxide–semiconductor field-effect transistor
aliases: [MOSFET, MOS transistor]
kind: component
scope_role: core
primary_path: Semiconductor devices > Field-effect transistors
secondary_paths: [Digital electronics, Analog electronics, Power electronics]
prerequisites: [ea.fundamentals.field.electric, ea.material.semiconductor.doping]
successors: [ea.device.semiconductor.mosfet.gate-charge]
relations:
  made-of: [ea.material.semiconductor.silicon, ea.material.dielectric.silicon-dioxide]
  used-in: [ea.circuit.power.buck-converter, ea.digital.logic.cmos]
maturity: [established, current]
depth: [D0, D1, D2, D3, D4]
math: [algebra, calculus]
safety: S1
standards_families: [JEDEC, IEC, IEEE]
source_classes: [textbook, standard, manufacturer-application-note, peer-reviewed-paper]
status: mapped
```

Inventory files use compact seed records. Unwritten fields inherit the section defaults and must be expanded before `outlined` status.

## 10. Naming and synonym rules

- Preserve internationally recognized abbreviations: ADC, PLL, MOSFET, EMC, FPGA.
- Expand an abbreviation at first publication use.
- Record spelling variants, older terminology, and regional terms as aliases.
- Separate easily confused concepts into distinct nodes and connect them with `contrasts-with`.
- Product families may be examples inside a generic node; vendor part numbers are not canonical nodes unless historically significant.
- Standards receive nodes at useful family or concept level, not necessarily one page per edition.
- A chemical, alloy, or package name receives its own node only when it supports multiple lessons or design decisions.

## 11. Localization policy

- Canonical IDs and internal names remain English.
- Published Thai pages use natural Thai prose and show the standard English technical term on first use.
- Symbols, SI units, equations, and shared datasets remain locale-neutral.
- Translation status is tracked per locale; one locale never silently substitutes for another.
- Terminology decisions belong in a versioned bilingual glossary once translation begins.

## 12. Source policy

Prefer sources in this order, adjusted for the claim:

1. Standards, legal codes, SI definitions, and official technical vocabularies.
2. Peer-reviewed literature and authoritative reference data.
3. University-level textbooks and recognized curricula.
4. Manufacturer datasheets, reliability reports, and application notes for implementation-specific behavior.
5. Reputable institutional tutorials for orientation only.

Every lesson distinguishes normative requirements, empirical data, model assumptions, common practice, and pedagogical analogy.

