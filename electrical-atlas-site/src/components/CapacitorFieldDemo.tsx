import { useId, useMemo, useState } from "react";
import { estimateCapacitorState } from "../lib/capacitorModel";
import { rangeValueForKey } from "../lib/interaction";
import { formatLocalizedNumber } from "../lib/numberFormatting";
import "../styles/capacitor-demo.css";

type Locale = "en" | "th";

type DemoCopy = {
  interactiveLabel: string;
  title: string;
  intro: string;
  equation: string;
  capacitance: string;
  voltageMagnitude: string;
  plateCharge: string;
  storedEnergy: string;
  netCharge: string;
  positivePlate: string;
  negativePlate: string;
  dielectric: string;
  electricField: string;
  zeroField: string;
  zeroCoulombs: string;
  transcriptLabel: string;
  transcript: string;
  model: string;
  capacitanceValue: (value: string) => string;
  voltageValue: (value: string) => string;
  stateAnnouncement: (capacitance: string, voltage: string, charge: string, energy: string) => string;
};

const copy = {
  en: {
    interactiveLabel: "interactive v0.1",
    title: "See what capacitance and voltage determine",
    intro:
      "Set capacitance and voltage magnitude. The model derives the equal-and-opposite plate-charge magnitude and the energy stored in the electric field.",
    equation: "|Q| = C|V|; U = ½C|V|²",
    capacitance: "Capacitance",
    voltageMagnitude: "Voltage magnitude",
    plateCharge: "Charge magnitude on each plate",
    storedEnergy: "Energy stored in the field",
    netCharge: "Net charge of the complete capacitor",
    positivePlate: "left plate (+ reference)",
    negativePlate: "right plate (− reference)",
    dielectric: "dielectric",
    electricField: "electric field",
    zeroField: "zero field in this model",
    zeroCoulombs: "0 C",
    transcriptLabel: "Visual transcript",
    transcript:
      "Two conducting plates face each other with a dielectric between them. The left plate carries the symbol +Q and the right plate carries −Q whenever the voltage is above zero. Field arrows point from the positive plate toward the negative plate. Small paired signs inside the dielectric represent polarization; they do not show free electrons crossing the gap. Increasing capacitance or voltage increases the derived plate-charge magnitude. Energy grows linearly with capacitance and with the square of voltage. The equal and opposite plate charges add to zero for the complete modeled device.",
    model:
      "Model boundary: this is an ideal, linear, constant-capacitance model of an initially neutral two-terminal capacitor. The inputs are C and |V|; Q and U are calculated, not independent controls. The plate marks and dielectric dipoles are symbols, not particle positions or scale. No electron crosses the dielectric in this picture. Geometry, fringing, leakage, ESR, ESL, dielectric loss or breakdown, tolerances, temperature, charging time, the external circuit, and safe working ratings are not simulated.",
    capacitanceValue: (value) => `${value} microfarads`,
    voltageValue: (value) => `${value} volts`,
    stateAnnouncement: (capacitance, voltage, charge, energy) =>
      `Capacitance ${capacitance} microfarads. Voltage magnitude ${voltage} volts. Charge magnitude on each plate ${charge} microcoulombs. Stored energy ${energy} microjoules. Net charge of the complete capacitor: zero coulombs.`,
  },
  th: {
    interactiveLabel: "สื่อโต้ตอบ v0.1",
    title: "ดูว่าความจุไฟฟ้าและแรงดันกำหนดอะไร",
    intro:
      "กำหนดค่าความจุไฟฟ้าและขนาดแรงดัน แล้วแบบจำลองจะคำนวณขนาดประจุที่เท่ากันแต่เครื่องหมายตรงข้ามบนแผ่นทั้งสอง และพลังงานที่เก็บในสนามไฟฟ้า",
    equation: "|Q| = C|V|; U = ½C|V|²",
    capacitance: "ความจุไฟฟ้า",
    voltageMagnitude: "ขนาดแรงดัน",
    plateCharge: "ขนาดประจุบนแต่ละแผ่น",
    storedEnergy: "พลังงานที่เก็บในสนาม",
    netCharge: "ประจุสุทธิของตัวเก็บประจุทั้งชิ้น",
    positivePlate: "แผ่นซ้าย (อ้างอิง +)",
    negativePlate: "แผ่นขวา (อ้างอิง −)",
    dielectric: "ไดอิเล็กทริก",
    electricField: "สนามไฟฟ้า",
    zeroField: "สนามเป็นศูนย์ในแบบจำลองนี้",
    zeroCoulombs: "0 C",
    transcriptLabel: "คำบรรยายภาพ",
    transcript:
      "แผ่นตัวนำสองแผ่นหันเข้าหากันโดยมีไดอิเล็กทริกคั่นกลาง เมื่อแรงดันมากกว่าศูนย์ แผ่นซ้ายแสดงสัญลักษณ์ +Q และแผ่นขวาแสดง −Q ลูกศรสนามชี้จากแผ่นบวกไปยังแผ่นลบ เครื่องหมายที่จับคู่กันภายในไดอิเล็กทริกแทนการเกิดโพลาไรเซชัน ไม่ได้แสดงอิเล็กตรอนอิสระเคลื่อนข้ามช่องว่าง เมื่อเพิ่มความจุไฟฟ้าหรือแรงดัน ขนาดประจุบนแผ่นที่คำนวณได้จะเพิ่มขึ้น พลังงานเพิ่มตามความจุไฟฟ้าและเพิ่มตามกำลังสองของแรงดัน ประจุบนแผ่นที่เท่ากันแต่เครื่องหมายตรงข้ามรวมกันเป็นศูนย์สำหรับอุปกรณ์ทั้งชิ้นในแบบจำลองนี้",
    model:
      "ขอบเขตแบบจำลอง: ภาพนี้ใช้ตัวเก็บประจุอุดมคติแบบเชิงเส้นที่มีค่าความจุคงที่และเริ่มต้นเป็นกลางทางไฟฟ้า ข้อมูลนำเข้าคือ C และ |V| ส่วน Q และ U เป็นค่าที่คำนวณ ไม่ใช่ตัวควบคุมอิสระ เครื่องหมายประจุบนแผ่นและไดโพลในไดอิเล็กทริกเป็นเพียงสัญลักษณ์ ไม่ใช่ตำแหน่งหรือขนาดจริงของอนุภาค และภาพนี้ไม่มีอิเล็กตรอนเคลื่อนข้ามไดอิเล็กทริก แบบจำลองไม่รวมผลจากรูปทรง สนามขอบ การรั่ว ESR, ESL การสูญเสียหรือการพังทลายของไดอิเล็กทริก ค่าคลาดเคลื่อน อุณหภูมิ เวลาในการประจุ วงจรภายนอก หรือค่าพิกัดการทำงานที่ปลอดภัย",
    capacitanceValue: (value) => `${value} ไมโครฟารัด`,
    voltageValue: (value) => `${value} โวลต์`,
    stateAnnouncement: (capacitance, voltage, charge, energy) =>
      `ความจุไฟฟ้า ${capacitance} ไมโครฟารัด ขนาดแรงดัน ${voltage} โวลต์ ขนาดประจุบนแต่ละแผ่น ${charge} ไมโครคูลอมบ์ พลังงานที่เก็บ ${energy} ไมโครจูล ประจุสุทธิของตัวเก็บประจุทั้งชิ้นเท่ากับศูนย์คูลอมบ์`,
  },
} satisfies Record<Locale, DemoCopy>;

