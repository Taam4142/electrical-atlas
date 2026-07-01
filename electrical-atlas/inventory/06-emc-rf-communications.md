# EMC, Signal/Power Integrity, RF, Radar, and Communications

Section defaults: `core`; `established+current`; `mapped`. RF exposure, high-power transmitters and line-connected compliance work may be `S2–S3`.

## Electromagnetic compatibility

- `ea.emc.compatibility` **Electromagnetic compatibility** — coexistence without unacceptable emission or susceptibility. [concept; D0–D4]
- `ea.emc.emission.conducted` **Conducted emissions** — common/differential paths, limits, receivers and LISNs. [phenomenon; D1–D4; S2]
- `ea.emc.emission.radiated` **Radiated emissions** — sources, antennas, cables, chambers and limits. [phenomenon; D1–D4]
- `ea.emc.immunity.conducted` **Conducted immunity** — injected RF, EFT, surge and disturbances. [phenomenon; D2–D4; S2]
- `ea.emc.immunity.radiated` **Radiated immunity** — field exposure, modulation, test setup and monitoring. [phenomenon; D2–D4; S2]
- `ea.emc.esd` **Electrostatic discharge immunity** — contact/air discharge, current waveform, coupling and hardening. [phenomenon; D1–D4; S2]
- `ea.emc.surge` **Surge immunity** — lightning/switching waveforms, coupling and protection coordination. [phenomenon; D2–D4; S3]
- `ea.emc.eft` **Electrical fast transient/burst** — repetitive arcing disturbance and coupling. [phenomenon; D2–D4; S2]
- `ea.emc.dip-interruption` **Voltage dips, interruptions and variations** — immunity behavior and hold-up. [phenomenon; D1–D3; S2]
- `ea.emc.coupling.capacitive` **Capacitive coupling** — electric-field transfer and mitigation. [phenomenon; D1–D4]
- `ea.emc.coupling.inductive` **Inductive coupling** — mutual inductance, loop area and mitigation. [phenomenon; D1–D4]
- `ea.emc.coupling.common-impedance` **Common-impedance coupling** — shared return impedance and ground bounce. [phenomenon; D1–D4]
- `ea.emc.coupling.radiative` **Radiative coupling** — near/far fields, antennas and apertures. [phenomenon; D2–D4]
- `ea.emc.common-differential` **Common- and differential-mode currents** — mode conversion, measurement and filtering. [concept; D1–D4]
- `ea.emc.ground-bond` **Grounding and bonding for EMC** — references, chassis, shields and frequency dependence. [method; D1–D4; S2]
- `ea.emc.shielding` **Electromagnetic shielding** — reflection/absorption, apertures, seams, cables and materials. [method; D1–D4]
- `ea.emc.filter` **EMI filtering** — insertion loss, source/load impedance, parasitics and safety capacitors. [circuit; D1–D4; S2]
- `ea.emc.cable` **Cable EMC** — shield termination, twisting, common-mode paths and connectors. [method; D1–D4]
- `ea.emc.layout` **PCB EMC design** — return paths, edge rates, partitioning, layer transitions and containment. [method; D1–D4]
- `ea.emc.precompliance` **EMC pre-compliance** — probes, current clamps, cells, chambers and debugging. [method; D1–D4]
- `ea.emc.compliance` **EMC compliance process** — product family, test plan, configurations, evidence and changes. [method; D1–D4]
- `ea.emc.cispr-iec` **CISPR/IEC EMC standards families** — emissions/immunity framework and product applicability. [standard; D2–D4]

## Signal integrity

- `ea.si.interconnect` **Interconnect as transmission structure** — when traces/cables cease to be lumped. [concept; D1–D4]
- `ea.si.return-path` **High-frequency return path** — image current, reference discontinuity and loop inductance. [concept; D1–D4]
- `ea.si.reflection` **Signal reflection** — impedance discontinuities, coefficients and ringing. [phenomenon; D1–D4]
- `ea.si.termination` **Digital-line termination** — source, end, parallel, AC and differential schemes. [method; D1–D4]
- `ea.si.crosstalk` **Crosstalk** — capacitive/inductive coupling, NEXT/FEXT and geometry. [phenomenon; D1–D4]
- `ea.si.loss` **Interconnect loss** — conductor, dielectric and radiation loss; insertion loss. [phenomenon; D2–D4]
- `ea.si.dispersion` **Interconnect dispersion** — frequency-dependent velocity and pulse distortion. [phenomenon; D3–D4]
- `ea.si.via` **Via discontinuity** — barrel, stub, return vias and backdrilling. [component; D2–D4]
- `ea.si.differential` **Differential signaling** — impedance, coupling, skew, imbalance and mode conversion. [architecture; D1–D4]
- `ea.si.eye` **Eye diagram** — timing/amplitude margins, bathtub and measurement context. [method; D1–D4]
- `ea.si.jitter` **Timing jitter** — random/deterministic decomposition, transfer and BER effects. [phenomenon; D2–D4]
- `ea.si.ber` **Bit-error rate testing** — patterns, confidence, bathtub and error mechanisms. [method; D2–D4]
- `ea.si.ibis` **IBIS modeling** — behavioral I/O models, packages, quality and simulation. [method; D2–D4]
- `ea.si.serdes` **High-speed serial channel** — insertion/return loss, equalization, CDR and compliance. [system; D2–D4]

