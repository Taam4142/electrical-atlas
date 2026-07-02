import { useMemo, useState } from "react";
import { clamp } from "../lib/physics";
import { estimateSwitchContact, type SwitchLoadType } from "../lib/switches";

type Locale = "en" | "th";

const loadTypes: SwitchLoadType[] = ["signal", "resistive", "inductive"];

const copy = {
  en: {
    title: "A switch is a controlled gap; contacts decide whether current has a path",
    intro:
      "Move the contact through open, touching, bouncing, closed, and opening states. Then change load current, contact resistance, and load type to see why real switches have ratings.",
    motion: "Contact motion",
    loadCurrent: "Load current",
    contactResistance: "Contact resistance",
    loadType: "Load type",
    open: "open",
    touching: "touching",
    bouncing: "bouncing",
    closed: "closed",
    opening: "opening",
    signal: "signal",
    resistive: "resistive",
    inductive: "inductive",
    source: "source",
    load: "load",
    fixedContact: "fixed contact",
    movingContact: "moving contact",
    contactGap: "contact gap",
    current: "Current through switch",
    contactHeat: "Contact heat",
    continuity: "Continuity",
    bounce: "Bounce pulses",
    arcRisk: "Arc risk",
    noArc: "low in this model",
    arcWarning: "opening under load: arc risk",
    motionNote:
      "Real contacts do not jump from perfect open to perfect closed. They touch at microscopic high spots, may chatter, and need enough force to settle.",
    currentNote:
      "More current makes contact resistance matter quickly because contact heating follows I²R.",
    resistanceNote:
      "A dirty, oxidized, loose, or worn contact behaves like a higher resistance contact.",
    typeNote:
      "Inductive loads such as coils and motors can keep current trying to flow when the contacts open, so interruption is harder.",
    transcript:
      "The source, switch, and load form a loop. When the contacts are open, the loop is broken. When they close, current can pass through a small real contact resistance. During bounce, the loop rapidly makes and breaks. During opening, an energetic load can create an arc across the separating gap.",
    model:
      "Conceptual low-voltage model only. It is not installation advice and does not prove a switch is safe for mains, vehicles, batteries, motors, or industrial control panels.",
  },
  th: {
    title: "สวิตช์คือช่องว่างที่ควบคุมได้ และหน้าสัมผัสเป็นตัวตัดสินว่ากระแสมีทางเดินหรือไม่",
    intro:
      "ลองเลื่อนหน้าสัมผัสผ่านสถานะวงจรเปิด เริ่มแตะ bounce ปิดสนิท และกำลังเปิด แล้วปรับกระแสโหลด ความต้านทานหน้าสัมผัส และชนิดโหลด เพื่อเห็นว่าทำไมสวิตช์จริงต้องมีพิกัด",
    motion: "การเคลื่อนที่ของหน้าสัมผัส",
    loadCurrent: "กระแสโหลด",
    contactResistance: "ความต้านทานหน้าสัมผัส",
    loadType: "ชนิดโหลด",
    open: "เปิด",
    touching: "เริ่มแตะ",
    bouncing: "เด้ง",
    closed: "ปิด",
    opening: "กำลังเปิด",
    signal: "สัญญาณ",
    resistive: "โหลดตัวต้านทาน",
    inductive: "โหลดเหนี่ยวนำ",
    source: "แหล่งจ่าย",
    load: "โหลด",
    fixedContact: "หน้าสัมผัสคงที่",
    movingContact: "หน้าสัมผัสเคลื่อนที่",
    contactGap: "ช่องว่างหน้าสัมผัส",
    current: "กระแสผ่านสวิตช์",
    contactHeat: "ความร้อนที่หน้าสัมผัส",
    continuity: "ความต่อเนื่อง",
    bounce: "จังหวะ bounce",
    arcRisk: "ความเสี่ยงอาร์ก",
    noArc: "ต่ำในโมเดลนี้",
    arcWarning: "กำลังเปิดขณะมีโหลด: มีความเสี่ยงอาร์ก",
    motionNote:
      "หน้าสัมผัสจริงไม่ได้เปลี่ยนจากเปิดสมบูรณ์เป็นปิดสมบูรณ์ทันที มันแตะกันที่จุดเล็ก ๆ ระดับผิวโลหะ อาจเด้ง และต้องมีแรงกดพอให้เสถียร",
    currentNote:
      "กระแสมากขึ้นทำให้ความต้านทานหน้าสัมผัสสำคัญเร็วมาก เพราะความร้อนที่หน้าสัมผัสตาม I²R",
    resistanceNote:
      "หน้าสัมผัสที่สกปรก ออกซิไดซ์ หลวม หรือสึก จะเหมือนมีความต้านทานหน้าสัมผัสสูงขึ้น",
    typeNote:
      "โหลดเหนี่ยวนำ เช่น คอยล์และมอเตอร์ สามารถพยายามรักษากระแสให้ไหลต่อเมื่อหน้าสัมผัสเปิด ทำให้การตัดกระแสยากขึ้น",
    transcript:
      "แหล่งจ่าย สวิตช์ และโหลดรวมกันเป็นลูป เมื่อหน้าสัมผัสเปิด ลูปถูกตัด เมื่อหน้าสัมผัสปิด กระแสไหลผ่านความต้านทานหน้าสัมผัสจริงที่มีค่าน้อยได้ ระหว่าง bounce ลูปจะต่อและตัดเร็ว ๆ และระหว่างกำลังเปิด โหลดที่มีพลังงานสะสมอาจทำให้เกิดอาร์กข้ามช่องว่างหน้าสัมผัส",
    model:
      "นี่เป็นโมเดลแนวคิดแรงดันต่ำเท่านั้น ไม่ใช่คำแนะนำการติดตั้ง และไม่พิสูจน์ว่าสวิตช์ปลอดภัยสำหรับไฟบ้าน ยานพาหนะ แบตเตอรี่ มอเตอร์ หรือตู้ควบคุมอุตสาหกรรม",
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

function stateLabel(state: keyof typeof copy.en, locale: Locale) {
  return copy[locale][state];
}

export default function SwitchesContactsDemo({ locale = "en" }: { locale?: Locale }) {
  const [positionPercent, setPositionPercent] = useState(66);
  const [loadCurrent, setLoadCurrent] = useState(1.2);
  const [contactResistanceMilliOhms, setContactResistanceMilliOhms] = useState(35);
  const [loadType, setLoadType] = useState<SwitchLoadType>("resistive");
  const text = copy[locale];
  const estimate = useMemo(
    () =>
      estimateSwitchContact({
        positionPercent,
        loadCurrentAmps: loadCurrent,
        contactResistanceMilliOhms,
        loadType,
      }),
    [contactResistanceMilliOhms, loadCurrent, loadType, positionPercent],
  );

  const closingProgress = clamp(positionPercent / 58, 0, 1);
  const openingProgress = clamp((positionPercent - 82) / 18, 0, 1);
  const settledClosed = positionPercent >= 58 && positionPercent < 82;
  const movingContactX = settledClosed ? 455 : 315 + closingProgress * 140 - openingProgress * 82;
  const gap = Math.max(0, 455 - movingContactX);
  const currentStroke = 4 + estimate.continuityFraction * 20;
  const heatRadius = 24 + clamp(estimate.contactHeatWatts / 2.5) * 64;
  const arcOpacity = estimate.arcWarning ? 0.92 : estimate.arcRisk * 0.5;
  const state = estimate.state;
  const contactStateText = stateLabel(state, locale);

  function setPositionFromControl(nextValue: number) {
    setPositionPercent(clamp(nextValue, 0, 100));
  }

  function setLoadCurrentFromControl(nextValue: number) {
    setLoadCurrent(clamp(nextValue, 0, 8));
  }

  function setContactResistanceFromControl(nextValue: number) {
    setContactResistanceMilliOhms(clamp(nextValue, 5, 250));
  }

  return (
    <section className="interactive-card switches-demo" aria-labelledby="switches-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="switches-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="switches-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 450" className="circuit-svg">
            <defs>
              <linearGradient id="switchGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.5" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="switchGlow">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="402" rx="32" className="demo-backplate" />

            <rect x="82" y="164" width="104" height="122" rx="22" className="switch-source" />
            <line x1="122" y1="196" x2="122" y2="252" className="switch-source-mark long" />
            <line x1="148" y1="210" x2="148" y2="238" className="switch-source-mark short" />
            <text x="134" y="318" className="svg-label" textAnchor="middle">
              {text.source}
            </text>

            <rect x="620" y="164" width="126" height="122" rx="24" className="switch-load" />
            <path d="M645 226 h12 l12 -28 l24 56 l24 -56 l12 28 h8" className="switch-load-zigzag" />
            <text x="683" y="318" className="svg-label" textAnchor="middle">
              {text.load}
            </text>

            <path d={`M186 225 H${movingContactX}`} className="switch-wire" />
            <path d="M482 225 H620" className="switch-wire" />
            <path
              d={`M186 225 H${movingContactX} M455 225 H620`}
              className="switch-current-path"
              style={{
                opacity: 0.12 + estimate.continuityFraction * 0.84,
                strokeWidth: currentStroke,
              }}
            />

            <circle
              cx={movingContactX}
              cy="225"
              r={18}
              className={`switch-contact-moving switch-contact-${state}`}
            />
            <rect x="455" y="204" width="28" height="42" rx="10" className="switch-contact-fixed" />
            <line x1="290" y1="278" x2={movingContactX} y2="225" className="switch-blade-real" />
            <circle cx="290" cy="278" r="12" className="switch-pivot" />

            <circle
              cx="470"
              cy="225"
              r={heatRadius}
              className="switch-contact-heat"
              style={{ opacity: estimate.contactHeatWatts > 0 ? 0.08 + clamp(estimate.contactHeatWatts / 2.5) * 0.35 : 0 }}
            />

            {estimate.bouncePulses > 0 &&
              Array.from({ length: estimate.bouncePulses }).map((_, index) => (
                <line
                  key={index}
                  x1={408 + index * 12}
                  y1={180 - (index % 2) * 14}
                  x2={408 + index * 12}
                  y2={196 + (index % 2) * 10}
                  className="switch-bounce-pulse"
                />
              ))}

            {arcOpacity > 0.08 && (
              <path
                d="M446 207 l16 13 l-13 8 l18 14"
                className="switch-arc"
                style={{ opacity: arcOpacity }}
              />
            )}

            <text x="392" y="168" className="svg-label" textAnchor="middle">
              {text.contactGap}: {format(gap, locale, " px", 0)}
            </text>
            <text x="408" y="358" className="svg-label" textAnchor="middle">
              {text.continuity}: {format(estimate.continuityFraction * 100, locale, "%", 0)}
            </text>
            <text x="408" y="390" className="svg-label" textAnchor="middle">
              {text.contactHeat}: {format(estimate.contactHeatWatts, locale, " W", 3)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className={`state-pill switch-state-${state}`}>
            {contactStateText}
            {estimate.arcWarning ? ` · ${text.arcWarning}` : ""}
          </p>

          <label className="range-label" htmlFor="switch-position">
            <span>{text.motion}</span>
            <strong>{format(positionPercent, locale, "%", 0)}</strong>
          </label>
          <input
            id="switch-position"
            type="range"
            min="0"
            max="100"
            step="1"
            value={positionPercent}
            onInput={(event) => setPositionFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setPositionFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(positionPercent, event.key, event.shiftKey ? 10 : 1, 0, 100);
              if (next !== undefined) {
                event.preventDefault();
                setPositionFromControl(next);
              }
            }}
          />
          <div className="switch-meter-bar" aria-hidden="true">
            <span style={{ width: `${positionPercent}%` }} />
          </div>
          <p className="demo-note">{text.motionNote}</p>

          <label className="range-label" htmlFor="switch-current">
            <span>{text.loadCurrent}</span>
            <strong>{format(loadCurrent, locale, " A", 2)}</strong>
          </label>
          <input
            id="switch-current"
            type="range"
            min="0"
            max="8"
            step="0.1"
            value={loadCurrent}
            onInput={(event) => setLoadCurrentFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setLoadCurrentFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(loadCurrent, event.key, event.shiftKey ? 1 : 0.1, 0, 8);
              if (next !== undefined) {
                event.preventDefault();
                setLoadCurrentFromControl(next);
              }
            }}
          />
          <div className="switch-meter-bar current-bar" aria-hidden="true">
            <span style={{ width: `${(loadCurrent / 8) * 100}%` }} />
          </div>
          <p className="demo-note">{text.currentNote}</p>

          <label className="range-label" htmlFor="switch-resistance">
            <span>{text.contactResistance}</span>
            <strong>{format(contactResistanceMilliOhms, locale, " mΩ", 0)}</strong>
          </label>
          <input
            id="switch-resistance"
            type="range"
            min="5"
            max="250"
            step="5"
            value={contactResistanceMilliOhms}
            onInput={(event) => setContactResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setContactResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(contactResistanceMilliOhms, event.key, event.shiftKey ? 25 : 5, 5, 250);
              if (next !== undefined) {
                event.preventDefault();
                setContactResistanceFromControl(next);
              }
            }}
          />
          <div className="switch-meter-bar resistance-bar" aria-hidden="true">
            <span style={{ width: `${((contactResistanceMilliOhms - 5) / 245) * 100}%` }} />
          </div>
          <p className="demo-note">{text.resistanceNote}</p>

          <div className="range-label">
            <span>{text.loadType}</span>
            <strong>{text[loadType]}</strong>
          </div>
          <div className="segmented-control switch-load-type" role="group" aria-label={text.loadType}>
            {loadTypes.map((type) => (
              <button
                key={type}
                type="button"
                aria-pressed={loadType === type}
                onClick={() => setLoadType(type)}
              >
                {text[type]}
              </button>
            ))}
          </div>
          <p className="demo-note">{text.typeNote}</p>

          <dl className="metric-grid">
            <div>
              <dt>{text.current}</dt>
              <dd>{format(estimate.currentAmps, locale, " A", 2)}</dd>
            </div>
            <div>
              <dt>{text.contactHeat}</dt>
              <dd>{format(estimate.contactHeatWatts, locale, " W", 3)}</dd>
            </div>
            <div>
              <dt>{text.bounce}</dt>
              <dd>{format(estimate.bouncePulses, locale, "", 0)}</dd>
            </div>
            <div>
              <dt>{text.arcRisk}</dt>
              <dd>{estimate.arcRisk > 0 ? format(estimate.arcRisk * 100, locale, "%", 0) : text.noArc}</dd>
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
