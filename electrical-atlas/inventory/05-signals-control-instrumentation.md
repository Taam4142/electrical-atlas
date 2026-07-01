# Signals, Control, Automation, Robotics, and Instrumentation

Section defaults: `core`; `established+current`; `mapped`.

## Signals and systems

- `ea.signal.classification` **Signal classification** — continuous/discrete, analog/digital, deterministic/random, energy/power. [concept; D0–D3]
- `ea.signal.lti` **Linear time-invariant systems** — superposition, shift invariance, impulse response. [concept; D1–D4]
- `ea.signal.convolution` **Convolution** — continuous/discrete input-output construction and intuition. [method; D1–D4]
- `ea.signal.correlation` **Correlation** — similarity, delay estimation, autocorrelation and cross-correlation. [method; D1–D4]
- `ea.signal.energy-power` **Signal energy and power** — norms, Parseval relations and classifications. [quantity; D2–D4]
- `ea.signal.fourier-series` **Fourier series** — periodic spectra, symmetry, convergence and Gibbs behavior. [method; D1–D4]
- `ea.signal.fourier-transform` **Fourier transform** — spectra, duality, convolution and uncertainty. [method; D1–D4]
- `ea.signal.laplace` **Laplace-domain systems** — regions of convergence, poles/zeros, causality and stability. [method; D2–D4]
- `ea.signal.z-transform` **z-domain systems** — discrete-time poles/zeros, ROC and difference equations. [method; D2–D4]
- `ea.signal.sampling-theorem` **Sampling theorem** — band limits, replicas, reconstruction and practical limits. [law; D1–D4]
- `ea.signal.aliasing` **Aliasing** — time/frequency manifestations and anti-alias strategies. [phenomenon; D1–D4]
- `ea.signal.quantization` **Quantization and coding** — resolution, error models, companding and overload. [concept; D1–D4]
- `ea.signal.modulation-property` **Modulation properties of transforms** — frequency translation and envelopes. [concept; D2–D4]
- `ea.signal.hilbert-analytic` **Hilbert transform and analytic signal** — quadrature, envelope and instantaneous phase. [method; D3–D4]
- `ea.signal.time-frequency` **Time-frequency analysis** — STFT, wavelets, uncertainty and nonstationary signals. [method; D2–D4]
- `ea.signal.nonlinear-system` **Nonlinear systems** — harmonics, Volterra/describing functions, chaos and identification. [concept; D3–D4]

## Digital signal processing

- `ea.dsp.discrete-filter` **Digital filter realization** — direct, cascade, parallel, lattice and state-space forms. [architecture; D1–D4]
- `ea.dsp.fir` **FIR filter design** — windows, equiripple, frequency sampling and linear phase. [method; D1–D4]
- `ea.dsp.iir` **IIR filter design** — analog prototypes, transformations, stability and quantization. [method; D2–D4]
- `ea.dsp.fft` **FFT algorithms** — radix, decimation, scaling and implementation. [method; D1–D4]
- `ea.dsp.multirate` **Multirate processing** — decimation, interpolation, polyphase and filter banks. [method; D2–D4]
- `ea.dsp.fixed-point` **Fixed-point DSP** — scaling, overflow, rounding, limit cycles and word-length optimization. [method; D1–D4]
- `ea.dsp.spectral-estimation` **Spectral estimation** — periodogram, Welch, parametric and resolution/leakage. [method; D2–D4]
- `ea.dsp.adaptive-filter` **Adaptive filters** — LMS, RLS, convergence and applications. [method; D2–D4]
- `ea.dsp.equalization` **Channel equalization** — linear, decision-feedback, adaptive and blind methods. [method; D2–D4]
- `ea.dsp.compression` **Signal compression** — predictive, transform, perceptual and entropy coding. [method; D1–D4]
- `ea.dsp.audio` **Audio DSP** — sampling, filters, dynamics, spatial audio, psychoacoustics and codecs. [application; D1–D4]
- `ea.dsp.image` **Image processing** — filtering, enhancement, segmentation, morphology and restoration. [application; D1–D4]
- `ea.dsp.video` **Video processing** — motion estimation, compression, color and display pipeline. [application; D2–D4]
- `ea.dsp.biomedical` **Biomedical signal processing** — ECG/EEG/EMG, artifacts, features and regulated context. [application; D2–D4; S2]

