import { useEffect } from "react";
import PageLayout from "../components/PageLayout";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, b: { color: "#e2e8f0" }, a: { color: "#a78bfa" } };
const tbl = { width: "100%", borderCollapse: "collapse", marginBottom: 24, fontSize: 14 };
const th = { textAlign: "left", padding: "10px 8px", color: "#f1f5f9", borderBottom: "1px solid rgba(139,92,246,.15)" };
const td = { padding: "8px", borderBottom: "1px solid rgba(139,92,246,.05)" };

const cookies = [
  ["__cf_bm", "Cloudflare", { ro: "Protectie anti-bot, securitate", en: "Anti-bot protection, security" }, "30 min"],
  ["cf_clearance", "Cloudflare", { ro: "Verificare provocari de securitate", en: "Security challenge verification" }, { ro: "30 min", en: "30 min" }],
  ["__cfruid", "Cloudflare", { ro: "Identificare sesiune Cloudflare", en: "Cloudflare session identification" }, { ro: "Sesiune", en: "Session" }],
];

const browsers = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor" },
  { name: "Safari", url: "https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/ro-ro/microsoft-edge/stergerea-cookie-urilor-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
];

function RO() {
  return <>
    <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>
    <p style={S.p}>Prezenta Politica de Cookies explica modul in care <b style={S.b}>BrandAlarm</b> (operat de Trademark Alliance SRL) utilizeaza cookies si tehnologii similare pe site-ul brandalarm.ro, in conformitate cu Directiva ePrivacy, GDPR si Legea nr. 506/2004.</p>

    <h2 style={S.h2}>1. Ce Sunt Cookie-urile?</h2>
    <p style={S.p}>Cookie-urile sunt fisiere text de mici dimensiuni stocate pe dispozitivul dumneavoastra atunci cand vizitati un site web. Permit site-ului sa va recunoasca dispozitivul si sa retina informatii despre vizita dumneavoastra.</p>

    <h2 style={S.h2}>2. Cookie-uri Utilizate</h2>
    <h3 style={S.h3}>2.1. Cookie-uri strict necesare</h3>
    <p style={S.p}>Esentiale pentru functionarea corecta a site-ului. Nu stocheaza date personale identificabile.</p>
    <div className="pl-table-wrap"><table style={tbl}><thead><tr><th style={th}>Cookie</th><th style={th}>Furnizor</th><th style={th}>Scop</th><th style={th}>Durata</th></tr></thead><tbody>
      {cookies.map(([name, provider, purpose, dur], i) => (
        <tr key={i}><td style={{ ...td, color: "#a78bfa", fontFamily: "'Space Mono',monospace", fontSize: 13 }}>{name}</td><td style={{ ...td, color: "#b0bfcc" }}>{provider}</td><td style={{ ...td, color: "#b0bfcc" }}>{purpose.ro}</td><td style={{ ...td, color: "#8896a8" }}>{typeof dur === "object" ? dur.ro : dur}</td></tr>
      ))}
    </tbody></table></div>

    <h3 style={S.h3}>2.2. Cookie-uri analitice</h3>
    <p style={S.p}>In prezent, BrandAlarm <b style={S.b}>nu utilizeaza</b> cookie-uri analitice sau de tracking. Daca vom implementa astfel de cookie-uri, vom actualiza aceasta politica si vom solicita consimtamantul dvs.</p>

    <h3 style={S.h3}>2.3. Cookie-uri de marketing</h3>
    <p style={S.p}>BrandAlarm <b style={S.b}>nu utilizeaza</b> cookie-uri de marketing sau retargeting.</p>

    <h2 style={S.h2}>3. Cookie-uri de la Terti</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Cloudflare</b> — securitate, CDN (strict necesare, nu necesita consimtamant)</li>
      <li style={S.li}><b style={S.b}>Google Fonts</b> — incarcarea fonturilor web</li>
      <li style={S.li}><b style={S.b}>Stripe</b> — doar pe paginile de plata</li>
    </ul>

    <h2 style={S.h2}>4. Gestionarea Cookie-urilor</h2>
    <p style={S.p}>Puteti controla cookie-urile din setarile browserului:</p>
    <ul style={S.ul}>
      {browsers.map(b => <li key={b.name} style={S.li}><a href={b.url} target="_blank" rel="noopener noreferrer" style={S.a}>{b.name}</a></li>)}
    </ul>
    <p style={S.p}><b style={S.b}>Atentie:</b> Dezactivarea cookie-urilor strict necesare poate afecta functionarea site-ului.</p>

    <h2 style={S.h2}>5. Tehnologii Similare</h2>
    <p style={S.p}>Putem utiliza Local Storage (preferinte limba) si Session Storage (date temporare sesiune). Supuse acelorasi reguli de consimtamant.</p>

    <h2 style={S.h2}>6. Contact</h2>
    <p style={S.p}>Intrebari privind cookie-urile: prin Platforma dupa crearea contului.</p>
    <p style={S.p}><b style={S.b}>ANSPDCP:</b> <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={S.a}>www.dataprotection.ro</a></p>
  </>;
}

