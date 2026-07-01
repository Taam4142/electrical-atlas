export type Locale = "en" | "th";

export const locales: Record<Locale, { label: string; nativeLabel: string; path: string }> = {
  en: {
    label: "English",
    nativeLabel: "English",
    path: "/en/",
  },
  th: {
    label: "Thai",
    nativeLabel: "ไทย",
    path: "/th/",
  },
};

export const firstLessonPaths: Record<Locale, string> = {
  en: "/en/lessons/what-is-electricity/",
  th: "/th/lessons/what-is-electricity/",
};

export const mapPaths: Record<Locale, string> = {
  en: "/en/map/",
  th: "/th/map/",
};

export const subjectPreview = [
  {
    id: "ea.concept.charge",
    en: "Electric charge",
    th: "ประจุไฟฟ้า",
    kind: "concept",
  },
  {
    id: "ea.phenomenon.electric-field",
    en: "Electric field",
    th: "สนามไฟฟ้า",
    kind: "phenomenon",
  },
  {
    id: "ea.quantity.voltage",
    en: "Voltage",
    th: "แรงดันไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.quantity.current",
    en: "Current",
    th: "กระแสไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.component.lamp.incandescent",
    en: "Incandescent lamp",
    th: "หลอดไส้",
    kind: "component",
  },
  {
    id: "ea.device.fet.mosfet",
    en: "MOSFET",
    th: "มอสเฟต",
    kind: "component",
  },
];
