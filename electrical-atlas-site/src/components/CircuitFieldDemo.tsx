import { useId, useMemo, useState } from "react";
import { estimateLampCircuit } from "../lib/physics";

type Locale = "en" | "th";
type CircuitState = "open" | "closed";

type DemoCopy = {
  interactiveLabel: string;
  title: string;
  intro: string;
  stateControl: string;
  open: string;
  closed: string;
  openSummary: string;
  closedSummary: string;
  voltage: string;
  resistance: string;
  current: string;
  power: string;
  drift: string;
  transcriptLabel: string;
  openTranscript: string;
  closedTranscript: string;
  transitionBoundary: string;
  model: string;
  stateAnnouncement: (state: string, current: string, power: string, drift: string) => string;
};

const copy = {
  en: {
    interactiveLabel: "interactive v0.1",
    title: "Open circuit and closed steady state",
    intro:
      "Compare two stable circuit conditions. The control jumps between them; it does not pretend that switch motion, electromagnetic propagation, filament heating, and current are one percentage scale.",
    stateControl: "Choose the circuit condition",
    open: "Open circuit",
    closed: "Closed, steady DC",
    openSummary:
      "The ideal source maintains 9 V, but the broken path prevents sustained loop current. The lamp is dark.",
    closedSummary:
      "After the unshown switching transient, the 30 Ω resistive model carries 0.300 A and receives 2.70 W.",
    voltage: "Ideal-source voltage",
    resistance: "Model resistance",
    current: "Steady loop current",
    power: "Load power",
    drift: "Estimated electron drift",
    transcriptLabel: "Visual transcript",
    openTranscript:
      "The battery is inserted between two separate terminals of the circuit. Its positive terminal connects to the left side of an open switch; the other switch contact returns through the lamp and wire to the negative terminal. An electric field can exist across the open contact gap, and mobile electrons remain present in the copper, but there is no sustained loop current. The lamp has no halo.",
    closedTranscript:
      "The switch contacts meet. After the transient has settled, conventional current is shown leaving the positive terminal, passing through the switch and lamp, and returning to the negative terminal. In the copper, the average electron drift is in the opposite direction. The lamp halo is shown only in this powered steady state.",
    transitionBoundary:
      "Transition boundary: the instant after contact is not simulated. A real electromagnetic disturbance propagates through the circuit in finite time, and a real incandescent filament then changes resistance as it heats.",
    model:
      "Model boundary: ideal 9 V source, illustrative 30 Ω hot-state resistive load, and copper conductor with 0.5 mm² cross-sectional area. Source, switch, and wire resistance, cold-filament inrush, propagation geometry, and thermal warm-up are omitted. This is a concept comparison, not a construction instruction or component rating.",
    stateAnnouncement: (state, current, power, drift) =>
      `${state}. Steady loop current ${current}. Load power ${power}. Estimated electron drift ${drift}.`,
  },
  th: {
    interactiveLabel: "สื่อโต้ตอบ v0.1",
    title: "วงจรเปิดและสภาวะ DC คงตัวเมื่อวงจรปิด",
    intro:
      "เปรียบเทียบสภาวะคงตัวสองแบบ ตัวควบคุมจะสลับจากสภาวะหนึ่งไปอีกสภาวะหนึ่งโดยตรง ไม่ได้ทำให้การขยับสวิตช์ การแพร่ของการเปลี่ยนแปลงสนามแม่เหล็กไฟฟ้า การร้อนขึ้นของไส้หลอด และกระแส กลายเป็นสเกลเปอร์เซ็นต์เดียวกัน",
    stateControl: "เลือกสภาวะของวงจร",
    open: "วงจรเปิด",
    closed: "วงจรปิด สภาวะ DC คงตัว",
    openSummary:
      "แหล่งจ่ายอุดมคติยังคงแรงดัน 9 V แต่เส้นทางที่ขาดทำให้ไม่มีกระแสคงตัวไหลรอบวงจร หลอดไฟจึงมืด",
    closedSummary:
      "หลังช่วงเปลี่ยนผ่าน (transient) ที่ไม่ได้จำลอง แบบจำลองโหลดความต้านทาน 30 Ω มีกระแส 0.300 A และรับกำลัง 2.70 W",
    voltage: "แรงดันของแหล่งจ่ายอุดมคติ",
    resistance: "ความต้านทานในแบบจำลอง",
    current: "กระแสคงตัวในลูป",
    power: "กำลังที่โหลดรับ",
    drift: "อัตราเร็วการดริฟต์ของอิเล็กตรอนโดยประมาณ",
    transcriptLabel: "คำบรรยายภาพ",
    openTranscript:
      "แบตเตอรี่ต่ออยู่ระหว่างจุดต่อสองจุดของวงจร ขั้วบวกต่อไปยังด้านซ้ายของสวิตช์ที่เปิดอยู่ ส่วนหน้าสัมผัสอีกด้านต่อผ่านหลอดไฟและสายกลับสู่ขั้วลบ สนามไฟฟ้ายังเกิดข้ามช่องว่างระหว่างหน้าสัมผัสได้ และทองแดงยังมีอิเล็กตรอนที่เคลื่อนที่ได้ แต่ไม่มีกระแสคงตัวไหลรอบวงจร ภาพจึงไม่แสดงรัศมีเรืองแสงรอบหลอด",
    closedTranscript:
      "หน้าสัมผัสสวิตช์แตะกัน หลังช่วงเปลี่ยนผ่านสงบแล้ว ภาพแสดงกระแสตามข้อตกลงออกจากขั้วบวก ผ่านสวิตช์และหลอดไฟ แล้วกลับสู่ขั้วลบ ในทองแดง การเคลื่อนที่ดริฟต์เฉลี่ยของอิเล็กตรอนมีทิศตรงข้าม ภาพแสดงรัศมีของหลอดเฉพาะสภาวะคงตัวที่รับกำลังแล้ว",
    transitionBoundary:
      "ขอบเขตการเปลี่ยนสภาวะ: แบบจำลองไม่ได้แสดงชั่วขณะหลังหน้าสัมผัสแตะกัน ในวงจรจริง การรบกวนทางแม่เหล็กไฟฟ้าใช้เวลาแพร่ไปตามตัวนำและเส้นทางกลับ โดยความเร็วขึ้นอยู่กับรูปทรงและวัสดุ และความต้านทานของหลอดไส้จะเปลี่ยนเมื่ออุณหภูมิสูงขึ้น",
    model:
      "ขอบเขตแบบจำลอง: แหล่งจ่ายอุดมคติ 9 V โหลดเชิงความต้านทานสมมติ 30 Ω ซึ่งใช้แทนค่าขณะร้อน และตัวนำทองแดงที่มีพื้นที่หน้าตัด 0.5 mm² แบบจำลองไม่รวมความต้านทานของแหล่งจ่าย สวิตช์ และสาย กระแสกระชากของไส้หลอดเย็น รายละเอียดทางเรขาคณิตที่กำหนดการแพร่ และช่วงอุ่นตัวทางความร้อน ภาพนี้ใช้เปรียบเทียบแนวคิด ไม่ใช่คำแนะนำในการประกอบวงจร และค่าที่แสดงไม่ใช่พิกัดของชิ้นส่วนจริง",
    stateAnnouncement: (state, current, power, drift) =>
      `${state} กระแสคงตัวในลูป: ${current} กำลังที่โหลดรับ: ${power} อัตราเร็วการดริฟต์ของอิเล็กตรอนโดยประมาณ: ${drift}`,
  },
} satisfies Record<Locale, DemoCopy>;

