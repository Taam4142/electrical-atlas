# Reliability, Safety, Standards, Ethics, and Cybersecurity

Section defaults: `core` or `enabling`; `established+current`; `mapped`. Safety content is educational and never substitutes for current law, official standards, utility requirements, or qualified professional work.

## Reliability engineering

- `ea.reliability.function-failure` **Function, failure, fault and defect** — precise distinctions across lifecycle. [concept; D0–D3]
- `ea.reliability.probability` **Reliability probability** — survival, hazard, failure distributions and confidence. [concept; D1–D4]
- `ea.reliability.mtbf` **MTBF/MTTF/MTTR and availability** — correct use, assumptions and common misuse. [quantity; D1–D4]
- `ea.reliability.bathtub` **Bathtub curve** — infant, random and wear-out regions with limitations. [model; D1–D3]
- `ea.reliability.series-parallel` **Reliability block diagram** — series/parallel/k-out-of-n and dependencies. [model; D1–D4]
- `ea.reliability.fmea` **FMEA/FMECA** — failure modes, effects, criticality, actions and evidence. [method; D1–D4]
- `ea.reliability.fault-tree` **Fault-tree analysis** — top event, gates, minimal cuts and quantitative use. [method; D2–D4]
- `ea.reliability.markov` **Markov reliability model** — states, transitions, repair and common cause. [model; D3–D4]
- `ea.reliability.common-cause` **Common-cause/common-mode failure** — dependency, diversity and segregation. [failure; D2–D4]
- `ea.reliability.derating` **Electrical/thermal derating** — stress limits, profiles and standards guidance. [method; D1–D4]
- `ea.reliability.redundancy` **Redundancy and fault tolerance** — active/standby, voting, coverage and latent faults. [architecture; D1–D4]
- `ea.reliability.accelerated-test` **Accelerated life testing** — Arrhenius/Eyring/power laws, validity and extrapolation. [method; D2–D4]
- `ea.reliability.halt-hass` **HALT and HASS** — margin discovery versus production screening. [method; D2–D4; S2]
- `ea.reliability.qualification` **Environmental qualification** — profiles, sample plans, pass criteria and change impact. [method; D1–D4]
- `ea.reliability.condition-monitoring` **Condition monitoring** — features, thresholds, trends, diagnostics and false alarms. [method; D1–D4]
- `ea.reliability.prognostics` **Prognostics and remaining useful life** — models, data, uncertainty and decision. [method; current+emerging; D2–D4]
- `ea.reliability.maintainability` **Maintainability engineering** — access, modularity, diagnostics, repair time and support. [method; D1–D4]

## Failure mechanisms and analysis

- `ea.failure.thermal` **Thermal overstress** — overheating, gradients, runaway and material degradation. [failure; D1–D4; S2]
- `ea.failure.electrical-overstress` **Electrical overstress** — voltage/current/energy beyond capability. [failure; D1–D4; S2]
- `ea.failure.esd` **ESD device damage** — HBM/CDM/system events, latent debate and protection. [failure; D1–D4; S1]
- `ea.failure.electromigration` **Electromigration** — current-density/temperature driven atomic transport. [failure; D2–D4]
- `ea.failure.time-dependent-breakdown` **Time-dependent dielectric breakdown** — field/temperature/statistical degradation. [failure; D3–D4]
- `ea.failure.hot-carrier-bti` **Hot-carrier and bias-temperature instability** — transistor aging and recovery. [failure; D3–D4]
- `ea.failure.latchup` **CMOS latch-up** — parasitic thyristor, triggers and prevention. [failure; D2–D4]
- `ea.failure.corrosion` **Corrosion** — galvanic/electrolytic/atmospheric mechanisms and contamination. [failure; D1–D4]
- `ea.failure.dendrite-migration` **Electrochemical migration and dendrites** — moisture, bias, ions and spacing. [failure; D2–D4]
- `ea.failure.tin-whisker` **Tin whiskers** — growth, shorting risk and mitigation. [failure; D2–D4]
- `ea.failure.solder-fatigue` **Solder-joint fatigue** — thermal/mechanical cycling, creep and package effects. [failure; D1–D4]
- `ea.failure.connector-fretting` **Connector fretting/corrosion** — micromotion, films and intermittency. [failure; D1–D3]
- `ea.failure.partial-discharge` **Partial discharge** — void/surface/corona activity, aging and detection. [failure; D2–D4; S3]
- `ea.failure.insulation-aging` **Electrical insulation aging** — thermal, electrical, mechanical, environmental and synergistic stress. [failure; D2–D4; S3]
- `ea.failure.radiation` **Radiation effects** — TID, displacement, SEE, charging and hardening. [failure; D2–D4; S3]
- `ea.failure.vibration-shock` **Vibration and mechanical shock** — resonance, fatigue, connectors and tests. [failure; D1–D4; S2]
- `ea.failure.analysis` **Root-cause failure analysis** — preserve evidence, fault tree, nondestructive/destructive methods and corrective action. [method; D1–D4; S2]

