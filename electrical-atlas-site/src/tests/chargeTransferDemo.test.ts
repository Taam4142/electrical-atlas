import { describe, expect, it } from "vitest";
import componentSource from "../components/ChargeTransferDemo.tsx?raw";

describe("ChargeTransferDemo contract", () => {
  it("uses discrete native action controls with bounded visual states", () => {
    expect(componentSource).toContain("VISUAL_LIMIT = 5");
    expect(componentSource).toContain('type="button"');
    expect(componentSource).toContain('role="group"');
    expect(componentSource).toContain("aria-disabled={transferredElectronsAtoB >= VISUAL_LIMIT}");
    expect(componentSource).toContain("aria-disabled={transferredElectronsAtoB <= -VISUAL_LIMIT}");
    expect(componentSource).toContain("aria-disabled={transferredElectronsAtoB === 0}");
    expect(componentSource).toContain("Math.min(VISUAL_LIMIT, count + 1)");
    expect(componentSource).toContain("Math.max(-VISUAL_LIMIT, count - 1)");
    expect(componentSource).toContain("setTransferredElectronsAtoB(0)");
    expect(componentSource).toContain('../styles/charge-demo.css');
    expect(componentSource).not.toContain('type="range"');
    expect(componentSource).not.toContain("aria-pressed");
    expect(componentSource).not.toContain("setInterval");
    expect(componentSource).not.toContain("requestAnimationFrame");
  });

  it("provides localized names, live output, and a transcript", () => {
    expect(componentSource).toContain("useId");
    expect(componentSource).toContain('aria-live="polite"');
    expect(componentSource).toContain('aria-atomic="true"');
    expect(componentSource).toContain('aria-hidden="true"');
    expect(componentSource).toContain("Visual transcript");
    expect(componentSource).toContain("คำบรรยายภาพ");
    expect(componentSource).toContain("Move one electron A → B");
    expect(componentSource).toContain("ย้ายอิเล็กตรอน A → B");
    expect(componentSource).toContain("Move one electron from A to B");
    expect(componentSource).toContain("ย้ายอิเล็กตรอนหนึ่งตัวจาก A ไป B");
    expect(componentSource).toContain("Five-electron visual limit reached");
    expect(componentSource).toContain("elementaryChargeSpoken");
    expect(componentSource).toContain("text.stateAnnouncement(spokenSummary");
    expect(componentSource).toContain("compactAnnouncement");
    expect(componentSource).toContain('positiveShort: "บวก"');
    expect(componentSource).toContain('negativeShort: "ลบ"');
    expect(componentSource).toContain('className="charge-demo-actions"');
  });

  it("states the scientific boundaries that keep the ledger honest", () => {
    expect(componentSource).toContain("exchange electrons only with each other");
    expect(componentSource).toContain("their lattice ions stay at fixed model positions");
    expect(componentSource).toContain("pair exchanges no charge with its surroundings");
    expect(componentSource).toContain("not literal particle positions or scale");
    expect(componentSource).toContain("Positive net charge here means an electron deficit");
    expect(componentSource).toContain("five-electron stop is only a readability limit");
    expect(componentSource).not.toContain("setTimeout");
  });
});
