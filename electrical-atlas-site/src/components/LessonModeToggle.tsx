import { useEffect, useState } from "react";

type Locale = "en" | "th";

const copy = {
  en: {
    label: "Lesson depth",
    guided: "Guided",
    technical: "Technical",
    note: "Technical mode reveals equations, assumptions, and model limits.",
  },
  th: {
    label: "ระดับบทเรียน",
    guided: "เข้าใจง่าย",
    technical: "เชิงเทคนิค",
    note: "โหมดเชิงเทคนิคจะแสดงสมการ สมมติฐาน และข้อจำกัดของแบบจำลอง",
  },
} satisfies Record<Locale, Record<string, string>>;

export default function LessonModeToggle({ locale = "en" }: { locale?: Locale }) {
  const [mode, setMode] = useState<"guided" | "technical">("guided");
  const text = copy[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("ea.lessonMode");
    const nextMode = saved === "technical" ? "technical" : "guided";
    setMode(nextMode);
    document.documentElement.dataset.lessonMode = nextMode;
  }, []);

  function updateMode(nextMode: "guided" | "technical") {
    setMode(nextMode);
    document.documentElement.dataset.lessonMode = nextMode;
    window.localStorage.setItem("ea.lessonMode", nextMode);
  }

  return (
    <section className="mode-toggle" aria-label={text.label}>
      <div>
        <strong>{text.label}</strong>
        <p>{text.note}</p>
      </div>
      <div className="segmented-control" role="group" aria-label={text.label}>
        <button
          type="button"
          aria-pressed={mode === "guided"}
          onClick={() => updateMode("guided")}
        >
          {text.guided}
        </button>
        <button
          type="button"
          aria-pressed={mode === "technical"}
          onClick={() => updateMode("technical")}
        >
          {text.technical}
        </button>
      </div>
    </section>
  );
}
