# Power Electronics, Electric Machines, Actuators, and Drives

Section defaults: `core`; `established+current`; `mapped`; safety `S2` for energized power hardware and `S3` for hazardous-energy/high-voltage work.

## Power semiconductor application

- `ea.power.device.selection` **Power-device selection** — voltage/current/frequency/temperature/SOA, cost and reliability. [method; D1–D4; S2]
- `ea.power.device.conduction-loss` **Conduction loss** — static curves, RMS/average current and temperature. [method; D1–D4; S2]
- `ea.power.device.switching-loss` **Switching loss** — overlap, capacitance/charge, recovery and measured energy. [method; D1–D4; S2]
- `ea.power.device.gate-drive` **Gate-drive fundamentals** — voltage/current, impedance, isolation, dead time and protection. [circuit; D1–D4; S2]
- `ea.power.device.miller` **Miller effect in power switching** — plateau, dv/dt turn-on and clamp strategies. [phenomenon; D2–D4; S2]
- `ea.power.device.reverse-recovery` **Diode reverse recovery** — charge, current, softness, loss and EMI. [phenomenon; D2–D4; S2]
- `ea.power.device.avalanche-short-circuit` **Avalanche and short-circuit capability** — energy, time, repeatability and limits. [concept; D2–D4; S3]
- `ea.power.device.parallel-series` **Series/parallel power devices** — static/dynamic sharing and balancing. [method; D2–D4; S3]
- `ea.power.device.module` **Power module** — die interconnect, substrate, baseplate, parasitics and thermal stack. [component; D1–D4; S2]

## Switching cells and modulation

- `ea.power.switching-cell` **Canonical switching cell** — pole, commutation loop and state constraints. [concept; D1–D4; S2]
- `ea.power.half-bridge` **Half bridge** — high/low-side devices, dead time, bootstrap and shoot-through. [circuit; D1–D4; S2]
- `ea.power.full-bridge` **Full bridge/H bridge** — bipolar output, modulation, regeneration and common mode. [circuit; D1–D4; S2]
- `ea.power.soft-switching` **Soft switching** — ZVS/ZCS, resonant transitions and circulating energy. [method; D2–D4; S2]
- `ea.power.pwm` **Pulse-width modulation** — duty, carrier, unipolar/bipolar and sampled effects. [method; D1–D4]
- `ea.power.space-vector` **Space-vector modulation** — switching states, dwell times and common mode. [method; D2–D4; S2]
- `ea.power.hysteretic-control` **Hysteretic and boundary control** — variable frequency and fast dynamics. [method; D2–D4]
- `ea.power.dead-time` **Dead time** — shoot-through prevention, distortion and compensation. [concept; D1–D4; S2]
- `ea.power.commutation` **Power-device commutation** — natural/forced, hard/soft and current paths. [phenomenon; D1–D4; S2]

## AC–DC conversion

- `ea.converter.rectifier.diode` **Diode rectifier** — single/three-phase, ripple, conduction and harmonics. [circuit; D0–D4; S3]
- `ea.converter.rectifier.controlled` **Controlled thyristor rectifier** — firing angle, overlap, reactive power and inversion. [circuit; D1–D4; S3]
- `ea.converter.pfc.passive` **Passive power-factor correction** — line reactors/filters and limits. [circuit; D1–D3; S3]
- `ea.converter.pfc.boost` **Boost PFC** — current shaping, CCM/CRM/DCM, control and hold-up. [circuit; D1–D4; S3]
- `ea.converter.pfc.totem-pole` **Totem-pole PFC** — fast/line-frequency legs, dead time and GaN/SiC use. [circuit; current; D2–D4; S3]
- `ea.converter.active-front-end` **Active front end** — bidirectional PWM rectifier, DC-link and grid control. [system; D2–D4; S3]

## Non-isolated DC–DC conversion

- `ea.converter.dc.buck` **Buck converter** — states, CCM/DCM, ripple, control and nonideal loss. [circuit; D0–D4; S2]
- `ea.converter.dc.boost` **Boost converter** — right-half-plane zero, current paths and limits. [circuit; D1–D4; S2]
- `ea.converter.dc.buck-boost` **Inverting buck–boost** — conversion, polarity and stresses. [circuit; D1–D4; S2]
- `ea.converter.dc.cuk-sepic-zeta` **Ćuk, SEPIC and Zeta converters** — energy-transfer capacitor/inductors and tradeoffs. [circuit; D2–D4; S2]
- `ea.converter.dc.multiphase` **Multiphase converter** — interleaving, current sharing and transient response. [circuit; D2–D4; S2]
- `ea.converter.dc.switched-capacitor` **Switched-capacitor converter** — charge redistribution, ratios, resistance model and hybrid forms. [circuit; D1–D4]
- `ea.converter.dc.bidirectional` **Bidirectional DC–DC converter** — power flow, synchronous operation and control modes. [circuit; D2–D4; S2]

