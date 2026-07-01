# Digital Hardware, Computing, and Embedded Systems

Section defaults: `core`; `established+current`; `mapped`; safety `S0–S1`.

## Digital representation and logic families

- `ea.digital.binary` **Binary representation** — bits, words, radix conversion, signed/unsigned and fixed-point forms. [concept; D0–D3]
- `ea.digital.code` **Digital codes** — BCD, Gray, one-hot, character, line and error-control codes. [concept; D1–D3]
- `ea.digital.logic-level` **Logic levels** — thresholds, noise margins, fanout, loading and undefined regions. [concept; D0–D3]
- `ea.digital.logic-family` **Logic families** — RTL/DTL/TTL/ECL/CMOS and interface compatibility. [concept; historical+current; D1–D4]
- `ea.digital.cmos.inverter` **CMOS inverter** — transfer curve, switching threshold, noise margin, delay and energy. [circuit; D1–D4]
- `ea.digital.cmos.gate` **Static CMOS gates** — pull-up/down networks, sizing and logical effort. [circuit; D1–D4]
- `ea.digital.dynamic-logic` **Dynamic and domino logic** — precharge/evaluate, leakage, charge sharing and monotonicity. [circuit; D3–D4]
- `ea.digital.pass-transistor` **Pass-transistor and transmission-gate logic** — level loss, bidirectionality and restoration. [circuit; D2–D4]
- `ea.digital.open-drain` **Open-drain/open-collector signaling** — wired logic, pull-ups and rise time. [architecture; D1–D3]
- `ea.digital.tristate` **Three-state bus** — enable control, contention and alternatives. [architecture; D1–D3]

## Combinational logic

- `ea.digital.boolean.simplification` **Boolean simplification** — algebra, Karnaugh maps, Quine–McCluskey and synthesis. [method; D1–D3]
- `ea.digital.combinational.hazard` **Combinational hazards** — static/dynamic hazards, glitches and consensus terms. [phenomenon; D2–D4]
- `ea.digital.multiplexer` **Multiplexer/demultiplexer** — selection, routing and logic implementation. [component; D0–D3]
- `ea.digital.decoder-encoder` **Decoder and encoder** — priority, one-hot, address and display use. [component; D0–D3]
- `ea.digital.comparator` **Digital comparator** — equality/magnitude and cascaded forms. [circuit; D1–D3]
- `ea.digital.arithmetic.adder` **Binary adder** — ripple, carry-lookahead, prefix, carry-save architectures. [circuit; D1–D4]
- `ea.digital.arithmetic.subtract-multiply-divide` **Arithmetic units** — subtraction, multiplication, division and rounding. [circuit; D2–D4]
- `ea.digital.alu` **Arithmetic logic unit** — operations, flags, datapath integration. [architecture; D1–D4]
- `ea.digital.barrel-shifter` **Barrel shifter and bit manipulation** — shift/rotate/permutation structures. [circuit; D2–D3]
- `ea.digital.parity-crc` **Parity and CRC hardware** — polynomial arithmetic and checking. [circuit; D1–D4]

## Sequential logic and timing

- `ea.digital.latch` **Latch** — transparency, setup/hold, race and gated forms. [component; D1–D4]
- `ea.digital.flip-flop` **Flip-flop** — D/JK/T/SR, edge triggering and timing parameters. [component; D0–D4]
- `ea.digital.register` **Register and shift register** — storage, parallel/serial conversion and delay. [component; D1–D3]
- `ea.digital.counter` **Counter** — ripple/synchronous, modulus, Gray and ring/Johnson forms. [component; D1–D3]
- `ea.digital.fsm` **Finite-state machine** — Moore/Mealy, encoding, safe states and implementation. [architecture; D1–D4]
- `ea.digital.clock-domain` **Clock domain** — synchronous boundaries and timing assumptions. [concept; D1–D3]
- `ea.digital.setup-hold` **Setup, hold and recovery/removal** — timing windows and violations. [concept; D1–D4]
- `ea.digital.metastability` **Metastability** — resolution probability, MTBF and synchronizer design. [phenomenon; D2–D4]
- `ea.digital.cdc` **Clock-domain crossing** — level, pulse, handshake, FIFO and formal verification. [method; D2–D4]
- `ea.digital.rdc` **Reset-domain crossing** — asynchronous assertion, synchronous release and reconvergence. [method; D2–D4]
- `ea.digital.clock-tree` **Clock distribution** — skew, jitter, duty cycle, gating and trees/meshes. [architecture; D2–D4]
- `ea.digital.pipelining` **Pipelining** — latency/throughput, hazards, retiming and balancing. [architecture; D1–D4]

