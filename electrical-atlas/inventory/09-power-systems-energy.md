# Power Systems, Generation, Storage, and Energy Management

Section defaults: `core`; `established+current`; `mapped`; safety `S3` for field equipment, installations and high-energy storage.

## Power-system foundations

- `ea.grid.architecture` **Electric-power system architecture** — generation, transmission, distribution, utilization and control areas. [system; D0–D4; S3]
- `ea.grid.three-phase` **Three-phase power systems** — phase sequence, star/delta, neutral and unbalance. [concept; D1–D4; S3]
- `ea.grid.per-unit` **Per-unit system** — bases, transformer invariance and multi-voltage networks. [method; D1–D4]
- `ea.grid.symmetrical-components` **Symmetrical components** — positive/negative/zero sequences and unbalanced faults. [method; D2–D4]
- `ea.grid.load-model` **Power-system load models** — ZIP, motor, dynamic, aggregated and demand behavior. [model; D2–D4]
- `ea.grid.frequency-voltage` **Frequency and voltage control** — power balance, reactive support and timescales. [concept; D1–D4; S3]
- `ea.grid.reliability` **Power-system reliability** — adequacy, security, SAIDI/SAIFI and resilience. [concept; D1–D4]

## Generation

- `ea.generation.synchronous` **Synchronous generation** — prime mover, excitation, governor, synchronization and capability. [system; D1–D4; S3]
- `ea.generation.thermal` **Thermal power plant** — steam/gas/combined-cycle, auxiliaries, control and efficiency. [system; D1–D4; S3]
- `ea.generation.hydro` **Hydroelectric generation** — turbine/generator, head/flow, governor and pumped storage. [system; D1–D4; S3]
- `ea.generation.nuclear` **Nuclear power electrical systems** — generation, safety classes, emergency power and regulation context. [system; D2–D4; S3]
- `ea.generation.distributed` **Distributed generation** — inverter/machine resources, interconnection and islanding. [system; current; D1–D4; S3]
- `ea.generation.black-start` **Black start** — source capability, restoration sequence and coordination. [method; D2–D4; S3]
- `ea.generation.synchronization` **Generator/grid synchronization** — voltage, frequency, phase and protection. [method; D1–D4; S3]

## Transmission and substations

- `ea.grid.transmission.line` **Overhead transmission line** — conductor, insulator, tower, sag, corona and parameters. [system; D1–D4; S3]
- `ea.grid.transmission.cable` **Power cable system** — conductor, insulation, screen, sheath, bonding, thermal rating and tests. [system; D1–D4; S3]
- `ea.grid.line-model` **Power-line models** — short/medium/long line, ABCD, surge impedance and compensation. [model; D1–D4]
- `ea.grid.corona` **Corona and radio/audible effects** — onset, loss, field and mitigation. [phenomenon; D2–D4; S3]
- `ea.grid.substation` **Substation architecture** — bus schemes, bays, primary/secondary systems and layout. [system; D0–D4; S3]
- `ea.grid.switchgear` **High-/medium-voltage switchgear** — breakers, disconnectors, earthing switches, insulation and interlocks. [system; D1–D4; S3]
- `ea.grid.breaker-interruption` **Power-circuit interruption** — arc extinction, TRV and breaker technologies. [phenomenon; D2–D4; S3]
- `ea.grid.busbar` **Busbar system** — current/thermal/electrodynamic design and arrangements. [component; D1–D4; S3]
- `ea.grid.insulation-coordination` **Insulation coordination** — overvoltage classes, withstand, arresters and clearances. [method; D2–D4; S3]
- `ea.grid.substation-automation` **Substation automation** — IEDs, IEC 61850 concepts, time, GOOSE and process bus. [system; current; D1–D4; S3]
- `ea.grid.hvdc` **HVDC transmission** — LCC/VSC, converters, DC grids, control and protection. [system; current; D2–D4; S3]
- `ea.grid.facts` **FACTS devices** — SVC, STATCOM, series compensation, UPFC and control. [system; D2–D4; S3]

## Distribution and utilization

