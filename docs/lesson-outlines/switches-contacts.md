# Switches and Contacts lesson outline

<!--
Lesson control block

slug: switches-contacts
lessonId: ea.lesson.switches-contacts.v0.1
registryStatus: outlined
primaryTopicId: ea.component.switch
coveredTopicIds:
  - ea.component.switch
prerequisiteLessons:
  - what-is-electricity
  - voltage
  - current
  - resistance
  - ohms-law
  - series-parallel
  - power-energy
  - battery
successorLessons:
  - relay
  - capacitor
  - diode
  - fuse-breaker-short-circuit
safetyLevel: moderate
sourceStatus: draft
requiresThailandContext: true
publicLanguages: none
lastReviewed: pending
-->

This is an outline, not a public lesson. It should become a prototype only after English and Thai MDX, route wrappers, relationship records, visual work, and safety/source review are ready.

## 1. A useful definition

**A switch** is a device that intentionally opens or closes an electrical path.

**Contacts** are the conductive surfaces inside a switch that physically touch or separate to close or open that path.

In plain language: a switch is a controlled gap in a circuit. When the contacts touch with enough force and clean enough surfaces, current can pass. When they separate far enough, current should stop.

Mental model: imagine a tiny drawbridge for electrons. Closed contacts lower the bridge. Open contacts raise it. The real device is not perfect: the bridge surface can be dirty, hot, bouncing, arcing, worn, or rated for only certain kinds of loads.

## 2. Why this matters

Switches look simple, but they connect beginner circuit thinking to real electrical behavior:

- open circuit vs closed circuit;
- ideal switch vs real switch;
- contact resistance and heating;
- contact bounce in digital inputs;
- arcing when current is interrupted;
- voltage/current/load ratings;
- why AC and DC switching can have different limits;
- why safety boundaries matter before touching practical wiring.

This lesson should make learners respect the sentence “it is only a switch” as a warning sign, not a simplification.

## 3. Where you see it in real life

Examples:

- flashlight push button;
- wall light switch;
- breadboard tactile switch;
- appliance rocker switch;
- limit switch in a machine;
- relay contact;
- contactor in a motor starter;
- emergency stop button;
- door switch, float switch, pressure switch, thermostat.

Out of scope for this lesson:

- detailed building wiring methods;
- legal installation guidance;
- breaker coordination and protection design;
- relay coil design;
- contactor motor-control categories;
- repair advice for mains switches;
- exact Thai standard numbers or utility rules.

Those become later safety, wiring, protection, relay, and contactor lessons.

## 4. What it is made of / what is involved

For a beginner switch:

- **Actuator:** the button, lever, rocker, or slider the user moves.
- **Terminals:** the external metal points connected to the circuit.
- **Contacts:** conductive surfaces that touch or separate.
- **Spring or mechanism:** pushes the contacts into a stable open/closed state.
- **Insulating body:** keeps conductive parts separated and safe to handle.
- **Markings/rating:** voltage, current, load type, environment, and sometimes approval marks.

Important quantities:

- `V`: voltage across the open switch or contacts.
- `I`: current through the closed switch.
- `R_contact`: small resistance at the closed contact interface.
- `P_loss`: heat produced by contact resistance.
- `t_bounce`: time contacts chatter before settling.
- `d_gap`: open-contact separation distance.
- `rating`: allowed voltage/current/load/environment range.

## 5. How it works physically

Step by step:

1. In the open state, an air/insulation gap interrupts the conductive path.
2. When the actuator moves, the mechanism pushes the contacts together.
3. Real metal surfaces touch at microscopic high spots, not as one perfect flat area.
4. Enough contact force creates a low-resistance path.
5. When the contacts separate, current tries to continue if the circuit has stored energy or inductance.
6. If voltage across the separating gap becomes high enough, an arc can form.
7. Once the gap is large enough and the arc is extinguished, current stops.

Core simplification to state clearly: in beginner schematics, a switch is either open or closed instantly. In real hardware, switching has resistance, timing, bounce, wear, and interruption limits.

## 6. Main symbols and equations

Symbols:

- `V_switch`: voltage across the switch.
- `I_load`: load current through the switch.
- `R_contact`: closed-contact resistance.
- `P_contact`: heating at contacts.
- `t_bounce`: contact bounce time.

