import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";

const data = {
  ro: {
    title: "Intrebari frecvente",
    desc: "Raspunsuri la cele mai frecvente intrebari despre BrandAlarm — monitorizare marci comerciale, EUIPO, OSIM, opozitie, GDPR.",
    intro: "Tot ce trebuie sa stii despre monitorizarea marcilor, sursele oficiale, termenele legale si platforma BrandAlarm. Daca nu gasesti raspunsul aici, contacteaza-ne la info@brandalarm.ro.",
    items: [
      { q: "Ce face BrandAlarm?", a: "BrandAlarm este o platforma de monitorizare a marcilor comerciale, brandurilor si domeniilor de internet. Scaneaza in mod automat principalele registre internationale (WIPO, EUIPO, TMView) si nationale (OSIM, BOPI), detecteaza conflicte cu marca ta si te alerteaza in timp real. In plus, monitorizam typosquatting-ul de domenii si generam rapoarte cu analiza juridica AI." },
      { q: "Cum incep si cat costa?", a: "Te poti inregistra gratuit si poti folosi planul Free pentru cautari de baza, fara card de credit. Planurile platite incep de la €15/luna (Basic) si €30/luna (Pro), facturate per marca monitorizata. Planul Enterprise este personalizabil si se discuta direct cu echipa. Anularea se poate face oricand, fara penalizari." },
      { q: "Care sunt sursele monitorizate?", a: "Monitorizam principalele oficii de proprietate intelectuala: EUIPO (European Union Intellectual Property Office) cu peste 180.000 cereri EUTM/an, WIPO (World Intellectual Property Organization) cu Madrid Protocol si Global Brand Database, OSIM (Oficiul de Stat pentru Inventii si Marci) cu BOPI saptamanal, si TMView (agregator EU pentru 70+ baze de date). Pentru domenii folosim sistemele RDAP/WHOIS si scanere de typosquatting." },
      { q: "Cat de des se actualizeaza datele?", a: "Sursele oficiale (EUIPO, WIPO, OSIM) sunt scanate zilnic. Pentru BOPI (Buletinul Oficial de Proprietate Industriala), publicat saptamanal de OSIM, alertele se trimit in maximum 24 de ore de la publicare. Pentru domenii, monitorizarea se face in timp real prin sisteme automate." },
      { q: "Ce este o opozitie si care e termenul?", a: "Opozitia este procedura legala prin care impiedici inregistrarea unei marci care intra in conflict cu marca ta anterioara. Termenul de opozitie este STRICT: la EUIPO ai 3 luni de la publicarea cererii in EU Trade Marks Bulletin, iar la OSIM ai 2 luni de la publicarea in BOPI. Daca ratezi acest termen, opozitia tardiva este inadmisibila iar marca conflictuala se poate inregistra definitiv." },
      { q: "Care e diferenta intre EUIPO si OSIM?", a: "OSIM (Oficiul de Stat pentru Inventii si Marci) este oficiul national din Romania — protectia obtinuta acolo se aplica doar pe teritoriul RO. EUIPO (European Union Intellectual Property Office) este oficiul UE — o singura inregistrare iti ofera protectie in toate cele 27 de state membre. EUIPO este recomandat daca vrei sa-ti protejezi marca pe piata europeana, OSIM daca activitatea ta este localizata strict in Romania." },
      { q: "Cum stiu daca cineva mi-a copiat marca?", a: "Fara monitorizare proactiva, descoperirea este aproape intamplatoare — prin clientii nemultumiti, reclamatii sau cautari online ocazionale. Cu BrandAlarm, primesti notificari automate cand cineva depune o marca similara cu a ta in oricare dintre registrele monitorizate. Algoritmii nostri detecteaza similitudini fonetice, vizuale, conceptuale si typosquatting de domenii." },
      { q: "Ce este typosquatting si cum ma protejati?", a: "Typosquatting este practica de a inregistra domenii web aproape identice cu un brand cunoscut, profitand de greseli de scriere ale utilizatorilor (ex: brandalrm.ro in loc de brandalarm.ro). Aceste domenii sunt folosite pentru phishing, frauda, distribuire malware sau redirectionarea traficului catre concurenta. BrandAlarm scaneaza in mod activ toate variatiile posibile ale domeniilor monitorizate." },
      { q: "Folositi AI? Cum?", a: "Da, AI este o componenta centrala a platformei. Folosim modele de limbaj mari (LLM) pentru: analize de similitudine fonetica si conceptuala intre marci, generarea de rapoarte juridice cu reasoning structurat, scoring automat al riscului de conflict, si interpretarea contextului juridic al fiecarei situatii. AI-ul nostru NU inlocuieste avocatul — ofera context si recomandari care iti permit sa iei decizii informate." },
      { q: "Cum protejati datele mele (GDPR)?", a: "Suntem conformi GDPR si Legea 190/2018. Datele sunt criptate in tranzit (TLS 1.3) si in repaus, infrastructura ruleaza pe Cloudflare cu protectie DDoS, parolele sunt hashed cu bcrypt si oferim 2FA. NU vindem si NU transferam datele tale catre terti pentru marketing. Detalii complete in Politica de Confidentialitate." },
      { q: "Pot anula oricand?", a: "Da. Toate planurile pot fi anulate oricand, direct din panoul de cont, fara penalizari. Daca ai un plan anual, anularea produce efecte la sfarsitul perioadei platite. Conform OUG 34/2014, ai si dreptul de retragere de 14 zile de la achizitie pentru clientii consumatori." },
      { q: "Ce se intampla daca BrandAlarm rateaza un conflict?", a: "Serviciile BrandAlarm au caracter informativ si nu inlocuiesc consultanta juridica. Desi monitorizam toate sursele oficiale disponibile si scoring-urile noastre sunt validate de echipe juridice, recomandam mereu sa consulti un avocat specializat inainte de actiuni juridice importante. Limitarile de raspundere sunt detaliate in Termeni si Conditii." }
    ]
  },
  en: {
    title: "Frequently Asked Questions",
    desc: "Answers to the most common questions about BrandAlarm — trademark monitoring, EUIPO, OSIM, opposition, GDPR.",
    intro: "Everything you need to know about trademark monitoring, official sources, legal deadlines, and the BrandAlarm platform. If you don't find the answer here, contact us at info@brandalarm.ro.",
    items: [
      { q: "What does BrandAlarm do?", a: "BrandAlarm is a trademark, brand, and domain monitoring platform. It automatically scans major international registries (WIPO, EUIPO, TMView) and national ones (OSIM, BOPI), detects conflicts with your mark, and alerts you in real-time. Additionally, we monitor domain typosquatting and generate AI-powered legal analysis reports." },
      { q: "How do I get started and how much does it cost?", a: "You can register for free and use the Free plan for basic searches, no credit card required. Paid plans start from €15/month (Basic) and €30/month (Pro), billed per monitored trademark. The Enterprise plan is custom and discussed directly with our team. You can cancel anytime, no penalties." },
      { q: "Which sources do you monitor?", a: "We monitor the major IP offices: EUIPO (European Union Intellectual Property Office) with over 180,000 EUTM applications/year, WIPO (World Intellectual Property Organization) with Madrid Protocol and Global Brand Database, OSIM (Romanian State Office for Inventions and Trademarks) with weekly BOPI bulletin, and TMView (EU aggregator of 70+ databases). For domains we use RDAP/WHOIS systems and typosquatting scanners." },
      { q: "How often is data updated?", a: "Official sources (EUIPO, WIPO, OSIM) are scanned daily. For BOPI (Romanian Official Bulletin of Industrial Property), published weekly by OSIM, alerts are sent within 24 hours of publication. Domain monitoring happens in real-time through automated systems." },
      { q: "What is an opposition and what's the deadline?", a: "Opposition is the legal procedure to prevent the registration of a trademark that conflicts with your earlier mark. The opposition deadline is STRICT: at EUIPO you have 3 months from publication in the EU Trade Marks Bulletin, at OSIM you have 2 months from publication in BOPI. If you miss this deadline, late opposition is inadmissible and the conflicting mark can be registered permanently." },
      { q: "What's the difference between EUIPO and OSIM?", a: "OSIM (Romanian State Office for Inventions and Trademarks) is the national office of Romania — protection obtained there applies only on Romanian territory. EUIPO (European Union Intellectual Property Office) is the EU office — a single registration provides protection in all 27 EU member states. EUIPO is recommended if you want to protect your brand on the European market, OSIM if your activity is strictly localized in Romania." },
      { q: "How do I know if someone copied my trademark?", a: "Without proactive monitoring, discovery is almost accidental — through dissatisfied customers, complaints, or occasional online searches. With BrandAlarm, you get automatic notifications when someone files a similar trademark in any of the monitored registries. Our algorithms detect phonetic, visual, conceptual similarities, and domain typosquatting." },
      { q: "What is typosquatting and how do you protect against it?", a: "Typosquatting is the practice of registering web domains almost identical to a known brand, exploiting common typos by users (e.g., brandalrm.ro instead of brandalarm.ro). These domains are used for phishing, fraud, malware distribution, or redirecting traffic to competitors. BrandAlarm actively scans all possible variations of monitored domains." },
      { q: "Do you use AI? How?", a: "Yes, AI is a central component of the platform. We use Large Language Models (LLMs) for: phonetic and conceptual similarity analysis between trademarks, generation of structured legal reports with reasoning, automatic conflict risk scoring, and interpretation of the legal context of each situation. Our AI does NOT replace your lawyer — it provides context and recommendations that allow you to make informed decisions." },
      { q: "How do you protect my data (GDPR)?", a: "We are GDPR and Romanian Law 190/2018 compliant. Data is encrypted in transit (TLS 1.3) and at rest, infrastructure runs on Cloudflare with DDoS protection, passwords are bcrypt-hashed, and we offer 2FA. We DO NOT sell or transfer your data to third parties for marketing. Full details in our Privacy Policy." },
      { q: "Can I cancel anytime?", a: "Yes. All plans can be cancelled anytime, directly from your account panel, no cancellation penalties. If you have an annual plan, cancellation takes effect at the end of the paid period. Under EU consumer law, you also have a 14-day withdrawal right after purchase for consumer customers." },
      { q: "What if BrandAlarm misses a conflict?", a: "BrandAlarm services are informational and do not replace legal advice. Although we monitor all available official sources and our scoring is validated by legal teams, we always recommend consulting a specialized attorney before important legal actions. Liability limitations are detailed in our Terms & Conditions." }
    ]
  }
};