- `ea.grid.distribution` **Distribution network** — feeders, transformers, radial/ring/mesh, voltage control and automation. [system; D0–D4; S3]
- `ea.grid.service` **Electrical service connection** — point of supply, metering, main protection and utility boundary. [system; D1–D4; S3]
- `ea.grid.low-voltage-installation` **Low-voltage installation** — circuits, protection, conductor sizing, voltage drop, earthing and verification. [system; D0–D4; S3]
- `ea.grid.demand-diversity` **Demand, diversity and load estimation** — connected load, coincidence and sizing. [method; D1–D3]
- `ea.grid.voltage-regulation` **Distribution voltage regulation** — taps, capacitors, regulators and inverter support. [method; D1–D4; S3]
- `ea.grid.loss` **Technical and nontechnical losses** — conductor/transformer loss, metering and theft context. [concept; D1–D4]
- `ea.grid.rural-electrification` **Rural and remote electrification** — extension, mini-grid, standalone and affordability. [application; D1–D4; S3]
- `ea.grid.building-electrical` **Building electrical system** — intake, distribution boards, final circuits, emergency and special systems. [system; D0–D4; S3]
- `ea.grid.data-center-power` **Data-center electrical system** — utility, generators, UPS, distribution, redundancy, grounding and monitoring. [system; D1–D4; S3]

## Power flow, faults, stability, and operation

- `ea.grid.power-flow` **Power-flow analysis** — bus types, Newton–Raphson, decoupled/DC methods and limits. [method; D1–D4]
- `ea.grid.optimal-power-flow` **Optimal power flow** — constraints, losses, cost, security and renewables. [method; D3–D4]
- `ea.grid.fault` **Power-system fault analysis** — balanced/unbalanced faults, impedances and duties. [method; D1–D4; S3]
- `ea.grid.short-circuit-rating` **Short-circuit current and equipment duty** — making/breaking/withstand and X/R. [quantity; D1–D4; S3]
- `ea.grid.stability.rotor-angle` **Rotor-angle stability** — small-signal/transient behavior, equal-area and damping. [concept; D2–D4]
- `ea.grid.stability.voltage` **Voltage stability** — reactive limits, collapse and indices. [concept; D2–D4]
- `ea.grid.stability.frequency` **Frequency stability** — inertia, primary/secondary response, RoCoF and load shedding. [concept; D2–D4]
- `ea.grid.state-estimation` **Power-system state estimation** — measurements, observability, bad data and topology. [method; D2–D4]
- `ea.grid.economic-dispatch` **Economic dispatch and unit commitment** — constraints, reserves and optimization. [method; D2–D4]
- `ea.grid.automatic-generation-control` **Automatic generation control** — tie-line bias, frequency restoration and areas. [system; D2–D4]
- `ea.grid.restoration` **Grid restoration** — island formation, cranking paths, synchronization and resilience. [method; D2–D4; S3]

## Protection

- `ea.protection.philosophy` **Protection philosophy** — selectivity, speed, sensitivity, dependability, security and zones. [concept; D1–D4; S3]
- `ea.protection.overcurrent` **Overcurrent and earth-fault protection** — curves, pickup, direction and coordination. [system; D1–D4; S3]
- `ea.protection.differential` **Differential protection** — restraint, CT errors, transformer/machine/bus applications. [system; D2–D4; S3]
- `ea.protection.distance` **Distance protection** — impedance zones, polarization, load encroachment and communication. [system; D2–D4; S3]
- `ea.protection.feeder` **Feeder protection and reclosure** — faults, sectionalizing, fuse-saving/blowing and DER. [system; D1–D4; S3]
- `ea.protection.transformer` **Transformer protection** — differential, restricted earth fault, gas/pressure, thermal and overfluxing. [system; D1–D4; S3]
- `ea.protection.generator-motor` **Generator and large-motor protection** — stator/rotor, loss of field, reverse power and thermal. [system; D2–D4; S3]
- `ea.protection.busbar` **Busbar protection** — differential zones, CT saturation and breaker failure. [system; D2–D4; S3]
- `ea.protection.breaker-failure` **Breaker-failure protection** — initiation, timing, backup trip and zones. [system; D2–D4; S3]
- `ea.protection.instrument-transformer` **CT/VT behavior for protection** — saturation, transients, polarity and burden. [concept; D2–D4; S3]
- `ea.protection.coordination` **Protection coordination** — time-current grading, settings and studies. [method; D1–D4; S3]
- `ea.protection.arc-flash` **Arc-flash analysis and mitigation** — incident energy, clearing, boundaries and controls. [method; D2–D4; S3]