## Power integrity

- `ea.pi.pdn` **Power-distribution network** — source, planes, vias, packages, die and load interactions. [architecture; D1–D4]
- `ea.pi.target-impedance` **Target impedance** — allowed ripple versus current transient and frequency. [method; D1–D4]
- `ea.pi.decoupling` **Decoupling network** — capacitor hierarchy, antiresonance, placement and damping. [circuit; D1–D4]
- `ea.pi.plane` **Power/ground planes** — spreading inductance, resonances and cavity modes. [component; D2–D4]
- `ea.pi.ssn` **Simultaneous switching noise** — package/return inductance, ground bounce and mitigation. [phenomenon; D2–D4]
- `ea.pi.power-aware-si` **Power-aware signal integrity** — supply noise coupling into timing and I/O. [method; D3–D4]
- `ea.pi.measurement` **PDN impedance and ripple measurement** — VNA, injectors, probes and dynamic loads. [method; D2–D4]

## Transmission lines and microwave networks

- `ea.rf.transmission-line` **Transmission-line theory** — distributed RLCG, telegrapher equations, waves and impedance. [concept; D1–D4]
- `ea.rf.line.coax` **Coaxial line** — modes, impedance, loss, shielding and connectors. [component; D1–D4]
- `ea.rf.line.microstrip-stripline` **Microstrip and stripline** — quasi-TEM fields, effective permittivity, dispersion and loss. [component; D1–D4]
- `ea.rf.line.coplanar` **Coplanar waveguide** — geometry, grounding, modes and integration. [component; D2–D4]
- `ea.rf.smith-chart` **Smith chart** — impedance/admittance transformation, matching and stability circles. [tool; D1–D4]
- `ea.rf.s-parameter` **Scattering parameters** — waves, reference impedance, gain/loss and multiports. [quantity; D1–D4]
- `ea.rf.vswr-return-loss` **VSWR and return loss** — mismatch metrics and interpretation. [quantity; D1–D3]
- `ea.rf.waveguide` **Metallic waveguide** — TE/TM modes, cutoff, dispersion, loss and components. [component; D2–D4]
- `ea.rf.resonator` **Microwave resonator/cavity** — modes, Q, coupling and filters. [component; D2–D4]
- `ea.rf.directional-coupler` **Directional coupler/hybrid** — even/odd modes, directivity and applications. [component; D2–D4]
- `ea.rf.circulator-isolator` **Circulator and isolator** — nonreciprocity, ferrite bias and S-parameters. [component; D2–D4]
- `ea.rf.attenuator-divider` **RF attenuator and divider/combiner** — resistive/reactive topologies and balance. [component; D1–D4]
- `ea.rf.filter` **RF/microwave filter** — lumped, distributed, cavity, SAW/BAW and coupling matrices. [component; D1–D4]
- `ea.rf.matching` **RF impedance matching** — narrow/broadband networks, transformers and Bode–Fano limits. [method; D1–D4]

## RF active circuits and transceivers

- `ea.rf.metric.noise-figure` **Noise figure and noise temperature** — cascades, matching and measurement. [quantity; D1–D4]
- `ea.rf.metric.linearity` **RF linearity** — P1dB, IP2/IP3, intermodulation and dynamic range. [quantity; D1–D4]
- `ea.rf.lna` **Low-noise amplifier** — noise/power/matching/stability tradeoffs. [circuit; D1–D4]
- `ea.rf.power-amplifier` **RF power amplifier** — classes, load lines, efficiency, linearization and thermal limits. [circuit; D1–D4; S2]
- `ea.rf.mixer` **RF mixer** — passive/active, conversion, isolation, noise and spurs. [circuit; D1–D4]
- `ea.rf.oscillator` **RF oscillator** — resonator/active device, phase noise, pulling and startup. [circuit; D1–D4]
- `ea.rf.pll-synthesizer` **RF frequency synthesis** — PLL, fractional spurs, VCO and references. [system; D2–D4]
- `ea.rf.agc` **Automatic gain control** — detectors, loop dynamics and dynamic range. [architecture; D2–D4]
- `ea.rf.iq` **I/Q modulation and demodulation** — quadrature, image rejection and imbalance. [architecture; D1–D4]
- `ea.rf.superheterodyne` **Superheterodyne receiver** — frequency plan, image, IF filtering and spurs. [architecture; D1–D4]
- `ea.rf.direct-conversion` **Zero-IF/direct-conversion transceiver** — DC offset, flicker, I/Q imbalance and LO leakage. [architecture; D2–D4]
- `ea.rf.low-if` **Low-IF receiver** — image rejection and digital assistance. [architecture; D2–D4]
- `ea.rf.sdr` **Software-defined radio** — partitioning, converters, digital up/down conversion and flexibility. [system; D1–D4]
- `ea.rf.front-end-module` **RF front-end module** — filters, switches, PA/LNA, duplexer and packaging. [component; D1–D4]

