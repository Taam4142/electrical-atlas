# Analog, Mixed-Signal, and Data Conversion

Section defaults: `core`; `established+current`; `mapped`; safety `S0–S1` unless high voltage/power is involved.

## Analog design foundations

- `ea.analog.operating-point` **Operating point and bias** — DC conditions that establish device region and signal headroom. [concept; D1–D4]
- `ea.analog.load-line` **Load-line analysis** — device/network intersection and large-signal swing. [method; D1–D3]
- `ea.analog.linearization` **Small-signal linearization** — incremental parameters around a nonlinear operating point. [method; D2–D4]
- `ea.analog.transconductance` **Transconductance** — voltage-to-current gain, efficiency and device dependence. [quantity; D2–D4]
- `ea.analog.output-resistance` **Output resistance** — finite source behavior and gain implications. [quantity; D2–D4]
- `ea.analog.headroom` **Voltage headroom and compliance** — signal range constrained by devices/supplies. [concept; D1–D4]
- `ea.analog.dynamic-range` **Dynamic range** — noise floor, linearity and clipping limits. [quantity; D1–D4]
- `ea.analog.feedback` **Negative and positive feedback** — gain accuracy, bandwidth, impedance, stability and hysteresis. [concept; D1–D4]
- `ea.analog.loop-gain` **Loop gain and return ratio** — feedback strength and measurement. [quantity; D2–D4]
- `ea.analog.stability` **Analog feedback stability** — poles/zeros, phase/gain margin, Nyquist and transients. [concept; D2–D4]
- `ea.analog.compensation` **Frequency compensation** — dominant-pole, Miller, lead/lag, feedforward and nested loops. [method; D2–D4]
- `ea.analog.noise` **Electronic noise** — source mechanisms, density, bandwidth, correlation and noise figure. [phenomenon; D1–D4]
- `ea.analog.distortion` **Nonlinear distortion** — harmonics, intermodulation, compression, memory effects. [phenomenon; D1–D4]
- `ea.analog.offset-drift` **Offset and drift** — mismatch, temperature, aging and correction. [phenomenon; D1–D4]
- `ea.analog.common-mode` **Common-mode and differential-mode signals** — rejection, conversion and range. [concept; D1–D4]

## Single-transistor stages

- `ea.analog.stage.common-emitter` **Common-emitter amplifier** — bias, gain, impedances, degeneration and swing. [circuit; D1–D4]
- `ea.analog.stage.emitter-follower` **Emitter follower** — buffering, level shift and output drive. [circuit; D1–D4]
- `ea.analog.stage.common-base` **Common-base amplifier** — low input impedance and high-frequency use. [circuit; D2–D4]
- `ea.analog.stage.common-source` **Common-source amplifier** — transconductance gain, loads and degeneration. [circuit; D1–D4]
- `ea.analog.stage.source-follower` **Source follower** — buffer behavior, body effect and headroom. [circuit; D1–D4]
- `ea.analog.stage.common-gate` **Common-gate amplifier** — current input, cascode and RF use. [circuit; D2–D4]
- `ea.analog.stage.cascode` **Cascode** — gain, bandwidth, isolation, headroom and variants. [circuit; D2–D4]
- `ea.analog.stage.darlington-sziklai` **Darlington and Sziklai pairs** — composite gain and saturation behavior. [circuit; D1–D3]

## Bias and active-load building blocks

- `ea.analog.current-source` **Current source/sink circuits** — compliance, output resistance, startup and accuracy. [circuit; D1–D4]
- `ea.analog.current-mirror` **Current mirror** — simple, Wilson, cascode, regulated and low-voltage mirrors. [circuit; D1–D4]
- `ea.analog.voltage-reference` **Voltage references** — Zener, bandgap, buried-Zener and CMOS references. [circuit; D2–D4]
- `ea.analog.bias-generator` **Bias generation and distribution** — startup, replica bias, PTAT/CTAT and sequencing. [circuit; D2–D4]
- `ea.analog.active-load` **Active load** — gain enhancement, differential conversion and headroom. [circuit; D2–D4]
- `ea.analog.level-shifter` **Analog level shifting** — DC translation, stacked devices and isolation boundaries. [circuit; D1–D4]

## Differential and operational amplifiers

