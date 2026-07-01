# Supporting Engineering, Computation, and Professional Practice

Section defaults: `prerequisite` or `enabling`; `established+current`; `mapped`. These branches are intentionally lighter than core electrical/electronic domains while preserving the dependencies needed for complete explanations.

## Mechanical engineering

- `ea.mechanical.statics` **Statics** — forces, moments, equilibrium, structures and free-body diagrams. [concept; prerequisite; D1–D3]
- `ea.mechanical.dynamics` **Dynamics** — translation, rotation, energy, momentum and mechanisms. [concept; prerequisite; D1–D4]
- `ea.mechanical.strength` **Mechanics of materials** — stress, strain, elasticity, yielding, fatigue and fracture. [concept; prerequisite; D1–D4]
- `ea.mechanical.vibration` **Mechanical vibration** — modes, resonance, damping, isolation and shock. [concept; enabling; D1–D4; S2]
- `ea.mechanical.tolerance` **Dimensions and tolerances** — GD&T, fits, stack-up and manufacturing capability. [method; enabling; D1–D3]
- `ea.mechanical.fastener` **Fasteners and joints** — preload, locking, threads, adhesives and electrical bonding implications. [component; enabling; D1–D3]
- `ea.mechanical.enclosure` **Electronic enclosure design** — structure, access, sealing, shielding, cooling and compliance. [architecture; enabling; D1–D4]
- `ea.mechanical.mechanism` **Mechanisms and transmissions** — gears, belts, screws, bearings, couplings and backlash. [component; enabling; D1–D3; S2]
- `ea.mechanical.cad` **Mechanical CAD and drawing** — parametric models, assemblies, tolerances and release. [tool; enabling; D1–D3]
- `ea.mechanical.fea` **Structural finite-element analysis** — mesh, loads, contacts, convergence and validation. [method; enabling; D2–D4]
- `ea.mechanical.acoustics` **Engineering acoustics** — sound generation, propagation, transducers, noise and vibration. [concept; enabling; D1–D4]

## Thermal and fluid engineering

- `ea.thermal.conduction` **Heat conduction** — Fourier law, resistance, spreading and transient diffusion. [concept; prerequisite; D1–D4]
- `ea.thermal.convection` **Convection** — natural/forced flow, coefficients, boundary layers and correlations. [concept; prerequisite; D1–D4]
- `ea.thermal.radiation` **Thermal radiation** — emissivity, view factors, Stefan–Boltzmann and surfaces. [concept; prerequisite; D1–D4]
- `ea.thermal.network` **Thermal-network modeling** — steady/transient resistance/capacitance and compact models. [model; enabling; D1–D4]
- `ea.thermal.interface` **Thermal contacts and interfaces** — roughness, pressure, TIMs and mounting. [method; enabling; D1–D3]
- `ea.thermal.heatsink` **Heat sinks and extended surfaces** — fins, spreading, orientation and airflow. [component; enabling; D1–D4]
- `ea.thermal.fan-blower` **Fans and blowers** — curves, impedance, operating point, acoustics and reliability. [component; enabling; D1–D4]
- `ea.thermal.liquid-cooling` **Liquid cooling** — cold plates, pumps, loops, fluids, leaks and monitoring. [system; enabling; D1–D4; S2]
- `ea.thermal.heat-pipe` **Heat pipes and vapor chambers** — phase-change transport, orientation and limits. [component; enabling; D2–D4]
- `ea.thermal.thermoelectric` **Thermoelectric heating/cooling** — Seebeck/Peltier, COP and control. [component; enabling; D1–D4]
- `ea.fluid.fundamentals` **Fluid mechanics** — pressure, continuity, momentum, viscosity and turbulence. [concept; prerequisite; D1–D4]
- `ea.fluid.hydraulic-pneumatic` **Hydraulic and pneumatic systems** — power, valves, actuators, sensors and electro-control. [system; enabling; D1–D3; S3]
- `ea.thermal.cfd` **Computational fluid dynamics** — domains, turbulence, boundary conditions, convergence and validation. [method; enabling; D2–D4]

## Civil, structural, and building engineering

