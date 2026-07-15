import { useId, useMemo, useState } from "react";
import { estimateVoltageEnergy } from "../lib/physics";

type Locale = "en" | "th";

type DemoCopy = {
  interactiveLabel: string;
  title: string;
  intro: string;
  symbolKey: string;
  voltage: string;
  charge: string;
  energy: string;
  electrons: string;
  low: string;
  high: string;
  same: string;
  equation: string;
  transcript: string;
  model: string;
  voltageValue: (value: number) => string;
  chargeValue: (value: number) => string;
  energyAnnouncement: (value: number) => string;
  electronCountAnnouncement: (coefficient: number, exponent: number) => string;
};

const copy = {
  en: {
    interactiveLabel: "interactive v0.1",
    title: "Voltage, charge, and potential energy",
    intro:
      "Adjust the potential-difference magnitude and the amount of positive test charge. The result shows |ΔU| = |q| × |ΔV|; direction and charge sign determine whether potential energy rises or falls.",
    symbolKey:
      "Symbol key: |ΔV| is the selected potential-difference magnitude, |q| is the selected charge amount, and |ΔU| is the resulting potential-energy-change magnitude.",
    voltage: "Potential-difference magnitude",
    charge: "Positive test-charge amount",
    energy: "Potential-energy change magnitude",
    electrons: "Electrons with equal charge magnitude",
    low: "lower potential",
    high: "higher potential",
    same: "same potential",
    equation: "|ΔU| = |q| × |ΔV|",
    transcript:
      "The diagram compares two points. With a nonzero setting, the right plate is at higher potential and the left plate is at lower potential. The electric-field arrow points from higher to lower potential. The +q marker represents the same test-charge amount used to compare potential energy at the two points. This model deliberately holds the marker fixed and does not simulate charge motion. At zero potential difference, both plates are labelled at the same potential and the field lines disappear.",
    model:
      "Conceptual model: the positive-charge marker and parallel plates are exaggerated. The displayed |ΔU| is the hypothetical change if the selected |q| moved across the full plate-to-plate |ΔV|; the marker itself stays fixed because this is not a motion simulation. These numbers are not safety thresholds for a real system.",
    voltageValue: (value: number) => `${value} volts of potential-difference magnitude`,
    chargeValue: (value: number) => `${value} microcoulombs of positive test charge`,
    energyAnnouncement: (value: number) =>
      `Potential-energy-change magnitude: ${value} microjoules`,
    electronCountAnnouncement: (coefficient: number, exponent: number) =>
      `${coefficient} times ten to the power of ${exponent} electrons`,
  },
  th: {
    interactiveLabel: "สื่อโต้ตอบ v0.1",
    title: "แรงดัน ประจุ และพลังงานศักย์ไฟฟ้า",
    intro:
      "ปรับขนาดความต่างศักย์และปริมาณของประจุทดสอบบวกในแบบจำลอง แล้วดูขนาดการเปลี่ยนแปลงพลังงานศักย์ |ΔU| = |q| × |ΔV| ส่วนทิศทางและชนิดประจุเป็นตัวกำหนดว่าพลังงานศักย์เพิ่มขึ้นหรือลดลง",
    symbolKey:
      "สัญลักษณ์: |ΔV| คือขนาดความต่างศักย์ที่เลือก |q| คือปริมาณประจุที่เลือก และ |ΔU| คือขนาดการเปลี่ยนแปลงพลังงานศักย์ที่คำนวณได้",
    voltage: "ขนาดความต่างศักย์",
    charge: "ปริมาณประจุทดสอบบวก",
    energy: "ขนาดการเปลี่ยนแปลงพลังงานศักย์",
    electrons: "จำนวนอิเล็กตรอนที่มีขนาดประจุรวมเท่ากัน",
    low: "ศักย์ต่ำกว่า",
    high: "ศักย์สูงกว่า",
    same: "ศักย์เท่ากัน",
    equation: "|ΔU| = |q| × |ΔV|",
    transcript:
      "ภาพนี้เปรียบเทียบจุดสองจุด เมื่อค่าความต่างศักย์ไม่เป็นศูนย์ แผ่นด้านขวาอยู่ที่ศักย์สูงกว่าและแผ่นด้านซ้ายอยู่ที่ศักย์ต่ำกว่า ลูกศรสนามไฟฟ้าชี้จากศักย์สูงไปศักย์ต่ำ สัญลักษณ์ +q แทนปริมาณประจุทดสอบเดียวกันที่ใช้เปรียบเทียบพลังงานศักย์ระหว่างจุดทั้งสอง แบบจำลองตรึงสัญลักษณ์ไว้ที่ตำแหน่งเดิมและไม่ได้จำลองการเคลื่อนที่ของประจุ เมื่อความต่างศักย์เป็นศูนย์ แผ่นทั้งสองจะแสดงว่าศักย์เท่ากันและเส้นสนามจะหายไป",
    model:
      "แบบจำลองนี้ขยายขนาดสัญลักษณ์แทนประจุทดสอบบวกและแผ่นคู่ให้เห็นชัด ค่า |ΔU| ที่แสดงคือการเปลี่ยนแปลงสมมุติหากประจุ |q| ที่เลือกเคลื่อนผ่านความต่างศักย์ |ΔV| เต็มช่วงระหว่างแผ่น แบบจำลองตรึงสัญลักษณ์ไว้เพราะไม่ได้จำลองการเคลื่อนที่ และค่าตัวเลขเหล่านี้ไม่ใช่เกณฑ์ความปลอดภัยของระบบจริง",
    voltageValue: (value: number) => `ขนาดความต่างศักย์ ${value} โวลต์`,
    chargeValue: (value: number) => `ประจุทดสอบบวก ${value} ไมโครคูลอมบ์`,
    energyAnnouncement: (value: number) =>
      `ขนาดการเปลี่ยนแปลงพลังงานศักย์ ${value} ไมโครจูล`,
    electronCountAnnouncement: (coefficient: number, exponent: number) =>
      `${coefficient} คูณสิบยกกำลัง ${exponent} อิเล็กตรอน`,
  },
} satisfies Record<Locale, DemoCopy>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 3) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 1e6 ? "compact" : "standard",
  }).format(value)}${unit}`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function scientificParts(value: number, locale: Locale) {
  const exponent = value === 0 ? 0 : Math.floor(Math.log10(Math.abs(value)));
  const coefficient = value / 10 ** exponent;

  return {
    coefficient: Number(coefficient.toFixed(2)),
    displayCoefficient: new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
      maximumFractionDigits: 2,
    }).format(coefficient),
    exponent,
  };
}

export default function VoltageEnergyDemo({ locale = "en" }: { locale?: Locale }) {
  const [voltage, setVoltage] = useState(9);
  const [chargeMicroCoulombs, setChargeMicroCoulombs] = useState(10);
  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const instanceId = `voltage-demo-${rawId}`;
  const titleId = `${instanceId}-title`;
  const voltageControlId = `${instanceId}-voltage`;
  const chargeControlId = `${instanceId}-charge`;
  const fieldArrowId = `${instanceId}-field-arrow`;
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateVoltageEnergy({ voltage, chargeMicroCoulombs }),
    [voltage, chargeMicroCoulombs],
  );
  const maximumVoltage = 24;
  const maximumChargeMicroCoulombs = 25;
  const maximumEnergyMicroJoules = maximumVoltage * maximumChargeMicroCoulombs;
  const voltageFraction = voltage / maximumVoltage;
  const hasPotentialDifference = voltage > 0;
  const chargeRadius = 14 + Math.sqrt(chargeMicroCoulombs) * 4.8;
  const energyBarWidth = clamp(estimate.energyMicroJoules / maximumEnergyMicroJoules, 0, 1) * 330;
  const fieldOpacity = hasPotentialDifference ? 1 : 0;
  const fieldStrokeWidth = 3 + voltageFraction * 3;
  const packetX = 410;
  const electronCount = scientificParts(estimate.electronCount, locale);

  function setVoltageFromControl(nextVoltage: number) {
    setVoltage(clamp(nextVoltage, 0, maximumVoltage));
  }

  function setChargeFromControl(nextCharge: number) {
    setChargeMicroCoulombs(clamp(nextCharge, 1, maximumChargeMicroCoulombs));
  }

  return (
    <section className="interactive-card voltage-demo" aria-labelledby={titleId}>
      <div className="interactive-copy">
        <p className="eyebrow">{text.interactiveLabel}</p>
        <h2 id={titleId}>{text.title}</h2>
        <p>{text.intro}</p>
        <p className="demo-symbol-key">{text.symbolKey}</p>
      </div>

      <div className="voltage-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 430" className="circuit-svg">
            <defs>
              <marker id={fieldArrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2f6f9f" />
              </marker>
            </defs>

            <rect x="24" y="24" width="772" height="382" rx="32" className="demo-backplate" />
            <rect
              x="130"
              y="108"
              width="80"
              height="210"
              rx="20"
              className={`voltage-plate ${hasPotentialDifference ? "low" : "equal"}`}
            />
            <rect
              x="610"
              y="108"
              width="80"
              height="210"
              rx="20"
              className={`voltage-plate ${hasPotentialDifference ? "high" : "equal"}`}
            />
            <path
              d="M600 212 H220"
              className="voltage-field-line"
              markerEnd={`url(#${fieldArrowId})`}
              style={{ opacity: fieldOpacity, stroke: "#2f6f9f", strokeWidth: fieldStrokeWidth }}
            />
            <path
              d="M250 172 C350 122 470 122 570 172"
              className="voltage-field-arc"
              style={{ opacity: fieldOpacity, stroke: "#2f6f9f", strokeWidth: fieldStrokeWidth }}
            />
            <path
              d="M250 252 C350 302 470 302 570 252"
              className="voltage-field-arc"
              style={{ opacity: fieldOpacity, stroke: "#2f6f9f", strokeWidth: fieldStrokeWidth }}
            />

            <circle
              cx={packetX}
              cy="212"
              r={chargeRadius}
              className="charge-packet"
              style={{ opacity: 0.82 + voltageFraction * 0.18 }}
            />
            <text x={packetX - 15} y="221" className="charge-symbol">
              +q
            </text>

            <rect x="245" y="342" width="330" height="18" rx="9" className="energy-bar-track" />
            <rect
              x="245"
              y="342"
              width={energyBarWidth}
              height="18"
              rx="9"
              className="energy-bar-fill"
              style={{ fill: "#b97824" }}
            />

            <text x="105" y="350" className="svg-label">
              {hasPotentialDifference ? text.low : text.same}
            </text>
            <text x="592" y="350" className="svg-label">
              {hasPotentialDifference ? text.high : text.same}
            </text>
            <text x="286" y="78" className="svg-label">
              {format(voltage, locale, " V", 1)}
            </text>
            <text x="285" y="390" className="svg-label">
              {text.equation}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.equation}</p>

          <label className="range-label" htmlFor={voltageControlId}>
            <span>{text.voltage}</span>
            <strong>{format(voltage, locale, " V", 1)}</strong>
          </label>
          <input
            id={voltageControlId}
            type="range"
            min="0"
            max={maximumVoltage}
            step="0.5"
            value={voltage}
            aria-valuetext={text.voltageValue(voltage)}
            onChange={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
          />

          <label className="range-label" htmlFor={chargeControlId}>
            <span>{text.charge}</span>
            <strong>{format(chargeMicroCoulombs, locale, " µC", 1)}</strong>
          </label>
          <input
            id={chargeControlId}
            type="range"
            min="1"
            max={maximumChargeMicroCoulombs}
            step="1"
            value={chargeMicroCoulombs}
            aria-valuetext={text.chargeValue(chargeMicroCoulombs)}
            onChange={(event) => setChargeFromControl(Number(event.currentTarget.value))}
          />

          <dl className="metric-grid">
            <div>
              <dt>{text.voltage}</dt>
              <dd>{format(estimate.voltage, locale, " V", 1)}</dd>
            </div>
            <div>
              <dt>{text.charge}</dt>
              <dd>{format(chargeMicroCoulombs, locale, " µC", 1)}</dd>
            </div>
            <div>
              <dt>{text.energy}</dt>
              <dd>
                <output htmlFor={`${voltageControlId} ${chargeControlId}`} aria-live="polite" aria-atomic="true">
                  <span className="visually-hidden">{text.energyAnnouncement(estimate.energyMicroJoules)}</span>
                  <span aria-hidden="true">{format(estimate.energyMicroJoules, locale, " µJ", 2)}</span>
                </output>
              </dd>
            </div>
            <div>
              <dt>{text.electrons}</dt>
              <dd>
                <span aria-hidden="true">{electronCount.displayCoefficient} × 10^{electronCount.exponent}</span>
                <span className="visually-hidden">
                  {text.electronCountAnnouncement(electronCount.coefficient, electronCount.exponent)}
                </span>
              </dd>
            </div>
          </dl>

          <p className="demo-note">{text.model}</p>
        </div>
      </div>

      <details className="visual-transcript">
        <summary>{locale === "th" ? "คำบรรยายภาพ" : "Visual transcript"}</summary>
        <p>{text.transcript}</p>
        <p>{text.model}</p>
      </details>
    </section>
  );
}
