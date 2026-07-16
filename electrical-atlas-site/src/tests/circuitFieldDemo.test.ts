import { describe, expect, it } from "vitest";
import componentSource from "../components/CircuitFieldDemo.tsx?raw";
import { estimateLampCircuit } from "../lib/physics";

describe("CircuitFieldDemo contract", () => {
  it("uses only coherent open and closed steady-state calculations", () => {
    const openEstimate = estimateLampCircuit({
      voltage: 9,
      resistance: 30,
      conductorAreaM2: 0.5e-6,
      circuitClosed: false,
    });
    const closedEstimate = estimateLampCircuit({
      voltage: 9,
      resistance: 30,
      conductorAreaM2: 0.5e-6,
      circuitClosed: true,
    });

    expect(openEstimate).toMatchObject({
      sourceVoltage: 9,
      loadResistanceOhms: 30,
      steadyCurrentAmps: 0,
      loadPowerWatts: 0,
    });
    expect(closedEstimate.steadyCurrentAmps).toBeCloseTo(0.3, 10);
    expect(closedEstimate.loadPowerWatts).toBeCloseTo(2.7, 10);
    expect(closedEstimate.driftSpeedMillimetersPerSecond).toBeCloseTo(0.044_058, 5);
    expect(componentSource).toContain("circuitClosed: isClosed");
    expect(componentSource).not.toContain("fieldProgressFraction");
    expect(componentSource).not.toContain('type="range"');
  });

  it("keeps the open-circuit field and opposing current directions visible in the model", () => {
    expect(componentSource).toContain("opacity: isClosed ? 0 : 1");
    expect(componentSource).toContain("fieldArrowId");
    expect(componentSource).toContain("currentArrowId");
    expect(componentSource).toContain("electronArrowId");
    expect(componentSource).toContain("average electron drift is in the opposite direction");
    expect(componentSource).toContain("opacity: isClosed ? 1 : 0");
  });

  it("provides localized native controls, live output, and model boundaries", () => {
    expect(componentSource).toContain('role="group"');
    expect(componentSource).toContain('aria-live="polite"');
    expect(componentSource).toContain('aria-atomic="true"');
    expect(componentSource).toContain("useId");
    expect(componentSource).toContain("สื่อโต้ตอบ v0.1");
    expect(componentSource).toContain("อัตราเร็วการดริฟต์ของอิเล็กตรอนโดยประมาณ");
    expect(componentSource).toContain("the instant after contact is not simulated");
    expect(componentSource).toContain("not a construction instruction or component rating");
    expect(componentSource).toContain('<p className="demo-note">{text.model}</p>');
  });
});
