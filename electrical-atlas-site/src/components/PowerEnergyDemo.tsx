import { useMemo, useState } from "react";
import { clamp, estimatePowerEnergy } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Power is the rate; energy is the accumulated amount",
    intro:
      "Set voltage, current, and time. Power changes immediately with voltage and current; energy keeps accumulating while that power flows.",
    voltage: "Voltage",
    current: "Current",
    duration: "Time",
    power: "Power",
    energy: "Energy",
    charge: "Charge moved",
    heat: "heat stress",
    source: "source",
    load: "load",
    powerBeam: "power flow",
    energyTank: "energy used",
    formulaPower: "P = V × I",
    formulaEnergy: "E = P × t",
    formulaWh: "Wh = J / 3600",
    moreVoltage: "more voltage at the same current means more power",
    moreCurrent: "more current at the same voltage means more power",
    moreTime: "time does not change power; it grows total energy",
    transcript:
      "The source creates voltage and the load takes current. Their product is power, the rate of energy transfer. If that same power continues for more time, the accumulated energy increases. Some energy may become light, motion, sound, stored chemistry, or heat.",
    model:
      "Conceptual model: this demo assumes steady DC voltage and current. Real loads can change with temperature, battery voltage, startup current, switching waveforms, and control systems.",
  },
  th: {
    title: "กำลังคืออัตรา ส่วนพลังงานคือปริมาณที่สะสม",
    intro:
      "ลองปรับแรงดัน กระแส และเวลา กำลังเปลี่ยนทันทีตามแรงดันและกระแส ส่วนพลังงานจะสะสมต่อไปตราบใดที่กำลังยังไหลอยู่",
    voltage: "แรงดัน",
    current: "กระแส",
    duration: "เวลา",
    power: "กำลัง",
    energy: "พลังงาน",
    charge: "ประจุที่เคลื่อนที่",
    heat: "ภาระความร้อน",
    source: "แหล่งจ่าย",
    load: "โหลด",
    powerBeam: "การไหลของกำลัง",
    energyTank: "พลังงานที่ใช้",
    formulaPower: "P = V × I",
    formulaEnergy: "E = P × t",
    formulaWh: "Wh = J / 3600",
    moreVoltage: "แรงดันมากขึ้นที่กระแสเท่าเดิม หมายถึงกำลังมากขึ้น",
    moreCurrent: "กระแสมากขึ้นที่แรงดันเท่าเดิม หมายถึงกำลังมากขึ้น",
    moreTime: "เวลาไม่เปลี่ยนค่ากำลัง แต่ทำให้พลังงานรวมเพิ่มขึ้น",
    transcript:
      "แหล่งจ่ายสร้างแรงดัน และโหลดรับกระแส ผลคูณของสองค่านี้คือกำลัง หรืออัตราการถ่ายเทพลังงาน ถ้ากำลังเดิมไหลนานขึ้น พลังงานที่สะสมก็เพิ่มขึ้น พลังงานนั้นอาจกลายเป็นแสง การเคลื่อนที่ เสียง พลังงานเคมีที่เก็บไว้ หรือความร้อน",
    model:
      "แบบจำลองนี้ถือว่าแรงดันและกระแส DC คงที่ โหลดจริงอาจเปลี่ยนตามอุณหภูมิ แรงดันแบตเตอรี่ กระแสตอนเริ่มทำงาน waveform จากการสวิตช์ และระบบควบคุม",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 2) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 100_000 ? "compact" : "standard",
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