## Memory technologies and organization

- `ea.memory.hierarchy` **Memory hierarchy** — registers, caches, main, storage, locality and coherence. [architecture; D1–D4]
- `ea.memory.sram` **SRAM** — bit cell, read/write margins, arrays and cache use. [component; D1–D4]
- `ea.memory.dram` **DRAM** — cell, sensing, refresh, timing, banks and interfaces. [component; D1–D4]
- `ea.memory.rom` **ROM and mask-programmed memory** — fixed storage and decoding. [component; D1–D3]
- `ea.memory.eeprom-flash` **EEPROM and flash** — floating gate/charge trap, erase blocks, endurance and retention. [component; D1–D4]
- `ea.memory.nand-management` **NAND flash management** — ECC, bad blocks, wear leveling, FTL and SSDs. [architecture; D2–D4]
- `ea.memory.fram` **Ferroelectric RAM** — polarization storage, endurance and limitations. [component; current; D2–D4]
- `ea.memory.mram` **Magnetoresistive RAM** — MTJ, STT/SOT switching and nonvolatility. [component; current+emerging; D3–D4]
- `ea.memory.pcm-reram` **Phase-change and resistive memory** — physical mechanisms, arrays and variability. [component; emerging; D3–D4]
- `ea.memory.ecc` **Memory error correction** — parity, SECDED, chipkill and scrubbing. [method; D2–D4]

## HDL, programmable logic, and ASIC implementation

- `ea.hdl.verilog-systemverilog` **Verilog/SystemVerilog** — RTL, types, interfaces, assertions and verification constructs. [tool; D1–D4]
- `ea.hdl.vhdl` **VHDL** — entities, architectures, packages, processes and RTL. [tool; D1–D4]
- `ea.hdl.chisel-hls` **Hardware construction and high-level synthesis** — Chisel/Spinal, C/C++ HLS and scheduling. [tool; current; D2–D4]
- `ea.digital.rtl` **Register-transfer level design** — cycle-accurate datapaths/control and synthesizable style. [method; D1–D4]
- `ea.digital.synthesis` **Logic synthesis** — elaboration, optimization, mapping and constraints. [method; D2–D4]
- `ea.digital.fpga` **FPGA architecture** — LUTs, flip-flops, routing, memories, DSPs, transceivers and I/O. [component; D1–D4]
- `ea.digital.fpga-flow` **FPGA implementation flow** — synthesis, constraints, placement, routing, bitstream and debug. [method; D1–D4]
- `ea.digital.static-timing` **Static timing analysis** — paths, constraints, corners, exceptions and closure. [method; D2–D4]
- `ea.digital.asic-flow` **ASIC design flow** — specification through tapeout and production. [method; D2–D4]
- `ea.digital.standard-cell` **Standard-cell design** — libraries, characterization, PVT and physical abstracts. [architecture; D3–D4]
- `ea.digital.low-power` **Low-power digital design** — clock/power gating, DVFS, retention, isolation and UPF. [method; D2–D4]
- `ea.digital.dft` **Design for test** — scan, ATPG, BIST, boundary scan and coverage. [method; D2–D4]
- `ea.digital.formal` **Formal hardware verification** — equivalence, model checking, properties and proofs. [method; D2–D4]
- `ea.digital.simulation-verification` **Digital simulation and verification** — testbenches, constrained random, coverage and UVM. [method; D1–D4]

## Computer architecture

