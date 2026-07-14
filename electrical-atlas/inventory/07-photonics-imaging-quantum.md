# Photonics, Imaging, Displays, and Quantum Engineering

Section defaults: `core`; `established+current`; `mapped`. Lasers, high-intensity optical sources, ionizing radiation and cryogenic systems require elevated safety classification.

## Optical foundations

- `ea.optics.geometric` **Geometrical optics** — rays, reflection, refraction, Snell's law, imaging and aberrations. [concept; D1–D4]
- `ea.optics.wave` **Wave optics** — interference, diffraction, coherence, polarization and dispersion. [concept; D1–D4]
- `ea.optics.photon` **Photon description** — energy, momentum, statistics and matter interaction. [concept; D2–D4]
- `ea.optics.radiometry` **Radiometry** — radiant flux, intensity, irradiance, radiance and étendue. [quantity; D1–D4]
- `ea.optics.photometry` **Photometry and colorimetry** — visual response, luminous quantities, color spaces and measurement. [quantity; D1–D4]
- `ea.optics.coherence` **Temporal and spatial coherence** — linewidth, coherence length and interference. [concept; D2–D4]
- `ea.optics.polarization` **Optical polarization** — Jones/Stokes descriptions, birefringence and components. [concept; D1–D4]
- `ea.optics.nonlinear` **Nonlinear optics** — χ²/χ³ effects, harmonic generation, mixing and Kerr phenomena. [phenomenon; D3–D4; S2]
- `ea.optics.quantum` **Quantum optics** — photon statistics, squeezed/entangled states and measurement. [concept; emerging; D3–D4]

## Light sources and lasers

- `ea.photonics.led` **Light-emitting diode** — radiative recombination, spectra, efficiency, packaging and drive. [component; D0–D4; S1]
- `ea.photonics.oled` **Organic LED** — layers, excitons, drive, aging and display use. [component; current; D1–D4]
- `ea.photonics.laser.principle` **Laser principle** — stimulated emission, inversion, resonator, threshold and modes. [concept; D1–D4; S2]
- `ea.photonics.laser.semiconductor` **Semiconductor laser** — junction/quantum-well devices, modulation and temperature. [component; D1–D4; S2]
- `ea.photonics.laser.solid-state` **Solid-state and fiber laser** — gain media, pumping, resonators and nonlinear effects. [component; D2–D4; S3]
- `ea.photonics.laser.gas` **Gas laser** — discharge excitation, common media and legacy/current use. [component; historical+current; D2–D4; S3]
- `ea.photonics.laser.pulse` **Pulsed and ultrafast laser** — Q-switching, mode locking, pulse energy and bandwidth. [system; D3–D4; S3]
- `ea.photonics.source.thermal` **Thermal and discharge light sources** — incandescent, fluorescent, arc and plasma sources. [component; historical+current; D0–D3; S2]

## Photodetectors and optoelectronic devices

- `ea.photonics.detector.photodiode` **Photodiode** — PIN/APD structures, responsivity, dark current, speed and noise. [component; D1–D4]
- `ea.photonics.detector.phototransistor` **Phototransistor** — internal gain, speed, saturation and ambient response. [component; D1–D3]
- `ea.photonics.detector.apd` **Avalanche photodiode** — gain, excess noise, breakdown and bias control. [component; D2–D4; S2]
- `ea.photonics.detector.spad` **Single-photon avalanche diode** — Geiger mode, quenching, timing and arrays. [component; current+emerging; D3–D4]
- `ea.photonics.detector.pmt` **Photomultiplier tube** — photocathode, dynodes, gain, timing and high voltage. [component; current; D2–D4; S3]
- `ea.photonics.detector.thermal` **Thermal infrared detector** — bolometer, thermopile and pyroelectric devices. [component; D1–D4]
- `ea.photonics.modulator` **Electro-optic modulator** — Pockels/Kerr, Mach–Zehnder, absorption and phase modulation. [component; D2–D4; S2]
- `ea.photonics.optocoupler` **Optocoupler** — LED/detector transfer, isolation ratings, aging and speed. [component; D1–D4; S2]

## Fiber optics and integrated photonics

- `ea.photonics.fiber` **Optical fiber** — guiding, modes, numerical aperture, dispersion, attenuation and nonlinearities. [component; D1–D4; S1]
- `ea.photonics.fiber.single-multimode` **Single- and multimode fiber** — modal behavior, bandwidth and deployment. [component; D1–D3]
- `ea.photonics.fiber.connector-splice` **Fiber connectors and splicing** — loss, reflection, cleanliness and inspection. [method; D1–D3; S1]
- `ea.photonics.fiber.amplifier` **Optical fiber amplifier** — EDFA and other gain bands, noise and saturation. [component; D2–D4; S2]
- `ea.photonics.wdm` **Wavelength-division multiplexing** — filters, grids, routing and impairment. [architecture; D1–D4]
- `ea.photonics.integrated` **Integrated photonics** — waveguides, couplers, resonators, modulators, detectors and packaging. [architecture; current+emerging; D2–D4]
- `ea.photonics.silicon` **Silicon photonics** — material constraints, modulators, germanium detection and co-packaging. [architecture; current; D3–D4]
- `ea.photonics.plasmonic` **Plasmonics** — surface modes, confinement, loss and sensing. [concept; emerging; D3–D4]

## Imaging systems

