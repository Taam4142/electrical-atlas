# Thai terminology glossary

This glossary is the first guardrail for Thai wording in Electrical Atlas.

It is not a legal dictionary and it is not a standards translation. It is a working editorial guide for lesson writing, UI labels, captions, and topic records. For standards, installation, utility rules, product compliance, metrology, RF/spectrum, buildings, medical equipment, vehicles, and other regulated topics, verify the exact Thai wording from current official sources before publication.

## How to use this glossary

- Keep English as the canonical concept ID and route/source language for now.
- Use the preferred Thai term for learner-facing Thai prose when it sounds natural.
- Keep common English technical terms when Thai learners and technicians normally expect them, especially part names such as MOSFET, PCB, LED, IC, and datasheet.
- On first mention, pair terms when helpful: `แรงดันไฟฟ้า (voltage)`, `กราวด์/จุดอ้างอิง (ground/reference)`.
- Do not force word-for-word translation. Thai lessons should read naturally.
- Be extra careful with safety-critical words such as ground, earth, neutral, line/live, protection, breaker, leakage, and bonding.

## Term status labels

| Status | Meaning |
| --- | --- |
| `preferred` | Default Thai wording for lessons unless context says otherwise. |
| `keep English` | Keep the English term, optionally with a Thai explanation. |
| `contextual` | Choose wording based on physical, circuit, installation, or standards context. |
| `safety-sensitive` | Wrong wording can mislead practical or regulated work. Verify before standards/safety publication. |
| `needs source review` | Use as draft wording only until checked against authoritative Thai or bilingual sources. |

## Core fundamentals

| English canonical term | Preferred Thai | Useful alternatives / keep English | Status | Notes |
| --- | --- | --- | --- | --- |
| electricity | ไฟฟ้า | electricity | preferred | Use broadly for the phenomenon/domain. |
| electrical engineering | วิศวกรรมไฟฟ้า | engineering, EE | preferred | Use for the professional discipline. |
| electronics | อิเล็กทรอนิกส์ | electronics | preferred | Use for electronic devices/circuits; avoid merging with all electrical power topics. |
| electric charge | ประจุไฟฟ้า | charge | preferred | In beginner text, introduce as a property carried by particles. |
| electron | อิเล็กตรอน | electron | preferred | Keep English in equations if needed. |
| ion | ไอออน | ion | preferred | Relevant for batteries, electrochemistry, plasma, and sensors. |
| electric field | สนามไฟฟ้า | E-field | preferred | Use `สนาม` only when the surrounding text is clearly electrical. |
| magnetic field | สนามแม่เหล็ก | B-field, H-field | preferred | Distinguish magnetic flux density `B` from magnetic field strength `H` in advanced lessons. |
| voltage | แรงดันไฟฟ้า | voltage, ความต่างศักย์ไฟฟ้า | preferred | For beginners, use `แรงดันไฟฟ้า`. Use `ความต่างศักย์ไฟฟ้า` when teaching potential difference formally. |
| electric potential | ศักย์ไฟฟ้า | potential | preferred | Not exactly the same phrase as voltage; voltage is a difference between points. |
| current | กระแสไฟฟ้า | current | preferred | Always define direction convention when it matters. |
| conventional current | กระแสตามข้อตกลง | conventional current | contextual | Explain that it points opposite electron drift in metal conductors. |
| electron drift | การเคลื่อนที่ดริฟต์ของอิเล็กตรอน | drift | contextual | Use in current lessons to avoid implying electrons race around the circuit. |
| resistance | ความต้านทาน | resistance | preferred | Quantity measured in ohms. |
| conductance | ความนำไฟฟ้า | conductance | preferred | Opposite view of resistance; measured in siemens. |
| impedance | อิมพีแดนซ์ | impedance, ความต้านทานเชิงซ้อน | contextual | Use `อิมพีแดนซ์` in AC/RF lessons; define complex meaning later. |
| capacitance | ความจุไฟฟ้า | capacitance | preferred | Avoid confusing the quantity with a physical capacitor. |
| inductance | ความเหนี่ยวนำ | inductance | preferred | Use for the quantity; `ตัวเหนี่ยวนำ` is the component. |
| power | กำลังไฟฟ้า | power | preferred | Measured in watts. |
| energy | พลังงานไฟฟ้า | energy | preferred | Measured in joules or watt-hours depending context. |
| frequency | ความถี่ | frequency | preferred | Use hertz/Hz. |
| phase | เฟส | phase, มุมเฟส | contextual | `เฟส` may mean AC phase conductor or waveform phase; clarify context. |
| signal | สัญญาณ | signal | preferred | Distinguish signal from power delivery when needed. |
| waveform | รูปคลื่น | waveform | preferred | Useful for AC, PWM, RF, and measurement lessons. |

