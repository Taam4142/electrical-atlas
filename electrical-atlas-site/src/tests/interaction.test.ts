import { describe, expect, it } from "vitest";
import { normalizeProgress, progressForKey, rangeValueForKey } from "../lib/interaction";
import { estimateMosfetSwitch } from "../lib/mosfet";

describe("interaction helpers", () => {
  it("normalizes progress values into the 0-100 range", () => {
    expect(normalizeProgress(-10)).toBe(0);
    expect(normalizeProgress(42.6)).toBe(43);
    expect(normalizeProgress(120)).toBe(100);
    expect(normalizeProgress(Number.NaN)).toBe(0);
  });

  it("maps keyboard controls to accessible slider progress", () => {
    expect(progressForKey(62, "Home")).toBe(0);
    expect(progressForKey(62, "End")).toBe(100);
    expect(progressForKey(62, "ArrowLeft")).toBe(61);
    expect(progressForKey(62, "ArrowRight")).toBe(63);
    expect(progressForKey(62, "ArrowUp", true)).toBe(72);
    expect(progressForKey(62, "PageDown")).toBe(52);
    expect(progressForKey(62, "PageUp")).toBe(72);
  });

  it("ignores unrelated keys", () => {
    expect(progressForKey(62, "Tab")).toBeUndefined();
  });

  it("maps keyboard controls to bounded range values", () => {
    expect(rangeValueForKey(9, "Home", 0.5, 0, 24)).toBe(0);
    expect(rangeValueForKey(9, "End", 0.5, 0, 24)).toBe(24);
    expect(rangeValueForKey(9, "ArrowLeft", 0.5, 0, 24)).toBe(8.5);
    expect(rangeValueForKey(9, "ArrowRight", 0.5, 0, 24)).toBe(9.5);
    expect(rangeValueForKey(9, "PageDown", 0.5, 0, 24)).toBe(6.5);
    expect(rangeValueForKey(9, "PageUp", 0.5, 0, 24)).toBe(11.5);
    expect(rangeValueForKey(0, "ArrowDown", 0.5, 0, 24)).toBe(0);
    expect(rangeValueForKey(24, "ArrowUp", 0.5, 0, 24)).toBe(24);
    expect(rangeValueForKey(9, "Tab", 0.5, 0, 24)).toBeUndefined();
  });
});

describe("MOSFET switch estimate", () => {
  it("stays off below threshold", () => {
    const estimate = estimateMosfetSwitch({ gateVoltage: 1.8 });

    expect(estimate.region).toBe("off");
    expect(estimate.channelFraction).toBe(0);
    expect(estimate.drainCurrentMilliAmps).toBeLessThan(0.01);
  });

  it("forms a stronger channel as gate voltage rises", () => {
    const weak = estimateMosfetSwitch({ gateVoltage: 3.1 });
    const strong = estimateMosfetSwitch({ gateVoltage: 5 });

    expect(weak.region).toBe("forming");
    expect(strong.region).toBe("on");
    expect(strong.channelFraction).toBeGreaterThan(weak.channelFraction);
    expect(strong.drainCurrentMilliAmps).toBeGreaterThan(weak.drainCurrentMilliAmps);
  });
});