## Isolated and resonant conversion

- `ea.converter.isolated.flyback` **Flyback converter** — coupled inductor, energy transfer, reset, leakage and clamp. [circuit; D1–D4; S2]
- `ea.converter.isolated.forward` **Forward converter** — transformer transfer, reset and output filter. [circuit; D2–D4; S2]
- `ea.converter.isolated.push-pull` **Push–pull converter** — flux symmetry, center tap and device stress. [circuit; D2–D4; S2]
- `ea.converter.isolated.half-full-bridge` **Isolated half/full bridge** — transformer drive, rectification and control. [circuit; D2–D4; S2]
- `ea.converter.isolated.phase-shift-full-bridge` **Phase-shift full bridge** — ZVS range, circulating current and rectifier behavior. [circuit; D2–D4; S3]
- `ea.converter.resonant.llc` **LLC resonant converter** — resonant tank, gain curves, modes and control. [circuit; D2–D4; S2]
- `ea.converter.resonant.series-parallel` **Series/parallel resonant converters** — tank behavior, load range and soft switching. [circuit; D2–D4; S2]
- `ea.converter.dual-active-bridge` **Dual-active bridge** — phase-shift power control, leakage inductance and bidirectionality. [circuit; current; D2–D4; S3]
- `ea.converter.planar-magnetics` **Planar magnetics** — PCB/winding structures, loss, capacitance and thermal design. [component; current; D2–D4; S2]

## Inverters and high-power converter structures

- `ea.converter.inverter.single-phase` **Single-phase inverter** — modulation, filters, island/grid/load modes. [circuit; D1–D4; S3]
- `ea.converter.inverter.three-phase` **Three-phase voltage-source inverter** — bridge states, modulation, DC link and harmonics. [circuit; D1–D4; S3]
- `ea.converter.current-source` **Current-source converter** — DC-link inductance, commutation and applications. [circuit; D2–D4; S3]
- `ea.converter.multilevel` **Multilevel converter** — NPC, flying-capacitor, cascaded H-bridge and modular forms. [architecture; D2–D4; S3]
- `ea.converter.mmc` **Modular multilevel converter** — submodules, circulating currents, capacitor balance and HVDC. [system; current; D3–D4; S3]
- `ea.converter.matrix` **Matrix converter** — direct AC–AC switching, commutation and modulation. [circuit; D3–D4; S3]
- `ea.converter.cycloconverter` **Cycloconverter** — low-frequency AC–AC conversion and large drives. [circuit; legacy+current; D2–D4; S3]
- `ea.converter.solid-state-transformer` **Solid-state transformer** — medium-frequency isolation and multiport conversion. [system; emerging; D3–D4; S3]

## Converter control and magnetics

- `ea.power.control.voltage-current-mode` **Voltage- and current-mode control** — plant, slope compensation and dynamics. [method; D1–D4]
- `ea.power.control.average-peak` **Average/peak/hysteretic current control** — sensing, bandwidth and stability. [method; D2–D4]
- `ea.power.control.digital` **Digital power control** — sampling, delay, quantization, DPWM and firmware/FPGA realization. [method; D2–D4]
- `ea.power.model.averaged` **State-space averaging and small-signal converter models** — duty perturbation and operating mode. [model; D2–D4]
- `ea.power.control.feedforward` **Line/load feedforward** — disturbance rejection and normalization. [method; D2–D4]
- `ea.power.magnetics.design` **Power-magnetics design** — core selection, gap, turns, flux, copper/core loss and temperature. [method; D1–D4; S2]
- `ea.power.magnetics.skin-proximity` **Skin and proximity effects in windings** — frequency loss, Litz and foil design. [phenomenon; D2–D4]
- `ea.power.magnetics.fringing` **Gap fringing and winding loss** — local field concentration and mitigation. [phenomenon; D3–D4]

