import { describe, expect, it } from "vitest";
import {
  calculateChargeFromCurrentTime,
  calculateConductanceFromResistance,
  calculateCurrentFromChargeTime,
  calculateElectricalPower,
  calculateEnergyFromVoltageCharge,
  calculateEnergyFromPowerTime,
  calculateOhmsLaw,
  calculateResistanceFromConductance,
  calculateVoltageFromEnergyCharge,
  convertJoulesToWattHours,
  estimateCurrentFlow,
  estimateElectronDriftSpeed,
  estimateFieldArrivalFraction,
  estimateLampCircuit,
  estimatePowerEnergy,
  estimateResistanceConductance,
  estimateVoltageEnergy,
} from "../lib/physics";

describe("physics helpers", () => {
  it("calculates Ohm's law and power", () => {
    const result = calculateOhmsLaw(9, 30);

    expect(result.current).toBeCloseTo(0.3, 10);
    expect(result.power).toBeCloseTo(2.7, 10);
  });

  it("calculates electrical power and accumulated energy", () => {
    expect(calculateElectricalPower(12, 0.5)).toBeCloseTo(6, 12);
    expect(calculateEnergyFromPowerTime(6, 60)).toBeCloseTo(360, 12);
    expect(convertJoulesToWattHours(3600)).toBeCloseTo(1, 12);

    const estimate = estimatePowerEnergy({
      voltage: 12,
      currentAmps: 0.5,
      durationSeconds: 60,
      maxPowerWatts: 12,
    });

    expect(estimate.powerWatts).toBeCloseTo(6, 12);
    expect(estimate.energyJoules).toBeCloseTo(360, 12);
    expect(estimate.energyWattHours).toBeCloseTo(0.1, 12);
    expect(estimate.chargeCoulombs).toBeCloseTo(30, 12);
    expect(estimate.heatLevel).toBeCloseTo(0.5, 12);
  });

  it("treats voltage as energy per charge", () => {
    expect(calculateEnergyFromVoltageCharge(9, 2)).toBe(18);
    expect(calculateVoltageFromEnergyCharge(18, 2)).toBe(9);

    const estimate = estimateVoltageEnergy({
      voltage: 9,
      chargeMicroCoulombs: 10,
    });

    expect(estimate.chargeCoulombs).toBeCloseTo(10e-6, 14);
    expect(estimate.energyMicroJoules).toBeCloseTo(90, 10);
    expect(estimate.electronCount).toBeGreaterThan(6e13);
  });

  it("treats current as charge per time", () => {
    expect(calculateCurrentFromChargeTime(6, 2)).toBe(3);
    expect(calculateChargeFromCurrentTime(3, 2)).toBe(6);

    const estimate = estimateCurrentFlow({
      currentAmps: 2,
      timeMilliseconds: 500,
      conductorAreaMm2: 0.5,
    });

    expect(estimate.timeSeconds).toBeCloseTo(0.5, 10);
    expect(estimate.chargeCoulombs).toBeCloseTo(1, 10);
    expect(estimate.chargeMilliCoulombs).toBeCloseTo(1000, 10);
    expect(estimate.electronCount).toBeGreaterThan(6e18);
    expect(estimate.driftSpeedMillimetersPerSecond).toBeGreaterThan(0);
  });

  it("treats conductance as the reciprocal of resistance", () => {
    expect(calculateConductanceFromResistance(100)).toBeCloseTo(0.01, 12);
    expect(calculateResistanceFromConductance(0.01)).toBeCloseTo(100, 12);

    const estimate = estimateResistanceConductance({
      voltage: 12,
      resistanceOhms: 24,
      maxPowerWatts: 10,
    });

    expect(estimate.conductanceSiemens).toBeCloseTo(1 / 24, 12);
    expect(estimate.currentAmps).toBeCloseTo(0.5, 12);
    expect(estimate.powerWatts).toBeCloseTo(6, 12);
    expect(estimate.heatLevel).toBeCloseTo(0.6, 12);
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