- `ea.civil.site` **Electrical site and route planning** — land, access, utilities, environment and constructability. [method; enabling; D1–D3; S2]
- `ea.civil.foundation` **Equipment, pole and tower foundations** — loads, soil, reinforcement and interfaces. [component; enabling; D1–D3; S3]
- `ea.civil.trench-duct` **Cable trenches, ducts and tunnels** — routes, fill, drainage, fire and thermal behavior. [system; enabling; D1–D3; S3]
- `ea.civil.building-services` **Building-services coordination** — electrical, HVAC, fire, plumbing, structure and space. [method; enabling; D1–D3; S3]
- `ea.civil.fire-compartment` **Fire compartments and penetrations** — fire stopping, cable systems and emergency circuits. [method; enabling; D1–D3; S3]
- `ea.civil.lightning-structure` **Structural lightning integration** — air terminals, bonding, reinforcement and separation. [method; enabling; D1–D3; S3]
- `ea.civil.bim` **Building information modeling** — coordinated models, metadata, clashes, quantities and lifecycle. [tool; enabling; D1–D3]

## Chemistry and electrochemistry

- `ea.chemistry.atomic-molecular` **Atomic and molecular chemistry** — orbitals, bonding, reaction and energy. [concept; prerequisite; D1–D4]
- `ea.chemistry.solution` **Solutions and electrolytes** — concentration, activity, ions, pH and conductivity. [concept; prerequisite; D2–D4; S1]
- `ea.chemistry.redox` **Oxidation–reduction** — electron transfer, potentials and balancing. [concept; prerequisite; D1–D4]
- `ea.chemistry.kinetics` **Reaction kinetics** — rate laws, activation, transport and catalysis. [concept; prerequisite; D2–D4]
- `ea.chemistry.electrode` **Electrode kinetics** — double layer, Butler–Volmer, polarization and mass transfer. [concept; prerequisite; D3–D4]
- `ea.chemistry.corrosion` **Corrosion chemistry** — galvanic cells, passivation, environment and protection. [phenomenon; enabling; D1–D4; S2]
- `ea.chemistry.safety` **Chemical safety for electronics** — SDS, solvents, fluxes, etchants, gases and waste. [method; enabling; D0–D3; S3]

## Software engineering

- `ea.software.programming` **Programming fundamentals** — control, data, functions, modularity, errors and testing. [concept; prerequisite; D0–D3]
- `ea.software.algorithm-data` **Algorithms and data structures** — complexity, arrays, lists, trees, graphs, hashes and search. [concept; prerequisite; D1–D4]
- `ea.software.architecture` **Software architecture** — components, interfaces, state, concurrency and quality attributes. [architecture; enabling; D1–D4]
- `ea.software.requirement` **Software requirements** — behavior, constraints, interfaces, acceptance and traceability. [method; enabling; D1–D3]
- `ea.software.version-control` **Version control** — commits, branches, reviews, tags and reproducible releases. [tool; enabling; D0–D3]
- `ea.software.build-ci` **Build systems and CI** — dependency, automation, artifacts, tests and provenance. [system; enabling; D1–D3]
- `ea.software.testing` **Software testing** — unit, integration, property, fuzz, system and regression. [method; enabling; D1–D4]
- `ea.software.static-analysis` **Static and dynamic analysis** — types, lint, sanitizers, formal and runtime checks. [method; enabling; D1–D4]
- `ea.software.realtime` **Real-time software design** — timing, scheduling, WCET, concurrency and resource bounds. [method; enabling; D1–D4]
- `ea.software.distributed` **Distributed systems** — clocks, consistency, consensus, failure and observability. [architecture; enabling; D2–D4]
- `ea.software.api-protocol` **APIs and protocols** — contracts, serialization, versioning, state and error behavior. [architecture; enabling; D1–D3]
- `ea.software.ui-ux` **User-interface and experience engineering** — tasks, feedback, accessibility, alarms and errors. [method; enabling; D1–D3]

## Data engineering and artificial intelligence

- `ea.data.model-database` **Data modeling and databases** — schemas, transactions, time series, retention and provenance. [system; enabling; D1–D3]
- `ea.data.pipeline` **Data pipeline** — acquisition, validation, transformation, storage, access and monitoring. [architecture; enabling; D1–D3]
- `ea.data.quality` **Data quality** — completeness, accuracy, timing, lineage and drift. [concept; enabling; D1–D3]
- `ea.ai.machine-learning` **Machine learning fundamentals** — supervised/unsupervised, loss, generalization and evaluation. [method; enabling; D1–D4]
- `ea.ai.neural-network` **Neural networks** — architectures, training, regularization and deployment. [method; enabling; D2–D4]
- `ea.ai.time-series` **Time-series learning** — forecasting, anomaly, state and uncertainty. [method; enabling; D2–D4]
- `ea.ai.computer-vision` **Computer vision** — detection, segmentation, tracking, geometry and deployment. [method; enabling; D1–D4]
- `ea.ai.edge` **Edge AI deployment** — quantization, pruning, accelerators, power and validation. [method; enabling; current; D2–D4]
- `ea.ai.physics-informed` **Physics-informed and hybrid modeling** — constraints, differentiable models and system identification. [method; enabling; emerging; D3–D4]
- `ea.ai.safety` **AI assurance in engineered systems** — dataset bias, robustness, uncertainty, explainability and monitoring. [method; enabling; current; D2–D4; S3]

