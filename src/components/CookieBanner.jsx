import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const P = {
  bg: "rgba(6,7,13,.97)",
  bd: "1px solid rgba(139,92,246,.15)",
  ac: "#a78bfa",
  ad: "#8b5cf6",
  ap: "#7c3aed",
  tx: "#b0bfcc",
  br: "#f1f5f9",
  wh: "#fff",
};
const ff = "'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ba_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("ba_cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("ba_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: P.bg, backdropFilter: "blur(20px)",
      borderTop: P.bd, padding: "20px 24px",
      fontFamily: ff,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        gap: 16, justifyContent: "space-between",
      }}>
        <div style={{ flex: "1 1 500px", minWidth: 280 }}>
          <p style={{ fontSize: 14, color: P.tx, lineHeight: 1.6, margin: 0 }}>
            Folosim cookie-uri strict necesare pentru functionarea site-ului (securitate Cloudflare).
            Nu folosim cookie-uri de tracking sau marketing.{" "}
            <Link to="/politica-cookies" style={{ color: P.ac, textDecoration: "none" }}>
              Detalii →
            </Link>
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
          <button onClick={reject} style={{
            background: "transparent",
            color: P.tx, fontWeight: 500, padding: "10px 22px",
            border: "1px solid rgba(139,92,246,.3)", borderRadius: 8,
            fontSize: 14, cursor: "pointer", fontFamily: ff,
          }}>
            Refuza
          </button>
          <button onClick={accept} style={{
            background: `linear-gradient(135deg,${P.ad},${P.ap})`,
            color: P.wh, fontWeight: 600, padding: "10px 22px",
            border: "none", borderRadius: 8,
            fontSize: 14, cursor: "pointer", fontFamily: ff,
          }}>
            Accepta
          </button>
        </div>
      </div>
    </div>
  );
}
