import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const P = {
  bg: "#06070d", sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.07)",
  ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  tx: "#e2e8f0", mu: "#b0bfcc", dm: "#8896a8", br: "#f1f5f9", wh: "#fff",
};
const ff = "'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif";
const fm = "'Space Mono','Courier New',monospace";

const routes = {
  // Legal
  "/termeni-si-conditii": "/en/terms",
  "/en/terms": "/termeni-si-conditii",
  "/confidentialitate": "/en/privacy",
  "/en/privacy": "/confidentialitate",
  "/politica-cookies": "/en/cookie-policy",
  "/en/cookie-policy": "/politica-cookies",
  "/intrebari-frecvente": "/en/faq",
  "/en/faq": "/intrebari-frecvente",
  "/blog": "/en/blog",
  "/en/blog": "/blog",
  // Services
  "/monitorizare-marci": "/en/trademark-monitoring",
  "/en/trademark-monitoring": "/monitorizare-marci",
  "/cautare-similitudini": "/en/similarity-search",
  "/en/similarity-search": "/cautare-similitudini",
  "/monitorizare-domenii": "/en/domain-monitoring",
  "/en/domain-monitoring": "/monitorizare-domenii",
  "/rapoarte-ai-marci": "/en/ai-trademark-reports",
  "/en/ai-trademark-reports": "/rapoarte-ai-marci",
  "/opozitie-marca-euipo-osim": "/en/trademark-opposition",
  "/en/trademark-opposition": "/opozitie-marca-euipo-osim",
  "/alerte-expirare-marci": "/en/trademark-expiry-alerts",
  "/en/trademark-expiry-alerts": "/alerte-expirare-marci",
};

const footerLinks = {
  ro: [
    { to: "/blog", label: "Stiri IP" },
    { to: "/intrebari-frecvente", label: "FAQ" },
    { to: "/termeni-si-conditii", label: "Termeni" },
    { to: "/confidentialitate", label: "Confidentialitate" },
    { to: "/politica-cookies", label: "Cookies" },
  ],
  en: [
    { to: "/en/blog", label: "IP News" },
    { to: "/en/faq", label: "FAQ" },
    { to: "/en/terms", label: "Terms" },
    { to: "/en/privacy", label: "Privacy" },
    { to: "/en/cookie-policy", label: "Cookies" },
  ],
};

const updateMeta = (name, content, isProperty = false) => {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const updateLink = (rel, href, hreflang = null) => {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector(sel);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default function PageLayout({ title, description, children, lang = "ro" }) {
  const location = useLocation();
  const altPath = routes[location.pathname] || "/";
  const links = footerLinks[lang];
  const fullTitle = `${title} — BrandAlarm`;
  const currentUrl = `https://brandalarm.ro${location.pathname}`;
  const altUrl = `https://brandalarm.ro${altPath}`;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = lang;
    updateMeta("description", description);
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", currentUrl, true);
    updateMeta("og:locale", lang === "ro" ? "ro_RO" : "en_US", true);
    updateMeta("og:image", lang === "ro" ? "https://brandalarm.ro/og-image.png" : "https://brandalarm.ro/og-image-en.png", true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", lang === "ro" ? "https://brandalarm.ro/og-image.png" : "https://brandalarm.ro/og-image-en.png");
    updateLink("canonical", currentUrl);
    updateLink("alternate", lang === "ro" ? currentUrl : altUrl, "ro");
    updateLink("alternate", lang === "en" ? currentUrl : altUrl, "en");
    updateLink("alternate", lang === "ro" ? currentUrl : altUrl, "x-default");
    window.scrollTo(0, 0);
  }, [fullTitle, description, currentUrl, altUrl, lang]);

  // JSON-LD structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description: description,
    url: currentUrl,
    inLanguage: lang === "ro" ? "ro-RO" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "Trademark Alliance SRL",
      url: "https://brandalarm.ro",
    },
  };

  return (
    <div style={{ fontFamily: ff, background: P.bg, color: P.tx, minHeight: "100vh" }}>
      <style>{`
        .pl-main h2, .pl-main h3 { word-wrap: break-word; }
        .pl-main a { word-wrap: break-word; overflow-wrap: break-word; }
        .pl-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .pl-table-wrap table { min-width: 520px; }
        @media (max-width: 640px) {
          .pl-nav-home-text { display: none !important; }
          .pl-nav-home-arrow { display: inline !important; }
          .pl-main { padding: 28px 16px 60px !important; }
          .pl-main h1 { font-size: 26px !important; letter-spacing: -0.5px; }
          .pl-main h2 { font-size: 19px !important; margin-top: 32px !important; }
          .pl-main h3 { font-size: 16px !important; }
          .pl-main, .pl-main p, .pl-main li { font-size: 15px !important; line-height: 1.75 !important; }
          .pl-main ul { padding-left: 20px !important; }
          .pl-footer { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .pl-footer-links { flex-wrap: wrap; gap: 16px !important; }
        }
        @media (min-width: 641px) {
          .pl-nav-home-arrow { display: none !important; }
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* NAV */}
      <nav style={{ padding: "0 16px", background: "rgba(6,7,13,.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(139,92,246,.08)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60, gap: 12 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 19, textDecoration: "none", color: P.br, flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: P.wh }}>B</div>
            <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            {["ro", "en"].map(l => (
              <Link key={l} to={l === lang ? location.pathname : altPath} style={{
                background: lang === l ? "rgba(139,92,246,.15)" : "transparent",
                color: lang === l ? P.ac : P.dm,
                border: `1px solid ${lang === l ? P.ac : "rgba(100,116,139,.3)"}`,
                borderRadius: 6, padding: "4px 9px", fontSize: 11, fontWeight: 700,
                fontFamily: fm, textDecoration: "none",
              }}>{l.toUpperCase()}</Link>
            ))}
            <Link to="/" style={{ color: P.mu, fontSize: 13, textDecoration: "none", marginLeft: 4 }}>
              <span className="pl-nav-home-text">← {lang === "ro" ? "Pagina principala" : "Homepage"}</span>
              <span className="pl-nav-home-arrow" style={{ display: "none", fontSize: 20 }}>←</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pl-main" style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px 80px" }}>
        <h1 style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 700, marginBottom: 8, color: P.br, lineHeight: 1.2 }}>{title}</h1>
        <div style={{ height: 3, width: 60, background: `linear-gradient(135deg,${P.ad},${P.ap})`, borderRadius: 2, marginBottom: 32 }} />
        <div style={{ fontSize: 16, lineHeight: 1.8, color: P.mu }}>{children}</div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(139,92,246,.06)", padding: "28px 16px" }}>
        <div className="pl-footer" style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 12, color: P.dm, lineHeight: 1.7 }}>
            <strong style={{ color: P.br, fontSize: 13 }}>Trademark Alliance SRL</strong><br />
            CUI: RO50768537 | Reg. Com.: J40/24786/2024<br />
            Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti
          </div>
          <div className="pl-footer-links" style={{ display: "flex", gap: 20, fontSize: 13 }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{ color: P.mu, textDecoration: "none" }}>{l.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 800, margin: "18px auto 0", paddingTop: 14, borderTop: "1px solid rgba(139,92,246,.06)", textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#5a6577" }}>
            © 2025 Trademark Alliance SRL. {lang === "ro" ? "Toate drepturile rezervate." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