## Electrical hazards and protective principles

- `ea.safety.risk` **Hazard and risk assessment** — severity, likelihood, exposure, controls and residual risk. [method; D0–D4; S3]
- `ea.safety.shock` **Electric shock** — current paths, physiological effects, contact conditions and protection. [phenomenon; D0–D4; S3]
- `ea.safety.touch-step` **Touch and step potential** — fault/ground gradients and equipotential measures. [quantity; D1–D4; S3]
- `ea.safety.arc-flash` **Arc flash and arc blast** — initiation, energy, pressure, boundaries and mitigation. [phenomenon; D1–D4; S3]
- `ea.safety.fire` **Electrical fire** — overload, arcing, poor connections, ignition and containment. [failure; D0–D4; S3]
- `ea.safety.stored-energy` **Stored electrical energy** — capacitors, inductors, batteries, mechanical and pneumatic coupling. [concept; D0–D4; S3]
- `ea.safety.backfeed` **Backfeed and multiple sources** — generators, UPS, PV, storage and induced voltage. [failure; D1–D3; S3]
- `ea.safety.isolation` **Electrical isolation** — galvanic barriers, basic/supplementary/reinforced and test. [concept; D1–D4; S3]
- `ea.safety.creepage-clearance` **Creepage and clearance** — voltage, pollution, material group, altitude and transients. [method; D1–D4; S3]
- `ea.safety.insulation-coordination` **Equipment insulation coordination** — overvoltage categories, impulse and protective measures. [method; D2–D4; S3]
- `ea.safety.earthing-bonding` **Earthing and bonding** — functional/protective roles, fault path and touch protection. [method; D0–D4; S3]
- `ea.safety.overcurrent` **Overcurrent protection** — overload/short circuit, conductor/equipment coordination and interruption. [method; D0–D4; S3]
- `ea.safety.residual-current` **Residual-current protection** — fault/leakage detection, device types and limitations. [method; D1–D4; S3]
- `ea.safety.lockout` **Energy isolation and lockout/tagout** — identify, isolate, verify, control and restore. [method; D0–D3; S3]
- `ea.safety.live-work` **Energized electrical work** — justification, boundaries, PPE, tools and qualified-person controls. [method; D1–D4; S3]
- `ea.safety.test-before-touch` **Absence-of-voltage verification** — suitable instrument, prove–test–prove and all conductors. [method; D0–D3; S3]
- `ea.safety.battery` **Battery safety** — chemical, electrical, thermal, fire, gas, handling and transport hazards. [concept; D0–D4; S3]
- `ea.safety.laser-optical` **Laser and intense-light safety** — classification, exposure, enclosures, eyewear and controls. [concept; D1–D4; S3]
- `ea.safety.rf` **RF/EMF safety** — exposure quantities, limits, controlled areas and measurement. [concept; D1–D4; S3]
- `ea.safety.rotating-machine` **Rotating-machine safety** — mechanical energy, entanglement, overspeed and safe torque off. [concept; D0–D3; S3]
- `ea.safety.explosive-atmosphere` **Hazardous/explosive atmospheres** — zones, ignition protection, equipment and inspection. [system; D2–D4; S3]

## Functional and product safety

