export type Locale = "en" | "th";

export type LessonStatus =
  | "candidate"
  | "planned"
  | "outlined"
  | "prototype"
  | "review-ready"
  | "published"
  | "revision-needed";

export type SafetyLevel = "none" | "low" | "moderate" | "high";
export type SourceStatus = "not-needed" | "needed" | "draft" | "verified" | "needs-update";
export type NavGroup = "foundation" | "component" | "circuit" | "power" | "safety" | "application";

export interface LessonRegistryEntry {
  slug: string;
  lessonId: string;
  primaryTopicId: string;
  coveredTopicIds: readonly string[];
  status: LessonStatus;
  safetyLevel: SafetyLevel;
  sourceStatus: SourceStatus;
  requiresThailandContext: boolean;
  order: number;
  navGroup: NavGroup;
  titles: Record<Locale, string>;
  navLabels: Record<Locale, string>;
  summaries: Record<Locale, string>;
  paths: Record<Locale, string>;
  hasPage: Record<Locale, boolean>;
  reviewRecord?: string;
  demoComponent?: string;
}

export const lessonRegistry = [
  {
    slug: "what-is-electricity",
    lessonId: "ea.lesson.what-is-electricity.v0.1",
    primaryTopicId: "ea.fundamentals.electricity",
    coveredTopicIds: ["ea.fundamentals.electricity"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 1,
    navGroup: "foundation",
    titles: {
      en: "What Is Electricity?",
      th: "ไฟฟ้าคืออะไร?",
    },
    navLabels: {
      en: "First lesson",
      th: "บทแรก",
    },
    summaries: {
      en: "Charge, fields, voltage, current, energy, and why a battery can light a lamp.",
      th: "ประจุ สนามไฟฟ้า แรงดัน กระแส พลังงาน และเหตุผลที่แบตเตอรี่ทำให้หลอดไฟติด",
    },
    paths: {
      en: "/en/lessons/what-is-electricity/",
      th: "/th/lessons/what-is-electricity/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "CircuitFieldDemo",
  },
  {
    slug: "voltage",
    lessonId: "ea.lesson.voltage.v0.1",
    primaryTopicId: "ea.fundamentals.voltage",
    coveredTopicIds: ["ea.fundamentals.voltage"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "verified",
    requiresThailandContext: true,
    order: 2,
    navGroup: "foundation",
    titles: {
      en: "What Is Voltage?",
      th: "แรงดันไฟฟ้าคืออะไร?",
    },
    navLabels: {
      en: "Voltage",
      th: "แรงดัน",
    },
    summaries: {
      en: "Electric potential difference explained through changes in electric potential energy per unit charge.",
      th: "แรงดันหรือความต่างศักย์ อธิบายผ่านการเปลี่ยนแปลงพลังงานศักย์ไฟฟ้าต่อประจุ",
    },
    paths: {
      en: "/en/lessons/voltage/",
      th: "/th/lessons/voltage/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    reviewRecord: "docs/lesson-reviews/voltage-v0.1.md",
    demoComponent: "VoltageEnergyDemo",
  },
  {
    slug: "current",
    lessonId: "ea.lesson.current.v0.1",
    primaryTopicId: "ea.fundamentals.current",
    coveredTopicIds: ["ea.fundamentals.current"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 3,
    navGroup: "foundation",
    titles: {
      en: "What Is Electric Current?",
      th: "กระแสไฟฟ้าคืออะไร?",
    },
    navLabels: {
      en: "Current",
      th: "กระแส",
    },
    summaries: {
      en: "Electric current explained as charge flow rate: how much charge crosses a point per second.",
      th: "กระแสไฟฟ้าอธิบายเป็นอัตราการไหลของประจุ หรือประจุที่ผ่านจุดหนึ่งต่อวินาที",
    },
    paths: {
      en: "/en/lessons/current/",
      th: "/th/lessons/current/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "CurrentFlowDemo",
  },
  {
    slug: "resistance",
    lessonId: "ea.lesson.resistance.v0.1",
    primaryTopicId: "ea.fundamentals.resistance",
    coveredTopicIds: ["ea.fundamentals.resistance", "ea.fundamentals.conductance"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 4,
    navGroup: "foundation",
    titles: {
      en: "Resistance and Conductance",
      th: "ความต้านทานและความนำไฟฟ้า",
    },
    navLabels: {
      en: "Resistance",
      th: "ความต้านทาน",
    },
    summaries: {
      en: "Resistance and conductance explained as opposite views of how a path limits or allows current.",
      th: "ความต้านทานและความนำไฟฟ้า คือสองมุมมองของเส้นทางที่จำกัดหรือยอมให้กระแสผ่าน",
    },
    paths: {
      en: "/en/lessons/resistance/",
      th: "/th/lessons/resistance/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "ResistanceConductanceDemo",
  },
  {
    slug: "ohms-law",
    lessonId: "ea.lesson.ohms-law.v0.1",
    primaryTopicId: "ea.circuit.law.ohm",
    coveredTopicIds: ["ea.circuit.law.ohm"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 5,
    navGroup: "circuit",
    titles: {
      en: "Ohm's Law",
      th: "กฎของโอห์ม",
    },
    navLabels: {
      en: "Ohm's Law",
      th: "กฎของโอห์ม",
    },
    summaries: {
      en: "Voltage, current, and resistance linked by V = IR, with power and non-ohmic limits.",
      th: "แรงดัน กระแส และความต้านทานที่เชื่อมกันด้วย V = IR พร้อมกำลังและข้อจำกัดของอุปกรณ์ non-ohmic",
    },
    paths: {
      en: "/en/lessons/ohms-law/",
      th: "/th/lessons/ohms-law/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "OhmsLawDemo",
  },
  {
    slug: "series-parallel",
    lessonId: "ea.lesson.series-parallel.v0.1",
    primaryTopicId: "ea.circuit.topology.series-parallel",
    coveredTopicIds: ["ea.circuit.topology.series-parallel"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: true,
    order: 6,
    navGroup: "circuit",
    titles: {
      en: "Series and Parallel Circuits",
      th: "วงจรอนุกรมและขนาน",
    },
    navLabels: {
      en: "Series/Parallel",
      th: "อนุกรม/ขนาน",
    },
    summaries: {
      en: "How circuit paths combine: shared current in series, shared voltage in parallel, equivalent resistance, and current/voltage division.",
      th: "การรวมเส้นทางวงจร: กระแสร่วมกันในอนุกรม แรงดันร่วมกันในขนาน ความต้านทานเทียบเท่า และการแบ่งกระแส/แรงดัน",
    },
    paths: {
      en: "/en/lessons/series-parallel/",
      th: "/th/lessons/series-parallel/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "SeriesParallelDemo",
  },
  {
    slug: "power-energy",
    lessonId: "ea.lesson.power-energy.v0.1",
    primaryTopicId: "ea.fundamentals.power",
    coveredTopicIds: ["ea.fundamentals.power", "ea.fundamentals.energy"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 7,
    navGroup: "power",
    titles: {
      en: "Electrical Power and Energy",
      th: "กำลังและพลังงานไฟฟ้า",
    },
    navLabels: {
      en: "Power/Energy",
      th: "กำลัง/พลังงาน",
    },
    summaries: {
      en: "Watts, joules, watt-hours, heat, batteries, and why time matters in every circuit.",
      th: "วัตต์ จูล วัตต์-ชั่วโมง ความร้อน แบตเตอรี่ และเหตุผลที่เวลาสำคัญในทุกวงจร",
    },
    paths: {
      en: "/en/lessons/power-energy/",
      th: "/th/lessons/power-energy/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "PowerEnergyDemo",
  },
  {
    slug: "battery",
    lessonId: "ea.lesson.battery.v0.1",
    primaryTopicId: "ea.storage.electrochemistry",
    coveredTopicIds: ["ea.storage.electrochemistry", "ea.storage.cell.metric"],
    status: "prototype",
    safetyLevel: "moderate",
    sourceStatus: "needed",
    requiresThailandContext: true,
    order: 8,
    navGroup: "power",
    titles: {
      en: "Battery",
      th: "แบตเตอรี่",
    },
    navLabels: {
      en: "Battery",
      th: "แบตเตอรี่",
    },
    summaries: {
      en: "Chemical energy storage, terminal voltage, capacity, watt-hours, internal resistance, C-rate, and safety.",
      th: "การเก็บพลังงานเคมี แรงดันปลายขั้ว ความจุ watt-hour ความต้านทานภายใน C-rate และความปลอดภัย",
    },
    paths: {
      en: "/en/lessons/battery/",
      th: "/th/lessons/battery/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "BatteryDemo",
  },
  {
    slug: "mosfet",
    lessonId: "ea.lesson.mosfet.v0.1",
    primaryTopicId: "ea.device.fet.mosfet",
    coveredTopicIds: ["ea.device.fet.mosfet"],
    status: "prototype",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 9,
    navGroup: "component",
    titles: {
      en: "What Is a MOSFET?",
      th: "MOSFET คืออะไร?",
    },
    navLabels: {
      en: "MOSFET",
      th: "MOSFET",
    },
    summaries: {
      en: "A field-controlled transistor, its structure, channel formation, switching behavior, and applications.",
      th: "ทรานซิสเตอร์ที่ควบคุมด้วยสนามไฟฟ้า โครงสร้าง การสร้างช่องนำกระแส การสวิตช์ และการใช้งาน",
    },
    paths: {
      en: "/en/lessons/mosfet/",
      th: "/th/lessons/mosfet/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "MosfetSwitchDemo",
  },
  {
    slug: "switches-contacts",
    lessonId: "ea.lesson.switches-contacts.v0.1",
    primaryTopicId: "ea.component.switch",
    coveredTopicIds: [
      "ea.component.switch",
      "ea.circuit.element.switch-ideal",
      "ea.transport.contact",
      "ea.material.contact",
    ],
    status: "prototype",
    safetyLevel: "moderate",
    sourceStatus: "draft",
    requiresThailandContext: true,
    order: 10,
    navGroup: "component",
    titles: {
      en: "Switches and Contacts",
      th: "สวิตช์และหน้าสัมผัส",
    },
    navLabels: {
      en: "Switches",
      th: "สวิตช์",
    },
    summaries: {
      en: "Open and closed paths, contact resistance, arcing, bounce, ratings, and safe switching boundaries.",
      th: "เส้นทางเปิด/ปิด ความต้านทานหน้าสัมผัส อาร์ก bounce พิกัด และขอบเขตการสวิตช์อย่างปลอดภัย",
    },
    paths: {
      en: "/en/lessons/switches-contacts/",
      th: "/th/lessons/switches-contacts/",
    },
    hasPage: {
      en: true,
      th: true,
    },
    demoComponent: "SwitchesContactsDemo",
  },
  {
    slug: "capacitor",
    lessonId: "ea.lesson.capacitor.v0.1",
    primaryTopicId: "ea.component.capacitor",
    coveredTopicIds: ["ea.component.capacitor"],
    status: "planned",
    safetyLevel: "moderate",
    sourceStatus: "needed",
    requiresThailandContext: true,
    order: 11,
    navGroup: "component",
    titles: {
      en: "Capacitor",
      th: "ตัวเก็บประจุ",
    },
    navLabels: {
      en: "Capacitor",
      th: "ตัวเก็บประจุ",
    },
    summaries: {
      en: "Electric-field energy storage, capacitance, charging, discharging, filtering, timing, inrush, and stored-charge safety.",
      th: "การเก็บพลังงานในสนามไฟฟ้า ค่าความจุ การชาร์จ/คายประจุ การกรอง เวลา inrush และความปลอดภัยจากประจุที่ค้างอยู่",
    },
    paths: {
      en: "/en/lessons/capacitor/",
      th: "/th/lessons/capacitor/",
    },
    hasPage: {
      en: false,
      th: false,
    },
  },
  {
    slug: "diode",
    lessonId: "ea.lesson.diode.v0.1",
    primaryTopicId: "ea.device.diode.pn",
    coveredTopicIds: ["ea.device.diode.pn"],
    status: "planned",
    safetyLevel: "low",
    sourceStatus: "needed",
    requiresThailandContext: false,
    order: 12,
    navGroup: "component",
    titles: {
      en: "Diode",
      th: "ไดโอด",
    },
    navLabels: {
      en: "Diode",
      th: "ไดโอด",
    },
    summaries: {
      en: "One-way semiconductor conduction, polarity, forward drop, reverse blocking, rectification, and LED prerequisites.",
      th: "การนำกระแสทางเดียวของสารกึ่งตัวนำ ขั้ว แรงดันตกคร่อมทางตรง การบล็อกทางกลับ การเรียงกระแส และพื้นฐานก่อนเรียน LED",
    },
    paths: {
      en: "/en/lessons/diode/",
      th: "/th/lessons/diode/",
    },
    hasPage: {
      en: false,
      th: false,
    },
  },
] as const satisfies readonly LessonRegistryEntry[];

export type LessonRegistryItem = (typeof lessonRegistry)[number];
export type LessonKey = LessonRegistryItem["slug"];

export const lessonSlugs = lessonRegistry.map((lesson) => lesson.slug) as LessonKey[];
export const implementedLessons = lessonRegistry.filter((lesson) => lesson.hasPage.en || lesson.hasPage.th);

const lessonBySlug = new Map<string, LessonRegistryItem>(
  lessonRegistry.map((lesson) => [lesson.slug, lesson]),
);
const lessonById = new Map<string, LessonRegistryItem>(
  lessonRegistry.map((lesson) => [lesson.lessonId, lesson]),
);

export function isLessonKey(slug: string): slug is LessonKey {
  return lessonBySlug.has(slug);
}

export function getLessonBySlug(slug: string): LessonRegistryItem | undefined {
  return lessonBySlug.get(slug);
}

export function getLessonById(lessonId: string): LessonRegistryItem | undefined {
  return lessonById.get(lessonId);
}

export function isLessonAvailable(lesson: LessonRegistryEntry, locale: Locale): boolean {
  return lesson.hasPage[locale];
}

export function isLessonPublished(lesson: LessonRegistryEntry): boolean {
  return lesson.status === "published";
}

export function getImplementedLessons(locale: Locale): LessonRegistryItem[] {
  return lessonRegistry
    .filter((lesson) => isLessonAvailable(lesson, locale))
    .sort((a, b) => a.order - b.order);
}

export function getLessonSuggestionFields(slug: string, locale: Locale) {
  const lesson = getLessonBySlug(slug);

  if (!lesson || !isLessonAvailable(lesson, locale)) {
    return undefined;
  }

  return {
    title: lesson.titles[locale],
    summary: lesson.summaries[locale],
    href: lesson.paths[locale],
  };
}

export function getAvailableLessonForCoveredTopic(topicId: string, locale: Locale): LessonRegistryItem | undefined {
  return lessonRegistry
    .filter(
      (lesson) =>
        isLessonAvailable(lesson, locale) && (lesson.coveredTopicIds as readonly string[]).includes(topicId),
    )
    .sort((a, b) => a.order - b.order)[0];
}

const statusLabels: Record<LessonStatus, Record<Locale, string>> = {
  candidate: {
    en: "candidate",
    th: "รอพิจารณา",
  },
  planned: {
    en: "planned",
    th: "วางแผนแล้ว",
  },
  outlined: {
    en: "outlined",
    th: "มีโครงร่างแล้ว",
  },
  prototype: {
    en: "prototype",
    th: "ต้นแบบ",
  },
  "review-ready": {
    en: "review-ready",
    th: "พร้อมตรวจทาน",
  },
  published: {
    en: "published",
    th: "เผยแพร่แล้ว",
  },
  "revision-needed": {
    en: "revision needed",
    th: "ต้องปรับปรุง",
  },
};

const safetyLabels: Record<SafetyLevel, Record<Locale, string>> = {
  none: {
    en: "none",
    th: "ไม่มี",
  },
  low: {
    en: "low",
    th: "ต่ำ",
  },
  moderate: {
    en: "moderate",
    th: "ปานกลาง",
  },
  high: {
    en: "high",
    th: "สูง",
  },
};

const sourceStatusLabels: Record<SourceStatus, Record<Locale, string>> = {
  "not-needed": {
    en: "not needed",
    th: "ไม่จำเป็น",
  },
  needed: {
    en: "needs source review",
    th: "ต้องตรวจแหล่งอ้างอิง",
  },
  draft: {
    en: "draft sources",
    th: "แหล่งอ้างอิงฉบับร่าง",
  },
  verified: {
    en: "verified",
    th: "ตรวจแล้ว",
  },
  "needs-update": {
    en: "needs update",
    th: "ต้องอัปเดต",
  },
};

export function getLessonStatusLabel(status: LessonStatus, locale: Locale) {
  return statusLabels[status][locale];
}

export function getSafetyLevelLabel(level: SafetyLevel, locale: Locale) {
  return safetyLabels[level][locale];
}

export function getSourceStatusLabel(status: SourceStatus, locale: Locale) {
  return sourceStatusLabels[status][locale];
}

const homeGroupLabels: Record<NavGroup, Record<Locale, string>> = {
  foundation: {
    en: "Foundation lesson",
    th: "บทพื้นฐาน",
  },
  component: {
    en: "Component lesson",
    th: "บทชิ้นส่วน",
  },
  circuit: {
    en: "Circuit lesson",
    th: "บทวงจร",
  },
  power: {
    en: "Power lesson",
    th: "บทพลังงาน",
  },
  safety: {
    en: "Safety lesson",
    th: "บทความปลอดภัย",
  },
  application: {
    en: "Application lesson",
    th: "บทการใช้งาน",
  },
};

export function getLessonHomeLabel(lesson: LessonRegistryItem, locale: Locale) {
  if (lesson.slug === "what-is-electricity") {
    return locale === "th" ? `เริ่มบทแรก: ${lesson.titles[locale]}` : `Start: ${lesson.titles[locale]}`;
  }

  return `${homeGroupLabels[lesson.navGroup][locale]}: ${lesson.navLabels[locale]}`;
}
