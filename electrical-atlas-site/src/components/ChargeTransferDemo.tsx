import { useId, useMemo, useState } from "react";
import {
  ELEMENTARY_CHARGE_COULOMB,
  estimateChargeTransfer,
  type ChargeTransferEstimate,
} from "../lib/chargeModel";
import "../styles/charge-demo.css";

type Locale = "en" | "th";
type ObjectChargeState = "positive" | "negative" | "neutral";

type DemoCopy = {
  interactiveLabel: string;
  title: string;
  intro: string;
  controlsLabel: string;
  moveAToB: string;
  moveBToA: string;
  moveAToBSpoken: string;
  moveBToASpoken: string;
  reset: string;
  objectA: string;
  objectB: string;
  pair: string;
  elementaryCharge: string;
  neutral: string;
  positive: string;
  negative: string;
  neutralShort: string;
  positiveShort: string;
  negativeShort: string;
  noTransfer: string;
  visualLimit: string;
  limitReached: string;
  zeroCoulombs: string;
  elementaryChargeSpoken: string;
  transcriptLabel: string;
  model: string;
  transferSummary: (count: number, from: string, to: string) => string;
  spokenTransferSummary: (count: number, from: string, to: string) => string;
  stateAnnouncement: (summary: string, objectA: string, objectB: string) => string;
  coulombAnnouncement: (sign: string, coefficient: string) => string;
};

