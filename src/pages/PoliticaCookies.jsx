import PageLayout from "../components/PageLayout";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, strong: { color: "#e2e8f0" }, accent: { color: "#a78bfa" } };

export default function PoliticaCookies() {
  return (
    <PageLayout title="Politica de Cookies">
      <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>

      <p style={S.p}>Prezenta Politica de Cookies explica modul in care <strong style={S.strong}>BrandAlarm</strong> (operat de Trademark Alliance SRL) utilizeaza cookies si tehnologii similare pe site-ul brandalarm.ro, in conformitate cu Directiva ePrivacy (2002/58/CE), Regulamentul GDPR (UE) 2016/679 si Legea nr. 506/2004.</p>

      <h2 style={S.h2}>1. Ce Sunt Cookie-urile?</h2>
      <p style={S.p}>Cookie-urile sunt fisiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastra (computer, telefon, tableta) atunci cand vizitati un site web. Ele permit site-ului sa va recunoasca dispozitivul si sa retina anumite informatii despre vizita dumneavoastra.</p>

      <h2 style={S.h2}>2. Tipuri de Cookie-uri Utilizate</h2>

      <h3 style={S.h3}>2.1. Cookie-uri strict necesare</h3>
      <p style={S.p}>Aceste cookie-uri sunt esentiale pentru functionarea corecta a site-ului si nu pot fi dezactivate. Nu stocheaza date cu caracter personal identificabile.</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24, fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(139,92,246,.15)" }}>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Cookie</th>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Furnizor</th>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Scop</th>
            <th style={{ textAlign: "left", padding: "10px 8px", color: "#f1f5f9" }}>Durata</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["__cf_bm", "Cloudflare", "Protectie anti-bot, securitate", "30 min"],
            ["cf_clearance", "Cloudflare", "Verificare provocari de securitate", "30 min"],
            ["__cfruid", "Cloudflare", "Identificare sesiune Cloudflare", "Sesiune"],
          ].map(([name, provider, purpose, duration], i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(139,92,246,.05)" }}>
              <td style={{ padding: "8px", color: "#a78bfa", fontFamily: "'Space Mono', monospace", fontSize: 13 }}>{name}</td>
              <td style={{ padding: "8px", color: "#b0bfcc" }}>{provider}</td>
              <td style={{ padding: "8px", color: "#b0bfcc" }}>{purpose}</td>
              <td style={{ padding: "8px", color: "#8896a8" }}>{duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={S.h3}>2.2. Cookie-uri de performanta / analitice</h3>
      <p style={S.p}>In prezent, BrandAlarm <strong style={S.strong}>nu utilizeaza</strong> cookie-uri analitice sau de tracking (Google Analytics, Facebook Pixel etc.). Daca vom implementa astfel de cookie-uri in viitor, vom actualiza prezenta politica si vom solicita consimtamantul dumneavoastra prealabil.</p>

      <h3 style={S.h3}>2.3. Cookie-uri de marketing</h3>
      <p style={S.p}>BrandAlarm <strong style={S.strong}>nu utilizeaza</strong> cookie-uri de marketing sau retargeting.</p>

      <h2 style={S.h2}>3. Cookie-uri de la Terti</h2>
      <p style={S.p}>Site-ul nostru poate incarca resurse de la terti care seteaza propriile cookie-uri:</p>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Cloudflare</strong> — pentru securitate, protectie DDoS si livrare continut (CDN). Cookie-urile Cloudflare sunt strict necesare si nu necesita consimtamant conform Directivei ePrivacy.</li>
        <li style={S.li}><strong style={S.strong}>Google Fonts</strong> — pentru incarcarea fonturilor web. Google poate seta cookie-uri proprii conform <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>Politicii de Confidentialitate Google</a>.</li>
        <li style={S.li}><strong style={S.strong}>Stripe</strong> — doar pe paginile de plata, pentru procesarea securizata a tranzactiilor.</li>
      </ul>

      <h2 style={S.h2}>4. Cum Puteti Gestiona Cookie-urile</h2>
      <p style={S.p}>Puteti controla si/sau sterge cookie-urile dupa preferinte. Majoritatea browserelor va permit sa:</p>
      <ul style={S.ul}>
        <li style={S.li}>Vizualizati cookie-urile stocate si sa le stergeti individual</li>
        <li style={S.li}>Blocati cookie-urile de la terti</li>
        <li style={S.li}>Blocati toate cookie-urile</li>
        <li style={S.li}>Stergeti toate cookie-urile la inchiderea browserului</li>
      </ul>
      <p style={S.p}>Setarile variaza in functie de browser:</p>
      <ul style={S.ul}>
        <li style={S.li}><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>Google Chrome</a></li>
        <li style={S.li}><a href="https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>Mozilla Firefox</a></li>
        <li style={S.li}><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>Safari</a></li>
        <li style={S.li}><a href="https://support.microsoft.com/ro-ro/microsoft-edge/stergerea-cookie-urilor-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>Microsoft Edge</a></li>
      </ul>
      <p style={S.p}><strong style={S.strong}>Atentie:</strong> Dezactivarea cookie-urilor strict necesare poate afecta functionarea corecta a site-ului.</p>

      <h2 style={S.h2}>5. Tehnologii Similare</h2>
      <p style={S.p}>Pe langa cookie-uri, putem utiliza urmatoarele tehnologii:</p>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Local Storage</strong> — pentru stocarea preferintelor de limba (RO/EN) si setarilor de interfata</li>
        <li style={S.li}><strong style={S.strong}>Session Storage</strong> — pentru date temporare in cadrul unei sesiuni de navigare</li>
      </ul>
      <p style={S.p}>Aceste tehnologii functioneaza similar cookie-urilor si sunt supuse acelorasi reguli de consimtamant.</p>

      <h2 style={S.h2}>6. Modificari</h2>
      <p style={S.p}>Prezenta Politica de Cookies poate fi actualizata periodic. Orice modificare semnificativa va fi comunicata prin afisarea versiunii actualizate pe aceasta pagina, cu indicarea datei ultimei actualizari.</p>

      <h2 style={S.h2}>7. Contact</h2>
      <p style={S.p}>Pentru intrebari sau solicitari privind cookie-urile utilizate pe brandalarm.ro, va rugam sa ne contactati prin intermediul Platformei dupa crearea unui cont.</p>
      <p style={S.p}>
        <strong style={S.strong}>Autoritatea competenta:</strong><br />
        ANSPDCP — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>www.dataprotection.ro</a>
      </p>
    </PageLayout>
  );
}
