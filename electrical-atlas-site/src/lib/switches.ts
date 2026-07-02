import { clamp } from "./physics";

export type SwitchLoadType = "signal" | "resistive" | "inductive";

export type SwitchContactState = "open" | "touching" | "bouncing" | "closed" | "opening";

export interface SwitchContactEstimate {
  state: SwitchContactState;
  positionPercent: number;
  continuityFraction: number;
  currentAmps: number;
  contactResistanceOhms: number;
  contactHeatWatts: number;
  bouncePulses: number;
  arcRisk: number;
  arcWarning: boolean;
}

export interface SwitchContactParams {
  positionPercent: number;
  loadCurrentAmps: number;
  contactResistanceMilliOhms: number;
  loadType: SwitchLoadType;
}

const stateContinuity: Record<SwitchContactState, number> = {
  open: 0,
  touching: 0.28,
  bouncing: 0.55,
  closed: 1,
  opening: 0.35,
};

function stateFromPosition(positionPercent: number): SwitchContactState {
  if (positionPercent < 25) {
    return "open";
  }

  if (positionPercent < 40) {
    return "touching";
  }

  if (positionPercent < 58) {
    return "bouncing";
  }

  if (positionPercent < 82) {
    return "closed";
  }

  return "opening";
}

function loadArcMultiplier(loadType: SwitchLoadType) {
  switch (loadType) {
    case "signal":
      return 0.12;
    case "resistive":
      return 0.45;
    case "inductive":
      return 1;
  }
}

function validateLoadType(loadType: SwitchLoadType) {
  if (loadType !== "signal" && loadType !== "resistive" && loadType !== "inductive") {
    throw new Error("Load type must be signal, resistive, or inductive.");
  }
}

export function estimateSwitchContact(params: SwitchContactParams): SwitchContactEstimate {
  validateLoadType(params.loadType);

  const positionPercent = clamp(params.positionPercent, 0, 100);
  const state = stateFromPosition(positionPercent);
  const loadCurrentAmps = clamp(params.loadCurrentAmps, 0, 20);
  const contactResistanceMilliOhms = clamp(params.contactResistanceMilliOhms, 1, 500);
  const contactResistanceOhms = contactResistanceMilliOhms / 1000;
  const continuityFraction = stateContinuity[state];
  const currentAmps = loadCurrentAmps * continuityFraction;
  const contactHeatWatts = currentAmps * currentAmps * contactResistanceOhms;
  const bouncePulses = state === "bouncing" ? 5 : state === "touching" || state === "opening" ? 2 : 0;
  const gapStress = state === "opening" ? 1 : state === "bouncing" ? 0.4 : state === "touching" ? 0.18 : 0.06;
  const arcRisk = clamp((loadCurrentAmps / 5) * loadArcMultiplier(params.loadType) * gapStress);
  const arcWarning = state === "opening" && arcRisk > 0.25;

  return {
    state,
    positionPercent,
    continuityFraction,
    currentAmps,
    contactResistanceOhms,
    contactHeatWatts,
    bouncePulses,
    arcRisk,
    arcWarning,
  };
}