## Systems engineering

- `ea.system.requirement` **System requirements engineering** — stakeholder need, shall statements, interfaces, verification and traceability. [method; enabling; D0–D4]
- `ea.system.architecture` **System architecture** — functions, logical/physical decomposition, interfaces and trade studies. [method; enabling; D1–D4]
- `ea.system.interface` **Interface engineering** — electrical, mechanical, thermal, data, timing and organizational contracts. [method; enabling; D1–D4]
- `ea.system.trade-study` **Engineering trade study** — criteria, weighting, uncertainty, sensitivity and decision record. [method; enabling; D1–D3]
- `ea.system.v-model` **Lifecycle/V-model** — decomposition, integration, verification and validation. [method; enabling; D1–D3]
- `ea.system.verification-validation` **Verification and validation** — build-right versus right-system, methods and evidence. [method; enabling; D0–D4]
- `ea.system.configuration` **Configuration management** — baselines, items, changes, status and audit. [method; enabling; D1–D3]
- `ea.system.risk` **Technical risk management** — identify, analyze, mitigate, monitor and accept. [method; enabling; D1–D3]
- `ea.system.mbse` **Model-based systems engineering** — system models, views, consistency and executable behavior. [method; enabling; current; D2–D4]
- `ea.system.human-factors` **Human factors engineering** — workload, controls/displays, error, maintainability and safety. [method; enabling; D1–D4; S2]

## Manufacturing and industrial engineering

- `ea.industrial.process-design` **Manufacturing process design** — flow, equipment, fixtures, controls and capability. [method; enabling; D1–D3]
- `ea.industrial.lean` **Lean production** — value flow, waste, pull, standard work and continuous improvement. [method; enabling; D1–D3]
- `ea.industrial.six-sigma` **Six Sigma and variation reduction** — DMAIC, measurement, analysis and control. [method; enabling; D1–D3]
- `ea.industrial.production-planning` **Production planning** — capacity, scheduling, inventory and constraints. [method; enabling; D1–D3]
- `ea.industrial.maintenance` **Maintenance strategy** — reactive, preventive, predictive, RCM and spares. [method; enabling; D1–D4]
- `ea.industrial.robot-cell` **Automated manufacturing cell** — robots, fixtures, sensors, safety and control. [system; enabling; D1–D4; S3]
- `ea.industrial.traceability` **Manufacturing traceability** — serialization, genealogy, process data and recalls. [system; enabling; D1–D3]
- `ea.industrial.metrology` **Production metrology** — gauge selection, calibration, MSA and process feedback. [method; enabling; D1–D3]

## Economics, project, and professional practice

- `ea.economics.engineering` **Engineering economics** — cash flow, present value, lifecycle cost and uncertainty. [method; enabling; D1–D3]
- `ea.economics.cost` **Product/system cost engineering** — BOM, NRE, manufacturing, operations, maintenance and risk. [method; enabling; D1–D3]
- `ea.project.scope-schedule` **Project scope and schedule** — deliverables, dependencies, critical path and change. [method; enabling; D0–D3]
- `ea.project.procurement` **Technical procurement** — specifications, tenders, evaluation, acceptance and supplier quality. [method; enabling; D1–D3]
- `ea.project.commissioning` **Commissioning** — plans, checks, functional tests, handover and records. [method; enabling; D1–D3; S3]
- `ea.project.documentation` **Engineering documentation** — drawings, calculations, reports, manuals and records. [method; enabling; D0–D3]
- `ea.project.technical-communication` **Technical communication** — audience, terminology, figures, evidence and localization. [method; enabling; D0–D3]
- `ea.profession.licensure` **Engineering licensure and competence** — jurisdiction, scope, responsibility and continuing development. [concept; enabling; D0–D3]

