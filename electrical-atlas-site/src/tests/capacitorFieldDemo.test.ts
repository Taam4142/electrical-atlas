import { describe, expect, it } from "vitest";
import componentSource from "../components/CapacitorFieldDemo.tsx?raw";

describe("CapacitorFieldDemo contract", () => {
  it("uses two native keyboard-accessible inputs while deriving charge and energy", () => {
    expect(componentSource.match(/type="range"/gu)).toHaveLength(2);
    expect(componentSource.match(/aria-labelledby=/gu)).toHaveLength(3);
    expect(componentSource.match(/aria-valuetext=/gu)).toHaveLength(2);
    expect(componentSource).toContain("rangeValueForKey");
    expect(componentSource).toContain("event.shiftKey ? 10 : 1");
    expect(componentSource).toContain("event.shiftKey ? 2 : 0.5");
    expect(componentSource).toContain("estimateCapacitorState");
    expect(componentSource).toContain("chargeMicroCoulombs");
    expect(componentSource).toContain("energyMicroJoules");
    expect(componentSource).toContain('estimate.energyMicroJoules, locale, "", 3');
    expect(componentSource).not.toContain("setCharge");
    expect(componentSource).not.toContain("setEnergy");
  });

  it("provides localized labels, unique IDs, one polite live summary, and a transcript", () => {
    expect(componentSource).toContain("useId");
    expect(componentSource.match(/aria-live="polite"/gu)).toHaveLength(1);
    expect(componentSource).toContain('aria-atomic="true"');
    expect(componentSource).toContain('className="visually-hidden"');
    expect(componentSource).toContain('aria-hidden="true"');
    expect(componentSource).toContain("Visual transcript");
    expect(componentSource).toContain("คำบรรยายภาพ");
    expect(componentSource).toContain("ความจุไฟฟ้า");
    expect(componentSource).toContain("ขนาดแรงดัน");
    expect(componentSource).toContain("ไมโครคูลอมบ์");
    expect(componentSource).toContain("ไมโครจูล");
    expect(componentSource).toContain('../styles/capacitor-demo.css');
  });

  it("keeps the symbolic field scientifically bounded", () => {
    expect(componentSource).toContain("equal-and-opposite plate-charge magnitude");
    expect(componentSource).toMatch(/net charge of the complete capacitor/iu);
    expect(componentSource).toContain("No electron crosses the dielectric in this picture");
    expect(componentSource).toContain("Q and U are calculated, not independent controls");
    expect(componentSource).toContain("ideal, linear, constant-capacitance model");
    expect(componentSource).toContain("left plate (+ reference)");
    expect(componentSource).toContain("zero field in this model");
    expect(componentSource).toContain("capacitor-plate-neutral");
    expect(componentSource).toContain("capacitor-visual-key");
    expect(componentSource).toContain("safe working ratings are not simulated");
    expect(componentSource).toContain("capacitor-dipole");
    expect(componentSource).toContain("|Q| = C|V|; U = ½C|V|²");
    expect(componentSource).not.toContain("|Q| = C|V|  ·  U");
    expect(componentSource).not.toContain("electron-dot");
    expect(componentSource).not.toContain("setInterval");
    expect(componentSource).not.toContain("requestAnimationFrame");
  });
});