## Converter layout, EMI, protection, and thermal engineering

- `ea.power.layout.commutation-loop` **Power commutation-loop layout** — inductance, overshoot, ringing and field containment. [method; D1–D4; S2]
- `ea.power.layout.gate-loop` **Gate-loop layout** — common-source inductance, oscillation and false turn-on. [method; D2–D4; S2]
- `ea.power.snubber-clamp` **Snubber and clamp networks** — RC/RCD/active clamps, energy and damping. [circuit; D1–D4; S2]
- `ea.power.current-sensing` **Power current sensing** — shunt, CT, Hall, fluxgate, Rogowski and desaturation. [method; D1–D4; S2]
- `ea.power.protection` **Converter protection** — overcurrent/voltage/temp, short circuit, reverse polarity and safe shutdown. [architecture; D1–D4; S3]
- `ea.power.precharge-inrush` **Precharge and inrush management** — capacitive loads, sequencing and contactors. [circuit; D1–D4; S3]
- `ea.power.thermal.junction-case` **Junction-to-ambient thermal path** — resistance/impedance, transient curves and interface. [model; D1–D4; S2]
- `ea.power.thermal.heatsink` **Heat sink and cooling design** — natural/forced air, liquid, heat pipes and contact. [method; D1–D4; S2]
- `ea.power.emi.input-filter` **Converter input/output EMI filters** — damping, control interaction, common/differential modes. [circuit; D2–D4; S3]

## Power supply and charger systems

- `ea.power.supply.linear` **Linear power supply** — transformer/rectifier/filter/regulator and thermal behavior. [system; D0–D3; S2]
- `ea.power.supply.smps` **Switched-mode power supply** — architecture, regulation, isolation, EMI and safety. [system; D0–D4; S3]
- `ea.power.supply.atx-server` **Computing/server power supply** — PFC, isolated conversion, multiphase point-of-load and redundancy. [system; D1–D4; S3]
- `ea.power.supply.usb-pd` **USB Power Delivery source/sink** — negotiation, profiles, cable identity, converters and protection. [system; current; D1–D4; S2]
- `ea.power.charger.battery` **Battery charger** — chemistry-dependent profiles, sensing, termination and safety. [system; D1–D4; S2]
- `ea.power.ups` **Uninterruptible power supply** — standby/line-interactive/online, batteries, bypass and power quality. [system; D1–D4; S3]

## Magnetic circuits and transformer engineering

- `ea.machine.magnetic-circuit` **Magnetic-circuit modeling** — MMF, reluctance, saturation, leakage and fringing. [model; D1–D4]
- `ea.machine.transformer.single-phase` **Single-phase transformer** — construction, equivalent circuit, tests, regulation and losses. [component; D0–D4; S3]
- `ea.machine.transformer.three-phase` **Three-phase transformer** — vector groups, harmonics, zero sequence and parallel operation. [component; D1–D4; S3]
- `ea.machine.transformer.autotransformer` **Autotransformer** — shared winding, economy, fault/current and isolation limitations. [component; D1–D4; S3]
- `ea.machine.transformer.instrument` **Instrument transformer** — CT/VT/CVT accuracy, saturation, ferroresonance and safety. [component; D2–D4; S3]
- `ea.machine.transformer.special` **Special transformers** — isolation, welding, furnace, rectifier, phase-shifting and traction. [component; D2–D4; S3]
- `ea.machine.transformer.insulation-cooling` **Transformer insulation and cooling** — oil/dry types, thermal classes, aging and monitoring. [architecture; D2–D4; S3]
- `ea.machine.transformer.inrush` **Transformer inrush and ferroresonance** — residual flux, switching and protection impact. [phenomenon; D2–D4; S3]

## Rotating electrical machines

