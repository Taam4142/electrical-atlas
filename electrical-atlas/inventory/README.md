# Domain Inventories

These files enumerate candidate knowledge nodes at multiple resolutions. Dense core domains are expanded more deeply than supporting and application domains.

## Compact record notation

Most records use:

```text
- `canonical.id` **Canonical name** — scope or included subtopics. [kind; maturity; depth; safety]
```

Unless overridden by a section:

- Scope role is `core` for electrical/electronic domains.
- Maturity is `established+current`.
- Status is `mapped`.
- Safety is `S0`.
- Relationships implied by indentation are `part-of`; explicit prerequisites and cross-links are written in prose.

The compact inventory proves placement and coverage. Before a topic reaches `outlined`, its record must be expanded using the full template in [the taxonomy model](../01-taxonomy-model.md).

## Files

1. [Foundations, electromagnetism, circuits](01-foundations-electromagnetism-circuits.md)
2. [Materials, passives, semiconductor devices](02-materials-passives-devices.md)
3. [Analog and mixed-signal](03-analog-mixed-signal.md)
4. [Digital, computing, embedded](04-digital-computing-embedded.md)
5. [Signals, control, instrumentation](05-signals-control-instrumentation.md)
6. [EMC, RF, radar, communications](06-emc-rf-communications.md)
7. [Photonics, imaging, quantum](07-photonics-imaging-quantum.md)
8. [Power electronics, machines, drives](08-power-electronics-machines-drives.md)
9. [Power systems and energy](09-power-systems-energy.md)
10. [IC, PCB, manufacturing](10-ic-pcb-manufacturing.md)
11. [Reliability, safety, security](11-reliability-safety-security.md)
12. [Supporting disciplines](12-supporting-disciplines.md)
13. [Applications, history, frontiers](13-applications-history-frontiers.md)

