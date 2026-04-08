// Service pages content - bilingual RO/EN
// Each service has a unique key. Routes:
// RO: /monitorizare-marci, /cautare-similitudini, /monitorizare-domenii,
//     /rapoarte-ai-marci, /opozitie-marca-euipo-osim, /alerte-expirare-marci
// EN: /en/trademark-monitoring, /en/similarity-search, /en/domain-monitoring,
//     /en/ai-trademark-reports, /en/trademark-opposition, /en/trademark-expiry-alerts

export const SERVICES = {
  "trademark-monitoring": {
    roPath: "/monitorizare-marci",
    enPath: "/en/trademark-monitoring",
    ro: {
      seoTitle: "Monitorizare Marci 24/7 — WIPO, EUIPO, OSIM, TMView | BrandAlarm",
      seoDesc: "Monitorizare automata a marcilor comerciale in cele mai mari registre IP. Alerte instant pentru conflicte. De la €15/luna.",
      eyebrow: "Serviciu",
      h1: "Monitorizare marci comerciale 24/7",
      tagline: "Detectie automata a marcilor noi si alerte instant pentru conflicte cu marca ta. Acoperire completa: WIPO, EUIPO, OSIM, TMView.",
      benefits: [
        { i: "🌍", t: "Acoperire globala", d: "Scanare zilnica in 70+ baze de date IP din peste 130 de tari, prin EUIPO, WIPO, OSIM si TMView." },
        { i: "⚡", t: "Alerte instant", d: "Notificari in maximum 24 de ore de la publicarea unei marci noi cu potential conflict." },
        { i: "🎯", t: "Targeting precis", d: "Configurare pe clase Nice, teritorii si tipuri de marci. Doar ce te intereseaza, fara zgomot." },
        { i: "📊", t: "Scoring inteligent", d: "AI-ul nostru evalueaza nivelul de risc al fiecarei marci similare descoperite." },
        { i: "📑", t: "Rapoarte detaliate", d: "Documente PDF gata de prezentat catre avocat, client sau in dosarul de opozitie." },
        { i: "⏰", t: "Termene urmarite", d: "Calculam automat termenul de opozitie ramas (3 luni EUIPO / 2 luni OSIM)." }
      ],
      steps: [
        { n: "01", t: "Adauga marca", d: "Introduci marca, clasele Nice si teritoriile relevante." },
        { n: "02", t: "Configureaza alertele", d: "Alegi sensibilitatea, frecventa si canalele de notificare." },
        { n: "03", t: "Monitorizam non-stop", d: "Scanam zilnic toate sursele oficiale si detectam similitudini." },
        { n: "04", t: "Reactionezi la timp", d: "Primesti raportul, evaluezi conflictul, decizi pasii urmatori." }
      ],
      audiences: [
        { t: "SMB-uri si startup-uri", d: "Companii care depun primele marci si au nevoie de protectie automata fara avocat permanent." },
        { t: "Avocati IP si cabinete juridice", d: "Firme care monitorizeaza marcile clientilor lor si vor o platforma scalabila." },
        { t: "Branduri D2C si retaileri", d: "Companii cu portofolii mari, sensibile la contrafacere si imitatie." }
      ],
      ctaTitle: "Protejeaza-ti marca acum",
      ctaText: "Incepe gratuit. Adauga prima marca in mai putin de 5 minute.",
      related: ["similarity-search", "ai-trademark-reports", "trademark-opposition"]
    },
    en: {
      seoTitle: "24/7 Trademark Monitoring — WIPO, EUIPO, OSIM, TMView | BrandAlarm",
      seoDesc: "Automated trademark monitoring across the largest IP registries. Instant alerts for conflicts. From €15/month.",
      eyebrow: "Service",
      h1: "24/7 Trademark Monitoring",
      tagline: "Automatic detection of new trademark filings and instant alerts for conflicts with your mark. Full coverage: WIPO, EUIPO, OSIM, TMView.",
      benefits: [
        { i: "🌍", t: "Global coverage", d: "Daily scans across 70+ IP databases in over 130 countries, via EUIPO, WIPO, OSIM and TMView." },
        { i: "⚡", t: "Instant alerts", d: "Notifications within 24 hours of a new conflicting mark being published." },
        { i: "🎯", t: "Precise targeting", d: "Configure by Nice classes, territories and trademark types. Only what matters, no noise." },
        { i: "📊", t: "Intelligent scoring", d: "Our AI evaluates the risk level of each similar mark discovered." },
        { i: "📑", t: "Detailed reports", d: "PDF documents ready to present to lawyers, clients, or include in opposition files." },
        { i: "⏰", t: "Deadline tracking", d: "We automatically calculate remaining opposition deadlines (3 months EUIPO / 2 months OSIM)." }
      ],
      steps: [
        { n: "01", t: "Add your trademark", d: "Enter your mark, Nice classes and relevant territories." },
        { n: "02", t: "Configure alerts", d: "Choose sensitivity, frequency and notification channels." },
        { n: "03", t: "We monitor 24/7", d: "We scan all official sources daily and detect similarities." },
        { n: "04", t: "React in time", d: "Receive the report, evaluate the conflict, decide next steps." }
      ],
      audiences: [
        { t: "SMBs and startups", d: "Companies filing their first trademarks who need automatic protection without a permanent lawyer." },
        { t: "IP attorneys and law firms", d: "Firms monitoring their clients' trademarks who need a scalable platform." },
        { t: "D2C brands and retailers", d: "Companies with large portfolios, sensitive to counterfeiting and imitation." }
      ],
      ctaTitle: "Protect your brand now",
      ctaText: "Start free. Add your first trademark in less than 5 minutes.",
      related: ["similarity-search", "ai-trademark-reports", "trademark-opposition"]
    }
  },

  "similarity-search": {
    roPath: "/cautare-similitudini",
    enPath: "/en/similarity-search",
    ro: {
      seoTitle: "Cautare Similitudini Marci — Fonetice, Vizuale, Regex | BrandAlarm",
      seoDesc: "Detectare conflicte intre marci prin cautari fonetice, fuzzy si regex avansate. Acoperire EUIPO, WIPO, OSIM. De la €15/luna.",
      eyebrow: "Serviciu",
      h1: "Cautare similitudini marci comerciale",
      tagline: "Detectie precisa a conflictelor potentiale prin algoritmi de cautare fonetica, fuzzy si regex avansat. Identifici riscurile inainte sa devina probleme.",
      benefits: [
        { i: "🔊", t: "Cautare fonetica", d: "Identifica marci care suna similar, indiferent de scriere. Esential pentru conflicte multilingve." },
        { i: "🔤", t: "Cautare fuzzy", d: "Detecteaza variatiile de scriere, typo-urile si modificarile minore (litera adaugata sau lipsa)." },
        { i: "⚙️", t: "Regex avansat", d: "Pentru EUIPO si WIPO, suportam expresii regulate complete pentru cautari profesioniste." },
        { i: "🎨", t: "Cautare conceptuala", d: "Algoritmul AI intelege similitudini de inteles, nu doar de scriere." },
        { i: "📋", t: "Filtrare pe clase Nice", d: "Limiteaza cautarile la clasele relevante pentru a reduce zgomotul." },
        { i: "💾", t: "Istoric cautari", d: "Toate cautarile sunt salvate. Repetabile, exportabile, comparabile in timp." }
      ],
      steps: [
        { n: "01", t: "Introdu marca", d: "Numele marcii, varianta de scriere si clasele relevante." },
        { n: "02", t: "Selecteaza tipul de cautare", d: "Fonetica, fuzzy, regex sau combinatie." },
        { n: "03", t: "Vezi rezultatele", d: "Marci similare ordonate dupa scor de similitudine si risc." },
        { n: "04", t: "Exporta sau monitorizeaza", d: "Salvezi raportul PDF sau adaugi marca la monitorizare continua." }
      ],
      audiences: [
        { t: "Inainte de inregistrare", d: "Verifici disponibilitatea unei marci noi inainte sa platesti taxele oficiale." },
        { t: "Avocati de IP", d: "Faci cautari de risc pentru clienti cu rapoarte exportabile, gata de prezentat." },
        { t: "Cercetare due diligence", d: "M&A si achizitii — verifici portofoliul de marci al companiilor tinta." }
      ],
      ctaTitle: "Incepe o cautare acum",
      ctaText: "Cont gratuit. Prima cautare in 30 de secunde.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-opposition"]
    },
    en: {
      seoTitle: "Trademark Similarity Search — Phonetic, Visual, Regex | BrandAlarm",
      seoDesc: "Conflict detection between trademarks through advanced phonetic, fuzzy and regex searches. EUIPO, WIPO, OSIM coverage. From €15/month.",
      eyebrow: "Service",
      h1: "Trademark similarity search",
      tagline: "Precise detection of potential conflicts through phonetic, fuzzy and advanced regex algorithms. Identify risks before they become problems.",
      benefits: [
        { i: "🔊", t: "Phonetic search", d: "Identify marks that sound similar regardless of spelling. Essential for multilingual conflicts." },
        { i: "🔤", t: "Fuzzy search", d: "Detect spelling variations, typos and minor modifications (added or missing letters)." },
        { i: "⚙️", t: "Advanced regex", d: "Full regular expressions support for EUIPO and WIPO professional searches." },
        { i: "🎨", t: "Conceptual search", d: "Our AI understands meaning similarities, not just spelling." },
        { i: "📋", t: "Nice class filtering", d: "Limit searches to relevant classes to reduce noise." },
        { i: "💾", t: "Search history", d: "All searches are saved. Repeatable, exportable, comparable over time." }
      ],
      steps: [
        { n: "01", t: "Enter the trademark", d: "Mark name, spelling variant, and relevant classes." },
        { n: "02", t: "Select search type", d: "Phonetic, fuzzy, regex, or a combination." },
        { n: "03", t: "View results", d: "Similar marks ranked by similarity score and risk level." },
        { n: "04", t: "Export or monitor", d: "Save PDF report or add the mark to continuous monitoring." }
      ],
      audiences: [
        { t: "Before registration", d: "Verify the availability of a new trademark before paying official fees." },
        { t: "IP attorneys", d: "Run risk searches for clients with exportable, presentation-ready reports." },
        { t: "Due diligence research", d: "M&A and acquisitions — verify the trademark portfolio of target companies." }
      ],
      ctaTitle: "Start a search now",
      ctaText: "Free account. First search in 30 seconds.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-opposition"]
    }
  },

  "domain-monitoring": {
    roPath: "/monitorizare-domenii",
    enPath: "/en/domain-monitoring",
    ro: {
      seoTitle: "Monitorizare Domenii — Typosquatting, Phishing, Expirare | BrandAlarm",
      seoDesc: "Protectie completa pentru domeniile brandului tau. Detectie typosquatting, alerte expirare, monitorizare WHOIS. De la €15/luna.",
      eyebrow: "Serviciu",
      h1: "Monitorizare domenii si protectie anti-typosquatting",
      tagline: "Detecteaza domeniile care imita brandul tau inainte sa fie folosite pentru phishing, frauda sau redirectionare. 3.4 miliarde emailuri phishing pe zi — fii pregatit.",
      benefits: [
        { i: "🎯", t: "Detectie typosquatting", d: "Algoritmul nostru genereaza si verifica toate variatiile probabile (litera adaugata, schimbata, omisă)." },
        { i: "📅", t: "Alerte expirare", d: "Notificari 90, 60, 30 si 7 zile inainte de expirare. Nu pierzi niciodata un domeniu strategic." },
        { i: "🔍", t: "Monitorizare WHOIS", d: "Detectam schimbarile de proprietar, registrar sau date de contact." },
        { i: "🌐", t: "Toate TLD-urile", d: ".ro, .com, .eu, .org, .net si peste 1500 de extensii noi (.shop, .app, .ai, etc.)." },
        { i: "🛡️", t: "Detectie phishing", d: "Identificam domeniile noi care contin brandul tau si scaneaza-le pentru semne de phishing." },
        { i: "📊", t: "Raport disponibilitate", d: "Vezi care variatii ale brandului tau sunt libere si le poti achizitiona preventiv." }
      ],
      steps: [
        { n: "01", t: "Adauga brandul", d: "Introduci numele brandului si TLD-urile pe care le folosesti." },
        { n: "02", t: "Generam variatiile", d: "Algoritmul creeaza zeci/sute de variatii probabile." },
        { n: "03", t: "Scanam continuu", d: "Verificam zilnic disponibilitatea, WHOIS si activitatea fiecareia." },
        { n: "04", t: "Actionezi", d: "Cand detectam typosquatting, primesti alerta cu recomandari." }
      ],
      audiences: [
        { t: "Branduri online si e-commerce", d: "Companii care vand online si pot suferi pierderi din traffic deviat catre domenii frauduloase." },
        { t: "Banci si fintech", d: "Industrii puternic vizate de phishing — protectia clientilor finali e o obligatie de reglementare." },
        { t: "Companii cu trafic mare", d: "Brandurile cu vizibilitate ridicata sunt cele mai vulnerabile la typosquatting." }
      ],
      ctaTitle: "Verifica-ti domeniile acum",
      ctaText: "Adauga primul brand gratuit si vezi imediat variatiile compromise.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-expiry-alerts"]
    },
    en: {
      seoTitle: "Domain Monitoring — Typosquatting, Phishing, Expiry | BrandAlarm",
      seoDesc: "Complete protection for your brand domains. Typosquatting detection, expiry alerts, WHOIS monitoring. From €15/month.",
      eyebrow: "Service",
      h1: "Domain monitoring & anti-typosquatting protection",
      tagline: "Detect domains imitating your brand before they're used for phishing, fraud or redirection. 3.4 billion phishing emails per day — be ready.",
      benefits: [
        { i: "🎯", t: "Typosquatting detection", d: "Our algorithm generates and checks all probable variations (added, swapped or omitted letters)." },
        { i: "📅", t: "Expiry alerts", d: "Notifications 90, 60, 30 and 7 days before expiry. Never lose a strategic domain." },
        { i: "🔍", t: "WHOIS monitoring", d: "We detect changes to owner, registrar or contact details." },
        { i: "🌐", t: "All TLDs", d: ".ro, .com, .eu, .org, .net and over 1500 new extensions (.shop, .app, .ai, etc.)." },
        { i: "🛡️", t: "Phishing detection", d: "We identify new domains containing your brand and scan them for phishing signs." },
        { i: "📊", t: "Availability report", d: "See which variations of your brand are free so you can register them preventively." }
      ],
      steps: [
        { n: "01", t: "Add your brand", d: "Enter the brand name and TLDs you use." },
        { n: "02", t: "We generate variations", d: "The algorithm creates dozens/hundreds of probable variations." },
        { n: "03", t: "We scan continuously", d: "Daily checks of availability, WHOIS and activity for each one." },
        { n: "04", t: "You act", d: "When we detect typosquatting, you get an alert with recommendations." }
      ],
      audiences: [
        { t: "Online brands and e-commerce", d: "Companies selling online that can suffer losses from traffic diverted to fraudulent domains." },
        { t: "Banks and fintech", d: "Industries heavily targeted by phishing — end-customer protection is a regulatory obligation." },
        { t: "High-traffic companies", d: "Brands with high visibility are most vulnerable to typosquatting." }
      ],
      ctaTitle: "Check your domains now",
      ctaText: "Add your first brand for free and immediately see compromised variations.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-expiry-alerts"]
    }
  },

  "ai-trademark-reports": {
    roPath: "/rapoarte-ai-marci",
    enPath: "/en/ai-trademark-reports",
    ro: {
      seoTitle: "Rapoarte AI Marci — Analiza Juridica Automata | BrandAlarm",
      seoDesc: "Rapoarte AI cu reasoning juridic, scoring de similitudine si recomandari concrete. Bazate pe LLM-uri specializate in IP. De la €15/luna.",
      eyebrow: "Serviciu",
      h1: "Rapoarte AI cu analiza juridica automata",
      tagline: "Mai mult decat o lista de marci similare. Primesti context juridic, scoring de risc si recomandari concrete generate de modele AI specializate.",
      benefits: [
        { i: "🤖", t: "Reasoning AI", d: "Modele LLM antrenate pe legislatia si jurisprudenta de proprietate intelectuala UE/RO." },
        { i: "📊", t: "Scoring de risc", d: "Fiecare conflict primeste un scor 1-10 cu justificare detaliata." },
        { i: "📝", t: "Argumentare juridica", d: "Rapoartele explica DE CE doua marci sunt sau nu in conflict, nu doar CA sunt similare." },
        { i: "📑", t: "Export PDF profesional", d: "Documente gata pentru a fi prezentate avocatului, clientului sau in dosarul de opozitie." },
        { i: "🌐", t: "Multilingv", d: "Rapoartele pot fi generate in romana, engleza, franceza, germana sau italiana." },
        { i: "♻️", t: "Re-generare la cerere", d: "Daca apar date noi, regenerati raportul oricand cu informatiile actualizate." }
      ],
      steps: [
        { n: "01", t: "Selecteaza marca", d: "Alegi marca pe care vrei sa o analizezi sau un conflict detectat de monitorizare." },
        { n: "02", t: "Configurezi raportul", d: "Limba, profunzime, focus juridic specific (similitudini, clase, teritorii)." },
        { n: "03", t: "AI-ul lucreaza", d: "Genereaza analiza in 30-60 de secunde, citand sursele oficiale relevante." },
        { n: "04", t: "Primesti raportul", d: "PDF profesional + acces in platforma pentru re-generari sau modificari." }
      ],
      audiences: [
        { t: "Avocati si paralegali IP", d: "Economisesti ore intregi de cercetare. Folosesti raportul ca punct de start pentru analiza ta." },
        { t: "Manageri de brand", d: "Intelegi rapid daca un conflict e serios sau doar zgomot, fara sa astepti consultatie." },
        { t: "Companii fara avocat intern", d: "Primesti analiza la nivel profesional fara costul unui retainer lunar." }
      ],
      ctaTitle: "Genereaza primul raport AI",
      ctaText: "Cont gratuit. Vezi un raport demo in mai putin de un minut.",
      related: ["trademark-monitoring", "similarity-search", "trademark-opposition"]
    },
    en: {
      seoTitle: "AI Trademark Reports — Automated Legal Analysis | BrandAlarm",
      seoDesc: "AI reports with legal reasoning, similarity scoring and concrete recommendations. Powered by IP-specialized LLMs. From €15/month.",
      eyebrow: "Service",
      h1: "AI trademark reports with legal analysis",
      tagline: "More than a list of similar marks. You get legal context, risk scoring and concrete recommendations generated by specialized AI models.",
      benefits: [
        { i: "🤖", t: "AI reasoning", d: "LLM models trained on EU/RO intellectual property legislation and case law." },
        { i: "📊", t: "Risk scoring", d: "Each conflict gets a 1-10 score with detailed justification." },
        { i: "📝", t: "Legal reasoning", d: "Reports explain WHY two marks are or aren't in conflict, not just THAT they're similar." },
        { i: "📑", t: "Professional PDF export", d: "Documents ready to present to lawyers, clients, or include in opposition files." },
        { i: "🌐", t: "Multilingual", d: "Reports can be generated in Romanian, English, French, German or Italian." },
        { i: "♻️", t: "On-demand regeneration", d: "If new data appears, regenerate the report anytime with updated information." }
      ],
      steps: [
        { n: "01", t: "Select the trademark", d: "Choose the mark to analyze or a conflict detected by monitoring." },
        { n: "02", t: "Configure the report", d: "Language, depth, specific legal focus (similarities, classes, territories)." },
        { n: "03", t: "AI works", d: "Generates the analysis in 30-60 seconds, citing relevant official sources." },
        { n: "04", t: "Receive the report", d: "Professional PDF + platform access for regenerations or modifications." }
      ],
      audiences: [
        { t: "IP attorneys and paralegals", d: "Save hours of research. Use the report as a starting point for your analysis." },
        { t: "Brand managers", d: "Quickly understand if a conflict is serious or just noise, without waiting for legal consultation." },
        { t: "Companies without in-house counsel", d: "Get professional-level analysis without the cost of a monthly retainer." }
      ],
      ctaTitle: "Generate your first AI report",
      ctaText: "Free account. See a demo report in less than a minute.",
      related: ["trademark-monitoring", "similarity-search", "trademark-opposition"]
    }
  },

  "trademark-opposition": {
    roPath: "/opozitie-marca-euipo-osim",
    enPath: "/en/trademark-opposition",
    ro: {
      seoTitle: "Opozitie Marca EUIPO si OSIM — Termene, Procedura, Costuri | BrandAlarm",
      seoDesc: "Tot ce trebuie sa stii despre procedura de opozitie EUIPO (3 luni) si OSIM (2 luni). Detectie conflicte + retea de avocati parteneri.",
      eyebrow: "Serviciu",
      h1: "Opozitie marca EUIPO si OSIM",
      tagline: "Termenele de opozitie sunt stricte si neprelungibile. Iti oferim detectia automata a conflictelor + acces direct la avocati IP specializati pentru depunere.",
      benefits: [
        { i: "⏰", t: "Detectie cu timp de reactie", d: "Te alertam imediat ce o marca conflictuala e publicata. Ai timp suficient sa pregatesti opozitia." },
        { i: "📋", t: "Calcul termene", d: "Calculam automat data limita exacta (3 luni EUIPO din publicare, 2 luni OSIM din BOPI)." },
        { i: "📊", t: "Evaluare sanse", d: "AI-ul nostru estimeaza probabilitatea de succes pe baza similitudinilor si jurisprudentei." },
        { i: "📑", t: "Pregatire dosar", d: "Generam un raport pre-opozitie cu argumentele juridice principale, gata pentru avocat." },
        { i: "⚖️", t: "Avocat partener", d: "Te conectam la un avocat IP specializat din reteaua noastra pentru depunere si reprezentare." },
        { i: "💼", t: "Costuri transparente", d: "Tarife fixe negociate cu avocatii parteneri. Nu mai cauti pe Google si nu te tocmesti." }
      ],
      steps: [
        { n: "01", t: "Detectam conflictul", d: "Sistemul nostru identifica o marca noua care intra in conflict cu a ta." },
        { n: "02", t: "Primesti raportul", d: "Analiza completa cu termenul ramas, scoring de risc si recomandari." },
        { n: "03", t: "Decizi", d: "Singur sau cu avocatul partener decizi daca depui opozitie sau nu." },
        { n: "04", t: "Avocatul depune", d: "Daca alegi sa actionezi, avocatul partener depune opozitia in termen." }
      ],
      audiences: [
        { t: "Detinatori de marci EUIPO", d: "Pentru cei care si-au inregistrat marca la nivel UE si vor protectie activa pentru toate cele 27 de state." },
        { t: "Detinatori de marci OSIM", d: "Pentru cei cu marci nationale RO. Termenul OSIM e mai scurt — automatizarea e critica." },
        { t: "Avocati care reprezinta clienti", d: "Cabinete care vor sa-si scaleze practica fara sa angajeze paralegal full-time pentru monitorizare." }
      ],
      ctaTitle: "Activeaza protectia anti-opozitie",
      ctaText: "Cont gratuit + acces la reteaua de avocati. Configurare in 5 minute.",
      related: ["trademark-monitoring", "similarity-search", "ai-trademark-reports"]
    },
    en: {
      seoTitle: "Trademark Opposition EUIPO & OSIM — Deadlines, Procedure, Costs | BrandAlarm",
      seoDesc: "Everything you need to know about EUIPO (3 months) and OSIM (2 months) opposition procedures. Conflict detection + partner attorney network.",
      eyebrow: "Service",
      h1: "Trademark opposition EUIPO & OSIM",
      tagline: "Opposition deadlines are strict and non-extendable. We offer automatic conflict detection + direct access to specialized IP attorneys for filing.",
      benefits: [
        { i: "⏰", t: "Detection with reaction time", d: "We alert you immediately when a conflicting mark is published. Plenty of time to prepare opposition." },
        { i: "📋", t: "Deadline calculation", d: "We automatically calculate the exact deadline (3 months EUIPO from publication, 2 months OSIM from BOPI)." },
        { i: "📊", t: "Success likelihood", d: "Our AI estimates the probability of success based on similarities and case law." },
        { i: "📑", t: "Case file preparation", d: "We generate a pre-opposition report with the main legal arguments, ready for your lawyer." },
        { i: "⚖️", t: "Partner attorney", d: "We connect you to a specialized IP attorney from our network for filing and representation." },
        { i: "💼", t: "Transparent costs", d: "Fixed fees negotiated with partner attorneys. No more Google searches and haggling." }
      ],
      steps: [
        { n: "01", t: "We detect the conflict", d: "Our system identifies a new mark that conflicts with yours." },
        { n: "02", t: "You receive the report", d: "Full analysis with remaining deadline, risk scoring and recommendations." },
        { n: "03", t: "You decide", d: "Alone or with the partner attorney, you decide whether to file or not." },
        { n: "04", t: "Attorney files", d: "If you choose to act, the partner attorney files the opposition within the deadline." }
      ],
      audiences: [
        { t: "EUIPO trademark holders", d: "For those who registered their mark at EU level and want active protection across all 27 member states." },
        { t: "OSIM trademark holders", d: "For those with Romanian national marks. OSIM's deadline is shorter — automation is critical." },
        { t: "Attorneys representing clients", d: "Law firms looking to scale their practice without hiring a full-time paralegal for monitoring." }
      ],
      ctaTitle: "Activate anti-opposition protection",
      ctaText: "Free account + attorney network access. Setup in 5 minutes.",
      related: ["trademark-monitoring", "similarity-search", "ai-trademark-reports"]
    }
  },

  "trademark-expiry-alerts": {
    roPath: "/alerte-expirare-marci",
    enPath: "/en/trademark-expiry-alerts",
    ro: {
      seoTitle: "Alerte Expirare Marci — Reinnoiri EUIPO, OSIM, WIPO | BrandAlarm",
      seoDesc: "Notificari automate cu 6, 3 si 1 luna inainte de expirarea marcilor. Niciodata nu mai pierzi termenul de reinnoire. De la €15/luna.",
      eyebrow: "Serviciu",
      h1: "Alerte expirare marci si reinnoiri automate",
      tagline: "Marcile expira la 10 ani. Reinnoirea cere actiune in timp util. Te alertam din timp si te conectam cu avocatul partener pentru reinnoire.",
      benefits: [
        { i: "📅", t: "Notificari multiple", d: "Alerte cu 6, 3, 1 luna si 14 zile inainte de expirare. Imposibil de uitat." },
        { i: "🌍", t: "Toate teritoriile", d: "Urmarim expirarile in EUIPO, OSIM, WIPO Madrid si oficiile nationale ale celor mai mari piete UE." },
        { i: "📊", t: "Vedere de portofoliu", d: "Dashboard cu toate marcile tale ordonate dupa data de expirare. Planifici bugetul anual." },
        { i: "💼", t: "Calcul taxe", d: "Estimari de costuri pentru reinnoire (taxa oficiala + onorariu avocat) per teritoriu." },
        { i: "⚖️", t: "Reinnoire prin partener", d: "Conectare directa cu avocat IP din reteaua noastra pentru depunerea reinnoirii." },
        { i: "📝", t: "Istoric complet", d: "Toate reinnoirile facute, datele de expirare urmatoare, statusul fiecarei marci." }
      ],
      steps: [
        { n: "01", t: "Importi marcile", d: "Manual sau automat, importam toate marcile tale active." },
        { n: "02", t: "Stabilim alertele", d: "Configurezi cu cati zile inainte vrei sa primesti notificarea." },
        { n: "03", t: "Te alertam", d: "Email + dashboard cu detaliile complete ale marcii care expira." },
        { n: "04", t: "Reinnoiesti", d: "Direct sau prin avocatul partener, in deplina liniste." }
      ],
      audiences: [
        { t: "Companii cu portofolii mari", d: "Pentru cei care au zeci sau sute de marci si nu pot urmari manual fiecare data." },
        { t: "SMB-uri", d: "Pentru intreprinderile mici care nu au paralegal intern dar tin la marca lor." },
        { t: "Cabinete de avocatura", d: "Pentru firmele care gestioneaza portofoliile mai multor clienti — reduci riscul de malpraxis." }
      ],
      ctaTitle: "Nu mai uita niciodata o reinnoire",
      ctaText: "Cont gratuit. Adauga prima marca si vezi imediat data de expirare.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-opposition"]
    },
    en: {
      seoTitle: "Trademark Expiry Alerts — EUIPO, OSIM, WIPO Renewals | BrandAlarm",
      seoDesc: "Automatic notifications 6, 3 and 1 months before trademark expiry. Never miss a renewal deadline again. From €15/month.",
      eyebrow: "Service",
      h1: "Trademark expiry alerts & automated renewals",
      tagline: "Trademarks expire every 10 years. Renewal requires timely action. We alert you in advance and connect you with a partner attorney for renewal.",
      benefits: [
        { i: "📅", t: "Multiple notifications", d: "Alerts 6, 3, 1 months and 14 days before expiry. Impossible to forget." },
        { i: "🌍", t: "All territories", d: "We track expirations at EUIPO, OSIM, WIPO Madrid and the largest EU national offices." },
        { i: "📊", t: "Portfolio view", d: "Dashboard with all your trademarks ordered by expiry date. Plan your annual budget." },
        { i: "💼", t: "Fee calculation", d: "Cost estimates for renewal (official fee + attorney fee) per territory." },
        { i: "⚖️", t: "Renewal via partner", d: "Direct connection with an IP attorney from our network for filing the renewal." },
        { i: "📝", t: "Complete history", d: "All renewals made, next expiry dates, status of each trademark." }
      ],
      steps: [
        { n: "01", t: "Import trademarks", d: "Manually or automatically, we import all your active trademarks." },
        { n: "02", t: "Set alerts", d: "Configure how many days in advance you want to receive notifications." },
        { n: "03", t: "We alert you", d: "Email + dashboard with full details of the expiring trademark." },
        { n: "04", t: "You renew", d: "Directly or through the partner attorney, with complete peace of mind." }
      ],
      audiences: [
        { t: "Companies with large portfolios", d: "For those with dozens or hundreds of trademarks who can't manually track each date." },
        { t: "SMBs", d: "For small businesses without in-house paralegals who care about their trademark." },
        { t: "Law firms", d: "For firms managing portfolios of multiple clients — reduces the risk of malpractice." }
      ],
      ctaTitle: "Never miss a renewal again",
      ctaText: "Free account. Add your first trademark and see the expiry date immediately.",
      related: ["trademark-monitoring", "ai-trademark-reports", "trademark-opposition"]
    }
  }
};

export const SERVICE_KEYS = Object.keys(SERVICES);
