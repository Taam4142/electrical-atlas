export const ELEMENTARY_CHARGE_COULOMB = 1.602_176_634e-19;
export const COPPER_FREE_ELECTRON_DENSITY_PER_M3 = 8.5e28;
export const TYPICAL_SIGNAL_PROPAGATION_SPEED_M_PER_S = 2.0e8;

export type OhmsLawResult = {
  voltage: number;
  resistance: number;
  current: number;
  power: number;
};

export type LampCircuitEstimate = OhmsLawResult & {
  fieldArrivalFraction: number;
  driftSpeedMetersPerSecond: number;
  driftSpeedMillimetersPerSecond: number;
};

export type VoltageEnergyEstimate = {
  voltage: number;
  chargeCoulombs: number;
  energyJoules: number;
  energyMicroJoules: number;
  electronCount: number;
};

export type CurrentFlowEstimate = {
  currentAmps: number;
  timeSeconds: number;
  chargeCoulombs: number;
  chargeMilliCoulombs: number;
  electronCount: number;
  driftSpeedMetersPerSecond: number;
  driftSpeedMillimetersPerSecond: number;
};

export type ResistanceConductanceEstimate = {
  voltage: number;
  resistanceOhms: number;
  conductanceSiemens: number;
  currentAmps: number;
  powerWatts: number;
  heatLevel: number;
};

export function clamp(value: number, min = 0, max = 1): number {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
}

export function calculateOhmsLaw(voltage: number, resistance: number): OhmsLawResult {
  if (!Number.isFinite(voltage)) {
    throw new Error("Voltage must be a finite number.");
  }

  if (!Number.isFinite(resistance) || resistance <= 0) {
    throw new Error("Resistance must be a positive finite number.");
  }

  const current = voltage / resistance;

  return {
    voltage,
    resistance,
    current,
    power: voltage * current,
  };
}

export function calculateConductanceFromResistance(resistanceOhms: number): number {
  if (!Number.isFinite(resistanceOhms) || resistanceOhms <= 0) {
    throw new Error("Resistance must be a positive finite number.");
  }

  return 1 / resistanceOhms;
}

export function calculateResistanceFromConductance(conductanceSiemens: number): number {
  if (!Number.isFinite(conductanceSiemens) || conductanceSiemens <= 0) {
    throw new Error("Conductance must be a positive finite number.");
  }

  return 1 / conductanceSiemens;
}

export function estimateResistanceConductance(params: {
  voltage: number;
  resistanceOhms: number;
  maxPowerWatts?: number;
}): ResistanceConductanceEstimate {
  const { voltage, resistanceOhms, maxPowerWatts = 6 } = params;

  if (!Number.isFinite(maxPowerWatts) || maxPowerWatts <= 0) {
    throw new Error("Maximum power must be a positive finite number.");
  }

  const ohms = calculateOhmsLaw(voltage, resistanceOhms);
  const conductanceSiemens = calculateConductanceFromResistance(resistanceOhms);

  return {
    voltage,
    resistanceOhms,
    conductanceSiemens,
    currentAmps: ohms.current,
    powerWatts: ohms.power,
    heatLevel: clamp(Math.abs(ohms.power) / maxPowerWatts),
  };
}

export function calculateEnergyFromVoltageCharge(voltage: number, chargeCoulombs: number): number {
  if (!Number.isFinite(voltage)) {
    throw new Error("Voltage must be a finite number.");
  }

  if (!Number.isFinite(chargeCoulombs) || chargeCoulombs < 0) {
    throw new Error("Charge must be a non-negative finite number.");
  }

  return voltage * chargeCoulombs;
}

export function calculateVoltageFromEnergyCharge(energyJoules: number, chargeCoulombs: number): number {
  if (!Number.isFinite(energyJoules)) {
    throw new Error("Energy must be a finite number.");
  }

  if (!Number.isFinite(chargeCoulombs) || chargeCoulombs <= 0) {
    throw new Error("Charge must be a positive finite number.");
  }

  return energyJoules / chargeCoulombs;
}

export function estimateVoltageEnergy(params: {
  voltage: number;
  chargeMicroCoulombs: number;
}): VoltageEnergyEstimate {
  if (!Number.isFinite(params.chargeMicroCoulombs) || params.chargeMicroCoulombs < 0) {
    throw new Error("Charge must be a non-negative finite number.");
  }

  const chargeCoulombs = params.chargeMicroCoulombs * 1e-6;
  const energyJoules = calculateEnergyFromVoltageCharge(params.voltage, chargeCoulombs);

  return {
    voltage: params.voltage,
    chargeCoulombs,
    energyJoules,
    energyMicroJoules: energyJoules * 1e6,
    electronCount: chargeCoulombs / ELEMENTARY_CHARGE_COULOMB,
  };
}

