import { describe, expect, it } from "vitest";
import { estimateSwitchContact } from "../lib/switches";

describe("switch contact model", () => {
  it("models a closed switch with full continuity, current, and I²R contact heat", () => {
    const estimate = estimateSwitchContact({
      positionPercent: 66,
      loadCurrentAmps: 2,
      contactResistanceMilliOhms: 50,
      loadType: "resistive",
    });

    expect(estimate.state).toBe("closed");
    expect(estimate.continuityFraction).toBe(1);
    expect(estimate.currentAmps).toBeCloseTo(2, 12);
    expect(estimate.contactResistanceOhms).toBeCloseTo(0.05, 12);
    expect(estimate.contactHeatWatts).toBeCloseTo(0.2, 12);
  });

  it("shows contact bounce as partial continuity with pulse cues", () => {
    const estimate = estimateSwitchContact({
      positionPercent: 48,
      loadCurrentAmps: 1,
      contactResistanceMilliOhms: 25,
      loadType: "signal",
    });

    expect(estimate.state).toBe("bouncing");
    expect(estimate.continuityFraction).toBeGreaterThan(0);
    expect(estimate.continuityFraction).toBeLessThan(1);
    expect(estimate.bouncePulses).toBeGreaterThan(0);
  });

  it("treats inductive loads as more arc-prone while opening", () => {
    const resistive = estimateSwitchContact({
      positionPercent: 92,
      loadCurrentAmps: 3,
      contactResistanceMilliOhms: 30,
      loadType: "resistive",
    });
    const inductive = estimateSwitchContact({
      positionPercent: 92,
      loadCurrentAmps: 3,
      contactResistanceMilliOhms: 30,
      loadType: "inductive",
    });

    expect(resistive.state).toBe("opening");
    expect(inductive.arcRisk).toBeGreaterThan(resistive.arcRisk);
    expect(inductive.arcWarning).toBe(true);
  });

  it("clamps out-of-range numeric inputs into the educational model range", () => {
    const estimate = estimateSwitchContact({
      positionPercent: 150,
      loadCurrentAmps: 40,
      contactResistanceMilliOhms: -20,
      loadType: "inductive",
    });

    expect(estimate.positionPercent).toBe(100);
    expect(estimate.currentAmps).toBeLessThanOrEqual(20);
    expect(estimate.contactResistanceOhms).toBeCloseTo(0.001, 12);
    expect(estimate.arcRisk).toBeLessThanOrEqual(1);
  });
});