const copy = {
  en: {
    interactiveLabel: "interactive v0.1",
    title: "Transfer charge without losing it",
    intro:
      "Move one electron at a time between two initially neutral metal objects. Their signed net charges change, while the isolated pair's total charge remains zero.",
    controlsLabel: "Choose one charge-transfer action",
    moveAToB: "Move one electron A → B",
    moveBToA: "Move one electron B → A",
    moveAToBSpoken: "Move one electron from A to B",
    moveBToASpoken: "Move one electron from B to A",
    reset: "Reset both to neutral",
    objectA: "Object A",
    objectB: "Object B",
    pair: "Pair total",
    elementaryCharge: "Elementary-charge magnitude",
    neutral: "neutral — positive and negative charge balance",
    positive: "positive — electron deficit in this metal model",
    negative: "negative — excess electrons in this metal model",
    neutralShort: "neutral",
    positiveShort: "positive",
    negativeShort: "negative",
    noTransfer: "No net transfer recorded",
    visualLimit: "The five-electron stop is only a readability limit for this visual.",
    limitReached: "Five-electron visual limit reached.",
    zeroCoulombs: "zero coulombs",
    elementaryChargeSpoken:
      "The elementary-charge magnitude e equals exactly 1.602176634 times ten to the power of negative nineteen coulombs.",
    transcriptLabel: "Visual transcript",
    model:
      "Model boundary: A and B begin as neutral metal objects and exchange electrons only with each other; their lattice ions stay at fixed model positions and the pair exchanges no charge with its surroundings. The signs are bookkeeping, not literal particle positions or scale. Transfer paths, time, work, energy, fields, forces, surface redistribution, leakage, grounding, ions, and the charging mechanism are not simulated. Positive net charge here means an electron deficit, not an object made only of positive particles.",
    transferSummary: (count, from, to) =>
      `${count} net ${count === 1 ? "electron has" : "electrons have"} moved ${from} → ${to}`,
    spokenTransferSummary: (count, from, to) =>
      `${count} net ${count === 1 ? "electron has" : "electrons have"} moved from ${from} to ${to}`,
    stateAnnouncement: (summary, objectA, objectB) =>
      `${summary}. Object A: ${objectA}. Object B: ${objectB}. Pair total: zero coulombs.`,
    coulombAnnouncement: (sign, coefficient) =>
      `${sign} ${coefficient} times ten to the power of negative nineteen coulombs`,
  },
  th: {
    interactiveLabel: "สื่อโต้ตอบ v0.1",
    title: "ย้ายประจุโดยที่ประจุรวมไม่หายไป",
    intro:
      "ย้ายอิเล็กตรอนครั้งละหนึ่งตัวระหว่างวัตถุโลหะ A และ B ซึ่งเริ่มต้นเป็นกลาง ประจุสุทธิของแต่ละวัตถุจะเปลี่ยน แต่ประจุรวมของคู่ที่แยกจากสิ่งแวดล้อมยังเป็นศูนย์",
    controlsLabel: "เลือกการย้ายประจุหนึ่งครั้ง",
    moveAToB: "ย้ายอิเล็กตรอน A → B",
    moveBToA: "ย้ายอิเล็กตรอน B → A",
    moveAToBSpoken: "ย้ายอิเล็กตรอนหนึ่งตัวจาก A ไป B",
    moveBToASpoken: "ย้ายอิเล็กตรอนหนึ่งตัวจาก B ไป A",
    reset: "คืนทั้งคู่สู่สภาวะเป็นกลาง",
    objectA: "วัตถุ A",
    objectB: "วัตถุ B",
    pair: "ประจุรวมของคู่",
    elementaryCharge: "ขนาดประจุมูลฐาน",
    neutral: "เป็นกลาง — ประจุบวกและลบสมดุลกัน",
    positive: "ประจุบวก — ขาดอิเล็กตรอนในแบบจำลองโลหะนี้",
    negative: "ประจุลบ — มีอิเล็กตรอนเกินในแบบจำลองโลหะนี้",
    neutralShort: "เป็นกลาง",
    positiveShort: "บวก",
    negativeShort: "ลบ",
    noTransfer: "ยังไม่มีการย้ายอิเล็กตรอนสุทธิ",
    visualLimit: "ขีดจำกัดห้าอิเล็กตรอนมีไว้เพื่อให้อ่านภาพง่ายเท่านั้น ไม่ใช่ขีดจำกัดทางฟิสิกส์",
    limitReached: "ถึงขีดจำกัดห้าอิเล็กตรอนของภาพแล้ว",
    zeroCoulombs: "ศูนย์คูลอมบ์",
    elementaryChargeSpoken:
      "ขนาดประจุมูลฐาน e มีค่าแน่นอนเท่ากับ 1.602176634 คูณสิบยกกำลังลบสิบเก้า คูลอมบ์",
    transcriptLabel: "คำบรรยายภาพ",
    model:
      "ขอบเขตแบบจำลอง: A และ B เริ่มเป็นวัตถุโลหะที่เป็นกลางและแลกเปลี่ยนอิเล็กตรอนกันเท่านั้น ไอออนในโครงผลึกอยู่ที่ตำแหน่งคงที่ของแบบจำลอง และคู่ A+B ไม่แลกเปลี่ยนประจุกับสิ่งแวดล้อม เครื่องหมายต่าง ๆ ใช้ทำบัญชีประจุ ไม่ได้แสดงตำแหน่งหรือขนาดจริงของอนุภาค แบบจำลองไม่แสดงเส้นทาง เวลา งาน พลังงาน สนาม แรง การกระจายประจุบนผิว การรั่ว การต่อลงดิน ไอออน หรือกลไกที่ทำให้เกิดการถ่ายโอน ประจุบวกในภาพนี้หมายถึงการขาดอิเล็กตรอน ไม่ได้หมายความว่าวัตถุประกอบด้วยอนุภาคบวกเท่านั้น",
    transferSummary: (count, from, to) =>
      `อิเล็กตรอนย้ายสุทธิ ${count} ตัว จาก ${from} → ${to}`,
    spokenTransferSummary: (count, from, to) =>
      `อิเล็กตรอนย้ายสุทธิ ${count} ตัว จาก ${from} ไป ${to}`,
    stateAnnouncement: (summary, objectA, objectB) =>
      `${summary} วัตถุ A: ${objectA} วัตถุ B: ${objectB} ประจุรวมของคู่: ศูนย์คูลอมบ์`,
    coulombAnnouncement: (sign, coefficient) =>
      `${sign} ${coefficient} คูณสิบยกกำลังลบสิบเก้า คูลอมบ์`,
  },
} satisfies Record<Locale, DemoCopy>;

const VISUAL_LIMIT = 5;
const SUPERSCRIPT_NEGATIVE_NINETEEN = "⁻¹⁹";

function chargeState(elementaryUnits: number): ObjectChargeState {
  return elementaryUnits === 0 ? "neutral" : elementaryUnits > 0 ? "positive" : "negative";
}

function elementaryChargeText(elementaryUnits: number) {
  if (elementaryUnits === 0) return "0";
  return `${elementaryUnits > 0 ? "+" : "−"}${Math.abs(elementaryUnits)}e`;
}

function localizedCoefficient(elementaryUnits: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    maximumFractionDigits: 4,
  }).format(Math.abs(elementaryUnits * ELEMENTARY_CHARGE_COULOMB) / 1e-19);
}

function visibleCoulombs(elementaryUnits: number, locale: Locale) {
  if (elementaryUnits === 0) return "0 C";
  const sign = elementaryUnits > 0 ? "+" : "−";
  return `${sign}${localizedCoefficient(elementaryUnits, locale)} × 10${SUPERSCRIPT_NEGATIVE_NINETEEN} C`;
}

