# First 20 lesson roadmap

This roadmap chooses the first practical set of lessons that can support beginners while still forming a strong base for later electronics, power, embedded, and safety topics.

The sequence is not purely academic. It is designed for the website experience: each lesson should unlock several useful next pages.

## Priority legend

| Priority | Meaning |
| --- | --- |
| P0 | Already exists or must exist before most other lessons. |
| P1 | Build next. Foundational and high reuse. |
| P2 | Build after the first foundation cluster. |
| P3 | Important, but can wait until enough prerequisites exist. |

In the status column, `candidate` means the lesson is part of this strategic curriculum but is not yet in the active registry queue. `planned` means registry metadata and a known publication boundary exist. A candidate must be added to the registry before it advances to `planned`.

## Roadmap table

| # | Lesson | Primary atlas node | Priority | Status | Why it belongs early |
| ---: | --- | --- | --- | --- | --- |
| 1 | What Is Electricity? | `ea.fundamentals.electricity` | P0 | review-ready | The gateway concept for the whole site; maintainer preparation and exact deployment passed, while Thai approval and publication approval remain pending. |
| 2 | Electric Charge | `ea.fundamentals.charge` | P1 | review-ready | Bilingual conceptual lesson and bounded conservation demo are source-verified and exactly deployed; Thai-language approval and final publication approval remain pending. |
| 3 | Voltage | `ea.fundamentals.voltage` | P1 | review-ready | Learners need energy-per-charge before circuits make sense. |
| 4 | Electric Current | `ea.fundamentals.current` | P1 | prototype | The core flow quantity behind circuits, signals, and power. |
| 5 | Resistance and Conductance | `ea.fundamentals.resistance` | P1 | prototype | Turns material behavior into circuit behavior. |
| 6 | Ohm's Law | `ea.circuit.law.ohm` | P1 | prototype | First quantitative law most learners will use. |
| 7 | Electrical Power and Energy | `ea.fundamentals.power` / `ea.fundamentals.energy` | P1 | prototype | Connects electricity to heat, work, battery life, and safety. |
| 8 | Series and Parallel Circuits | `ea.circuit.topology.series-parallel` | P1 | prototype | Needed for almost every beginner circuit explanation. |
| 9 | Battery | `ea.storage.electrochemistry` | P1 | prototype | Gives a real source of voltage and energy; supports the lamp lesson. |
| 10 | Switches and Contacts | `ea.component.switch` | P2 | prototype | Bridges everyday switching to ideal/real circuit behavior. |
| 11 | Capacitance and Capacitors | `ea.component.capacitor` | P2 | review-ready | Bilingual field/charge/energy model, ideal equations, real-device limits, stored-energy safety, scoped Thai standards context, and exact deployment passed; qualified-human, Thai-language, and publication gates remain open. |
| 12 | Diode | `ea.device.diode.pn` | P2 | planned | First semiconductor one-way device; foundation for rectifiers and LEDs. |
| 13 | Inductor | `ea.component.inductor` | P2 | candidate | Magnetic storage, switching converters, motors, relays, EMI. |
| 14 | LED | `ea.photonics.led` | P2 | candidate | Familiar diode application with current limiting and polarity. |
| 15 | BJT | `ea.device.transistor.bjt` | P2 | candidate | Current-controlled transistor model and historical/practical relevance. |
| 16 | MOSFET | `ea.device.fet.mosfet` | P0 | prototype | Already implemented; central to modern electronics and power switching. |
| 17 | Relay | `ea.component.relay.electromagnetic` | P2 | candidate | Physical switching, isolation, coils, contacts, inductive kick. |
| 18 | Transformer | `ea.component.transformer` | P2 | candidate | AC power, isolation, coupling, safety, and grid relevance. |
| 19 | AC vs DC | `ea.fundamentals.ac` / `ea.fundamentals.dc` | P2 | candidate | Prevents many beginner misconceptions and supports power topics. |
| 20 | Fuse, Breaker, and Short Circuit | `ea.component.fuse` / `ea.component.circuit-breaker` | P2 | candidate | Early safety foundation before mains or high-current projects. |

## Suggested build order

### Batch 1: electric foundations

1. Electric Charge
2. Voltage
3. Electric Current
4. Resistance and Conductance
5. Ohm's Law
6. Electrical Power and Energy

This batch gives learners enough language to understand most simple circuits.

### Batch 2: first circuit objects

1. Series and Parallel Circuits
2. Battery
3. Switches and Contacts
4. Capacitance and Capacitors

This batch makes the site useful for hands-on beginner electronics.

### Batch 3: semiconductor and switching basics

1. Diode
2. Inductor or Relay
3. LED
4. BJT
5. Transformer
6. AC vs DC
7. Fuse, Breaker, and Short Circuit

This batch prepares the way for power electronics, embedded outputs, protection, and practical measurement.

## Next lessons to build

Phase A1 truth/current-state stabilization and Phase A2 executable integrity from the [Project review and next-phase plan — 2026-07-14](project-review-2026-07-14.md) were implemented. Voltage and What Is Electricity established the revision-bound review-preparation workflow, and Electric Charge and Capacitance and Capacitors have now passed the same maintainer-controlled preparation gates. All four are `review-ready`, not `published`; therefore the full publication lifecycle remains open. The capacitor lesson additionally retains a qualified-human gate because of its moderate stored-energy safety scope. Thai-language and final publication ownership remain with the project owner under [Publication governance](publication-governance.md).

The project owner approved the preferred curriculum order on 2026-07-17. Electric Charge is complete at `review-ready`, and the Capacitance and Capacitors implementation candidate reached the same lifecycle state on 2026-07-20 without inferring its remaining approvals. The active sequence is now:

1. **Diode** - introduces one-way conduction, polarity, rectification, and LED prerequisites.
2. **Inductor or Relay** - choose Inductor for field-energy foundations, or Relay if we deliberately continue the mechanical-switching path.
3. **LED** - becomes a natural visible application after the Diode foundation exists.

The former compact alternative—putting a charge-and-field capsule inside Capacitor before a standalone Charge lesson—is retained only as decision history. It is no longer the active plan. The registry, relationship graph, and lesson routes now place Electric Charge directly after the gateway and before Voltage and Capacitor.

After those, the original "battery lights a lamp" lesson can become a strong integrated beginner mini-project rather than a lonely one-off.
