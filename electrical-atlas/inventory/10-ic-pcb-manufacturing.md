# IC Design, PCB Engineering, Packaging, Manufacturing, Test, and Repair

Section defaults: `core` or `enabling`; `established+current`; `mapped`. Fabrication chemicals, lasers, X-ray, high voltage and production machinery require controlled environments.

## Integrated-circuit design flow

- `ea.ic.specification` **IC specification and architecture** — functions, interfaces, PPA, test, safety and verification plan. [method; D1–D4]
- `ea.ic.pdk` **Process design kit** — models, layers, rules, cells, corners and foundry interfaces. [tool; D2–D4]
- `ea.ic.analog-design` **Analog IC design flow** — schematic, bias, corners, noise, mismatch, layout and extraction. [method; D2–D4]
- `ea.ic.digital-design` **Digital IC design flow** — RTL, verification, synthesis, physical implementation and signoff. [method; D2–D4]
- `ea.ic.mixed-signal-design` **Mixed-signal IC design flow** — partitioning, AMS verification, substrate/supply coupling and calibration. [method; D3–D4]
- `ea.ic.rf-design` **RFIC/MMIC design flow** — device models, matching, EM extraction, stability and packaging. [method; D3–D4]
- `ea.ic.custom-layout` **Custom IC layout** — matching, symmetry, parasitics, guard rings and density. [method; D2–D4]
- `ea.ic.physical-verification` **DRC/LVS/ERC** — manufacturability, connectivity and electrical-rule checking. [method; D2–D4]
- `ea.ic.parasitic-extraction` **Parasitic extraction** — R/C/L coupling, corners and back-annotation. [method; D2–D4]
- `ea.ic.signal-integrity` **On-chip signal integrity** — crosstalk, noise, delay, electromigration and variation. [method; D3–D4]
- `ea.ic.power-integrity` **On-chip power integrity** — IR drop, dynamic noise, decoupling and package interaction. [method; D3–D4]
- `ea.ic.timing-signoff` **Timing signoff** — multi-mode/corner, OCV, SI and constraints. [method; D2–D4]
- `ea.ic.power-signoff` **Power analysis and signoff** — vector/vectorless activity, leakage/dynamic and thermal coupling. [method; D3–D4]
- `ea.ic.formal-equivalence` **Formal equivalence** — RTL/gate and post-optimization correspondence. [method; D2–D4]
- `ea.ic.tapeout` **Tapeout and mask-data preparation** — stream formats, checks, release and change control. [method; D2–D4]
- `ea.ic.ip-reuse` **Semiconductor IP integration** — hard/soft IP, interfaces, verification, licensing and provenance. [method; D2–D4]

## Semiconductor fabrication

- `ea.fab.wafer` **Wafer and substrate preparation** — crystal growth, slicing, polishing, orientation and defects. [method; D2–D4; S2]
- `ea.fab.cleanroom` **Cleanroom and contamination control** — particles, chemicals, protocols and monitoring. [system; D1–D4; S3]
- `ea.fab.oxidation` **Thermal oxidation** — kinetics, interfaces, thickness and defects. [method; D3–D4; S3]
- `ea.fab.deposition.pvd-cvd-ald` **Thin-film deposition** — PVD, CVD, epitaxy and ALD mechanisms. [method; D2–D4; S3]
- `ea.fab.epitaxy` **Epitaxial growth** — homo/heteroepitaxy, doping, strain and defects. [method; D3–D4; S3]
- `ea.fab.lithography` **Photolithography** — resist, mask, exposure, focus, alignment and resolution. [method; D2–D4; S3]
- `ea.fab.euv` **EUV lithography** — source, reflective optics, masks, resist and stochastic defects. [method; current; D3–D4; S3]
- `ea.fab.etch` **Wet and dry etching** — selectivity, anisotropy, plasma damage and endpoint. [method; D2–D4; S3]
- `ea.fab.ion-implant` **Ion implantation** — dose, energy, channeling, damage and activation. [method; D3–D4; S3]
- `ea.fab.diffusion-anneal` **Diffusion and annealing** — dopant profiles, activation, defect repair and thermal budget. [method; D3–D4; S3]
- `ea.fab.cmp` **Chemical–mechanical planarization** — removal, uniformity, dishing and contamination. [method; D3–D4; S3]
- `ea.fab.metallization` **Interconnect metallization** — Al/Cu/Ru systems, barriers, vias and low-k dielectrics. [method; D3–D4; S3]
- `ea.fab.isolation` **Device isolation** — junction, LOCOS, STI and deep trench. [method; D3–D4]
- `ea.fab.process-integration` **Process integration** — module interactions, thermal budget, yield and device targets. [method; D3–D4]
- `ea.fab.metrology` **Semiconductor process metrology** — CD, overlay, film, doping, defects and inline control. [method; D2–D4; S2]
- `ea.fab.statistical-control` **Statistical process control** — control charts, excursions, fault detection and APC. [method; D2–D4]
- `ea.fab.yield` **Semiconductor yield engineering** — defect density, parametric yield, redundancy and learning. [method; D2–D4]

