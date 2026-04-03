import PageLayout from "../components/PageLayout";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, strong: { color: "#e2e8f0" }, accent: { color: "#a78bfa" } };

export default function Confidentialitate() {
  return (
    <PageLayout title="Politica de Confidentialitate">
      <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>

      <p style={S.p}>Prezenta Politica de Confidentialitate descrie modul in care <strong style={S.strong}>Trademark Alliance SRL</strong> (denumita in continuare "Operatorul") colecteaza, prelucreaza si protejeaza datele dumneavoastra cu caracter personal in cadrul utilizarii platformei BrandAlarm, in conformitate cu Regulamentul (UE) 2016/679 (GDPR) si Legea nr. 190/2018.</p>

      <h2 style={S.h2}>1. Operatorul de Date</h2>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Denumire:</strong> Trademark Alliance SRL</li>
        <li style={S.li}><strong style={S.strong}>CUI:</strong> RO50768537</li>
        <li style={S.li}><strong style={S.strong}>Sediu:</strong> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti, Romania</li>
        <li style={S.li}><strong style={S.strong}>Contact protectia datelor:</strong> Prin intermediul platformei BrandAlarm (sectiunea Contul Meu), disponibil dupa crearea contului.</li>
      </ul>

      <h2 style={S.h2}>2. Ce Date Colectam</h2>
      <h3 style={S.h3}>2.1. Date furnizate direct de utilizator</h3>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Date de cont:</strong> Adresa de email, parola (stocata criptat), nume/denumire companie</li>
        <li style={S.li}><strong style={S.strong}>Date de facturare:</strong> Nume, adresa, CUI (daca este cazul). Datele cardului bancar sunt procesate direct de Stripe si NU sunt stocate de noi.</li>
        <li style={S.li}><strong style={S.strong}>Date privind marcile:</strong> Denumirea marcilor monitorizate, clasele Nice, teritoriile selectate</li>
        <li style={S.li}><strong style={S.strong}>Date privind domeniile:</strong> Numele de domenii monitorizate</li>
      </ul>
      <h3 style={S.h3}>2.2. Date colectate automat</h3>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Date tehnice:</strong> Adresa IP, tipul browserului, sistemul de operare, rezolutia ecranului</li>
        <li style={S.li}><strong style={S.strong}>Date de utilizare:</strong> Paginile accesate, actiunile efectuate pe Platforma, data si ora accesarii</li>
        <li style={S.li}><strong style={S.strong}>Cookies:</strong> Conform <a href="/politica-cookies" style={{ color: "#a78bfa" }}>Politicii de Cookies</a></li>
      </ul>

      <h2 style={S.h2}>3. Scopurile si Baza Legala a Prelucrarii</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24, fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(139,92,246,.15)" }}>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Scop</th>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Baza legala (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Crearea si gestionarea contului", "Art. 6(1)(b) — executarea contractului"],
            ["Furnizarea serviciilor de monitorizare", "Art. 6(1)(b) — executarea contractului"],
            ["Procesarea platilor", "Art. 6(1)(b) — executarea contractului"],
            ["Trimiterea alertelor si notificarilor", "Art. 6(1)(b) — executarea contractului"],
            ["Generarea rapoartelor", "Art. 6(1)(b) — executarea contractului"],
            ["Imbunatatirea Platformei", "Art. 6(1)(f) — interes legitim"],
            ["Prevenirea fraudei si securitate", "Art. 6(1)(f) — interes legitim"],
            ["Conformare cu obligatii legale (facturare, fiscalitate)", "Art. 6(1)(c) — obligatie legala"],
            ["Comunicari de marketing (cu consimtamant)", "Art. 6(1)(a) — consimtamant"],
          ].map(([scop, baza], i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(139,92,246,.05)" }}>
              <td style={{ padding: "8px", color: "#b0bfcc" }}>{scop}</td>
              <td style={{ padding: "8px", color: "#8896a8" }}>{baza}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={S.h2}>4. Destinatari ai Datelor</h2>
      <p style={S.p}>Datele dumneavoastra pot fi transmise urmatoarelor categorii de destinatari, in masura strict necesara:</p>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Stripe Inc.</strong> — procesarea platilor (SUA, cu clauze contractuale standard UE-SUA)</li>
        <li style={S.li}><strong style={S.strong}>Cloudflare Inc.</strong> — hosting si securitate (SUA, cu EU Data Protection Framework)</li>
        <li style={S.li}><strong style={S.strong}>Anthropic PBC</strong> — procesare AI pentru generarea rapoartelor (SUA, cu clauze contractuale standard). Datele transmise catre AI sunt anonimizate si nu contin date personale identificabile.</li>
        <li style={S.li}><strong style={S.strong}>Autoritati publice</strong> — doar in cazul in care exista o obligatie legala (ANAF, instante judecatoresti)</li>
      </ul>
      <p style={S.p}>Nu vindem, inchiriem sau transferam datele dumneavoastra cu caracter personal catre terti in scopuri de marketing.</p>

      <h2 style={S.h2}>5. Transferuri Internationale</h2>
      <p style={S.p}>Unii dintre furnizorii nostri de servicii sunt stabiliti in SUA. Transferurile de date catre SUA sunt protejate prin:</p>
      <ul style={S.ul}>
        <li style={S.li}>EU-U.S. Data Privacy Framework (pentru furnizorii certificati)</li>
        <li style={S.li}>Clauze contractuale standard aprobate de Comisia Europeana</li>
        <li style={S.li}>Masuri tehnice suplimentare (criptare in tranzit si in repaus)</li>
      </ul>

      <h2 style={S.h2}>6. Durata Stocarii</h2>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Date de cont:</strong> Pe durata existentei contului + 30 zile dupa stergere</li>
        <li style={S.li}><strong style={S.strong}>Date de facturare:</strong> 10 ani (obligatie fiscala conform Codului Fiscal)</li>
        <li style={S.li}><strong style={S.strong}>Rapoarte generate:</strong> Conform planului de abonament (1-5 ani)</li>
        <li style={S.li}><strong style={S.strong}>Date tehnice (logs):</strong> Maximum 90 de zile</li>
        <li style={S.li}><strong style={S.strong}>Date de marketing:</strong> Pana la retragerea consimtamantului</li>
      </ul>

      <h2 style={S.h2}>7. Drepturile Dumneavoastra</h2>
      <p style={S.p}>In conformitate cu GDPR, aveti urmatoarele drepturi:</p>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Dreptul de acces</strong> (art. 15) — sa obtineti confirmarea prelucrarii datelor si o copie a acestora</li>
        <li style={S.li}><strong style={S.strong}>Dreptul la rectificare</strong> (art. 16) — sa solicitati corectarea datelor inexacte</li>
        <li style={S.li}><strong style={S.strong}>Dreptul la stergere</strong> (art. 17) — sa solicitati stergerea datelor ("dreptul de a fi uitat")</li>
        <li style={S.li}><strong style={S.strong}>Dreptul la restrictionarea prelucrarii</strong> (art. 18) — sa solicitati limitarea prelucrarii in anumite situatii</li>
        <li style={S.li}><strong style={S.strong}>Dreptul la portabilitatea datelor</strong> (art. 20) — sa primiti datele intr-un format structurat, utilizat in mod curent</li>
        <li style={S.li}><strong style={S.strong}>Dreptul la opozitie</strong> (art. 21) — sa va opuneti prelucrarii bazate pe interes legitim</li>
        <li style={S.li}><strong style={S.strong}>Dreptul de a retrage consimtamantul</strong> — oricand, fara a afecta legalitatea prelucrarii anterioare</li>
      </ul>
      <p style={S.p}>Pentru exercitarea drepturilor, va rugam sa ne contactati prin intermediul Platformei (sectiunea Contul Meu → Setari → Protectia datelor).</p>
      <p style={S.p}>Vom raspunde solicitarilor in termen de maximum <strong style={S.strong}>30 de zile</strong> de la primire.</p>

      <h2 style={S.h2}>8. Securitatea Datelor</h2>
      <p style={S.p}>Implementam masuri tehnice si organizatorice adecvate pentru protejarea datelor, inclusiv:</p>
      <ul style={S.ul}>
        <li style={S.li}>Criptare TLS 1.3 pentru toate comunicatiile</li>
        <li style={S.li}>Parolele sunt stocate folosind algoritmi de hashing securizati (bcrypt)</li>
        <li style={S.li}>Autentificare cu doi factori (2FA) disponibila</li>
        <li style={S.li}>Protectie DDoS si WAF prin Cloudflare</li>
        <li style={S.li}>Acces restrictionat la date pe baza principiului "need to know"</li>
        <li style={S.li}>Monitorizare continua a securitatii infrastructurii</li>
      </ul>

      <h2 style={S.h2}>9. Plangeri</h2>
      <p style={S.p}>Daca considerati ca prelucrarea datelor dumneavoastra incalca GDPR, aveti dreptul de a depune o plangere la autoritatea de supraveghere:</p>
      <p style={S.p}>
        <strong style={S.strong}>Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal (ANSPDCP)</strong><br />
        B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, Bucuresti<br />
        <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>www.dataprotection.ro</a>
      </p>

      <h2 style={S.h2}>10. Modificari</h2>
      <p style={S.p}>Prezenta Politica de Confidentialitate poate fi actualizata periodic. Orice modificare semnificativa va fi comunicata prin email si/sau prin notificare pe Platforma cu cel putin 30 de zile inainte de intrarea in vigoare.</p>
    </PageLayout>
  );
}
