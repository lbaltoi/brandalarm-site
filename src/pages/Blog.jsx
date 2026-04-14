import { useEffect, useState, useMemo } from "react";
import PageLayout from "../components/PageLayout";

const P = {
  ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  br: "#f1f5f9", tx: "#e2e8f0", mu: "#b0bfcc", dm: "#8896a8",
  sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.1)", wh: "#fff",
};

const t = {
  ro: {
    title: "Stiri & Analize IP",
    desc: "Fluxul zilnic de stiri despre marci comerciale, proprietate intelectuala si legislatie europeana din principalele surse oficiale si bloguri de specialitate.",
    intro: "Agregam automat stiri si analize din surse oficiale (OSIM, WIPO) si bloguri de specialitate IP. Sursele originale sunt intotdeauna indicate si link-uite. Actualizare zilnica.",
    search: "Cauta in stiri...",
    allSources: "Toate sursele",
    loading: "Se incarca stirile...",
    empty: "Momentan nu sunt stiri disponibile. Fluxul se actualizeaza zilnic.",
    noResults: "Nicio stire care sa corespunda cautarii tale.",
    readMore: "Citeste articolul",
    lastUpdate: "Ultima actualizare",
    categories: { official: "Oficial", blog: "Blog", news: "Stiri" },
    disclaimer: "Stirile sunt agregate automat din surse publice (RSS si pagini web publice). Pentru articolul complet, te rugam sa vizitezi sursa originala indicata in fiecare card. BrandAlarm nu isi asuma continutul surselor terte."
  },
  en: {
    title: "IP News & Insights",
    desc: "Daily feed of trademark, intellectual property and European legislation news from major official sources and specialized IP blogs.",
    intro: "We automatically aggregate news and analysis from official sources (OSIM, WIPO) and specialized IP blogs. Original sources are always indicated and linked. Updated daily.",
    search: "Search news...",
    allSources: "All sources",
    loading: "Loading news...",
    empty: "No news available at the moment. The feed updates daily.",
    noResults: "No news matching your search.",
    readMore: "Read article",
    lastUpdate: "Last updated",
    categories: { official: "Official", blog: "Blog", news: "News" },
    disclaimer: "News items are automatically aggregated from public sources (RSS feeds and public web pages). For the full article, please visit the original source indicated on each card. BrandAlarm does not endorse third-party source content."
  }
};

function formatDate(iso, lang) {
  if (!iso) return "";
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now - d;
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (lang === "ro") {
    if (diffHours < 1) return "Acum";
    if (diffHours < 24) return `Acum ${diffHours} h`;
    if (diffDays < 7) return `Acum ${diffDays} zile`;
    return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
  } else {
    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });
  }
}

