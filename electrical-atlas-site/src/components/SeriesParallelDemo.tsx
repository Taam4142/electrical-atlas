import { useMemo, useState } from "react";
import { clamp, estimateSeriesParallelCircuit, type SeriesParallelTopology } from "../lib/physics";

type Locale = "en" | "th";

const copy = {
  en: {
    title: "Series and parallel connections decide what is shared",
    intro:
      "Flip the same two resistors between series and parallel. Watch equivalent resistance, total current, voltage sharing, and current splitting change.",
    series: "Series",
    parallel: "Parallel",
    sourceVoltage: "Source voltage",
    firstResistance: "R1 resistance",
    secondResistance: "R2 resistance",
    equivalentResistance: "Equivalent resistance",
    totalCurrent: "Total current",
    totalPower: "Total power",
    branch1: "Branch / part 1",
    branch2: "Branch / part 2",
    sharedCurrent: "series: current is shared",
    sharedVoltage: "parallel: voltage is shared",
    voltageDrop: "voltage drop",
    branchCurrent: "branch current",
    source: "source",
    node: "node",
    returnPath: "return path",
    moreVoltage: "more source voltage increases every current and power value in this simple resistor model",
    moreR1: "changing R1 changes either its voltage share in series or its branch current in parallel",
    moreR2: "changing R2 changes the total equivalent resistance and how energy is distributed",
    transcript:
      "In series, the same current must pass through R1 and then R2, so resistances add and the source voltage is divided. In parallel, both branches connect across the same two nodes, so voltage is shared and current splits between paths.",
    model:
      "Conceptual model: this demo uses ideal wires, ideal DC source behavior, and two fixed resistors. Real circuits may include wire resistance, source limits, temperature drift, tolerances, switching transients, and safety constraints.",
  },
  th: {
    title: "การต่ออนุกรมและขนานเป็นตัวกำหนดว่าอะไรใช้ร่วมกัน",
    intro:
      "ลองสลับตัวต้านทานสองตัวเดิมระหว่างอนุกรมกับขนาน แล้วดูว่า equivalent resistance, กระแสรวม, การแบ่งแรงดัน และการแบ่งกระแสเปลี่ยนอย่างไร",
    series: "อนุกรม",
    parallel: "ขนาน",
    sourceVoltage: "แรงดันแหล่งจ่าย",
    firstResistance: "ความต้านทาน R1",
    secondResistance: "ความต้านทาน R2",
    equivalentResistance: "ความต้านทานเทียบเท่า",
    totalCurrent: "กระแสรวม",
    totalPower: "กำลังรวม",
    branch1: "แขนง / ส่วนที่ 1",
    branch2: "แขนง / ส่วนที่ 2",
    sharedCurrent: "อนุกรม: กระแสใช้ร่วมกัน",
    sharedVoltage: "ขนาน: แรงดันใช้ร่วมกัน",
    voltageDrop: "แรงดันตกคร่อม",
    branchCurrent: "กระแสแขนง",
    source: "แหล่งจ่าย",
    node: "node",
    returnPath: "เส้นทางกลับ",
    moreVoltage: "แรงดันแหล่งจ่ายมากขึ้นทำให้กระแสและกำลังทุกค่ามากขึ้นในโมเดลตัวต้านทานอย่างง่ายนี้",
    moreR1: "การเปลี่ยน R1 จะเปลี่ยนส่วนแบ่งแรงดันในวงจรอนุกรม หรือกระแสแขนงในวงจรขนาน",
    moreR2: "การเปลี่ยน R2 จะเปลี่ยนความต้านทานเทียบเท่ารวม และการกระจายพลังงานในวงจร",
    transcript:
      "ในการต่ออนุกรม กระแสเดียวกันต้องไหลผ่าน R1 แล้วผ่าน R2 ดังนั้นค่าความต้านทานจึงบวกกัน และแรงดันแหล่งจ่ายถูกแบ่งระหว่างอุปกรณ์ ในการต่อขนาน ทั้งสองแขนงต่ออยู่ระหว่าง node คู่เดียวกัน จึงมีแรงดันเท่ากัน แต่กระแสแยกไปตามแต่ละเส้นทาง",
    model:
      "แบบจำลองนี้ใช้สายไฟอุดมคติ แหล่งจ่าย DC อุดมคติ และตัวต้านทานคงที่สองตัว วงจรจริงอาจมีความต้านทานสายไฟ ขีดจำกัดของแหล่งจ่าย การเปลี่ยนค่าตามอุณหภูมิ tolerance, transient จากการสวิตช์ และข้อกำหนดด้านความปลอดภัย",
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

export default function SeriesParallelDemo({ locale = "en" }: { locale?: Locale }) {
  const [topology, setTopology] = useState<SeriesParallelTopology>("series");
  const [sourceVoltage, setSourceVoltage] = useState(12);
  const [firstResistance, setFirstResistance] = useState(100);
  const [secondResistance, setSecondResistance] = useState(220);
  const text = copy[locale];
  const estimate = useMemo(
    () =>
      estimateSeriesParallelCircuit({
        topology,
        sourceVoltage,
        firstResistanceOhms: firstResistance,
        secondResistanceOhms: secondResistance,
      }),
    [firstResistance, secondResistance, sourceVoltage, topology],
  );
  const firstBranch = estimate.branches[0];
  const secondBranch = estimate.branches[1];
  const currentFraction = clamp(estimate.totalCurrentAmps / 0.6);
  const firstSharePercent =
    topology === "series" ? estimate.voltageSplitRatio * 100 : estimate.currentSplitRatio * 100;
  const secondSharePercent = 100 - firstSharePercent;
  const equivalentFraction = clamp(estimate.equivalentResistanceOhms / 500);
  const flowWidth = 8 + currentFraction * 22;

  function setSourceVoltageFromControl(nextVoltage: number) {
    setSourceVoltage(clamp(nextVoltage, 1, 24));
  }

  function setFirstResistanceFromControl(nextResistance: number) {
    setFirstResistance(clamp(nextResistance, 10, 470));
  }

  function setSecondResistanceFromControl(nextResistance: number) {
    setSecondResistance(clamp(nextResistance, 10, 470));
  }

  const modeLabel = topology === "series" ? text.sharedCurrent : text.sharedVoltage;

  return (
    <section className="interactive-card series-parallel-demo" aria-labelledby="series-parallel-demo-title">
      <div className="interactive-copy">
        <p className="eyebrow">interactive v0.1</p>
        <h2 id="series-parallel-demo-title">{text.title}</h2>
        <p>{text.intro}</p>
      </div>

      <div className="series-parallel-demo-grid">
        <div className="demo-stage" aria-hidden="true">
          <svg viewBox="0 0 820 450" className="circuit-svg">
            <defs>
              <linearGradient id="seriesParallelGradient" x1="0" x2="1">
                <stop offset="0" stopColor="#64f4ff" />
                <stop offset="0.55" stopColor="#9eff6e" />
                <stop offset="1" stopColor="#f8d66d" />
              </linearGradient>
              <filter id="seriesParallelGlow">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="24" y="24" width="772" height="402" rx="32" className="demo-backplate" />

            <rect x="72" y="158" width="118" height="138" rx="22" className="series-parallel-source" />
            <line x1="131" y1="181" x2="131" y2="222" className="battery-long" />
            <line x1="131" y1="239" x2="131" y2="268" className="battery-short" />
            <text x="131" y="332" className="svg-label" textAnchor="middle">
              {text.source}
            </text>
            <text x="131" y="126" className="svg-label" textAnchor="middle">
              {format(sourceVoltage, locale, " V", 1)}
            </text>

            {topology === "series" ? (
              <>
                <path d="M190 226 H286" className="series-parallel-flow" style={{ strokeWidth: flowWidth }} />
                <rect x="286" y="184" width="120" height="84" rx="20" className="series-parallel-resistor r1" />
                <path d="M406 226 H506" className="series-parallel-flow" style={{ strokeWidth: flowWidth }} />
                <rect x="506" y="184" width="120" height="84" rx="20" className="series-parallel-resistor r2" />
                <path d="M626 226 H704 V350 H131 V296" className="series-parallel-return" />
                <path d="M131 158 V102 H704 V226" className="series-parallel-return faint" />
                <text x="346" y="218" className="series-parallel-resistor-label">
                  R1
                </text>
                <text x="566" y="218" className="series-parallel-resistor-label">
                  R2
                </text>
                <text x="346" y="248" className="series-parallel-small-text">
                  {format(firstResistance, locale, " Ω", 0)}
                </text>
                <text x="566" y="248" className="series-parallel-small-text">
                  {format(secondResistance, locale, " Ω", 0)}
                </text>
                <text x="456" y="146" className="svg-label" textAnchor="middle">
                  {modeLabel}
                </text>
              </>
            ) : (
              <>
                <path d="M190 226 H260" className="series-parallel-flow" style={{ strokeWidth: flowWidth }} />
                <circle cx="260" cy="226" r="10" className="series-parallel-node" />
                <path d="M260 226 V144 H330" className="series-parallel-flow branch-one" style={{ strokeWidth: 8 + currentFraction * 20 * estimate.currentSplitRatio }} />
                <rect x="330" y="102" width="130" height="84" rx="20" className="series-parallel-resistor r1" />
                <path d="M460 144 H580 V226" className="series-parallel-flow branch-one" style={{ strokeWidth: 8 + currentFraction * 20 * estimate.currentSplitRatio }} />
                <path d="M260 226 V308 H330" className="series-parallel-flow branch-two" style={{ strokeWidth: 8 + currentFraction * 20 * (1 - estimate.currentSplitRatio) }} />
                <rect x="330" y="266" width="130" height="84" rx="20" className="series-parallel-resistor r2" />
                <path d="M460 308 H580 V226" className="series-parallel-flow branch-two" style={{ strokeWidth: 8 + currentFraction * 20 * (1 - estimate.currentSplitRatio) }} />
                <circle cx="580" cy="226" r="10" className="series-parallel-node" />
                <path d="M580 226 H704 V350 H131 V296" className="series-parallel-return" />
                <path d="M131 158 V102 H704 V226" className="series-parallel-return faint" />
                <text x="395" y="136" className="series-parallel-resistor-label">
                  R1
                </text>
                <text x="395" y="166" className="series-parallel-small-text">
                  {format(firstResistance, locale, " Ω", 0)}
                </text>
                <text x="395" y="300" className="series-parallel-resistor-label">
                  R2
                </text>
                <text x="395" y="330" className="series-parallel-small-text">
                  {format(secondResistance, locale, " Ω", 0)}
                </text>
                <text x="420" y="226" className="svg-label" textAnchor="middle">
                  {modeLabel}
                </text>
              </>
            )}

            <text x="424" y="392" className="svg-label" textAnchor="middle">
              Req = {format(estimate.equivalentResistanceOhms, locale, " Ω", 1)} · Itotal ={" "}
              {format(estimate.totalCurrentAmps, locale, " A", 3)}
            </text>
          </svg>
        </div>

        <div className="demo-controls">
          <p className="state-pill">{modeLabel}</p>

          <div className="segmented-control series-parallel-toggle" role="group" aria-label={locale === "th" ? "เลือกรูปแบบวงจร" : "Choose circuit topology"}>
            <button type="button" aria-pressed={topology === "series"} onClick={() => setTopology("series")}>
              {text.series}
            </button>
            <button type="button" aria-pressed={topology === "parallel"} onClick={() => setTopology("parallel")}>
              {text.parallel}
            </button>
          </div>

          <label className="range-label" htmlFor="series-parallel-voltage">
            <span>{text.sourceVoltage}</span>
            <strong>{format(sourceVoltage, locale, " V", 1)}</strong>
          </label>
          <input
            id="series-parallel-voltage"
            type="range"
            min="1"
            max="24"
            step="0.5"
            value={sourceVoltage}
            onInput={(event) => setSourceVoltageFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setSourceVoltageFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(sourceVoltage, event.key, event.shiftKey ? 2 : 0.5, 1, 24);
              if (next !== undefined) {
                event.preventDefault();
                setSourceVoltageFromControl(next);
              }
            }}
          />
          <div className="series-parallel-meter-bar" aria-hidden="true">
            <span style={{ width: `${(sourceVoltage / 24) * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreVoltage}</p>

          <label className="range-label" htmlFor="series-parallel-r1">
            <span>{text.firstResistance}</span>
            <strong>{format(firstResistance, locale, " Ω", 0)}</strong>
          </label>
          <input
            id="series-parallel-r1"
            type="range"
            min="10"
            max="470"
            step="10"
            value={firstResistance}
            onInput={(event) => setFirstResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setFirstResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(firstResistance, event.key, event.shiftKey ? 50 : 10, 10, 470);
              if (next !== undefined) {
                event.preventDefault();
                setFirstResistanceFromControl(next);
              }
            }}
          />
          <div className="series-parallel-meter-bar resistance-one-bar" aria-hidden="true">
            <span style={{ width: `${((firstResistance - 10) / 460) * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreR1}</p>

          <label className="range-label" htmlFor="series-parallel-r2">
            <span>{text.secondResistance}</span>
            <strong>{format(secondResistance, locale, " Ω", 0)}</strong>
          </label>
          <input
            id="series-parallel-r2"
            type="range"
            min="10"
            max="470"
            step="10"
            value={secondResistance}
            onInput={(event) => setSecondResistanceFromControl(Number(event.currentTarget.value))}
            onChange={(event) => setSecondResistanceFromControl(Number(event.currentTarget.value))}
            onKeyDown={(event) => {
              const next = valueForKey(secondResistance, event.key, event.shiftKey ? 50 : 10, 10, 470);
              if (next !== undefined) {
                event.preventDefault();
                setSecondResistanceFromControl(next);
              }
            }}
          />
          <div className="series-parallel-meter-bar resistance-two-bar" aria-hidden="true">
            <span style={{ width: `${((secondResistance - 10) / 460) * 100}%` }} />
          </div>
          <p className="demo-note">{text.moreR2}</p>

          <dl className="metric-grid">
            <div>
              <dt>{text.equivalentResistance}</dt>
              <dd>{format(estimate.equivalentResistanceOhms, locale, " Ω", 2)}</dd>
            </div>
            <div>
              <dt>{text.totalCurrent}</dt>
              <dd>{format(estimate.totalCurrentAmps, locale, " A", 3)}</dd>
            </div>
            <div>
              <dt>{text.totalPower}</dt>
              <dd>{format(estimate.totalPowerWatts, locale, " W", 2)}</dd>
            </div>
            <div>
              <dt>{topology === "series" ? text.voltageDrop : text.branchCurrent}</dt>
              <dd>
                {format(firstSharePercent, locale, "%", 0)} / {format(secondSharePercent, locale, "%", 0)}
              </dd>
            </div>
          </dl>

          <div className="series-parallel-summary-bars" aria-hidden="true">
            <div>
              <span>{text.equivalentResistance}</span>
              <i style={{ width: `${equivalentFraction * 100}%` }} />
            </div>
            <div>
              <span>{text.branch1}</span>
              <i style={{ width: `${firstSharePercent}%` }} />
            </div>
            <div>
              <span>{text.branch2}</span>
              <i style={{ width: `${secondSharePercent}%` }} />
            </div>
          </div>

          <p className="demo-note">
            R1: {format(firstBranch.voltage, locale, " V", 2)} · {format(firstBranch.currentAmps, locale, " A", 3)} ·{" "}
            {format(firstBranch.powerWatts, locale, " W", 2)}
          </p>
          <p className="demo-note">
            R2: {format(secondBranch.voltage, locale, " V", 2)} · {format(secondBranch.currentAmps, locale, " A", 3)} ·{" "}
            {format(secondBranch.powerWatts, locale, " W", 2)}
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