## Materials and physical paths

| English canonical term | Preferred Thai | Useful alternatives / keep English | Status | Notes |
| --- | --- | --- | --- | --- |
| conductor | ตัวนำ | conductor | preferred | Use for material/path that allows current. |
| insulator | ฉนวน | insulator | preferred | Can mean material or insulation layer; clarify when needed. |
| semiconductor | สารกึ่งตัวนำ | semiconductor | preferred | Use for silicon, GaN, SiC, etc. |
| dielectric | ไดอิเล็กทริก | dielectric, ฉนวนไฟฟ้า | contextual | In capacitor lessons, `ไดอิเล็กทริก` is more precise than general insulation. |
| copper | ทองแดง | copper | preferred | Common conductor material. |
| aluminum | อะลูมิเนียม | aluminium/aluminum | preferred | Use for conductors, heatsinks, enclosures. |
| silicon | ซิลิคอน | silicon | preferred | Do not confuse with silicone rubber. |
| contact | หน้าสัมผัส | contact | preferred | Use for switch/relay/connector current-carrying surfaces. |
| contact resistance | ความต้านทานหน้าสัมผัส | contact resistance | preferred | Important for heat, voltage drop, and reliability. |
| insulation resistance | ความต้านทานฉนวน | insulation resistance | safety-sensitive | Do not turn this into practical test thresholds without source review. |

## Components and devices

| English canonical term | Preferred Thai | Useful alternatives / keep English | Status | Notes |
| --- | --- | --- | --- | --- |
| resistor | ตัวต้านทาน | resistor | preferred | Component; quantity is `ความต้านทาน`. |
| capacitor | ตัวเก็บประจุ | capacitor | preferred | Keep `capacitor` in part labels if natural. |
| inductor | ตัวเหนี่ยวนำ | inductor | preferred | Component that stores magnetic-field energy. |
| transformer | หม้อแปลง | transformer | preferred | For power systems, include rating and safety context carefully. |
| battery | แบตเตอรี่ | battery | preferred | Common Thai usage. |
| cell | เซลล์ | cell, เซลล์ไฟฟ้า | contextual | In battery lessons, distinguish one cell from a battery pack. |
| diode | ไดโอด | diode | preferred | Use for PN diode, rectifier diode, signal diode. |
| LED | LED | ไดโอดเปล่งแสง | keep English | First mention can be `LED (ไดโอดเปล่งแสง)`. |
| transistor | ทรานซิสเตอร์ | transistor | preferred | Broad device family. |
| MOSFET | MOSFET | มอสเฟต | keep English | Keep English acronym in titles and schematics; Thai prose may say `มอสเฟต`. |
| BJT | BJT | ทรานซิสเตอร์ไบโพลาร์ | keep English | Define on first mention. |
| IC | IC | วงจรรวม | keep English | `วงจรรวม` is useful in explanatory prose. |
| microcontroller | ไมโครคอนโทรลเลอร์ | MCU | preferred | Use MCU only after defining. |
| sensor | เซนเซอร์ | sensor, ตัวตรวจจับ | contextual | `เซนเซอร์` is natural for most learner-facing text. |
| actuator | แอคชูเอเตอร์ | actuator, ตัวกระตุ้น | contextual | Choose by audience; robotics/automation learners often know `actuator`. |
| relay | รีเลย์ | relay | preferred | Mention contacts and coil separately when relevant. |
| switch | สวิตช์ | switch | preferred | Use for manual or electronic switching depending context. |
| connector | คอนเนกเตอร์ | connector, ขั้วต่อ | contextual | `ขั้วต่อ` is more physical; `คอนเนกเตอร์` common in electronics. |
| terminal | ขั้วต่อ | terminal | contextual | Avoid confusing battery terminal with connector housing. |
| PCB | PCB | แผ่นวงจรพิมพ์ | keep English | First mention can include Thai expansion. |
| heatsink | ฮีตซิงก์ | heat sink, แผ่นระบายความร้อน | contextual | Use in thermal and power electronics lessons. |