export default function Blog({ lang = "ro" }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [activeSource, setActiveSource] = useState("all");

  const d = t[lang];

  useEffect(() => {
    setLoading(true);
    fetch("/news.json", { cache: "no-cache" })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load news:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Reset activeSource if it becomes invalid after data load
  useEffect(() => {
    if (data && data.sources && activeSource !== "all") {
      const exists = data.sources.some((s) => s.id === activeSource);
      if (!exists) setActiveSource("all");
    }
  }, [data, activeSource]);

  const filtered = useMemo(() => {
    if (!data || !data.items) return [];
    let items = [...data.items];

    // Source filter (always applies, independent of language)
    if (activeSource !== "all") {
      items = items.filter((i) => i.sourceId === activeSource);
    }

    // Search filter
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) =>
          (i.title || "").toLowerCase().includes(q) ||
          (i.description || "").toLowerCase().includes(q) ||
          (i.source || "").toLowerCase().includes(q)
      );
    }

    // Sort by date descending
    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return items;
  }, [data, activeSource, query]);

  return (
    <PageLayout title={d.title} description={d.desc} lang={lang}>
      <style>{`
        .bl-input {
          width: 100%;
          background: ${P.sf};
          border: 1px solid ${P.bd};
          border-radius: 10px;
          padding: 12px 16px;
          color: ${P.br};
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: border-color .2s;
          box-sizing: border-box;
        }
        .bl-input:focus { border-color: ${P.ac}; }
        .bl-input::placeholder { color: ${P.dm}; }
        .bl-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .bl-chip {
          background: ${P.sf};
          border: 1px solid ${P.bd};
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 13px;
          color: ${P.mu};
          cursor: pointer;
          transition: all .2s;
          font-family: inherit;
          white-space: nowrap;
        }
        .bl-chip:hover { border-color: ${P.ac}; color: ${P.ac}; }
        .bl-chip.active {
          background: rgba(139,92,246,.12);
          border-color: ${P.ac};
          color: ${P.ac};
        }
        .bl-card {
          background: ${P.sf};
          border: 1px solid ${P.bd};
          border-radius: 14px;
          padding: 22px;
          transition: border-color .2s, transform .2s;
          text-decoration: none;
          display: block;
          color: inherit;
        }
        .bl-card:hover {
          border-color: rgba(139,92,246,.35);
          transform: translateY(-2px);
        }
        .bl-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .bl-count {
          font-size: 12px;
          color: ${P.dm};
          margin-bottom: 16px;
        }
        @media (max-width: 640px) {
          .bl-card { padding: 18px; }
        }
      `}</style>

      <p style={{ marginBottom: 24, fontSize: 15, lineHeight: 1.7 }}>{d.intro}</p>

      {/* Search */}
      <div style={{ marginBottom: 18 }}>
        <input
          type="text"
          className="bl-input"
          placeholder={d.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Source filter chips */}
      {data && data.sources && data.sources.length > 0 && (
        <div className="bl-chips">
          <button
            type="button"
            className={`bl-chip ${activeSource === "all" ? "active" : ""}`}
            onClick={() => setActiveSource("all")}
          >
            {d.allSources} ({data.items.length})
          </button>
          {data.sources.map((s) => {
            const count = data.items.filter((i) => i.sourceId === s.id).length;
            if (count === 0) return null;
            return (
              <button
                key={s.id}
                type="button"
                className={`bl-chip ${activeSource === s.id ? "active" : ""}`}
                onClick={() => setActiveSource(s.id)}
              >
                {s.name} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* States */}
      {loading && (
        <div style={{ textAlign: "center", padding: "40px 0", color: P.mu, fontSize: 15 }}>
          {d.loading}
        </div>
      )}

      {!loading && error && (
        <div style={{
          padding: 20,
          background: "rgba(239,68,68,.04)",
          border: "1px solid rgba(239,68,68,.15)",
          borderRadius: 12,
          color: "#fca5a5",
          fontSize: 14,
          textAlign: "center",
        }}>
          {d.empty}
        </div>
      )}

      {!loading && !error && data && data.items.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", color: P.mu, fontSize: 15 }}>
          {d.empty}
        </div>
      )}

      {!loading && !error && data && data.items.length > 0 && filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", color: P.mu, fontSize: 15 }}>
          {d.noResults}
        </div>
      )}

      {/* Result count */}
      {!loading && filtered.length > 0 && (query.trim() || activeSource !== "all") && (
        <div className="bl-count">
          {filtered.length} {lang === "ro" ? "rezultate" : "results"}
        </div>
      )}

      {/* News items */}
      {!loading && filtered.length > 0 && (
        <div style={{ display: "grid", gap: 14 }}>
          {filtered.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bl-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                <span
                  className="bl-badge"
                  style={{
                    background: `${item.color}22`,
                    color: item.color || P.ac,
                    border: `1px solid ${item.color || P.ac}33`,
                  }}
                >
                  {item.source}
                </span>
                <span style={{ fontSize: 12, color: P.dm }}>{formatDate(item.date, lang)}</span>
                {item.category && (
                  <span style={{ fontSize: 11, color: P.dm, textTransform: "uppercase", letterSpacing: 1 }}>
                    · {d.categories[item.category] || item.category}
                  </span>
                )}
              </div>
              <h3 style={{
                fontSize: 17,
                fontWeight: 600,
                color: P.br,
                margin: "0 0 8px",
                lineHeight: 1.4,
              }}>{item.title}</h3>
              {item.description && (
                <p style={{
                  fontSize: 14,
                  color: P.mu,
                  lineHeight: 1.65,
                  margin: "0 0 12px",
                }}>{item.description}</p>
              )}
              <span style={{ fontSize: 13, color: P.ac, fontWeight: 500 }}>
                {d.readMore} →
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Meta info */}
      {data && data.updatedAt && (
        <div style={{
          marginTop: 40,
          paddingTop: 24,
          borderTop: `1px solid ${P.bd}`,
          fontSize: 12,
          color: P.dm,
          lineHeight: 1.7,
        }}>
          <p style={{ marginBottom: 8 }}>
            <strong style={{ color: P.mu }}>{d.lastUpdate}:</strong>{" "}
            {new Date(data.updatedAt).toLocaleString(lang === "ro" ? "ro-RO" : "en-US")}
          </p>
          <p style={{ marginBottom: 0 }}>{d.disclaimer}</p>
        </div>
      )}
    </PageLayout>
  );
}