## Antennas and propagation

- `ea.antenna.radiation` **Antenna radiation fundamentals** — current distribution, near/far field, reciprocity and effective aperture. [concept; D1–D4]
- `ea.antenna.metric` **Antenna metrics** — pattern, gain, directivity, efficiency, bandwidth and polarization. [quantity; D1–D4]
- `ea.antenna.dipole-monopole` **Dipole and monopole antennas** — length, feed, ground and pattern. [component; D0–D4]
- `ea.antenna.loop` **Loop antenna** — electrically small/large loops and magnetic coupling. [component; D1–D4]
- `ea.antenna.patch` **Microstrip patch antenna** — cavity behavior, feed and bandwidth. [component; D1–D4]
- `ea.antenna.horn-reflector` **Horn and reflector antennas** — aperture fields, feeds and high gain. [component; D1–D4]
- `ea.antenna.array` **Antenna array** — array factor, beamforming, grating lobes and coupling. [architecture; D1–D4]
- `ea.antenna.phased-array` **Phased array** — phase/time-delay control, calibration and scan limits. [system; D2–D4]
- `ea.antenna.mimo` **MIMO antenna system** — diversity, multiplexing, correlation and channel capacity. [system; D2–D4]
- `ea.antenna.small` **Electrically small antenna** — Q/bandwidth limits, matching and efficiency. [component; D2–D4]
- `ea.antenna.measurement` **Antenna measurement** — ranges, chambers, gain/pattern/polarization and OTA tests. [method; D2–D4]
- `ea.propagation.free-space` **Free-space propagation** — spreading, Friis equation and polarization mismatch. [phenomenon; D1–D4]
- `ea.propagation.terrestrial` **Terrestrial propagation** — reflection, diffraction, scattering, terrain and atmosphere. [phenomenon; D1–D4]
- `ea.propagation.multipath-fading` **Multipath and fading** — delay spread, Doppler, statistical models and diversity. [phenomenon; D1–D4]
- `ea.propagation.ionosphere` **Ionospheric propagation** — layers, critical frequency, fading and space weather. [phenomenon; D2–D4]
- `ea.propagation.link-budget` **RF link budget** — gains/losses, margins, noise, availability and regulations. [method; D0–D4]
- `ea.rf.exposure` **RF exposure and safety** — field quantities, SAR, power density, limits and assessment. [standard; D1–D4; S3]

## Information theory, modulation, and coding

- `ea.communication.information` **Information measure** — entropy, mutual information and uncertainty. [concept; D2–D4]
- `ea.communication.capacity` **Channel capacity** — Shannon limit, bandwidth/SNR and coding gap. [law; D2–D4]
- `ea.communication.source-coding` **Source coding** — entropy coding, compression and rate–distortion. [method; D1–D4]
- `ea.communication.channel-coding` **Channel coding** — block/convolutional/turbo/LDPC/polar codes and decoding. [method; D1–D4]
- `ea.communication.baseband` **Baseband pulse transmission** — line codes, pulse shaping, ISI and matched filtering. [concept; D1–D4]
- `ea.communication.am-fm-pm` **Analog modulation** — AM/FM/PM spectra, noise and detection. [method; D0–D4]
- `ea.communication.ask-fsk-psk-qam` **Digital modulation** — ASK/FSK/PSK/QAM constellations, BER and bandwidth. [method; D1–D4]
- `ea.communication.ofdm` **OFDM** — orthogonality, cyclic prefix, PAPR, synchronization and channel estimation. [method; D2–D4]
- `ea.communication.spread-spectrum` **Spread spectrum** — DSSS/FHSS, processing gain and acquisition. [method; D2–D4]
- `ea.communication.synchronization` **Carrier/timing/frame synchronization** — acquisition, tracking and impairments. [method; D2–D4]
- `ea.communication.equalization` **Communications equalization** — channel estimation, linear/DFE/ML and adaptive methods. [method; D2–D4]
- `ea.communication.diversity-mimo` **Diversity and MIMO** — combining, spatial multiplexing, precoding and detection. [method; D2–D4]

