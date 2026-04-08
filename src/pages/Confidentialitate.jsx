import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, b: { color: "#e2e8f0" }, a: { color: "#a78bfa" } };

function RO() {
  return <>
    <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>
    <p style={S.p}>Prezenta Politica de Confidentialitate descrie modul in care <b style={S.b}>Trademark Alliance SRL</b> colecteaza, prelucreaza si protejeaza datele dumneavoastra cu caracter personal in cadrul utilizarii platformei BrandAlarm, in conformitate cu Regulamentul (UE) 2016/679 (GDPR) si Legea nr. 190/2018.</p>

    <h2 style={S.h2}>1. Operatorul de Date</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Denumire:</b> Trademark Alliance SRL</li>
      <li style={S.li}><b style={S.b}>CUI:</b> RO50768537</li>
      <li style={S.li}><b style={S.b}>Sediu:</b> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti</li>
      <li style={S.li}><b style={S.b}>Contact:</b> Prin platforma BrandAlarm (sectiunea Contul Meu)</li>
    </ul>

    <h2 style={S.h2}>2. Ce Date Colectam</h2>
    <h3 style={S.h3}>Date furnizate direct</h3>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Date de cont:</b> Email, parola (criptata), nume/denumire companie</li>
      <li style={S.li}><b style={S.b}>Date de facturare:</b> Nume, adresa, CUI. Datele cardului sunt procesate de Stripe — NU le stocam.</li>
      <li style={S.li}><b style={S.b}>Date privind marcile:</b> Denumiri marci monitorizate, clase Nice, teritorii</li>
      <li style={S.li}><b style={S.b}>Date privind domeniile:</b> Nume de domenii monitorizate</li>
    </ul>
    <h3 style={S.h3}>Date colectate automat</h3>
    <ul style={S.ul}>
      <li style={S.li}>Adresa IP, tipul browserului, sistemul de operare</li>
      <li style={S.li}>Paginile accesate, actiunile efectuate, data/ora accesarii</li>
      <li style={S.li}>Cookies — conform <Link to="/politica-cookies" style={S.a}>Politicii de Cookies</Link></li>
    </ul>

    <h2 style={S.h2}>3. Scopurile Prelucrarii</h2>
    <ul style={S.ul}>
      <li style={S.li}>Crearea si gestionarea contului — Art. 6(1)(b) GDPR</li>
      <li style={S.li}>Furnizarea serviciilor de monitorizare — Art. 6(1)(b)</li>
      <li style={S.li}>Procesarea platilor — Art. 6(1)(b)</li>
      <li style={S.li}>Trimiterea alertelor si notificarilor — Art. 6(1)(b)</li>
      <li style={S.li}>Imbunatatirea Platformei — Art. 6(1)(f) interes legitim</li>
      <li style={S.li}>Prevenirea fraudei si securitate — Art. 6(1)(f)</li>
      <li style={S.li}>Conformare obligatii legale (facturare) — Art. 6(1)(c)</li>
      <li style={S.li}>Comunicari marketing (cu consimtamant) — Art. 6(1)(a)</li>
    </ul>

    <h2 style={S.h2}>4. Destinatari ai Datelor</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Stripe Inc.</b> — procesare plati (SUA, clauze contractuale standard)</li>
      <li style={S.li}><b style={S.b}>Cloudflare Inc.</b> — hosting si securitate (EU Data Protection Framework)</li>
      <li style={S.li}><b style={S.b}>Anthropic PBC</b> — procesare AI rapoarte (date anonimizate)</li>
      <li style={S.li}><b style={S.b}>Autoritati publice</b> — doar cand exista obligatie legala</li>
    </ul>
    <p style={S.p}>Nu vindem si nu transferam datele dvs. catre terti in scopuri de marketing.</p>

    <h2 style={S.h2}>5. Durata Stocarii</h2>
    <ul style={S.ul}>
      <li style={S.li}>Date de cont: pe durata contului + 30 zile dupa stergere</li>
      <li style={S.li}>Date de facturare: 10 ani (obligatie fiscala)</li>
      <li style={S.li}>Rapoarte: conform planului (1-5 ani)</li>
      <li style={S.li}>Logs tehnice: maximum 90 zile</li>
    </ul>

    <h2 style={S.h2}>6. Drepturile Dumneavoastra</h2>
    <p style={S.p}>Conform GDPR aveti dreptul de: acces (art. 15), rectificare (art. 16), stergere (art. 17), restrictionare (art. 18), portabilitate (art. 20), opozitie (art. 21), retragere consimtamant.</p>
    <p style={S.p}>Contactati-ne prin Platforma → Contul Meu → Protectia datelor. Raspundem in max. 30 zile.</p>

    <h2 style={S.h2}>7. Securitatea Datelor</h2>
    <ul style={S.ul}>
      <li style={S.li}>Criptare TLS 1.3, parole hashed (bcrypt)</li>
      <li style={S.li}>2FA disponibil, protectie DDoS (Cloudflare)</li>
      <li style={S.li}>Acces restrictionat pe principiul "need to know"</li>
    </ul>

    <h2 style={S.h2}>8. Plangeri</h2>
    <p style={S.p}><b style={S.b}>ANSPDCP</b> — B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucuresti — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={S.a}>www.dataprotection.ro</a></p>

    <h2 style={S.h2}>9. Modificari</h2>
    <p style={S.p}>Modificarile semnificative se comunica cu 30 zile inainte prin email si/sau pe Platforma.</p>
  </>;
}