## Estimation, detection, and sensor fusion

- `ea.estimation.least-squares` **Least-squares estimation** — batch/recursive, weighted and constrained forms. [method; D1–D4]
- `ea.estimation.maximum-likelihood` **Maximum likelihood and MAP estimation** — likelihood, priors and asymptotics. [method; D2–D4]
- `ea.estimation.bayesian` **Bayesian estimation** — posterior inference, credible uncertainty and sequential updates. [method; D2–D4]
- `ea.estimation.kalman` **Kalman filtering** — linear Gaussian state estimation, tuning and consistency. [method; D2–D4]
- `ea.estimation.extended-unscented` **EKF/UKF** — nonlinear approximations and failure modes. [method; D3–D4]
- `ea.estimation.particle` **Particle filtering** — nonlinear/non-Gaussian sequential Monte Carlo. [method; D3–D4]
- `ea.estimation.observer` **State observer** — Luenberger, disturbance and nonlinear observers. [method; D2–D4]
- `ea.detection.hypothesis` **Statistical detection** — likelihood ratio, ROC, false alarm and missed detection. [method; D2–D4]
- `ea.fusion.sensor` **Sensor fusion** — time alignment, calibration, frames, correlation and fault handling. [architecture; D1–D4]
- `ea.identification.system` **System identification** — parametric/nonparametric, excitation, validation and closed-loop issues. [method; D2–D4]

## Classical and modern control

- `ea.control.feedback` **Feedback control** — regulation, tracking, disturbance rejection and robustness. [concept; D0–D4]
- `ea.control.model.transfer-function` **Transfer-function model** — poles/zeros, blocks and limitations. [model; D1–D4]
- `ea.control.model.state-space` **State-space model** — states, inputs/outputs, linearization and realizations. [model; D2–D4]
- `ea.control.stability` **Stability concepts** — BIBO, internal, asymptotic, Lyapunov and practical stability. [concept; D1–D4]
- `ea.control.routh-hurwitz` **Routh–Hurwitz criterion** — polynomial stability without roots. [method; D2–D3]
- `ea.control.root-locus` **Root locus** — closed-loop pole motion and compensator design. [method; D1–D4]
- `ea.control.bode-nyquist` **Frequency-domain control design** — margins, sensitivity, loop shaping and Nyquist. [method; D1–D4]
- `ea.control.pid` **PID control** — forms, tuning, anti-windup, derivative filtering and bumpless transfer. [method; D0–D4]
- `ea.control.lead-lag` **Lead/lag compensation** — phase, bandwidth and steady-state error shaping. [circuit; D1–D3]
- `ea.control.feedforward` **Feedforward control** — model-based disturbance/reference compensation. [method; D1–D4]
- `ea.control.cascade-ratio-split` **Cascade, ratio and split-range control** — process-control structures. [architecture; D1–D4]
- `ea.control.controllability-observability` **Controllability and observability** — state reachability/reconstruction and decompositions. [concept; D2–D4]
- `ea.control.pole-placement` **State-feedback pole placement** — gain design and limitations. [method; D2–D4]
- `ea.control.lqr-lqg` **LQR/LQG control** — quadratic optimality, estimation and robustness caveats. [method; D3–D4]
- `ea.control.mpc` **Model-predictive control** — prediction, optimization, constraints and implementation. [method; current; D2–D4]
- `ea.control.robust` **Robust control** — uncertainty, H∞, μ-analysis and structured robustness. [method; D3–D4]
- `ea.control.adaptive` **Adaptive control** — parameter estimation, model reference and stability. [method; D3–D4]
- `ea.control.nonlinear` **Nonlinear control** — phase plane, feedback linearization, sliding mode and Lyapunov design. [method; D3–D4]
- `ea.control.hybrid` **Hybrid and switched control** — discrete modes, guards, dwell time and reachability. [method; D3–D4]
- `ea.control.learning` **Learning-based control** — iterative/reinforcement/neural methods, guarantees and safety. [method; emerging; D3–D4]
- `ea.control.digital` **Digital control implementation** — discretization, sampling, delay, quantization and real-time execution. [method; D1–D4]

