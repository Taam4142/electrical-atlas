import { useMemo, useState } from "react";
import { estimateCurrentFlow } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Current as charge crossing a point",
    intro:
      "Choose a current and a time window. The demo counts how much charge would pass one cross-section of a conductor in that time.",
    current: "Current",
    time: "Time window",
    charge: "Charge that passed",
    electrons: "Equivalent electrons",
    drift: "Estimated electron drift",
    equation: "Current = charge ÷ time",
    gate: "count here",
    inWord: "in",
    direction: "conventional current direction",
    transcript:
      "The vertical gate marks one cross-section of a wire. Increasing current means more charge crosses that gate each second. The individual electron drift speed remains slow compared with the signal and field response through the circuit.",
    model:
      "Conceptual model: the dots represent packets of mobile charge carriers. In metal wires, electrons drift opposite conventional current direction, while circuit analysis usually draws current in the direction positive charge would move.",
  },
  th: {
    title: "กระแสคือประจุที่ผ่านจุดหนึ่งต่อเวลา",
    intro:
      "เลือกค่ากระแสและช่วงเวลา แล้วดูว่ามีประจุผ่านหน้าตัดของตัวนำไปเท่าไรในช่วงเวลานั้น",
    current: "กระแส",
    time: "ช่วงเวลา",
    charge: "ประจุที่ผ่าน",
    electrons: "เทียบเป็นจำนวนอิเล็กตรอน",
    drift: "ความเร็ว drift โดยประมาณ",
    equation: "กระแส = ประจุ ÷ เวลา",
    gate: "นับตรงนี้",
    inWord: "ใน",
    direction: "ทิศกระแสตามแบบแผน",
    transcript:
      "เส้นตั้งคือหน้าตัดหนึ่งจุดของสายไฟ เมื่อเพิ่มกระแส จะมีประจุผ่านจุดนี้มากขึ้นในแต่ละวินาที แต่ความเร็ว drift ของอิเล็กตรอนแต่ละตัวในโลหะยังช้ามากเมื่อเทียบกับการตอบสนองของสนามและสัญญาณในวงจร",
    model:
      "แบบจำลองนี้ใช้จุดแทนกลุ่มประจุเคลื่อนที่ ในสายโลหะ อิเล็กตรอน drift สวนทางกับทิศกระแสตามแบบแผน ส่วนการวิเคราะห์วงจรมักวาดกระแสตามทิศที่ประจุบวกจะเคลื่อนที่",
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

export default function CurrentFlowDemo({ locale = "en" }: { locale?: Locale }) {
  const [currentAmps, setCurrentAmps] = useState(1.5);
  const [timeMilliseconds, setTimeMilliseconds] = useState(1000);
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateCurrentFlow({ currentAmps, timeMilliseconds, conductorAreaMm2: 0.5 }),
    [currentAmps, timeMilliseconds],
  );
  const currentFraction = currentAmps / 5;
  const markerCount = Math.max(3, Math.round(4 + currentAmps * 2.4));
  const markers = Array.from({ length: markerCount }, (_, index) => {
    const spacing = 470 / Math.max(1, markerCount - 1);
    return {
      id: index,
      x: 170 + index * spacing,
      y: 186 + (index % 3 - 1) * 24,
      radius: 8 + currentFraction * 7,
    };
  });
  const currentStrokeWidth = 9 + currentFraction * 16;
  const chargeBarWidth = clamp(estimate.chargeCoulombs / 6, 0, 1) * 330;

  function setCurrentFromControl(nextCurrent: number) {
    setCurrentAmps(clamp(nextCurrent, 0, 5));
  }

  function setTimeFromControl(nextTime: number) {
    setTimeMilliseconds(clamp(nextTime, 100, 2000));
  }

  return (
    <section className="interactive-card current-demo" aria-labelledby="current-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="current-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="current-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 430" className="circuit-svg">
            <defs>
              <linearGradient id="currentGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#9eff6e" />
                <stop offset="0.55" stopColor="#64f4ff" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="currentGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="382" rx="32" className="demo-backplate" />
            <path d="M100 212 C210 112 320 112 410 212 S610 312 720 212" className="current-wire-shadow" />
            <path
              d="M100 212 C210 112 320 112 410 212 S610 312 720 212"
              className="current-wire"
              style={{ strokeWidth: currentStrokeWidth }}
            />

            <line x1="410" y1="88" x2="410" y2="332" className="current-count-gate" />
            <rect x="344" y="70" width="132" height="36" rx="18" className="current-gate-label" />
            <text x="360" y="94" className="svg-label">
              {text.gate}
            </text>

            {markers.map((marker) => (
              <circle
                key={marker.id}
                cx={marker.x}
                cy={marker.y}
                r={marker.radius}
                className="current-charge-dot"
                style={{ opacity: 0.42 + currentFraction * 0.45 }}
              />
            ))}

            <path d="M520 120 H650" className="current-direction-arrow" />
            <path d="M650 120 l-22 -14 v28 z" className="current-direction-head" />
            <text x="456" y="154" className="svg-label">
              {text.direction}
            </text>

            <rect x="245" y="342" width="330" height="18" rx="9" className="charge-count-track" />
            <rect x="245" y="342" width={chargeBarWidth} height="18" rx="9" className="charge-count-fill" />
            <text x="250" y="390" className="svg-label">
              {format(estimate.chargeCoulombs, locale, " C", 2)} {text.inWord}{" "}
              {format(estimate.timeSeconds, locale, " s", 1)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{text.equation}</p>

          <label className="range-label" htmlFor="current-amps">
            <span>{text.current}</span>
            <strong>{format(currentAmps, locale, " A", 1)}</strong>
          </label>
          <input
            id="current-amps"
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={currentAmps}
            onInput={(event) => setCurrentFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setCurrentFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(currentAmps, event.key, event.shiftKey ? 0.5 : 0.1, 0, 5);
              if (next !== undefined) {
                event.preventDefault();
                setCurrentFromControl(next);
              }
            }}
          />

          <label className="range-label" htmlFor="current-time-window">
            <span>{text.time}</span>
            <strong>{format(timeMilliseconds, locale, " ms", 0)}</strong>
          </label>
          <input
            id="current-time-window"
            type="range"
            min="100"
            max="2000"
            step="100"
            value={timeMilliseconds}
            onInput={(event) => setTimeFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setTimeFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(timeMilliseconds, event.key, event.shiftKey ? 500 : 100, 100, 2000);
              if (next !== undefined) {
                event.preventDefault();
                setTimeFromControl(next);
              }
            }}
          />

          <dl className="metric-grid">
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.currentAmps, locale, " A", 1)}</dd>
            </div>
            <div>
              <dt>{text.time}</dt>
              <dd>{format(estimate.timeSeconds, locale, " s", 1)}</dd>
            </div>
            <div>
              <dt>{text.charge}</dt>
              <dd>{format(estimate.chargeMilliCoulombs, locale, " mC", 1)}</dd>
            </div>
            <div>
              <dt>{text.drift}</dt>
              <dd>{format(estimate.driftSpeedMillimetersPerSecond, locale, " mm/s", 3)}</dd>
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
