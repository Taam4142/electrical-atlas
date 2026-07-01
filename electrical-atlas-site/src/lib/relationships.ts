export type AtlasNodeKind = "lesson" | "topic";
export type RelationshipLocale = "en" | "th";

export type RelationshipType =
  | "prerequisite"
  | "successor"
  | "paired-foundation"
  | "technical-definition"
  | "physical-mechanism"
  | "mathematical-law"
  | "reciprocal"
  | "component"
  | "application"
  | "measurement"
  | "safety"
  | "failure-mode"
  | "implementation-detail"
  | "energy-source"
  | "energy-link"
  | "material-view"
  | "combines-with"
  | "layout-practice";

export interface AtlasNodeRef {
  kind: AtlasNodeKind;
  id: string;
}

export interface AtlasRelationship {
  source: AtlasNodeRef;
  target: AtlasNodeRef;
  type: RelationshipType;
  weight: number;
  label?: Partial<Record<RelationshipLocale, string>>;
}

export const relationshipLabels: Record<RelationshipType, Record<RelationshipLocale, string>> = {
  prerequisite: {
    en: "prerequisite",
    th: "พื้นฐานก่อนเรียน",
  },
  successor: {
    en: "next step",
    th: "ขั้นถัดไป",
  },
  "paired-foundation": {
    en: "paired foundation",
    th: "พื้นฐานที่คู่กัน",
  },
  "technical-definition": {
    en: "technical definition",
    th: "นิยามเชิงเทคนิค",
  },
  "physical-mechanism": {
    en: "physical mechanism",
    th: "กลไกทางฟิสิกส์",
  },
  "mathematical-law": {
    en: "mathematical law",
    th: "กฎเชิงคณิตศาสตร์",
  },
  reciprocal: {
    en: "reciprocal quantity",
    th: "ปริมาณส่วนกลับ",
  },
  component: {
    en: "physical component",
    th: "ชิ้นส่วนจริง",
  },
  application: {
    en: "application",
    th: "การใช้งานจริง",
  },
  measurement: {
    en: "measurement method",
    th: "วิธีวัด",
  },
  safety: {
    en: "safety connection",
    th: "เกี่ยวข้องกับความปลอดภัย",
  },
  "failure-mode": {
    en: "failure mode",
    th: "รูปแบบความเสียหาย",
  },
  "implementation-detail": {
    en: "implementation detail",
    th: "รายละเอียดเชิงปฏิบัติ",
  },
  "energy-source": {
    en: "energy source",
    th: "แหล่งพลังงาน",
  },
  "energy-link": {
    en: "heat and energy link",
    th: "เชื่อมกับความร้อนและพลังงาน",
  },
  "material-view": {
    en: "material physics view",
    th: "มุมมองฟิสิกส์วัสดุ",
  },
  "combines-with": {
    en: "combines with",
    th: "ใช้ร่วมกัน",
  },
  "layout-practice": {
    en: "layout practice",
    th: "แนวทาง layout",
  },
};