export default function PowerEnergyDemo({ locale = "en" }: { locale?: Locale }) {
  const [voltage, setVoltage] = useState(12);
  const [current, setCurrent] = useState(0.5);
  const [duration, setDuration] = useState(60);
  const text = copy[locale];
  const estimate = useMemo(
    () =>
      estimatePowerEnergy({
        voltage,
        currentAmps: current,
        durationSeconds: duration,
        maxPowerWatts: 60,
      }),
    [voltage, current, duration],
  );
  const voltageFraction = clamp(voltage / 24, 0, 1);
  const currentFraction = clamp(current / 3, 0, 1);
  const durationFraction = clamp(duration / 600, 0, 1);
  const powerFraction = clamp(estimate.powerWatts / 72, 0, 1);
  const energyFraction = clamp(estimate.energyJoules / 12_000, 0, 1);
  const energyFillHeight = 32 + energyFraction * 178;
  const beamStroke = 8 + powerFraction * 24;

  function setVoltageFromControl(nextVoltage: number) {
    setVoltage(clamp(nextVoltage, 1, 24));
  }

  function setCurrentFromControl(nextCurrent: number) {
    setCurrent(clamp(nextCurrent, 0.05, 3));
  }

  function setDurationFromControl(nextDuration: number) {
    setDuration(clamp(nextDuration, 1, 600));
  }

  return (
    <section className="interactive-card power-energy-demo" aria-labelledby="power-energy-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="power-energy-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="power-energy-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 440" className="circuit-svg">
            <defs>
              <linearGradient id="powerEnergyGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.55" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="powerEnergyGlow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="392" rx="32" className="demo-backplate" />

            <rect x="78" y="156" width="118" height="138" rx="22" className="power-energy-source" />
            <line x1="137" y1="178" x2="137" y2="220" className="battery-long" />
            <line x1="137" y1="236" x2="137" y2="266" className="battery-short" />
            <text x="137" y="326" className="svg-label" textAnchor="middle">
              {text.source}
            </text>

            <path d="M198 225 C292 150 406 150 500 225" className="power-energy-flow" style={{ strokeWidth: beamStroke }} />
            <path d="M198 225 C292 300 406 300 500 225" className="power-energy-return" />
            <text x="348" y="136" className="svg-label" textAnchor="middle">
              {text.powerBeam}: {format(estimate.powerWatts, locale, " W", 1)}
            </text>

            <circle
              cx="586"
              cy="224"
              r={54 + estimate.heatLevel * 92}
              className="power-energy-heat"
              style={{ opacity: 0.06 + estimate.heatLevel * 0.38 }}
            />
            <rect x="508" y="156" width="156" height="138" rx="28" className="power-energy-load" />
            <text x="586" y="215" className="power-energy-load-symbol">
              {text.load}
            </text>
            <text x="586" y="248" className="power-energy-equation-text">
              {text.formulaPower}
            </text>

            <rect x="694" y="104" width="54" height="236" rx="18" className="power-energy-tank" />
            <rect
              x="701"
              y={333 - energyFillHeight}
              width="40"
              height={energyFillHeight}
              rx="12"
              className="power-energy-fill"
            />
            <text x="721" y="374" className="svg-label" textAnchor="middle">
              {text.energyTank}
            </text>

            <text x="78" y="92" className="svg-label">
              {format(voltage, locale, " V", 1)}
            </text>
            <text x="204" y="92" className="svg-label">
              {format(current, locale, " A", 2)}
            </text>
            <text x="416" y="356" className="svg-label" textAnchor="middle">
              {format(estimate.energyJoules, locale, " J", 0)} / {format(estimate.energyWattHours, locale, " Wh", 3)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.formulaPower}</p>

          <label className="range-label" htmlFor="power-energy-voltage">
            <span>{text.voltage}</span>
            <strong>{format(voltage, locale, " V", 1)}</strong>
          </label>
          <input
            id="power-energy-voltage"
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
          <div className="power-energy-meter-bar" aria-hidden="true">
            <span style={{ width: `${voltageFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreVoltage}</p>

          <label className="range-label" htmlFor="power-energy-current">
            <span>{text.current}</span>
            <strong>{format(current, locale, " A", 2)}</strong>
          </label>
          <input
            id="power-energy-current"
            type="range"
            min="0.05"
            max="3"
            step="0.05"
            value={current}
            onInput={(event) => setCurrentFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setCurrentFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(current, event.key, event.shiftKey ? 0.5 : 0.05, 0.05, 3);
              if (next !== undefined) {
                event.preventDefault();
                setCurrentFromControl(next);
              }
            }}
          />
          <div className="power-energy-meter-bar current-bar" aria-hidden="true">
            <span style={{ width: `${currentFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreCurrent}</p>

          <label className="range-label" htmlFor="power-energy-duration">
            <span>{text.duration}</span>
            <strong>{format(duration, locale, " s", 0)}</strong>
          </label>
          <input
            id="power-energy-duration"
            type="range"
            min="1"
            max="600"
            step="1"
            value={duration}
            onInput={(event) => setDurationFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setDurationFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(duration, event.key, event.shiftKey ? 60 : 10, 1, 600);
              if (next !== undefined) {
                event.preventDefault();
                setDurationFromControl(next);
              }
            }}
          />
          <div className="power-energy-meter-bar time-bar" aria-hidden="true">
            <span style={{ width: `${durationFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreTime}</p>

          <dl className="metric-grid">
            <div>
              <dt>{text.power}</dt>
              <dd>{format(estimate.powerWatts, locale, " W", 2)}</dd>
            </div>
            <div>
              <dt>{text.energy}</dt>
              <dd>{format(estimate.energyJoules, locale, " J", 0)}</dd>
            </div>
            <div>
              <dt>{text.energy}</dt>
              <dd>{format(estimate.energyWattHours, locale, " Wh", 3)}</dd>
            </div>
            <div>
              <dt>{text.charge}</dt>
              <dd>{format(estimate.chargeCoulombs, locale, " C", 1)}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="power-energy-formula-row" aria-label={locale === "th" ? "รูปแบบสมการ" : "Equation forms"}>
        <span>{text.formulaPower}</span>
        <span>{text.formulaEnergy}</span>
        <span>{text.formulaWh}</span>
      </div>

      <details className="visual-transcript">
        <summary>{locale === "th" ? "คำบรรยายภาพ" : "Visual transcript"}</summary>
        <p>{text.transcript}</p>
        <p>{text.model}</p>
      </details>
    </section>
  );
}