- `ea.analog.differential-pair` **Differential pair** — current steering, transconductance, common-mode range and mismatch. [circuit; D1–D4]
- `ea.analog.long-tailed-pair` **BJT long-tailed pair** — emitter degeneration, tail source and imbalance. [circuit; D1–D4]
- `ea.analog.opamp` **Operational amplifier** — ideal model, internal architecture, real specifications and use. [component; D0–D4]
- `ea.analog.opamp.inverting` **Inverting op-amp configurations** — gain, summing, impedance and noise gain. [circuit; D1–D4]
- `ea.analog.opamp.noninverting` **Non-inverting op-amp configurations** — gain, buffer, bias-current paths. [circuit; D1–D4]
- `ea.analog.opamp.integrator-differentiator` **Active integrators and differentiators** — ideal/practical response and stability. [circuit; D2–D4]
- `ea.analog.opamp.slew-rate` **Slew rate and full-power bandwidth** — large-signal dynamic limits. [quantity; D1–D4]
- `ea.analog.opamp.input-output-range` **Input/output range** — common-mode, rail-to-rail limits, crossover behavior. [concept; D1–D4]
- `ea.analog.opamp.stability-load` **Op-amp stability with real loads** — noise gain, capacitive load and isolation. [method; D2–D4]
- `ea.analog.instrumentation-amplifier` **Instrumentation amplifier** — high CMRR, gain setting, input protection and errors. [component; D1–D4]
- `ea.analog.difference-amplifier` **Difference amplifier** — resistor matching and common-mode limits. [circuit; D1–D4]
- `ea.analog.transimpedance-amplifier` **Transimpedance amplifier** — photodiode/current input, stability and noise. [circuit; D2–D4]
- `ea.analog.isolation-amplifier` **Isolation amplifier** — transformer/capacitive/optical isolation and errors. [component; D2–D4; S2]
- `ea.analog.chopper-auto-zero` **Chopper and auto-zero amplifier** — offset correction, ripple and aliasing. [component; D2–D4]

## Comparators, hysteresis, and switching interfaces

- `ea.analog.comparator` **Comparator** — open-collector/push-pull output, propagation, overdrive and kickback. [component; D1–D4]
- `ea.analog.schmitt-trigger` **Schmitt trigger** — positive feedback, thresholds, noise immunity and oscillation. [circuit; D1–D4]
- `ea.analog.zero-crossing` **Zero-crossing detector** — timing uncertainty, hysteresis and mains isolation. [circuit; D1–D3; S2]
- `ea.analog.window-comparator` **Window comparator** — upper/lower thresholds and fault monitoring. [circuit; D1–D3]
- `ea.analog.analog-switch` **Analog switch/multiplexer** — on-resistance, charge injection, leakage, bandwidth and protection. [component; D1–D4]

## Filters and frequency-selective circuits

- `ea.analog.filter.passive-rc-rlc` **Passive RC/RL/RLC filters** — poles, zeros, loading and Q. [circuit; D1–D4]
- `ea.analog.filter.active` **Active filters** — Sallen–Key, multiple-feedback, state-variable and biquad. [circuit; D1–D4]
- `ea.analog.filter.prototype` **Filter approximation choice** — Butterworth, Bessel, Chebyshev, elliptic, Gaussian. [method; D2–D4]
- `ea.analog.filter.gyrator` **Gyrator and simulated inductance** — active impedance transformation. [circuit; D3–D4]
- `ea.analog.filter.switched-capacitor` **Switched-capacitor filter** — charge transfer, clock relation and aliasing. [circuit; D2–D4]
- `ea.analog.filter.continuous-time-ic` **Integrated continuous-time filters** — gm-C, active-RC and tuning. [circuit; D3–D4]

## Oscillators and waveform generation

- `ea.analog.oscillator.condition` **Oscillation condition** — loop gain/phase, startup and amplitude stabilization. [concept; D2–D4]
- `ea.analog.oscillator.rc` **RC oscillator** — Wien bridge, phase shift and relaxation forms. [circuit; D1–D4]
- `ea.analog.oscillator.lc` **LC oscillator** — Colpitts, Hartley, cross-coupled and negative-resistance forms. [circuit; D2–D4]
- `ea.analog.oscillator.crystal` **Crystal oscillator** — Pierce and other topologies, load/startup/drive. [circuit; D1–D4]
- `ea.analog.oscillator.vco` **Voltage-controlled oscillator** — tuning gain, phase noise and pulling. [circuit; D2–D4]
- `ea.analog.multivibrator` **Multivibrators and timer circuits** — astable/monostable/bistable, 555 timer. [circuit; D1–D3]
- `ea.analog.waveform.generator` **Waveform generation** — sine, triangle, ramp, pulse and arbitrary synthesis. [system; D1–D4]
- `ea.analog.phase-noise` **Oscillator phase noise** — spectral models, jitter relationship and measurement. [phenomenon; D3–D4]