Useful equations:

`P_contact = I_load^2 × R_contact`

This means even a tiny contact resistance can create heat if the current is high.

`V = I × R`

This links contact resistance to voltage drop while the switch is closed.

Simplification warning: these equations do not fully describe arcing, plasma, contact material transfer, oxide films, or mechanical wear. They only give the first engineering intuition.

## 7. Practical use

Learners should come away with these habits:

- Check voltage rating.
- Check current rating.
- Check whether the rating is for AC, DC, resistive load, inductive load, lamp load, motor load, or capacitive/inrush load.
- Do not assume a switch rated for one situation is safe in another.
- Put switches in circuits where opening them actually removes energy from the intended load.
- For microcontroller inputs, expect contact bounce and use hardware or software debouncing.
- For coils, motors, relays, and solenoids, expect stored magnetic energy and use appropriate suppression in later lessons.
- For high-current or mains work, treat the lesson as conceptual only and use qualified practice plus current local requirements.

## 8. Visual explanation plan

Main visual ideas:

1. **Cutaway switch diagram:** actuator, spring, terminals, moving contact, fixed contact, insulating body.
2. **Open/closed circuit comparison:** same lamp/battery circuit with current path highlighted only when contacts close.
3. **Contact resistance heat spot:** microscopic contact area with heat glow increasing as current rises.
4. **Contact bounce timeline:** button press creates rapid on/off chatter before stable closed state.
5. **Arc moment:** contacts separate under load and a small arc appears before the gap is wide enough.

Best first interactive:

- Slider: contact state from open → touching → bouncing → closed → opening/arcing.
- Controls: load current and load type as low-voltage conceptual options.
- Outputs: current path, contact heating cue, bounce pulses, arc warning cue.

Avoid showing:

- hands touching live wiring;
- mains wiring procedures;
- a switch stopping current instantly under every condition;
- exact clearance/creepage dimensions without verified standards context.

Accessibility/mobile:

- Do not rely on color only for open/closed/arc state.
- Label current path, contact gap, and heat explicitly.
- Animation must respect reduced-motion settings.
- Touch targets need to be large enough on phones.

## 9. Common mistakes

- **“A switch has zero resistance.”** Real contacts have contact resistance, which can heat under load.
- **“Open means nothing happens.”** An open switch can still have dangerous voltage across it.
- **“Any switch can switch any circuit.”** Ratings depend on voltage, current, AC/DC, load type, environment, and construction.
- **“An AC rating automatically works for DC.”** DC arcs can be harder to interrupt because current does not naturally cross zero.
- **“A breadboard button can switch motors or mains.”** Small tactile switches are usually for signals, not power loads.
- **“If a switch turns something off, the whole device is safe.”** Stored energy, capacitors, batteries, and upstream wiring can still be dangerous.
- **“Contact bounce is a software bug.”** It is a physical event caused by real mechanical contacts.

## 10. Failure modes and limits

Switches and contacts can fail by:

- contact oxidation or contamination;
- increased contact resistance;
- pitting from arcing;
- contact welding from overcurrent or inrush;
- spring fatigue or mechanical wear;
- plastic deformation from heat;
- insulation tracking or contamination;
- water/dust ingress;
- vibration-induced intermittent contact;
- wrong rating for the load type;
- contact bounce causing false digital counts.

Limits:

- ideal switch models are useful for circuit analysis, not sufficient for hardware selection;
- low-voltage demos do not prove mains safety;
- switch ratings are product- and context-specific.

## 11. Safety notes

Safety level: **moderate**.

Beginner-safe scope:

- conceptual low-voltage circuits;
- battery-and-lamp style explanations;
- microcontroller input switch concepts;
- reading datasheet/rating labels as an educational exercise.

Unsafe or review-sensitive scope:

- mains wall switches;
- switch replacement/installation;
- high-current battery packs;
- motor, heater, compressor, or EV-charger loads;
- industrial control panels;
- wet/outdoor locations;
- contactors, breakers, isolators, and emergency stop systems as real safety devices.

Required warning for public lesson:

> This lesson explains switch behavior conceptually. It is not installation advice. Do not work on mains wiring, switchboards, vehicles, industrial controls, or high-current batteries unless you are qualified and following current local requirements.

Thailand note:

- Practical wiring, building, utility, product-standard, and safety claims require current Thai verification before publication.
- Use TISI/TIS, EIT, MEA, PEA, ERC, manufacturer documentation, and relevant IEC/IEEE/ISO source families as appropriate.

## 12. Thai localization and Thailand context

Thai title candidate: **สวิตช์และหน้าสัมผัส**

Useful Thai terms:

- switch: สวิตช์
- contact: หน้าสัมผัส
- contact resistance: ความต้านทานหน้าสัมผัส
- open circuit: วงจรเปิด
- closed circuit: วงจรปิด
- arc: อาร์ก
- contact bounce: การเด้งของหน้าสัมผัส / contact bounce
- rating: พิกัด
- insulation: ฉนวน
- terminal: ขั้วต่อ

Keep in English where useful:

- contact bounce;
- AC/DC rating;
- datasheet;
- microcontroller input;
- relay/contactor until their dedicated lessons exist.

Thai-context checks:

- Do not state installation rules without checking current official/professional Thai sources.
- Distinguish “conceptual low-voltage switch” from “สวิตช์ไฟบ้าน” very clearly.
- If examples mention Thai homes, buildings, factories, solar, EV chargers, or utility service, require source review before publication.

## Technical track

Potential deeper sections:

- contact asperities and constriction resistance;
- wetting current for low-level signal contacts;
- dry contact vs powered contact;
- bounce waveform and debouncing methods;
- RC debounce and software debounce as later topic links;
- inductive load interruption and flyback path;
- capacitive inrush and contact welding;
- AC current zero crossing vs DC arc interruption;
- contact material, plating, oxidation, and wiping action;
- creepage/clearance as future standards-sensitive topic;
- switch poles and throws: SPST, SPDT, DPST, DPDT;
- normally open vs normally closed contacts;
- safety-rated emergency stop circuits as future advanced lesson, not this beginner lesson.

## 13. Where this connects next

Good next lessons/topics:

- Capacitor: stored electric-field energy and why “off” is not always discharged.
- Diode: flyback path and one-way current control.
- Relay: a coil-controlled mechanical switch.
- Fuse, Breaker, and Short Circuit: protection when current becomes unsafe.
- Contactors and Motor Starters: high-power switching with specific load categories.
- Microcontroller Input Debouncing: reading mechanical switches reliably.
- Arc and Spark: what happens when a circuit opens under energy.
- Electrical Safety and Isolation: practical boundaries and qualified work.

Relationship records to add when the lesson becomes a prototype:

- prerequisite from voltage/current/resistance/ohms-law/power-energy/battery;
- successor to capacitor, diode, relay, fuse/breaker;
- related topic to `ea.circuit.element.switch.ideal` if/when used in generated topics;
- safety relation to short circuit, arc flash, and isolation topics when those topic IDs are available.

## 14. Reference direction for review

Candidate source families:

- basic circuit textbooks for ideal switch, open circuit, closed circuit, Ohm’s law, and power dissipation;
- electromechanical component references for contact resistance, contact bounce, contact materials, and arcing;
- manufacturer datasheets/application notes for tactile switches, rocker switches, relays, and contact rating examples;
- IEC switchgear/controlgear and appliance-switch standards families, exact part/edition to verify before quoting;
- IEEE/IEC sources for arcing, protection, and switchgear only if the lesson expands beyond beginner switches;
- Thai sources: TISI/TIS for product standards, EIT for professional practice, MEA/PEA for utility/service context, ERC for energy-regulatory context where relevant;
- NIMT only if the lesson makes measurement/calibration claims.

Open source questions:

- Which switch type should be the first public visual: tactile pushbutton, rocker switch, or knife-switch-style conceptual model?
- Should the first prototype include SPST/SPDT/DPDT, or leave that to an “Switch Types” subsection/future topic?
- Which exact source families are sufficient for contact bounce and DC arc statements without overburdening a beginner lesson?
- How much Thai building-switch context should be mentioned before the dedicated safety/standards lessons exist?
