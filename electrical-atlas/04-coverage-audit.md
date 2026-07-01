# Coverage Audit

## 1. Audit status

**Revision:** 0.1.0, provisional  
**Date:** 2026-06-23  
**Coverage claim:** structurally comprehensive, not factually exhaustive

This first audit checks whether recognized electrical/electronic domains and their supporting technology stack have a canonical home. It does not claim that every standard, product, equation, process variant, or research paper has been enumerated.

## 2. Authoritative frameworks

The taxonomy is designed to align with the following primary frameworks. Exact current editions must be confirmed before a formal crosswalk is described as verified.

| Framework | Use in Electrical Atlas | Official source |
|---|---|---|
| IEEE Taxonomy and Thesaurus | Engineering terminology and publication-domain coverage | [IEEE taxonomy/thesaurus access](https://www.ieee.org/publications/services/thesaurus-access-page.html) |
| IEC International Electrotechnical Vocabulary | Canonical electrotechnical concepts and multilingual terminology | [IEC Electropedia](https://www.electropedia.org/) |
| IEC technical committees | Standards-domain coverage across electrical technologies | [IEC committees](https://www.iec.ch/standards-development/technical-committees-and-subcommittees) |
| ACM Computing Classification System | Computing hardware, embedded, software, networks, security, and human-computer topics | [ACM CCS](https://dl.acm.org/ccs) |
| ABET engineering program criteria | Expected breadth of electrical, electronic, computer, and related engineering education | [ABET accreditation criteria](https://www.abet.org/accreditation/accreditation-criteria/) |
| BIPM SI Brochure and VIM/JCGM guidance | Units, quantities, traceability, uncertainty, and metrology vocabulary | [BIPM SI](https://www.bipm.org/en/measurement-units) |

Other primary families to cross-reference by domain include ISO, ITU, IEEE Standards Association, IPC, JEDEC, SEMI, CISPR, CIE, ISA, SAE, NFPA, UL, ETSI, 3GPP, USB-IF, PCI-SIG, Bluetooth SIG, Wi-Fi Alliance, Khronos, RISC-V International, and relevant national regulators. A source's inclusion does not imply that all its documents are freely reproducible.

## 3. Thailand standards and regulation overlay

Thailand-specific content is not treated as a translation of IEC/IEEE material. It is a jurisdictional layer with its own legal status, adoptions, editions, utility rules, and professional practice.

| Thai authority | Taxonomy role | Official source |
|---|---|---|
| Thai Industrial Standards Institute (TISI / สมอ.) | Thai Industrial Standards (มอก.), compulsory standards, product conformity | [TISI](https://www.tisi.go.th/) |
| Engineering Institute of Thailand (EIT / วสท.) | Professional engineering standards, notably electrical installations for Thailand | [EIT](https://eit.or.th/) |
| Metropolitan Electricity Authority (MEA / กฟน.) | Service, metering, connection, and utility requirements in its service area | [MEA](https://www.mea.or.th/) |
| Provincial Electricity Authority (PEA / กฟภ.) | Service, connection, customer, and utility requirements outside the MEA area | [PEA](https://www.pea.co.th/) |
| Energy Regulatory Commission (ERC / กกพ.) | Energy-industry regulation, licensing, grid and market rules | [ERC](https://www.erc.or.th/) |
| National Broadcasting and Telecommunications Commission (NBTC / กสทช.) | Spectrum, radio equipment, telecommunications, and broadcasting regulation | [NBTC](https://www.nbtc.go.th/) |
| National Institute of Metrology (Thailand) (NIMT / มว.) | National measurement standards and traceability | [NIMT](https://www.nimt.or.th/main/) |
| Department of Public Works and Town & Country Planning (DPT / ยผ.) | Building regulation and engineering requirements | [DPT](https://www.dpt.go.th/) |

Additional Thai sources to cross-reference include the Department of Labour Protection and Welfare, Department of Energy Business, Department of Alternative Energy Development and Efficiency, Department of Industrial Works, local fire/building authorities, and enacted laws in the Royal Thai Government Gazette.

### Thai standards editorial rules

1. Record the Thai title, standard/regulation number, edition or Buddhist Era year, issuing authority, and effective date.
2. Distinguish `voluntary standard`, `compulsory product standard`, `professional standard`, `utility requirement`, `license condition`, and `law/regulation`.
3. State territorial scope. MEA and PEA requirements must not be presented as interchangeable.
4. Link an adopted IEC/ISO standard to its international parent while documenting Thai deviations or national conditions.
5. Never infer that the newest publication automatically governs an existing installation; transition rules and contracts matter.
6. Verify amendments, withdrawals, and mandatory status at the time a safety-critical page is reviewed.
7. Thai guidance is educational; regulated design, installation, inspection, and operation require appropriately licensed professionals and current official documents.

## 4. Coverage matrix

| Domain | Backbone | Detailed inventory | Cross-domain links | Audit status |
|---|---:|---:|---:|---|
| Foundations/science | Yes | Yes | Yes | Broad, intentionally lighter |
| Electromagnetism/circuits | Yes | Yes | Yes | Dense |
| Materials/passives/devices | Yes | Yes | Yes | Dense |
| Analog/mixed-signal | Yes | Yes | Yes | Dense |
| Digital/computing/embedded | Yes | Yes | Yes | Dense |
| Signals/control/instrumentation | Yes | Yes | Yes | Dense |
| EMC/RF/communications/radar | Yes | Yes | Yes | Dense |
| Photonics/imaging/quantum | Yes | Yes | Yes | Medium; frontier expansion expected |
| Power electronics/machines | Yes | Yes | Yes | Dense |
| Power systems/energy | Yes | Yes | Yes | Dense; jurisdiction overlays required |
| IC/PCB/manufacturing | Yes | Yes | Yes | Dense |
| Reliability/safety/security | Yes | Yes | Yes | Dense; standards editions pending |
| Supporting disciplines | Yes | Yes | Yes | Broad, intentionally lighter |
| Applications/history/frontiers | Yes | Yes | Yes | Broad; continuously expanding |

## 5. Representative placement tests

| Test topic | Canonical home | Key cross-links |
|---|---|---|
| Coulomb's law | Electromagnetism → electrostatics | charge, field, Gauss's law, capacitors |
| MOSFET gate charge | Semiconductor devices → MOSFET dynamics | gate drivers, switching loss, parasitic capacitance, power converters |
| FPGA timing closure | Digital hardware → FPGA implementation | HDL, static timing analysis, CDC, placement/routing, SI |
| IEC/Thai protection practice | Safety/standards and power protection | breakers, relays, grounding, EIT, TISI, MEA/PEA |
| Lithium-ion thermal runaway | Energy storage → battery safety/failure | electrochemistry, BMS, thermal engineering, fire protection, transport regulation |
| Medical imaging | Applications → medical systems | sensors, RF, ultrasound, optics, DSP, high voltage, functional/electrical safety |
| GaN HEMT | Semiconductor devices → wide-bandgap devices | heterojunction physics, RF PA, power conversion, packaging, gate drive |
| Poynting vector | Electrodynamics → energy/momentum | transmission lines, waveguides, circuit energy transfer, antennas |
| Protective earthing in Thailand | Safety → grounding/bonding → Thailand overlay | EIT installation standard, utility rules, RCD, fault protection |
| NBTC radio compliance | Standards/regulation → Thailand telecom | RF emissions, spectrum, equipment conformity, antenna systems |

All representative topics have a primary home and are not duplicated as separate canonical concepts in each use context.

## 6. Ambiguous boundaries

| Boundary | Rule |
|---|---|
| Electrical vs electronic | Energy-scale distinction is contextual; classify by dominant design concern and cross-link |
| Device vs component | `device` is physical operating principle; `component` is a usable packaged/realized part; one node may discuss both layers |
| Circuit vs architecture vs system | Circuit emphasizes electrical topology; architecture emphasizes organization; system emphasizes externally meaningful behavior |
| Signal processing vs communications | Algorithms live in signals/DSP; end-to-end links and protocols live in communications |
| Control vs embedded | Control law/model lives in control; implementation platform lives in embedded; cross-link both |
| Power electronics vs power systems | Conversion hardware/control lives in power electronics; network operation/protection lives in power systems |
| Photonics vs communications | Physical optical devices/channels live in photonics; coding/network/link design lives in communications |
| Safety vs reliability vs security | Harm prevention, failure probability, and adversarial resilience are distinct but jointly analyzed |
| Software/AI scope | Include deeply where it realizes, analyzes, controls, verifies, or attacks/defends electrical systems; otherwise retain as supporting context |

## 7. Known gaps and expansion priorities

The following areas have a valid home but deserve deeper enumeration during later audits:

- National and regional standard crosswalks beyond Thailand.
- Detailed IEC/IEEE/Thai standard-family and edition mapping.
- Electrical trade practice, inspection workflows, and utility procedures by jurisdiction.
- Semiconductor process variants, advanced packaging, and foundry design ecosystems.
- Bioelectronics, electrochemistry, electrobiology, and neural interfaces.
- Quantum engineering and cryogenic control electronics.
- Terahertz, metamaterials, computational electromagnetics, and plasma electronics.
- Railway signaling, marine classification, avionics certification, space radiation design.
- Accessibility and human factors for instrumentation and control rooms.
- Sustainability, critical minerals, circular design, repairability, and e-waste policy.
- Indigenous, regional, and historical technology perspectives.

## 8. Duplicate and orphan policy

- Synonyms resolve to one canonical ID.
- A node with no prerequisite, parent, relation, or application is an orphan and fails audit unless explicitly marked `root`.
- Apparent duplicates are merged only after checking whether they differ by physical mechanism, abstraction level, or regulatory meaning.
- Deprecated terminology remains an alias when learners will encounter it in legacy documentation.

## 9. Maintenance cycle

1. Quarterly: add missing nodes discovered during content creation; run duplicate/orphan review.
2. Annually: review current/emerging/experimental maturity tags and major standards families.
3. On every safety-critical publication: verify current international and Thai authorities, editions, legal status, and utility territory.
4. On technology retirement or supersession: preserve historical context and redirect aliases; never erase lineage.
5. Record every structural change in the corpus revision history.

## 10. Structural validation results

Validation run on 2026-06-23:

| Check | Result |
|---|---:|
| Markdown files | 20 |
| Mapped inventory topics | 1,607 |
| Schema/example identifiers | 5 |
| Total unique canonical `ea.*` identifier mentions | 1,612 |
| Duplicate canonical identifiers | 0 |
| Broken relative Markdown links | 0 |

Future automation should continue to parse full inventory records separately from schema examples before importing the corpus into a database.
