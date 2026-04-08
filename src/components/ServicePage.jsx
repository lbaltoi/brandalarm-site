import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { SERVICES } from "../data/services";

const REG = "https://app.brandalarm.ro/register";
const EXT = { rel: "noopener noreferrer", target: "_blank" };

const P = {
  ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  br: "#f1f5f9", tx: "#e2e8f0", mu: "#b0bfcc", dm: "#8896a8",
  sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.07)", wh: "#fff",
  bdAcc: "rgba(139,92,246,.18)",
};

const fm = "'Space Mono','Courier New',monospace";

const btnP = { background: `linear-gradient(135deg,${P.ad},${P.ap})`, color: P.wh, fontWeight: 600, padding: "14px 32px", border: "none", borderRadius: 12, fontSize: 16, cursor: "pointer", display: "inline-block", textDecoration: "none" };
const btnO = { background: "transparent", color: P.ac, fontWeight: 500, padding: "13px 30px", border: "1.5px solid rgba(139,92,246,.4)", borderRadius: 12, fontSize: 16, cursor: "pointer", display: "inline-block", textDecoration: "none" };

export default function ServicePage({ slug, lang = "ro" }) {
  const service = SERVICES[slug];
  if (!service) return <PageLayout title="Not Found" description="" lang={lang}>404</PageLayout>;

  const d = service[lang];
  const altLang = lang === "ro" ? "en" : "ro";

  // Schema.org Service markup
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": d.h1,
      "name": d.h1,
      "description": d.seoDesc,
      "provider": {
        "@type": "Organization",
        "name": "Trademark Alliance SRL",
        "url": "https://brandalarm.ro",
      },
      "areaServed": [
        { "@type": "Country", "name": "Romania" },
        { "@type": "Place", "name": "European Union" }
      ],
      "inLanguage": lang === "ro" ? "ro-RO" : "en-US",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "15",
        "highPrice": "30",
        "priceCurrency": "EUR",
        "offerCount": 4
      }
    };
    let script = document.getElementById("service-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "service-schema";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
    return () => {
      const el = document.getElementById("service-schema");
      if (el) el.remove();
    };
  }, [slug, lang, d.h1, d.seoDesc]);

  return (
    <PageLayout title={d.h1} description={d.seoDesc} lang={lang}>
      <style>{`
        .sp-grid-3 { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
        .sp-card { background: ${P.sf}; border: 1px solid ${P.bd}; border-radius: 14px; padding: 24px; }
        .sp-step-num { font-family: ${fm}; font-size: 36px; font-weight: 700; color: ${P.ac}; opacity: 0.4; line-height: 1; }
        @media (max-width: 640px) {
          .sp-card { padding: 20px; }
        }
      `}</style>

      {/* HERO */}
      <div style={{ marginBottom: 56 }}>
        <div style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 700,
          color: P.ac,
          letterSpacing: 2,
          textTransform: "uppercase",
          padding: "4px 12px",
          background: "rgba(139,92,246,.08)",
          border: "1px solid rgba(139,92,246,.2)",
          borderRadius: 50,
          marginBottom: 20,
        }}>{d.eyebrow}</div>
        <p style={{ fontSize: 18, color: P.mu, lineHeight: 1.7, marginBottom: 28, marginTop: 8 }}>{d.tagline}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={REG} {...EXT} style={btnP}>{lang === "ro" ? "Incepe gratuit" : "Get started free"}</a>
          <Link to={lang === "ro" ? "/#pricing" : "/#pricing"} style={btnO}>
            {lang === "ro" ? "Vezi preturile" : "View pricing"}
          </Link>
        </div>
      </div>

      {/* BENEFITS */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: P.br, marginBottom: 24, marginTop: 0 }}>
          {lang === "ro" ? "Ce primesti" : "What you get"}
        </h2>
        <div className="sp-grid-3">
          {d.benefits.map((b, i) => (
            <div key={i} className="sp-card">
              <div style={{ fontSize: 28, marginBottom: 10 }}>{b.i}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: P.br, margin: "0 0 8px" }}>{b.t}</h3>
              <p style={{ fontSize: 14, color: P.mu, lineHeight: 1.65, margin: 0 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: P.br, marginBottom: 24, marginTop: 0 }}>
          {lang === "ro" ? "Cum functioneaza" : "How it works"}
        </h2>
        <div className="sp-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {d.steps.map((s, i) => (
            <div key={i} className="sp-card" style={{ borderLeft: `2px solid ${P.bdAcc}` }}>
              <div className="sp-step-num">{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: P.br, margin: "10px 0 8px" }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: P.mu, lineHeight: 1.65, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section style={{ marginBottom: 64 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: P.br, marginBottom: 24, marginTop: 0 }}>
          {lang === "ro" ? "Pentru cine" : "Who it's for"}
        </h2>
        <div className="sp-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {d.audiences.map((a, i) => (
            <div key={i} className="sp-card" style={{ borderLeft: `3px solid ${P.ac}` }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: P.br, margin: "0 0 8px" }}>{a.t}</h3>
              <p style={{ fontSize: 14, color: P.mu, lineHeight: 1.7, margin: 0 }}>{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ marginBottom: 64 }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(139,92,246,.08), rgba(168,85,247,.04))",
          border: "1px solid rgba(139,92,246,.18)",
          borderRadius: 18,
          padding: "40px 32px",
          textAlign: "center",
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: P.br, marginBottom: 12, marginTop: 0 }}>{d.ctaTitle}</h2>
          <p style={{ fontSize: 16, color: P.mu, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7 }}>{d.ctaText}</p>
          <a href={REG} {...EXT} style={btnP}>{lang === "ro" ? "Creeaza cont gratuit" : "Create free account"}</a>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {d.related && d.related.length > 0 && (
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: P.br, marginBottom: 18, marginTop: 0 }}>
            {lang === "ro" ? "Servicii conexe" : "Related services"}
          </h2>
          <div className="sp-grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {d.related.map((rk) => {
              const r = SERVICES[rk];
              if (!r) return null;
              const rd = r[lang];
              const path = lang === "ro" ? r.roPath : r.enPath;
              return (
                <Link key={rk} to={path} className="sp-card" style={{ textDecoration: "none", display: "block" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: P.ac, margin: "0 0 6px" }}>{rd.h1}</h3>
                  <p style={{ fontSize: 13, color: P.mu, lineHeight: 1.6, margin: 0 }}>{rd.tagline.substring(0, 90)}...</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
