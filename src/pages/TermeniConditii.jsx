import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, b: { color: "#e2e8f0" }, a: { color: "#a78bfa" } };

function RO() {
  return <>
    <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>
    <p style={S.p}>Prezentele Termeni si Conditii (denumite in continuare <b style={S.b}>"T&amp;C"</b>) reglementeaza accesul si utilizarea platformei <b style={S.b}>BrandAlarm</b> (accesibila la adresa <span style={S.a}>brandalarm.ro</span> si <span style={S.a}>app.brandalarm.ro</span>), operata de Trademark Alliance SRL.</p>
    <p style={S.p}>Prin accesarea sau utilizarea Platformei, confirmati ca ati citit, inteles si acceptat prezentele T&amp;C in integralitatea lor.</p>

    <h2 style={S.h2}>1. Date de Identificare Furnizor</h2>
    <p style={S.p}>In conformitate cu art. 5 din Legea nr. 365/2002 privind comertul electronic:</p>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Denumire:</b> Trademark Alliance SRL</li>
      <li style={S.li}><b style={S.b}>Sediu social:</b> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti, Romania</li>
      <li style={S.li}><b style={S.b}>CUI:</b> RO50768537</li>
      <li style={S.li}><b style={S.b}>Nr. Registrul Comertului:</b> J40/24786/2024</li>
    </ul>

    <h2 style={S.h2}>2. Definitii</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>"Platforma"</b> — aplicatia web BrandAlarm, inclusiv toate functionalitatile, rapoartele si serviciile asociate.</li>
      <li style={S.li}><b style={S.b}>"Utilizator"</b> — orice persoana fizica sau juridica care acceseaza sau utilizeaza Platforma.</li>
      <li style={S.li}><b style={S.b}>"Cont"</b> — contul creat de Utilizator pe Platforma prin furnizarea datelor de identificare.</li>
      <li style={S.li}><b style={S.b}>"Abonament"</b> — planul de servicii selectat (Free, Basic, Pro sau Enterprise).</li>
      <li style={S.li}><b style={S.b}>"Raport"</b> — documentul generat automat de Platforma cu informatii despre marci, domenii sau societati comerciale.</li>
      <li style={S.li}><b style={S.b}>"Marca"</b> — orice semn distinctiv inregistrat sau in curs de inregistrare la un oficiu de proprietate intelectuala.</li>
    </ul>

    <h2 style={S.h2}>3. Descrierea Serviciilor</h2>
    <p style={S.p}>BrandAlarm ofera urmatoarele servicii:</p>
    <ul style={S.ul}>
      <li style={S.li}>Monitorizarea marcilor noi depuse la EUIPO, WIPO, OSIM si TMView</li>
      <li style={S.li}>Cautari de similitudini (fonetice, vizuale, conceptuale)</li>
      <li style={S.li}>Monitorizarea domeniilor internet (typosquatting, expirare, disponibilitate)</li>
      <li style={S.li}>Generarea de rapoarte automate cu analiza AI</li>
      <li style={S.li}>Alerte privind expirarea marcilor si termenele de reinnoiri</li>
      <li style={S.li}>Verificari in registrul OSIM si BOPI</li>
      <li style={S.li}>Extragerea datelor despre societatile care depun marci noi</li>
      <li style={S.li}>Monitorizarea incalcarilor marcii pe piata online</li>
      <li style={S.li}>Acces la reteaua de avocati parteneri specializati in proprietate intelectuala</li>
    </ul>
    <p style={S.p}><b style={S.b}>Important:</b> Serviciile BrandAlarm au caracter informativ si nu constituie consultanta juridica.</p>

    <h2 style={S.h2}>4. Crearea Contului si Eligibilitate</h2>
    <p style={S.p}>Pentru a crea un Cont trebuie: sa aveti minim 18 ani, sa furnizati date corecte si sa acceptati prezentele T&amp;C. Utilizatorul este responsabil pentru securitatea credentialelor de acces.</p>

    <h2 style={S.h2}>5. Abonamente si Plati</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Free (€0/luna)</b> — cautare de baza, fara alerte sau monitorizare</li>
      <li style={S.li}><b style={S.b}>Basic (€15/luna/marca)</b> — 3 interogari/luna, rapoarte AI, alerte 1 teritoriu</li>
      <li style={S.li}><b style={S.b}>Pro (€30/luna/marca)</b> — 5 interogari/luna, notificari real-time, fara limitare teritoriala</li>
      <li style={S.li}><b style={S.b}>Enterprise (pret la cerere)</b> — 31 interogari, rapoarte juridice, API, suport dedicat. Contacteaza-ne la info@brandalarm.ro</li>
    </ul>
    <p style={S.p}>Facturare lunara sau anuala (10% discount). Plati prin Stripe. Nu stocam datele cardurilor. Preturile pot fi modificate cu preaviz de 30 zile.</p>

    <h2 style={S.h2}>6. Dreptul de Retragere</h2>
    <p style={S.p}>Conform OUG nr. 34/2014: aveti dreptul de retragere in <b style={S.b}>14 zile calendaristice</b> de la achizitie. Rambursarea se efectueaza in maximum 14 zile. Exceptie: daca serviciul a fost prestat integral cu acordul dvs. expres (art. 16 lit. a din OUG 34/2014).</p>

    <h2 style={S.h2}>7. Utilizare Acceptabila</h2>
    <p style={S.p}>Utilizatorul se obliga sa nu: utilizeze Platforma in scopuri ilegale; efectueze scraping sau extragere automatizata; revanda datele; incerce acces neautorizat; creeze conturi multiple pentru a eluda limitarile. Incalcarea poate duce la suspendarea Contului.</p>

    <h2 style={S.h2}>8. Proprietate Intelectuala</h2>
    <p style={S.p}>Platforma, algoritmii, codul si denumirea "BrandAlarm" sunt proprietatea Trademark Alliance SRL. Rapoartele generate pot fi utilizate de Utilizator in scopuri proprii, inclusiv prezentare catre clienti.</p>

    <h2 style={S.h2}>9. Limitarea Raspunderii</h2>
    <ul style={S.ul}>
      <li style={S.li}>Serviciile au caracter <b style={S.b}>strict informativ</b></li>
      <li style={S.li}>Scorurile de similitudine sunt algoritmice si pot diferi de evaluarea EUIPO/OSIM</li>
      <li style={S.li}>Nu garantam acuratetea datelor din surse externe</li>
      <li style={S.li}>Utilizatorul valideaza informatiile cu un consilier juridic</li>
      <li style={S.li}>Raspunderea maxima nu depaseste abonamentul din ultimele 12 luni</li>
    </ul>

    <h2 style={S.h2}>10. Protectia Datelor</h2>
    <p style={S.p}>Prelucrarea datelor se efectueaza conform GDPR si Legea nr. 190/2018. Detalii in <Link to="/confidentialitate" style={S.a}>Politica de Confidentialitate</Link>.</p>

    <h2 style={S.h2}>11. Durata si Incetare</h2>
    <p style={S.p}>Contul Free e pe durata nedeterminata. Abonamentele se reinnoiesc automat. Anularea produce efecte la sfarsitul perioadei curente. Putem suspenda Contul in cazul incalcarii T&amp;C cu notificare de 7 zile.</p>

    <h2 style={S.h2}>12. Legislatie si Litigii</h2>
    <p style={S.p}>Legislatia romana. Litigiile se solutioneaza amiabil sau prin instantele din Bucuresti.</p>
    <p style={S.p}><b style={S.b}>ANPC:</b> <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" style={S.a}>anpc.ro</a> | <b style={S.b}>Solutionare litigii UE:</b> <a href="https://consumer-redress.ec.europa.eu/" target="_blank" rel="noopener noreferrer" style={S.a}>consumer-redress.ec.europa.eu</a></p>

    <h2 style={S.h2}>13. Modificari T&amp;C</h2>
    <p style={S.p}>Modificarile se comunica cu 30 zile inainte. Continuarea utilizarii constituie acceptarea noilor T&amp;C.</p>

    <h2 style={S.h2}>14. Dispozitii Finale</h2>
    <p style={S.p}>Nulitatea unei clauze nu afecteaza celelalte. Neexercitarea unui drept nu constituie renuntare. Prezentele T&amp;C constituie acordul integral intre parti.</p>
  </>;
}