## Modulation, mixing, and detection building blocks

- `ea.analog.mixer` **Mixer/frequency converter** — multiplication, switching, conversion gain/loss and spurs. [circuit; D2–D4]
- `ea.analog.modulator.am` **Analog amplitude modulator** — multiplier, balanced and switching implementations. [circuit; D2–D3]
- `ea.analog.modulator.fm-pm` **FM/PM generation** — reactance/VCO/direct and indirect methods. [circuit; D2–D4]
- `ea.analog.demodulator.envelope` **Envelope detector** — diode/active forms, ripple and distortion. [circuit; D1–D3]
- `ea.analog.demodulator.product` **Product/synchronous detector** — carrier recovery and coherent detection. [circuit; D2–D4]
- `ea.analog.detector.peak-rms` **Peak and true-RMS detectors** — crest, bandwidth and thermal/computational methods. [circuit; D1–D4]

## Audio and precision analog

- `ea.analog.audio.preamp` **Audio preamplifier** — source interfaces, gain, noise, coupling and equalization. [circuit; D1–D4]
- `ea.analog.audio.power-amplifier` **Audio power amplifier** — classes A/B/AB/D/G/H, crossover, protection and load. [circuit; D1–D4; S1]
- `ea.analog.audio.equalization` **Audio equalization and tone control** — passive/active/digital curves and standards. [circuit; D1–D3]
- `ea.analog.precision.front-end` **Precision analog front end** — low offset/noise, guarding, leakage, shielding and calibration. [architecture; D2–D4]
- `ea.analog.bridge-interface` **Bridge sensor interface** — excitation, instrumentation, ratiometric conversion and linearization. [circuit; D1–D4]
- `ea.analog.charge-amplifier` **Charge amplifier** — piezoelectric sensors, leakage and reset. [circuit; D2–D4]
- `ea.analog.electrometer` **Electrometer front end** — femtoampere currents, guarding, triboelectric and contamination effects. [circuit; D3–D4]

## Power management analog

- `ea.analog.regulator.linear` **Linear voltage regulator** — pass element, loop, dropout, stability, PSRR and thermal limits. [circuit; D1–D4; S1]
- `ea.analog.regulator.ldo` **Low-dropout regulator** — pass-device types, ESR stability and transient response. [component; D1–D4]
- `ea.analog.current-regulator` **Linear current regulator** — LEDs, charging, current limiting and compliance. [circuit; D1–D3; S1]
- `ea.analog.reference.bandgap` **Bandgap reference** — PTAT/CTAT combination, curvature and trimming. [circuit; D2–D4]
- `ea.analog.supervisor` **Voltage supervisor and reset IC** — thresholds, delay, sequencing and watchdog. [component; D1–D3]
- `ea.analog.hot-swap` **Hot-swap and e-fuse control** — inrush, SOA, current limit and fault handling. [circuit; D2–D4; S2]
- `ea.analog.battery-gauge` **Battery monitor and fuel gauge analog front end** — coulomb counting, voltage/temperature, estimation interface. [component; D2–D4; S2]

## Sampling and data-conversion foundations

- `ea.mixed-signal.sampling` **Sampling** — aperture, hold behavior, Nyquist conditions and reconstruction. [concept; D1–D4]
- `ea.mixed-signal.aliasing` **Aliasing** — spectral folding and anti-alias filtering. [phenomenon; D1–D4]
- `ea.mixed-signal.quantization` **Quantization** — step size, quantization error/noise and overload. [concept; D1–D4]
- `ea.mixed-signal.sample-hold` **Sample-and-hold circuit** — acquisition, droop, pedestal, aperture jitter. [circuit; D2–D4]
- `ea.mixed-signal.anti-alias-filter` **Anti-alias and reconstruction filters** — transition bands and converter interaction. [circuit; D1–D4]
- `ea.mixed-signal.reference-drive` **Converter reference drive** — settling, dynamic load, noise and decoupling. [circuit; D2–D4]
- `ea.mixed-signal.clock-jitter` **Sampling-clock jitter** — SNR limit, phase noise and clock distribution. [phenomenon; D2–D4]

## Analog-to-digital converters

