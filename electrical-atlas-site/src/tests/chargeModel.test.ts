import { describe, expect, it } from "vitest";
import { ELEMENTARY_CHARGE_COULOMB, estimateChargeTransfer } from "../lib/chargeModel";

describe("charge-transfer model", () => {
  it("starts with two neutral objects and a neutral pair", () => {
    expect(estimateChargeTransfer(0)).toEqual({
      transferredElectronsAtoB: 0,
      transferDirection: "neutral",
      electronCount: 0,
      objectAChargeElementary: 0,
      objectBChargeElementary: 0,
      objectAChargeCoulombs: 0,
      objectBChargeCoulombs: 0,
      pairChargeCoulombs: 0,
    });
  });

  it("makes A positive and B negative when three electrons move A to B", () => {
    const estimate = estimateChargeTransfer(3);

    expect(estimate.transferDirection).toBe("a-to-b");
    expect(estimate.electronCount).toBe(3);
    expect(estimate.objectAChargeElementary).toBe(3);
    expect(estimate.objectBChargeElementary).toBe(-3);
    expect(estimate.objectAChargeCoulombs).toBeCloseTo(3 * ELEMENTARY_CHARGE_COULOMB, 30);
    expect(estimate.objectBChargeCoulombs).toBeCloseTo(-3 * ELEMENTARY_CHARGE_COULOMB, 30);
  });

  it("reverses both signs when electrons move B to A", () => {
    const estimate = estimateChargeTransfer(-3);

    expect(estimate.transferDirection).toBe("b-to-a");
    expect(estimate.objectAChargeElementary).toBe(-3);
    expect(estimate.objectBChargeElementary).toBe(3);
  });

  it.each([-1_000_000, -5, -1, 0, 1, 5, 1_000_000])(
    "conserves the total pair charge for %i transferred electrons",
    (transferredElectrons) => {
      const estimate = estimateChargeTransfer(transferredElectrons);

      expect(estimate.pairChargeCoulombs).toBe(0);
      expect(estimate.objectAChargeCoulombs + estimate.objectBChargeCoulombs).toBe(0);
    },
  );

  it("uses the SI-defined elementary-charge value", () => {
    expect(ELEMENTARY_CHARGE_COULOMB).toBe(1.602_176_634e-19);
    expect(estimateChargeTransfer(1).objectAChargeCoulombs).toBe(1.602_176_634e-19);
  });

  it.each([0.5, Number.NaN, Number.POSITIVE_INFINITY, Number.MAX_SAFE_INTEGER + 1])(
    "rejects invalid electron count %s",
    (transferredElectrons) => {
      expect(() => estimateChargeTransfer(transferredElectrons)).toThrow(
        "Transferred electron count must be a safe integer.",
      );
    },
  );
});