## Grounding, lightning, and power quality

- `ea.grid.grounding.system` **Power-system grounding** — solid, resistance, reactance, resonant and ungrounded systems. [architecture; D1–D4; S3]
- `ea.grid.earthing.installation` **Protective earthing and bonding** — fault path, touch voltage, disconnection and equipotential bonding. [method; D0–D4; S3]
- `ea.grid.grounding.substation` **Substation grounding grid** — soil, step/touch potential, conductors and testing. [system; D2–D4; S3]
- `ea.grid.lightning` **Lightning physics and protection** — attachment, air terminals, down conductors, bonding and surge. [system; D1–D4; S3]
- `ea.grid.power-quality` **Power quality** — definitions, monitoring, compatibility and responsibility. [concept; D0–D4; S2]
- `ea.grid.harmonic` **Power-system harmonics** — sources, resonance, distortion, filters and limits. [phenomenon; D1–D4; S3]
- `ea.grid.flicker` **Voltage fluctuation and flicker** — sources, perception and measurement. [phenomenon; D2–D4]
- `ea.grid.sag-swell` **Voltage sag, swell and interruption** — causes, ride-through and mitigation. [phenomenon; D1–D4; S2]
- `ea.grid.unbalance` **Voltage/current unbalance** — sequence components and equipment impact. [phenomenon; D1–D4; S2]
- `ea.grid.transient` **Power-system transients** — switching, lightning, resonance and traveling waves. [phenomenon; D2–D4; S3]

## Smart grids, DER, and markets

- `ea.grid.der` **Distributed energy resource** — generation/storage/flexible load, interconnection and aggregation. [system; current; D1–D4; S3]
- `ea.grid.microgrid` **Microgrid** — grid-connected/island modes, control hierarchy, protection and black start. [system; current; D1–D4; S3]
- `ea.grid.grid-forming` **Grid-forming converter** — voltage source behavior, droop, virtual machine and stability. [system; emerging; D2–D4; S3]
- `ea.grid.grid-following` **Grid-following converter** — PLL/current control, weak-grid behavior and ride-through. [system; current; D2–D4; S3]
- `ea.grid.ami` **Advanced metering infrastructure** — meters, communications, head-end, data and security. [system; current; D1–D4]
- `ea.grid.demand-response` **Demand response** — pricing/control, flexibility, baselines and consumer impacts. [system; current; D1–D4]
- `ea.grid.virtual-power-plant` **Virtual power plant** — aggregation, forecasting, dispatch and markets. [system; emerging; D2–D4]
- `ea.grid.market` **Electricity market** — energy, capacity, ancillary services, settlement and regulation. [system; D1–D4]
- `ea.grid.planning` **Power-system planning** — load/resource forecast, expansion, reliability and scenarios. [method; D1–D4]
- `ea.grid.asset-management` **Grid asset management** — condition, risk, lifecycle, maintenance and replacement. [method; D1–D4]
- `ea.grid.wide-area` **Wide-area monitoring/protection/control** — PMU, synchrophasor, communications and applications. [system; current; D2–D4; S3]

## High-voltage and pulsed-power engineering

