import { useMemo, useState } from "react";
import { calculateOhmsLaw, clamp } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Ohm's law links voltage, current, and resistance",
    intro:
      "Move voltage or resistance and watch the current respond. For an ohmic path, current rises with voltage and falls as resistance increases.",
    voltage: "Voltage",
    resistance: "Resistance",
    current: "Current",
    power: "Power",
    heat: "heat risk",
    equation: "V = I × R",
    currentEquation: "I = V / R",
    voltageEquation: "V = I × R",
    resistanceEquation: "R = V / I",
    moreVoltage: "more voltage pushes more current",
    moreResistance: "more resistance limits current",
    ohmicPath: "ohmic path",
    transcript:
      "The battery creates a voltage across a resistive path. When resistance is fixed, increasing voltage increases current. When voltage is fixed, increasing resistance reduces current. Power rises with both voltage and current, so heat can become the practical limit.",
    model:
      "Conceptual model: this demo assumes a fixed ohmic resistance. Real lamps, diodes, LEDs, MOSFETs, motors, batteries, and hot parts may be nonlinear and need a fuller model.",
  },
  th: {
    title: "กฎของโอห์มเชื่อมแรงดัน กระแส และความต้านทาน",
    intro:
      "ลองปรับแรงดันหรือความต้านทาน แล้วดูว่ากระแสเปลี่ยนอย่างไร สำหรับเส้นทางแบบโอห์ม กระแสจะเพิ่มเมื่อแรงดันเพิ่ม และลดลงเมื่อความต้านทานเพิ่ม",
    voltage: "แรงดัน",
    resistance: "ความต้านทาน",
    current: "กระแส",
    power: "กำลัง",
    heat: "ความเสี่ยงด้านความร้อน",
    equation: "V = I × R",
    currentEquation: "I = V / R",
    voltageEquation: "V = I × R",
    resistanceEquation: "R = V / I",
    moreVoltage: "แรงดันมากขึ้นดันกระแสมากขึ้น",
    moreResistance: "ความต้านทานมากขึ้นจำกัดกระแส",
    ohmicPath: "เส้นทางแบบโอห์ม",
    transcript:
      "แบตเตอรี่สร้างแรงดันคร่อมเส้นทางที่มีความต้านทาน ถ้าความต้านทานคงที่ การเพิ่มแรงดันจะเพิ่มกระแส ถ้าแรงดันคงที่ การเพิ่มความต้านทานจะลดกระแส กำลังเพิ่มตามแรงดันและกระแส ดังนั้นความร้อนจึงมักเป็นขีดจำกัดในการใช้งานจริง",
    model:
      "แบบจำลองนี้ถือว่าความต้านทานคงที่แบบโอห์ม อุปกรณ์จริง เช่น หลอดไส้ ไดโอด LED MOSFET มอเตอร์ แบตเตอรี่ และชิ้นส่วนที่ร้อนขึ้น อาจไม่เป็นเชิงเส้นและต้องใช้แบบจำลองที่ละเอียดกว่า",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 2) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 1e6 ? "compact" : "standard",
  }).format(value)}${unit}`;
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

export default function OhmsLawDemo({ locale = "en" }: { locale?: Locale }) {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(24);
  const text = copy[locale];
  const estimate = useMemo(() => calculateOhmsLaw(voltage, resistance), [voltage, resistance]);
  const currentFraction = clamp(estimate.current / 2.4, 0, 1);
  const voltageFraction = clamp(voltage / 24, 0, 1);
  const resistanceFraction = clamp((resistance - 5) / 115, 0, 1);
  const heatLevel = clamp(estimate.power / 18, 0, 1);
  const resistorWidth = 88 + resistanceFraction * 110;
  const currentStroke = 6 + currentFraction * 16;

  function setVoltageFromControl(nextVoltage: number) {
    setVoltage(clamp(nextVoltage, 1, 24));
  }

  function setResistanceFromControl(nextResistance: number) {
    setResistance(clamp(nextResistance, 5, 120));
  }

  return (
    <section className="interactive-card ohms-demo" aria-labelledby="ohms-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="ohms-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="ohms-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 430" className="circuit-svg">
            <defs>
              <linearGradient id="ohmsGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.55" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="ohmsGlow">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="382" rx="32" className="demo-backplate" />
            <rect x="86" y="150" width="86" height="130" rx="18" className="ohms-battery" />
            <line x1="129" y1="172" x2="129" y2="212" className="battery-long" />
            <line x1="129" y1="230" x2="129" y2="254" className="battery-short" />

            <path d="M172 215 H280" className="ohms-lead" />
            <path d="M540 215 H706" className="ohms-lead" />
            <path
              d={`M${360 - resistorWidth / 2} 180 H${360 + resistorWidth / 2} L${430 + resistorWidth / 2} 215 L${
                360 + resistorWidth / 2
              } 250 H${360 - resistorWidth / 2} L${290 - resistorWidth / 2} 215 Z`}
              className="ohms-resistor"
            />
            <path
              d="M190 215 C300 136 510 136 690 215"
              className="ohms-current-arc"
              style={{ strokeWidth: currentStroke }}
            />
            <circle
              cx="420"
              cy="215"
              r={32 + heatLevel * 70}
              className="ohms-heat-halo"
              style={{ opacity: 0.08 + heatLevel * 0.4 }}
            />

            <text x="408" y="221" className="ohms-equation-text">
              {text.equation}
            </text>
            <text x="80" y="318" className="svg-label">
              {format(voltage, locale, " V", 1)}
            </text>
            <text x="573" y="186" className="svg-label">
              {format(estimate.current, locale, " A", 2)}
            </text>
            <text x="335" y="316" className="svg-label">
              {format(resistance, locale, " Ω", 1)}
            </text>
            <text x="520" y="340" className="svg-label">
              {text.heat}: {format(estimate.power, locale, " W", 2)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.currentEquation}</p>

          <label className="range-label" htmlFor="ohms-voltage">
            <span>{text.voltage}</span>
            <strong>{format(voltage, locale, " V", 1)}</strong>
          </label>
          <input
            id="ohms-voltage"
            type="range"
            min="1"
            max="24"
            step="0.5"
            value={voltage}
            onInput={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setVoltageFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(voltage, event.key, event.shiftKey ? 2 : 0.5, 1, 24);
              if (next !== undefined) {
                event.preventDefault();
                setVoltageFromControl(next);
              }
            }}
          />
          <div className="ohms-meter-bar" aria-hidden="true">
            <span style={{ width: `${voltageFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreVoltage}</p>

          <label className="range-label" htmlFor="ohms-resistance">
            <span>{text.resistance}</span>
            <strong>{format(resistance, locale, " Ω", 1)}</strong>
          </label>
          <input
            id="ohms-resistance"
            type="range"
            min="5"
            max="120"
            step="1"
            value={resistance}
            onInput={(event) => setResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(resistance, event.key, event.shiftKey ? 10 : 1, 5, 120);
              if (next !== undefined) {
                event.preventDefault();
                setResistanceFromControl(next);
              }
            }}
          />
          <div className="ohms-meter-bar resistance-bar" aria-hidden="true">
            <span style={{ width: `${resistanceFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreResistance}</p>

          <dl className="metric-grid">
            <div>
              <dt>{text.voltage}</dt>
              <dd>{format(estimate.voltage, locale, " V", 1)}</dd>
            </div>
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.current, locale, " A", 2)}</dd>
            </div>
            <div>
              <dt>{text.resistance}</dt>
              <dd>{format(estimate.resistance, locale, " Ω", 1)}</dd>
            </div>
            <div>
              <dt>{text.power}</dt>
              <dd>{format(estimate.power, locale, " W", 2)}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="ohms-formula-row" aria-label={locale === "th" ? "รูปแบบสมการ" : "Equation forms"}>
        <span>{text.voltageEquation}</span>
        <span>{text.currentEquation}</span>
        <span>{text.resistanceEquation}</span>
      </div>

      <details className="visual-transcript">
        <summary>{locale === "th" ? "คำบรรยายภาพ" : "Visual transcript"}</summary>
        <p>{text.transcript}</p>
        <p>{text.model}</p>
      </details>
    </section>
  );
}