- `ea.functional-safety.lifecycle` **Functional-safety lifecycle** — hazards, safety requirements, design, validation, operation and change. [method; D1–D4; S3]
- `ea.functional-safety.sil` **Safety integrity level** — risk reduction, probability metrics, architecture and systematic capability. [concept; D2–D4; S3]
- `ea.functional-safety.pl` **Performance level for machinery** — category, MTTFd, diagnostic coverage and common cause. [concept; D2–D4; S3]
- `ea.functional-safety.hardware-metric` **Safety hardware metrics** — SFF, HFT, SPFM/LFM and diagnostic coverage. [quantity; D3–D4; S3]
- `ea.functional-safety.software` **Safety-related software** — lifecycle, coding, tools, tests and independence. [method; D2–D4; S3]
- `ea.functional-safety.fail-safe` **Fail-safe, fail-operational and degraded modes** — system intent and safe state. [architecture; D1–D4; S3]
- `ea.product-safety.compliance` **Product-safety compliance** — applicable standard, construction, tests, technical file and certification. [method; D1–D4; S3]
- `ea.product-safety.medical` **Medical electrical safety** — patient/operator protection, leakage, essential performance and risk. [standard; D2–D4; S3]
- `ea.product-safety.av-it` **AV/ICT equipment safety** — energy-source classification and safeguards. [standard; D1–D4; S3]
- `ea.product-safety.household` **Household appliance safety** — normal/abnormal operation, construction, heat and mechanical hazards. [standard; D1–D4; S3]

## Standards and conformity ecosystem

- `ea.standard.iec` **International Electrotechnical Commission** — electrotechnical standards, conformity systems and vocabulary. [standard; D0–D3]
- `ea.standard.ieee` **IEEE standards ecosystem** — power, communications, computing and engineering practice. [standard; D0–D3]
- `ea.standard.iso` **ISO standards ecosystem** — management, safety, systems and cross-disciplinary standards. [standard; D0–D3]
- `ea.standard.itu` **International Telecommunication Union** — radio, telecom and development recommendations. [standard; D0–D3]
- `ea.standard.cispr` **CISPR** — radio-disturbance measurement, limits and EMC publications. [standard; D1–D3]
- `ea.standard.ipc` **IPC electronics standards** — PCB design/fabrication/assembly/acceptance. [standard; D1–D3]
- `ea.standard.jedec` **JEDEC standards** — semiconductor devices, memory, packages, test and reliability. [standard; D1–D3]
- `ea.standard.semi` **SEMI standards** — semiconductor manufacturing equipment/material/process interfaces. [standard; D1–D3]
- `ea.standard.isa` **ISA standards** — industrial automation, instrumentation and security. [standard; D1–D3]
- `ea.standard.national-regional` **National and regional standards** — adoption, deviations, legal status and market access. [concept; D1–D3]
- `ea.standard.certification` **Certification and conformity assessment** — first/second/third party, testing, inspection and surveillance. [method; D1–D3]
- `ea.standard.accreditation` **Laboratory/certification accreditation** — competence, scope, traceability and recognition. [method; D1–D3]
- `ea.standard.version-control` **Standards edition control** — issue, amendment, withdrawal, transition and contract applicability. [method; D1–D3]

## Thailand standards and regulatory system

- `ea.thailand.standard.tisi` **Thai Industrial Standards Institute (TISI/สมอ.)** — national industrial standards authority and conformity roles. [system; application; current; D0–D3]
- `ea.thailand.standard.tis` **Thai Industrial Standard (TIS/มอก.)** — standard identification, scope, edition and product use. [standard; application; current; D0–D3]
- `ea.thailand.standard.compulsory` **Compulsory Thai Industrial Standard** — mandatory product scope, marks, licensing and market obligations. [standard; application; current; D1–D3; S3]
- `ea.thailand.standard.eit` **Engineering Institute of Thailand standards (EIT/วสท.)** — professional engineering standards and guidance. [standard; application; current; D0–D3]
- `ea.thailand.standard.electrical-installation` **Electrical installations for Thailand** — EIT requirements and relation to law, utilities and adopted IEC concepts. [standard; application; current; D1–D4; S3]
- `ea.thailand.utility.mea` **Metropolitan Electricity Authority requirements (MEA/กฟน.)** — service-area connection, supply and customer rules. [standard; application; current; D1–D3; S3]
- `ea.thailand.utility.pea` **Provincial Electricity Authority requirements (PEA/กฟภ.)** — service-area connection, supply and customer rules. [standard; application; current; D1–D3; S3]
- `ea.thailand.regulator.erc` **Energy Regulatory Commission (ERC/กกพ.)** — energy-industry licensing, codes, tariffs and regulatory decisions. [system; application; current; D1–D3]
- `ea.thailand.regulator.nbtc` **NBTC (กสทช.)** — spectrum, radio equipment, telecommunications and broadcasting regulation. [system; application; current; D1–D3]
- `ea.thailand.metrology.nimt` **National Institute of Metrology (Thailand) (NIMT/มว.)** — national standards and traceability. [system; application; current; D1–D3]
- `ea.thailand.building.dpt` **Department of Public Works and Town & Country Planning (DPT/ยผ.)** — building and engineering regulatory context. [system; application; current; D1–D3; S3]
- `ea.thailand.labour.electrical-safety` **Thai occupational electrical-safety requirements** — employer/workplace obligations and current labor regulations. [standard; application; current; D1–D3; S3]
- `ea.thailand.fire.electrical` **Thai fire/building electrical requirements** — national/local authorities, emergency systems and inspection interfaces. [standard; application; current; D1–D3; S3]
- `ea.thailand.factory.electrical` **Thai factory electrical requirements** — industrial works, machinery, hazardous energy and inspection context. [standard; application; current; D1–D3; S3]
- `ea.thailand.royal-gazette` **Royal Thai Government Gazette source control** — enacted text, effective dates, amendments and legal primacy. [tool; application; current; D1–D3]

