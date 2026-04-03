import { useState, useEffect, useCallback } from "react";

const APP = "https://app.brandalarm.ro/dashboard";
const REG = "https://app.brandalarm.ro/register";
const EXT = { rel: "noopener noreferrer", target: "_blank" };

const DEPLOY_FILES = {
  "_headers": `/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://static.cloudflareinsights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://app.brandalarm.ro; object-src 'none'; upgrade-insecure-requests
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=86400`,

  "_redirects": `http://brandalarm.ro/* https://brandalarm.ro/:splat 301
http://www.brandalarm.ro/* https://brandalarm.ro/:splat 301
https://www.brandalarm.ro/* https://brandalarm.ro/:splat 301
/en/* /index.html 200
/monitorizare-marci/* /index.html 200
/monitorizare-domenii/* /index.html 200
/cautare-marci/* /index.html 200
/preturi/* /index.html 200
/rapoarte-ai/* /index.html 200
/opozitie-marca/* /index.html 200
/blog/* /index.html 200
/confidentialitate/* /index.html 200
/termeni/* /index.html 200`,

  "robots.txt": `User-agent: *
Allow: /
Sitemap: https://brandalarm.ro/sitemap.xml
Disallow: /api/
Disallow: /admin/`,

  "sitemap.xml": `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://brandalarm.ro/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://brandalarm.ro/"/>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/"/>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/monitorizare-marci/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/monitorizare-marci/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-monitoring/"/>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/trademark-monitoring/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/monitorizare-marci/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-monitoring/"/>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/monitorizare-domenii/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/monitorizare-domenii/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/domain-monitoring/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/domain-monitoring/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/monitorizare-domenii/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/domain-monitoring/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/cautare-marci/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/cautare-marci/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-search/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/trademark-search/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/cautare-marci/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-search/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/preturi/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/preturi/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/pricing/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/pricing/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/preturi/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/pricing/"/>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/rapoarte-ai/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/rapoarte-ai/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/ai-reports/"/>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/ai-reports/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/rapoarte-ai/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/ai-reports/"/>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/opozitie-marca/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/opozitie-marca/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-opposition/"/>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/trademark-opposition/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/opozitie-marca/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/trademark-opposition/"/>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/blog/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/blog/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/blog/"/>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/blog/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/blog/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/blog/"/>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/confidentialitate/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/confidentialitate/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/privacy/"/>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/privacy/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/confidentialitate/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/privacy/"/>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/termeni/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/termeni/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/terms/"/>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://brandalarm.ro/en/terms/</loc>
    <xhtml:link rel="alternate" hreflang="ro" href="https://brandalarm.ro/termeni/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://brandalarm.ro/en/terms/"/>
    <priority>0.3</priority>
  </url>
</urlset>`
};

const P = {
  bg: "#06070d", sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.07)",
  bdd: "rgba(239,68,68,.08)", ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  tx: "#e2e8f0", mu: "#94a3b8", dm: "#64748b", br: "#f1f5f9", dg: "#fca5a5", wh: "#fff"
};

const ff = "'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif";
const fm = "'Space Mono','Courier New',Courier,monospace";