function spokenCoulombs(elementaryUnits: number, locale: Locale, text: DemoCopy) {
  if (elementaryUnits === 0) return locale === "th" ? "ศูนย์คูลอมบ์" : "zero coulombs";
  const sign =
    elementaryUnits > 0
      ? locale === "th"
        ? "บวก"
        : "positive"
      : locale === "th"
        ? "ลบ"
        : "negative";
  return text.coulombAnnouncement(sign, localizedCoefficient(elementaryUnits, locale));
}

function objectDescription(elementaryUnits: number, locale: Locale, text: DemoCopy) {
  const state = chargeState(elementaryUnits);
  return `${text[state]}; ${elementaryChargeText(elementaryUnits)}; ${spokenCoulombs(elementaryUnits, locale, text)}`;
}

function shortStateLabel(state: ObjectChargeState, text: DemoCopy) {
  return state === "neutral" ? text.neutralShort : state === "positive" ? text.positiveShort : text.negativeShort;
}

function transferSummary(estimate: ChargeTransferEstimate, text: DemoCopy) {
  if (estimate.transferDirection === "neutral") return text.noTransfer;
  return estimate.transferDirection === "a-to-b"
    ? text.transferSummary(estimate.electronCount, "A", "B")
    : text.transferSummary(estimate.electronCount, "B", "A");
}

function spokenTransferSummary(estimate: ChargeTransferEstimate, text: DemoCopy) {
  if (estimate.transferDirection === "neutral") return text.noTransfer;
  return estimate.transferDirection === "a-to-b"
    ? text.spokenTransferSummary(estimate.electronCount, "A", "B")
    : text.spokenTransferSummary(estimate.electronCount, "B", "A");
}

function spokenElementaryState(elementaryUnits: number, locale: Locale) {
  if (elementaryUnits === 0) {
    return locale === "th" ? "เป็นกลาง ศูนย์หน่วยประจุมูลฐาน" : "neutral, zero elementary-charge units";
  }

  const count = Math.abs(elementaryUnits);
  if (locale === "th") {
    return `ประจุ${elementaryUnits > 0 ? "บวก" : "ลบ"} ${count} หน่วยประจุมูลฐาน`;
  }

  return `${elementaryUnits > 0 ? "positive" : "negative"} ${count} elementary-charge ${count === 1 ? "unit" : "units"}`;
}