function EN() {
  return <>
    <p style={S.p}><em>Last updated: April 1, 2026</em></p>
    <p style={S.p}>These Terms and Conditions (hereinafter <b style={S.b}>"T&amp;C"</b>) govern access to and use of the <b style={S.b}>BrandAlarm</b> platform (accessible at <span style={S.a}>brandalarm.ro</span> and <span style={S.a}>app.brandalarm.ro</span>), operated by Trademark Alliance SRL.</p>
    <p style={S.p}>By accessing or using the Platform, you confirm that you have read, understood and accepted these T&amp;C in their entirety.</p>

    <h2 style={S.h2}>1. Service Provider Identification</h2>
    <p style={S.p}>In accordance with Art. 5 of Law No. 365/2002 on electronic commerce:</p>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Company:</b> Trademark Alliance SRL</li>
      <li style={S.li}><b style={S.b}>Registered office:</b> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucharest, Romania</li>
      <li style={S.li}><b style={S.b}>VAT:</b> RO50768537</li>
      <li style={S.li}><b style={S.b}>Trade Register:</b> J40/24786/2024</li>
    </ul>

    <h2 style={S.h2}>2. Definitions</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>"Platform"</b> — the BrandAlarm web application, including all features, reports and associated services.</li>
      <li style={S.li}><b style={S.b}>"User"</b> — any natural or legal person who accesses or uses the Platform.</li>
      <li style={S.li}><b style={S.b}>"Account"</b> — the account created by the User by providing identification data.</li>
      <li style={S.li}><b style={S.b}>"Subscription"</b> — the selected service plan (Free, Basic, Pro or Enterprise).</li>
      <li style={S.li}><b style={S.b}>"Report"</b> — an automatically generated document with information about trademarks, domains or companies.</li>
      <li style={S.li}><b style={S.b}>"Trademark"</b> — any distinctive sign registered or pending registration with an IP office.</li>
    </ul>

    <h2 style={S.h2}>3. Description of Services</h2>
    <p style={S.p}>BrandAlarm provides the following services:</p>
    <ul style={S.ul}>
      <li style={S.li}>Monitoring of new trademark filings at EUIPO, WIPO, OSIM and TMView</li>
      <li style={S.li}>Similarity searches (phonetic, visual, conceptual)</li>
      <li style={S.li}>Domain monitoring (typosquatting, expiry, availability)</li>
      <li style={S.li}>Automated AI reports generation</li>
      <li style={S.li}>Trademark expiry and renewal alerts</li>
      <li style={S.li}>OSIM registry and BOPI monitoring</li>
      <li style={S.li}>Company data extraction for new trademark filers</li>
      <li style={S.li}>Online marketplace infringement monitoring</li>
      <li style={S.li}>Access to partner IP attorney network</li>
    </ul>
    <p style={S.p}><b style={S.b}>Important:</b> BrandAlarm services are informational only and do not constitute legal advice.</p>

    <h2 style={S.h2}>4. Account Creation and Eligibility</h2>
    <p style={S.p}>To create an Account you must: be at least 18 years old, provide accurate data and accept these T&amp;C. The User is responsible for account credential security.</p>

    <h2 style={S.h2}>5. Subscriptions and Payments</h2>
    <ul style={S.ul}>
      <li style={S.li}><b style={S.b}>Free (€0/month)</b> — basic search, no alerts or monitoring</li>
      <li style={S.li}><b style={S.b}>Basic (€15/month/trademark)</b> — 3 queries/month, AI reports, 1 territory alerts</li>
      <li style={S.li}><b style={S.b}>Pro (€30/month/trademark)</b> — 5 queries/month, real-time notifications, no territorial limits</li>
      <li style={S.li}><b style={S.b}>Enterprise (price on request)</b> — 31 queries, legal reports, API, dedicated support. Contact us at info@brandalarm.ro</li>
    </ul>
    <p style={S.p}>Monthly or annual billing (10% discount). Payments via Stripe. We do not store card data. Prices may change with 30 days notice.</p>

    <h2 style={S.h2}>6. Right of Withdrawal</h2>
    <p style={S.p}>Under Romanian GEO 34/2014: you have the right to withdraw within <b style={S.b}>14 calendar days</b> of purchase. Refund within 14 days. Exception: if the service has been fully performed with your express consent (Art. 16(a) GEO 34/2014).</p>

    <h2 style={S.h2}>7. Acceptable Use</h2>
    <p style={S.p}>Users must not: use the Platform for illegal purposes; scrape or automatically extract data; resell data; attempt unauthorized access; create multiple accounts to circumvent limits. Violations may result in account suspension.</p>

    <h2 style={S.h2}>8. Intellectual Property</h2>
    <p style={S.p}>The Platform, algorithms, code and "BrandAlarm" name are the exclusive property of Trademark Alliance SRL. Generated reports may be used by the User for their own purposes, including client presentations.</p>

    <h2 style={S.h2}>9. Limitation of Liability</h2>
    <ul style={S.ul}>
      <li style={S.li}>Services are <b style={S.b}>strictly informational</b></li>
      <li style={S.li}>Similarity scores are algorithmic and may differ from EUIPO/OSIM assessments</li>
      <li style={S.li}>We do not guarantee accuracy of external data sources</li>
      <li style={S.li}>Users should validate information with a legal advisor</li>
      <li style={S.li}>Maximum liability does not exceed the subscription paid in the last 12 months</li>
    </ul>

    <h2 style={S.h2}>10. Data Protection</h2>
    <p style={S.p}>Data processing complies with GDPR and Romanian Law No. 190/2018. Details in our <Link to="/en/privacy" style={S.a}>Privacy Policy</Link>.</p>

    <h2 style={S.h2}>11. Duration and Termination</h2>
    <p style={S.p}>Free accounts are indefinite. Paid subscriptions auto-renew. Cancellation takes effect at end of current billing period. We may suspend accounts for T&amp;C violations with 7 days notice.</p>

    <h2 style={S.h2}>12. Governing Law and Disputes</h2>
    <p style={S.p}>Romanian law. Disputes resolved amicably or through Bucharest courts.</p>
    <p style={S.p}><b style={S.b}>ANPC:</b> <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" style={S.a}>anpc.ro</a> | <b style={S.b}>EU Consumer Redress:</b> <a href="https://consumer-redress.ec.europa.eu/" target="_blank" rel="noopener noreferrer" style={S.a}>consumer-redress.ec.europa.eu</a></p>

    <h2 style={S.h2}>13. T&amp;C Modifications</h2>
    <p style={S.p}>Changes communicated 30 days in advance. Continued use constitutes acceptance of new T&amp;C.</p>

    <h2 style={S.h2}>14. Final Provisions</h2>
    <p style={S.p}>Nullity of any clause does not affect others. Non-exercise of a right does not constitute waiver. These T&amp;C constitute the entire agreement between the parties.</p>
  </>;
}

export default function TermeniConditii({ lang = "ro" }) {
  useEffect(() => { window.scrollTo(0, 0); }, [lang]);
  return (
    <PageLayout title={lang === "ro" ? "Termeni si Conditii" : "Terms and Conditions"} description={lang === "ro" ? "Termeni si conditii BrandAlarm — platforma de monitorizare marci si domenii, conform Legea 365/2002 si OUG 34/2014. Trademark Alliance SRL." : "BrandAlarm Terms and Conditions — trademark and domain monitoring platform, compliant with Romanian Law 365/2002 and GEO 34/2014."} lang={lang}>
      {lang === "ro" ? <RO /> : <EN />}
    </PageLayout>
  );
}