## Industrial automation

- `ea.automation.plc` **Programmable logic controller** — scan cycle, I/O, memory, tasks and diagnostics. [system; D0–D4; S2]
- `ea.automation.iec61131` **IEC 61131 programming concepts** — ladder, function block, structured text and sequential chart. [standard; D1–D4]
- `ea.automation.dcs` **Distributed control system** — controllers, I/O, operator, engineering and redundancy. [system; D1–D4; S2]
- `ea.automation.scada` **SCADA** — telemetry, historian, alarms, control, communications and security. [system; D1–D4; S2]
- `ea.automation.hmi` **Industrial HMI** — visualization, alarms, trends, ergonomics and access control. [system; D1–D4; S2]
- `ea.automation.instrument-loop` **Process instrument loop** — sensor, transmitter, signal, controller, final element and calibration. [system; D1–D4; S2]
- `ea.automation.4-20ma` **4–20 mA loop** — live zero, burden, loop power, HART and faults. [standard; D0–D4; S2]
- `ea.automation.fieldbus` **Industrial fieldbus** — PROFIBUS, FOUNDATION Fieldbus, CANopen and device networks. [standard; D1–D4]
- `ea.automation.industrial-ethernet` **Industrial Ethernet** — PROFINET, EtherNet/IP, EtherCAT, TSN and determinism. [standard; current; D1–D4]
- `ea.automation.opc-ua` **OPC UA** — information models, services, security and pub/sub. [standard; current; D1–D4]
- `ea.automation.alarm-management` **Alarm management** — rationalization, priority, shelving, flood and lifecycle. [method; D1–D4; S2]
- `ea.automation.batch-sequence` **Batch and sequential control** — states, recipes, interlocks and ISA-88 concepts. [architecture; D1–D4]
- `ea.automation.sis` **Safety instrumented system** — SIF, SIL, lifecycle, proof test and independence. [system; D2–D4; S3]
- `ea.automation.machine-safety` **Machine safety control** — risk, guards, stops, safety PLC/relay and performance levels. [system; D1–D4; S3]
- `ea.automation.digital-twin` **Industrial digital twin** — asset model, synchronization, simulation and lifecycle. [architecture; emerging; D2–D4]

## Robotics and mechatronics

- `ea.robotics.coordinate-frame` **Coordinate frames and transforms** — homogeneous transforms and frame graphs. [concept; D1–D4]
- `ea.robotics.kinematics` **Robot kinematics** — forward/inverse, Jacobians, singularities and redundancy. [method; D1–D4]
- `ea.robotics.dynamics` **Robot dynamics** — rigid-body equations, actuators, friction and payload. [method; D2–D4]
- `ea.robotics.trajectory` **Trajectory generation** — profiles, splines, constraints and interpolation. [method; D1–D4]
- `ea.robotics.motion-control` **Motion control** — current, velocity and position loops; feedforward and observers. [architecture; D1–D4; S2]
- `ea.robotics.path-planning` **Path and motion planning** — graph/search/sampling/optimization methods and collision. [method; D2–D4]
- `ea.robotics.localization-mapping` **Localization and mapping** — odometry, SLAM, loop closure and uncertainty. [method; D2–D4]
- `ea.robotics.perception` **Robot perception** — vision, lidar, radar, tactile and multimodal fusion. [architecture; D1–D4]
- `ea.robotics.manipulator` **Manipulator system** — joints, transmissions, end effectors, compliance and safety. [system; D1–D4; S2]
- `ea.robotics.mobile` **Mobile robot** — differential/omnidirectional/legged/aerial/marine platforms. [system; D1–D4; S2]
- `ea.robotics.human-robot` **Human–robot interaction** — collaborative operation, intent, ergonomics and safety. [application; D2–D4; S3]