export function calculateCurrentFromChargeTime(chargeCoulombs: number, timeSeconds: number): number {
  if (!Number.isFinite(chargeCoulombs) || chargeCoulombs < 0) {
    throw new Error("Charge must be a non-negative finite number.");
  }

  if (!Number.isFinite(timeSeconds) || timeSeconds <= 0) {
    throw new Error("Time must be a positive finite number.");
  }

  return chargeCoulombs / timeSeconds;
}

export function calculateChargeFromCurrentTime(currentAmps: number, timeSeconds: number): number {
  if (!Number.isFinite(currentAmps) || currentAmps < 0) {
    throw new Error("Current must be a non-negative finite number.");
  }

  if (!Number.isFinite(timeSeconds) || timeSeconds < 0) {
    throw new Error("Time must be a non-negative finite number.");
  }

  return currentAmps * timeSeconds;
}

export function estimateElectronDriftSpeed(params: {
  current: number;
  conductorAreaM2: number;
  carrierDensityPerM3?: number;
  carrierChargeCoulomb?: number;
}): number {
  const {
    current,
    conductorAreaM2,
    carrierDensityPerM3 = COPPER_FREE_ELECTRON_DENSITY_PER_M3,
    carrierChargeCoulomb = ELEMENTARY_CHARGE_COULOMB,
  } = params;

  if (!Number.isFinite(current) || current < 0) {
    throw new Error("Current must be a non-negative finite number.");
  }

  if (!Number.isFinite(conductorAreaM2) || conductorAreaM2 <= 0) {
    throw new Error("Conductor area must be a positive finite number.");
  }

  if (!Number.isFinite(carrierDensityPerM3) || carrierDensityPerM3 <= 0) {
    throw new Error("Carrier density must be a positive finite number.");
  }

  if (!Number.isFinite(carrierChargeCoulomb) || carrierChargeCoulomb <= 0) {
    throw new Error("Carrier charge must be a positive finite number.");
  }

  return current / (carrierDensityPerM3 * carrierChargeCoulomb * conductorAreaM2);
}

export function estimateCurrentFlow(params: {
  currentAmps: number;
  timeMilliseconds: number;
  conductorAreaMm2?: number;
}): CurrentFlowEstimate {
  const { currentAmps, timeMilliseconds, conductorAreaMm2 = 0.5 } = params;

  if (!Number.isFinite(timeMilliseconds) || timeMilliseconds < 0) {
    throw new Error("Time must be a non-negative finite number.");
  }

  if (!Number.isFinite(conductorAreaMm2) || conductorAreaMm2 <= 0) {
    throw new Error("Conductor area must be a positive finite number.");
  }

  const timeSeconds = timeMilliseconds / 1000;
  const chargeCoulombs = calculateChargeFromCurrentTime(currentAmps, timeSeconds);
  const driftSpeedMetersPerSecond = estimateElectronDriftSpeed({
    current: currentAmps,
    conductorAreaM2: conductorAreaMm2 * 1e-6,
  });

  return {
    currentAmps,
    timeSeconds,
    chargeCoulombs,
    chargeMilliCoulombs: chargeCoulombs * 1000,
    electronCount: chargeCoulombs / ELEMENTARY_CHARGE_COULOMB,
    driftSpeedMetersPerSecond,
    driftSpeedMillimetersPerSecond: driftSpeedMetersPerSecond * 1000,
  };
}

export function estimateFieldArrivalFraction(params: {
  elapsedSeconds: number;
  pathLengthMeters: number;
  propagationSpeedMPerS?: number;
}): number {
  const {
    elapsedSeconds,
    pathLengthMeters,
    propagationSpeedMPerS = TYPICAL_SIGNAL_PROPAGATION_SPEED_M_PER_S,
  } = params;

  if (!Number.isFinite(elapsedSeconds) || elapsedSeconds < 0) {
    return 0;
  }

  if (!Number.isFinite(pathLengthMeters) || pathLengthMeters <= 0) {
    throw new Error("Path length must be a positive finite number.");
  }

  if (!Number.isFinite(propagationSpeedMPerS) || propagationSpeedMPerS <= 0) {
    throw new Error("Propagation speed must be a positive finite number.");
  }

  return clamp((elapsedSeconds * propagationSpeedMPerS) / pathLengthMeters);
}

export function estimateLampCircuit(params: {
  voltage: number;
  resistance: number;
  conductorAreaM2: number;
  fieldProgressFraction: number;
}): LampCircuitEstimate {
  const ohms = calculateOhmsLaw(params.voltage, params.resistance);
  const activeCurrent = ohms.current * clamp(params.fieldProgressFraction);
  const driftSpeedMetersPerSecond = estimateElectronDriftSpeed({
    current: Math.abs(activeCurrent),
    conductorAreaM2: params.conductorAreaM2,
  });

  return {
    ...ohms,
    current: activeCurrent,
    power: params.voltage * activeCurrent,
    fieldArrivalFraction: clamp(params.fieldProgressFraction),
    driftSpeedMetersPerSecond,
    driftSpeedMillimetersPerSecond: driftSpeedMetersPerSecond * 1000,
  };
}
