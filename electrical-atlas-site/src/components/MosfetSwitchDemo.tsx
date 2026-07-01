import { useMemo, useState } from "react";
import { normalizeProgress, progressForKey } from "../lib/interaction";
import { estimateMosfetSwitch } from "../lib/mosfet";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Gate voltage makes the channel",
    intro:
      "Drag the gate voltage. Below threshold, source and drain are separated. Above threshold, the electric field through the oxide attracts carriers and an electron channel begins to connect them.",
    slider: "Gate-to-source voltage VGS",
    source: "source",
    drain: "drain",
    gate: "gate",
    oxide: "oxide",
    body: "p-type body",
    channel: "electron channel",
    off: "Off: no continuous channel",
    forming: "Channel forming",
    on: "On: low-resistance path",
    vgs: "VGS",
    vth: "threshold",
    current: "drain current",
    resistance: "channel resistance",
    power: "MOSFET heat",
    transcript:
      "The insulated gate does not need steady DC current to control the channel. Its electric field changes the charge distribution below the oxide. When enough mobile electrons collect near the surface, source and drain are connected by a conductive channel.",
    model:
      "Conceptual n-channel enhancement MOSFET model: 5 V supply, 1 kΩ load, 2.5 V threshold, simplified resistance curve. Real devices require datasheet limits, gate charge, temperature, package, and safe operating area checks.",
  },
  th: {
    title: "แรงดันที่เกตสร้างช่องนำกระแส",
    intro:
      "ลองลากแรงดันที่เกต ถ้าต่ำกว่า threshold ขา source และ drain ยังแยกกันอยู่ แต่เมื่อสูงพอ สนามไฟฟ้าผ่านชั้น oxide จะดึงตัวพาประจุมารวมกันจนเกิดช่องอิเล็กตรอนเชื่อมสองฝั่ง",
    slider: "แรงดันเกตเทียบซอร์ส VGS",
    source: "source",
    drain: "drain",
    gate: "gate",
    oxide: "oxide",
    body: "เนื้อสาร p-type",
    channel: "ช่องอิเล็กตรอน",
    off: "ปิด: ยังไม่มีช่องต่อเนื่อง",
    forming: "ช่องกำลังก่อตัว",
    on: "เปิด: ทางนำกระแสความต้านทานต่ำ",
    vgs: "VGS",
    vth: "threshold",
    current: "กระแส drain",
    resistance: "ความต้านทานช่อง",
    power: "ความร้อนที่ MOSFET",
    transcript:
      "เกตถูกฉนวนกั้นไว้ จึงไม่จำเป็นต้องมีกระแส DC ไหลเข้าเกตตลอดเวลาเพื่อควบคุมช่องนำกระแส สนามไฟฟ้าจากเกตเปลี่ยนการกระจายตัวของประจุใต้ชั้น oxide เมื่ออิเล็กตรอนเคลื่อนที่ได้สะสมมากพอใกล้ผิว source และ drain จะถูกเชื่อมด้วยช่องนำกระแส",
    model:
      "แบบจำลองแนวคิดของ n-channel enhancement MOSFET: แหล่งจ่าย 5 V, โหลด 1 kΩ, threshold 2.5 V และเส้นโค้งความต้านทานอย่างง่าย อุปกรณ์จริงต้องตรวจ datasheet, gate charge, อุณหภูมิ, package และ safe operating area",
  },
} satisfies Record<Locale, Record<string, string>>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 2) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits,
  }).format(value)}${unit}`;
}

export default function MosfetSwitchDemo({ locale = "en" }: { locale?: Locale }) {
  const [progress, setProgress] = useState(68);
  const text = copy[locale];
  const gateVoltage = (progress / 100) * 5;
  const estimate = useMemo(() => estimateMosfetSwitch({ gateVoltage }), [gateVoltage]);
  const channelWidth = 24 + estimate.channelFraction * 246;
  const fieldOpacity = 0.14 + estimate.channelFraction * 0.68;
  const channelOpacity = estimate.channelFraction === 0 ? 0.12 : 0.28 + estimate.channelFraction * 0.72;
  const stateLabel = estimate.region === "off" ? text.off : estimate.region === "forming" ? text.forming : text.on;

  function updateProgress(nextProgress: number) {
    setProgress(normalizeProgress(nextProgress));
  }

  return (
    <section className="interactive-card mosfet-demo" aria-labelledby="mosfet-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="mosfet-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="mosfet-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 470" className="circuit-svg">
            <defs>
              <linearGradient id="mosfetFieldGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#64f4ff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#9eff6e" stopOpacity="0.2" />
              </linearGradient>
              <filter id="mosfetGlow">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="422" rx="32" className="demo-backplate" />
            <rect x="170" y="245" width="480" height="120" rx="16" className="mosfet-body" />
            <rect x="215" y="224" width="110" height="82" rx="14" className="mosfet-nplus" />
            <rect x="495" y="224" width="110" height="82" rx="14" className="mosfet-nplus" />
            <rect x="330" y="205" width="160" height="18" rx="8" className="mosfet-oxide" />
            <rect x="350" y="144" width="120" height="44" rx="10" className="mosfet-gate" />
            <line x1="410" y1="188" x2="410" y2="205" className="mosfet-gate-lead" />

            <g className="mosfet-field" style={{ opacity: fieldOpacity }}>
              {[360, 385, 410, 435, 460].map((x) => (
                <path key={x} d={`M${x} 190 C${x - 15} 220 ${x - 15} 238 ${x} 260`} />
              ))}
            </g>

            <rect
              x={410 - channelWidth / 2}
              y="258"
              width={channelWidth}
              height="24"
              rx="12"
              className="mosfet-channel"
              style={{ opacity: channelOpacity }}
            />

            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <circle
                key={index}
                cx={290 + index * 42}
                cy={270 + (index % 2) * 5}
                r={4 + estimate.channelFraction * 2}
                className="electron-dot"
                style={{ opacity: estimate.channelFraction * 0.95 }}
              />
            ))}

            <path
              d="M255 224 V118 H132"
              className="mosfet-terminal-wire"
              style={{ opacity: 0.35 + estimate.channelFraction * 0.65 }}
            />
            <path
              d="M565 224 V118 H690"
              className="mosfet-terminal-wire"
              style={{ opacity: 0.35 + estimate.channelFraction * 0.65 }}
            />
            <path d="M410 144 V98" className="mosfet-terminal-wire" />

            <text x="120" y="112" className="svg-label">
              {text.source}
            </text>
            <text x="642" y="112" className="svg-label">
              {text.drain}
            </text>
            <text x="382" y="88" className="svg-label">
              {text.gate}
            </text>
            <text x="344" y="238" className="svg-label">
              {text.oxide}
            </text>
            <text x="344" y="348" className="svg-label">
              {text.body}
            </text>
            <text x="330" y="306" className="svg-label" style={{ opacity: 0.3 + estimate.channelFraction * 0.7 }}>
              {text.channel}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{stateLabel}</p>
          <label className="range-label" htmlFor="mosfet-gate-voltage">
            <span>{text.slider}</span>
            <strong>{format(gateVoltage, locale, " V", 2)}</strong>
          </label>
          <input
            id="mosfet-gate-voltage"
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
              <dt>{text.vgs}</dt>
              <dd>{format(estimate.gateVoltage, locale, " V", 2)}</dd>
            </div>
            <div>
              <dt>{text.vth}</dt>
              <dd>{format(estimate.thresholdVoltage, locale, " V", 2)}</dd>
            </div>
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.drainCurrentMilliAmps, locale, " mA", 3)}</dd>
            </div>
            <div>
              <dt>{text.resistance}</dt>
              <dd>{format(estimate.channelResistanceOhms, locale, " Ω", 1)}</dd>
            </div>
          </dl>

          <p className="drift-note">
            {text.power}: <strong>{format(estimate.mosfetPowerMilliWatts, locale, " mW", 3)}</strong>
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
