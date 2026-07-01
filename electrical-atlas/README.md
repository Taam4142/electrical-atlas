# Electrical Atlas Knowledge Map

This directory is the durable planning and taxonomy corpus for **Electrical Atlas**, a bilingual visual-learning website intended to explain electrical, electronic, and supporting technological knowledge from first principles through research-level detail.

The catalog is designed to be *structurally comprehensive*: a topic is considered covered when it has a sensible canonical home, useful relationships, and a clear publication state. A mapped topic is not automatically a finished lesson.

Revision 0.1 contains **20 Markdown files**, **1,607 mapped inventory topics**, and five schema/example identifiers. This is a seed knowledge graph, not a claim that 1,607 finished lessons exist.

## Documents

1. [Project plan](00-project-plan.md) — approved v0.1 plan for **What Is Electricity?**
2. [Taxonomy model](01-taxonomy-model.md) — identifiers, node types, relations, metadata, and editorial rules
3. [Master subject map](02-master-subject-map.md) — the complete subject backbone
4. [Learning and exploration paths](03-learning-and-exploration-paths.md) — ways to traverse the graph
5. [Coverage audit](04-coverage-audit.md) — source alignment, known gaps, ambiguity, and maintenance rules
6. [Domain inventories](inventory/README.md) — detailed, multi-resolution topic catalogs

## Inventory index

- [Foundations, electromagnetism, and circuits](inventory/01-foundations-electromagnetism-circuits.md)
- [Materials, passive components, and semiconductor devices](inventory/02-materials-passives-devices.md)
- [Analog, mixed-signal, and data conversion](inventory/03-analog-mixed-signal.md)
- [Digital hardware, computing, and embedded systems](inventory/04-digital-computing-embedded.md)
- [Signals, control, automation, and instrumentation](inventory/05-signals-control-instrumentation.md)
- [EMC, transmission lines, RF, antennas, radar, and communications](inventory/06-emc-rf-communications.md)
- [Photonics, imaging, displays, and quantum engineering](inventory/07-photonics-imaging-quantum.md)
- [Power electronics, electric machines, and drives](inventory/08-power-electronics-machines-drives.md)
- [Power systems, generation, storage, and energy management](inventory/09-power-systems-energy.md)
- [IC design, PCB engineering, packaging, manufacturing, and repair](inventory/10-ic-pcb-manufacturing.md)
- [Reliability, safety, standards, ethics, and cybersecurity](inventory/11-reliability-safety-security.md)
- [Supporting engineering and computation](inventory/12-supporting-disciplines.md)
- [Applications, history, and research frontiers](inventory/13-applications-history-frontiers.md)

## How to use this corpus

- Use the master map to decide where a subject belongs.
- Use the inventory to identify individual teachable nodes.
- Use relationship types from the taxonomy model instead of duplicating a topic under every subject that uses it.
- Use the learning paths to assemble courses without changing canonical classification.
- Update the coverage audit whenever a domain is expanded or an authoritative classification is reviewed.
- Promote a node from `mapped` to `published` only after research, technical review, localization, visual QA, and accessibility checks.

## Scope convention

| Role | Meaning |
|---|---|
| `core` | Electrical or electronic knowledge itself |
| `prerequisite` | Mathematics, physics, chemistry, materials, or computation needed to understand core knowledge |
| `enabling` | Mechanical, thermal, software, manufacturing, civil, and other engineering used to realize electrical systems |
| `application` | An industry or system domain in which electrical/electronic knowledge is applied |

## Revision history

| Date | Revision | Notes |
|---|---:|---|
| 2026-06-23 | 0.1.0 | Initial project plan, taxonomy, master map, inventories, paths, and provisional coverage audit |
