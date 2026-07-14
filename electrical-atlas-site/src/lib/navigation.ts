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
    id: "ea.fundamentals.charge",
    en: "Electric charge",
    th: "ประจุไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.em.field.electric",
    en: "Electric field",
    th: "สนามไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.fundamentals.voltage",
    en: "Voltage",
    th: "แรงดันไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.fundamentals.current",
    en: "Electric current",
    th: "กระแสไฟฟ้า",
    kind: "quantity",
  },
  {
    id: "ea.device.fet.mosfet",
    en: "MOSFET",
    th: "มอสเฟต",
    kind: "component",
  },
];