- `ea.high-voltage.field-control` **High-voltage electric-field control** — electrodes, grading, triple points, corona rings and numerical analysis. [method; D2–D4; S3]
- `ea.high-voltage.breakdown.gas` **Gaseous breakdown** — Townsend/streamer/leader mechanisms, Paschen behavior and pressure. [phenomenon; D2–D4; S3]
- `ea.high-voltage.breakdown.liquid` **Liquid-dielectric breakdown** — impurities, bubbles, streamers and conditioning. [phenomenon; D3–D4; S3]
- `ea.high-voltage.breakdown.solid` **Solid-dielectric breakdown** — intrinsic, thermal, electromechanical, treeing and tracking. [phenomenon; D2–D4; S3]
- `ea.high-voltage.partial-discharge` **Partial-discharge engineering** — inception/extinction, apparent charge, patterns, localization and aging. [method; D2–D4; S3]
- `ea.high-voltage.insulator` **High-voltage insulators and bushings** — porcelain/glass/polymer, contamination, grading and monitoring. [component; D1–D4; S3]
- `ea.high-voltage.arrester` **Surge arrester** — metal-oxide behavior, energy, protective level and condition. [component; D1–D4; S3]
- `ea.high-voltage.generation.ac-dc` **High-voltage AC and DC generation** — cascades, resonant test sets, multipliers and ripple. [system; D2–D4; S3]
- `ea.high-voltage.impulse-generator` **Impulse generator** — Marx circuits, wave shaping, load effects and triggering. [system; D2–D4; S3]
- `ea.high-voltage.measurement` **High-voltage measurement** — dividers, gaps, transformers, field probes, bandwidth and uncertainty. [method; D2–D4; S3]
- `ea.high-voltage.test` **Dielectric and high-voltage testing** — withstand, impulse, PD, loss factor and test safety. [method; D2–D4; S3]
- `ea.pulsed-power.storage` **Pulsed-power energy storage** — capacitor, inductive, compulsator and explosive contexts. [system; D3–D4; S3]
- `ea.pulsed-power.forming` **Pulse-forming networks and lines** — impedance, pulse shape, Blumlein and matching. [circuit; D3–D4; S3]
- `ea.pulsed-power.switch` **Fast high-power switch** — spark gap, thyratron, thyristor, solid-state and triggered vacuum switch. [component; historical+current; D3–D4; S3]

## Electrical utilization and industrial electro-technologies

- `ea.utilization.lighting` **Lighting engineering** — visual task, photometry, sources, luminaires, controls, glare, energy and emergency lighting. [application; D0–D4; S2]
- `ea.utilization.resistance-heating` **Resistance heating** — elements, furnaces, temperature control, insulation and safety. [system; D1–D4; S3]
- `ea.utilization.induction-heating` **Induction heating** — eddy/hysteresis loss, coils, frequency, matching and thermal process. [system; D1–D4; S3]
- `ea.utilization.dielectric-heating` **Dielectric and RF heating** — polarization loss, applicators, matching and exposure. [system; D2–D4; S3]
- `ea.utilization.microwave-heating` **Microwave heating** — magnetron/solid-state source, cavity modes, load and leakage. [system; D1–D4; S3]
- `ea.utilization.arc-furnace` **Electric-arc furnace** — electrodes, transformer, arc control, harmonics and flicker. [system; D2–D4; S3]
- `ea.utilization.welding` **Electrical welding systems** — arc, resistance, inverter supplies, control and safety. [system; D1–D4; S3]
- `ea.utilization.electrolysis` **Industrial electrolysis** — rectifiers, electrodes, cells, current distribution and efficiency. [system; D2–D4; S3]
- `ea.utilization.electroplating` **Electroplating and electrorefining** — bath chemistry, current density, power supplies and quality. [system; D1–D4; S3]
- `ea.utilization.cathodic-protection` **Cathodic protection** — galvanic/impressed current, potential criteria, interference and monitoring. [system; D1–D4; S3]
- `ea.utilization.electrostatic-precipitation` **Electrostatic precipitator** — corona charging, collection, high-voltage supply and rapping. [system; D2–D4; S3]
- `ea.utilization.electrostatic-process` **Electrostatic coating, separation and printing** — charging, transport, deposition, control and ignition risk. [system; D1–D4; S3]

## Battery and electrochemical storage

