import { useEffect, useMemo, useState } from "react";
import { atlasTopicMeta } from "../lib/generated/atlasTopicMeta";

type Locale = "en" | "th";
type AtlasTopic = {
  id: string;
  name: string;
  summary: string;
  type: string;
  depth: string;
  safety: string;
  domain: string;
  sourceFile: string;
  section: string;
  subsection: string;
  slug: string;
  status: "mapped";
};

type TopicPayload = {
  topics: AtlasTopic[];
};

const copy = {
  en: {
    eyebrow: "topic index",
    title: "Search mapped topics",
    intro:
      "This search reads the 1,607-topic Markdown inventory. These are mapped knowledge nodes, not finished public lessons yet.",
    searchLabel: "Search topics",
    searchPlaceholder: "Try MOSFET, battery, FPGA, grounding, medical imaging...",
    typeLabel: "Type",
    domainLabel: "Domain",
    allTypes: "All types",
    allDomains: "All domains",
    showing: "Showing",
    of: "of",
    topics: "topics",
    noResults: "No mapped topic matched that filter.",
    loading: "Loading topic index...",
    loadError: "Could not load the generated topic index.",
    reset: "Reset filters",
    canonicalId: "canonical ID",
    status: "status",
    depth: "depth",
    openTopic: "Open topic record",
    source: "source",
    languageNote: "Canonical topic names are English for now. Thai labels will be added when each topic enters the publishing pipeline.",
  },
  th: {
    eyebrow: "ดัชนีหัวข้อ",
    title: "ค้นหาโหนดความรู้ที่ทำแผนที่แล้ว",
    intro:
      "ช่องค้นหานี้อ่าน inventory Markdown จำนวน 1,607 หัวข้อ สิ่งเหล่านี้คือโหนดที่ทำแผนที่แล้ว ยังไม่ใช่บทเรียนสาธารณะที่เขียนเสร็จทั้งหมด",
    searchLabel: "ค้นหาหัวข้อ",
    searchPlaceholder: "ลอง MOSFET, battery, FPGA, grounding, medical imaging...",
    typeLabel: "ประเภท",
    domainLabel: "สาขา",
    allTypes: "ทุกประเภท",
    allDomains: "ทุกสาขา",
    showing: "แสดง",
    of: "จาก",
    topics: "หัวข้อ",
    noResults: "ไม่พบหัวข้อที่ตรงกับตัวกรองนี้",
    loading: "กำลังโหลดดัชนีหัวข้อ...",
    loadError: "โหลดดัชนีหัวข้อที่สร้างไว้ไม่สำเร็จ",
    reset: "ล้างตัวกรอง",
    canonicalId: "canonical ID",
    status: "สถานะ",
    depth: "ระดับ",
    openTopic: "เปิดบันทึกหัวข้อ",
    source: "แหล่งไฟล์",
    languageNote: "ชื่อหัวข้อ canonical ยังเป็นภาษาอังกฤษก่อน ป้ายภาษาไทยจะเพิ่มเมื่อแต่ละหัวข้อเข้าสู่ pipeline การเผยแพร่",
  },
} satisfies Record<Locale, Record<string, string>>;

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function topicMatches(topic: AtlasTopic, query: string, type: string, domain: string) {
  if (type !== "all" && topic.type !== type) {
    return false;
  }

  if (domain !== "all" && topic.domain !== domain) {
    return false;
  }

  if (!query) {
    return true;
  }

  const haystack = normalize(
    `${topic.id} ${topic.name} ${topic.summary} ${topic.type} ${topic.domain} ${topic.section} ${topic.subsection}`,
  );

  return haystack.includes(query);
}

export default function TopicSearch({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale];
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [domain, setDomain] = useState("all");
  const [topics, setTopics] = useState<AtlasTopic[]>([]);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    fetch("/data/atlas-topics.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Topic index request failed: ${response.status}`);
        }

        return response.json() as Promise<TopicPayload>;
      })
      .then((payload) => {
        if (!cancelled) {
          setTopics(payload.topics);
          setLoadState("ready");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadState("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const topicTypes = useMemo(() => Object.keys(atlasTopicMeta.byType).sort(), []);
  const domains = useMemo(() => Object.keys(atlasTopicMeta.byDomain).sort(), []);
  const normalizedQuery = normalize(query);

  const filteredTopics = useMemo(
    () => topics.filter((topic) => topicMatches(topic, normalizedQuery, type, domain)),
    [topics, normalizedQuery, type, domain],
  );
  const visibleTopics = filteredTopics.slice(0, 80);

  function resetFilters() {
    setQuery("");
    setType("all");
    setDomain("all");
  }

  return (
    <section className="topic-browser-card" aria-labelledby="topic-browser-title">
      <div className="section-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h2 id="topic-browser-title">{text.title}</h2>
        <p>{text.intro}</p>
        <p>{text.languageNote}</p>
      </div>

      <div className="topic-controls">
        <label>
          <span>{text.searchLabel}</span>
          <input
            type="search"
            value={query}
            placeholder={text.searchPlaceholder}
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </label>

        <label>
          <span>{text.typeLabel}</span>
          <select value={type} onChange={(event) => setType(event.currentTarget.value)}>
            <option value="all">{text.allTypes}</option>
            {topicTypes.map((topicType) => (
              <option key={topicType} value={topicType}>
                {topicType} ({atlasTopicMeta.byType[topicType as keyof typeof atlasTopicMeta.byType] ?? 0})
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>{text.domainLabel}</span>
          <select value={domain} onChange={(event) => setDomain(event.currentTarget.value)}>
            <option value="all">{text.allDomains}</option>
            {domains.map((topicDomain) => (
              <option key={topicDomain} value={topicDomain}>
                {topicDomain}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="topic-results-summary" aria-live="polite">
        <span>
          {loadState === "loading"
            ? text.loading
            : loadState === "error"
              ? text.loadError
              : (
                  <>
                    {text.showing} <strong>{visibleTopics.length}</strong> {text.of}{" "}
                    <strong>{filteredTopics.length}</strong> / <strong>{atlasTopicMeta.topicCount}</strong>{" "}
                    {text.topics}
                  </>
                )}
        </span>
        <button type="button" onClick={resetFilters}>
          {text.reset}
        </button>
      </div>

      {loadState === "ready" && visibleTopics.length > 0 ? (
        <div className="topic-result-grid">
          {visibleTopics.map((topic) => (
            <article className="topic-result-card" key={topic.id}>
              <div className="topic-card-topline">
                <span>{topic.type}</span>
                {topic.depth ? <span>{topic.depth}</span> : null}
              </div>
              <h3>{topic.name}</h3>
              <p>{topic.summary}</p>
              <dl>
                <div>
                  <dt>{text.canonicalId}</dt>
                  <dd>
                    <code>{topic.id}</code>
                  </dd>
                </div>
                <div>
                  <dt>{text.source}</dt>
                  <dd>
                    {topic.domain}
                    {topic.section ? ` · ${topic.section}` : ""}
                    {topic.subsection ? ` · ${topic.subsection}` : ""}
                  </dd>
                </div>
                <div>
                  <dt>{text.status}</dt>
                  <dd>{topic.status}</dd>
                </div>
              </dl>
              <a className="topic-card-link" href={`/${locale}/topics/${topic.slug}/`}>
                {text.openTopic}
              </a>
            </article>
          ))}
        </div>
      ) : loadState === "ready" ? (
        <p className="empty-topic-results">{text.noResults}</p>
      ) : null}
    </section>
  );
}