const P = { ac: "#a78bfa", ad: "#8b5cf6", br: "#f1f5f9", mu: "#b0bfcc", dm: "#8896a8" };

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div style={{
      borderBottom: "1px solid rgba(139,92,246,.1)",
      marginBottom: 0,
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "20px 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
          color: P.br,
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          fontSize: 17,
          fontWeight: 600,
          color: P.br,
          lineHeight: 1.5,
          flex: 1,
        }}>{item.q}</span>
        <span style={{
          fontSize: 24,
          color: P.ac,
          fontWeight: 300,
          flexShrink: 0,
          lineHeight: 1,
          marginTop: 2,
          transition: "transform .25s ease",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          display: "inline-block",
        }}>+</span>
      </button>
      {isOpen && (
        <div style={{
          paddingBottom: 24,
          paddingRight: 40,
          fontSize: 15,
          color: P.mu,
          lineHeight: 1.8,
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function IntrebariFrecvente({ lang = "ro" }) {
  const [openSet, setOpenSet] = useState(new Set([0]));
  const d = data[lang];

  const toggle = (i) => {
    const next = new Set(openSet);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setOpenSet(next);
  };

  // Inject FAQPage schema for rich snippets
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "inLanguage": lang === "ro" ? "ro-RO" : "en-US",
      "mainEntity": d.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
    let script = document.getElementById("faq-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "faq-schema";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, [lang, d.items]);

  return (
    <PageLayout title={d.title} description={d.desc} lang={lang}>
      <p style={{ marginBottom: 32, fontSize: 16, lineHeight: 1.8 }}>{d.intro}</p>
      <div>
        {d.items.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openSet.has(i)}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
      <div style={{
        marginTop: 48,
        padding: "24px 28px",
        background: "rgba(139,92,246,.04)",
        border: "1px solid rgba(139,92,246,.12)",
        borderRadius: 14,
      }}>
        <p style={{ fontSize: 15, color: P.mu, lineHeight: 1.7, margin: 0 }}>
          {lang === "ro"
            ? <>Nu ai gasit raspunsul cautat? Scrie-ne la <a href="mailto:info@brandalarm.ro" style={{ color: P.ac }}>info@brandalarm.ro</a> si revenim in maximum 24 de ore.</>
            : <>Didn't find what you were looking for? Email us at <a href="mailto:info@brandalarm.ro" style={{ color: P.ac }}>info@brandalarm.ro</a> and we'll get back to you within 24 hours.</>
          }
        </p>
      </div>
    </PageLayout>
  );
}