- `ea.computing.isa` **Instruction-set architecture** — instructions, registers, addressing, privilege and memory model. [architecture; D1–D4]
- `ea.computing.microarchitecture` **Microarchitecture** — datapath, control, pipeline and implementation tradeoffs. [architecture; D1–D4]
- `ea.computing.pipeline-hazard` **Processor pipeline hazards** — structural/data/control hazards, bypass and speculation. [concept; D2–D4]
- `ea.computing.branch-prediction` **Branch prediction and speculation** — predictors, recovery, performance and security. [architecture; D2–D4]
- `ea.computing.out-of-order` **Out-of-order execution** — renaming, scheduling, reorder and precise state. [architecture; D3–D4]
- `ea.computing.cache` **Cache architecture** — mapping, replacement, write policy, misses and prefetching. [architecture; D1–D4]
- `ea.computing.coherence` **Cache coherence and consistency** — protocols, memory ordering and synchronization. [architecture; D3–D4]
- `ea.computing.mmu` **Memory management unit** — translation, paging, TLBs, protection and virtualization. [component; D2–D4]
- `ea.computing.microcontroller` **Microcontroller** — CPU, memory, peripherals, clock/reset/power integration. [component; D0–D4]
- `ea.computing.cpu` **General-purpose CPU** — scalar/vector, multicore and performance metrics. [component; D1–D4]
- `ea.computing.dsp-processor` **DSP processor** — MAC units, addressing, SIMD/VLIW and deterministic execution. [component; D2–D4]
- `ea.computing.gpu` **GPU architecture** — SIMT, memory hierarchy, graphics/compute pipelines. [component; D2–D4]
- `ea.computing.accelerator` **Domain-specific accelerator** — systolic, tensor, crypto and media engines. [component; current; D2–D4]
- `ea.computing.soc` **System on chip** — integration, buses, IP, memory, power, security and verification. [system; D1–D4]
- `ea.computing.noc` **Network on chip** — topology, routing, flow control and QoS. [architecture; D3–D4]
- `ea.computing.risc-v` **RISC-V ecosystem** — ISA modularity, privilege, extensions and implementations. [architecture; current; D1–D4]
- `ea.computing.arm-x86` **ARM and x86 architecture families** — execution and ecosystem context without vendor-product cataloging. [architecture; current; D1–D3]

## Board and peripheral interfaces

- `ea.interface.gpio` **GPIO** — input thresholds, output structures, pulls, drive, slew and protection. [component; D0–D3]
- `ea.interface.uart` **UART/asynchronous serial** — framing, baud error, flow control and physical layers. [standard; D0–D3]
- `ea.interface.spi` **SPI** — modes, chip select, timing, topology and extensions. [standard; D0–D3]
- `ea.interface.i2c` **I²C/SMBus** — open-drain bus, addressing, arbitration, clock stretching and integrity. [standard; D0–D4]
- `ea.interface.i3c` **MIPI I3C** — dynamic addressing, push-pull phases, in-band interrupts. [standard; current; D2–D4]
- `ea.interface.can` **CAN/CAN FD** — differential physical layer, arbitration, frames and fault confinement. [standard; D1–D4]
- `ea.interface.lin` **LIN** — scheduled low-cost vehicle network. [standard; D1–D3]
- `ea.interface.rs232-485` **RS-232 and RS-422/485** — electrical layers, topology, termination and isolation. [standard; D1–D4]
- `ea.interface.usb` **USB** — topology, protocol, descriptors, power delivery and high-speed physical layers. [standard; D1–D4]
- `ea.interface.ethernet` **Ethernet hardware interfaces** — MAC/PHY, MII variants, magnetics and copper/fiber links. [standard; D1–D4]
- `ea.interface.pcie` **PCI Express** — lanes, transactions, link training, equalization and integrity. [standard; D2–D4]
- `ea.interface.memory-ddr` **DDR memory interface** — timing, training, termination, topology and SI. [standard; D2–D4]
- `ea.interface.display-camera` **Display and camera interfaces** — HDMI, DisplayPort, MIPI DSI/CSI and parallel variants. [standard; D1–D4]
- `ea.interface.jtag` **JTAG and boundary scan** — TAP, debug, programming and board test. [standard; D1–D4]

## Embedded hardware foundations

