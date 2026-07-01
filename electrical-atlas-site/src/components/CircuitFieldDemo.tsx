import { useMemo, useState } from "react";
import { normalizeProgress, progressForKey } from "../lib/interaction";
import { estimateLampCircuit } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Battery → switch → lamp: what changes first?",
    intro:
      "Drag the control to close the switch conceptually. Notice that the circuit condition spreads quickly, but electrons in the metal drift only a tiny distance each second.",
    slider: "Field established around circuit",
    open: "Open circuit",
    closing: "Field establishing",
    steady: "Steady DC condition",
    voltage: "Battery voltage",
    resistance: "Lamp resistance",
    current: "Circuit current",
    power: "Lamp power",
    drift: "Estimated electron drift",
    transcript:
      "The switch closes, the electric field pattern around the circuit becomes established, charges throughout the wire begin drifting, and energy is delivered into the lamp filament.",
    model:
      "Simplified model: 9 V battery, 30 Ω hot lamp resistance, 0.5 mm² copper wire. Real lamps heat up, so resistance changes during turn-on.",
  },
  th: {
    title: "แบตเตอรี่ → สวิตช์ → หลอดไฟ: อะไรเปลี่ยนก่อน?",
    intro:
      "ลากตัวควบคุมเพื่อปิดสวิตช์แบบแนวคิด จะเห็นว่าเงื่อนไขของวงจรกระจายตัวเร็วมาก แต่อิเล็กตรอนในโลหะลอยเลื่อนช้ามาก",
    slider: "สนามไฟฟ้าตั้งตัวรอบวงจรแล้ว",
    open: "วงจรเปิด",
    closing: "สนามกำลังตั้งตัว",
    steady: "สภาวะ DC คงตัว",
    voltage: "แรงดันแบตเตอรี่",
    resistance: "ความต้านทานหลอด",
    current: "กระแสในวงจร",
    power: "กำลังไฟฟ้าที่หลอด",
    drift: "ความเร็วดริฟต์ของอิเล็กตรอนโดยประมาณ",
    transcript:
      "เมื่อสวิตช์ปิด รูปแบบสนามไฟฟ้ารอบวงจรเริ่มตั้งตัว ประจุทั่วทั้งสายเริ่มดริฟต์ และพลังงานถูกส่งเข้าสู่ไส้หลอด",
    model:
      "แบบจำลองอย่างง่าย: แบตเตอรี่ 9 V, ความต้านทานหลอดตอนร้อน 30 Ω, สายทองแดง 0.5 mm² ในของจริงหลอดร้อนขึ้น ความต้านทานจึงเปลี่ยนช่วงเริ่มติด",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 3) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
  }).format(value)}${unit}`;
}

export default function CircuitFieldDemo({ locale = "en" }: { locale?: Locale }) {
  const [progress, setProgress] = useState(62);
  const text = copy[locale];
  const fraction = progress / 100;
  const estimate = useMemo(
    () =>
      estimateLampCircuit({
        voltage: 9,
        resistance: 30,
        conductorAreaM2: 0.5e-6,
        fieldProgressFraction: fraction,
      }),
    [fraction],
  );

  const stateLabel = progress === 0 ? text.open : progress < 100 ? text.closing : text.steady;
  const glowOpacity = 0.15 + fraction * 0.85;
  const switchAngle = -28 + fraction * 28;
  const fieldDash = `${Math.max(1, fraction * 620)} 620`;

  function updateProgress(nextProgress: number) {
    setProgress(normalizeProgress(nextProgress));
  }

  return (
    <section className="interactive-card" aria-labelledby="circuit-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="circuit-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="circuit-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 470" className="circuit-svg">
            <defs>
              <linearGradient id="fieldGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="1" stopColor="#9eff6e" />
              </linearGradient>
              <filter id="demoGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="422" rx="32" className="demo-backplate" />
            <path
              d="M145 235 C250 82 570 82 675 235 C570 388 250 388 145 235Z"
              className="field-track"
            />
            <path
              d="M145 235 C250 82 570 82 675 235 C570 388 250 388 145 235Z"
              className="field-progress"
              strokeDasharray={fieldDash}
            />
            <path d="M155 235 H330 M490 235 H670 M670 235 V350 H155 V235" className="wire" />

            <g transform="translate(92 188)">
              <rect x="0" y="0" width="112" height="94" rx="16" className="battery-case" />
              <line x1="39" y1="22" x2="39" y2="72" className="battery-long" />
              <line x1="72" y1="34" x2="72" y2="60" className="battery-short" />
              <text x="29" y="-13" className="svg-label">
                9 V
              </text>
            </g>

            <g transform="translate(330 207)">
              <circle cx="0" cy="28" r="10" className="terminal" />
              <circle cx="160" cy="28" r="10" className="terminal" />
              <line
                x1="8"
                y1="28"
                x2="150"
                y2="28"
                className="switch-blade"
                transform={`rotate(${switchAngle} 8 28)`}
              />
              <text x="48" y="78" className="svg-label">
                {locale === "th" ? "สวิตช์" : "switch"}
              </text>
            </g>

            <g transform="translate(634 178)">
              <circle cx="38" cy="58" r="48" className="lamp-bulb" />
              <circle
                cx="38"
                cy="58"
                r={48 + fraction * 18}
                className="lamp-halo"
                style={{ opacity: glowOpacity }}
              />
              <path d="M16 60c12-27 31 27 44 0" className="filament" />
              <text x="-4" y="132" className="svg-label">
                {locale === "th" ? "หลอดไฟ" : "lamp"}
              </text>
            </g>

            {[220, 292, 364, 436, 508, 580].map((x, index) => (
              <g key={x} transform={`translate(${x + fraction * 18}, 350)`}>
                <circle r="6" className="electron-dot" style={{ opacity: 0.35 + fraction * 0.65 }} />
                <path
                  d="M-14 -15h21"
                  className="electron-arrow"
                  style={{ opacity: index % 2 === 0 ? 0.7 : 0.45 }}
                />
              </g>
            ))}
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{stateLabel}</p>
          <label className="range-label" htmlFor="field-progress">
            <span>{text.slider}</span>
            <strong>{progress}%</strong>
          </label>
          <input
            id="field-progress"
            type="range"
            min="0"
            max="100"
            value={progress}
            onInput={(event) => updateProgress(Number(event.currentTarget.value))}
            onChange={(event) => updateProgress(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const nextProgress = progressForKey(progress, event.key, event.shiftKey);

              if (nextProgress !== undefined) {
                event.preventDefault();
                updateProgress(nextProgress);
              }
            }}
          />

          <dl className="metric-grid">
            <div>
              <dt>{text.voltage}</dt>
              <dd>{format(estimate.voltage, locale, " V", 1)}</dd>
            </div>
            <div>
              <dt>{text.resistance}</dt>
              <dd>{format(estimate.resistance, locale, " Ω", 1)}</dd>
            </div>
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.current, locale, " A", 3)}</dd>
            </div>
            <div>
              <dt>{text.power}</dt>
              <dd>{format(estimate.power, locale, " W", 3)}</dd>
            </div>
          </dl>

          <p className="drift-note">
            {text.drift}:{" "}
            <strong>{format(estimate.driftSpeedMillimetersPerSecond, locale, " mm/s", 4)}</strong>
          </p>
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
