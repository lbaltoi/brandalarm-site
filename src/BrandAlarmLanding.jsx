import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const APP = "https://app.brandalarm.ro/dashboard";
const REG = "https://app.brandalarm.ro/register";
const EXT = { rel: "noopener noreferrer", target: "_blank" };

const P = {
  bg: "#06070d", sf: "rgba(15,12,30,.65)", bd: "rgba(139,92,246,.07)",
  bdd: "rgba(239,68,68,.08)", ac: "#a78bfa", ad: "#8b5cf6", ap: "#7c3aed",
  tx: "#e2e8f0", mu: "#b0bfcc", dm: "#8896a8", br: "#f1f5f9", dg: "#fca5a5", wh: "#fff"
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
    wn: "\u26A0\uFE0F Conflictele cu marci anterioare se invoca prin opozitie, in termene scurte: 2 luni la OSIM si 3 luni la EUIPO. Daca nu monitorizezi si nu reactionezi la timp, poti rata fereastra de opozitie (iar opozitia tardiva este inadmisibila) si ramai cu demersuri ulterioare mai greoaie.",
    wyT: "De ce este esential sa-ti monitorizezi marca", wyS: "Riscurile sunt reale, costurile uriase, iar timpul joaca impotriva ta",
    wy: [
      { i: "\u23F3", t: "Termenul de opozitie este strict", d: "La EUIPO ai doar 3 luni de la publicare. La OSIM, 2 luni. Ratezi termenul — marca conflictuala se inregistreaza definitiv." },
      { i: "\u{1F6AB}", t: "Oficiile NU te protejeaza din oficiu", d: "Nici EUIPO, nici OSIM nu refuza automat o marca similara. Protectia depinde exclusiv de vigilenta ta." },
      { i: "\u{1F4B0}", t: "€16 miliarde/an pierderi in UE", d: "Conform EUIPO 2024, doar 3 sectoare pierd €16 mld anual si 200.000 locuri de munca." },
      { i: "\u{1F310}", t: "Impersonarea domeniilor — in explozie", d: "Phishing pe domenii false +360% din 2020. 3.4 miliarde emailuri phishing zilnic." },
      { i: "\u{1F513}", t: "Domenii frauduloase — typosquatting", d: "Infractorii inregistreaza domenii aproape identice cu brandul tau pentru furt de date si frauda." },
      { i: "\u2696\uFE0F", t: "Fara actiune = Fara protectie", d: "Legislatia RO/UE: use it or lose it. Fara exercitarea drepturilor in termen, pierzi baza juridica." }
    ],
    wyB: "Platforma dezvoltata cu sprijinul echipelor de avocati in proprietate intelectuala.",
    fT: "Functionalitati", fS: "Tot ce ai nevoie pentru protectia completa a marcii tale",
    ft: [
      { i: "\u{1F50D}", t: "Monitorizare Marci Noi", d: "Notificare automata din WIPO, EUIPO, TMView, OSIM." },
      { i: "\u26A1", t: "Cautari de Similitudini", d: "Detectare conflicte — cautari fonetice, fuzzy si regex." },
      { i: "\u{1F6E1}\uFE0F", t: "Monitorizare Incalcari", d: "Detectare incalcari din surse juridice si comerciale." },
      { i: "\u{1F4CA}", t: "Rapoarte AI Automate", d: "Rapoarte detaliate cu date juridice, export PDF." },
      { i: "\u{1F4CB}", t: "Verificare OSIM & BOPI", d: "Monitorizare registru OSIM si buletine BOPI." },
      { i: "\u{1F3E2}", t: "Extragere Date Societati", d: "Identifica rapid cine iti copiaza brandul." },
      { i: "\u23F0", t: "Alerte Expirare Marca", d: "Notificari 3-6 luni inainte de expirare." },
      { i: "\u2696\uFE0F", t: "Avocat Partener", d: "Alege avocat partener pentru incalcari si opozitii." },
      { i: "\u{1F4C8}", t: "Analiza Trendurilor", d: "AI pentru evolutia inregistrarilor internationale." },
      { i: "\u{1F310}", t: "Monitorizare Domenii", d: "Typosquatting, expirare, disponibilitate." }
    ],
    sT: "Cautare Avansata cu Regex", sS: "Functii de cautare sofisticate pentru EUIPO si WIPO",
    pT: "Preturi transparente", pS: "Alege planul potrivit pentru afacerea ta", pD: "10% discount la facturare anuala", pU: "/luna/marca",
    pl: [
      { n: "Free", p: "0", tg: "Utilizatori individuali", f: ["Cautare in WIPO, EUIPO, TMView, OSIM", "Rezultate de baza", "Fara alerte sau monitorizare", "Fara rapoarte automate"] },
      { n: "Basic", p: "15", tg: "Afaceri mici", f: ["3 interogari/luna", "Rapoarte AI standard", "1 an date istorice", "Export PDF", "Alerte — 1 teritoriu (RO sau EU)", "Alerte expirare (3-6 luni)"] },
      { n: "Pro", p: "30", tg: "Companii medii", pop: true, f: ["5 interogari/luna", "Rapoarte AI personalizate", "Benchmarking vs. concurenta", "Notificari real-time + BOPI/OSIM", "Raport lunar anti-copiere", "Fara limitare teritoriala"] },
      { n: "Enterprise", p: "TBA", tg: "Corporatii & avocatura", f: ["31 interogari (1/zi)", "Raport cercetare sanse", "Rapoarte juridice + AI consulting", "Integrare API", "5 ani date istorice", "Suport + training dedicat", "Regex avansat EUIPO & WIPO"] }
    ],
    hT: "Cum functioneaza",
    hw: [
      { n: "01", t: "Creeaza cont", d: "Inregistreaza-te gratuit si adauga marcile." },
      { n: "02", t: "Configureaza", d: "Selecteaza teritoriile si frecventa alertelor." },
      { n: "03", t: "Monitorizare AI", d: "Algoritmii scaneaza WIPO, EUIPO, OSIM, TMView." },
      { n: "04", t: "Primesti rapoarte", d: "Rapoarte AI, alerte instant si recomandari." }
    ],
    ctT: "Protejeaza-ti marca astazi", ctS: "Incepe cu un plan Free si extinde pe masura ce afacerea creste.", ctB: "Creeaza cont gratuit", ctcB: "Contacteaza-ne",
    fD: "Platforma inteligenta de monitorizare a marcilor, conform legislatiei romanesti si europene.",
    flT: "Linkuri utile", fgT: "Resurse",
    fg: [{ h: "/intrebari-frecvente", l: "Intrebari frecvente" }, { h: "/confidentialitate", l: "Confidentialitate" }, { h: "/termeni-si-conditii", l: "Termeni si conditii" }, { h: "/politica-cookies", l: "Cookies" }],
    fC: "© 2025 Trademark Alliance SRL. Toate drepturile rezervate.",
    diffT: "De ce BrandAlarm. De ce acum.",
    diffS: "Momentul potrivit. Solutia potrivita pentru piata europeana.",
    diff: [
      { i: "\u{1F30D}", t: "SMB & CEE first", d: "Singura platforma serioasa de monitorizare IP construita pentru Europa Centrala si de Est. Nimeni altcineva nu deserveste CEE sub \u20AC100/luna." },
      { i: "\u{1F517}", t: "Multi-asset intr-un singur loc", d: "Marci, domenii, societati comerciale si incalcari online \u2014 toate monitorizate dintr-o singura platforma. Competitorii au asta separat sau deloc." },
      { i: "\u{1F916}", t: "AI-native, nu doar liste", d: "Rapoarte cu reasoning LLM, scoring inteligent de similitudine, analize juridice automate. Nu primesti doar date \u2014 primesti context si recomandari." },
      { i: "\u2696\uFE0F", t: "Marketplace de avocati IP integrat", d: "Conectare directa la o retea de avocati specializati in proprietate intelectuala. De la detectarea conflictului pana la actiune legala \u2014 fara sa cauti pe Google." },
      { i: "\u{1F48E}", t: "Pret accesibil, real", d: "Plan Pro la \u20AC30/luna. Printre cele mai mici preturi din piata europeana, cu functionalitati comparabile cu solutiile enterprise de \u20AC500-2000/luna." }
    ],
    forceT: "Forte care impulsioneaza piata IP acum",
    forceS: "Schimbari legislative si tehnologice care fac monitorizarea proactiva esentiala in 2026",
    force: [
      { i: "\u{1F6E1}\uFE0F", t: "EU Digital Services Act (DSA)", d: "Operational complet din 2024. Brand owners au noi drepturi de takedown pe platformele online \u2014 dar trebuie sa stie cand si unde sa actioneze." },
      { i: "\u2699\uFE0F", t: "EU AI Act", d: "Se aplica 2025-2027. Genereaza disputa noua: marci AI-generated, copyright AI, marci pentru produse AI. Putini sunt pregatiti." },
      { i: "\u{1F310}", t: "NFT & Web3 trademarks", d: "EUIPO accepta din 2023 marci pentru virtual goods. Piata noua, nereglementata, vulnerabila la abuz." },
      { i: "\u{1F377}", t: "Geographic Indications extinse", d: "Regulamentul UE 2024 extinde protectia GI la mestesuguri si produse industriale. Oportunitate uriasa pentru produsele traditionale RO." },
      { i: "\u{1F30E}", t: "Madrid Protocol pentru SMB", d: "Tot mai multe SMB-uri vor protectie internationala. Madrid Protocol o face accesibila \u2014 dar trebuie monitorizat in 130+ tari." },
      { i: "\u{1F50C}", t: "Digitalizarea oficiilor IP", d: "EUIPO, WIPO, OSIM expun acum API-uri publice. Datele exista \u2014 dar e nevoie de o platforma care le agreghaza si interpreteaza." }
    ],
    fpT: "Protectia consumatorului",
    pageTitle: "BrandAlarm — Monitorizare Marci, Branduri si Domenii | Protectie 24/7",
    pageDesc: "Monitorizeaza-ti marca non-stop in WIPO, EUIPO, OSIM si TMView. Alerte automate pentru conflicte, rapoarte AI si protectie impotriva typosquatting-ului. De la €15/luna."
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
    wn: "\u26A0\uFE0F Conflicts with earlier trademarks are raised through opposition, within short deadlines: 2 months at OSIM and 3 months at EUIPO. If you don't monitor and react in time, you may miss the opposition window (late opposition is inadmissible) and be left with more difficult subsequent proceedings.",
    wyT: "Why monitoring your brand is essential", wyS: "The risks are real, costs are massive, and time works against you",
    wy: [
      { i: "\u23F3", t: "Opposition deadlines are strict", d: "At EUIPO: only 3 months from publication. At OSIM: 2 months. Miss it — mark registered permanently." },
      { i: "\u{1F6AB}", t: "Offices do NOT protect you ex officio", d: "Neither EUIPO nor OSIM automatically refuse similar trademarks. Protection depends on your vigilance." },
      { i: "\u{1F4B0}", t: "€16 billion/year lost in the EU", d: "Per EUIPO 2024: 3 sectors lose €16B annually and nearly 200,000 jobs." },
      { i: "\u{1F310}", t: "Domain impersonation is exploding", d: "Brand phishing attacks surged 360%+ since 2020. 3.4B phishing emails daily." },
      { i: "\u{1F513}", t: "Fraudulent domains — typosquatting", d: "Criminals register near-identical domains for data theft and counterfeit sales." },
      { i: "\u2696\uFE0F", t: "No action = No protection", d: "RO/EU law: use it or lose it. Without exercising rights in time, you lose legal basis." }
    ],
    wyB: "Platform built with the support of IP law teams and cybersecurity specialists.",
    fT: "Features", fS: "Everything you need for complete brand protection",
    ft: [
      { i: "\u{1F50D}", t: "New Trademark Monitoring", d: "Auto notification from WIPO, EUIPO, TMView, OSIM." },
      { i: "\u26A1", t: "Similarity Searches", d: "Conflict detection — phonetic, fuzzy, regex searches." },
      { i: "\u{1F6E1}\uFE0F", t: "Infringement Monitoring", d: "Detection from legal and commercial sources." },
      { i: "\u{1F4CA}", t: "Automated AI Reports", d: "Detailed reports with legal data, PDF export." },
      { i: "\u{1F4CB}", t: "OSIM Registry & BOPI", d: "Direct monitoring of OSIM registry and BOPI bulletins." },
      { i: "\u{1F3E2}", t: "Company Data Extraction", d: "Identify who copies your brand from new filings." },
      { i: "\u23F0", t: "Expiry Alerts", d: "Notifications 3-6 months before expiry." },
      { i: "\u2696\uFE0F", t: "Partner Lawyer", d: "Choose a partner lawyer for infringements and oppositions." },
      { i: "\u{1F4C8}", t: "Trend Analysis", d: "AI analysis of registration trends and risks." },
      { i: "\u{1F310}", t: "Domain Monitoring", d: "Typosquatting, expiry, availability." }
    ],
    sT: "Advanced Regex Search", sS: "Sophisticated search functions for EUIPO and WIPO",
    pT: "Transparent pricing", pS: "Choose the right plan for your business", pD: "10% discount on annual billing", pU: "/mo/trademark",
    pl: [
      { n: "Free", p: "0", tg: "Individual users", f: ["Search WIPO, EUIPO, TMView, OSIM", "Basic results", "No alerts or monitoring", "No automated reports"] },
      { n: "Basic", p: "15", tg: "Small businesses", f: ["3 queries/month", "AI standard reports", "1 year historical data", "PDF export", "Alerts — 1 territory (RO or EU)", "Expiry alerts (3-6 months)"] },
      { n: "Pro", p: "30", tg: "Mid-size companies", pop: true, f: ["5 queries/month", "Custom AI reports", "Benchmarking vs. competitors", "Real-time + BOPI/OSIM", "Monthly anti-copying report", "No territorial limits"] },
      { n: "Enterprise", p: "TBA", tg: "Corporations & law firms", f: ["31 queries (1/day)", "Research report", "Legal + AI consulting", "API integration", "5 years historical data", "Dedicated support + training", "Advanced regex EUIPO & WIPO"] }
    ],
    hT: "How it works",
    hw: [
      { n: "01", t: "Create account", d: "Register for free and add your trademarks." },
      { n: "02", t: "Configure", d: "Select territories and alert frequency." },
      { n: "03", t: "AI Monitoring", d: "Algorithms scan WIPO, EUIPO, OSIM, TMView." },
      { n: "04", t: "Get reports", d: "AI reports, instant alerts, and recommendations." }
    ],
    ctT: "Protect your brand today", ctS: "Start with a Free plan and scale as your business grows.", ctB: "Create free account", ctcB: "Contact us",
    fD: "Intelligent trademark, brand, and domain monitoring platform, compliant with Romanian and European legislation.",
    flT: "Useful links", fgT: "Resources",
    fg: [{ h: "/en/faq", l: "FAQ" }, { h: "/en/privacy", l: "Privacy policy" }, { h: "/en/terms", l: "Terms & conditions" }, { h: "/en/cookie-policy", l: "Cookies" }],
    fC: "© 2025 Trademark Alliance SRL. All rights reserved.",
    diffT: "Why BrandAlarm. Why now.",
    diffS: "Right timing. Right solution for the European market.",
    diff: [
      { i: "\u{1F30D}", t: "SMB & CEE first", d: "The only serious IP monitoring platform built for Central & Eastern Europe. Nobody else serves CEE under \u20AC100/month." },
      { i: "\u{1F517}", t: "Multi-asset in one place", d: "Trademarks, domains, companies, and online infringements \u2014 all monitored from a single platform. Competitors offer this separately or not at all." },
      { i: "\u{1F916}", t: "AI-native, not just lists", d: "Reports with LLM reasoning, intelligent similarity scoring, automated legal analysis. You don't get raw data \u2014 you get context and recommendations." },
      { i: "\u2696\uFE0F", t: "Integrated IP lawyer marketplace", d: "Direct access to a network of IP-specialized attorneys. From conflict detection to legal action \u2014 no need to Google." },
      { i: "\u{1F48E}", t: "Genuinely affordable pricing", d: "Pro plan at \u20AC30/month. Among the lowest prices in the European market, with features comparable to enterprise solutions costing \u20AC500-2000/month." }
    ],
    forceT: "Forces driving the IP market now",
    forceS: "Legislative and technological shifts that make proactive monitoring essential in 2026",
    force: [
      { i: "\u{1F6E1}\uFE0F", t: "EU Digital Services Act (DSA)", d: "Fully operational since 2024. Brand owners have new takedown rights on online platforms \u2014 but must know when and where to act." },
      { i: "\u2699\uFE0F", t: "EU AI Act", d: "Applied 2025-2027. Generates new disputes: AI-generated brands, AI copyright, trademarks for AI products. Few are prepared." },
      { i: "\u{1F310}", t: "NFT & Web3 trademarks", d: "EUIPO accepts trademarks for virtual goods since 2023. New, unregulated market, vulnerable to abuse." },
      { i: "\u{1F377}", t: "Extended Geographic Indications", d: "EU Regulation 2024 extends GI protection to crafts and industrial products. Huge opportunity for traditional EU products." },
      { i: "\u{1F30E}", t: "Madrid Protocol for SMBs", d: "More SMBs want international protection. Madrid Protocol makes it accessible \u2014 but it must be monitored across 130+ countries." },
      { i: "\u{1F50C}", t: "IP offices going digital", d: "EUIPO, WIPO, OSIM now expose public APIs. The data exists \u2014 but you need a platform that aggregates and interprets it." }
    ],
    fpT: "Consumer protection",
    pageTitle: "BrandAlarm — Trademark, Brand & Domain Monitoring | 24/7 Protection",
    pageDesc: "Monitor your brand 24/7 across WIPO, EUIPO, OSIM and TMView. Automatic conflict alerts, AI-powered reports and typosquatting protection. From €15/month."
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

const TR = "all .3s ease";
const btnP = { background: `linear-gradient(135deg,${P.ad},${P.ap})`, color: P.wh, fontWeight: 600, padding: "16px 38px", border: "none", borderRadius: 12, fontSize: 17, cursor: "pointer", display: "inline-block", fontFamily: ff, textDecoration: "none", transition: TR };
const btnO = { background: "transparent", color: P.ac, fontWeight: 500, padding: "14px 34px", border: "1.5px solid rgba(139,92,246,.4)", borderRadius: 12, fontSize: 17, cursor: "pointer", display: "inline-block", fontFamily: ff, textDecoration: "none", transition: TR };
const smB = { padding: "9px 22px", fontSize: 15 };
const card = { background: P.sf, border: `1px solid ${P.bd}`, borderRadius: 18, padding: 32, transition: TR };
const sTitle = { fontSize: "clamp(28px,5.5vw,52px)", fontWeight: 700, letterSpacing: -1.5, marginBottom: 18, background: `linear-gradient(135deg,#fff 30%,${P.ac})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.15 };
const sSub = { fontSize: 17, color: P.mu, maxWidth: 620, lineHeight: 1.7 };

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

export default function BrandAlarmLanding() {
  const [lang, setLang] = useState("ro");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sTab, setSTab] = useState("euipo");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const d = t[lang];
    document.title = d.pageTitle;
    document.documentElement.lang = lang;
    updateMeta("description", d.pageDesc);
    updateMeta("og:title", d.pageTitle, true);
    updateMeta("og:description", d.pageDesc, true);
    updateMeta("og:url", "https://brandalarm.ro/", true);
    updateMeta("og:type", "website", true);
    updateMeta("og:locale", lang === "ro" ? "ro_RO" : "en_US", true);
    updateMeta("og:image", lang === "ro" ? "https://brandalarm.ro/og-image.png" : "https://brandalarm.ro/og-image-en.png", true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:image:alt", lang === "ro" ? "BrandAlarm — Protejeaza-ti marca non-stop" : "BrandAlarm — Protect your brand 24/7", true);
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", d.pageTitle);
    updateMeta("twitter:description", d.pageDesc);
    updateMeta("twitter:image", lang === "ro" ? "https://brandalarm.ro/og-image.png" : "https://brandalarm.ro/og-image-en.png");
    updateLink("canonical", "https://brandalarm.ro/");
    updateLink("alternate", "https://brandalarm.ro/", "ro");
    updateLink("alternate", "https://brandalarm.ro/en/", "en");
    updateLink("alternate", "https://brandalarm.ro/", "x-default");
  }, [lang]);

  const switchLang = (l) => {
    setLang(l);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const d = t[lang];
  const items = SR[sTab];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BrandAlarm",
    url: "https://brandalarm.ro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: d.pageDesc,
    inLanguage: lang === "ro" ? "ro-RO" : "en-US",
    author: {
      "@type": "Organization",
      name: "Trademark Alliance SRL",
      url: "https://brandalarm.ro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Str. Aviator Mircea Zorileanu 43",
        addressLocality: "Bucuresti",
        addressRegion: "Sector 1",
        addressCountry: "RO"
      },
      vatID: "RO50768537"
    },
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Basic", price: "15", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Pro", price: "30", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Enterprise", priceCurrency: "EUR", availability: "https://schema.org/PreOrder" }
    ]
  };

  return (
    <div style={{ fontFamily: ff, background: P.bg, color: P.tx, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @keyframes radarPulse { 0% { opacity: .5; transform: scale(1); } 100% { opacity: 0; transform: scale(1.5); } }
        @keyframes radarSweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .ba-nav-links, .ba-nav-actions { display: flex; }
        .ba-nav-burger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .ba-mobile-menu { display: none; }
        .ba-sec { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
        .ba-hero { padding: 140px 24px 40px; position: relative; min-height: 620px; }
        .ba-hero-content { max-width: 1200px; margin: 0 auto; padding: 0; position: relative; z-index: 2; }
        .ba-h1 { font-size: clamp(42px, 7.5vw, 78px); font-weight: 700; line-height: 1.05; letter-spacing: -2.5px; max-width: 720px; margin-bottom: 26px; }
        .ba-footer-grid { display: flex; flex-wrap: wrap; gap: 48px; justify-content: space-between; }
        @media (max-width: 900px) {
          .ba-nav-links, .ba-nav-actions { display: none !important; }
          .ba-nav-burger { display: flex !important; align-items: center; justify-content: center; }
          .ba-mobile-menu.open { display: flex !important; }
        }
        @media (max-width: 640px) {
          .ba-sec { padding: 60px 18px !important; }
          .ba-hero { padding: 110px 18px 30px !important; min-height: auto !important; }
          .ba-h1 { font-size: 42px !important; letter-spacing: -1.5px !important; }
          .ba-hero-sub { font-size: 16px !important; }
          .ba-hero-trust { font-size: 13px !important; }
          .ba-stat-value { font-size: 28px !important; }
          .ba-card { padding: 22px !important; }
          .ba-footer { padding: 40px 18px 30px !important; }
          .ba-footer-grid { gap: 28px !important; }
          .ba-cta-box { padding: 40px 24px !important; }
          .ba-pricing-card { padding: 28px 22px !important; }
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* soft gradient background */}
      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(139,92,246,.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,.03) 0%, transparent 50%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 20px", background: scrolled || menuOpen ? "rgba(6,7,13,.96)" : "transparent", backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none", borderBottom: scrolled ? "1px solid rgba(139,92,246,.08)" : "none", transition: TR }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 20, textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: P.wh }}>B</div>
            <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
          </a>
          <div className="ba-nav-links" style={{ alignItems: "center", gap: 28 }}>
            {d.nav.map(n => <a key={n.h} href={n.h} style={{ color: P.mu, fontSize: 15, fontWeight: 500, textDecoration: "none", transition: TR }}>{n.l}</a>)}
          </div>
          <div className="ba-nav-actions" style={{ alignItems: "center", gap: 10 }}>
            {["ro", "en"].map(l => (
              <button key={l} onClick={() => switchLang(l)} style={{ background: lang === l ? "rgba(139,92,246,.15)" : "transparent", color: lang === l ? P.ac : P.dm, border: `1px solid ${lang === l ? P.ac : "rgba(100,116,139,.3)"}`, borderRadius: 6, padding: "5px 12px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: fm, transition: TR }}>{l.toUpperCase()}</button>
            ))}
            <a href={APP} {...EXT} style={{ ...btnO, ...smB }}>{d.login}</a>
            <a href={REG} {...EXT} style={{ ...btnP, ...smB }}>{d.reg}</a>
          </div>
          <button className="ba-nav-burger" onClick={() => setMenuOpen(!menuOpen)} style={{ color: P.br, fontSize: 28, lineHeight: 1 }} aria-label="Menu">
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
        {/* MOBILE MENU */}
        <div className={`ba-mobile-menu${menuOpen ? " open" : ""}`} style={{ flexDirection: "column", padding: "12px 0 20px", borderTop: "1px solid rgba(139,92,246,.08)" }}>
          {d.nav.map(n => <a key={n.h} href={n.h} onClick={() => setMenuOpen(false)} style={{ display: "block", color: P.mu, fontSize: 17, fontWeight: 500, textDecoration: "none", padding: "12px 8px", borderBottom: "1px solid rgba(139,92,246,.05)" }}>{n.l}</a>)}
          <div style={{ display: "flex", gap: 8, marginTop: 16, alignItems: "center" }}>
            {["ro", "en"].map(l => (
              <button key={l} onClick={() => switchLang(l)} style={{ background: lang === l ? "rgba(139,92,246,.15)" : "transparent", color: lang === l ? P.ac : P.dm, border: `1px solid ${lang === l ? P.ac : "rgba(100,116,139,.3)"}`, borderRadius: 6, padding: "6px 14px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: fm }}>{l.toUpperCase()}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <a href={APP} {...EXT} style={{ ...btnO, padding: "12px 24px", fontSize: 15, flex: 1, textAlign: "center" }}>{d.login}</a>
            <a href={REG} {...EXT} style={{ ...btnP, padding: "12px 24px", fontSize: 15, flex: 1, textAlign: "center" }}>{d.reg}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="ba-hero">
        <div style={{ position: "absolute", top: "50%", left: "55%", transform: "translate(-50%,-50%)", width: "110%", maxWidth: 900, pointerEvents: "none", opacity: .12 }}>
          <svg viewBox="0 0 400 400" style={{ width: "100%" }} aria-hidden="true">
            {[60, 100, 140, 180, 220, 260, 300].map((r, i) => <circle key={r} cx={200} cy={200} r={r} fill="none" stroke={P.ac} strokeWidth={0.8} style={{ animation: `radarPulse 4s ease-out ${i * 0.4}s infinite` }} />)}
            <circle cx={200} cy={200} r={4} fill={P.ac} />
            <line x1={200} y1={200} x2={380} y2={100} stroke={P.ac} strokeWidth={1.5} style={{ animation: "radarSweep 5s linear infinite", transformOrigin: "200px 200px" }} />
          </svg>
        </div>
        <div className="ba-hero-content">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.15)", borderRadius: 50, padding: "7px 18px", marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: P.ac, display: "inline-block", animation: "float 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 14, color: P.ac, fontWeight: 500 }}>{d.badge}</span>
          </div>
          <h1 className="ba-h1">
            {d.h1}<br />
            <span style={{ background: `linear-gradient(135deg,${P.ac},#c084fc 50%,#e879f9)`, backgroundSize: "200% auto", animation: "shimmer 4s linear infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{d.h2}</span><br />{d.h3}
          </h1>
          <p className="ba-hero-sub" style={{ fontSize: 20, color: P.mu, maxWidth: 580, lineHeight: 1.7, marginBottom: 20 }}>{d.sub}</p>
          <div className="ba-hero-trust" style={{ fontSize: 15, color: P.dm, maxWidth: 520, lineHeight: 1.6, marginBottom: 36, display: "flex", gap: 10 }}>
            <span style={{ color: P.ac, flexShrink: 0 }}>⚖️</span><span>{d.trust}</span>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={REG} {...EXT} style={btnP}>{d.cta}</a>
            <a href="#why" style={btnO}>{d.whyL}</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={sTitle}>{d.stT}</h2>
            <p style={{ ...sSub, margin: "0 auto" }}>{d.stS}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 14 }}>
            {d.st.map((s, i) => (
              <div key={i} className="ba-card" style={{ textAlign: "center", padding: "26px 18px", background: P.sf, border: `1px solid ${P.bd}`, borderRadius: 16, transition: TR, minHeight: 130 }}>
                <div className="ba-stat-value" style={{ fontFamily: fm, fontSize: 34, fontWeight: 700, color: P.ac, marginBottom: 8 }}>{s.v}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: P.tx, marginBottom: 6 }}>{s.l}</div>
                <div style={{ fontSize: 13, color: P.dm, lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, background: "rgba(239,68,68,.04)", border: "1px solid rgba(239,68,68,.12)", borderRadius: 14, padding: "16px 24px", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: P.dg, lineHeight: 1.6, fontWeight: 500 }}>{d.wn}</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="ba-sec">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={sTitle}>{d.wyT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.wyS}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          {d.wy.map((w, i) => (
            <div key={i} className="ba-card" style={{ ...card, borderColor: P.bdd, minHeight: 180 }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{w.i}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: P.dg }}>{w.t}</h3>
              <p style={{ fontSize: 15, color: P.mu, lineHeight: 1.7 }}>{w.d}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(139,92,246,.04)", border: "1px solid rgba(139,92,246,.1)", borderRadius: 12, padding: "12px 24px" }}>
            <span style={{ fontSize: 18 }}>🏛️</span>
            <span style={{ fontSize: 13, color: P.mu, fontWeight: 500 }}>{d.wyB}</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="ba-sec">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={sTitle}>{d.fT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.fS}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 18 }}>
          {d.ft.map((f, i) => (
            <div key={i} className="ba-card" style={{ ...card, minHeight: 140 }}>
              <div style={{ fontSize: 30, marginBottom: 14 }}>{f.i}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: P.br }}>{f.t}</h3>
              <p style={{ fontSize: 15, color: P.mu, lineHeight: 1.7 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS + MARKET FORCES */}
      <section id="why-us" className="ba-sec">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={sTitle}>{d.diffT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.diffS}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 18, marginBottom: 64 }}>
          {d.diff.map((item, i) => (
            <div key={i} className="ba-card" style={{ ...card, minHeight: 200, position: "relative" }}>
              <div style={{ position: "absolute", top: 18, right: 22, fontFamily: fm, fontSize: 13, fontWeight: 700, color: P.ac, opacity: 0.45 }}>{`0${i+1}`}</div>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{item.i}</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: P.br }}>{item.t}</h3>
              <p style={{ fontSize: 14, color: P.mu, lineHeight: 1.7 }}>{item.d}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(139,92,246,.1)", paddingTop: 56 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 700, color: P.br, marginBottom: 12, lineHeight: 1.2 }}>{d.forceT}</h3>
            <p style={{ fontSize: 16, color: P.mu, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>{d.forceS}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 14 }}>
            {d.force.map((f, i) => (
              <div key={i} className="ba-card" style={{ background: P.sf, border: `1px solid ${P.bd}`, borderRadius: 14, padding: 22, transition: TR, minHeight: 140 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 22 }}>{f.i}</span>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, margin: 0 }}>{f.t}</h4>
                </div>
                <p style={{ fontSize: 13, color: P.dm, lineHeight: 1.6 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* SEARCH */}
      <section style={{ padding: "40px 24px 80px" }}>
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
              <div key={`${sTab}-${i}`} className="ba-card" style={{ ...card, padding: 24 }}>
                <div style={{ fontFamily: fm, fontSize: 14, fontWeight: 700, color: P.ac, marginBottom: 6 }}>{it.fn}</div>
                <div style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 8, lineHeight: 1.6 }}>{it[lang]}</div>
                <div style={{ fontSize: 12, color: P.dm, fontFamily: fm, background: "rgba(0,0,0,.3)", padding: "5px 10px", borderRadius: 6 }}>{it.ex}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="ba-sec">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={sTitle}>{d.pT}</h2>
          <p style={{ ...sSub, margin: "0 auto" }}>{d.pS}</p>
          <div style={{ display: "inline-block", marginTop: 16, background: "rgba(139,92,246,.06)", border: "1px solid rgba(139,92,246,.15)", borderRadius: 50, padding: "6px 18px", fontSize: 14, color: P.ac, fontWeight: 500 }}>{d.pD}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 18, maxWidth: 1100, margin: "0 auto" }}>
          {d.pl.map((p, i) => (
            <div key={i} className="ba-pricing-card" style={{ background: p.pop ? "linear-gradient(180deg,rgba(139,92,246,.08),rgba(15,12,30,.9) 40%)" : P.sf, border: `1px solid ${p.pop ? "rgba(139,92,246,.4)" : P.bd}`, borderRadius: 20, padding: "32px 24px", position: "relative", transition: TR, display: "flex", flexDirection: "column" }}>
              {p.pop && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg,${P.ad},${P.ap})`, color: P.wh, padding: "4px 20px", borderRadius: 50, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>POPULAR</div>}
              <div style={{ fontSize: 13, color: P.dm, fontWeight: 500, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{p.tg}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: P.br, marginBottom: 16 }}>{p.n}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                <span style={{ fontFamily: fm, fontSize: 42, fontWeight: 700, color: P.ac }}>{p.p === "TBA" ? "TBA" : `€${p.p}`}</span>
                {p.p !== "0" && p.p !== "TBA" && <span style={{ fontSize: 14, color: P.dm }}>{d.pU}</span>}
              </div>
              <div style={{ borderTop: `1px solid ${P.bd}`, paddingTop: 20, flex: 1 }}>
                {p.f.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "#cbd5e1", lineHeight: 1.6, marginBottom: 10 }}>
                    <span style={{ color: P.ac, flexShrink: 0, marginTop: 2 }}>✓</span><span>{f}</span>
                  </div>
                ))}
              </div>
              <a href={p.p === "TBA" ? "mailto:info@brandalarm.ro" : REG} {...(p.p === "TBA" ? {} : EXT)} style={{ ...(p.pop ? btnP : btnO), width: "100%", textAlign: "center", display: "block", padding: "13px 20px", fontSize: 15, marginTop: 20, boxSizing: "border-box" }}>{p.p === "TBA" ? d.ctcB : d.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="ba-sec">
        <div style={{ marginBottom: 48 }}><h2 style={sTitle}>{d.hT}</h2></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {d.hw.map((s, i) => (
            <div key={i} className="ba-card" style={{ padding: 28, borderLeft: "2px solid rgba(139,92,246,.15)", transition: TR, minHeight: 160 }}>
              <div style={{ fontFamily: fm, fontSize: 48, fontWeight: 700, color: "rgba(139,92,246,.1)", lineHeight: 1, marginBottom: 12 }}>{s.n}</div>
              <h3 style={{ fontSize: 19, fontWeight: 600, color: P.br, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: P.mu, lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "70px 24px" }}>
        <div className="ba-cta-box" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg,rgba(139,92,246,.06),rgba(168,85,247,.04))", border: "1px solid rgba(139,92,246,.12)", borderRadius: 24, padding: "60px 40px" }}>
          <h2 style={{ fontSize: "clamp(24px,4.5vw,42px)", fontWeight: 700, letterSpacing: -1, marginBottom: 16, color: P.br, lineHeight: 1.2 }}>{d.ctT}</h2>
          <p style={{ fontSize: 16, color: P.mu, maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>{d.ctS}</p>
          <a href={REG} {...EXT} style={{ ...btnP, fontSize: 17, padding: "15px 38px" }}>{d.ctB}</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ba-footer" style={{ borderTop: "1px solid rgba(139,92,246,.06)", padding: "50px 24px 36px" }}>
        <div className="ba-footer-grid" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: 18, marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg,${P.ad},${P.ap})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: P.wh }}>B</div>
              <span>Brand<span style={{ color: P.ac }}>Alarm</span></span>
            </div>
            <p style={{ fontSize: 13, color: P.mu, lineHeight: 1.7, marginBottom: 16 }}>{d.fD}</p>
            <p style={{ fontSize: 12, color: P.dm, lineHeight: 1.7 }}>
              <strong style={{ color: P.tx }}>Trademark Alliance SRL</strong><br />
              CUI: RO50768537 | Reg. Com.: J40/24786/2024<br />
              Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti
            </p>
          </div>
          <div style={{ minWidth: 150 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, marginBottom: 14 }}>{d.flT}</h4>
            {d.nav.map(n => <a key={n.h} href={n.h} style={{ display: "block", color: P.mu, fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{n.l}</a>)}
          </div>
          <div style={{ minWidth: 150 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, marginBottom: 14 }}>{d.fgT}</h4>
            {d.fg.map((l, i) => <Link key={i} to={l.h} style={{ display: "block", color: P.mu, fontSize: 14, marginBottom: 10, textDecoration: "none" }}>{l.l}</Link>)}
          </div>
          <div style={{ minWidth: 150 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: P.br, marginBottom: 14 }}>{d.fpT}</h4>
            <a href="https://anpc.ro" {...EXT} style={{ display: "block", color: P.mu, fontSize: 13, marginBottom: 10, textDecoration: "none" }}>ANPC</a>
            <a href="https://consumer-redress.ec.europa.eu/" {...EXT} style={{ display: "block", color: P.mu, fontSize: 13, marginBottom: 10, textDecoration: "none" }}>{lang === "ro" ? "Solutionare litigii UE" : "EU Consumer Redress"}</a>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "36px auto 0", paddingTop: 18, borderTop: "1px solid rgba(139,92,246,.06)", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#475569" }}>{d.fC}</p>
        </div>
      </footer>
    </div>
  );
}