- `ea.storage.electrochemistry` **Battery electrochemistry** — redox, electrodes, electrolyte, potential, kinetics and transport. [concept; D1–D4; S2]
- `ea.storage.cell.metric` **Cell metrics** — voltage, capacity, energy, power, C-rate, efficiency and life. [quantity; D0–D4]
- `ea.storage.lead-acid` **Lead–acid battery** — chemistry, construction, charging, sulfation and applications. [component; D1–D4; S3]
- `ea.storage.nickel` **Nickel-based batteries** — NiCd/NiMH chemistry, charge behavior and legacy/current use. [component; legacy+current; D2–D4; S2]
- `ea.storage.lithium-ion` **Lithium-ion battery** — electrode families, SEI, cell formats, performance and aging. [component; current; D1–D4; S3]
- `ea.storage.lfp-nmc-lto` **Lithium-ion chemistry families** — LFP, NMC/NCA, LCO, LMO, LTO tradeoffs. [material; current; D1–D4; S3]
- `ea.storage.sodium-ion` **Sodium-ion battery** — materials, performance and commercialization. [component; emerging; D2–D4; S3]
- `ea.storage.solid-state` **Solid-state battery** — electrolyte types, interfaces, dendrites and manufacturing. [component; emerging+experimental; D3–D4; S3]
- `ea.storage.flow` **Flow battery** — electrolyte tanks, stacks, species and system scaling. [system; current+emerging; D2–D4; S3]
- `ea.storage.cell-balancing` **Cell balancing** — passive/active methods, capacity mismatch and control. [circuit; D1–D4; S3]
- `ea.storage.bms` **Battery management system** — monitoring, estimation, protection, balancing, communication and diagnostics. [system; D1–D4; S3]
- `ea.storage.soc-soh` **State of charge/health/power estimation** — coulomb counting, models, observers and uncertainty. [method; D2–D4]
- `ea.storage.thermal-runaway` **Thermal runaway** — initiation, propagation, gases, detection and mitigation. [failure; D1–D4; S3]
- `ea.storage.pack` **Battery pack engineering** — series/parallel, busbars, fuses/contactors, insulation, thermal and mechanics. [system; D1–D4; S3]
- `ea.storage.charging` **Battery charging control** — chemistry-specific profiles, fast charge, temperature and safety. [method; D1–D4; S3]
- `ea.storage.aging` **Battery aging** — calendar/cycle degradation, stress factors and diagnostics. [phenomenon; D2–D4]
- `ea.storage.second-life-recycling` **Battery second life and recycling** — assessment, disassembly, materials recovery and policy. [method; current+emerging; D1–D4; S3]

## Other energy-storage systems

- `ea.storage.supercapacitor` **Supercapacitor system** — EDLC/pseudocapacitance, balancing and hybrid use. [system; D1–D4; S2]
- `ea.storage.flywheel` **Flywheel storage** — rotor, bearings, motor-generator, vacuum and containment. [system; D2–D4; S3]
- `ea.storage.pumped-hydro` **Pumped-hydro storage** — reservoirs, machines, grid services and siting. [system; D1–D4; S3]
- `ea.storage.compressed-air` **Compressed-air/liquid-air storage** — thermodynamics, machinery and efficiency. [system; D2–D4; S3]
- `ea.storage.thermal` **Thermal energy storage** — sensible, latent, thermochemical and electrical integration. [system; D1–D4; S2]
- `ea.storage.hydrogen` **Hydrogen energy storage** — electrolysis, storage, fuel cells, conversion efficiency and safety. [system; current+emerging; D1–D4; S3]

## Renewable generation and conversion