## IC packaging and advanced integration

- `ea.package.die-attach` **Die attach** — adhesives, solder/sinter, voids, thermal/mechanical behavior. [method; D2–D4; S1]
- `ea.package.wire-bond` **Wire bonding** — ball/wedge bonds, metallurgy, loop and reliability. [method; D1–D4]
- `ea.package.flip-chip` **Flip-chip interconnect** — bumps, underfill, redistribution and stress. [architecture; D2–D4]
- `ea.package.leadframe` **Leadframe packages** — molding, leads, exposed pad and parasitics. [component; D1–D3]
- `ea.package.bga-csp` **BGA and chip-scale package** — ball array, warpage, assembly and inspection. [component; D1–D4]
- `ea.package.wafer-level` **Wafer-level packaging** — fan-in/fan-out, RDL and panel-level variants. [architecture; current; D2–D4]
- `ea.package.2d-2.5d-3d` **2D/2.5D/3D integration** — interposers, TSV, stacking and thermal/power/test. [architecture; current+emerging; D2–D4]
- `ea.package.chiplet` **Chiplet architecture** — partitioning, die-to-die links, known-good die and ecosystem. [architecture; current+emerging; D2–D4]
- `ea.package.sip` **System in package** — heterogeneous integration, passives, shielding and test. [system; current; D2–D4]
- `ea.package.power` **Power-semiconductor packaging** — substrates, clips, sinter, cooling and isolation. [architecture; D2–D4; S2]
- `ea.package.optical-rf` **Optical and RF packaging** — alignment, hermeticity, impedance and materials. [architecture; D3–D4]
- `ea.package.thermal-mechanical` **Package thermo-mechanics** — CTE mismatch, warpage, delamination and fatigue. [model; D2–D4]
- `ea.package.signal-power-integrity` **Package SI/PI** — inductance, crosstalk, escape, PDN and co-design. [method; D2–D4]

## Semiconductor test and characterization

- `ea.test.wafer-probe` **Wafer probing** — probe cards, contact, parametric and die test. [method; D2–D4]
- `ea.test.production-ic` **IC production test** — testers, handlers, patterns, limits, time and economics. [system; D2–D4]
- `ea.test.scan-atpg` **Scan and ATPG** — fault models, compression and coverage. [method; D2–D4]
- `ea.test.memory-bist` **Memory BIST/repair** — algorithms, redundancy and diagnosis. [method; D2–D4]
- `ea.test.analog-mixed-signal` **Analog/mixed-signal test** — converters, PLL, RF and multisite challenges. [method; D3–D4]
- `ea.test.rf` **RF production test** — calibration, parallelism, de-embedding and test time. [method; D3–D4]
- `ea.test.burn-in` **Burn-in and stress screening** — infant mortality, acceleration and tradeoffs. [method; D2–D4; S2]
- `ea.test.characterization` **Silicon characterization** — PVT mapping, shmoo, margins and model correlation. [method; D2–D4]
- `ea.test.failure-analysis-ic` **IC failure analysis** — electrical localization, decap, microscopy, FIB and physical evidence. [method; D2–D4; S3]

## PCB design and libraries

