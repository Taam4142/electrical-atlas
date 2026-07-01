export type MosfetRegion = "off" | "forming" | "on";

export interface MosfetSwitchEstimateInput {
  gateVoltage: number;
  thresholdVoltage?: number;
  fullOnGateVoltage?: number;
  supplyVoltage?: number;
  loadResistance?: number;
  onResistance?: number;
}

export interface MosfetSwitchEstimate {
  gateVoltage: number;
  thresholdVoltage: number;
  overdriveVoltage: number;
  channelFraction: number;
  region: MosfetRegion;
  drainCurrentMilliAmps: number;
  channelResistanceOhms: number;
  mosfetPowerMilliWatts: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function estimateMosfetSwitch(input: MosfetSwitchEstimateInput): MosfetSwitchEstimate {
  const gateVoltage = Number.isFinite(input.gateVoltage) ? input.gateVoltage : 0;
  const thresholdVoltage = input.thresholdVoltage ?? 2.5;
  const fullOnGateVoltage = input.fullOnGateVoltage ?? 5;
  const supplyVoltage = input.supplyVoltage ?? 5;
  const loadResistance = input.loadResistance ?? 1000;
  const onResistance = input.onResistance ?? 2;
  const overdriveVoltage = Math.max(0, gateVoltage - thresholdVoltage);
  const channelFraction = clamp(overdriveVoltage / Math.max(0.1, fullOnGateVoltage - thresholdVoltage), 0, 1);
  const region: MosfetRegion = channelFraction === 0 ? "off" : channelFraction < 0.92 ? "forming" : "on";

  if (region === "off") {
    return {
      gateVoltage,
      thresholdVoltage,
      overdriveVoltage,
      channelFraction,
      region,
      drainCurrentMilliAmps: 0.001,
      channelResistanceOhms: 1_000_000,
      mosfetPowerMilliWatts: 0.001,
    };
  }

  const effectiveChannel = Math.max(0.03, channelFraction * channelFraction);
  const channelResistanceOhms = onResistance / effectiveChannel;
  const currentAmps = supplyVoltage / (loadResistance + channelResistanceOhms);
  const mosfetPowerMilliWatts = currentAmps * currentAmps * channelResistanceOhms * 1000;

  return {
    gateVoltage,
    thresholdVoltage,
    overdriveVoltage,
    channelFraction,
    region,
    drainCurrentMilliAmps: currentAmps * 1000,
    channelResistanceOhms,
    mosfetPowerMilliWatts,
  };
}
