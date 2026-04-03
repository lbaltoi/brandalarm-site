import { Link } from "react-router-dom";

const P = {
  bg: "#06070d", sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.07)",
  ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  tx: "#e2e8f0", mu: "#b0bfcc", dm: "#8896a8", br: "#f1f5f9", wh: "#fff",
};
const ff = "'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif";

export default function PageLayout({ title, children, lang = "ro" }) {
  return (
    <div style={{ fontFamily: ff, background: P.bg, color: P.tx, minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ padding: "0 20px", background: "rgba(6,7,13,.96)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(139,92,246,.08)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 20, textDecoration: "none", color: P.br }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 700, color: P.wh }}>B</div>
            <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
          </Link>
          <Link to="/" style={{ color: P.mu, fontSize: 14, textDecoration: "none" }}>
            ← {lang === "ro" ? "Inapoi la pagina principala" : "Back to homepage"}
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px 80px" }}>
        <h1 style={{ fontSize: "clamp(28px,5vw,38px)", fontWeight: 700, marginBottom: 8, color: P.br }}>{title}</h1>
        <div style={{ height: 3, width: 60, background: `linear-gradient(135deg,${P.ad},${P.ap})`, borderRadius: 2, marginBottom: 32 }} />
        <div style={{ fontSize: 16, lineHeight: 1.8, color: P.mu }}>{children}</div>
      </main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(139,92,246,.06)", padding: "32px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: P.dm }}>
            <strong style={{ color: P.br }}>Trademark Alliance SRL</strong><br />
            CUI: RO50768537 | Reg. Com.: J40/24786/2024<br />
            Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 13 }}>
            <Link to="/termeni-si-conditii" style={{ color: P.mu, textDecoration: "none" }}>Termeni</Link>
            <Link to="/confidentialitate" style={{ color: P.mu, textDecoration: "none" }}>Confidentialitate</Link>
            <Link to="/politica-cookies" style={{ color: P.mu, textDecoration: "none" }}>Cookies</Link>
          </div>
        </div>
        <div style={{ maxWidth: 800, margin: "16px auto 0", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#5a6577" }}>© 2025 Trademark Alliance SRL. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
}