const t = {
  ro: {
    nav: [{ h: "#why", l: "De ce monitorizare" }, { h: "#features", l: "Functionalitati" }, { h: "#pricing", l: "Preturi" }, { h: "#how", l: "Cum functioneaza" }],
    login: "Autentificare", reg: "Creaza cont",
    badge: "Platforma operationala — Monitorizare in timp real",
    h1: "Protejeaza-ti", h2: "Marca.", h3: "Non-stop.",
    sub: "Monitorizare inteligenta a marcilor, brandurilor si domeniilor la nivel national si european. Detectare conflicte, alerte automate si rapoarte AI — totul intr-o singura platforma.",
    trust: "Platforma realizata cu sprijinul unor echipe de avocati specializati in proprietate intelectuala si specialisti in securitate cibernetica.",
    cta: "Incepe acum", whyL: "De ce monitorizare →",
    stT: "Cifre care conteaza", stS: "Dimensiunea reala a pietei si riscurile fara monitorizare",
    st: [
      { v: "93.2M", l: "Marci active global", d: "Crestere 6.1% in 2024 (WIPO)" },
      { v: "180K+", l: "Cereri EUTM/an", d: "180.000+ cereri noi — EUIPO 2024" },
      { v: "€16B", l: "Pierderi anuale UE", d: "Contrafacere — vestimentatie, cosmetice" },
      { v: "18K+", l: "Opozitii/an EUIPO", d: "1 din 5 cereri sunt contestate" },
      { v: "112M", l: "Articole confiscate", d: "Valoare €3.8 mld — record 2024" },
      { v: "3 luni", l: "Termen opozitie", d: "Fix, neprelungibil — EUIPO" }
    ],
    wn: "⚠️ Conform legislatiei RO si UE, oficiile de marci (EUIPO, OSIM) NU verifica din oficiu conflictele cu marci anterioare. Daca nu monitorizezi si nu intervii la timp, pierzi dreptul de opozitie definitiv.",
    wyT: "De ce este esential sa-ti monitorizezi marca", wyS: "Riscurile sunt reale, costurile uriase, iar timpul joaca impotriva ta",
    wy: [
      { i: "⏳", t: "Termenul de opozitie este strict", d: "La EUIPO ai doar 3 luni de la publicare. La OSIM, 2 luni. Ratezi termenul — marca conflictuala se inregistreaza definitiv." },
      { i: "🚫", t: "Oficiile NU te protejeaza din oficiu", d: "Nici EUIPO, nici OSIM nu refuza automat o marca similara. Protectia depinde exclusiv de vigilenta ta." },
      { i: "💰", t: "€16 miliarde/an pierderi in UE", d: "Conform EUIPO 2024, doar 3 sectoare pierd €16 mld anual si 200.000 locuri de munca." },
      { i: "🌐", t: "Impersonarea domeniilor — in explozie", d: "Phishing pe domenii false +360% din 2020. 3.4 miliarde emailuri phishing zilnic." },
      { i: "🔓", t: "Domenii frauduloase — typosquatting", d: "Infractorii inregistreaza domenii aproape identice cu brandul tau pentru furt de date si frauda." },
      { i: "⚖️", t: "Fara actiune = Fara protectie", d: "Legislatia RO/UE: use it or lose it. Fara exercitarea drepturilor in termen, pierzi baza juridica." }
    ],
    wyB: "Platforma dezvoltata cu sprijinul echipelor de avocati in proprietate intelectuala.",
    fT: "Functionalitati", fS: "Tot ce ai nevoie pentru protectia completa a marcii tale",
    ft: [
      { i: "🔍", t: "Monitorizare Marci Noi", d: "Notificare automata din WIPO, EUIPO, TMView, OSIM." },
      { i: "⚡", t: "Cautari de Similitudini", d: "Detectare conflicte — cautari fonetice, fuzzy si regex." },
      { i: "🛡️", t: "Monitorizare Incalcari", d: "Detectare incalcari din surse juridice si comerciale." },
      { i: "📊", t: "Rapoarte AI Automate", d: "Rapoarte detaliate cu date juridice, export PDF." },
      { i: "📋", t: "Verificare OSIM & BOPI", d: "Monitorizare registru OSIM si buletine BOPI." },
      { i: "🏢", t: "Extragere Date Societati", d: "Identifica rapid cine iti copiaza brandul." },
      { i: "⏰", t: "Alerte Expirare Marca", d: "Notificari 3-6 luni inainte de expirare." },
      { i: "⚖️", t: "Avocat Partener", d: "Alege avocat partener pentru incalcari si opozitii." },
      { i: "📈", t: "Analiza Trendurilor", d: "AI pentru evolutia inregistrarilor internationale." },
      { i: "🌐", t: "Monitorizare Domenii", d: "Monitorizare domenii ce contin brandurile urmarite." }
    ],
    sT: "Cautare Avansata cu Regex", sS: "Functii de cautare sofisticate pentru EUIPO si WIPO",
    pT: "Preturi transparente", pS: "Alege planul potrivit pentru afacerea ta", pD: "10% discount la facturare anuala", pU: "/luna/marca",
    pl: [
      { n: "Free", p: "0", tg: "Utilizatori individuali", f: ["Cautare in WIPO, EUIPO, TMView, OSIM", "Rezultate de baza", "Fara alerte sau monitorizare", "Fara rapoarte automate"] },
      { n: "Basic", p: "15", tg: "Afaceri mici", f: ["3 interogari/luna", "Rapoarte AI standard", "1 an date istorice", "Export PDF", "Alerte — 1 teritoriu (RO sau EU)", "Alerte expirare (3-6 luni)"] },
      { n: "Pro", p: "25", tg: "Companii medii", pop: true, f: ["5 interogari/luna", "Rapoarte AI personalizate", "Benchmarking vs. concurenta", "Notificari real-time + BOPI/OSIM", "Raport lunar anti-copiere", "Fara limitare teritoriala"] },
      { n: "Enterprise", p: "45", tg: "Corporatii & avocatura", f: ["31 interogari (1/zi)", "Raport cercetare sanse", "Rapoarte juridice + AI consulting", "Integrare API", "5 ani date istorice", "Suport + training dedicat", "Regex avansat EUIPO & WIPO"] }
    ],
    hT: "Cum functioneaza",
    hw: [
      { n: "01", t: "Creeaza cont", d: "Inregistreaza-te gratuit si adauga marcile." },
      { n: "02", t: "Configureaza", d: "Selecteaza teritoriile si frecventa alertelor." },
      { n: "03", t: "Monitorizare AI", d: "Algoritmii scaneaza WIPO, EUIPO, OSIM, TMView." },
      { n: "04", t: "Primesti rapoarte", d: "Rapoarte AI, alerte instant si recomandari." }
    ],
    ctT: "Protejeaza-ti marca astazi", ctS: "Incepe cu un plan Free si extinde pe masura ce afacerea creste.", ctB: "Creeaza cont gratuit",
    fD: "Platforma inteligenta de monitorizare a marcilor, conform legislatiei romanesti si europene.",
    flT: "Linkuri utile", fgT: "Legal",
    fg: [{ h: "/confidentialitate", l: "Confidentialitate" }, { h: "/termeni-si-conditii", l: "Termeni si conditii" }, { h: "/politica-cookies", l: "Cookies" }],
    fC: "© 2025 BrandAlarm. Toate drepturile rezervate.", dev: "Panou Deploy"
  },
  en: {
    nav: [{ h: "#why", l: "Why monitor" }, { h: "#features", l: "Features" }, { h: "#pricing", l: "Pricing" }, { h: "#how", l: "How it works" }],
    login: "Login", reg: "Register",
    badge: "Platform live — Real-time monitoring",
    h1: "Protect your", h2: "Brand.", h3: "24/7.",
    sub: "Intelligent monitoring of trademarks, brands, and domains at national and European level. Conflict detection, automatic alerts, and AI reports — all in one platform.",
    trust: "Platform built with the support of intellectual property law experts and cybersecurity specialists.",
    cta: "Get started", whyL: "Why monitor →",
    stT: "Numbers that matter", stS: "The real scale of the market and the risks without monitoring",
    st: [
      { v: "93.2M", l: "Active trademarks worldwide", d: "6.1% growth in 2024 (WIPO)" },
      { v: "180K+", l: "EUTM applications/year", d: "180,000+ new apps — EUIPO 2024" },
      { v: "€16B", l: "Annual EU losses", d: "Counterfeiting — clothing, cosmetics" },
      { v: "18K+", l: "Oppositions/year", d: "1 in 5 EU apps are opposed" },
      { v: "112M", l: "Items seized (2024)", d: "Value €3.8B — historic record" },
      { v: "3 mo.", l: "Opposition deadline", d: "Fixed, no extensions — EUIPO" }
    ],
    wn: "⚠️ Under RO and EU law, trademark offices (EUIPO, OSIM) do NOT examine conflicts with earlier marks ex officio. If you don't monitor and act in time, you lose the right to oppose permanently.",
    wyT: "Why monitoring your brand is essential", wyS: "The risks are real, costs are massive, and time works against you",
    wy: [
      { i: "⏳", t: "Opposition deadlines are strict", d: "At EUIPO: only 3 months from publication. At OSIM: 2 months. Miss it — mark registered permanently." },
      { i: "🚫", t: "Offices do NOT protect you ex officio", d: "Neither EUIPO nor OSIM automatically refuse similar trademarks. Protection depends on your vigilance." },
      { i: "💰", t: "€16 billion/year lost in the EU", d: "Per EUIPO 2024: 3 sectors lose €16B annually and nearly 200,000 jobs." },
      { i: "🌐", t: "Domain impersonation is exploding", d: "Brand phishing attacks surged 360%+ since 2020. 3.4B phishing emails daily." },
      { i: "🔓", t: "Fraudulent domains — typosquatting", d: "Criminals register near-identical domains for data theft and counterfeit sales." },
      { i: "⚖️", t: "No action = No protection", d: "RO/EU law: use it or lose it. Without exercising rights in time, you lose legal basis." }
    ],
    wyB: "Platform built with the support of IP law teams and cybersecurity specialists.",
    fT: "Features", fS: "Everything you need for complete brand protection",
    ft: [
      { i: "🔍", t: "New Trademark Monitoring", d: "Auto notification from WIPO, EUIPO, TMView, OSIM." },
      { i: "⚡", t: "Similarity Searches", d: "Conflict detection — phonetic, fuzzy, regex searches." },
      { i: "🛡️", t: "Infringement Monitoring", d: "Detection from legal and commercial sources." },
      { i: "📊", t: "Automated AI Reports", d: "Detailed reports with legal data, PDF export." },
      { i: "📋", t: "OSIM Registry & BOPI", d: "Direct monitoring of OSIM registry and BOPI bulletins." },
      { i: "🏢", t: "Company Data Extraction", d: "Identify who copies your brand from new filings." },
      { i: "⏰", t: "Expiry Alerts", d: "Notifications 3-6 months before expiry." },
      { i: "⚖️", t: "Partner Lawyer", d: "Choose a partner lawyer for infringements and oppositions." },
      { i: "📈", t: "Trend Analysis", d: "AI analysis of registration trends and risks." },
      { i: "🌐", t: "Domain Monitoring", d: "Monitor domains containing your tracked brands." }
    ],
    sT: "Advanced Regex Search", sS: "Sophisticated search functions for EUIPO and WIPO",
    pT: "Transparent pricing", pS: "Choose the right plan for your business", pD: "10% discount on annual billing", pU: "/mo/trademark",
    pl: [
      { n: "Free", p: "0", tg: "Individual users", f: ["Search WIPO, EUIPO, TMView, OSIM", "Basic results", "No alerts or monitoring", "No automated reports"] },
      { n: "Basic", p: "15", tg: "Small businesses", f: ["3 queries/month", "AI standard reports", "1 year historical data", "PDF export", "Alerts — 1 territory (RO or EU)", "Expiry alerts (3-6 months)"] },
      { n: "Pro", p: "25", tg: "Mid-size companies", pop: true, f: ["5 queries/month", "Custom AI reports", "Benchmarking vs. competitors", "Real-time + BOPI/OSIM", "Monthly anti-copying report", "No territorial limits"] },
      { n: "Enterprise", p: "45", tg: "Corporations & law firms", f: ["31 queries (1/day)", "Research report", "Legal + AI consulting", "API integration", "5 years historical data", "Dedicated support + training", "Advanced regex EUIPO & WIPO"] }
    ],
    hT: "How it works",
    hw: [
      { n: "01", t: "Create account", d: "Register for free and add your trademarks." },
      { n: "02", t: "Configure", d: "Select territories and alert frequency." },
      { n: "03", t: "AI Monitoring", d: "Algorithms scan WIPO, EUIPO, OSIM, TMView." },
      { n: "04", t: "Get reports", d: "AI reports, instant alerts, and recommendations." }
    ],
    ctT: "Protect your brand today", ctS: "Start with a Free plan and scale as your business grows.", ctB: "Create free account",
    fD: "Intelligent trademark, brand, and domain monitoring platform, compliant with Romanian and European legislation.",
    flT: "Useful links", fgT: "Legal",
    fg: [{ h: "/confidentialitate", l: "Privacy policy" }, { h: "/termeni-si-conditii", l: "Terms & conditions" }, { h: "/politica-cookies", l: "Cookies" }],
    fC: "© 2025 BrandAlarm. All rights reserved.", dev: "Deploy Panel"
  }
};