- `ea.embedded.clock-reset` **Clock and reset subsystem** — sources, startup, brownout, watchdog and sequencing. [architecture; D1–D4]
- `ea.embedded.memory-map` **Memory-mapped I/O** — address space, registers, ordering and atomic access. [concept; D1–D3]
- `ea.embedded.interrupt` **Interrupts and exceptions** — priorities, latency, nesting and handlers. [concept; D1–D4]
- `ea.embedded.dma` **Direct memory access** — channels, descriptors, cache coherency and timing. [component; D1–D4]
- `ea.embedded.timer-pwm` **Timers, capture/compare and PWM** — time bases, measurement and actuation. [component; D0–D3]
- `ea.embedded.adc-dac` **Embedded converters** — acquisition, calibration, triggering, reference and DMA. [component; D1–D3]
- `ea.embedded.power` **Embedded power management** — sleep states, wake sources, DVFS and energy profiling. [method; D1–D4]
- `ea.embedded.board-bringup` **Board bring-up** — rails, clocks, reset, boot, interfaces and staged diagnosis. [method; D1–D4; S1]
- `ea.embedded.hardware-debug` **Hardware debug** — SWD/JTAG, trace, logic analysis and fault capture. [method; D1–D4]

## Firmware and real-time systems

- `ea.firmware.bare-metal` **Bare-metal firmware** — startup, linker, superloop, registers and deterministic control. [method; D1–D4]
- `ea.firmware.toolchain` **Embedded toolchain** — compiler, assembler, linker, debugger, build and ABI. [tool; D1–D4]
- `ea.firmware.driver` **Device driver** — hardware abstraction, interrupt/DMA paths, state and errors. [method; D1–D4]
- `ea.firmware.bootloader` **Bootloader** — image validation, recovery, update and chain of trust. [architecture; D1–D4]
- `ea.firmware.rtos` **Real-time operating system** — tasks, scheduling, queues, timers and memory. [system; D1–D4]
- `ea.firmware.scheduling` **Real-time scheduling** — fixed/dynamic priority, deadlines and schedulability. [method; D2–D4]
- `ea.firmware.concurrency` **Embedded concurrency** — races, atomicity, mutexes, semaphores and lock-free cases. [concept; D1–D4]
- `ea.firmware.priority-inversion` **Priority inversion** — blocking, inheritance and ceiling protocols. [phenomenon; D2–D4]
- `ea.firmware.memory-safety` **Embedded memory safety** — bounds, lifetime, stack/heap, MPU and safe languages. [method; D1–D4]
- `ea.firmware.update` **Firmware update** — local/OTA, A/B images, rollback, power-fail safety and signing. [method; D2–D4]
- `ea.firmware.diagnostics` **Embedded diagnostics and logging** — events, telemetry, fault codes, crash dumps and observability. [method; D1–D4]
- `ea.firmware.testing` **Firmware testing** — unit, integration, SIL/HIL, fault injection and coverage. [method; D1–D4]
- `ea.firmware.embedded-linux` **Embedded Linux** — boot chain, kernel, device tree, drivers, rootfs and real time. [system; D2–D4]
- `ea.firmware.iot` **IoT device architecture** — sensing, connectivity, provisioning, cloud/edge and lifecycle. [system; D1–D4]

## Hardware–software co-design and edge systems

- `ea.codesign.partitioning` **Hardware/software partitioning** — performance, power, cost, flexibility and verification. [method; D2–D4]
- `ea.codesign.hal-bsp` **HAL and board-support package** — portability boundaries and generated code risks. [architecture; D1–D3]
- `ea.codesign.fpga-soc` **FPGA SoC co-design** — processor/fabric interfaces, shared memory and accelerators. [system; D2–D4]
- `ea.edge.computing` **Edge computing** — local inference/control, latency, privacy, connectivity and updates. [system; current; D1–D4]
- `ea.edge.tinyml` **TinyML** — constrained inference, quantization, accelerators and dataset drift. [method; emerging; D2–D4]
- `ea.edge.digital-twin-interface` **Embedded digital-twin interface** — model synchronization, telemetry and lifecycle data. [architecture; emerging; D2–D4]

