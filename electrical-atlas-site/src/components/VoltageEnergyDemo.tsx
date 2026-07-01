import { useMemo, useState } from "react";
import { estimateVoltageEnergy } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Voltage as energy per charge",
    intro:
      "Move a packet of charge through different voltage differences. The same charge receives more energy when the voltage is higher.",
    voltage: "Voltage difference",
    charge: "Charge packet",
    energy: "Energy transferred",
    electrons: "Equivalent electrons",
    low: "lower potential",
    high: "higher potential",
    equation: "Energy = voltage × charge",
    transcript:
      "The left plate is a lower-potential point and the right plate is a higher-potential point. Raising the voltage increases the energy difference between the two points. Moving charge across that difference transfers energy.",
    model:
      "Conceptual model: the charge packet is exaggerated. Real circuits involve fields throughout the conductors and components, not little balls traveling through empty space.",
  },
  th: {
    title: "แรงดันคือพลังงานต่อประจุ",
    intro:
      "ลองขยับแพ็กเก็ตประจุผ่านความต่างศักย์หลายค่า ประจุเท่าเดิมจะได้รับพลังงานมากขึ้นเมื่อแรงดันสูงขึ้น",
    voltage: "ความต่างศักย์",
    charge: "แพ็กเก็ตประจุ",
    energy: "พลังงานที่ถ่ายโอน",
    electrons: "เทียบเป็นจำนวนอิเล็กตรอน",
    low: "ศักย์ต่ำกว่า",
    high: "ศักย์สูงกว่า",
    equation: "พลังงาน = แรงดัน × ประจุ",
    transcript:
      "แผ่นด้านซ้ายแทนจุดที่ศักย์ต่ำกว่า แผ่นด้านขวาแทนจุดที่ศักย์สูงกว่า เมื่อเพิ่มแรงดัน ความต่างพลังงานระหว่างสองจุดจะมากขึ้น การย้ายประจุข้ามความต่างนี้คือการถ่ายโอนพลังงาน",
    model:
      "แบบจำลองนี้ทำให้แพ็กเก็ตประจุดูใหญ่เกินจริง ในวงจรจริง สนามไฟฟ้าอยู่รอบตัวนำและชิ้นส่วน ไม่ใช่ลูกประจุวิ่งผ่านที่ว่างแบบตรง ๆ",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 3) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 1e6 ? "compact" : "standard",
  }).format(value)}${unit}`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function valueForKey(current: number, key: string, step: number, min: number, max: number) {
  switch (key) {
    case "Home":
      return min;
    case "End":
      return max;
    case "ArrowLeft":
    case "ArrowDown":
      return clamp(current - step, min, max);
    case "ArrowRight":
    case "ArrowUp":
      return clamp(current + step, min, max);
    case "PageDown":
      return clamp(current - step * 5, min, max);
    case "PageUp":
      return clamp(current + step * 5, min, max);
    default:
      return undefined;
  }
}

export default function VoltageEnergyDemo({ locale = "en" }: { locale?: Locale }) {
  const [voltage, setVoltage] = useState(9);
  const [chargeMicroCoulombs, setChargeMicroCoulombs] = useState(10);
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateVoltageEnergy({ voltage, chargeMicroCoulombs }),
    [voltage, chargeMicroCoulombs],
  );
  const voltageFraction = voltage / 24;
  const chargeRadius = 14 + Math.sqrt(chargeMicroCoulombs) * 4.8;
  const energyBarWidth = clamp(estimate.energyMicroJoules / 240, 0, 1) * 100;
  const packetX = 220 + voltageFraction * 310;

  function setVoltageFromControl(nextVoltage: number) {
    setVoltage(clamp(nextVoltage, 0, 24));
  }

  function setChargeFromControl(nextCharge: number) {
    setChargeMicroCoulombs(clamp(nextCharge, 1, 25));
  }

  return (
    <section className="interactive-card voltage-demo" aria-labelledby="voltage-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="voltage-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="voltage-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 430" className="circuit-svg">
            <defs>
              <linearGradient id="voltageGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="voltageGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="382" rx="32" className="demo-backplate" />
            <rect x="130" y="108" width="80" height="210" rx="20" className="voltage-plate low" />
            <rect x="610" y="108" width="80" height="210" rx="20" className="voltage-plate high" />
            <path d="M220 212 H600" className="voltage-field-line" />
            <path d="M250 172 C350 122 470 122 570 172" className="voltage-field-arc" />
            <path d="M250 252 C350 302 470 302 570 252" className="voltage-field-arc" />

            <circle
              cx={packetX}
              cy="212"
              r={chargeRadius}
              className="charge-packet"
              style={{ opacity: 0.72 + voltageFraction * 0.28 }}
            />
            <text x={packetX - 7} y="221" className="charge-symbol">
              q
            </text>

            <rect x="245" y="342" width="330" height="18" rx="9" className="energy-bar-track" />
            <rect x="245" y="342" width={`${energyBarWidth * 3.3}`} height="18" rx="9" className="energy-bar-fill" />

            <text x="105" y="350" className="svg-label">
              {text.low}
            </text>
            <text x="592" y="350" className="svg-label">
              {text.high}
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

          <label className="range-label" htmlFor="voltage-difference">
            <span>{text.voltage}</span>
            <strong>{format(voltage, locale, " V", 1)}</strong>
          </label>
          <input
            id="voltage-difference"
            type="range"
            min="0"
            max="24"
            step="0.5"
            value={voltage}
            onInput={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(voltage, event.key, event.shiftKey ? 2 : 0.5, 0, 24);
              if (next !== undefined) {
                event.preventDefault();
                setVoltageFromControl(next);
              }
            }}
          />

          <label className="range-label" htmlFor="charge-packet">
            <span>{text.charge}</span>
            <strong>{format(chargeMicroCoulombs, locale, " µC", 1)}</strong>
          </label>
          <input
            id="charge-packet"
            type="range"
            min="1"
            max="25"
            step="1"
            value={chargeMicroCoulombs}
            onInput={(event) => setChargeFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setChargeFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(chargeMicroCoulombs, event.key, event.shiftKey ? 5 : 1, 1, 25);
              if (next !== undefined) {
                event.preventDefault();
                setChargeFromControl(next);
              }
            }}
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
              <dd>{format(estimate.energyMicroJoules, locale, " µJ", 2)}</dd>
            </div>
            <div>
              <dt>{text.electrons}</dt>
              <dd>{format(estimate.electronCount, locale, "", 2)}</dd>
            </div>
          </dl>
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