## Measurement and metrology foundations

- `ea.metrology.si` **International System of Units** — base/derived units, prefixes and realization. [standard; D0–D4]
- `ea.metrology.traceability` **Measurement traceability** — unbroken calibration chain and stated uncertainty. [concept; D1–D4]
- `ea.metrology.calibration` **Calibration** — comparison, adjustment distinction, intervals and records. [method; D1–D4]
- `ea.metrology.uncertainty` **Measurement uncertainty** — Type A/B evaluation, budgets, coverage and reporting. [method; D1–D4]
- `ea.metrology.accuracy-precision` **Accuracy, trueness, precision and error** — vocabulary and misuse prevention. [concept; D0–D3]
- `ea.metrology.repeatability-reproducibility` **Repeatability and reproducibility** — conditions, variation and gauge studies. [concept; D1–D3]
- `ea.metrology.conformity` **Conformity assessment and decision rules** — guard bands, false acceptance/rejection. [method; D2–D4]
- `ea.metrology.thailand-traceability` **Thai national metrology traceability** — NIMT role and calibration ecosystem. [system; current; D1–D3]

## Electrical measurement instruments

- `ea.instrument.voltmeter-ammeter` **Voltage and current measurement** — loading, burden, shunts and range extension. [method; D0–D4; S2]
- `ea.instrument.multimeter` **Digital multimeter** — converter, ranges, accuracy specification, CAT rating and use. [tool; D0–D4; S2]
- `ea.instrument.oscilloscope` **Oscilloscope** — acquisition, trigger, bandwidth/sample rate, probes, aliasing and artifacts. [tool; D0–D4; S2]
- `ea.instrument.probe` **Voltage/current probes** — passive, active, differential, current and high-voltage probes. [tool; D1–D4; S3]
- `ea.instrument.logic-analyzer` **Logic analyzer** — state/timing capture, thresholds, protocol decode and loading. [tool; D1–D3]
- `ea.instrument.frequency-counter` **Frequency/time counter** — reciprocal counting, trigger, reference and dead time. [tool; D1–D4]
- `ea.instrument.lcr-meter` **LCR and impedance meter** — bridge/auto-balancing methods, fixtures and frequency/bias. [tool; D1–D4]
- `ea.instrument.curve-tracer` **Semiconductor curve tracer/parameter analyzer** — sweeps, pulsed IV, guarding and safety. [tool; D2–D4; S2]
- `ea.instrument.power-analyzer` **Power analyzer** — real/reactive/harmonic power, bandwidth, synchronization and uncertainty. [tool; D1–D4; S3]
- `ea.instrument.energy-meter` **Energy meter** — induction/static metering, accuracy classes, tamper and AMI. [tool; D1–D4; S3]
- `ea.instrument.spectrum-analyzer` **Spectrum analyzer** — swept/FFT, RBW/VBW, dynamic range, detectors and phase noise. [tool; D1–D4]
- `ea.instrument.network-analyzer` **Vector/scalar network analyzer** — S-parameters, calibration, fixtures and time-domain transform. [tool; D2–D4]
- `ea.instrument.signal-generator` **Signal and arbitrary-waveform generator** — level, modulation, distortion and synchronization. [tool; D1–D4]
- `ea.instrument.lock-in` **Lock-in amplifier** — phase-sensitive detection and narrowband measurement. [tool; D2–D4]
- `ea.instrument.source-measure` **Source-measure unit** — four-quadrant forcing, compliance, sweeps and guarding. [tool; D2–D4; S2]
- `ea.instrument.hipot-insulation` **Hipot and insulation tester** — dielectric withstand, insulation resistance, leakage and safe discharge. [tool; D2–D4; S3]
- `ea.instrument.earth-tester` **Earth/ground tester** — fall-of-potential, clamp and soil methods. [tool; D2–D4; S3]
- `ea.instrument.power-quality` **Power-quality analyzer** — harmonics, flicker, dips/swells, transients and events. [tool; D2–D4; S3]