## Circuit and measurement language

| English canonical term | Preferred Thai | Useful alternatives / keep English | Status | Notes |
| --- | --- | --- | --- | --- |
| circuit | วงจร | circuit | preferred | Use for electrical path/system. |
| schematic | แผนผังวงจร | schematic | preferred | Use for symbolic circuit drawing. |
| node | โหนด | จุดต่อ | contextual | Use `โหนด` in analysis; `จุดต่อ` for beginners. |
| branch | กิ่งวงจร | branch | preferred | Useful for KCL/current paths. |
| loop | ลูปวงจร | วงรอบ | contextual | `ลูป` is natural; `วงรอบ` may fit formal circuit analysis. |
| open circuit | วงจรเปิด | open circuit | preferred | Means path is broken/not conducting. |
| closed circuit | วงจรปิด | closed circuit | preferred | Means there is a complete conducting path. |
| short circuit | ลัดวงจร | short circuit | safety-sensitive | Strongly avoid making short circuits look harmless in visuals. |
| voltage drop | แรงดันตกคร่อม | voltage drop | preferred | Use across components/paths. |
| measurement | การวัด | measurement | preferred | Distinguish measured value, instrument, and uncertainty. |
| multimeter | มัลติมิเตอร์ | meter | preferred | Add safety warning before measuring live circuits. |
| oscilloscope | ออสซิลโลสโคป | scope | preferred | Ground clip safety needs careful treatment. |
| probe | โพรบ | probe | preferred | Measurement probe. |
| datasheet | datasheet | เอกสารข้อมูล | keep English | `datasheet` is widely used; `เอกสารข้อมูล` is explanatory. |
| rating | พิกัด | rating | preferred | Always state what rating means: voltage, current, power, temperature, category, etc. |
| tolerance | ค่าคลาดเคลื่อน | tolerance | preferred | Use with components and measurements. |
| uncertainty | ความไม่แน่นอนของการวัด | uncertainty | preferred | Metrology lessons should align with NIMT/source review. |

## Safety, installation, and standards-sensitive terms

These terms must be handled more carefully than ordinary concept words. They often depend on installation context, product category, standards family, utility practice, and country.

| English canonical term | Preferred Thai | Useful alternatives / keep English | Status | Notes |
| --- | --- | --- | --- | --- |
| ground | กราวด์ / จุดอ้างอิง | ground, reference | contextual, safety-sensitive | In circuits, ground may be a reference node. It is not automatically earth or a protective conductor. |
| earth | ดิน / สายดิน | earth, earthing | contextual, safety-sensitive | Use when referring to physical earth or protective earthing context. Verify before installation claims. |
| grounding / earthing | การต่อลงดิน | การต่อลงกราวด์ | contextual, safety-sensitive | Choose wording by context. Do not give wiring instructions without source review. |
| neutral | นิวทรัล | สายนิวทรัล | safety-sensitive | Neutral is not the same as protective earth/ground. State this clearly in safety lessons. |
| line / live | สายไลน์ / สายเฟส / สายมีไฟ | live, phase conductor | safety-sensitive | Thai usage varies by setting. Verify for standards/installations. |
| protective earth | สายดินป้องกัน | PE | safety-sensitive, needs source review | Use exact standards wording only after checking current sources. |
| bonding | การต่อฝาก | equipotential bonding | safety-sensitive, needs source review | Confirm exact Thai term from relevant Thai/IEC/EIT sources before publication. |
| breaker | เบรกเกอร์ | circuit breaker, เซอร์กิตเบรกเกอร์ | safety-sensitive | Do not imply breaker selection rules without verified sources. |
| fuse | ฟิวส์ | fuse | safety-sensitive | Explain conceptually before practical ratings. |
| protection device | อุปกรณ์ป้องกัน | protective device | safety-sensitive | Broad term; define what it protects against. |
| residual current device | RCD | เครื่องตัดไฟรั่ว, RCCB, RCBO | safety-sensitive, needs source review | Thai naming varies by product and source; verify before exact claims. |
| leakage current | กระแสรั่ว | leakage current | safety-sensitive | Relevant for safety, insulation, medical, filters, and EMC. |
| electric shock | ไฟฟ้าช็อก | shock | safety-sensitive | Use direct warning language. |
| arc | อาร์ก | electric arc | safety-sensitive | Explain heat, light, plasma, and fire risk where relevant. |
| arc flash | arc flash | อาร์กแฟลช | safety-sensitive, needs source review | High-risk topic; do not publish practical guidance without qualified review. |
| fire | ไฟไหม้ | fire | safety-sensitive | Use with overload, short circuit, batteries, and thermal lessons. |
| standard | มาตรฐาน | standard | contextual | Standards wording must include source family and review date before publication. |
| regulation | กฎระเบียบ / ข้อกำหนด | regulation | safety-sensitive | Avoid legal claims without current official source. |
| code | code / ข้อกำหนด | electrical code | contextual, safety-sensitive | Thailand-specific code wording needs source review. |

