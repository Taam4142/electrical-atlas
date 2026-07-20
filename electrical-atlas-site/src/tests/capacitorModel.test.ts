import { describe, expect, it } from "vitest";
import { estimateCapacitorState } from "../lib/capacitorModel";

describe("estimateCapacitorState", () => {
  it("calculates charge, energy, and SI conversions for 10 microfarads at 5 volts", () => {
    const estimate = estimateCapacitorState({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 5,
    });

    expect(estimate).toMatchObject({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 5,
      chargeMicroCoulombs: 50,
      energyMicroJoules: 125,
      netDeviceChargeCoulombs: 0,
    });
    expect(estimate.capacitanceFarads).toBeCloseTo(10e-6, 15);
    expect(estimate.chargeCoulombs).toBeCloseTo(50e-6, 15);
    expect(estimate.energyJoules).toBeCloseTo(125e-6, 15);
    expect(estimate.positivePlateChargeCoulombs).toBeCloseTo(50e-6, 15);
    expect(estimate.negativePlateChargeCoulombs).toBeCloseTo(-50e-6, 15);
  });

  it("scales charge and energy linearly with capacitance", () => {
    const baseline = estimateCapacitorState({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 5,
    });
    const doubledCapacitance = estimateCapacitorState({
      capacitanceMicrofarads: 20,
      voltageMagnitudeVolts: 5,
    });

    expect(doubledCapacitance.chargeMicroCoulombs).toBeCloseTo(baseline.chargeMicroCoulombs * 2, 12);
    expect(doubledCapacitance.energyMicroJoules).toBeCloseTo(baseline.energyMicroJoules * 2, 12);
  });

  it("scales charge linearly and energy quadratically with voltage", () => {
    const baseline = estimateCapacitorState({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 5,
    });
    const doubledVoltage = estimateCapacitorState({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 10,
    });

    expect(doubledVoltage.chargeMicroCoulombs).toBeCloseTo(baseline.chargeMicroCoulombs * 2, 12);
    expect(doubledVoltage.energyMicroJoules).toBeCloseTo(baseline.energyMicroJoules * 4, 12);
  });

  it("returns zero charge and energy at zero voltage without negative zero", () => {
    const estimate = estimateCapacitorState({
      capacitanceMicrofarads: 10,
      voltageMagnitudeVolts: 0,
    });

    expect(estimate.chargeMicroCoulombs).toBe(0);
    expect(estimate.energyMicroJoules).toBe(0);
    expect(estimate.positivePlateChargeCoulombs).toBe(0);
    expect(estimate.negativePlateChargeCoulombs).toBe(0);
    expect(Object.is(estimate.negativePlateChargeCoulombs, -0)).toBe(false);
    expect(estimate.netDeviceChargeCoulombs).toBe(0);
  });

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    "rejects invalid capacitance %s",
    (capacitanceMicrofarads) => {
      expect(() =>
        estimateCapacitorState({ capacitanceMicrofarads, voltageMagnitudeVolts: 5 }),
      ).toThrow("Capacitance must be a finite number greater than zero.");
    },
  );

  it.each([-1, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    "rejects invalid voltage magnitude %s",
    (voltageMagnitudeVolts) => {
      expect(() =>
        estimateCapacitorState({ capacitanceMicrofarads: 10, voltageMagnitudeVolts }),
      ).toThrow("Voltage magnitude must be a finite, non-negative number.");
    },
  );
});
