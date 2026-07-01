# Deprecated manual lesson suggestion list

Status: deprecated legacy archive.

This document preserves the old hand-curated lesson suggestion list that existed before Electrical Atlas introduced the explicit relationship graph in `electrical-atlas-site/src/lib/relationships.ts`.

Do not treat this file as the active suggestion source. It is kept only for historical comparison, migration checks, and future editorial review.

## Current active source

The active system is:

- relationship records: `electrical-atlas-site/src/lib/relationships.ts`
- suggestion builder: `electrical-atlas-site/src/lib/suggestions.ts`
- relationship-system documentation: `docs/suggestion-relationship-system.md`

If a lesson needs new suggestions, add or update relationship records instead of editing this legacy list.

## Legacy format

The old list was keyed by lesson slug. Each item pointed to either:

- another lesson key; or
- a canonical atlas topic ID.

Each item also carried a short relation label, such as "paired foundation" or "physical mechanism." These relation labels were free text, not formal relationship types.

## Archived manual list

### `what-is-electricity`

| Kind | Target | Legacy relation |
| --- | --- | --- |
| lesson | `voltage` | next foundation lesson |
| lesson | `current` | next foundation lesson |
| lesson | `resistance` | next foundation lesson |
| lesson | `mosfet` | first component lesson |
| topic | `ea.fundamentals.voltage` | core prerequisite |
| topic | `ea.fundamentals.current` | core prerequisite |
| topic | `ea.em.field.electric` | same field idea |
| topic | `ea.circuit.law.ohm` | first circuit law |
| topic | `ea.storage.lithium-ion` | energy source path |

### `voltage`

| Kind | Target | Legacy relation |
| --- | --- | --- |
| lesson | `what-is-electricity` | foundation refresher |
| lesson | `current` | natural next lesson |
| lesson | `resistance` | sets up Ohm's law |
| topic | `ea.fundamentals.current` | natural next quantity |
| topic | `ea.fundamentals.resistance` | needed for Ohm's law |
| topic | `ea.circuit.law.ohm` | first circuit law |
| topic | `ea.em.potential.electric` | technical definition |
| topic | `ea.em.field.electric` | physical mechanism |
| topic | `ea.storage.electrochemistry` | real voltage source |
| topic | `ea.component.capacitor` | stores energy by voltage |

### `current`

| Kind | Target | Legacy relation |
| --- | --- | --- |
| lesson | `voltage` | paired foundation |
| lesson | `resistance` | natural next lesson |
| lesson | `what-is-electricity` | foundation refresher |
| topic | `ea.fundamentals.resistance` | next foundation quantity |
| topic | `ea.circuit.law.ohm` | voltage-current relationship |
| topic | `ea.transport.current-density` | technical extension |
| topic | `ea.transport.drift` | carrier motion |
| topic | `ea.transport.joule-heating` | heating effect |
| topic | `ea.component.fuse` | overcurrent protection |
| topic | `ea.device.fet.mosfet.soa` | component current limit |

### `resistance`

| Kind | Target | Legacy relation |
| --- | --- | --- |
| lesson | `voltage` | paired foundation |
| lesson | `current` | paired foundation |
| topic | `ea.circuit.law.ohm` | next practical law |
| topic | `ea.fundamentals.power` | heat and energy link |
| topic | `ea.fundamentals.conductance` | reciprocal quantity |
| topic | `ea.component.resistor` | first physical component |
| topic | `ea.transport.ohm-microscopic` | material physics view |
| topic | `ea.circuit.topology.series-parallel` | combine resistive paths |
| topic | `ea.component.resistor.current-sense` | measurement application |

### `mosfet`

| Kind | Target | Legacy relation |
| --- | --- | --- |
| lesson | `what-is-electricity` | foundation refresher |
| topic | `ea.device.fet.mosfet.gate-charge` | next MOSFET detail |
| topic | `ea.device.fet.mosfet.threshold` | common confusion |
| topic | `ea.device.fet.mosfet.channel` | same physical mechanism |
| topic | `ea.digital.cmos.inverter` | digital application |
| topic | `ea.converter.dc.buck` | power electronics application |
| topic | `ea.pcb.power` | layout and switching loops |

## Migration note

The active relationship graph intentionally keeps the same editorial intent, but it maps loose labels into formal relationship types such as:

- `successor`
- `prerequisite`
- `paired-foundation`
- `technical-definition`
- `physical-mechanism`
- `mathematical-law`
- `component`
- `application`
- `measurement`
- `safety`
- `energy-link`
- `material-view`

This archive can be deleted only after the relationship graph has a broader validation/export workflow and no longer needs comparison against the early manual behavior.