## Thailand source-family names

| English / acronym | Thai name / label | Status | Notes |
| --- | --- | --- | --- |
| TISI / TIS | สมอ. / มอก. | needs source review | TISI is the Thai Industrial Standards Institute (สมอ.); TIS identifies a Thai Industrial Standard (มาตรฐาน มอก.). Verify the exact standard number and edition. |
| EIT | วสท. | needs source review | Engineering Institute of Thailand. Useful for Thai professional guidance. |
| MEA | กฟน. | needs source review | Metropolitan Electricity Authority. Use for Bangkok/Nonthaburi/Samut Prakan utility context. |
| PEA | กฟภ. | needs source review | Provincial Electricity Authority. Use for provincial utility context. |
| ERC Thailand | กกพ. | needs source review | Energy Regulatory Commission. Use for energy regulation context. |
| NBTC | กสทช. | needs source review | Telecom, spectrum, RF, broadcast context. |
| NIMT | มว. | needs source review | National Institute of Metrology Thailand; use for measurement traceability/metrology. |
| IEC | IEC | needs source review | Use original standard language carefully; do not quote large standard text. |
| IEEE | IEEE | needs source review | Standards, recommended practices, engineering references. |
| ISO | ISO | needs source review | Cross-domain standards such as quality, safety, risk, and manufacturing. |

## Terms that need extra care soon

These should receive stronger treatment before their lessons become `review-ready`:

- ground, earth, neutral, line/live, protective earth, bonding;
- breaker, fuse, RCD/RCCB/RCBO, overcurrent, leakage current;
- capacitor stored charge, discharge, inrush current;
- battery cell, pack, BMS, C-rate, thermal runaway;
- MOSFET gate charge, safe operating area, avalanche, body diode;
- insulation resistance, creepage, clearance, dielectric strength;
- Thai installation, product standard, utility, and regulatory terms.

## Editorial examples

Good first-use patterns:

- `แรงดันไฟฟ้า (voltage) คือพลังงานต่อประจุหนึ่งหน่วยระหว่างสองจุด`
- `กราวด์ในวงจรนี้เป็นจุดอ้างอิง ไม่ได้แปลว่าต่อลงดินเสมอไป`
- `MOSFET เป็นชื่ออุปกรณ์ที่ควรคงภาษาอังกฤษไว้ แต่สามารถเรียกในคำอธิบายว่า มอสเฟต ได้`
- `บทนี้เป็นการอธิบายแนวคิด ไม่ใช่คู่มือติดตั้งไฟฟ้าจริง`

Avoid:

- using `ground`, `earth`, and `neutral` as if they are the same thing;
- translating every acronym into Thai when the English term is the normal engineering term;
- making standards claims without a source family, exact source, and review date;
- writing Thai as a literal copy of English sentence order when a natural Thai explanation would be clearer.
