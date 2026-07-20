export type CapacitorStateInput = {
  capacitanceMicrofarads: number;
  voltageMagnitudeVolts: number;
};

export type CapacitorStateEstimate = {
  capacitanceMicrofarads: number;
  capacitanceFarads: number;
  voltageMagnitudeVolts: number;
  chargeMicroCoulombs: number;
  chargeCoulombs: number;
  energyMicroJoules: number;
  energyJoules: number;
  positivePlateChargeCoulombs: number;
  negativePlateChargeCoulombs: number;
  netDeviceChargeCoulombs: number;
};

const MICRO = 1e-6;

/**
 * Calculates charge magnitude and stored energy for an ideal, linear,
 * constant-capacitance two-terminal capacitor.
 *
 * The complete device is assumed to start electrically neutral, so the two
 * plate charges are equal and opposite. The voltage input is a magnitude;
 * polarity is intentionally outside this small teaching model.
 */
export function estimateCapacitorState({
  capacitanceMicrofarads,
  voltageMagnitudeVolts,
}: CapacitorStateInput): CapacitorStateEstimate {
  if (!Number.isFinite(capacitanceMicrofarads) || capacitanceMicrofarads <= 0) {
    throw new Error("Capacitance must be a finite number greater than zero.");
  }

  if (!Number.isFinite(voltageMagnitudeVolts) || voltageMagnitudeVolts < 0) {
    throw new Error("Voltage magnitude must be a finite, non-negative number.");
  }

  const capacitanceFarads = capacitanceMicrofarads * MICRO;
  const chargeMicroCoulombs = capacitanceMicrofarads * voltageMagnitudeVolts;
  const chargeCoulombs = chargeMicroCoulombs * MICRO;
  const energyMicroJoules = 0.5 * capacitanceMicrofarads * voltageMagnitudeVolts ** 2;
  const energyJoules = energyMicroJoules * MICRO;
  const negativePlateChargeCoulombs = chargeCoulombs === 0 ? 0 : -chargeCoulombs;

  return {
    capacitanceMicrofarads,
    capacitanceFarads,
    voltageMagnitudeVolts,
    chargeMicroCoulombs,
    chargeCoulombs,
    energyMicroJoules,
    energyJoules,
    positivePlateChargeCoulombs: chargeCoulombs,
    negativePlateChargeCoulombs,
    netDeviceChargeCoulombs: chargeCoulombs + negativePlateChargeCoulombs,
  };
}