- `ea.renewable.solar-cell` **Photovoltaic cell** — junction physics, IV curve, irradiance/temperature and losses. [component; D1–D4]
- `ea.renewable.pv-module-array` **PV module and array** — cells, bypass diodes, mismatch, shading, wiring and safety. [system; D0–D4; S3]
- `ea.renewable.pv-mppt` **Maximum-power-point tracking** — P&O, incremental, model-based and partial shading. [method; D1–D4]
- `ea.renewable.pv-inverter` **PV inverter system** — conversion, isolation, grid support, anti-islanding and monitoring. [system; D1–D4; S3]
- `ea.renewable.wind` **Wind-energy conversion** — aerodynamics, turbine, generator, converter and grid interface. [system; D1–D4; S3]
- `ea.renewable.hydro` **Small/micro hydro** — resource, turbine, generator, controls and distribution. [system; D1–D4; S3]
- `ea.renewable.geothermal` **Geothermal electrical generation** — resource, cycle, generator and environmental constraints. [system; D2–D4; S3]
- `ea.renewable.marine` **Wave and tidal electrical systems** — converters, generators, harsh environment and grid. [system; emerging; D2–D4; S3]
- `ea.renewable.fuel-cell` **Fuel-cell system** — electrochemistry, stacks, balance of plant, converters and control. [system; current+emerging; D1–D4; S3]
- `ea.renewable.energy-harvesting` **Energy harvesting** — photovoltaic, thermal, vibration, RF and power management. [system; current; D1–D4]

## Energy management and efficiency

- `ea.energy.audit` **Energy audit** — baselines, measurements, balance, opportunities and verification. [method; D1–D4; S2]
- `ea.energy.efficiency.motor` **Motor-system efficiency** — sizing, high-efficiency motors, drives, pumps/fans and maintenance. [method; D1–D4; S3]
- `ea.energy.building` **Building energy management** — metering, HVAC, lighting, controls and demand. [system; D1–D4; S2]
- `ea.energy.industrial` **Industrial energy management** — processes, utilities, power quality, optimization and ISO 50001 context. [system; D1–D4; S3]
- `ea.energy.forecasting` **Load and renewable forecasting** — time series, weather, uncertainty and operations. [method; D2–D4]
- `ea.energy.lifecycle` **Life-cycle energy and carbon** — embodied/operational impact, boundaries and uncertainty. [method; D1–D4]
- `ea.energy.microgrid-ems` **Microgrid energy-management system** — forecasts, constraints, dispatch and resilience. [system; current; D2–D4]

## Thailand power, installation, and energy overlay

- `ea.thailand.eit.installation` **EIT electrical-installation standards for Thailand** — wiring systems, protection, earthing, special locations and verification; use exact current edition. [standard; application; current; D1–D4; S3]
- `ea.thailand.tisi.electrical-product` **Thai Industrial Standards for electrical products** — TIS/มอก. product requirements and compulsory-status checks. [standard; application; current; D1–D3; S3]
- `ea.thailand.mea.service` **MEA service and connection requirements** — metropolitan service area, supply, metering and customer interfaces. [standard; application; current; D1–D3; S3]
- `ea.thailand.pea.service` **PEA service and connection requirements** — provincial service area, supply, metering and customer interfaces. [standard; application; current; D1–D3; S3]
- `ea.thailand.utility.territory` **MEA versus PEA service territory** — authority boundary and requirement selection. [concept; application; current; D0–D2]
- `ea.thailand.erc.energy-regulation` **ERC energy-industry regulation** — licensing, regulated activities, codes and current resolutions. [standard; application; current; D1–D3]
- `ea.thailand.grid-interconnection` **Thailand distributed-generation interconnection** — utility/ERC requirements, protection, metering and approvals. [standard; application; current; D2–D4; S3]
- `ea.thailand.solar-rooftop` **Thailand rooftop-PV context** — installation, product, utility, building, licensing and safety requirements. [application; current; D1–D4; S3]
- `ea.thailand.ev-charging` **Thailand EV-charging context** — supply, installation, equipment standards, utility and regulatory requirements. [application; current; D1–D4; S3]
- `ea.thailand.building-electrical` **Thai building electrical requirements** — DPT/building control, EIT, fire and local authority interfaces. [standard; application; current; D1–D3; S3]
- `ea.thailand.energy-efficiency` **Thailand energy-conservation regulation and programs** — designated buildings/factories, management and DEDE context. [standard; application; current; D1–D3]

Exact standard numbers, editions, amendments, compulsory status and utility documents must be verified at publication time against official Thai sources.