const SR = {
  euipo: [
    { fn: "Contains", ro: "Termenul oriunde in denumire", en: "Term anywhere in name", ex: '"Mark", "Pulse"' },
    { fn: "Is", ro: "Denumirea exacta", en: "Exact name match", ex: '"MarkPulse"' },
    { fn: "Starts with", ro: "Incep cu un termen", en: "Names starting with term", ex: '"Mark"' },
    { fn: "Ends with", ro: "Se termina cu un termen", en: "Names ending with term", ex: '"Pulse"' }
  ],
  wipo: [
    { fn: "Normal (=:)", ro: "Termenul exact", en: "Exact term", ex: "MarkPulse" },
    { fn: "Fuzzy (=~:)", ro: "Termeni similar scrisi", en: "Similarly written", ex: '"ar?"' },
    { fn: "Phonetic (P=:)", ro: "Termeni ce suna la fel", en: "Sounds alike", ex: '"Puls"' },
    { fn: "Stemming (S=:)", ro: "Toate formele cuvantului", en: "All word forms", ex: "M→N" }
  ]
};

/* ── FIXED: bigger fonts, smooth transitions, no grid artifacts ── */

const TR = "all .3s ease"; // global transition for smooth lang switch
const btnP = { background: `linear-gradient(135deg,${P.ad},${P.ap})`, color: P.wh, fontWeight: 600, padding: "16px 38px", border: "none", borderRadius: 12, fontSize: 17, cursor: "pointer", display: "inline-block", fontFamily: ff, textDecoration: "none", transition: TR };
const btnO = { background: "transparent", color: P.ac, fontWeight: 500, padding: "14px 34px", border: "1.5px solid rgba(139,92,246,.4)", borderRadius: 12, fontSize: 17, cursor: "pointer", display: "inline-block", fontFamily: ff, textDecoration: "none", transition: TR };
const smB = { padding: "9px 22px", fontSize: 15 };
const card = { background: P.sf, border: `1px solid ${P.bd}`, borderRadius: 18, padding: 32, transition: TR };
const sTitle = { fontSize: "clamp(34px,5.5vw,52px)", fontWeight: 700, letterSpacing: -1.5, marginBottom: 18, background: `linear-gradient(135deg,#fff 30%,${P.ac})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };
const sSub = { fontSize: 18, color: P.dm, maxWidth: 620, lineHeight: 1.7 };
const sec = { padding: "100px 24px", maxWidth: 1200, margin: "0 auto" };

function DevPanel({ lang, onClose }) {
  const [tab, setTab] = useState("_headers");
  const files = Object.keys(DEPLOY_FILES);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: "#0d0b1a", border: "1px solid rgba(139,92,246,.15)", borderRadius: 16, maxWidth: 800, width: "100%", maxHeight: "80vh", display: "flex", flexDirection: "column", overflow: "hidden" }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(139,92,246,.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, color: P.br, fontFamily: ff, fontSize: 16 }}>Cloudflare Pages Deploy Files</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: P.dm, fontSize: 22, cursor: "pointer" }}>✕</button>
        </div>
        <div style={{ display: "flex", gap: 4, padding: "10px 20px", borderBottom: "1px solid rgba(139,92,246,.08)", flexWrap: "wrap" }}>
          {files.map(f => (
            <button key={f} onClick={() => setTab(f)} style={{ padding: "6px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none", fontFamily: fm, background: tab === f ? "rgba(139,92,246,.15)" : "transparent", color: tab === f ? P.ac : P.dm }}>{f}</button>
          ))}
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: 20 }}>
          <pre style={{ fontFamily: fm, fontSize: 12, color: P.mu, lineHeight: 1.7, whiteSpace: "pre-wrap", wordBreak: "break-all", margin: 0 }}>{DEPLOY_FILES[tab]}</pre>
        </div>
        <div style={{ padding: "10px 20px", borderTop: "1px solid rgba(139,92,246,.08)", textAlign: "right" }}>
          <span style={{ fontSize: 12, color: P.dm }}>{files.length} files ready for /dist/</span>
        </div>
      </div>
    </div>
  );
}

export default function BrandAlarmLanding() {
  const [lang, setLang] = useState("ro");
  const [scrolled, setScrolled] = useState(false);
  const [sTab, setSTab] = useState("euipo");
  const [devOpen, setDevOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const switchLang = (l) => {
    setLang(l);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const d = t[lang];
  const items = SR[sTab];

  return (
    <div style={{ fontFamily: ff, background: P.bg, color: P.tx, minHeight: "100vh", overflowX: "hidden" }}>
      {/* FIXED: soft gradient background instead of grid lines — no visual artifacts */}
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,.03) 0%, transparent 50%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 28px", background: scrolled ? "rgba(6,7,13,.96)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(139,92,246,.08)" : "none", transition: TR }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 20 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: P.wh }}>B</div>
            <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {d.nav.map(n => <a key={n.h} href={n.h} style={{ color: P.mu, fontSize: 15, fontWeight: 500, textDecoration: "none", transition: TR }}>{n.l}</a>)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {["ro", "en"].map(l => (
              <button key={l} onClick={() => switchLang(l)} style={{ background: lang === l ? "rgba(139,92,246,.15)" : "transparent", color: lang === l ? P.ac : P.dm, border: `1px solid ${lang === l ? P.ac : "rgba(100,116,139,.3)"}`, borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: fm, transition: TR }}>{l.toUpperCase()}</button>
            ))}
            <a href={APP} {...EXT} style={{ ...btnO, ...smB }}>{d.login}</a>
            <a href={REG} {...EXT} style={{ ...btnP, ...smB }}>{d.reg}</a>
          </div>
        </div>
      </nav>

      {/* HERO — FIXED: minHeight prevents layout jump on lang switch */}
      <section style={{ paddingTop: 140, paddingBottom: 40, position: "relative", minHeight: 620 }}>
        <div style={{ position: "absolute", top: "50%", right: "-5%", transform: "translateY(-50%)", width: "40%", maxWidth: 420, pointerEvents: "none", opacity: .1 }}>
          <svg viewBox="0 0 400 400" style={{ width: "100%" }}>
            {[80, 130, 180, 230].map((r, i) => <circle key={r} cx={200} cy={200} r={r} fill="none" stroke={P.ac} strokeWidth={1} opacity={0.5 - i * 0.1} />)}
            <circle cx={200} cy={200} r={6} fill={P.ac} />
          </svg>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.15)", borderRadius: 50, padding: "7px 18px", marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: P.ac, display: "inline-block" }} />
            <span style={{ fontSize: 15, color: P.ac, fontWeight: 500 }}>{d.badge}</span>
          </div>
          <h1 style={{ fontSize: "clamp(46px,7.5vw,78px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: -2.5, maxWidth: 720, marginBottom: 26 }}>
            {d.h1}<br />
            <span style={{ background: `linear-gradient(135deg,${P.ac},#c084fc 50%,#e879f9)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{d.h2}</span><br />{d.h3}
          </h1>
          <p style={{ fontSize: 20, color: P.mu, maxWidth: 580, lineHeight: 1.7, marginBottom: 20 }}>{d.sub}</p>
          <div style={{ fontSize: 15, color: P.dm, maxWidth: 520, lineHeight: 1.6, marginBottom: 36, display: "flex", gap: 10 }}>
            <span style={{ color: P.ac, flexShrink: 0 }}>⚖️</span><span>{d.trust}</span>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={REG} {...EXT} style={btnP}>{d.cta}</a>
            <a href="#why" style={btnO}>{d.whyL}</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 28px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={sTitle}>{d.stT}</h2>
            <p style={{ ...sSub, margin: "0 auto" }}>{d.stS}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14 }}>
            {d.st.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "26px 18px", background: P.sf, border: `1px solid ${P.bd}`, borderRadius: 16, transition: TR, minHeight: 130 }}>
                <div style={{ fontFamily: fm, fontSize: 34, fontWeight: 700, color: P.ac, marginBottom: 8 }}>{s.v}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: P.tx, marginBottom: 6 }}>{s.l}</div>
                <div style={{ fontSize: 13, color: P.dm, lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, background: "rgba(239,68,68,.04)", border: "1px solid rgba(239,68,68,.12)", borderRadius: 14, padding: "16px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 15, color: P.dg, lineHeight: 1.6, fontWeight: 500 }}>{d.wn}</p>
          </div>
        </div>
      </section>

      {/* WHY — FIXED: minHeight on cards prevents jumping */}
      <section id="why" style={sec}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={sTitle}>{d.wyT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.wyS}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 18 }}>
          {d.wy.map((w, i) => (
            <div key={i} style={{ ...card, borderColor: P.bdd, minHeight: 180 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{w.i}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: P.dg }}>{w.t}</h3>
              <p style={{ fontSize: 16, color: P.mu, lineHeight: 1.7 }}>{w.d}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(139,92,246,.04)", border: "1px solid rgba(139,92,246,.1)", borderRadius: 12, padding: "12px 24px" }}>
            <span style={{ fontSize: 18 }}>🏛️</span>
            <span style={{ fontSize: 14, color: P.mu, fontWeight: 500 }}>{d.wyB}</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={sec}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={sTitle}>{d.fT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.fS}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          {d.ft.map((f, i) => (
            <div key={i} style={{ ...card, minHeight: 140 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{f.i}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: P.br }}>{f.t}</h3>
              <p style={{ fontSize: 15, color: P.mu, lineHeight: 1.7 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH */}
      <section style={{ padding: "40px 28px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={sTitle}>{d.sT}</h2>
            <p style={{ ...sSub, margin: "0 auto" }}>{d.sS}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28 }}>
            {["euipo", "wipo"].map(tb => (
              <button key={tb} onClick={() => setSTab(tb)} style={{ padding: "10px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", border: "none", fontFamily: ff, background: sTab === tb ? "rgba(139,92,246,.15)" : "transparent", color: sTab === tb ? P.ac : P.dm, transition: TR }}>{tb.toUpperCase()}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14, maxWidth: 900, margin: "0 auto" }}>
            {items.map((it, i) => (
              <div key={`${sTab}-${i}`} style={{ ...card, padding: 24 }}>
                <div style={{ fontFamily: fm, fontSize: 14, fontWeight: 700, color: P.ac, marginBottom: 6 }}>{it.fn}</div>
                <div style={{ fontSize: 15, color: "#cbd5e1", marginBottom: 8, lineHeight: 1.6 }}>{it[lang]}</div>
                <div style={{ fontSize: 13, color: P.dm, fontFamily: fm, background: "rgba(0,0,0,.3)", padding: "5px 10px", borderRadius: 6 }}>{it.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — 4-column grid, equal height, CTA pinned to bottom */}
      <section id="pricing" style={sec}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={sTitle}>{d.pT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.pS}</p>
          <div style={{ display: "inline-block", marginTop: 16, background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.15)", borderRadius: 50, padding: "6px 18px", fontSize: 14, color: P.ac, fontWeight: 500 }}>{d.pD}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, maxWidth: 1100, margin: "0 auto" }}>
          {d.pl.map((p, i) => (
            <div key={i} style={{ background: p.pop ? "linear-gradient(180deg,rgba(139,92,246,.08),rgba(15,12,30,.9) 40%)" : P.sf, border: `1px solid ${p.pop ? "rgba(139,92,246,.4)" : P.bd}`, borderRadius: 20, padding: "32px 24px", position: "relative", transition: TR, display: "flex", flexDirection: "column", transform: p.pop ? "scale(1.03)" : "none" }}>
              {p.pop && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg,${P.ad},${P.ap})`, color: P.wh, padding: "4px 20px", borderRadius: 50, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>POPULAR</div>}
              <div style={{ fontSize: 13, color: P.dm, fontWeight: 500, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.tg}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: P.br, marginBottom: 16 }}>{p.n}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                <span style={{ fontFamily: fm, fontSize: 42, fontWeight: 700, color: P.ac }}>€{p.p}</span>
                {p.p !== "0" && <span style={{ fontSize: 14, color: P.dm }}>{d.pU}</span>}
              </div>
              <div style={{ borderTop: `1px solid ${P.bd}`, paddingTop: 20, flex: 1 }}>
                {p.f.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 10 }}>
                    <span style={{ color: P.ac, flexShrink: 0, marginTop: 2 }}>✓</span><span>{f}</span>
                  </div>
                ))}
              </div>
              <a href={REG} {...EXT} style={{ ...(p.pop ? btnP : btnO), width: "100%", textAlign: "center", display: "block", padding: "13px 20px", fontSize: 15, marginTop: 20, boxSizing: "border-box" }}>{d.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" style={sec}>
        <div style={{ marginBottom: 56 }}><h2 style={sTitle}>{d.hT}</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {d.hw.map((s, i) => (
            <div key={i} style={{ padding: 28, borderLeft: "2px solid rgba(139,92,246,.15)", transition: TR, minHeight: 160 }}>
              <div style={{ fontFamily: fm, fontSize: 48, fontWeight: 700, color: "rgba(139,92,246,.1)", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <h3 style={{ fontSize: 19, fontWeight: 600, color: P.br, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 16, color: P.mu, lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "70px 28px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg,rgba(139,92,246,.06),rgba(168,85,247,.04))", border: "1px solid rgba(139,92,246,.12)", borderRadius: 24, padding: "60px 40px" }}>
          <h2 style={{ fontSize: "clamp(28px,4.5vw,42px)", fontWeight: 700, letterSpacing: -1, marginBottom: 16, color: P.br }}>{d.ctT}</h2>
          <p style={{ fontSize: 17, color: P.mu, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>{d.ctS}</p>
          <a href={REG} {...EXT} style={{ ...btnP, fontSize: 18, padding: "16px 42px" }}>{d.ctB}</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(139,92,246,.06)", padding: "50px 28px 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 48, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 18, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: P.wh }}>B</div>
              <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
            </div>
            <p style={{ fontSize: 14, color: P.dm, lineHeight: 1.7 }}>{d.fD}</p>
          </div>
          <div style={{ minWidth: 150 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, marginBottom: 14 }}>{d.flT}</h4>
            {d.nav.map(n => <a key={n.h} href={n.h} style={{ display: "block", color: P.mu, fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{n.l}</a>)}
          </div>
          <div style={{ minWidth: 150 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, marginBottom: 14 }}>{d.fgT}</h4>
            {d.fg.map((l, i) => <a key={i} href={l.h} style={{ display: "block", color: P.mu, fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{l.l}</a>)}
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "36px auto 0", paddingTop: 18, borderTop: "1px solid rgba(139,92,246,.06)", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#475569" }}>{d.fC}</p>
          <button onClick={() => setDevOpen(true)} style={{ background: "rgba(139,92,246,.08)", border: "1px solid rgba(139,92,246,.2)", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: P.ac, cursor: "pointer", fontFamily: fm }}>{d.dev}</button>
        </div>
      </footer>

      {devOpen && <DevPanel lang={lang} onClose={() => setDevOpen(false)} />}
    </div>
  );
}