export default function ChargeTransferDemo({ locale = "en" }: { locale?: Locale }) {
  const [transferredElectronsAtoB, setTransferredElectronsAtoB] = useState(0);
  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const instanceId = `charge-demo-${rawId}`;
  const titleId = `${instanceId}-title`;
  const controlsId = `${instanceId}-controls`;
  const outputId = `${instanceId}-output`;
  const limitId = `${instanceId}-limit`;
  const arrowId = `${instanceId}-arrow`;
  const text = copy[locale];
  const estimate = useMemo(
    () => estimateChargeTransfer(transferredElectronsAtoB),
    [transferredElectronsAtoB],
  );
  const summary = transferSummary(estimate, text);
  const spokenSummary = spokenTransferSummary(estimate, text);
  const objectAState = chargeState(estimate.objectAChargeElementary);
  const objectBState = chargeState(estimate.objectBChargeElementary);
  const objectADescription = objectDescription(estimate.objectAChargeElementary, locale, text);
  const objectBDescription = objectDescription(estimate.objectBChargeElementary, locale, text);
  const arrowFromA = estimate.transferDirection === "a-to-b";
  const hasTransfer = estimate.transferDirection !== "neutral";
  const limitReached = estimate.electronCount === VISUAL_LIMIT;
  const displayedSummary = limitReached ? `${summary}. ${text.limitReached}` : summary;
  const compactAnnouncement = `${spokenSummary}. ${text.objectA}: ${spokenElementaryState(estimate.objectAChargeElementary, locale)}. ${text.objectB}: ${spokenElementaryState(estimate.objectBChargeElementary, locale)}. ${text.pair}: ${text.zeroCoulombs}.${limitReached ? ` ${text.limitReached}` : ""}`;

  return (
    <section className="interactive-card charge-demo" aria-labelledby={titleId}>
      <div className="interactive-copy">
        <p className="eyebrow">{text.interactiveLabel}</p>
        <h2 id={titleId}>{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="charge-demo-grid">
        <div className="charge-demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 400" className="charge-demo-svg">
            <defs>
              <marker id={arrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" className="charge-transfer-arrowhead" />
              </marker>
            </defs>
            <rect x="24" y="24" width="772" height="352" rx="28" className="charge-demo-backplate" />

            <g className={`charge-object charge-object--${objectAState}`}>
              <rect x="78" y="104" width="240" height="190" rx="28" />
              <text x="198" y="154" textAnchor="middle" className="charge-object-name">A</text>
              <text x="198" y="218" textAnchor="middle" className="charge-object-value">
                {elementaryChargeText(estimate.objectAChargeElementary)}
              </text>
              <text x="198" y="262" textAnchor="middle" className="charge-object-state">
                {shortStateLabel(objectAState, text)}
              </text>
            </g>

            <g className={`charge-object charge-object--${objectBState}`}>
              <rect x="502" y="104" width="240" height="190" rx="28" />
              <text x="622" y="154" textAnchor="middle" className="charge-object-name">B</text>
              <text x="622" y="218" textAnchor="middle" className="charge-object-value">
                {elementaryChargeText(estimate.objectBChargeElementary)}
              </text>
              <text x="622" y="262" textAnchor="middle" className="charge-object-state">
                {shortStateLabel(objectBState, text)}
              </text>
            </g>

            {hasTransfer ? (
              <>
                <line
                  x1={arrowFromA ? 334 : 486}
                  y1="176"
                  x2={arrowFromA ? 486 : 334}
                  y2="176"
                  className="charge-transfer-arrow"
                  markerEnd={`url(#${arrowId})`}
                />
                <text x="410" y="142" textAnchor="middle" className="charge-transfer-count">
                  {estimate.electronCount} e−
                </text>
              </>
            ) : (
              <text x="410" y="184" textAnchor="middle" className="charge-transfer-count">0 e−</text>
            )}

            <text x="410" y="340" textAnchor="middle" className="charge-pair-total">
              qA + qB = 0 C
            </text>
          </svg>
        </div>

        <div className="charge-demo-controls">
          <p id={controlsId} className="charge-demo-control-label">{text.controlsLabel}</p>
          <div className="charge-demo-actions" role="group" aria-labelledby={controlsId} aria-describedby={limitId}>
            <button
              type="button"
              onClick={() => {
                setTransferredElectronsAtoB((count) => Math.min(VISUAL_LIMIT, count + 1));
              }}
              aria-disabled={transferredElectronsAtoB >= VISUAL_LIMIT}
              aria-label={text.moveAToBSpoken}
            >
              {text.moveAToB}
            </button>
            <button
              type="button"
              onClick={() => {
                setTransferredElectronsAtoB((count) => Math.max(-VISUAL_LIMIT, count - 1));
              }}
              aria-disabled={transferredElectronsAtoB <= -VISUAL_LIMIT}
              aria-label={text.moveBToASpoken}
            >
              {text.moveBToA}
            </button>
            <button
              type="button"
              className="charge-demo-reset"
              onClick={() => {
                if (transferredElectronsAtoB !== 0) {
                  setTransferredElectronsAtoB(0);
                }
              }}
              aria-disabled={transferredElectronsAtoB === 0}
            >
              {text.reset}
            </button>
          </div>

          <output id={outputId} className="charge-demo-summary" aria-live="polite" aria-atomic="true">
            <span aria-hidden="true">{displayedSummary}</span>
            <span className="visually-hidden">{compactAnnouncement}</span>
          </output>

          <dl className="charge-ledger">
            <div>
              <dt>{text.objectA}</dt>
              <dd>
                <strong>{elementaryChargeText(estimate.objectAChargeElementary)}</strong>
                <span aria-hidden="true">{visibleCoulombs(estimate.objectAChargeElementary, locale)}</span>
                <span className="visually-hidden">{spokenCoulombs(estimate.objectAChargeElementary, locale, text)}</span>
                <small>{text[objectAState]}</small>
              </dd>
            </div>
            <div>
              <dt>{text.objectB}</dt>
              <dd>
                <strong>{elementaryChargeText(estimate.objectBChargeElementary)}</strong>
                <span aria-hidden="true">{visibleCoulombs(estimate.objectBChargeElementary, locale)}</span>
                <span className="visually-hidden">{spokenCoulombs(estimate.objectBChargeElementary, locale, text)}</span>
                <small>{text[objectBState]}</small>
              </dd>
            </div>
            <div>
              <dt>{text.pair}</dt>
              <dd><strong>0 C</strong></dd>
            </div>
            <div>
              <dt>{text.elementaryCharge}</dt>
              <dd>
                <strong aria-hidden="true">e = 1.602 176 634 × 10{SUPERSCRIPT_NEGATIVE_NINETEEN} C</strong>
                <span className="visually-hidden">{text.elementaryChargeSpoken}</span>
              </dd>
            </div>
          </dl>

          <p id={limitId} className="charge-demo-limit">{text.visualLimit}</p>
        </div>
      </div>

      <p className="demo-note">{text.model}</p>

      <details className="visual-transcript">
        <summary>{text.transcriptLabel}</summary>
        <p>{text.stateAnnouncement(spokenSummary, objectADescription, objectBDescription)}</p>
        <p>{text.model}</p>
      </details>
    </section>
  );
}
