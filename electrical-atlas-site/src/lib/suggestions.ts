import type { AtlasTopic } from "./generated/atlasTopics";

export type Locale = "en" | "th";
export type LessonKey = "what-is-electricity" | "voltage" | "current" | "resistance" | "mosfet";
export type SuggestionKind = "lesson" | "topic";

export interface SuggestionItem {
  title: string;
  summary: string;
  href: string;
  kind: SuggestionKind;
  relation: string;
}

type LessonSuggestionEntry =
  | {
      kind: "lesson";
      key: LessonKey;
      relation: Record<Locale, string>;
    }
  | {
      kind: "topic";
      topicId: string;
      relation: Record<Locale, string>;
    };

const lessonLabels: Record<LessonKey, Record<Locale, { title: string; summary: string; href: string }>> = {
  "what-is-electricity": {
    en: {
      title: "What Is Electricity?",
      summary: "Charge, fields, voltage, current, energy, and why a battery can light a lamp.",
      href: "/en/lessons/what-is-electricity/",
    },
    th: {
      title: "ไฟฟ้าคืออะไร?",
      summary: "ประจุ สนามไฟฟ้า แรงดัน กระแส พลังงาน และเหตุผลที่แบตเตอรี่ทำให้หลอดไฟติด",
      href: "/th/lessons/what-is-electricity/",
    },
  },
  voltage: {
    en: {
      title: "What Is Voltage?",
      summary: "Electric potential difference explained as energy per unit charge between two points.",
      href: "/en/lessons/voltage/",
    },
    th: {
      title: "แรงดันไฟฟ้าคืออะไร?",
      summary: "แรงดันหรือความต่างศักย์ อธิบายเป็นพลังงานต่อประจุระหว่างสองจุด",
      href: "/th/lessons/voltage/",
    },
  },
  current: {
    en: {
      title: "What Is Electric Current?",
      summary: "Electric current explained as charge flow rate: how much charge crosses a point per second.",
      href: "/en/lessons/current/",
    },
    th: {
      title: "กระแสไฟฟ้าคืออะไร?",
      summary: "กระแสไฟฟ้าอธิบายเป็นอัตราการไหลของประจุ หรือประจุที่ผ่านจุดหนึ่งต่อวินาที",
      href: "/th/lessons/current/",
    },
  },
  resistance: {
    en: {
      title: "Resistance and Conductance",
      summary: "Resistance and conductance explained as opposite views of how a path limits or allows current.",
      href: "/en/lessons/resistance/",
    },
    th: {
      title: "ความต้านทานและความนำไฟฟ้า",
      summary: "ความต้านทานและความนำไฟฟ้า อธิบายเป็นสองมุมของเส้นทางที่จำกัดหรือยอมให้กระแสผ่าน",
      href: "/th/lessons/resistance/",
    },
  },
  mosfet: {
    en: {
      title: "What Is a MOSFET?",
      summary: "A field-controlled transistor, its structure, channel formation, switching behavior, and applications.",
      href: "/en/lessons/mosfet/",
    },
    th: {
      title: "MOSFET คืออะไร?",
      summary: "ทรานซิสเตอร์ที่ควบคุมด้วยสนามไฟฟ้า โครงสร้าง การสร้างช่องนำกระแส การสวิตช์ และการใช้งาน",
      href: "/th/lessons/mosfet/",
    },
  },
};

