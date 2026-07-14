import type { Locale } from "./lessonRegistry";

const thaiTopicTypeLabels: Record<string, string> = {
  concept: "แนวคิด",
  law: "กฎ",
  quantity: "ปริมาณ",
  phenomenon: "ปรากฏการณ์",
  material: "วัสดุ",
  component: "ชิ้นส่วน",
  circuit: "วงจร",
  architecture: "สถาปัตยกรรม",
  system: "ระบบ",
  method: "วิธีการ",
  tool: "เครื่องมือ",
  standard: "มาตรฐาน",
  failure: "รูปแบบความเสียหาย",
  application: "งานประยุกต์",
  history: "ประวัติศาสตร์",
  model: "แบบจำลอง",
  enabling: "สาขาสนับสนุน",
};

const thaiTopicStatusLabels: Record<string, string> = {
  mapped: "ทำแผนที่แล้ว",
  outlined: "มีโครงร่างแล้ว",
  researched: "ค้นคว้าแล้ว",
  reviewed: "ตรวจทานแล้ว",
  translated: "แปลแล้ว",
  published: "เผยแพร่แล้ว",
};

export function getTopicTypeLabel(type: string, locale: Locale): string {
  return locale === "th" ? thaiTopicTypeLabels[type] ?? type : type;
}

export function getTopicStatusLabel(status: string, locale: Locale): string {
  return locale === "th" ? thaiTopicStatusLabels[status] ?? status : status;
}