- `ea.converter.adc` **ADC fundamentals** — transfer function, coding, ENOB, SNR/SINAD, THD, INL/DNL. [component; D1–D4]
- `ea.converter.adc.flash` **Flash ADC** — comparator array, speed, power and bubble correction. [architecture; D2–D4]
- `ea.converter.adc.sar` **Successive-approximation ADC** — DAC/comparator loop, acquisition and kickback. [architecture; D1–D4]
- `ea.converter.adc.pipeline` **Pipeline ADC** — residue stages, latency, digital correction and calibration. [architecture; D2–D4]
- `ea.converter.adc.sigma-delta` **Delta–sigma ADC** — oversampling, noise shaping, modulator order and decimation. [architecture; D2–D4]
- `ea.converter.adc.integrating` **Integrating ADC** — dual-slope/multislope, rejection and precision. [architecture; D1–D4]
- `ea.converter.adc.time-interleaved` **Time-interleaved ADC** — channel mismatch, spurs and calibration. [architecture; D3–D4]
- `ea.converter.adc.time-digital` **Time-to-digital conversion** — delay lines, interpolators, resolution and nonlinearity. [architecture; D2–D4]

## Digital-to-analog converters

- `ea.converter.dac` **DAC fundamentals** — transfer, settling, glitch, linearity, output type and reference. [component; D1–D4]
- `ea.converter.dac.resistor-string` **Resistor-string DAC** — monotonicity, loading and decoder complexity. [architecture; D1–D3]
- `ea.converter.dac.r2r` **R–2R ladder DAC** — switching, matching, output impedance and glitches. [architecture; D1–D4]
- `ea.converter.dac.current-steering` **Current-steering DAC** — segmentation, dynamic mismatch and high-speed output. [architecture; D2–D4]
- `ea.converter.dac.capacitive` **Capacitive DAC** — charge redistribution and SAR integration. [architecture; D2–D4]
- `ea.converter.dac.sigma-delta` **Delta–sigma DAC** — interpolation, noise shaping and reconstruction. [architecture; D2–D4]
- `ea.converter.pwm-dac` **PWM as data conversion** — duty resolution, filtering and ripple. [architecture; D1–D3]

## PLL, DLL, clocks, and timing

- `ea.mixed-signal.pll` **Phase-locked loop** — detector, charge pump, loop filter, VCO/divider, acquisition. [system; D1–D4]
- `ea.mixed-signal.dll` **Delay-locked loop** — phase alignment without frequency accumulation. [system; D2–D4]
- `ea.mixed-signal.frequency-synthesizer` **Frequency synthesizer** — integer-N, fractional-N, direct digital and spur tradeoffs. [system; D2–D4]
- `ea.mixed-signal.clock-generator` **Clock generator** — oscillators, multiplication/division, jitter cleanup and distribution. [system; D1–D4]
- `ea.mixed-signal.cdr` **Clock and data recovery** — phase detection, loop behavior and jitter tolerance. [system; D2–D4]
- `ea.mixed-signal.tdc-dco` **Digitally controlled oscillator and TDC** — all-digital timing loops. [component; D3–D4]

## Mixed-signal interfaces and verification

- `ea.mixed-signal.level-translator` **Voltage-level translation** — unidirectional/bidirectional, open-drain and isolation cases. [component; D1–D3]
- `ea.mixed-signal.sensor-interface` **Integrated sensor interface** — excitation, analog front end, conversion, calibration and diagnostics. [architecture; D1–D4]
- `ea.mixed-signal.serdes-afe` **SerDes analog front end** — equalization, sampling, CDR, termination and adaptation. [architecture; D3–D4]
- `ea.mixed-signal.isolation` **Digital/analog isolation** — optical, magnetic, capacitive, reinforced/basic and CMTI. [component; D1–D4; S2]
- `ea.mixed-signal.grounding-layout` **Mixed-signal grounding and layout** — return paths, partitioning, references and coupling. [method; D1–D4]
- `ea.mixed-signal.calibration` **Mixed-signal calibration** — offset/gain/linearity/timing correction, foreground/background. [method; D2–D4]
- `ea.mixed-signal.modeling` **Mixed-signal behavioral modeling** — real-number, wreal, Verilog-AMS and co-simulation. [method; D3–D4]
- `ea.mixed-signal.verification` **Mixed-signal verification** — assertions, coverage, corner/statistical and AMS testbenches. [method; D3–D4]