## Sensors and transducers

- `ea.sensor.classification` **Sensor and transducer fundamentals** — measurand, transfer, sensitivity, selectivity, dynamics and loading. [concept; D0–D4]
- `ea.sensor.temperature` **Temperature sensors** — thermocouple, RTD, thermistor, semiconductor and radiation methods. [component; D0–D4]
- `ea.sensor.pressure` **Pressure sensors** — strain/piezoresistive/capacitive/piezoelectric and fluid interfaces. [component; D1–D4]
- `ea.sensor.force-torque` **Force, load and torque sensors** — strain, piezoelectric, magnetic and calibration. [component; D1–D4]
- `ea.sensor.position` **Position and displacement sensors** — potentiometric, inductive, capacitive, optical and magnetic. [component; D0–D4]
- `ea.sensor.velocity-speed` **Velocity and speed sensors** — tachometer, encoder, Doppler and observer methods. [component; D1–D4]
- `ea.sensor.acceleration-inertial` **Accelerometer and inertial sensors** — MEMS, piezoelectric, gyroscope, IMU errors. [component; D1–D4]
- `ea.sensor.flow` **Flow measurement** — differential pressure, turbine, vortex, magnetic, ultrasonic, Coriolis and thermal. [component; D1–D4; S2]
- `ea.sensor.level` **Level measurement** — float, pressure, capacitance, radar, ultrasonic and radiometric. [component; D1–D4; S2]
- `ea.sensor.proximity` **Proximity sensor** — inductive, capacitive, photoelectric, ultrasonic and magnetic. [component; D0–D3]
- `ea.sensor.light-color` **Light and color sensors** — photodiode, phototransistor, spectral/colorimetric response. [component; D1–D4]
- `ea.sensor.gas-chemical` **Gas and chemical sensors** — electrochemical, catalytic, semiconductor, optical and ion-selective. [component; D2–D4; S2]
- `ea.sensor.humidity-moisture` **Humidity and moisture sensors** — capacitive/resistive/psychrometric and material methods. [component; D1–D3]
- `ea.sensor.acoustic` **Microphone and acoustic sensor** — dynamic, condenser, MEMS, piezo and arrays. [component; D0–D4]
- `ea.sensor.biosensor` **Biosensor** — biorecognition, transduction, specificity, drift and clinical context. [component; current+emerging; D2–D4; S3]

## Data acquisition and automated test

- `ea.daq.architecture` **Data-acquisition system** — sensors, conditioning, multiplexing, conversion, timing and storage. [system; D1–D4]
- `ea.daq.trigger-sync` **Triggering and synchronization** — shared clocks, timestamps, deterministic events and skew. [method; D1–D4]
- `ea.daq.isolation-grounding` **DAQ isolation and grounding** — loops, common mode, safety and channel coupling. [method; D1–D4; S2]
- `ea.test.ate` **Automated test equipment** — stimulus/measurement, switching, handlers, software and throughput. [system; D2–D4]
- `ea.test.virtual-instrumentation` **Virtual instrumentation** — modular hardware, software-defined measurement and reproducibility. [system; D1–D4]
- `ea.test.design-of-experiments` **Design of experiments** — factors, interactions, randomization and response optimization. [method; D2–D4]
- `ea.test.grr` **Measurement-system analysis/Gage R&R** — equipment/operator/part variation. [method; D2–D3]

