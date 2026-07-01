import { describe, expect, it } from "vitest";
import {
  calculateOhmsLaw,
  estimateElectronDriftSpeed,
  estimateFieldArrivalFraction,
  estimateLampCircuit,
} from "../lib/physics";

describe("physics helpers", () => {
  it("calculates Ohm's law and power", () => {
    const result = calculateOhmsLaw(9, 30);

    expect(result.current).toBeCloseTo(0.3, 10);
    expect(result.power).toBeCloseTo(2.7, 10);
  });

  it("estimates slow electron drift compared with field propagation", () => {
    const drift = estimateElectronDriftSpeed({
      current: 0.3,
      conductorAreaM2: 0.5e-6,
    });

    expect(drift).toBeGreaterThan(0);
    expect(drift).toBeLessThan(0.001);
  });

  it("clamps field arrival fraction into the visible range", () => {
    expect(
      estimateFieldArrivalFraction({
        elapsedSeconds: 0.000_000_010,
        pathLengthMeters: 1,
        propagationSpeedMPerS: 2e8,
      }),
    ).toBe(1);

    expect(
      estimateFieldArrivalFraction({
        elapsedSeconds: -1,
        pathLengthMeters: 1,
      }),
    ).toBe(0);
  });

  it("scales the conceptual lamp circuit by field progress", () => {
    const estimate = estimateLampCircuit({
      voltage: 9,
      resistance: 30,
      conductorAreaM2: 0.5e-6,
      fieldProgressFraction: 0.5,
    });

    expect(estimate.current).toBeCloseTo(0.15, 10);
    expect(estimate.power).toBeCloseTo(1.35, 10);
    expect(estimate.fieldArrivalFraction).toBe(0.5);
  });
});