function format(value: number, locale: Locale, unit = "", maximumFractionDigits = 3) {
  return `${new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
    minimumFractionDigits: maximumFractionDigits,
    maximumFractionDigits,
  }).format(value)}${unit}`;
}

export default function CircuitFieldDemo({
  locale = "en",
  initialState = "open",
}: {
  locale?: Locale;
  initialState?: CircuitState;
}) {
  const [circuitState, setCircuitState] = useState<CircuitState>(initialState);
  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const instanceId = `circuit-demo-${rawId}`;
  const titleId = `${instanceId}-title`;
  const outputId = `${instanceId}-output`;
  const glowId = `${instanceId}-glow`;
  const currentArrowId = `${instanceId}-current-arrow`;
  const fieldArrowId = `${instanceId}-field-arrow`;
  const electronArrowId = `${instanceId}-electron-arrow`;
  const text = copy[locale];
  const isClosed = circuitState === "closed";
  const estimate = useMemo(
    () =>
      estimateLampCircuit({
        voltage: 9,
        resistance: 30,
        conductorAreaM2: 0.5e-6,
        circuitClosed: isClosed,
      }),
    [isClosed],
  );
  const stateLabel = isClosed ? text.closed : text.open;
  const stateSummary = isClosed ? text.closedSummary : text.openSummary;
  const currentValue = format(estimate.steadyCurrentAmps, locale, " A", 3);
  const powerValue = format(estimate.loadPowerWatts, locale, " W", 2);
  const driftValue = format(estimate.driftSpeedMillimetersPerSecond, locale, " mm/s", 4);

  return (
    <section className="interactive-card" aria-labelledby={titleId}>
      <div className="interactive-copy">
        <p className="eyebrow">{text.interactiveLabel}</p>
        <h2 id={titleId}>{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="circuit-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 470" className="circuit-svg">
            <defs>
              <filter id={glowId}>
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <marker id={currentArrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10Z" fill="#2f6f9f" />
              </marker>
              <marker id={fieldArrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10Z" fill="#b97824" />
              </marker>
              <marker id={electronArrowId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0L10 5L0 10Z" fill="#3f7d55" />
              </marker>
            </defs>

            <rect x="24" y="24" width="772" height="422" rx="32" className="demo-backplate" />

            <path d="M130 140H300 M440 140H660V190 M660 290V340H130V250 M130 210V140" className="wire" />

            <line x1="92" y1="210" x2="168" y2="210" className="battery-long" />
            <line x1="108" y1="250" x2="152" y2="250" className="battery-short" />
            <text x="84" y="190" className="svg-label" style={{ fontSize: 26 }}>+</text>
            <text x="86" y="278" className="svg-label" style={{ fontSize: 26 }}>−</text>
            <text x="68" y="324" className="svg-label" style={{ fontSize: 25 }}>9 V</text>

            <circle cx="300" cy="140" r="10" className="terminal" />
            <circle cx="440" cy="140" r="10" className="terminal" />
            <line
              x1="308"
              y1="140"
              x2="432"
              y2="140"
              className="switch-blade"
              transform={isClosed ? undefined : "rotate(-24 308 140)"}
            />

            <g style={{ opacity: isClosed ? 0 : 1 }}>
              {[112, 132, 152].map((y) => (
                <line
                  key={y}
                  x1="394"
                  y1={y}
                  x2="429"
                  y2={y}
                  stroke="#b97824"
                  strokeWidth="4"
                  strokeDasharray="7 6"
                  markerEnd={`url(#${fieldArrowId})`}
                />
              ))}
              <text x="402" y="92" className="svg-label" style={{ fontSize: 25 }}>𝐄</text>
            </g>

            <circle cx="660" cy="240" r="50" className="lamp-bulb" />
            <circle
              cx="660"
              cy="240"
              r="70"
              className="lamp-halo"
              style={{ opacity: isClosed ? 1 : 0, filter: `url(#${glowId})` }}
            />
            <path d="M631 242c17-31 40 31 58 0" className="filament" />

            <g style={{ opacity: isClosed ? 1 : 0 }}>
              <path
                d="M180 140H260"
                fill="none"
                stroke="#2f6f9f"
                strokeWidth="5"
                markerEnd={`url(#${currentArrowId})`}
              />
              <text x="207" y="112" className="svg-label" style={{ fontSize: 25 }}>I</text>
              <path
                d="M525 340H610"
                fill="none"
                stroke="#3f7d55"
                strokeWidth="5"
                markerEnd={`url(#${electronArrowId})`}
              />
              <text x="556" y="388" className="svg-label" style={{ fontSize: 25 }}>e⁻</text>
            </g>

            {[250, 330, 410, 490, 570].map((x) => (
              <circle key={x} cx={x} cy="340" r="6" className="electron-dot" style={{ opacity: 0.72 }} />
            ))}
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{stateLabel}</p>
          <div className="segmented-control" role="group" aria-label={text.stateControl}>
            <button type="button" aria-pressed={!isClosed} onClick={() => setCircuitState("open")}>
              {text.open}
            </button>
            <button type="button" aria-pressed={isClosed} onClick={() => setCircuitState("closed")}>
              {text.closed}
            </button>
          </div>

          <output id={outputId} className="visually-hidden" aria-live="polite" aria-atomic="true">
            {text.stateAnnouncement(stateLabel, currentValue, powerValue, driftValue)}
          </output>
          <p className="demo-note">{stateSummary}</p>

          <dl className="metric-grid">
            <div>
              <dt>{text.voltage}</dt>
              <dd>{format(estimate.sourceVoltage, locale, " V", 1)}</dd>
            </div>
            <div>
              <dt>{text.resistance}</dt>
              <dd>{format(estimate.loadResistanceOhms, locale, " Ω", 1)}</dd>
            </div>
            <div>
              <dt>{text.current}</dt>
              <dd>{currentValue}</dd>
            </div>
            <div>
              <dt>{text.power}</dt>
              <dd>{powerValue}</dd>
            </div>
          </dl>

          <p className="drift-note">
            {text.drift}: <strong>{driftValue}</strong>
          </p>
          <p className="demo-note">{text.transitionBoundary}</p>
        </div>
      </div>

      <p className="demo-note">{text.model}</p>

      <details className="visual-transcript">
        <summary>{text.transcriptLabel}</summary>
        <p>{isClosed ? text.closedTranscript : text.openTranscript}</p>
      </details>
    </section>
  );
}