- `ea.imaging.camera-model` **Camera imaging chain** — scene, optics, sensor, ISP, encoding and display. [system; D0–D4]
- `ea.imaging.lens` **Lens system** — focal length, aperture, depth of field, MTF and aberration. [component; D1–D4]
- `ea.imaging.sensor.ccd` **CCD image sensor** — charge transfer, readout, blooming and noise. [component; historical+current; D2–D4]
- `ea.imaging.sensor.cmos` **CMOS image sensor** — pixel, rolling/global shutter, read noise and HDR. [component; current; D1–D4]
- `ea.imaging.color` **Color imaging** — spectral response, CFA, demosaic, white balance and color management. [method; D1–D4]
- `ea.imaging.isp` **Image-signal processing** — black level, denoise, HDR, tone, sharpening and calibration. [architecture; D1–D4]
- `ea.imaging.thermal` **Thermal imaging** — infrared bands, detectors, calibration, emissivity and NUC. [system; D1–D4]
- `ea.imaging.hyperspectral` **Multispectral/hyperspectral imaging** — spectral cubes, sensors, calibration and analysis. [system; current; D2–D4]
- `ea.imaging.computational` **Computational imaging** — coded aperture, phase retrieval, light field and inverse problems. [method; emerging; D3–D4]
- `ea.imaging.microscopy` **Electronic/optical microscopy interfaces** — illumination, scanning, detectors and acquisition electronics. [system; D2–D4; S2]

## Lidar, ranging, and spectroscopy

- `ea.lidar.tof` **Time-of-flight lidar** — pulsed/direct/indirect methods, timing and range. [system; D1–D4; S2]
- `ea.lidar.fmcw` **FMCW coherent lidar** — chirps, mixing, velocity and coherence. [system; emerging; D3–D4; S2]
- `ea.lidar.scanning` **Lidar beam steering** — mechanical, MEMS, flash and optical phased arrays. [architecture; D1–D4; S2]
- `ea.spectroscopy.absorption-emission` **Absorption and emission spectroscopy** — sources, wavelength selection and detectors. [method; D1–D4; S2]
- `ea.spectroscopy.raman` **Raman spectroscopy** — inelastic scattering, rejection, sensitivity and lasers. [method; D2–D4; S3]
- `ea.spectroscopy.interferometer` **Interferometry** — Michelson/Mach–Zehnder/Fabry–Pérot and precision displacement. [method; D1–D4; S2]
- `ea.photonics.optical-time-domain` **Optical time-domain reflectometry** — distributed fiber loss/event location. [method; D2–D4; S2]

## Displays and human visual interfaces

- `ea.display.lcd` **Liquid-crystal display** — polarization, cells, TFT backplane, backlight and drive. [system; D1–D4]
- `ea.display.oled` **OLED display** — emissive pixel, backplane, compensation, burn-in and drive. [system; current; D1–D4]
- `ea.display.microled` **MicroLED display** — transfer, yield, current drive and optics. [system; emerging; D2–D4]
- `ea.display.epaper` **Electronic paper** — electrophoretic and alternative bistable methods. [system; current; D1–D3]
- `ea.display.projector` **Projection display** — DLP, LCD/LCoS, laser and illumination architectures. [system; D1–D4; S2]
- `ea.display.driver` **Display timing and driver electronics** — row/column drive, gamma, TCON and power. [architecture; D1–D4]
- `ea.display.touch` **Touch sensing** — resistive, projected-capacitive, stylus and controller algorithms. [system; D1–D4]
- `ea.display.hdr-color` **HDR and color reproduction** — luminance, gamut, transfer functions and calibration. [concept; current; D1–D4]
- `ea.display.ar-vr` **AR/VR display system** — near-eye optics, tracking, latency, foveation and safety. [system; current+emerging; D2–D4; S1]

## Quantum foundations for engineers

- `ea.quantum.state` **Quantum state and measurement** — vectors/density matrices, observables, probabilities and collapse models. [concept; D3–D4]
- `ea.quantum.superposition` **Superposition and interference** — amplitudes, phase and decoherence. [concept; D3–D4]
- `ea.quantum.entanglement` **Entanglement** — composite states, correlations and Bell tests. [concept; D3–D4]
- `ea.quantum.spin` **Spin and two-level systems** — Bloch sphere, control and readout. [concept; D3–D4]
- `ea.quantum.tunneling` **Quantum tunneling** — barriers, rates and device manifestations. [phenomenon; D3–D4]
- `ea.quantum.decoherence` **Decoherence and relaxation** — T1/T2, noise channels and error. [phenomenon; D3–D4]
- `ea.quantum.cryogenics` **Cryogenic electrical engineering** — refrigeration, wiring, thermalization, filtering and low-noise measurement. [method; enabling; current+emerging; D3–D4; S3]

## Quantum devices and systems

- `ea.quantum.qubit.superconducting` **Superconducting qubit** — Josephson circuits, control/readout and cryogenic stack. [component; emerging; D3–D4; S3]
- `ea.quantum.qubit.ion-atom` **Trapped-ion and neutral-atom qubit** — trapping, laser control and measurement. [component; emerging; D3–D4; S3]
- `ea.quantum.qubit.spin` **Spin qubit and color center** — confinement, microwave/optical control and readout. [component; emerging; D3–D4]
- `ea.quantum.photonics` **Photonic quantum information** — single photons, interferometers, detectors and sources. [system; emerging; D3–D4]
- `ea.quantum.control-electronics` **Quantum control electronics** — waveform generation, RF control, synchronization and feedback. [system; emerging; D3–D4]
- `ea.quantum.error-correction` **Quantum error correction** — logical encoding, syndrome extraction and thresholds. [method; experimental; D4]
- `ea.quantum.sensing` **Quantum sensing** — atomic clocks, magnetometers, gravimeters and quantum-enhanced measurement. [system; current+emerging; D3–D4]
- `ea.quantum.communication` **Quantum communication** — QKD, repeaters, networks and implementation security. [system; emerging; D3–D4]
- `ea.quantum.computing` **Quantum computing architecture** — gates/annealing, control, compilation and error budget. [system; experimental; D3–D4]