- `ea.machine.rotating-field` **Rotating magnetic field** — polyphase MMF, synchronous speed and torque production. [concept; D1–D4]
- `ea.machine.dc` **DC machine** — commutation, torque/EMF, types, characteristics and maintenance. [component; historical+current; D1–D4; S3]
- `ea.machine.induction` **Induction machine** — slip, rotor currents, torque-speed, equivalent circuit and losses. [component; D0–D4; S3]
- `ea.machine.synchronous` **Synchronous machine** — excitation, torque angle, reactance and generator/motor operation. [component; D1–D4; S3]
- `ea.machine.pmsm-bldc` **PMSM and BLDC machine** — magnets, back-EMF, commutation and field weakening. [component; current; D1–D4; S3]
- `ea.machine.reluctance` **Reluctance machines** — synchronous/switched reluctance, saliency and torque ripple. [component; current+emerging; D2–D4; S3]
- `ea.machine.stepper` **Stepper motor** — variable-reluctance/permanent-magnet/hybrid, microstepping and resonance. [component; D0–D4; S2]
- `ea.machine.universal` **Universal motor** — series commutation, AC/DC operation and appliance use. [component; D1–D3; S2]
- `ea.machine.single-phase-induction` **Single-phase induction motor** — auxiliary winding, capacitor/shaded-pole starting. [component; D1–D3; S3]
- `ea.machine.linear` **Linear electrical machine** — induction/synchronous/voice-coil forms and end effects. [component; D2–D4; S2]
- `ea.machine.axial-flux` **Axial-flux machine** — geometry, winding/cooling/manufacturing tradeoffs. [component; current+emerging; D2–D4; S3]
- `ea.machine.design.winding` **Machine winding design** — slots, poles, distribution, harmonics and insulation. [method; D2–D4; S3]
- `ea.machine.loss-thermal` **Machine losses and thermal design** — copper/core/mechanical/stray losses, cooling and duty. [method; D1–D4; S3]
- `ea.machine.testing` **Machine testing** — no-load/locked-rotor/load, parameter estimation and standards. [method; D2–D4; S3]
- `ea.machine.failure` **Machine failure mechanisms** — bearings, insulation, rotor bars, magnets, eccentricity and contamination. [failure; D1–D4; S3]

## Motor drives and control

- `ea.drive.system` **Electric-drive system** — source, converter, machine, load, sensor, control and protection. [system; D0–D4; S3]
- `ea.drive.dc` **DC motor drive** — armature/field control, choppers, braking and regeneration. [system; D1–D4; S3]
- `ea.drive.vhz` **Scalar V/f induction drive** — flux control, slip compensation and low-speed limits. [method; D1–D4; S3]
- `ea.drive.foc` **Field-oriented control** — Clarke/Park transforms, current loops, decoupling and flux/torque. [method; D2–D4; S3]
- `ea.drive.dtc` **Direct torque control** — flux/torque estimation, switching and ripple. [method; D2–D4; S3]
- `ea.drive.commutation.bldc` **Six-step BLDC commutation** — Hall/back-EMF position, timing and torque ripple. [method; D1–D4; S3]
- `ea.drive.sensorless` **Sensorless motor control** — back-EMF, observers, injection and low-speed challenges. [method; D2–D4; S3]
- `ea.drive.encoder-resolver` **Motor position feedback** — encoder, resolver, Hall and interface diagnostics. [component; D1–D4; S2]
- `ea.drive.field-weakening` **Field weakening** — voltage limit, negative d-axis current and constant-power region. [method; D2–D4; S3]
- `ea.drive.regenerative-braking` **Regenerative and dynamic braking** — energy paths, DC bus and mechanical safety. [method; D1–D4; S3]
- `ea.drive.motion-profile` **Motion profiles and servo tuning** — position/velocity/current loops, resonance and feedforward. [method; D1–D4; S3]
- `ea.drive.safety` **Drive functional safety** — STO, SS1/SS2, SLS and safe motion functions. [standard; D2–D4; S3]
- `ea.drive.harmonic-bearing` **Drive-induced machine stress** — harmonics, dv/dt, bearing currents and insulation. [phenomenon; D2–D4; S3]

## Actuators

- `ea.actuator.solenoid` **Solenoid** — force/stroke, magnetic circuit, coil heating and drive. [component; D0–D3; S2]
- `ea.actuator.voice-coil` **Voice-coil actuator** — Lorentz force, stroke, control and thermal behavior. [component; D1–D4]
- `ea.actuator.piezo` **Piezoelectric actuator** — stack/bender, hysteresis, high-voltage drive and precision. [component; D1–D4; S2]
- `ea.actuator.electrostatic` **Electrostatic actuator** — force, pull-in and MEMS implementations. [component; D2–D4; S2]
- `ea.actuator.magnetostrictive` **Magnetostrictive actuator** — field-strain coupling and drive. [component; D2–D4]
- `ea.actuator.thermal-sma` **Thermal and shape-memory actuator** — heating, phase transition, slow dynamics and efficiency. [component; D1–D3; S1]