- `ea.pcb.requirement` **PCB requirements and constraints** — electrical, mechanical, thermal, regulatory, cost and test. [method; D0–D4]
- `ea.pcb.schematic` **Schematic capture** — hierarchy, nets, annotations, readability and review. [method; D0–D4]
- `ea.pcb.symbol-footprint` **Symbols, footprints and library governance** — pin mapping, courtyards, provenance and validation. [method; D1–D4]
- `ea.pcb.bom` **Bill of materials** — manufacturer/part data, alternates, lifecycle and traceability. [tool; D1–D3]
- `ea.pcb.stackup` **PCB stackup** — layer count, dielectrics, copper, impedance and manufacturability. [architecture; D1–D4]
- `ea.pcb.placement` **Component placement** — function, flow, return paths, thermal, assembly and access. [method; D1–D4]
- `ea.pcb.routing` **PCB routing** — topology, widths, spacing, vias, length and constraints. [method; D1–D4]
- `ea.pcb.power-ground` **Power and ground implementation** — planes/pours, splits, returns, via arrays and current. [method; D1–D4]
- `ea.pcb.high-speed` **High-speed PCB design** — controlled impedance, loss, crosstalk, skew and channels. [method; D2–D4]
- `ea.pcb.analog` **Analog PCB design** — leakage, guarding, low noise, references and sensor interfaces. [method; D1–D4]
- `ea.pcb.power` **Power PCB design** — switching loops, gate drive, current/thermal paths and creepage. [method; D1–D4; S3]
- `ea.pcb.rf` **RF PCB design** — transmission structures, matching, grounding, shielding and launch. [method; D2–D4]
- `ea.pcb.flex-rigidflex` **Flexible and rigid-flex PCB** — stack, bend, dynamic use, stiffener and fabrication. [architecture; D2–D4]
- `ea.pcb.review` **Schematic/layout review** — checklists, simulations, cross-domain and release evidence. [method; D1–D4]
- `ea.pcb.output` **PCB fabrication/assembly data** — Gerber/ODB++/IPC-2581, drill, drawings, pick-place and BOM. [tool; D1–D3]

## PCB fabrication

- `ea.pcb.material.fr4` **FR-4 and laminate systems** — glass/resin, Tg/Td/CTE, dielectric and loss properties. [material; D1–D4]
- `ea.pcb.material.high-frequency` **High-frequency laminates** — PTFE/hydrocarbon/ceramic systems and processing. [material; D2–D4]
- `ea.pcb.fabrication.imaging-etch` **PCB imaging and etching** — pattern transfer, undercut and feature control. [method; D1–D3; S2]
- `ea.pcb.fabrication.lamination` **Multilayer lamination** — prepreg flow, registration, voids and CTE. [method; D2–D4]
- `ea.pcb.fabrication.drill` **Mechanical/laser drilling** — vias, smear, aspect ratio and microvias. [method; D1–D4; S2]
- `ea.pcb.fabrication.plating` **Copper plating** — through-hole/via fill, thickness, throwing power and reliability. [method; D2–D4; S2]
- `ea.pcb.fabrication.soldermask` **Solder mask and legend** — material, registration, dams and clearance. [method; D1–D3]
- `ea.pcb.fabrication.finish` **Surface finishes** — HASL, ENIG/ENEPIG, OSP, immersion tin/silver and tradeoffs. [method; D1–D4; S2]
- `ea.pcb.fabrication.impedance-test` **Controlled-impedance fabrication/test** — coupons, TDR and process tolerances. [method; D2–D4]
- `ea.pcb.fabrication.quality` **PCB acceptance and quality** — coupons, microsections, electrical test and workmanship classes. [method; D1–D4]

## Electronic assembly

- `ea.assembly.smt` **Surface-mount assembly process** — print, place, reflow, inspect and repair. [method; D0–D4; S2]
- `ea.assembly.tht` **Through-hole assembly** — insertion, wave/selective/manual solder and constraints. [method; D0–D3; S2]
- `ea.assembly.solder-paste` **Solder paste and printing** — alloy, flux, rheology, stencil and defects. [material; D1–D4; S2]
- `ea.assembly.reflow` **Reflow soldering** — thermal profile, wetting, intermetallics and component limits. [method; D1–D4; S2]
- `ea.assembly.wave-selective` **Wave and selective soldering** — flux, preheat, contact and defects. [method; D1–D3; S2]
- `ea.assembly.cleaning` **Cleaning and contamination control** — flux residues, ionic cleanliness and coatings. [method; D1–D4; S2]
- `ea.assembly.conformal-coating` **Conformal coating and potting** — materials, coverage, moisture, repair and thermal effects. [method; D1–D4; S2]
- `ea.assembly.xray-aoi` **AOI, SPI and X-ray inspection** — capabilities, false calls and hidden joints. [method; D1–D4; S2]
- `ea.assembly.bga` **BGA/QFN/LGA assembly** — paste, voiding, warpage, head-in-pillow and inspection. [method; D2–D4]
- `ea.assembly.press-fit-crimp` **Press-fit and crimp interconnects** — tooling, gas-tight joints and inspection. [method; D1–D3]
- `ea.assembly.esd-control` **ESD-control program** — protected areas, grounding, packaging, personnel and verification. [method; D1–D4; S1]
- `ea.assembly.moisture` **Moisture-sensitive device handling** — MSL, floor life, baking and popcorning. [method; D1–D3]