const MIN_CAPACITANCE_MICROFARADS = 1;
const MAX_CAPACITANCE_MICROFARADS = 100;
const MIN_VOLTAGE_VOLTS = 0;
const MAX_VOLTAGE_VOLTS = 12;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export default function CapacitorFieldDemo({ locale = "en" }: { locale?: Locale }) {
  const [capacitanceMicrofarads, setCapacitanceMicrofarads] = useState(10);
  const [voltageMagnitudeVolts, setVoltageMagnitudeVolts] = useState(5);
  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const instanceId = `capacitor-demo-${rawId}`;
  const titleId = `${instanceId}-title`;
  const capacitanceControlId = `${instanceId}-capacitance`;
  const capacitanceLabelId = `${instanceId}-capacitance-label`;
  const voltageControlId = `${instanceId}-voltage`;
  const voltageLabelId = `${instanceId}-voltage-label`;
  const fieldArrowId = `${instanceId}-field-arrow`;
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateCapacitorState({ capacitanceMicrofarads, voltageMagnitudeVolts }),
    [capacitanceMicrofarads, voltageMagnitudeVolts],
  );

  const formattedCapacitance = formatLocalizedNumber(capacitanceMicrofarads, locale, "", 1);
  const formattedVoltage = formatLocalizedNumber(voltageMagnitudeVolts, locale, "", 1);
  const formattedCharge = formatLocalizedNumber(estimate.chargeMicroCoulombs, locale, "", 1);
  const formattedEnergy = formatLocalizedNumber(estimate.energyMicroJoules, locale, "", 3);
  const chargeFraction = estimate.chargeMicroCoulombs / (MAX_CAPACITANCE_MICROFARADS * MAX_VOLTAGE_VOLTS);
  const fieldFraction = voltageMagnitudeVolts / MAX_VOLTAGE_VOLTS;
  const hasSeparatedCharge = voltageMagnitudeVolts > 0;
  const symbolOpacity = hasSeparatedCharge ? 0.35 + chargeFraction * 0.65 : 0;
  const fieldOpacity = hasSeparatedCharge ? 0.2 + fieldFraction * 0.8 : 0;
  const fieldStrokeWidth = 2.5 + fieldFraction * 3.5;

  function setCapacitanceFromControl(nextValue: number) {
    setCapacitanceMicrofarads(
      clamp(nextValue, MIN_CAPACITANCE_MICROFARADS, MAX_CAPACITANCE_MICROFARADS),
    );
  }

  function setVoltageFromControl(nextValue: number) {
    setVoltageMagnitudeVolts(clamp(nextValue, MIN_VOLTAGE_VOLTS, MAX_VOLTAGE_VOLTS));
  }

  return (
    <section className="interactive-card capacitor-demo" aria-labelledby={titleId}>
      <div className="interactive-copy">
        <p className="eyebrow">{text.interactiveLabel}</p>
        <h2 id={titleId}>{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="capacitor-demo-grid">
        <div className="demo-stage capacitor-demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 440" className="capacitor-demo-svg">
            <defs>
              <marker
                id={fieldArrowId}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" className="capacitor-field-arrowhead" />
              </marker>
            </defs>

            <rect x="24" y="24" width="772" height="392" rx="32" className="capacitor-backplate" />
            <path d="M90 220 H190" className="capacitor-lead" />
            <path d="M630 220 H730" className="capacitor-lead" />
            <rect
              x="190"
              y="82"
              width="34"
              height="276"
              rx="12"
              className={`capacitor-plate ${hasSeparatedCharge ? "capacitor-plate-positive" : "capacitor-plate-neutral"}`}
            />
            <rect
              x="596"
              y="82"
              width="34"
              height="276"
              rx="12"
              className={`capacitor-plate ${hasSeparatedCharge ? "capacitor-plate-negative" : "capacitor-plate-neutral"}`}
            />
            <rect x="310" y="100" width="200" height="240" rx="20" className="capacitor-dielectric" />

            {[142, 220, 298].map((y) => (
              <line
                key={y}
                x1="244"
                y1={y}
                x2="576"
                y2={y}
                className="capacitor-field-line"
                markerEnd={`url(#${fieldArrowId})`}
                style={{ opacity: fieldOpacity, strokeWidth: fieldStrokeWidth }}
              />
            ))}

            {[148, 220, 292].map((y) => (
              <g key={y} className="capacitor-dipole" style={{ opacity: fieldOpacity }}>
                <circle cx="372" cy={y} r="19" className="capacitor-dipole-negative" />
                <text x="365" y={y + 7} className="capacitor-dipole-sign">−</text>
                <line x1="393" y1={y} x2="427" y2={y} className="capacitor-dipole-link" />
                <circle cx="448" cy={y} r="19" className="capacitor-dipole-positive" />
                <text x="440" y={y + 7} className="capacitor-dipole-sign">+</text>
              </g>
            ))}

            <text
              x="148"
              y="235"
              className="capacitor-plate-charge capacitor-plate-charge-positive"
              style={{ opacity: symbolOpacity }}
            >
              +Q
            </text>
            <text
              x="648"
              y="235"
              className="capacitor-plate-charge capacitor-plate-charge-negative"
              style={{ opacity: symbolOpacity }}
            >
              −Q
            </text>

            <text x="100" y="390" className="capacitor-svg-label">{text.positivePlate}</text>
            <text x="603" y="390" className="capacitor-svg-label">{text.negativePlate}</text>
            <text x="351" y="374" className="capacitor-svg-label">{text.dielectric}</text>
            <text x="340" y="65" className="capacitor-svg-label">
              {hasSeparatedCharge ? text.electricField : text.zeroField}
            </text>
          </svg>
          <div className="capacitor-visual-key" aria-hidden="true">
            <span>{text.positivePlate}</span>
            <span>{text.dielectric}</span>
            <span>{text.negativePlate}</span>
            <span>{hasSeparatedCharge ? text.electricField : text.zeroField}</span>
          </div>
        </div>

        <div className="demo-controls capacitor-demo-controls">
          <p className="state-pill">{text.equation}</p>

          <label className="range-label" htmlFor={capacitanceControlId}>
            <span id={capacitanceLabelId}>{text.capacitance}</span>
            <strong>{formattedCapacitance} µF</strong>
          </label>
          <input
            id={capacitanceControlId}
            type="range"
            min={MIN_CAPACITANCE_MICROFARADS}
            max={MAX_CAPACITANCE_MICROFARADS}
            step="1"
            value={capacitanceMicrofarads}
            aria-labelledby={capacitanceLabelId}
            aria-valuetext={text.capacitanceValue(formattedCapacitance)}
            onInput={(event) => setCapacitanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setCapacitanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const nextValue = rangeValueForKey(
                capacitanceMicrofarads,
                event.key,
                event.shiftKey ? 10 : 1,
                MIN_CAPACITANCE_MICROFARADS,
                MAX_CAPACITANCE_MICROFARADS,
              );
              if (nextValue !== undefined) {
                event.preventDefault();
                setCapacitanceFromControl(nextValue);
              }
            }}
          />

          <label className="range-label" htmlFor={voltageControlId}>
            <span id={voltageLabelId}>{text.voltageMagnitude}</span>
            <strong>{formattedVoltage} V</strong>
          </label>
          <input
            id={voltageControlId}
            type="range"
            min={MIN_VOLTAGE_VOLTS}
            max={MAX_VOLTAGE_VOLTS}
            step="0.5"
            value={voltageMagnitudeVolts}
            aria-labelledby={voltageLabelId}
            aria-valuetext={text.voltageValue(formattedVoltage)}
            onInput={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const nextValue = rangeValueForKey(
                voltageMagnitudeVolts,
                event.key,
                event.shiftKey ? 2 : 0.5,
                MIN_VOLTAGE_VOLTS,
                MAX_VOLTAGE_VOLTS,
              );
              if (nextValue !== undefined) {
                event.preventDefault();
                setVoltageFromControl(nextValue);
              }
            }}
          />

          <dl className="metric-grid capacitor-metric-grid">
            <div>
              <dt>{text.plateCharge}</dt>
              <dd>{formattedCharge} µC</dd>
            </div>
            <div>
              <dt>{text.storedEnergy}</dt>
              <dd>{formattedEnergy} µJ</dd>
            </div>
            <div className="capacitor-net-charge">
              <dt>{text.netCharge}</dt>
              <dd>{text.zeroCoulombs}</dd>
            </div>
          </dl>

          <output
            className="visually-hidden"
            htmlFor={`${capacitanceControlId} ${voltageControlId}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {text.stateAnnouncement(formattedCapacitance, formattedVoltage, formattedCharge, formattedEnergy)}
          </output>

          <p className="demo-note">{text.model}</p>
        </div>
      </div>

      <details className="visual-transcript">
        <summary>{text.transcriptLabel}</summary>
        <p>{text.transcript}</p>
        <p>{text.model}</p>
      </details>
    </section>
  );
}
