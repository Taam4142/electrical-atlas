import { describe, expect, it } from "vitest";
import { formatLocalizedNumber } from "../lib/numberFormatting";
import { estimateVoltageEnergy } from "../lib/physics";

describe("VoltageEnergyDemo accessible output", () => {
  it.each(["en", "th"] as const)("formats the %s energy value without floating-point artifacts", (locale) => {
    const estimate = estimateVoltageEnergy({ voltage: 9, chargeMicroCoulombs: 10 });
    const formattedValue = formatLocalizedNumber(estimate.energyMicroJoules, locale, "", 2);

    expect(estimate.energyMicroJoules).toBeCloseTo(90, 10);
    expect(formattedValue).toBe("90");
    expect(`${formattedValue} µJ`).toBe("90 µJ");
    expect(formattedValue).not.toContain("89.99999999999999");
  });
});