export const atlasRelationships: AtlasRelationship[] = [
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "lesson", id: "voltage" },
    type: "successor",
    weight: 100,
    label: { en: "next foundation lesson" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "lesson", id: "current" },
    type: "successor",
    weight: 95,
    label: { en: "next foundation lesson" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "lesson", id: "resistance" },
    type: "successor",
    weight: 90,
    label: { en: "next foundation lesson" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "lesson", id: "mosfet" },
    type: "application",
    weight: 55,
    label: { en: "first component lesson" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "topic", id: "ea.fundamentals.voltage" },
    type: "prerequisite",
    weight: 80,
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "topic", id: "ea.fundamentals.current" },
    type: "prerequisite",
    weight: 78,
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "topic", id: "ea.em.field.electric" },
    type: "physical-mechanism",
    weight: 65,
    label: { en: "same field idea" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "topic", id: "ea.circuit.law.ohm" },
    type: "mathematical-law",
    weight: 50,
    label: { en: "first circuit law" },
  },
  {
    source: { kind: "lesson", id: "what-is-electricity" },
    target: { kind: "topic", id: "ea.storage.lithium-ion" },
    type: "energy-source",
    weight: 40,
    label: { en: "energy source path" },
  },

  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "lesson", id: "what-is-electricity" },
    type: "prerequisite",
    weight: 95,
    label: { en: "foundation refresher" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "lesson", id: "current" },
    type: "successor",
    weight: 90,
    label: { en: "natural next lesson" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "lesson", id: "resistance" },
    type: "successor",
    weight: 88,
    label: { en: "sets up Ohm's law" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.fundamentals.current" },
    type: "paired-foundation",
    weight: 80,
    label: { en: "natural next quantity" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.fundamentals.resistance" },
    type: "prerequisite",
    weight: 76,
    label: { en: "needed for Ohm's law" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.circuit.law.ohm" },
    type: "mathematical-law",
    weight: 74,
    label: { en: "first circuit law" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.em.potential.electric" },
    type: "technical-definition",
    weight: 70,
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.em.field.electric" },
    type: "physical-mechanism",
    weight: 65,
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.storage.electrochemistry" },
    type: "energy-source",
    weight: 58,
    label: { en: "real voltage source" },
  },
  {
    source: { kind: "lesson", id: "voltage" },
    target: { kind: "topic", id: "ea.component.capacitor" },
    type: "energy-link",
    weight: 50,
    label: { en: "stores energy by voltage" },
  },

  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "lesson", id: "voltage" },
    type: "paired-foundation",
    weight: 95,
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "lesson", id: "resistance" },
    type: "successor",
    weight: 90,
    label: { en: "natural next lesson" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "lesson", id: "what-is-electricity" },
    type: "prerequisite",
    weight: 80,
    label: { en: "foundation refresher" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.fundamentals.resistance" },
    type: "successor",
    weight: 78,
    label: { en: "next foundation quantity" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.circuit.law.ohm" },
    type: "mathematical-law",
    weight: 75,
    label: { en: "voltage-current relationship" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.transport.current-density" },
    type: "technical-definition",
    weight: 65,
    label: { en: "technical extension" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.transport.drift" },
    type: "physical-mechanism",
    weight: 62,
    label: { en: "carrier motion" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.transport.joule-heating" },
    type: "energy-link",
    weight: 58,
    label: { en: "heating effect" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.component.fuse" },
    type: "safety",
    weight: 55,
    label: { en: "overcurrent protection" },
  },
  {
    source: { kind: "lesson", id: "current" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.soa" },
    type: "safety",
    weight: 45,
    label: { en: "component current limit" },
  },

  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "lesson", id: "voltage" },
    type: "paired-foundation",
    weight: 95,
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "lesson", id: "current" },
    type: "paired-foundation",
    weight: 93,
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.circuit.law.ohm" },
    type: "mathematical-law",
    weight: 90,
    label: { en: "next practical law" },
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.fundamentals.power" },
    type: "energy-link",
    weight: 82,
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.fundamentals.conductance" },
    type: "reciprocal",
    weight: 80,
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.component.resistor" },
    type: "component",
    weight: 78,
    label: { en: "first physical component" },
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.transport.ohm-microscopic" },
    type: "material-view",
    weight: 72,
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.circuit.topology.series-parallel" },
    type: "combines-with",
    weight: 64,
    label: { en: "combine resistive paths" },
  },
  {
    source: { kind: "lesson", id: "resistance" },
    target: { kind: "topic", id: "ea.component.resistor.current-sense" },
    type: "measurement",
    weight: 56,
    label: { en: "measurement application" },
  },

  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "lesson", id: "what-is-electricity" },
    type: "prerequisite",
    weight: 95,
    label: { en: "foundation refresher" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.gate-charge" },
    type: "implementation-detail",
    weight: 90,
    label: { en: "next MOSFET detail" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.threshold" },
    type: "technical-definition",
    weight: 85,
    label: { en: "common confusion" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.channel" },
    type: "physical-mechanism",
    weight: 80,
    label: { en: "same physical mechanism" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.digital.cmos.inverter" },
    type: "application",
    weight: 72,
    label: { en: "digital application" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.converter.dc.buck" },
    type: "application",
    weight: 68,
    label: { en: "power electronics application" },
  },
  {
    source: { kind: "lesson", id: "mosfet" },
    target: { kind: "topic", id: "ea.pcb.power" },
    type: "layout-practice",
    weight: 60,
    label: { en: "layout and switching loops" },
  },

  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.gate-charge" },
    type: "implementation-detail",
    weight: 100,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.threshold" },
    type: "technical-definition",
    weight: 95,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.channel" },
    type: "physical-mechanism",
    weight: 90,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.soa" },
    type: "safety",
    weight: 82,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.device.fet.mosfet.failure" },
    type: "failure-mode",
    weight: 78,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.digital.cmos.inverter" },
    type: "application",
    weight: 70,
  },
  {
    source: { kind: "topic", id: "ea.device.fet.mosfet" },
    target: { kind: "topic", id: "ea.converter.dc.buck" },
    type: "application",
    weight: 66,
  },

  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.fundamentals.conductance" },
    type: "reciprocal",
    weight: 100,
  },
  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.circuit.law.ohm" },
    type: "mathematical-law",
    weight: 95,
  },
  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.component.resistor" },
    type: "component",
    weight: 90,
  },
  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.transport.ohm-microscopic" },
    type: "material-view",
    weight: 82,
  },
  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.transport.joule-heating" },
    type: "energy-link",
    weight: 76,
  },
  {
    source: { kind: "topic", id: "ea.fundamentals.resistance" },
    target: { kind: "topic", id: "ea.circuit.topology.series-parallel" },
    type: "combines-with",
    weight: 70,
  },

  {
    source: { kind: "topic", id: "ea.circuit.law.ohm" },
    target: { kind: "topic", id: "ea.fundamentals.voltage" },
    type: "prerequisite",
    weight: 100,
  },
  {
    source: { kind: "topic", id: "ea.circuit.law.ohm" },
    target: { kind: "topic", id: "ea.fundamentals.current" },
    type: "prerequisite",
    weight: 98,
  },
  {
    source: { kind: "topic", id: "ea.circuit.law.ohm" },
    target: { kind: "topic", id: "ea.fundamentals.resistance" },
    type: "prerequisite",
    weight: 96,
  },
  {
    source: { kind: "topic", id: "ea.circuit.law.ohm" },
    target: { kind: "topic", id: "ea.fundamentals.power" },
    type: "energy-link",
    weight: 72,
  },
];

function sameNode(a: AtlasNodeRef, b: AtlasNodeRef) {
  return a.kind === b.kind && a.id === b.id;
}

export function getOutgoingRelationships(source: AtlasNodeRef) {
  return atlasRelationships
    .filter((relationship) => sameNode(relationship.source, source))
    .sort((a, b) => b.weight - a.weight || a.target.id.localeCompare(b.target.id));
}

export function getRelationLabel(relationship: AtlasRelationship, locale: RelationshipLocale) {
  return relationship.label?.[locale] ?? relationshipLabels[relationship.type][locale];
}
