# Learning and Exploration Paths

Canonical classification answers **where a topic lives**. A learning path answers **what to learn next for a goal**. Paths reference the same nodes and never duplicate their content.

## 1. Depth layers used by every path

1. **Orientation** — names, purpose, visual recognition, safety boundary.
2. **Intuition** — causal story, observable behavior, misconceptions.
3. **Working knowledge** — calculations, measurements, selection, connection.
4. **Engineering** — models, design tradeoffs, simulation, verification, diagnosis.
5. **Advanced/research** — derivation, nonideal behavior, literature, unresolved questions.

Visitors may change depth without losing their position in the subject graph.

## 2. Foundation path: What is electricity?

```text
matter → charge → electric force → electric field → potential/voltage
→ materials and carriers → current → resistance → energy and power
→ closed circuits → magnetism → induction → AC and electromagnetic waves
```

Case studies: static charge, battery–lamp circuit, electromagnet, generator, transformer, radio link.

## 3. Electronics builder path

```text
safety and measurement → voltage/current/resistance → schematic literacy
→ passive components → diodes → BJT and MOSFET → biasing and switching
→ op-amps → regulators → digital logic → microcontrollers
→ sensors/actuators → PCB design → debugging → EMC/reliability
```

Milestones: LED current limiter, transistor switch, sensor amplifier, regulated supply, microcontroller board.

## 4. Semiconductor device path

```text
quantum states → crystal structure → energy bands → carriers/Fermi level
→ doping → drift/diffusion → PN junction → MOS capacitor
→ MOSFET channel formation → IV/CV models → scaling and short-channel effects
→ power devices/wide-bandgap devices → fabrication → characterization/reliability
```

MOSFET branches: digital CMOS, analog transconductance, RF models, power switching, gate drive, thermal behavior.

## 5. Analog and mixed-signal path

```text
circuit analysis → semiconductor devices → biasing → small-signal models
→ amplifier stages → differential pairs/current mirrors → feedback/stability
→ op-amps/filtering/noise → oscillators/PLLs → sampling/quantization
→ ADC/DAC → sensor interfaces → mixed-signal layout and verification
```

## 6. Digital hardware and computing path

```text
Boolean algebra → CMOS logic → combinational logic → sequential logic
→ timing/metastability → state machines → computer organization
→ HDL → FPGA implementation → static timing/CDC → processors/memory/SoCs
→ verification, security, power, signal integrity
```

## 7. Embedded systems path

```text
digital logic + programming → microcontroller architecture → GPIO/timers
→ serial interfaces → interrupts/DMA → ADC/PWM → drivers
→ RTOS/concurrency → networking → low power → boot/update/security
→ hardware/software co-design → production test and diagnostics
```

## 8. Signals and communications path

```text
complex numbers/calculus → signals and LTI systems → Fourier/Laplace/z
→ sampling/quantization → probability/random processes → filtering
→ modulation/detection → information/coding → RF channels/antennas
→ synchronization/equalization/MIMO → protocols/networks → link/system design
```

## 9. RF and microwave path

```text
electromagnetic waves → transmission lines → Smith chart/S-parameters
→ matching/resonators → RF devices/noise/nonlinearity → amplifiers/mixers/LOs
→ antennas/propagation → RF layout/measurement → transceivers
→ arrays/radar/millimeter-wave systems
```

## 10. Control, automation, and robotics path

```text
differential equations → dynamic models → feedback → stability/PID
→ state space/observers → digital control → sensors/actuators/drives
→ PLC/DCS/SCADA → functional safety → motion control
→ robotics kinematics/dynamics → planning/localization/autonomy
```

## 11. Power electronics and drives path

```text
power/energy + magnetics → diodes/MOSFETs/IGBTs → switching behavior
→ gate drive/protection → buck/boost/isolated converters → control loops
→ rectifiers/inverters → modulation → thermal/EMI/layout
→ machines → vector control → chargers/renewables/traction/grid converters
```

## 12. Power systems path

```text
three-phase circuits → transformers/machines → per-unit and symmetrical components
→ generation/transmission/distribution → power flow → fault analysis
→ protection/coordination → stability/control → substations/SCADA
→ power quality → markets/planning → DER/microgrids/HVDC/smart grids
```

Thailand overlay: EIT installation practice, TISI product standards, MEA/PEA service rules, ERC grid/energy regulation, DPT building requirements, and applicable occupational/fire law.

## 13. Instrumentation and test path

```text
SI/uncertainty → loading/bandwidth/noise → meters/oscilloscopes/probes
→ sensor physics → bridges/amplifiers/filters → ADC/DAQ
→ calibration/traceability → automated test → RF/power/safety measurements
→ uncertainty budgets, conformity, diagnostics, production test
```

Thailand overlay: traceability to the National Institute of Metrology (Thailand) and relevant Thai conformity-assessment requirements.

## 14. IC design and semiconductor manufacturing path

```text
device physics → CMOS circuits → HDL/analog design → simulation/verification
→ synthesis/layout/extraction → timing/power/noise signoff
→ lithography/deposition/etch/implant/CMP → process integration/yield
→ DFT/wafer test → packaging/chiplets → qualification/failure analysis
```

## 15. PCB product-development path

```text
requirements → architecture → component selection → schematic/library
→ stackup/constraints → placement/routing → SI/PI/EMC/thermal analysis
→ DFM/DFT → prototype → bring-up/debug → compliance → production
→ reliability/supply chain/lifecycle/repair
```

## 16. Safety and professional-practice path

```text
hazard recognition → shock/thermal/arc/fire/stored energy
→ protective measures → risk assessment → installation/product standards
→ verification/test → lockout and safe work → functional safety
→ regulation, ethics, documentation, incident learning
```

Localization is mandatory: the governing code depends on jurisdiction, voltage, equipment class, location, utility, and intended use.

## 17. Exploration modes for the website

### Browse by concept

Start from charge, energy, feedback, information, noise, time, frequency, field, stability, or uncertainty and follow `explains` and `used-in` edges.

### Browse by component

For each part, present:

```text
identity → construction/materials → physical mechanism → electrical model
→ operating modes → nonideal behavior → selection/datasheet → circuits
→ applications → measurement → failures/safety → related alternatives
```

### Browse by system

For each system, present:

```text
purpose → requirements → functional blocks → energy/signal/data flow
→ components and interfaces → control → failure/safety/security
→ verification → standards → lifecycle → application variants
```

### Browse by application

Start with a real capability—charge an EV, control a motor, measure an ECG, transmit data, protect a feeder—and traverse backward to systems, circuits, devices, materials, and physical laws.

### Browse by failure

Start from a symptom or mechanism and traverse `fails-by`, `measured-by`, and `controlled-by` edges. This path is educational and does not replace qualified field diagnosis.

## 18. Path quality rules

- State prerequisites but allow just-in-time prerequisite capsules.
- Offer at least one physical example and one counterexample per major concept.
- Separate conventional models from microscopic explanations and identify scale.
- Do not require advanced mathematics merely to access intuition.
- Never hide safety-critical conditions behind an advanced-content toggle.
- Show why a learner might care before demanding formalism.

