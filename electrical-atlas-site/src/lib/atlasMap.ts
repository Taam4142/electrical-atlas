export type AtlasMapGroup = {
  id: string;
  scope: "foundation" | "core" | "engineering" | "application";
  status: "mapped" | "prototype" | "planned";
  en: {
    title: string;
    summary: string;
    examples: string[];
  };
  th: {
    title: string;
    summary: string;
    examples: string[];
  };
};

export const atlasMapGroups: AtlasMapGroup[] = [
  {
    id: "foundations",
    scope: "foundation",
    status: "mapped",
    en: {
      title: "Mathematics, physics, chemistry, and computation",
      summary: "Prerequisite tools used to explain electrical behavior without hand-waving.",
      examples: ["vectors", "differential equations", "atomic structure", "numerical simulation"],
    },
    th: {
      title: "คณิตศาสตร์ ฟิสิกส์ เคมี และการคำนวณ",
      summary: "เครื่องมือพื้นฐานที่ช่วยอธิบายไฟฟ้าโดยไม่ต้องอาศัยคำอธิบายแบบคลุมเครือ",
      examples: ["เวกเตอร์", "สมการเชิงอนุพันธ์", "โครงสร้างอะตอม", "การจำลองเชิงตัวเลข"],
    },
  },
  {
    id: "electromagnetism-circuits",
    scope: "core",
    status: "prototype",
    en: {
      title: "Charge, fields, voltage, current, and circuits",
      summary: "The conceptual spine of the atlas and the home of the first lesson.",
      examples: ["Coulomb’s law", "electric field", "Ohm’s law", "battery-switch-lamp circuit"],
    },
    th: {
      title: "ประจุ สนาม แรงดัน กระแส และวงจร",
      summary: "แกนหลักของแผนที่ความรู้ และเป็นบ้านของบทแรก",
      examples: ["กฎของคูลอมบ์", "สนามไฟฟ้า", "กฎของโอห์ม", "วงจรแบตเตอรี่-สวิตช์-หลอดไฟ"],
    },
  },
  {
    id: "materials-components",
    scope: "core",
    status: "mapped",
    en: {
      title: "Electrical materials and passive components",
      summary: "How real materials become resistors, capacitors, inductors, insulation, connectors, and wiring.",
      examples: ["copper", "dielectrics", "resistors", "capacitors", "inductors"],
    },
    th: {
      title: "วัสดุไฟฟ้าและชิ้นส่วนพาสซีฟ",
      summary: "วัสดุจริงกลายเป็นตัวต้านทาน ตัวเก็บประจุ ตัวเหนี่ยวนำ ฉนวน คอนเนกเตอร์ และสายไฟได้อย่างไร",
      examples: ["ทองแดง", "ไดอิเล็กทริก", "ตัวต้านทาน", "ตัวเก็บประจุ", "ตัวเหนี่ยวนำ"],
    },
  },
  {
    id: "semiconductor-devices",
    scope: "core",
    status: "planned",
    en: {
      title: "Semiconductors and electronic devices",
      summary: "The bridge from materials and fields into diodes, BJTs, MOSFETs, sensors, and power devices.",
      examples: ["PN junction", "diode", "BJT", "MOSFET", "IGBT"],
    },
    th: {
      title: "สารกึ่งตัวนำและอุปกรณ์อิเล็กทรอนิกส์",
      summary: "สะพานจากวัสดุและสนามไฟฟ้าไปสู่ไดโอด BJT, MOSFET, เซนเซอร์ และอุปกรณ์กำลัง",
      examples: ["รอยต่อ PN", "ไดโอด", "BJT", "MOSFET", "IGBT"],
    },
  },
  {
    id: "analog-digital-embedded",
    scope: "core",
    status: "mapped",
    en: {
      title: "Analog, digital, computing, and embedded systems",
      summary: "How circuits process information, compute, store state, and interact with software.",
      examples: ["op-amps", "ADCs", "logic gates", "processors", "firmware"],
    },
    th: {
      title: "อนาล็อก ดิจิทัล คอมพิวเตอร์ และระบบฝังตัว",
      summary: "วงจรประมวลผลข้อมูล คำนวณ เก็บสถานะ และทำงานร่วมกับซอฟต์แวร์อย่างไร",
      examples: ["ออปแอมป์", "ADC", "ลอจิกเกต", "โปรเซสเซอร์", "เฟิร์มแวร์"],
    },
  },
  {
    id: "signals-control-measurement",
    scope: "engineering",
    status: "mapped",
    en: {
      title: "Signals, control, sensors, and measurement",
      summary: "The measurement-and-control layer that turns electrical systems into observable, controllable machines.",
      examples: ["sampling", "filters", "PID control", "oscilloscopes", "metrology"],
    },
    th: {
      title: "สัญญาณ การควบคุม เซนเซอร์ และการวัด",
      summary: "ชั้นการวัดและควบคุมที่ทำให้ระบบไฟฟ้ากลายเป็นเครื่องจักรที่สังเกตและควบคุมได้",
      examples: ["การสุ่มตัวอย่าง", "ฟิลเตอร์", "PID", "ออสซิลโลสโคป", "มาตรวิทยา"],
    },
  },
  {
    id: "rf-communications",
    scope: "engineering",
    status: "mapped",
    en: {
      title: "EMC, RF, antennas, radar, and communications",
      summary: "Where circuits become waves, links, spectrum, compatibility problems, and communication systems.",
      examples: ["transmission lines", "antennas", "EMI", "modulation", "radar"],
    },
    th: {
      title: "EMC, RF, สายอากาศ เรดาร์ และการสื่อสาร",
      summary: "เมื่อวงจรกลายเป็นคลื่น ลิงก์ สเปกตรัม ปัญหาความเข้ากันได้ และระบบสื่อสาร",
      examples: ["สายส่ง", "สายอากาศ", "EMI", "มอดูเลชัน", "เรดาร์"],
    },
  },
  {
    id: "power-energy",
    scope: "core",
    status: "mapped",
    en: {
      title: "Power electronics, machines, grids, and energy",
      summary: "High-power conversion, motion, generation, distribution, storage, and renewable integration.",
      examples: ["SMPS", "inverters", "motors", "transformers", "batteries", "smart grids"],
    },
    th: {
      title: "อิเล็กทรอนิกส์กำลัง เครื่องจักรไฟฟ้า กริด และพลังงาน",
      summary: "การแปลงกำลัง การขับเคลื่อน การผลิต ส่งจ่าย กักเก็บ และบูรณาการพลังงานหมุนเวียน",
      examples: ["SMPS", "อินเวอร์เตอร์", "มอเตอร์", "หม้อแปลง", "แบตเตอรี่", "สมาร์ตกริด"],
    },
  },
  {
    id: "manufacturing-reliability-safety",
    scope: "engineering",
    status: "mapped",
    en: {
      title: "IC/PCB manufacturing, reliability, safety, and standards",
      summary: "How designs become manufacturable, testable, maintainable, safe, and compliant products.",
      examples: ["PCB layout", "VLSI", "DFM", "failure analysis", "grounding", "TIS/EIT context"],
    },
    th: {
      title: "การผลิต IC/PCB ความเชื่อถือได้ ความปลอดภัย และมาตรฐาน",
      summary: "ทำให้งานออกแบบผลิตได้ ทดสอบได้ ซ่อมบำรุงได้ ปลอดภัย และสอดคล้องมาตรฐาน",
      examples: ["PCB layout", "VLSI", "DFM", "การวิเคราะห์ความเสียหาย", "กราวด์", "บริบท มอก./วสท."],
    },
  },
  {
    id: "applications-frontiers",
    scope: "application",
    status: "mapped",
    en: {
      title: "Applications, history, and research frontiers",
      summary: "Industrial, automotive, aerospace, medical, consumer, space, defense, scientific, and emerging systems.",
      examples: ["factory automation", "EVs", "medical imaging", "spacecraft power", "quantum devices"],
    },
    th: {
      title: "งานประยุกต์ ประวัติศาสตร์ และแนวหน้าการวิจัย",
      summary: "อุตสาหกรรม ยานยนต์ อวกาศ การแพทย์ ผู้บริโภค วิทยาศาสตร์ ความมั่นคง และเทคโนโลยีเกิดใหม่",
      examples: ["ระบบอัตโนมัติโรงงาน", "EV", "ภาพทางการแพทย์", "ระบบไฟฟ้ายานอวกาศ", "อุปกรณ์ควอนตัม"],
    },
  },
];

export const atlasBrowseModes = [
  {
    id: "subject",
    en: "Subject",
    th: "ตามสาขา",
  },
  {
    id: "component",
    en: "Component",
    th: "ตามชิ้นส่วน",
  },
  {
    id: "system",
    en: "System",
    th: "ตามระบบ",
  },
  {
    id: "application",
    en: "Application",
    th: "ตามงานประยุกต์",
  },
  {
    id: "learning-path",
    en: "Learning path",
    th: "ตามเส้นทางการเรียน",
  },
];