## Communication systems and networks

- `ea.communication.wired` **Wired communication systems** — copper channels, modems, xDSL, cable and Ethernet context. [system; D1–D4]
- `ea.communication.optical` **Optical communication system** — sources, modulators, fiber, amplifiers, coherent/direct detection. [system; D1–D4; S2]
- `ea.communication.radio` **Radio communication system** — spectrum, transceiver, channel, antenna and protocol. [system; D0–D4]
- `ea.communication.cellular` **Cellular system** — cells, access/core, mobility, scheduling, link adaptation and generations. [system; D1–D4]
- `ea.communication.wlan` **Wireless LAN** — Wi-Fi PHY/MAC, coexistence, security and deployment. [system; D1–D4]
- `ea.communication.bluetooth` **Bluetooth/BLE** — radio, link, profiles, advertising, connection and coexistence. [system; D1–D4]
- `ea.communication.lpwan` **Low-power wide-area networks** — LoRaWAN, cellular IoT and link/energy tradeoffs. [system; current; D1–D4]
- `ea.communication.satellite` **Satellite communication** — orbit, payload, links, ground segment and latency. [system; D1–D4; S2]
- `ea.communication.industrial` **Industrial communications** — deterministic Ethernet, fieldbus, wireless and safety/security. [system; D1–D4]
- `ea.network.layering` **Network layering and encapsulation** — OSI/TCP-IP models and cross-layer realities. [architecture; D0–D3]
- `ea.network.switching-routing` **Switching and routing** — forwarding, addressing, tables, convergence and QoS. [method; D1–D4]
- `ea.network.transport` **Transport protocols** — reliability, congestion, latency, streams and datagrams. [standard; D1–D4]
- `ea.network.timing` **Network timing and synchronization** — NTP, PTP, SyncE and time distribution. [system; D2–D4]
- `ea.network.sdn` **Software-defined networking** — control/data planes, programmability and orchestration. [architecture; current; D2–D4]

## Positioning, navigation, and radar

- `ea.positioning.ranging` **Ranging methods** — TOA/TDOA, phase, RSS, round-trip and ambiguity. [method; D1–D4]
- `ea.positioning.gnss` **Global navigation satellite system** — signals, trilateration, clocks, errors and receivers. [system; D0–D4]
- `ea.positioning.augmentation` **GNSS augmentation and RTK/PPP** — corrections, carrier phase and integrity. [system; D2–D4]
- `ea.positioning.terrestrial` **Terrestrial radio positioning** — UWB, Wi-Fi, cellular, beacons and multilateration. [system; D1–D4]
- `ea.positioning.inertial` **Inertial navigation** — mechanization, bias/drift, alignment and aiding. [system; D1–D4]
- `ea.radar.equation` **Radar equation** — range, RCS, gains/losses, noise and detectability. [law; D1–D4]
- `ea.radar.waveform` **Radar waveforms** — pulse, CW/FMCW, chirp, phase-coded and ambiguity. [method; D1–D4]
- `ea.radar.range-doppler` **Range and Doppler processing** — FFTs, windows, coupling and resolution. [method; D1–D4]
- `ea.radar.detection` **Radar detection** — matched filtering, CFAR, clutter and tracking initiation. [method; D2–D4]
- `ea.radar.array-beamforming` **Radar arrays and beamforming** — scanning, monopulse, MIMO and calibration. [architecture; D2–D4]
- `ea.radar.tracking` **Target tracking** — association, filters, maneuver and multi-target systems. [method; D2–D4]
- `ea.radar.imaging` **Imaging radar** — SAR/ISAR, aperture synthesis and reconstruction. [system; D3–D4]
- `ea.radar.automotive` **Automotive radar** — FMCW chirps, MIMO, interference and perception. [application; current; D1–D4; S2]
- `ea.radar.electronic-warfare` **Electronic support/attack/protection** — detection, jamming, deception and countermeasures. [application; current; D3–D4; S3]

## Thailand spectrum and telecom overlay

- `ea.thailand.nbtc.spectrum` **Thailand spectrum regulation** — allocations, licensing, technical conditions and current NBTC notices. [standard; application; current; D1–D3]
- `ea.thailand.nbtc.radio-equipment` **Thailand radio-equipment conformity** — equipment categories, technical standards, import/sale/use obligations. [standard; application; current; D1–D3]
- `ea.thailand.nbtc.telecom` **Thailand telecommunications regulation** — licensing, networks, numbering, service and infrastructure rules. [standard; application; current; D1–D3]
- `ea.thailand.nbtc.broadcast` **Thailand broadcasting regulation** — spectrum, transmission and equipment requirements. [standard; application; current; D1–D3]

Exact NBTC notice numbers, dates and scope must be verified against the official source during content review.

