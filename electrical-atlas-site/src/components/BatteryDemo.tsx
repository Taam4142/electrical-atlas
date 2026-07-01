import { useMemo, useState } from "react";
import { clamp, estimateBatteryLoad } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "A battery stores chemical energy and holds a voltage between two terminals",
    intro:
      "Move state of charge, load current, and internal resistance. Watch terminal voltage sag, load power, internal heat, and runtime change.",
    stateOfCharge: "State of charge",
    loadCurrent: "Load current",
    internalResistance: "Internal resistance",
    capacity: "Capacity",
    terminalVoltage: "Terminal voltage",
    openCircuitVoltage: "Open-circuit voltage",
    remainingEnergy: "Remaining energy",
    runtime: "Estimated runtime",
    loadPower: "Load power",
    internalHeat: "Internal heat",
    cRate: "C-rate",
    chemicalEnergy: "chemical energy",
    voltageSag: "voltage sag",
    load: "load",
    battery: "battery",
    moreCurrent: "more current gives more power, but also more voltage sag and heat",
    moreResistance: "higher internal resistance wastes more energy inside the battery",
    moreCharge: "higher state of charge gives more available energy and a higher open-circuit voltage in this model",
    transcript:
      "The battery's chemistry maintains a voltage between terminals. The external load draws current. Some voltage is lost inside the battery because real batteries have internal resistance. The useful terminal voltage powers the load; internal loss becomes heat.",
    model:
      "Conceptual model: open-circuit voltage is simplified, capacity is treated as usable watt-hours, and internal resistance is fixed. Real batteries depend on chemistry, temperature, age, current history, protection circuits, and charger behavior.",
  },
  th: {
    title: "แบตเตอรี่เก็บพลังงานเคมีและรักษาแรงดันระหว่างสองขั้ว",
    intro:
      "ลองปรับ state of charge กระแสโหลด และความต้านทานภายใน แล้วดูว่าแรงดันปลายขั้วตก กำลังโหลด ความร้อนภายใน และ runtime เปลี่ยนอย่างไร",
    stateOfCharge: "ประจุคงเหลือ",
    loadCurrent: "กระแสโหลด",
    internalResistance: "ความต้านทานภายใน",
    capacity: "ความจุ",
    terminalVoltage: "แรงดันปลายขั้ว",
    openCircuitVoltage: "แรงดันขณะไม่ต่อโหลด",
    remainingEnergy: "พลังงานที่เหลือ",
    runtime: "เวลาทำงานประมาณ",
    loadPower: "กำลังที่โหลด",
    internalHeat: "ความร้อนภายใน",
    cRate: "C-rate",
    chemicalEnergy: "พลังงานเคมี",
    voltageSag: "แรงดันตก",
    load: "โหลด",
    battery: "แบตเตอรี่",
    moreCurrent: "กระแสมากขึ้นให้กำลังมากขึ้น แต่ทำให้แรงดันตกและเกิดความร้อนมากขึ้นด้วย",
    moreResistance: "ความต้านทานภายในสูงขึ้น ทำให้พลังงานสูญเสียในแบตเตอรี่มากขึ้น",
    moreCharge: "ประจุคงเหลือมากขึ้นทำให้มีพลังงานใช้งานมากขึ้น และในโมเดลนี้แรงดันขณะไม่ต่อโหลดสูงขึ้น",
    transcript:
      "เคมีภายในแบตเตอรี่ช่วยรักษาแรงดันระหว่างขั้วทั้งสอง โหลดภายนอกดึงกระแสออกไป แบตเตอรี่จริงมีความต้านทานภายใน จึงมีแรงดันบางส่วนตกอยู่ข้างใน แรงดันที่เหลือที่ปลายขั้วจ่ายพลังงานให้โหลด ส่วนการสูญเสียภายในกลายเป็นความร้อน",
    model:
      "แบบจำลองนี้ทำให้แรงดันขณะไม่ต่อโหลดเรียบง่าย ถือว่าความจุเป็น watt-hour ที่ใช้งานได้ และถือว่าความต้านทานภายในคงที่ แบตเตอรี่จริงขึ้นกับเคมี อุณหภูมิ อายุ ประวัติกระแส วงจรป้องกัน และพฤติกรรมของเครื่องชาร์จ",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 2) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
    notation: Math.abs(value) >= 100_000 ? "compact" : "standard",
  }).format(value)}${unit}`;
}

function formatHours(hours: number, locale: Locale) {
  if (!Number.isFinite(hours)) {
    return locale === "th" ? "ไม่จำกัดในโมเดลนี้" : "no load";
  }

  if (hours < 1) {
    return format(hours * 60, locale, locale === "th" ? " นาที" : " min", 1);
  }

  return format(hours, locale, locale === "th" ? " ชั่วโมง" : " h", 2);
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

export default function BatteryDemo({ locale = "en" }: { locale?: Locale }) {
  const [stateOfChargePercent, setStateOfChargePercent] = useState(80);
  const [loadCurrent, setLoadCurrent] = useState(0.7);
  const [internalResistance, setInternalResistance] = useState(0.16);
  const [capacityAh, setCapacityAh] = useState(2.5);
  const text = copy[locale];
  const estimate = useMemo(
    () =>
      estimateBatteryLoad({
        nominalVoltage: 3.7,
        capacityAh,
        stateOfCharge: stateOfChargePercent / 100,
        loadCurrentAmps: loadCurrent,
        internalResistanceOhms: internalResistance,
        maxSafeCRate: 2,
      }),
    [capacityAh, internalResistance, loadCurrent, stateOfChargePercent],
  );
  const chargeFraction = stateOfChargePercent / 100;
  const currentFraction = clamp(loadCurrent / 5);
  const resistanceFraction = clamp((internalResistance - 0.02) / 0.98);
  const capacityFraction = clamp((capacityAh - 0.5) / 9.5);
  const energyFillHeight = 36 + chargeFraction * 188;
  const currentStroke = 7 + currentFraction * 22;
  const sagWidth = clamp(estimate.voltageSag / 1.5) * 120;

  function setStateOfChargeFromControl(nextValue: number) {
    setStateOfChargePercent(clamp(nextValue, 5, 100));
  }

  function setLoadCurrentFromControl(nextValue: number) {
    setLoadCurrent(clamp(nextValue, 0.05, 5));
  }

  function setInternalResistanceFromControl(nextValue: number) {
    setInternalResistance(clamp(nextValue, 0.02, 1));
  }

  function setCapacityFromControl(nextValue: number) {
    setCapacityAh(clamp(nextValue, 0.5, 10));
  }

  return (
    <section className="interactive-card battery-demo" aria-labelledby="battery-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="battery-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="battery-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 450" className="circuit-svg">
            <defs>
              <linearGradient id="batteryGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.55" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="batteryGlow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="402" rx="32" className="demo-backplate" />

            <rect x="92" y="92" width="210" height="270" rx="30" className="battery-shell" />
            <rect x="156" y="64" width="82" height="36" rx="12" className="battery-cap" />
            <rect
              x="112"
              y={342 - energyFillHeight}
              width="170"
              height={energyFillHeight}
              rx="22"
              className="battery-energy-fill"
            />
            <text x="197" y="382" className="svg-label" textAnchor="middle">
              {text.chemicalEnergy}
            </text>
            <text x="197" y="136" className="battery-percent-text">
              {format(stateOfChargePercent, locale, "%", 0)}
            </text>

            <path d="M302 226 C386 156 500 156 590 226" className="battery-current-flow" style={{ strokeWidth: currentStroke }} />
            <path d="M590 226 C500 296 386 296 302 226" className="battery-return-flow" />

            <circle
              cx="360"
              cy="292"
              r={30 + estimate.stressLevel * 76}
              className="battery-internal-heat"
              style={{ opacity: 0.06 + estimate.stressLevel * 0.36 }}
            />
            <rect x="326" y="278" width={70 + sagWidth} height="30" rx="15" className="battery-sag-bar" />
            <text x="372" y="334" className="svg-label" textAnchor="middle">
              {text.voltageSag}: {format(estimate.voltageSag, locale, " V", 2)}
            </text>

            <rect x="590" y="168" width="140" height="116" rx="24" className="battery-load" />
            <text x="660" y="218" className="battery-load-symbol">
              {text.load}
            </text>
            <text x="660" y="250" className="battery-equation-text">
              {format(estimate.loadPowerWatts, locale, " W", 2)}
            </text>

            <text x="396" y="118" className="svg-label" textAnchor="middle">
              {text.terminalVoltage}: {format(estimate.terminalVoltage, locale, " V", 2)}
            </text>
            <text x="594" y="348" className="svg-label" textAnchor="middle">
              {text.runtime}: {formatHours(estimate.runtimeHours, locale)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.openCircuitVoltage}: {format(estimate.openCircuitVoltage, locale, " V", 2)}</p>

          <label className="range-label" htmlFor="battery-soc">
            <span>{text.stateOfCharge}</span>
            <strong>{format(stateOfChargePercent, locale, "%", 0)}</strong>
          </label>
          <input
            id="battery-soc"
            type="range"
            min="5"
            max="100"
            step="1"
            value={stateOfChargePercent}
            onInput={(event) => setStateOfChargeFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setStateOfChargeFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(stateOfChargePercent, event.key, event.shiftKey ? 10 : 1, 5, 100);
              if (next !== undefined) {
                event.preventDefault();
                setStateOfChargeFromControl(next);
              }
            }}
          />
          <div className="battery-meter-bar" aria-hidden="true">
            <span style={{ width: `${chargeFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreCharge}</p>

          <label className="range-label" htmlFor="battery-current">
            <span>{text.loadCurrent}</span>
            <strong>{format(loadCurrent, locale, " A", 2)}</strong>
          </label>
          <input
            id="battery-current"
            type="range"
            min="0.05"
            max="5"
            step="0.05"
            value={loadCurrent}
            onInput={(event) => setLoadCurrentFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setLoadCurrentFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(loadCurrent, event.key, event.shiftKey ? 0.5 : 0.05, 0.05, 5);
              if (next !== undefined) {
                event.preventDefault();
                setLoadCurrentFromControl(next);
              }
            }}
          />
          <div className="battery-meter-bar current-bar" aria-hidden="true">
            <span style={{ width: `${currentFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreCurrent}</p>

          <label className="range-label" htmlFor="battery-resistance">
            <span>{text.internalResistance}</span>
            <strong>{format(internalResistance, locale, " Ω", 2)}</strong>
          </label>
          <input
            id="battery-resistance"
            type="range"
            min="0.02"
            max="1"
            step="0.01"
            value={internalResistance}
            onInput={(event) => setInternalResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setInternalResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(internalResistance, event.key, event.shiftKey ? 0.1 : 0.01, 0.02, 1);
              if (next !== undefined) {
                event.preventDefault();
                setInternalResistanceFromControl(next);
              }
            }}
          />
          <div className="battery-meter-bar resistance-bar" aria-hidden="true">
            <span style={{ width: `${resistanceFraction * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreResistance}</p>

          <label className="range-label" htmlFor="battery-capacity">
            <span>{text.capacity}</span>
            <strong>{format(capacityAh, locale, " Ah", 1)}</strong>
          </label>
          <input
            id="battery-capacity"
            type="range"
            min="0.5"
            max="10"
            step="0.1"
            value={capacityAh}
            onInput={(event) => setCapacityFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setCapacityFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(capacityAh, event.key, event.shiftKey ? 1 : 0.1, 0.5, 10);
              if (next !== undefined) {
                event.preventDefault();
                setCapacityFromControl(next);
              }
            }}
          />
          <div className="battery-meter-bar capacity-bar" aria-hidden="true">
            <span style={{ width: `${capacityFraction * 100}%` }} />
          </div>

          <dl className="metric-grid">
            <div>
              <dt>{text.terminalVoltage}</dt>
              <dd>{format(estimate.terminalVoltage, locale, " V", 2)}</dd>
            </div>
            <div>
              <dt>{text.loadPower}</dt>
              <dd>{format(estimate.loadPowerWatts, locale, " W", 2)}</dd>
            </div>
            <div>
              <dt>{text.remainingEnergy}</dt>
              <dd>{format(estimate.remainingEnergyWh, locale, " Wh", 2)}</dd>
            </div>
            <div>
              <dt>{text.internalHeat}</dt>
              <dd>{format(estimate.internalHeatWatts, locale, " W", 2)}</dd>
            </div>
            <div>
              <dt>{text.runtime}</dt>
              <dd>{formatHours(estimate.runtimeHours, locale)}</dd>
            </div>
            <div>
              <dt>{text.cRate}</dt>
              <dd>{format(estimate.cRate, locale, " C", 2)}</dd>
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