function EN() {
  return <>
    <p style={S.p}><em>Last updated: April 1, 2026</em></p>
    <p style={S.p}>This Cookie Policy explains how <b style={S.b}>BrandAlarm</b> (operated by Trademark Alliance SRL) uses cookies and similar technologies on brandalarm.ro, in accordance with the ePrivacy Directive, GDPR and Romanian Law No. 506/2004.</p>

    <h2 style={S.h2}>1. What Are Cookies?</h2>
    <p style={S.p}>Cookies are small text files stored on your device when you visit a website. They allow the site to recognize your device and retain information about your visit.</p>

    <h2 style={S.h2}>2. Cookies Used</h2>
    <h3 style={S.h3}>2.1. Strictly necessary cookies</h3>
    <p style={S.p}>Essential for correct site operation. Do not store personally identifiable data.</p>
    <div className="pl-table-wrap"><table style={tbl}><thead><tr><th style={th}>Cookie</th><th style={th}>Provider</th><th style={th}>Purpose</th><th style={th}>Duration</th></tr></thead><tbody>
      {cookies.map(([name, provider, purpose, dur], i) => (
        <tr key={i}><td style={{ ...td, color: "#a78bfa", fontFamily: "'Space Mono',monospace", fontSize: 13 }}>{name}</td><td style={{ ...td, color: "#b0bfcc" }}>{provider}</td><td style={{ ...td, color: "#b0bfcc" }}>{purpose.en}</td><td style={{ ...td, color: "#8896a8" }}>{typeof dur === "object" ? dur.en : dur}</td></tr>
      ))}
    </tbody></table></div>

    <h3 style={S.h3}>2.2. Analytics cookies</h3>
    <p style={S.p}>Currently, BrandAlarm <b style={S.b}>does not use</b> analytics or tracking cookies. If we implement such cookies, we will update this policy and request your consent.</p>

    <h3 style={S.h3}>2.3. Marketing cookies</h3>
    <p style={S.p}>BrandAlarm <b style={S.b}>does not use</b> marketing or retargeting cookies.</p>

    <h2 style={S.h2}>3. Third-Party Cookies</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Cloudflare</b> — security, CDN (strictly necessary, no consent required)</li>
      <li style={S.li}><b style={S.b}>Google Fonts</b> — web font loading</li>
      <li style={S.li}><b style={S.b}>Stripe</b> — payment pages only</li>
    </ul>

    <h2 style={S.h2}>4. Managing Cookies</h2>
    <p style={S.p}>You can control cookies through your browser settings:</p>
    <ul style={S.ul}>
      {browsers.map(b => <li key={b.name} style={S.li}><a href={b.url} target="_blank" rel="noopener noreferrer" style={S.a}>{b.name}</a></li>)}
    </ul>
    <p style={S.p}><b style={S.b}>Note:</b> Disabling strictly necessary cookies may affect site functionality.</p>

    <h2 style={S.h2}>5. Similar Technologies</h2>
    <p style={S.p}>We may use Local Storage (language preferences) and Session Storage (temporary session data). Subject to the same consent rules.</p>

    <h2 style={S.h2}>6. Contact</h2>
    <p style={S.p}>Cookie inquiries: through the Platform after account creation.</p>
    <p style={S.p}><b style={S.b}>ANSPDCP:</b> <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={S.a}>www.dataprotection.ro</a></p>
  </>;
}

export default function PoliticaCookies({ lang = "ro" }) {
  useEffect(() => { window.scrollTo(0, 0); }, [lang]);
  return (
    <PageLayout title={lang === "ro" ? "Politica de Cookies" : "Cookie Policy"} description={lang === "ro" ? "Politica de Cookies BrandAlarm — tipuri de cookies utilizate, scopuri si gestionare, conform Directivei ePrivacy si GDPR." : "BrandAlarm Cookie Policy — types of cookies used, purposes and management, compliant with ePrivacy Directive and GDPR."} lang={lang}>
      {lang === "ro" ? <RO /> : <EN />}
    </PageLayout>
  );
}