function EN() {
  return <>
    <p style={S.p}><em>Last updated: April 1, 2026</em></p>
    <p style={S.p}>This Privacy Policy describes how <b style={S.b}>Trademark Alliance SRL</b> collects, processes and protects your personal data when using the BrandAlarm platform, in accordance with Regulation (EU) 2016/679 (GDPR) and Romanian Law No. 190/2018.</p>

    <h2 style={S.h2}>1. Data Controller</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Company:</b> Trademark Alliance SRL</li>
      <li style={S.li}><b style={S.b}>VAT:</b> RO50768537</li>
      <li style={S.li}><b style={S.b}>Address:</b> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucharest, Romania</li>
      <li style={S.li}><b style={S.b}>Contact:</b> Through the BrandAlarm platform (My Account section)</li>
    </ul>

    <h2 style={S.h2}>2. Data We Collect</h2>
    <h3 style={S.h3}>Data you provide</h3>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Account data:</b> Email, password (encrypted), name/company name</li>
      <li style={S.li}><b style={S.b}>Billing data:</b> Name, address, VAT ID. Card data is processed by Stripe — we do NOT store it.</li>
      <li style={S.li}><b style={S.b}>Trademark data:</b> Monitored trademark names, Nice classes, territories</li>
      <li style={S.li}><b style={S.b}>Domain data:</b> Monitored domain names</li>
    </ul>
    <h3 style={S.h3}>Automatically collected data</h3>
    <ul style={S.ul}>
      <li style={S.li}>IP address, browser type, operating system</li>
      <li style={S.li}>Pages visited, actions performed, date/time</li>
      <li style={S.li}>Cookies — per our <Link to="/en/cookie-policy" style={S.a}>Cookie Policy</Link></li>
    </ul>

    <h2 style={S.h2}>3. Purposes of Processing</h2>
    <ul style={S.ul}>
      <li style={S.li}>Account creation and management — Art. 6(1)(b) GDPR</li>
      <li style={S.li}>Providing monitoring services — Art. 6(1)(b)</li>
      <li style={S.li}>Payment processing — Art. 6(1)(b)</li>
      <li style={S.li}>Sending alerts and notifications — Art. 6(1)(b)</li>
      <li style={S.li}>Platform improvement — Art. 6(1)(f) legitimate interest</li>
      <li style={S.li}>Fraud prevention and security — Art. 6(1)(f)</li>
      <li style={S.li}>Legal obligations (billing) — Art. 6(1)(c)</li>
      <li style={S.li}>Marketing communications (with consent) — Art. 6(1)(a)</li>
    </ul>

    <h2 style={S.h2}>4. Data Recipients</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Stripe Inc.</b> — payment processing (US, standard contractual clauses)</li>
      <li style={S.li}><b style={S.b}>Cloudflare Inc.</b> — hosting and security (EU Data Protection Framework)</li>
      <li style={S.li}><b style={S.b}>Anthropic PBC</b> — AI report processing (anonymized data)</li>
      <li style={S.li}><b style={S.b}>Public authorities</b> — only when legally required</li>
    </ul>
    <p style={S.p}>We do not sell or transfer your data to third parties for marketing purposes.</p>

    <h2 style={S.h2}>5. Data Retention</h2>
    <ul style={S.ul}>
      <li style={S.li}>Account data: duration of account + 30 days after deletion</li>
      <li style={S.li}>Billing data: 10 years (tax obligation)</li>
      <li style={S.li}>Reports: per subscription plan (1-5 years)</li>
      <li style={S.li}>Technical logs: maximum 90 days</li>
    </ul>

    <h2 style={S.h2}>6. Your Rights</h2>
    <p style={S.p}>Under GDPR you have the right to: access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), objection (Art. 21), withdraw consent.</p>
    <p style={S.p}>Contact us through the Platform → My Account → Data Protection. We respond within 30 days.</p>

    <h2 style={S.h2}>7. Data Security</h2>
    <ul style={S.ul}>
      <li style={S.li}>TLS 1.3 encryption, bcrypt password hashing</li>
      <li style={S.li}>2FA available, DDoS protection (Cloudflare)</li>
      <li style={S.li}>Access restricted on "need to know" basis</li>
    </ul>

    <h2 style={S.h2}>8. Complaints</h2>
    <p style={S.p}><b style={S.b}>ANSPDCP</b> — B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucharest — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={S.a}>www.dataprotection.ro</a></p>

    <h2 style={S.h2}>9. Changes</h2>
    <p style={S.p}>Significant changes will be communicated 30 days in advance by email and/or on the Platform.</p>
  </>;
}

export default function Confidentialitate({ lang = "ro" }) {
  useEffect(() => { window.scrollTo(0, 0); }, [lang]);
  return (
    <PageLayout title={lang === "ro" ? "Politica de Confidentialitate" : "Privacy Policy"} lang={lang}>
      {lang === "ro" ? <RO /> : <EN />}
    </PageLayout>
  );
}