For every Thai node, publication must record the exact Thai title, number, Buddhist Era/Gregorian year, issuer, effective date, mandatory status, territorial scope and official URL.

## Engineering ethics and responsible technology

- `ea.ethics.public-safety` **Duty to public safety** — competence, disclosure, escalation and refusal of unsafe work. [concept; D0–D3]
- `ea.ethics.conflict` **Conflict of interest** — disclosure, independence and procurement/design decisions. [concept; D1–D3]
- `ea.ethics.data-integrity` **Technical data integrity** — honest results, uncertainty, provenance and reproducibility. [concept; D1–D3]
- `ea.ethics.sustainability` **Sustainable engineering** — lifecycle, energy/materials, repair, waste and environmental justice. [concept; D1–D4]
- `ea.ethics.privacy` **Privacy by design** — minimization, consent, retention and surveillance risks. [concept; current; D1–D3]
- `ea.ethics.accessibility` **Accessible engineering information and interfaces** — inclusive use, alarms, controls and documentation. [concept; D1–D3]
- `ea.ethics.dual-use` **Dual-use technology** — beneficial/harmful applications, controls and responsible communication. [concept; D1–D4]

## Cybersecurity foundations

- `ea.security.threat-model` **Threat modeling** — assets, actors, attack surfaces, trust boundaries and mitigations. [method; D1–D4]
- `ea.security.confidentiality-integrity-availability` **CIA and safety properties** — security objectives and operational tradeoffs. [concept; D0–D3]
- `ea.security.authentication-authorization` **Authentication and authorization** — identities, credentials, roles and least privilege. [method; D1–D4]
- `ea.security.cryptography` **Applied cryptography** — symmetric/asymmetric, hash/MAC/signature, key management and misuse. [method; D1–D4]
- `ea.security.secure-boot` **Secure boot and measured boot** — root of trust, signatures, rollback and attestation. [architecture; D1–D4]
- `ea.security.firmware-update` **Secure firmware update** — authenticity, anti-rollback, recovery and lifecycle. [method; D1–D4]
- `ea.security.hardware-root` **Hardware root of trust** — TPM/secure element/PUF, isolation and provisioning. [component; D2–D4]
- `ea.security.side-channel` **Side-channel attack** — timing, power, EM, cache, acoustic and countermeasures. [method; D2–D4]
- `ea.security.fault-injection` **Fault-injection attack** — voltage/clock/EM/laser glitches and defenses. [method; D2–D4; S2]
- `ea.security.supply-chain` **Hardware/software supply-chain security** — provenance, malicious modification, dependencies and updates. [method; D1–D4]
- `ea.security.iot` **IoT security** — identity, provisioning, communications, cloud, update and decommissioning. [architecture; D1–D4]
- `ea.security.industrial` **Industrial-control cybersecurity** — zones/conduits, availability, legacy, remote access and incident response. [architecture; D1–D4; S3]
- `ea.security.grid` **Power-system cybersecurity** — substations, SCADA/EMS/AMI, protection and resilience. [architecture; D2–D4; S3]
- `ea.security.vehicle` **Vehicle cybersecurity** — in-vehicle networks, diagnostics, gateways, OTA and safety. [architecture; D2–D4; S3]
- `ea.security.medical` **Medical-device cybersecurity** — patient risk, updates, SBOM, disclosure and hospital networks. [architecture; D2–D4; S3]
- `ea.security.vulnerability` **Vulnerability management** — discovery, disclosure, prioritization, patching and end of support. [method; D1–D4]
- `ea.security.incident-response` **Cyber-physical incident response** — detect, contain, preserve safety/evidence, recover and learn. [method; D1–D4; S3]

