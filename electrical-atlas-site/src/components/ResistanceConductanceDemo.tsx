import { useMemo, useState } from "react";
import { estimateResistanceConductance } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Resistance limits current",
    intro:
      "Keep the voltage fixed, then change resistance. Higher resistance lets less current through; lower resistance conducts more and can heat up quickly.",
    voltage: "Voltage",
    resistance: "Resistance",
    conductance: "Conductance",
    current: "Current",
    power: "Power as heat",
    equation: "Current = voltage ÷ resistance",
    highR: "higher resistance",
    lowR: "lower resistance",
    bottleneck: "narrower path",
    heat: "heat",
    transcript:
      "The battery applies a voltage across a resistive path. Increasing resistance narrows the conceptual path and reduces current. Lowering resistance makes the path more conductive; for the same voltage, current and power rise.",
    model:
      "Conceptual model: real resistance comes from charge carriers scattering in materials, geometry, temperature, and device physics. The narrowing path is an intuition, not a literal picture of every resistor.",
  },
  th: {
    title: "ความต้านทานจำกัดกระแส",
    intro:
      "ตรึงแรงดันไว้ แล้วลองเปลี่ยนความต้านทาน ความต้านทานสูงทำให้กระแสน้อยลง ส่วนความต้านทานต่ำทำให้นำกระแสมากขึ้นและร้อนได้เร็ว",
    voltage: "แรงดัน",
    resistance: "ความต้านทาน",
    conductance: "ความนำไฟฟ้า",
    current: "กระแส",
    power: "กำลังที่กลายเป็นความร้อน",
    equation: "กระแส = แรงดัน ÷ ความต้านทาน",
    highR: "ความต้านทานสูงขึ้น",
    lowR: "ความต้านทานต่ำลง",
    bottleneck: "ทางแคบลง",
    heat: "ความร้อน",
    transcript:
      "แบตเตอรี่สร้างแรงดันคร่อมเส้นทางที่มีความต้านทาน เมื่อเพิ่มความต้านทาน เส้นทางในภาพจำจะแคบลงและกระแสลดลง เมื่อลดความต้านทาน เส้นทางนำไฟฟ้ามากขึ้น ที่แรงดันเท่าเดิม กระแสและกำลังจะเพิ่มขึ้น",
    model:
      "แบบจำลองนี้เป็นภาพจำ ความต้านทานจริงเกิดจากการกระเจิงของตัวพาประจุในวัสดุ รูปร่าง อุณหภูมิ และฟิสิกส์ของอุปกรณ์ เส้นทางที่แคบลงไม่ใช่ภาพจริงของตัวต้านทานทุกชนิด",
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

export default function ResistanceConductanceDemo({ locale = "en" }: { locale?: Locale }) {
  const [voltage, setVoltage] = useState(9);
  const [resistanceOhms, setResistanceOhms] = useState(30);
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateResistanceConductance({ voltage, resistanceOhms, maxPowerWatts: 10 }),
    [voltage, resistanceOhms],
  );
  const conductanceMilliSiemens = estimate.conductanceSiemens * 1000;
  const resistanceFraction = (resistanceOhms - 5) / 95;
  const pathHeight = 92 - resistanceFraction * 56;
  const currentFraction = clamp(estimate.currentAmps / 2.4, 0, 1);
  const heatRadius = 28 + estimate.heatLevel * 52;
  const dashLength = 80 + currentFraction * 240;

  function setVoltageFromControl(nextVoltage: number) {
    setVoltage(clamp(nextVoltage, 1, 24));
  }

  function setResistanceFromControl(nextResistance: number) {
    setResistanceOhms(clamp(nextResistance, 5, 100));
  }

  return (
    <section className="interactive-card resistance-demo" aria-labelledby="resistance-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="resistance-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="resistance-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 430" className="circuit-svg">
            <defs>
              <linearGradient id="resistanceGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.5" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="resistanceGlow">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="382" rx="32" className="demo-backplate" />

            <rect x="94" y="150" width="80" height="126" rx="18" className="resistance-battery" />
            <line x1="134" y1="172" x2="134" y2="210" className="battery-long" />
            <line x1="134" y1="230" x2="134" y2="252" className="battery-short" />

            <path d="M174 212 H270" className="resistance-lead" />
            <path d="M550 212 H700" className="resistance-lead" />
            <path
              d={`M270 ${212 - pathHeight / 2} C350 ${160 - pathHeight / 4} 470 ${160 - pathHeight / 4} 550 ${
                212 - pathHeight / 2
              } V${212 + pathHeight / 2} C470 ${264 + pathHeight / 4} 350 ${264 + pathHeight / 4} 270 ${
                212 + pathHeight / 2
              } Z`}
              className="resistance-body"
            />
            <path
              d="M278 212 C350 176 470 176 542 212 C470 248 350 248 278 212"
              className="resistance-current-ribbon"
              style={{
                strokeDasharray: `${dashLength} 420`,
                strokeWidth: 6 + currentFraction * 14,
              }}
            />

            <circle
              cx="410"
              cy="212"
              r={heatRadius}
              className="resistance-heat-halo"
              style={{ opacity: 0.08 + estimate.heatLevel * 0.42 }}
            />
            <text x="385" y="218" className="resistance-symbol">
              R
            </text>

            <text x="250" y="112" className="svg-label">
              {text.highR}
            </text>
            <text x="510" y="330" className="svg-label">
              {text.lowR}
            </text>
            <text x="350" y="374" className="svg-label">
              {text.heat}: {format(estimate.powerWatts, locale, " W", 2)}
            </text>
            <text x="88" y="315" className="svg-label">
              {format(voltage, locale, " V", 1)}
            </text>
            <text x="604" y="184" className="svg-label">
              {format(estimate.currentAmps, locale, " A", 2)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.equation}</p>

          <label className="range-label" htmlFor="resistance-voltage">
            <span>{text.voltage}</span>
            <strong>{format(voltage, locale, " V", 1)}</strong>
          </label>
          <input
            id="resistance-voltage"
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

          <label className="range-label" htmlFor="resistance-ohms">
            <span>{text.resistance}</span>
            <strong>{format(resistanceOhms, locale, " Ω", 1)}</strong>
          </label>
          <input
            id="resistance-ohms"
            type="range"
            min="5"
            max="100"
            step="1"
            value={resistanceOhms}
            onInput={(event) => setResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(resistanceOhms, event.key, event.shiftKey ? 10 : 1, 5, 100);
              if (next !== undefined) {
                event.preventDefault();
                setResistanceFromControl(next);
              }
            }}
          />

          <dl className="metric-grid">
            <div>
              <dt>{text.resistance}</dt>
              <dd>{format(estimate.resistanceOhms, locale, " Ω", 1)}</dd>
            </div>
            <div>
              <dt>{text.conductance}</dt>
              <dd>{format(conductanceMilliSiemens, locale, " mS", 2)}</dd>
            </div>
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.currentAmps, locale, " A", 2)}</dd>
            </div>
            <div>
              <dt>{text.power}</dt>
              <dd>{format(estimate.powerWatts, locale, " W", 2)}</dd>
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
