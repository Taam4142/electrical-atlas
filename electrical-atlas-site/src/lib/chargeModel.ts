import { ELEMENTARY_CHARGE_COULOMB } from "./physics";

export { ELEMENTARY_CHARGE_COULOMB };

export type ChargeTransferDirection = "neutral" | "a-to-b" | "b-to-a";

export type ChargeTransferEstimate = {
  transferredElectronsAtoB: number;
  transferDirection: ChargeTransferDirection;
  electronCount: number;
  objectAChargeElementary: number;
  objectBChargeElementary: number;
  objectAChargeCoulombs: number;
  objectBChargeCoulombs: number;
  pairChargeCoulombs: number;
};

/**
 * Models electron bookkeeping for two initially neutral objects that exchange
 * charge only with each other. A positive input means electrons moved A to B.
 * The UI may impose a small visual range, but the physics helper does not.
 */
export function estimateChargeTransfer(transferredElectronsAtoB: number): ChargeTransferEstimate {
  if (!Number.isSafeInteger(transferredElectronsAtoB)) {
    throw new Error("Transferred electron count must be a safe integer.");
  }

  const objectAChargeElementary = transferredElectronsAtoB;
  const objectBChargeElementary = transferredElectronsAtoB === 0 ? 0 : -transferredElectronsAtoB;
  const objectAChargeCoulombs = objectAChargeElementary * ELEMENTARY_CHARGE_COULOMB;
  const objectBChargeCoulombs = objectBChargeElementary * ELEMENTARY_CHARGE_COULOMB;

  return {
    transferredElectronsAtoB,
    transferDirection:
      transferredElectronsAtoB === 0
        ? "neutral"
        : transferredElectronsAtoB > 0
          ? "a-to-b"
          : "b-to-a",
    electronCount: Math.abs(transferredElectronsAtoB),
    objectAChargeElementary,
    objectBChargeElementary,
    objectAChargeCoulombs,
    objectBChargeCoulombs,
    pairChargeCoulombs: objectAChargeCoulombs + objectBChargeCoulombs,
  };
}