## Cables, connectors, and wiring systems

- `ea.interconnect.contact-physics` **Contact physics** — normal force, films, fretting, plating and resistance. [concept; D2–D4]
- `ea.interconnect.connector-selection` **Connector selection** — current, voltage, signal, environment, mating and keying. [method; D1–D4; S2]
- `ea.interconnect.crimp` **Crimp termination** — conductor prep, tooling, pull/section inspection and failure. [method; D1–D3; S2]
- `ea.interconnect.solder-termination` **Soldered wire termination** — wetting, strain relief and wicking. [method; D1–D3; S2]
- `ea.interconnect.cable` **Cable construction** — conductor, insulation, shield, jacket, impedance and rating. [component; D0–D4; S2]
- `ea.interconnect.harness` **Wire-harness design** — routing, branches, protection, derating, documentation and test. [architecture; D1–D4; S2]
- `ea.interconnect.high-voltage` **High-voltage interconnect** — creepage/clearance, partial discharge, shielding and interlock. [component; D2–D4; S3]
- `ea.interconnect.fiber` **Fiber-optic interconnect** — connector polish, cleanliness, bend, loss and inspection. [component; D1–D3; S1]

## Product test, debugging, and repair

- `ea.test.dft-board` **Board design for test** — access, test points, boundary scan, fixtures and diagnostics. [method; D1–D4]
- `ea.test.ict` **In-circuit test** — bed-of-nails/flying probe, shorts/opens/components and coverage. [method; D1–D3]
- `ea.test.functional` **Functional test** — requirements, stimuli, loads, limits and traceability. [method; D1–D4]
- `ea.test.boundary-scan` **Board boundary scan** — interconnect, clusters, flash and diagnostics. [method; D1–D4]
- `ea.test.hil` **Hardware-in-the-loop test** — plant emulation, real-time I/O, fault insertion and safety. [system; D2–D4; S2]
- `ea.debug.strategy` **Systematic electronic debugging** — reproduce, partition, measure, hypothesize and verify. [method; D0–D4; S2]
- `ea.debug.power-sequence` **Power/clock/reset debugging** — sequencing, inrush, supervision and boot dependencies. [method; D1–D4; S2]
- `ea.debug.signal-trace` **Signal-path debugging** — stimulus, checkpoints, expected transfer and loading. [method; D1–D3]
- `ea.repair.rework` **Electronic rework** — removal/replacement, pads, profiles, ESD and workmanship. [method; D1–D3; S2]
- `ea.repair.fault-isolation` **Component-level fault isolation** — symptom trees, comparative tests, thermal/current injection. [method; D1–D4; S2]
- `ea.repair.right-to-repair` **Repairability and service information** — modularity, diagnostics, parts, policy and lifecycle. [concept; current; D1–D3]

## Manufacturing quality and lifecycle

- `ea.manufacturing.dfm-dfa` **Design for manufacture and assembly** — process capability, tolerances and cost. [method; D1–D4]
- `ea.manufacturing.dfr-dft` **Design for reliability and test** — fault coverage, stress margins and maintainability. [method; D1–D4]
- `ea.manufacturing.process-capability` **Process capability** — Cp/Cpk/Pp/Ppk, distributions and limitations. [method; D2–D3]
- `ea.manufacturing.spc` **Statistical process control** — control charts, variation, reactions and traceability. [method; D1–D4]
- `ea.manufacturing.quality-system` **Quality-management system** — controlled processes, audits, nonconformance and corrective action. [system; D1–D3]
- `ea.manufacturing.traceability` **Product/material traceability** — lots, serialization, genealogy and records. [system; D1–D3]
- `ea.manufacturing.supply-chain` **Electronic supply-chain engineering** — sourcing, lead time, allocation, geopolitics and risk. [enabling; current; D1–D4]
- `ea.manufacturing.obsolescence` **Component obsolescence management** — lifecycle status, redesign, last-time buy and qualification. [method; D1–D4]
- `ea.manufacturing.counterfeit` **Counterfeit mitigation** — authorized sourcing, inspection, testing and reporting. [method; D1–D4]
- `ea.manufacturing.change-control` **Engineering change control** — baselines, impact, approval, configuration and release. [method; D1–D3]