const lessonSuggestionEntries: Record<LessonKey, LessonSuggestionEntry[]> = {
  "what-is-electricity": [
    {
      kind: "lesson",
      key: "voltage",
      relation: { en: "next foundation lesson", th: "บทพื้นฐานถัดไป" },
    },
    {
      kind: "lesson",
      key: "current",
      relation: { en: "next foundation lesson", th: "บทพื้นฐานถัดไป" },
    },
    {
      kind: "lesson",
      key: "resistance",
      relation: { en: "next foundation lesson", th: "บทพื้นฐานถัดไป" },
    },
    {
      kind: "lesson",
      key: "mosfet",
      relation: { en: "first component lesson", th: "บทเรียนชิ้นส่วนถัดไป" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.voltage",
      relation: { en: "core prerequisite", th: "พื้นฐานสำคัญ" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.current",
      relation: { en: "core prerequisite", th: "พื้นฐานสำคัญ" },
    },
    {
      kind: "topic",
      topicId: "ea.em.field.electric",
      relation: { en: "same field idea", th: "แนวคิดสนามเดียวกัน" },
    },
    {
      kind: "topic",
      topicId: "ea.circuit.law.ohm",
      relation: { en: "first circuit law", th: "กฎวงจรแรก ๆ" },
    },
    {
      kind: "topic",
      topicId: "ea.storage.lithium-ion",
      relation: { en: "energy source path", th: "เส้นทางแหล่งพลังงาน" },
    },
  ],
  voltage: [
    {
      kind: "lesson",
      key: "what-is-electricity",
      relation: { en: "foundation refresher", th: "ย้อนพื้นฐาน" },
    },
    {
      kind: "lesson",
      key: "current",
      relation: { en: "natural next lesson", th: "บทถัดไปตามธรรมชาติ" },
    },
    {
      kind: "lesson",
      key: "resistance",
      relation: { en: "sets up Ohm's law", th: "ปูทางสู่กฎของโอห์ม" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.current",
      relation: { en: "natural next quantity", th: "ปริมาณถัดไป" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.resistance",
      relation: { en: "needed for Ohm's law", th: "จำเป็นต่อกฎของโอห์ม" },
    },
    {
      kind: "topic",
      topicId: "ea.circuit.law.ohm",
      relation: { en: "first circuit law", th: "กฎวงจรแรก" },
    },
    {
      kind: "topic",
      topicId: "ea.em.potential.electric",
      relation: { en: "technical definition", th: "นิยามเชิงเทคนิค" },
    },
    {
      kind: "topic",
      topicId: "ea.em.field.electric",
      relation: { en: "physical mechanism", th: "กลไกทางฟิสิกส์" },
    },
    {
      kind: "topic",
      topicId: "ea.storage.electrochemistry",
      relation: { en: "real voltage source", th: "แหล่งแรงดันจริง" },
    },
    {
      kind: "topic",
      topicId: "ea.component.capacitor",
      relation: { en: "stores energy by voltage", th: "เก็บพลังงานด้วยแรงดัน" },
    },
  ],
  current: [
    {
      kind: "lesson",
      key: "voltage",
      relation: { en: "paired foundation", th: "พื้นฐานที่คู่กัน" },
    },
    {
      kind: "lesson",
      key: "resistance",
      relation: { en: "natural next lesson", th: "บทถัดไปตามธรรมชาติ" },
    },
    {
      kind: "lesson",
      key: "what-is-electricity",
      relation: { en: "foundation refresher", th: "ย้อนพื้นฐาน" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.resistance",
      relation: { en: "next foundation quantity", th: "ปริมาณพื้นฐานถัดไป" },
    },
    {
      kind: "topic",
      topicId: "ea.circuit.law.ohm",
      relation: { en: "voltage-current relationship", th: "ความสัมพันธ์แรงดัน-กระแส" },
    },
    {
      kind: "topic",
      topicId: "ea.transport.current-density",
      relation: { en: "technical extension", th: "ต่อยอดเชิงเทคนิค" },
    },
    {
      kind: "topic",
      topicId: "ea.transport.drift",
      relation: { en: "carrier motion", th: "การเคลื่อนที่ของตัวพา" },
    },
    {
      kind: "topic",
      topicId: "ea.transport.joule-heating",
      relation: { en: "heating effect", th: "ผลด้านความร้อน" },
    },
    {
      kind: "topic",
      topicId: "ea.component.fuse",
      relation: { en: "overcurrent protection", th: "การป้องกันกระแสเกิน" },
    },
    {
      kind: "topic",
      topicId: "ea.device.fet.mosfet.soa",
      relation: { en: "component current limit", th: "ขีดจำกัดกระแสของชิ้นส่วน" },
    },
  ],
  resistance: [
    {
      kind: "lesson",
      key: "voltage",
      relation: { en: "paired foundation", th: "พื้นฐานที่คู่กัน" },
    },
    {
      kind: "lesson",
      key: "current",
      relation: { en: "paired foundation", th: "พื้นฐานที่คู่กัน" },
    },
    {
      kind: "topic",
      topicId: "ea.circuit.law.ohm",
      relation: { en: "next practical law", th: "กฎใช้งานถัดไป" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.power",
      relation: { en: "heat and energy link", th: "เชื่อมสู่ความร้อนและพลังงาน" },
    },
    {
      kind: "topic",
      topicId: "ea.fundamentals.conductance",
      relation: { en: "reciprocal quantity", th: "ปริมาณส่วนกลับ" },
    },
    {
      kind: "topic",
      topicId: "ea.component.resistor",
      relation: { en: "first physical component", th: "ชิ้นส่วนจริงชิ้นแรก" },
    },
    {
      kind: "topic",
      topicId: "ea.transport.ohm-microscopic",
      relation: { en: "material physics view", th: "มุมมองฟิสิกส์วัสดุ" },
    },
    {
      kind: "topic",
      topicId: "ea.circuit.topology.series-parallel",
      relation: { en: "combine resistive paths", th: "รวมเส้นทางต้านทาน" },
    },
    {
      kind: "topic",
      topicId: "ea.component.resistor.current-sense",
      relation: { en: "measurement application", th: "งานวัดกระแส" },
    },
  ],
  mosfet: [
    {
      kind: "lesson",
      key: "what-is-electricity",
      relation: { en: "foundation refresher", th: "ย้อนพื้นฐาน" },
    },
    {
      kind: "topic",
      topicId: "ea.device.fet.mosfet.gate-charge",
      relation: { en: "next MOSFET detail", th: "รายละเอียด MOSFET ถัดไป" },
    },
    {
      kind: "topic",
      topicId: "ea.device.fet.mosfet.threshold",
      relation: { en: "common confusion", th: "จุดที่มักเข้าใจผิด" },
    },
    {
      kind: "topic",
      topicId: "ea.device.fet.mosfet.channel",
      relation: { en: "same physical mechanism", th: "กลไกฟิสิกส์เดียวกัน" },
    },
    {
      kind: "topic",
      topicId: "ea.digital.cmos.inverter",
      relation: { en: "digital application", th: "งานดิจิทัล" },
    },
    {
      kind: "topic",
      topicId: "ea.converter.dc.buck",
      relation: { en: "power electronics application", th: "งาน power electronics" },
    },
    {
      kind: "topic",
      topicId: "ea.pcb.power",
      relation: { en: "layout and switching loops", th: "layout และ loop สวิตช์" },
    },
  ],
};

function topicPath(locale: Locale, topic: AtlasTopic) {
  return `/${locale}/topics/${topic.slug}/`;
}

export function topicToSuggestion(topic: AtlasTopic, locale: Locale, relation?: string): SuggestionItem {
  return {
    title: topic.name,
    summary: topic.summary,
    href: topicPath(locale, topic),
    kind: "topic",
    relation: relation || topic.type,
  };
}

export function getLessonSuggestions(
  lessonKey: LessonKey,
  locale: Locale,
  topics: AtlasTopic[],
): SuggestionItem[] {
  const topicById = new Map(topics.map((topic) => [topic.id, topic]));

  return lessonSuggestionEntries[lessonKey]
    .map((entry): SuggestionItem | undefined => {
      if (entry.kind === "lesson") {
        return {
          ...lessonLabels[entry.key][locale],
          kind: "lesson",
          relation: entry.relation[locale],
        };
      }

      const topic = topicById.get(entry.topicId);
      return topic ? topicToSuggestion(topic, locale, entry.relation[locale]) : undefined;
    })
    .filter((item): item is SuggestionItem => Boolean(item));
}

function sharedTokenScore(a: string, b: string) {
  const aTokens = new Set(a.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2));
  const bTokens = new Set(b.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 2));
  let score = 0;

  for (const token of aTokens) {
    if (bTokens.has(token)) {
      score += 1;
    }
  }

  return score;
}

function idPrefixScore(a: string, b: string) {
  const aParts = a.split(".");
  const bParts = b.split(".");
  let score = 0;

  for (let index = 0; index < Math.min(aParts.length, bParts.length); index += 1) {
    if (aParts[index] !== bParts[index]) {
      break;
    }

    score += index === 0 ? 0 : 1;
  }

  return Math.min(score, 5);
}

function topicSimilarityScore(current: AtlasTopic, candidate: AtlasTopic) {
  let score = 0;

  if (current.id === candidate.id) {
    return -Infinity;
  }

  if (current.subsection && current.subsection === candidate.subsection) {
    score += 10;
  }

  if (current.section && current.section === candidate.section) {
    score += 7;
  }

  if (current.sourceFile === candidate.sourceFile) {
    score += 4;
  }

  if (current.domain === candidate.domain) {
    score += 3;
  }

  if (current.type === candidate.type) {
    score += 2;
  }

  score += idPrefixScore(current.id, candidate.id);
  score += sharedTokenScore(`${current.name} ${current.summary}`, `${candidate.name} ${candidate.summary}`);

  return score;
}

export function getRelatedTopics(current: AtlasTopic, topics: AtlasTopic[], limit = 6): AtlasTopic[] {
  return topics
    .map((topic) => ({
      topic,
      score: topicSimilarityScore(current, topic),
    }))
    .filter((entry) => Number.isFinite(entry.score) && entry.score > 0)
    .sort((a, b) => b.score - a.score || a.topic.id.localeCompare(b.topic.id))
    .slice(0, limit)
    .map((entry) => entry.topic);
}
