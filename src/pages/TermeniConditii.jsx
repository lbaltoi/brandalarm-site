import PageLayout from "../components/PageLayout";

const S = { h2: { fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginTop: 40, marginBottom: 12 }, h3: { fontSize: 17, fontWeight: 600, color: "#e2e8f0", marginTop: 28, marginBottom: 8 }, p: { marginBottom: 16 }, ul: { marginBottom: 16, paddingLeft: 24 }, li: { marginBottom: 8 }, strong: { color: "#e2e8f0" }, accent: { color: "#a78bfa" } };

export default function TermeniConditii() {
  return (
    <PageLayout title="Termeni si Conditii">
      <p style={S.p}><em>Ultima actualizare: 1 aprilie 2026</em></p>

      <p style={S.p}>Prezentele Termeni si Conditii (denumite in continuare <strong style={S.strong}>"T&amp;C"</strong>) reglementeaza accesul si utilizarea platformei <strong style={S.strong}>BrandAlarm</strong> (accesibila la adresa <span style={S.accent}>brandalarm.ro</span> si <span style={S.accent}>app.brandalarm.ro</span>), operata de Trademark Alliance SRL.</p>

      <p style={S.p}>Prin accesarea sau utilizarea Platformei, confirmati ca ati citit, inteles si acceptat prezentele T&amp;C in integralitatea lor. Daca nu sunteti de acord cu oricare dintre prevederi, va rugam sa nu utilizati Platforma.</p>

      <h2 style={S.h2}>1. Date de Identificare Furnizor</h2>
      <p style={S.p}>In conformitate cu art. 5 din Legea nr. 365/2002 privind comertul electronic:</p>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Denumire:</strong> Trademark Alliance SRL</li>
        <li style={S.li}><strong style={S.strong}>Sediu social:</strong> Str. Aviator Mircea Zorileanu 43, Sector 1, Bucuresti, Romania</li>
        <li style={S.li}><strong style={S.strong}>CUI:</strong> RO50768537</li>
        <li style={S.li}><strong style={S.strong}>Nr. Registrul Comertului:</strong> J40/24786/2024</li>
      </ul>

      <h2 style={S.h2}>2. Definitii</h2>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>"Platforma"</strong> — aplicatia web BrandAlarm, disponibila la brandalarm.ro si app.brandalarm.ro, inclusiv toate functionalitatile, rapoartele si serviciile asociate.</li>
        <li style={S.li}><strong style={S.strong}>"Utilizator"</strong> — orice persoana fizica sau juridica care acceseaza sau utilizeaza Platforma, indiferent daca are un cont activ sau nu.</li>
        <li style={S.li}><strong style={S.strong}>"Cont"</strong> — contul creat de Utilizator pe Platforma prin furnizarea datelor de identificare si acceptarea prezentelor T&amp;C.</li>
        <li style={S.li}><strong style={S.strong}>"Abonament"</strong> — planul de servicii selectat de Utilizator (Free, Basic, Pro sau Enterprise), care determina functionaltatile disponibile si costurile aferente.</li>
        <li style={S.li}><strong style={S.strong}>"Raport"</strong> — documentul generat automat de Platforma, care contine informatii despre marci, domenii, societati comerciale sau alte date relevante pentru monitorizarea proprietatii intelectuale.</li>
        <li style={S.li}><strong style={S.strong}>"Marca"</strong> — orice semn distinctiv (denumire, logo, element grafic) inregistrat sau in curs de inregistrare la un oficiu de proprietate intelectuala (OSIM, EUIPO, WIPO sau altele).</li>
      </ul>

      <h2 style={S.h2}>3. Descrierea Serviciilor</h2>
      <p style={S.p}>BrandAlarm este o platforma de monitorizare inteligenta a marcilor comerciale, brandurilor si domeniilor internet, care ofera urmatoarele servicii:</p>
      <ul style={S.ul}>
        <li style={S.li}>Monitorizarea marcilor noi depuse la EUIPO, WIPO, OSIM si TMView</li>
        <li style={S.li}>Cautari de similitudini (fonetice, vizuale, conceptuale) in bazele de date de marci</li>
        <li style={S.li}>Monitorizarea domeniilor internet (typosquatting, expirare, disponibilitate)</li>
        <li style={S.li}>Generarea de rapoarte automate cu analiza AI</li>
        <li style={S.li}>Alerte privind expirarea marcilor si termenele de reinnoiri</li>
        <li style={S.li}>Verificari in registrul OSIM si Buletinele Oficiale de Proprietate Industriala (BOPI)</li>
        <li style={S.li}>Extragerea datelor despre societatile comerciale care depun marci noi</li>
        <li style={S.li}>Monitorizarea incalcarilor marcii pe piata online</li>
        <li style={S.li}>Acces la reteaua de avocati parteneri specializati in proprietate intelectuala</li>
      </ul>
      <p style={S.p}><strong style={S.strong}>Important:</strong> Serviciile BrandAlarm au caracter informativ si nu constituie consultanta juridica. Rapoartele generate automat trebuie validate de un specialist in proprietate intelectuala inainte de initierea oricarei actiuni juridice.</p>

      <h2 style={S.h2}>4. Crearea Contului si Eligibilitate</h2>
      <h3 style={S.h3}>4.1. Conditii de eligibilitate</h3>
      <p style={S.p}>Pentru a crea un Cont pe Platforma, trebuie sa indepliniti urmatoarele conditii:</p>
      <ul style={S.ul}>
        <li style={S.li}>Sa aveti varsta minima de 18 ani</li>
        <li style={S.li}>Sa furnizati date de identificare corecte si complete</li>
        <li style={S.li}>Sa acceptati prezentele T&amp;C si Politica de Confidentialitate</li>
      </ul>
      <h3 style={S.h3}>4.2. Responsabilitati Utilizator</h3>
      <p style={S.p}>Utilizatorul este responsabil pentru securitatea credentialelor de acces (email, parola) si pentru toate activitatile desfasurate prin intermediul Contului sau. Orice utilizare neautorizata a Contului trebuie raportata imediat.</p>

      <h2 style={S.h2}>5. Abonamente si Plati</h2>
      <h3 style={S.h3}>5.1. Planuri disponibile</h3>
      <ul style={S.ul}>
        <li style={S.li}><strong style={S.strong}>Free (€0/luna)</strong> — cautare de baza in WIPO, EUIPO, TMView, OSIM. Fara alerte sau monitorizare.</li>
        <li style={S.li}><strong style={S.strong}>Basic (€15/luna/marca)</strong> — 3 interogari/luna, rapoarte AI standard, export PDF, alerte 1 teritoriu, alerte expirare.</li>
        <li style={S.li}><strong style={S.strong}>Pro (€25/luna/marca)</strong> — 5 interogari/luna, rapoarte AI personalizate, notificari real-time, fara limitare teritoriala, benchmarking vs. concurenta.</li>
        <li style={S.li}><strong style={S.strong}>Enterprise (€45/luna)</strong> — 31 interogari/luna, rapoarte juridice + AI, integrare API, 5 ani date istorice, suport dedicat, regex avansat.</li>
      </ul>
      <h3 style={S.h3}>5.2. Facturare</h3>
      <p style={S.p}>Abonamentele se factureaza lunar sau anual, in avans. La facturarea anuala se aplica un discount de 10%. Preturile sunt exprimate in EUR si nu includ TVA (daca este cazul conform legislatiei aplicabile).</p>
      <h3 style={S.h3}>5.3. Metode de plata</h3>
      <p style={S.p}>Platile se proceseaza prin intermediul procesatorului de plati Stripe. Acceptam carduri de credit/debit (Visa, Mastercard). Trademark Alliance SRL nu stocheaza datele cardurilor bancare.</p>
      <h3 style={S.h3}>5.4. Modificarea preturilor</h3>
      <p style={S.p}>Ne rezervam dreptul de a modifica preturile abonamentelor. Orice modificare va fi comunicata cu cel putin 30 de zile inainte de intrarea in vigoare. Abonamentele active la data modificarii isi pastreaza pretul pana la sfarsitul perioadei de facturare curente.</p>

      <h2 style={S.h2}>6. Dreptul de Retragere</h2>
      <p style={S.p}>In conformitate cu OUG nr. 34/2014 privind drepturile consumatorilor:</p>
      <ul style={S.ul}>
        <li style={S.li}>Aveti dreptul de a va retrage din contract in termen de <strong style={S.strong}>14 zile calendaristice</strong> de la data achizitiei, fara a fi necesara invocarea vreunui motiv.</li>
        <li style={S.li}>Pentru exercitarea dreptului de retragere, va rugam sa ne contactati prin intermediul Platformei (sectiunea Contul Meu).</li>
        <li style={S.li}>Rambursarea sumelor platite se va efectua in termen de maximum 14 zile de la primirea solicitarii de retragere, utilizand aceeasi metoda de plata.</li>
        <li style={S.li}><strong style={S.strong}>Exceptie:</strong> Daca ati solicitat in mod expres inceperea prestarii serviciului in perioada de retragere si serviciul a fost prestat integral, dreptul de retragere nu mai poate fi exercitat (art. 16 lit. a din OUG 34/2014).</li>
      </ul>

      <h2 style={S.h2}>7. Utilizare Acceptabila</h2>
      <p style={S.p}>Utilizatorul se obliga sa nu:</p>
      <ul style={S.ul}>
        <li style={S.li}>Utilizeze Platforma in scopuri ilegale sau neautorizate</li>
        <li style={S.li}>Efectueze scraping, data mining sau extragere automatizata de date din Platforma</li>
        <li style={S.li}>Revanda, sublicentieze sau redistribuie datele obtinute prin intermediul Platformei</li>
        <li style={S.li}>Incerce sa obtina acces neautorizat la sistemele sau datele Platformei</li>
        <li style={S.li}>Utilizeze Platforma intr-un mod care ar putea afecta functionarea normala a acesteia</li>
        <li style={S.li}>Creeze conturi multiple pentru a eluda limitarile planului de abonament</li>
      </ul>
      <p style={S.p}>Incalcarea acestor reguli poate duce la suspendarea sau inchiderea Contului, fara preaviz si fara drept de rambursare.</p>

      <h2 style={S.h2}>8. Proprietate Intelectuala</h2>
      <h3 style={S.h3}>8.1. Drepturile Trademark Alliance SRL</h3>
      <p style={S.p}>Platforma BrandAlarm, inclusiv dar fara a se limita la: codul sursa, algoritmii, interfata grafica, textele, graficele, logo-ul si denumirea "BrandAlarm" sunt proprietatea exclusiva a Trademark Alliance SRL si sunt protejate de legislatia privind drepturile de autor si proprietatea intelectuala.</p>
      <h3 style={S.h3}>8.2. Drepturile Utilizatorului</h3>
      <p style={S.p}>Rapoartele generate prin intermediul Platformei pot fi utilizate de catre Utilizator in scopuri proprii, inclusiv pentru prezentarea catre clienti (in cazul firmelor de avocatura). Utilizatorul nu dobandeste niciun drept de proprietate intelectuala asupra Platformei.</p>

      <h2 style={S.h2}>9. Limitarea Raspunderii</h2>
      <ul style={S.ul}>
        <li style={S.li}>Serviciile BrandAlarm au caracter <strong style={S.strong}>strict informativ</strong> si nu constituie consultanta juridica.</li>
        <li style={S.li}>Scorurile de similitudine sunt calculate algoritmic si pot diferi de evaluarea oficiala a oficiilor de marci (EUIPO, OSIM).</li>
        <li style={S.li}>Trademark Alliance SRL nu garanteaza acuratetea, completitudinea sau actualitatea datelor furnizate de sursele externe (EUIPO, WIPO, OSIM, TMView).</li>
        <li style={S.li}>Utilizatorul este responsabil pentru validarea informatiilor obtinute prin Platforma cu un consilier juridic specializat inainte de a lua orice decizie sau actiune juridica.</li>
        <li style={S.li}>Trademark Alliance SRL nu raspunde pentru daunele directe sau indirecte rezultate din utilizarea sau imposibilitatea utilizarii Platformei, inclusiv pierderea termenelor de opozitie.</li>
        <li style={S.li}>Raspunderea maxima a Trademark Alliance SRL nu va depasi valoarea abonamentului platit de Utilizator in ultimele 12 luni.</li>
      </ul>

      <h2 style={S.h2}>10. Protectia Datelor cu Caracter Personal</h2>
      <p style={S.p}>Prelucrarea datelor cu caracter personal se efectueaza in conformitate cu Regulamentul (UE) 2016/679 (GDPR) si cu Legea nr. 190/2018. Pentru detalii complete privind colectarea, prelucrarea si protectia datelor personale, va rugam sa consultati <a href="/confidentialitate" style={{ color: "#a78bfa" }}>Politica de Confidentialitate</a>.</p>

      <h2 style={S.h2}>11. Durata si Incetare</h2>
      <ul style={S.ul}>
        <li style={S.li}>Contul Free este valabil pe durata nedeterminata.</li>
        <li style={S.li}>Abonamentele platite se reinnoiesc automat la sfarsitul fiecarei perioade de facturare, pana la anulare.</li>
        <li style={S.li}>Utilizatorul poate anula abonamentul oricand din sectiunea Contul Meu. Anularea produce efecte la sfarsitul perioadei de facturare curente.</li>
        <li style={S.li}>Trademark Alliance SRL poate suspenda sau inchide un Cont in cazul incalcarii prezentelor T&amp;C, cu notificare prealabila de 7 zile (cu exceptia cazurilor de urgenta).</li>
      </ul>

      <h2 style={S.h2}>12. Legislatie Aplicabila si Solutionarea Litigiilor</h2>
      <ul style={S.ul}>
        <li style={S.li}>Prezentele T&amp;C sunt guvernate de legislatia romana.</li>
        <li style={S.li}>Orice litigiu va fi solutionat pe cale amiabila. In cazul in care nu se ajunge la un acord, litigiile vor fi deferite instantelor competente din Bucuresti, Romania.</li>
        <li style={S.li}>Consumatorii pot apela la mecanismele de solutionare alternativa a litigiilor:</li>
      </ul>
      <p style={S.p}>
        <strong style={S.strong}>ANPC:</strong> <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>anpc.ro</a><br />
        <strong style={S.strong}>SAL:</strong> <a href="https://sal.anpc.ro" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>sal.anpc.ro</a><br />
        <strong style={S.strong}>Platforma ODR UE:</strong> <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>ec.europa.eu/consumers/odr</a>
      </p>

      <h2 style={S.h2}>13. Modificarea Termenilor si Conditiilor</h2>
      <p style={S.p}>Trademark Alliance SRL isi rezerva dreptul de a modifica prezentele T&amp;C. Orice modificare va fi comunicata Utilizatorilor cu cel putin 30 de zile inainte de intrarea in vigoare, prin email si/sau prin notificare pe Platforma. Continuarea utilizarii Platformei dupa intrarea in vigoare a modificarilor constituie acceptarea noilor T&amp;C.</p>

      <h2 style={S.h2}>14. Dispozitii Finale</h2>
      <ul style={S.ul}>
        <li style={S.li}>Daca oricare dintre clauzele prezentelor T&amp;C este declarata nula sau inaplicabila, celelalte clauze raman in vigoare.</li>
        <li style={S.li}>Neexercitarea de catre Trademark Alliance SRL a unui drept prevazut in prezentele T&amp;C nu constituie o renuntare la acel drept.</li>
        <li style={S.li}>Prezentele T&amp;C constituie acordul integral intre parti cu privire la utilizarea Platformei.</li>
      </ul>
    </PageLayout>
  );
}
