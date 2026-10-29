// Nederlands — zelfde structuur als en.mjs
export default {
  lang: "nl",
  locale: "nl_NL",
  slugs: {
    home: "", web: "webdesign/", compliance: "digitale-compliance/", check: "avg-cookie-check/", language: "vertalingen/",
    creative: "creatieve-diensten/", work: "werk/", journal: "journal/", about: "over-ons/", contact: "contact/",
    privacy: "privacy/", cookies: "cookies/", imprint: "juridische-informatie/", accessibility: "toegankelijkheid/", shop: "templates/"
  },
  ui: {
    skip: "Naar de inhoud", home: "Home", mainNav: "Hoofdnavigatie", contents: "Inhoud",
    menu: "Menu", language: "Taal", soon: "binnenkort", services: "Diensten", startProject: "Project starten"
  },
  nav: {
    work: "Werk", journal: "Journal", about: "Over ons", contact: "Contact", shop: "Templates",
    web: ["Webdesign & ontwikkeling", "Websites, landingspagina's, lancering", "</>"],
    compliance: ["Digitale compliance", "AVG, cookies, Europese digitale regels", "§"],
    check: ["AVG- & cookiecheck", "Gratis check · opgelost vanaf € 99", "✓"],
    language: ["Vertalingen", "Vijf talen, elke richting", "⇄"],
    creative: ["Creatieve diensten", "Identiteit, grafisch werk, mediabewerking", "Aa"]
  },
  meta: {
    home: { title: "Lexora Digital — studio voor web, recht, taal & design", desc: "Onafhankelijke digitale studio voor websites, AVG- en cookiecompliance, vertalingen en design — voor bedrijven in heel Europa, in vijf talen." },
    web: { title: "Webdesign & webontwikkeling — Lexora Digital", desc: "Websites en landingspagina's op maat voor het mkb. Startwebsite vanaf € 99, responsive, privacyvriendelijk en live op uw eigen domein." },
    compliance: { title: "Digitale compliance: AVG, cookies & EU-regels — Lexora Digital", desc: "Praktische hulp bij de AVG, cookietoestemming, privacyverklaringen en Europese digitale regels voor bedrijfswebsites — informatie en uitvoering, geen juridisch advies." },
    check: { title: "Gratis AVG- & cookiecheck — opgelost vanaf € 99 | Lexora Digital", desc: "GDPR, Cookies & Co.: een gratis check van toestemming, tracking en juridische pagina's op uw website. Vinden we problemen, dan lossen we ze op vanaf € 99." },
    language: { title: "Vertalingen Engels, Duits, Nederlands, Spaans & Kroatisch — Lexora Digital", desc: "Vertaling van websites, zakelijke en juridische teksten tussen Engels, Duits, Nederlands, Spaans en Kroatisch — nauwkeurig en natuurlijk geformuleerd." },
    creative: { title: "Creatieve diensten: identiteit, grafisch ontwerp & mediabewerking — Lexora Digital", desc: "Visuele identiteit, merkmiddelen, grafisch ontwerp en geselecteerde foto-, video-, audio- en stembewerking voor bedrijven." },
    work: { title: "Werk — conceptprojecten | Lexora Digital", desc: "Websiteconcepten voor beauty, vakmensen en autobedrijven — complete, responsive ontwerpen die laten zien hoe Lexora Digital werkt." },
    journal: { title: "Journal — gidsen over AVG, DSA en AI Act | Lexora Digital", desc: "Heldere gidsen over de Europese regels voor bedrijfswebsites: AVG en cookies, de Digital Services Act en de EU AI Act." },
    about: { title: "Over ons — Lexora Digital", desc: "Een onafhankelijke digitale studio die webdesign, praktische kennis van Europese digitale regels, vertaling en creatief werk combineert." },
    contact: { title: "Contact — Lexora Digital", desc: "Vertel ons over uw project: website, design, AVG- en cookiecompliance of vertaling. Wij antwoorden in uw taal." },
    privacy: { title: "Privacyverklaring — Lexora Digital", desc: "Hoe Lexora Digital persoonsgegevens op deze website verwerkt." },
    cookies: { title: "Cookiebeleid — Lexora Digital", desc: "Deze website gebruikt geen tracking- of advertentiecookies. Hier staat precies wat er wordt opgeslagen en waarom." },
    imprint: { title: "Juridische informatie — Lexora Digital", desc: "Aanbiedersinformatie voor lexoradigital.com." },
    shop: {
      title: "EU-compliancetemplates voor Notion, Word & Excel: AVG, AI Act en meer — Lexora Digital",
      desc: "Kant-en-klare kits voor de AVG, de EU AI Act, AI-beleid op de werkvloer, loontransparantie en leverancierscontroles — als Notion-template of Word-, Excel- en pdf-bestanden, in vijf talen."
    },
    accessibility: { title: "Toegankelijkheidsverklaring — Lexora Digital", desc: "Onze toegankelijkheidsdoelen voor deze website, bekende beperkingen en hoe u feedback geeft." }
  },

  home: {
    hero: {
      eyebrow: "Onafhankelijke digitale studio · Europa & verder",
      h1: ["Digitale aanwezigheid.", "Ontworpen met *een doel.*"],
      lead: "Wij bouwen verfijnde websites, maken ze AVG- en cookieproof, vertalen ze in vijf talen en brengen creatieve ideeën tot leven — met heldere communicatie over grenzen heen.",
      cta1: "Bekijk ons werk", cta2: "Bespreek uw project",
      langs: "Wij werken in"
    },
    intro: {
      statement: "Goed digitaal werk ziet er niet alleen goed uit. ~Het wekt vertrouwen, werkt voor iedereen en spreekt de taal van uw klanten.~",
      p: [
        "Een website is vaak het eerste gesprek tussen een klant en uw bedrijf. Hij moet doordacht ogen, snel laden, op elk scherm werken, zorgvuldig met gegevens omgaan — en natuurlijk lezen in de taal van uw klant.",
        "Daarom brengen we design, ontwikkeling, digitale compliance en vertaling samen in één proces. Het resultaat is een website die uw bedrijf geloofwaardiger en toegankelijker maakt, klaar voor klanten in heel Europa."
      ],
      facts: [
        ["Geloofwaardig", "Een heldere, zelfverzekerde uitstraling die de kwaliteit van uw werk laat zien."],
        ["Compliant", "Privacy, cookies en Europese digitale regels vanaf het begin meegenomen."],
        ["Meertalig", "Natuurlijke, nauwkeurige content in het Engels, Duits, Nederlands, Spaans en Kroatisch."]
      ]
    },
    disc: {
      label: "Wat wij doen",
      h2: "Vier disciplines. Eén studio.",
      lead: "De meeste bedrijven hebben meer nodig dan een website. Wij combineren vaardigheden die meestal op vier verschillende plekken zitten — en het beste werk ontstaat waar ze elkaar overlappen.",
      core: "LEXORA",
      caption: "Waar web, recht, taal en design elkaar overlappen: websites die er goed uitzien, goed werken, zorgvuldig met gegevens omgaan en elke klant aanspreken.",
      cards: [
        { key: "web", route: "web", g: "</>", word: "Web", title: "Websites die vertrouwen wekken.",
          p: "Websites en landingspagina's op maat, responsive design, verbeteringen aan bestaande sites, lancering en een duidelijke overdracht. Startwebsites vanaf € 99.",
          tags: ["Websites op maat", "Landingspagina's", "Responsive design", "Verbeteringen", "Lancering"], link: "Webdesign & ontwikkeling" },
        { key: "law", route: "compliance", g: "§", word: "Recht", title: "Websites die hun bezoekers respecteren.",
          p: "Advies en praktische ondersteuning bij AVG, cookies en privacyverklaringen — inclusief een gratis websitecheck en een oplossing vanaf € 99.",
          tags: ["AVG & cookies", "Toestemming instellen", "Privacypagina's", "Europese digitale regels"],
          note: "Algemene informatie en praktische uitvoering op websites. Wij zijn geen advocatenkantoor en geven geen juridisch advies of vertegenwoordiging.", link: "Digitale compliance" },
        { key: "language", route: "language", g: "⇄", word: "Taal", title: "Teksten die lezen alsof ze in uw taal zijn geschreven.",
          p: "Vertaling van websites, zakelijke en juridische documenten tussen Engels, Duits, Nederlands, Spaans en Kroatisch.",
          tags: ["Websitelokalisatie", "Zakelijke documenten", "Juridische teksten", "Proeflezen"], link: "Vertalingen" },
        { key: "design", route: "creative", g: "Aa", word: "Design", title: "Visueel werk met een duidelijke visie.",
          p: "Visuele identiteit, merkmiddelen en grafisch ontwerp — plus geselecteerde foto-, video-, audio- en stembewerking.",
          tags: ["Visuele identiteit", "Merkmiddelen", "Grafisch ontwerp", "Foto & video", "Audio & stem"], link: "Creatieve diensten" }
      ]
    },
    focus: { label: "Uitgelicht", h2: "Drie diensten, *één standaard.*", lead: "Websites, AVG- en cookiecompliance en vertalingen — allemaal met dezelfde aandacht voor detail." },
    work: {
      label: "Geselecteerd werk",
      h2: "Conceptprojecten, gebouwd volgens de standaard van echte projecten.",
      p: "Elk concept is een complete, responsive website voor een specifiek soort bedrijf. Ze laten onze aanpak zien — het zijn geen opdrachten van klanten.",
      all: "Al het werk", badge: "Concept", count: "3 concepten · meer in voorbereiding", cta: "Bekijk de case",
      items: [
        { slug: "studio-rosalie", img: "rosalie", cat: "Beauty & verzorging", title: "Studio Rosalie",
          p: "Een rustige, hoogwaardige onepager voor een schoonheidssalon: warm rosé, redactionele schreeflettertypes en een opbouw die naar het boeken van een afspraak leidt.",
          svc: ["Webdesign", "Visuele richting", "Responsive bouw"], alt: "Websiteconcept voor schoonheidssalon Studio Rosalie op desktop en mobiel" },
        { slug: "mustermann-sanitaer", img: "mustermann", cat: "Vakmensen & installatie", title: "Mustermann Sanitär",
          p: "Een heldere, betrouwbare website voor een loodgieters- en verwarmingsbedrijf, gebouwd rond één doel: dat de telefoon gaat.",
          svc: ["Webdesign", "Responsive bouw", "Conversiestructuur"], alt: "Websiteconcept voor een loodgieters- en verwarmingsbedrijf op desktop en mobiel" },
        { slug: "kfz-werkstatt", img: "kfz", cat: "Auto & reparatie", title: "Kfz-Werkstatt",
          p: "Een krachtige, technische uitstraling voor een onafhankelijke autogarage, met diensten, vertrouwenspunten en afspraakaanvragen vooraan.",
          svc: ["Webdesign", "Art direction", "Responsive bouw"], alt: "Websiteconcept voor een autogarage op desktop en mobiel" }
      ]
    },
    trust: {
      label: "Digitale compliance",
      h2: "Design en compliance horen in hetzelfde gesprek.",
      lead: "Cookiebanners, contactformulieren en privacyverklaringen zijn onderdeel van de gebruikerservaring. Wij helpen u begrijpen welke Europese regels voor uw website kunnen gelden — en bouwen ze er goed in, in plaats van ze er achteraf aan te plakken.",
      cta: "Ontdek digitale compliance",
      disclaimer: "Algemene informatie, geen juridisch advies. Of een regel geldt, hangt af van uw bedrijf, uw website en uw land. Voor advies over uw situatie raadpleegt u een advocaat of jurist.",
      cols: { req: "Geldt voor de meeste bedrijfswebsites", ctx: "Hangt af van uw bedrijf", gp: "Goede praktijk" },
      reviewed: "Laatst gecontroleerd in oktober 2026 · bronnen: EUR-Lex",
      topics: [
        { t: "Persoonsgegevens & de AVG", s: "req", ref: "Verordening (EU) 2016/679", p: "Geldt zodra een website persoonsgegevens verwerkt — contactformulieren, nieuwsbrieven, analytics, zelfs serverlogs." },
        { t: "Cookietoestemming & tracking", s: "req", ref: "Richtlijn 2002/58/EG, art. 5 lid 3", p: "Niet-noodzakelijke cookies en vergelijkbare tracking vereisen doorgaans voorafgaande toestemming. Strikt noodzakelijke opslag niet." },
        { t: "Privacyverklaring", s: "req", ref: "AVG art. 13–14", p: "Bezoekers moeten weten wie hun gegevens verwerkt, waarom, op welke grondslag en welke rechten ze hebben." },
        { t: "Formulieren & gegevensverzameling", s: "req", ref: "AVG art. 5, 25, 32", p: "Verzamel alleen wat nodig is, beveilig het tijdens verzending en bepaal hoe lang u het bewaart." },
        { t: "Aanbiedersinformatie", s: "ctx", ref: "Richtlijn 2000/31/EG, art. 5 · DE: § 5 DDG", p: "Zakelijke websites moeten de aanbieder vermelden. Duitsland en Oostenrijk kennen specifieke, gedetailleerde impressumregels." },
        { t: "Digitale toegankelijkheid", s: "ctx", ref: "Richtlijn (EU) 2019/882", p: "De European Accessibility Act geldt sinds juni 2025 voor bepaalde producten en diensten, zoals e-commerce. Micro-ondernemingen die diensten leveren zijn uitgezonderd." },
        { t: "Digital Services Act", s: "ctx", ref: "Verordening (EU) 2022/2065", p: "Relevant als u content van gebruikers host of een platform of marktplaats beheert. Een gewone bedrijfswebsite valt er meestal niet onder." },
        { t: "EU AI Act", s: "ctx", ref: "Verordening (EU) 2024/1689, gewijzigd bij (EU) 2026/1744", p: "Relevant als u AI-systemen ontwikkelt of gebruikt, zoals chatbots of door AI gegenereerde content. Verplichtingen gelden gefaseerd; in 2026 zijn meerdere data verschoven." },
        { t: "Toegankelijk ontwerp", s: "gp", ref: "WCAG 2.2, niveau AA", p: "Goed leesbaar contrast, toetsenbordbediening en een heldere structuur helpen iedere bezoeker — ook waar het niet verplicht is." },
        { t: "Privacy als standaard", s: "gp", ref: "Lexora-standaard", p: "Geen onnodige trackers, zelf gehoste lettertypes en eerlijke keuzes met gelijkwaardig Accepteren en Weigeren." }
      ]
    },
    checkBand: {
      label: "GDPR, Cookies & Co.",
      h2: "Voldoet uw website aan de AVG en de cookieregels? *Ontdek het gratis.*",
      lead: "Wij controleren toestemming, tracking, privacyverklaring en juridische pagina's. Vinden we problemen, dan lossen we ze op vanaf € 99 — u kent de prijs vooraf.",
      priceFree: "€ 0", priceFix: "vanaf € 99", free: "De check", fix: "De oplossing — eenmalig", cta: "Check mijn website"
    },
    process: {
      label: "Onze aanpak",
      h2: "Een helder proces, zonder verrassingen.",
      lead: "Elk project volgt dezelfde vier stappen, met een vastgestelde scope en een afgesproken prijs voordat het werk begint.",
      steps: [
        ["Verkennen", "We leren uw bedrijf, uw doelgroep en uw doelen kennen — en spreken af wat het project omvat."],
        ["Ontwerpen", "We ontwikkelen een doordachte visuele richting en paginastructuur en verfijnen die met uw feedback."],
        ["Bouwen", "We bouwen de website, testen op echte apparaten en browsers en lossen op wat nodig is."],
        ["Lanceren", "We zetten de site live en dragen heldere informatie over: hoe hij werkt en wat er daarna komt."]
      ]
    },
    langs: {
      label: "Vijf talen",
      h2: "Uw project, in uw taal.",
      lead: "We werken met klanten in vijf talen — van het eerste gesprek tot de offerte, de websitecontent en de overdracht.",
      note: "Elke richting tussen de vijf talen",
      link: "Vertalingen",
      list: [["EN", "Let's talk.", "English"], ["DE", "Lassen Sie uns sprechen.", "Deutsch"], ["NL", "Laten we praten.", "Nederlands"], ["ES", "Hablemos.", "Español"], ["HR", "Razgovarajmo.", "Hrvatski"]]
    },
    journal: {
      label: "Het journal",
      h2: "Heldere gidsen over Europa's digitale regels.",
      lead: "Geschreven voor ondernemers, niet voor juristen: wat de regels zeggen, voor wie ze gelden en wat u nu moet doen.",
      soon: "In voorbereiding", kind: "Gids",
      posts: [
        { tag: "AVG", t: "AVG en cookies: wat een website van een klein bedrijf echt nodig heeft", d: "Toestemming, cookies, privacyverklaringen en formulieren — wat verplicht is, wat optioneel is en wat de meeste sites fout doen." },
        { tag: "DSA", t: "De Digital Services Act: wat bedrijven moeten weten", d: "Voor wie de DSA geldt, welke verplichtingen voor kleinere bedrijven tellen en wanneer een gewone bedrijfswebsite eronder valt." },
        { tag: "AI Act", t: "De EU AI Act: regels, reikwijdte en tijdlijn begrijpen", d: "Risicocategorieën, transparantieplichten en de gefaseerde tijdlijn — inclusief de in 2026 verschoven data." }
      ]
    },
    about: {
      label: "Over Lexora",
      h2: "Een onafhankelijke studio, over grenzen heen.",
      p: [
        "Lexora Digital is een onafhankelijke digitale studio voor het mkb. Wij combineren webdesign en -ontwikkeling, praktische kennis van Europese digitale regels, vertaling en creatieve productie.",
        "We houden het helder: een vastgestelde scope, eerlijk advies over wat u nodig heeft — en wat niet — en uitleg in begrijpelijke taal, in de taal waarin u werkt."
      ],
      link: "Meer over Lexora",
      values: [
        ["Heldere communicatie", "Geen jargon, geen verborgen stappen. U weet altijd waar uw project staat."],
        ["Doordacht ontwerp", "Elk element heeft een reden — niets wordt alleen voor het effect toegevoegd."],
        ["Eerlijke scope", "Transparante pakketten en prijzen; extra's worden genoemd voordat ze iets kosten."],
        ["Praktische compliance", "Privacy en toegankelijkheid ingebouwd, zonder beloftes die niemand kan waarmaken."]
      ]
    },
    final: {
      label: "Project starten",
      h2: "Een goed idee? *Laten we het goed bouwen.*",
      lead: "Vertel ons wat u wilt bereiken. Wij bespreken uw wensen en de meest praktische volgende stap.",
      cta1: "Project starten", cta2: "Contact opnemen"
    }
  },

  pages: {
    web: {
      hero: { label: "Webdesign & ontwikkeling", h1: "Websites die *vertrouwen wekken.*", lead: "Van een gerichte onepager tot een website op maat met meerdere pagina's — zorgvuldig ontworpen, gebouwd voor elk scherm en gelanceerd met een duidelijke overdracht.", cta1: "Websiteproject starten", cta2: "Bekijk conceptprojecten" },
      what: {
        label: "Wat wij bouwen", h2: "Alles wat een bedrijfswebsite nodig heeft. Niets meer.", lead: "Wij ontwerpen en bouwen websites die snel, leesbaar, privacyvriendelijk en makkelijk te onderhouden zijn.",
        items: [
          { g: "01", t: "Onepagers", p: "Een complete, gerichte presentatie op één pagina — ideaal voor vakmensen, studio's en lokale bedrijven." },
          { g: "02", t: "Websites op maat", p: "Websites met meerdere pagina's en een structuur rond uw diensten, klanten en doelen." },
          { g: "03", t: "Landingspagina's", p: "Pagina's met één doel — voor een campagne, een aanbod of een nieuwe dienst." },
          { g: "04", t: "Redesigns & verbeteringen", p: "Een heldere structuur, een betere mobiele ervaring en snellere pagina's voor een bestaande website." },
          { g: "05", t: "Meertalige websites", p: "Websites in maximaal vijf talen, door ons vertaald — niet door een vertaalplug-in." },
          { g: "06", t: "Privacyvriendelijke inrichting", p: "Geen onnodige trackers, correcte toestemming waar nodig en complete juridische pagina's." }
        ]
      },
      pricing: {
        label: "Pakketten", h2: "Transparant vanaf het begin.", lead: "Een duidelijk instappakket voor kleine bedrijven en offertes op maat voor alles wat groter is.",
        incl: "Inbegrepen", extra: "Niet inbegrepen / extra",
        starter: { name: "Startwebsite", price: "vanaf € 99", unit: "eenmalig", svc: "web", cta: "Startwebsite bestellen",
          p: "Een professionele onepager voor een klein bedrijf, meestal binnen 48 uur klaar nadat we alle content hebben ontvangen.",
          incl: ["Eén responsive pagina met maximaal 6 secties", "Uw teksten, foto's en logo, zorgvuldig vormgegeven", "Contactsectie met telefoon, e-mail, adres en kaartlink", "Privacyvriendelijke inrichting en links naar uw juridische pagina's", "Lancering op uw bestaande domein"],
          extra: ["Kosten voor domein en hosting", "Schrijven of vertalen van uw teksten", "Extra pagina's, boekings- of webshopfuncties", "Logo- of fotoproductie", "Doorlopende wijzigingen na de lancering"] },
        custom: { name: "Website op maat", price: "Op aanvraag", unit: "offerte per project", svc: "web", cta: "Offerte aanvragen",
          p: "Voor bedrijven die meerdere pagina's, meer talen of speciale functies nodig hebben. Na een kort gesprek ontvangt u een vaste offerte.",
          incl: ["Kennismaking en paginastructuur", "Visueel ontwerp op maat", "Meertalige website met meerdere pagina's", "Tests op echte apparaten en browsers", "Lancering, overdracht en documentatie"] },
        note: "Prijzen exclusief btw waar van toepassing. Alles buiten een pakket krijgt vooraf een offerte — u beslist of u het wilt."
      },
      after: {
        label: "Na de lancering", h2: "Een nette overdracht en duidelijke grenzen.", lead: "U moet precies weten wat u krijgt — en wat er gebeurt nadat de website live staat.",
        items: [
          { g: "→", t: "Lancering", p: "We zetten de site live op uw domein en controleren of alles in productie werkt." },
          { g: "→", t: "Overdracht", p: "U ontvangt de toegangsgegevens en een korte uitleg over hoe uw website is opgebouwd." },
          { g: "→", t: "Onderhoud", p: "Updates en wijzigingen na de lancering vallen niet onder een pakket. We bieden ze op aanvraag aan, tegen een vooraf genoemde prijs." }
        ]
      },
      work: { label: "Conceptprojecten", h2: "Zo zien onze websites eruit in de praktijk." },
      band: { h2: "Klaar voor een website die *goed werkt?*", lead: "Vertel ons over uw bedrijf en wat de website moet bereiken." }
    },

    compliance: {
      hero: { label: "Digitale compliance", h1: "AVG, cookies en Europese digitale regels — *uitgelegd en uitgevoerd.*", lead: "Wij helpen bedrijven begrijpen welke Europese regels hun website raken en brengen ze in de praktijk: toestemming, tracking, privacyverklaringen, formulieren en juridische pagina's.", cta1: "Gratis websitecheck", cta2: "Advies aanvragen" },
      help: {
        label: "Hoe wij helpen", h2: "Praktische ondersteuning, van eerste vraag tot werkende website.", lead: "Algemene informatie en concrete uitvoering — duidelijk gescheiden van formeel juridisch advies.",
        items: [
          { g: "01", t: "Advies", p: "Een heldere uitleg van welke regels waarschijnlijk belangrijk zijn voor uw website — begrijpelijk en in uw taal." },
          { g: "02", t: "Cookietoestemming instellen", p: "Een consentbanner met gelijkwaardig Accepteren en Weigeren en echte keuze per categorie." },
          { g: "03", t: "Trackingcontrole", p: "We vinden analytics, pixels, ingesloten media en externe bronnen die vóór toestemming laden." },
          { g: "04", t: "Privacyvriendelijke formulieren", p: "Contact- en boekingsformulieren die alleen het nodige vragen, met de juiste meldingen." },
          { g: "05", t: "Privacy- & juridische pagina's", p: "Complete, gestructureerde privacyverklaring en aanbiedersinformatie op basis van uw gegevens." },
          { g: "06", t: "Toegankelijkheidscheck", p: "Een praktische controle aan de hand van WCAG 2.2 en, waar van toepassing, de European Accessibility Act." }
        ]
      },
      overview: { h2: "De regels in één oogopslag.", lead: "Welke Europese eisen meestal gelden voor een bedrijfswebsite — en welke afhangen van wat u doet." },
      national: {
        label: "Nationale regels", h2: "EU-regels, nationaal toegepast.", lead: "De AVG geldt in de hele EU, maar cookietoestemming en aanbiedersinformatie zijn in nationale wetten geregeld. Met deze werken we het vaakst.",
        head: ["Land", "Cookies & tracking", "Aanbiedersinformatie"],
        rows: [
          ["Duitsland", "§ 25 TDDDG + AVG", "§ 5 DDG (Impressum)"],
          ["Oostenrijk", "§ 165 TKG 2021 + AVG", "§ 5 ECG, § 25 MedienG"],
          ["Nederland", "Art. 11.7a Telecommunicatiewet + AVG", "Art. 3:15d BW"],
          ["Spanje", "Art. 22.2 LSSI-CE + RGPD / LOPDGDD", "Art. 10 LSSI-CE"],
          ["Kroatië", "Zakon o elektroničkim komunikacijama + AVG", "Zakon o elektroničkoj trgovini"],
          ["Verenigd Koninkrijk", "PECR, reg. 6 + UK GDPR", "Electronic Commerce Regulations 2002, reg. 6"]
        ],
        note: "Overzicht ter oriëntatie. Regels veranderen en nationale toezichthouders leggen ze verschillend uit; bij de controle van uw website kijken we naar de actuele regels van uw land."
      },
      bounds: {
        label: "Grenzen", h2: "Wat we wel doen — en wat niet.",
        doT: "Wat we doen", do: ["De waarschijnlijk geldende regels begrijpelijk uitleggen", "Uw website controleren op veelvoorkomende compliance-problemen", "Toestemming, tracking en formulieren op uw website corrigeren", "Privacy- en juridische pagina's structureren op basis van uw gegevens", "De website na de wijzigingen opnieuw controleren"],
        dontT: "Wat we niet doen", dont: ["Juridisch advies of juridische vertegenwoordiging", "Garanderen dat een website \"100% compliant\" is", "Optreden als uw functionaris gegevensbescherming", "Contracten opstellen of u vertegenwoordigen bij toezichthouders"]
      },
      band: { h2: "Begin met een *gratis check* van uw website.", lead: "Wij controleren toestemming, tracking, privacyverklaring en juridische pagina's. Vinden we problemen, dan lossen we ze op vanaf € 99.", cta: "Check mijn website" }
    },

    check: {
      hero: { label: "GDPR, Cookies & Co.", h1: "Gratis AVG- & cookiecheck. *Opgelost vanaf € 99.*", lead: "Stuur ons uw website. Wij controleren toestemming, tracking, privacyverklaring en juridische pagina's aan de hand van Europese en nationale regels. Is alles in orde, dan kost het niets. Zo niet, dan maken we uw website compliant vanaf € 99 — u kent de prijs vooraf.",
        points: ["Geen account, geen creditcard", "Gratis als alles klopt", "Prijs vooraf afgesproken", "Gratis hercontrole na de oplossing"] },
      areas: {
        label: "Wat we controleren", h2: "De vier gebieden die het vaakst tot klachten en boetes leiden.", lead: "We bekijken wat uw bezoekers echt zien en wat uw website echt laadt.",
        items: [
          { g: "01", t: "AVG-basis", p: "Hoe persoonsgegevens worden verzameld en gepresenteerd — formulieren, meldingen en de zichtbare privacy-inrichting." },
          { g: "02", t: "Cookietoestemming", p: "Of toestemming duidelijk is, of weigeren net zo makkelijk is als accepteren en of tracking op een keuze wacht." },
          { g: "03", t: "Privacy- & juridische pagina's", p: "Uw privacyverklaring, aanbiedersinformatie en de formulieren die ernaar linken." },
          { g: "04", t: "Tracking door derden", p: "Analytics, advertentiepixels, ingesloten video's, kaarten, lettertypes en andere externe bronnen." }
        ]
      },
      how: {
        label: "Zo werkt het", h2: "Vier stappen van check tot compliant.", lead: "U houdt de regie: er verandert niets aan uw website voordat u het aanbod accepteert.",
        steps: [
          ["Stuur uw website", "Vul uw websiteadres, e-mail en land in — meer hebben we niet nodig."],
          ["Wij controleren", "We controleren toestemming, tracking, privacyverklaring en juridische pagina's aan de hand van Europese en nationale regels."],
          ["U krijgt het resultaat", "Gratis. Is alles in orde, dan is het klaar. Zo niet, dan ontvangt u een korte, begrijpelijke lijst met problemen."],
          ["Wij lossen het op vanaf € 99", "Na uw akkoord voeren we de correcties op uw website uit en controleren we haar daarna gratis opnieuw."]
        ]
      },
      example: {
        label: "Voorbeeldresultaat", h2: "Een helder resultaat, *geen juridisch essay.*", lead: "U ziet wat er mis is, waarom het belangrijk is en wat er nu gebeurt — begrijpelijk en in uw taal.",
        site: "uwbedrijf.nl", tag: "Illustratie", status: { bad: "Probleem", warn: "Onvolledig", ok: "OK" },
        items: [
          { s: "bad", t: "Analytics laadt vóór toestemming", p: "Tracking start zodra de pagina opent, voordat de bezoeker een keuze heeft gemaakt." },
          { s: "warn", t: "Privacyverklaring is onvolledig", p: "Bewaartermijnen en dienstverleners worden niet genoemd." },
          { s: "ok", t: "Aanbiedersinformatie aanwezig", p: "Vanaf elke pagina gelinkt en met de vereiste gegevens." }
        ],
        note: "Alleen een voorbeeld ter illustratie — geen echte website."
      },
      pricing: {
        label: "Prijzen", h2: "Twee prijzen. Geen verrassingen.", lead: "De check is altijd gratis. U betaalt alleen als we problemen vinden en u wilt dat wij ze oplossen.",
        plans: [
          { name: "De check", price: "€ 0", unit: "gratis", cta: "Gratis check aanvragen", p: "Een controle van uw website door ons.", incl: ["Toestemming, tracking, privacyverklaring en juridische pagina's", "Gecontroleerd aan de hand van Europese en uw nationale regels", "Korte, begrijpelijke lijst met eventuele problemen", "Vrijblijvend"] },
          { name: "De oplossing", price: "vanaf € 99", unit: "eenmalig", cta: "Begin met de gratis check", p: "Wij maken uw website AVG- en cookieproof volgens Europese en nationale regels.",
            incl: ["Consentbanner correct ingesteld — gelijkwaardig Accepteren en Weigeren, echte keuze", "Trackers en ingesloten content geblokkeerd tot toestemming, voor zover uw platform dat toelaat", "Privacyverklaring en aanbiedersinformatie aangevuld op basis van uw gegevens", "Meldingen bij formulieren en links naar juridische pagina's op elke pagina", "Gratis hercontrole en een korte samenvatting van de wijzigingen"] }
        ],
        scope: "De oplossing vanaf € 99 geldt voor standaardwebsites op gangbare platforms zoals WordPress, Wix, Squarespace, Shopify, Webflow, Jimdo of gewone HTML, en vereist toegang tot uw website of uw ontwikkelaar. Heeft uw site meer nodig — bijvoorbeeld eigen plug-ins, webshop-checkouts of een hostingwissel — dan zeggen we dat vooraf, met een aparte prijs. Prijzen exclusief btw waar van toepassing."
      },
      countries: { label: "Landen", h2: "Gecontroleerd aan de hand van de regels die voor u gelden.", lead: "Vertel ons waar uw bedrijf gevestigd is. We controleren uw website aan de hand van de Europese regels en de nationale wetgeving van dat land." },
      faq: {
        label: "Vragen", h2: "Veelgestelde vragen.",
        items: [
          ["Is de check echt gratis?", "Ja. De check kost niets. Vinden we geen problemen, dan betaalt u helemaal niets."],
          ["Wat houdt de oplossing vanaf € 99 in?", "We stellen de toestemming correct in, blokkeren trackers tot toestemming voor zover uw platform dat toelaat, vullen uw privacyverklaring en aanbiedersinformatie aan op basis van uw gegevens, voegen meldingen bij formulieren en links naar juridische pagina's toe en controleren de website daarna opnieuw."],
          ["Passen jullie mijn website aan zonder te vragen?", "Nee. We wijzigen pas iets nadat u het aanbod heeft geaccepteerd, en alleen wat daarin staat."],
          ["Wat hebben jullie van mij nodig?", "Toegang tot uw website (bijvoorbeeld een tijdelijke beheerderslogin) of de contactgegevens van uw ontwikkelaar — plus de bedrijfsgegevens voor uw privacyverklaring en aanbiedersinformatie."],
          ["Is dit juridisch advies?", "Nee. De check en de oplossing zijn praktisch, technisch werk op basis van Europese en nationale regels. Ze zijn geen juridisch advies en garanderen geen compliance. Voor juridisch advies raadpleegt u een advocaat of jurist."],
          ["Welke landen behandelen jullie?", "Websites gericht op klanten in de EU en het Verenigd Koninkrijk, met bijzondere ervaring in Duitsland, Oostenrijk, Nederland, Spanje en Kroatië."],
          ["Hoe betaal ik?", "U ontvangt een aanbod met prijs voordat er iets gebeurt. U betaalt pas nadat u het heeft geaccepteerd."]
        ]
      },
      band: { h2: "Ontdek waar uw website staat — *gratis.*", lead: "Uw website insturen kost een minuut. Wij doen de rest.", cta: "Check mijn website" },
      disclaimer: "GDPR, Cookies & Co. is een dienst van Lexora Digital. De check en de oplossing zijn praktische controles en uitvoeringen; ze zijn geen juridisch advies en garanderen geen compliance."
    },

    language: {
      hero: { label: "Vertalingen", h1: "Vijf talen. *Elke richting.*", lead: "Vertaling van websites, zakelijke documenten en juridische teksten tussen Engels, Duits, Nederlands, Spaans en Kroatisch — nauwkeurig, natuurlijk en passend bij uw merk.", cta1: "Vertaling aanvragen", cta2: "Taalcombinaties" },
      pairs: {
        label: "Taalcombinaties", h2: "Twintig taalcombinaties, één aanspreekpunt.", lead: "Wij vertalen tussen elk paar van onze vijf talen — zo wordt een Duitse website Nederlands, een Kroatisch contract Engels of een Spaanse brochure Duits.",
        aria: "Raster van de twintig taalcombinaties tussen Engels, Duits, Nederlands, Spaans en Kroatisch",
        langs: [["EN", "English", "VK & internationaal"], ["DE", "Deutsch", "Duitsland, Oostenrijk, Zwitserland"], ["NL", "Nederlands", "Nederland & Vlaanderen"], ["ES", "Español", "Spanje"], ["HR", "Hrvatski", "Kroatië"]]
      },
      services: {
        label: "Wat we vertalen", h2: "Van één webpagina tot een complete set documenten.", lead: "Elke vertaling wordt door een mens gemaakt en gecontroleerd — niet overgelaten aan een plug-in.",
        items: [
          { g: "01", t: "Websitelokalisatie", p: "Uw websitecontent aangepast aan elke markt — inclusief koppen, knoppen, formulieren en SEO-teksten." },
          { g: "02", t: "Zakelijke documenten", p: "Offertes, presentaties, productinformatie, e-mails en interne documenten." },
          { g: "03", t: "Juridische & contractteksten", p: "Contracten, algemene voorwaarden, privacyverklaringen en officiële correspondentie." },
          { g: "04", t: "Marketingteksten", p: "Brochures, campagnes en socialemediateksten die in elke taal hun toon houden." },
          { g: "05", t: "Proeflezen & revisie", p: "Een zorgvuldige tweede blik op vertalingen die u al heeft." },
          { g: "06", t: "Meertalige websites", p: "Gecombineerd met onze webdienst: één website, tot vijf talen, gebouwd en vertaald in één project." }
        ]
      },
      focus: {
        label: "Onze focus", h2: "Juridische en zakelijke taal voor de DACH- en Benelux-markt.",
        p: ["Onze grootste ervaring ligt in juridische en zakelijke vertalingen voor bedrijven in Duitsland, Oostenrijk, Zwitserland, Nederland en België — en tussen die markten en het Engels en Kroatisch.",
          "Juridische en technische terminologie behandelen we zorgvuldig, en uw eigen termen houden we consistent in elk document en elke taal."]
      },
      how: {
        label: "Zo werkt het", h2: "Eenvoudig, met een vaste offerte.", lead: "U kent de prijs en de leverdatum voordat we beginnen.",
        steps: [
          ["Stuur uw tekst", "Upload of beschrijf de documenten, met de taalcombinatie en uw deadline."],
          ["Ontvang een offerte", "U krijgt een vaste prijs en een leverdatum — meestal op basis van het aantal woorden."],
          ["Vertaling & revisie", "We vertalen en controleren de tekst op nauwkeurigheid, terminologie en toon."],
          ["Levering", "U ontvangt de vertaling in het afgesproken formaat, direct bruikbaar."]
        ]
      },
      faq: {
        label: "Vragen", h2: "Over onze vertalingen.",
        items: [
          ["Wat kost een vertaling?", "De prijs hangt af van de taalcombinatie, het soort tekst en de deadline. U ontvangt een vaste offerte voordat we beginnen."],
          ["Leveren jullie beëdigde vertalingen?", "Laat het ons weten als u een beëdigde vertaling nodig heeft voor een instantie of rechtbank. We zeggen eerlijk of wij die kunnen leveren — of verwijzen u naar een beëdigd vertaler in het juiste land."],
          ["Worden mijn documenten vertrouwelijk behandeld?", "Ja. Uw documenten worden alleen voor de vertaling gebruikt en na het project verwijderd binnen 30 dagen na levering."],
          ["Gebruiken jullie machinevertaling?", "Elke tekst wordt door een mens vertaald en gecontroleerd. We leveren nooit onbewerkte machinevertalingen."]
        ]
      },
      band: { h2: "Een tekst nodig *in een andere taal?*", lead: "Vertel ons de taalcombinatie, het soort tekst en uw deadline.", cta: "Vertaling aanvragen" }
    },

    creative: {
      hero: { label: "Creatieve diensten", h1: "Visueel werk met *een duidelijke visie.*", lead: "Identiteit, grafisch werk en mediabewerking voor bedrijven die er net zo goed uit willen zien als hun werk — consistent op website, print en sociale media.", cta1: "Creatief project bespreken", cta2: "Bekijk conceptprojecten" },
      services: {
        label: "Wat we bieden", h2: "Geselecteerde creatieve diensten.", lead: "Gerichte diensten die uw website en uw merk ondersteunen.",
        items: [
          { g: "01", t: "Visuele identiteit", p: "Logo-verfijning, kleurenpalet, typografie en eenvoudige merkrichtlijnen." },
          { g: "02", t: "Merkmiddelen", p: "Visitekaartjes, socialemediatemplates, briefpapier en presentatielay-outs." },
          { g: "03", t: "Grafisch ontwerp", p: "Flyers, posters, brochures en beelden voor campagnes." },
          { g: "04", t: "Fotobewerking", p: "Kleurcorrectie, retouche en een consistente beeldbehandeling voor uw website." },
          { g: "05", t: "Videobewerking", p: "Korte video's voor website en sociale media — gemonteerd, getiteld en klaar om te publiceren." },
          { g: "06", t: "Audio- & stembewerking", p: "Opschonen en monteren van stemopnames, podcasts en audio voor video." }
        ]
      },
      approach: {
        label: "Aanpak", h2: "Design dat het bedrijf dient.",
        items: [
          ["Eén visuele taal", "Website, print en sociale media gebruiken dezelfde kleuren, letters en toon."],
          ["Praktische bestanden", "U ontvangt bestanden in de formaten die u echt nodig heeft, benoemd en geordend."],
          ["Duidelijke scope", "Elk creatief project heeft vooraf een afgesproken scope en prijs."]
        ]
      },
      work: { label: "Conceptprojecten", h2: "Art direction in de praktijk." },
      band: { h2: "Laten we uw merk *een heldere uitstraling geven.*", lead: "Vertel ons wat u nodig heeft en waar het gebruikt wordt." }
    },

    work: {
      hero: { label: "Werk", h1: "Conceptprojecten, *gebouwd volgens de standaard van echte projecten.*", lead: "Elk concept is een complete, responsive website voor een specifiek soort bedrijf. Ze laten zien hoe we werken — het zijn geen opdrachten van klanten." },
      filter: "Filter op branche", all: "Alles", empty: "Nog geen projecten in deze categorie.",
      soon: { label: "In voorbereiding", items: ["Vakantieverblijven", "Zakelijke dienstverlening", "Creatieve & digitale projecten"], p: "Nieuwe concepten worden toegevoegd zodra ze klaar zijn." },
      band: { h2: "Een website zoals deze *voor uw bedrijf?*", lead: "Elk concept kan worden aangepast aan een echt bedrijf — met uw content, uw merk en uw talen." }
    },

    caseUi: {
      overview: "Overzicht", goals: "Bedrijfsdoelen", approach: "Ontwerpaanpak", system: "Designsysteem", palette: "Kleurenpalet", type2: "Typografie",
      roles: { display: "Koppen", body: "Lopende tekst", both: "Koppen & lopende tekst" },
      type: "Type", sector: "Branche", services: "Getoonde diensten", lang: "Taal",
      desk: "Desktop — secties van de homepage", mob: "Mobiel — de lay-out wordt opnieuw opgebouwd voor kleine schermen, niet alleen verkleind.",
      deskAlt: "Websiteconcept %s — desktopweergave van de homepage", mobAlt: "Websiteconcept %s — mobiele weergave",
      note: "Dit is een conceptproject van Lexora Digital om onze aanpak te laten zien. Namen, contactgegevens en teksten tussen vierkante haken zijn placeholders.",
      next: "Volgend project", cta: "Een vergelijkbare website bespreken",
      band: { h2: "Een website zoals deze *voor uw bedrijf?*", lead: "We passen de aanpak aan uw bedrijf, uw content en uw talen aan." }
    },
    cases: {
      "studio-rosalie": {
        lead: "Een rustig, hoogwaardig onepager-concept voor een schoonheidssalon — ontworpen om het boeken van een afspraak de logische volgende stap te maken.", lang: "Duits",
        svc: ["Webdesign", "Visuele richting", "Responsive bouw"],
        overview: "Studio Rosalie is een concept voor een onafhankelijke schoonheidssalon met gezichtsbehandelingen, wimpers, wenkbrauwen en nageldesign. De site moest persoonlijk én hoogwaardig aanvoelen — en op een telefoon net zo goed werken als op een laptop.",
        goals: ["De salon direct uitnodigend en hoogwaardig laten overkomen", "Diensten en prijzen helder presenteren", "Het boeken van een afspraak de logische volgende stap maken", "De eigenaar persoonlijk voorstellen om vertrouwen op te bouwen"],
        approach: ["Een warm palet van rosé en bordeaux vervangt het gebruikelijke roze, met een redactionele schreefletter voor koppen en een strakke schreefloze letter om te lezen.", "Foto's van de salon, het werk en de eigenaar dragen de pagina. De lay-out geeft elk beeld ruimte en de boekknoppen blijven zichtbaar zonder opdringerig te zijn."]
      },
      "mustermann-sanitaer": {
        lead: "Een helder, betrouwbaar websiteconcept voor een loodgieters- en verwarmingsbedrijf — gebouwd rond één doel: dat de telefoon gaat.", lang: "Duits",
        svc: ["Webdesign", "Responsive bouw", "Conversiestructuur"],
        overview: "Mustermann Sanitär is een concept voor een erkend installatiebedrijf voor badkamers, sanitair en verwarming. Klanten komen vaak met een probleem en een telefoon in de hand, dus snelheid en duidelijkheid gaan voor alles.",
        goals: ["Direct vakmanschap en betrouwbaarheid laten zien", "Telefoonnummer en noodservice binnen één tik bereikbaar maken", "Diensten in begrijpelijke taal uitleggen", "Vertrouwen opbouwen met echte foto's van team en werk"],
        approach: ["Een palet van marineblauw en warm oranje staat voor betrouwbaarheid en actie. Het telefoonnummer is overal de hoofdknop, en op mobiel houdt een vaste belbalk het binnen bereik.", "Dienstkaarten, vertrouwenspunten en een korte reviewsectie beantwoorden de gebruikelijke vragen voordat de klant ze hoeft te stellen."]
      },
      "kfz-werkstatt": {
        lead: "Een krachtig, technisch websiteconcept voor een onafhankelijke autogarage, met diensten, vertrouwenspunten en afspraakaanvragen vooraan.", lang: "Duits",
        svc: ["Webdesign", "Art direction", "Responsive bouw"],
        overview: "Dit concept presenteert een onafhankelijke autogarage als modern en deskundig — zonder de gebruikelijke stockfoto-uitstraling van de branche.",
        goals: ["Professioneel en technisch deskundig overkomen", "De belangrijkste diensten in één oogopslag tonen", "Afspraakaanvragen eenvoudig maken", "Vertrouwen opbouwen zonder verzonnen certificaten of reviews"],
        approach: ["Diep marineblauw en signaaloranje met een smalle letter geven de site de zelfverzekerde, technische sfeer van een werkplaats. Realistische werkplaatsfoto's vertellen het verhaal.", "Een helder dienstenraster, vier vertrouwenspunten en een eenvoudig afspraakformulier maken de volgende stap op elk scherm duidelijk."]
      }
    },

    journal: {
      hero: { label: "Journal", h1: "Gidsen over *Europa's digitale regels.*", lead: "Heldere artikelen over AVG en cookies, de Digital Services Act en de EU AI Act — wat de regels zeggen, voor wie ze gelden en wat u moet doen." },
      note: { label: "Over het journal", p: "Geschreven door **Goran Kolouh**, oprichter van Lexora Digital — met een juridische achtergrond, bouwt websites. Elke gids wordt getoetst aan de officiële teksten en bijgewerkt wanneer de regels veranderen. Algemene informatie, geen juridisch advies." },
      article: { by: "Door", min: "min. lezen", read: "Lees het artikel", back: "Alle artikelen", sources: "Bronnen", more: "Verder lezen", talk: "Neem contact op", all: "Alle artikelen", bio: "Juridische achtergrond, webbouwer van beroep. Goran schrijft over Europees digitaal recht — de AVG, de DSA en de AI-verordening — en wat dat betekent voor wie websites bouwt en beheert.", disclaimer: "Dit artikel is algemene informatie en geen juridisch advies. Het geeft de stand van het recht weer op de datum van publicatie." },
      band: { h2: "Wilt u weten waar uw website staat?", lead: "Onze gratis AVG- & cookiecheck geeft u een helder antwoord." }
    },

    about: {
      photoAlt: "Portret van Goran Kolouh, oprichter en directeur van Lexora Digital", photoCap: "Goran Kolouh — Oprichter & directeur", photoLine: "De ene helft recht en taal, de andere helft digitaal.",
      hero: { label: "Over Lexora", h1: "Een onafhankelijke studio, *over grenzen heen.*", lead: "Lexora Digital combineert webdesign, praktische kennis van Europese digitale regels, vertaling en creatief werk — voor het mkb in heel Europa." },
      story: {
        label: "Ons verhaal", h2: "Waarom web, recht, taal en design bij elkaar horen.",
        p: ["Kleine bedrijven horen dat ze een website nodig hebben, een cookiebanner, een privacyverklaring, vertaalde content en een consistente uitstraling — meestal van vier verschillende partijen die nooit met elkaar praten.",
          "Lexora Digital begon met een eenvoudig idee: deze dingen werken beter als je ze samen plant. Een mooie website die trackers laadt zonder toestemming is een risico. Een privacyverklaring die niemand begrijpt, helpt niemand. Een vertaling die het ontwerp negeert, breekt de lay-out.",
          "De studio combineert een achtergrond in recht, professionele vertaling en webdesign. We werken in vijf talen en leggen elke stap begrijpelijk uit."]
      },
      four: {
        label: "Vier disciplines", h2: "WEB · LAW · LANGUAGE · DESIGN", lead: "Eén studio, vier vaardigheden — gecombineerd in elk project.",
        items: [
          { g: "</>", t: "Web", p: "Websites en landingspagina's die snel, helder en makkelijk te onderhouden zijn." },
          { g: "§", t: "Recht", p: "Praktische AVG- en cookiecompliance — informatie en uitvoering, geen juridisch advies." },
          { g: "⇄", t: "Taal", p: "Vertaling tussen Engels, Duits, Nederlands, Spaans en Kroatisch." },
          { g: "Aa", t: "Design", p: "Visuele identiteit, grafisch werk en mediabewerking met een duidelijke visie." }
        ]
      },
      values: { h2: "Hoe wij werken." },
      bounds: {
        doT: "Wat u kunt verwachten", do: ["Een vaste scope en prijs voordat het werk begint", "Begrijpelijke uitleg in uw taal", "Eerlijk advies — ook als u iets niet nodig heeft", "Standaard privacyvriendelijke websites"],
        dontT: "Wat wij niet zijn", dont: ["Een advocatenkantoor — wij geven geen juridisch advies of vertegenwoordiging", "Een bureau voor beëdigde vertalingen — beëdigde vertalingen alleen waar uitdrukkelijk vermeld", "Een bureau dat u meer verkoopt dan u nodig heeft"]
      }
    },

    contact: {
      hero: { label: "Contact", h1: "Laten we beginnen met *een gesprek.*", lead: "Vertel ons wat u wilt bereiken — een website, een compliancecheck, een vertaling of een creatief project. Wij antwoorden in uw taal." },
      direct: { label: "E-mail", p: "We antwoorden meestal binnen twee werkdagen." },
      next: { label: "Wat er nu gebeurt", steps: [["We lezen uw bericht", "en stellen vragen als iets onduidelijk is."], ["We stellen een volgende stap voor", "— een kort gesprek, een offerte of een gratis check."], ["U beslist", "Er begint niets zonder uw akkoord."]] },
      check: { t: "Wilt u alleen weten of uw website aan de AVG voldoet?", p: "Gebruik dan de gratis AVG- & cookiecheck." }
    },

    shop: {
      hero: {
        label: "Compliancetemplates",
        h1: "EU-compliancekits, *in Notion of Word & Excel.*",
        lead: "Praktische kits voor de AVG, de EU AI Act, loontransparantie en leverancierscontroles — voor het mkb, in vijf talen. Als Notion-template of als Word-, Excel- en pdf-bestanden om te downloaden.",
        cta1: "Naar de bundel",
        cta2: "Alle kits bekijken",
        points: ["Nederlands, Engels, Duits, Spaans, Kroatisch", "Notion-template of Word, Excel & pdf", "Direct toegang na aankoop", "Eenmalige betaling, geen abonnement"]
      },
      kits: { label: "De kits", h2: "Vijf kits. *Eén bundel.*", lead: "Elke kit is er in twee edities met dezelfde inhoud en prijs: een kant-en-klare Notion-workspace, of Word-, Excel- en pdf-bestanden om te downloaden, af te drukken of zonder Notion te gebruiken. U kiest de taal bij het afrekenen." },
      cat: "Notion-template",
      notion: "Gemaakt voor Notion · ook als Word, Excel & pdf",
      edNotion: "Notion-template",
      edDl: "Word · Excel · pdf",
      bundleCat: "Bundel · 5 kits",
      num: "5 kits",
      vs: "{bundle} in plaats van {full}",
      buy: "Kopen via Gumroad",
      items: {
        bundle: { t: "EU Compliance Bundle", s: "5 kits", p: "Alle vijf kits in één aankoop: AVG, AI-compliance, AI-beleid op de werkvloer, loontransparantie en leveranciersbeoordeling." },
        gdpr: { t: "GDPR Compliance Kit", s: "AVG", p: "Een checklist met artikelverwijzingen plus registers voor verwerkingsactiviteiten, verzoeken van betrokkenen, datalekken, verwerkers en cookies." },
        ai: { t: "AI Compliance Toolkit", s: "EU AI Act + AVG", p: "Een register van AI-tools, AVG-controlepunten, een AI-beleid voor medewerkers, scripts voor trainingsvideo's en een trainingslogboek." },
        policy: { t: "AI Workplace Policy Pack", s: "EU AI Act + AVG", p: "Een AI-gebruiksbeleid, een beknopte gids voor medewerkers, een bevestigingsformulier, aanvragen voor AI-tools en een trainingslogboek." },
        pay: {
          t: "EU Pay Transparency Kit",
          s: "Richtlijn (EU) 2023/970",
          p: "Beloningsbeleid, functiehuis en salarisschalen, een loonkloofcalculator, informatieverzoeken van werknemers en kant-en-klare teksten."
        },
        vendor: {
          t: "Vendor & AI Supplier Assessment Kit",
          s: "AVG + EU AI Act",
          p: "Een vragenlijst voor leveranciers, een beoordelingsgids, een checklist voor de verwerkersovereenkomst (art. 28 AVG), een leveranciersregister en een beoordelingslogboek."
        }
      },
      how: {
        label: "Zo werkt het",
        h2: "Van afrekenen naar aan de slag *in twee minuten.*",
        lead: "Geen installatie en geen account bij ons — u dupliceert de template in Notion of downloadt de bestanden.",
        steps: [
          ["Kies kit, editie en taal", "Kies een kit of de bundel, de Notion- of de Word-, Excel- & pdf-editie en bij het afrekenen op Gumroad uw taal."],
          ["Ontvang toegang", "Direct na betaling ontvangt u de Notion-link of de download."],
          ["Dupliceer of open", "Notion: klik op ‘Dupliceren’ om de template naar uw eigen workspace te kopiëren — het gratis abonnement is genoeg. Download: pak het bestand uit en open eerst de handleiding."],
          ["Vul hem in", "Volg de installatiegids en de voorbeeldregels en voeg uw eigen gegevens toe."]
        ]
      },
      bounds: {
        label: "Grenzen",
        h2: "Wat de kits doen — en wat niet.",
        doT: "Wat de kits doen",
        do: ["Een duidelijke structuur voor registers, overzichten en beleid", "Voorbeeldregels die laten zien hoe u elk register invult", "De relevante EU-regels in begrijpelijke taal", "Hulp bij het vastleggen van wat u hebt gedaan"],
        dontT: "Wat ze niet doen",
        dont: ["Juridisch advies voor uw specifieke situatie vervangen", "Uw bedrijf op zichzelf compliant maken", "Meldingen of rapportages namens u bij autoriteiten indienen", "AI-systemen indelen of juridische beslissingen voor u nemen"]
      },
      faq: {
        label: "Vragen",
        h2: "Voordat u koopt.",
        items: [
          ["Heb ik Notion nodig?", "Nee. Elke kit is ook verkrijgbaar als Word-, Excel- en pdf-bestanden. Voor de Notion-editie is het gratis Notion-abonnement genoeg."],
          ["Welke talen zijn er?", "Elke kit is beschikbaar in het Nederlands, Engels, Duits, Spaans en Kroatisch. U kiest uw taalversie bij het afrekenen."],
          ["Hoe ontvang ik de kit?", "Betaling en bon lopen via Gumroad. Direct na aankoop krijgt u een link waarmee u de template naar uw Notion-workspace dupliceert, of een zip-bestand met Word-, Excel- en pdf-bestanden."],
          ["Wat is het verschil tussen de twee edities?", "Inhoud en prijs zijn gelijk. De Notion-editie is een gekoppelde workspace met weergaven en automatische velden. De downloadeditie bevat Word-documenten om te bewerken, een Excel-werkmap met de registers en automatische termijnen en controles, en pdf’s om af te drukken."],
          ["Mag ik een kit voor meerdere bedrijven gebruiken?", "Eén aankoop geldt voor gebruik binnen één bedrijf. Hebt u kits nodig voor meerdere bedrijven of voor uw klanten, neem dan contact met ons op."],
          ["Is dit juridisch advies?", "Nee. De kits zijn organisatorische hulpmiddelen en een praktisch startpunt. Ze vormen geen juridisch advies en maken uw bedrijf niet op zichzelf compliant. Laat bij toepassingen met een hoog risico — bijvoorbeeld AI bij werving — uw definitieve documenten beoordelen door een deskundige."],
          ["Word ik gevolgd als ik op ‘Kopen’ klik?", "Niet door deze website. Die laadt geen Gumroad-scripts en plaatst geen cookies. De koopknoppen zijn gewone links; op de afrekenpagina geldt het privacybeleid van Gumroad."]
        ]
      },
      band: { h2: "Alle vijf kits *voor één prijs.*", lead: "{bundle} in plaats van {full} — u kiest uw taalversie bij het afrekenen.", cta: "Naar de bundel" },
      disclaimer: "De kits zijn organisatorische hulpmiddelen en een praktisch startpunt. Ze vormen geen juridisch advies en garanderen geen naleving van de AVG, de EU AI Act of andere wetgeving."
    },

    privacy: {
      label: "Juridisch", h1: "Privacyverklaring", lead: "Hoe wij persoonsgegevens verwerken als u deze website bezoekt of contact met ons opneemt.", updated: "Laatst bijgewerkt: oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Verwerkingsverantwoordelijke"],
        ["p", "Verantwoordelijk voor de gegevensverwerking op deze website is: Lexora Digital (Goran Kolouh), Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), België, gdpr@lexoradigital.com. Meer gegevens vindt u bij de juridische informatie."],
        ["h2", "Hosting en serverlogs"],
        ["p", "Deze website wordt gehost door Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, VS. Bij een bezoek verwerkt de hostingprovider automatisch technische gegevens zoals IP-adres, datum en tijd, opgevraagde pagina, browser en besturingssysteem, om de website te leveren en veilig te houden."],
        ["p", "Grondslag: art. 6 lid 1 onder f AVG (ons gerechtvaardigd belang bij een veilige, werkende website). Doorgifte naar de VS gebeurt op basis van het EU-VS Data Privacy Framework en/of standaardcontractbepalingen. Bewaartermijn: maximaal 30 dagen."],
        ["h2", "Contactformulier en AVG- & cookiecheck"],
        ["p", "Als u een van onze formulieren gebruikt, verwerken we de gegevens die u invult (bijvoorbeeld naam, e-mailadres, websiteadres, land en bericht) om uw vraag te beantwoorden of de gevraagde check uit te voeren."],
        ["p", "Grondslag: art. 6 lid 1 onder b AVG (precontractuele maatregelen op uw verzoek) en art. 6 lid 1 onder f AVG (beantwoorden van vragen). De formulieren worden verwerkt door Formspree, Inc., VS, op basis van een verwerkersovereenkomst en het EU-VS Data Privacy Framework en/of standaardcontractbepalingen."],
        ["p", "We verwijderen uw aanvraag zodra die niet meer nodig is, tenzij wettelijke bewaarplichten gelden uiterlijk 12 maanden nadat de aanvraag is afgerond."],
        ["h2", "E-mail"],
        ["p", "Als u ons e-mailt, verwerken we uw e-mailadres en bericht om te antwoorden. Grondslag: art. 6 lid 1 onder b of f AVG."],
        ["h2", "Cookies en lokale opslag"],
        ["p", "Deze website gebruikt geen cookies voor analytics, advertenties of tracking. Als u een taal kiest, wordt die keuze in de lokale opslag van uw browser bewaard, zodat de site de volgende keer in uw taal opent. Dit is strikt noodzakelijk voor een functie waar u om vraagt en wordt niet naar ons verzonden. Details vindt u in ons cookiebeleid."],
        ["h2", "Lettertypes en externe bronnen"],
        ["p", "Alle lettertypes en scripts worden op onze eigen server gehost. Bij een bezoek aan deze website worden geen gegevens naar Google Fonts of andere netwerken van derden verzonden."],
        ["h2", "Uw rechten"],
        ["ul", ["Inzage (art. 15 AVG)", "Rectificatie (art. 16 AVG)", "Wissing (art. 17 AVG)", "Beperking van de verwerking (art. 18 AVG)", "Overdraagbaarheid (art. 20 AVG)", "Bezwaar tegen verwerking op basis van gerechtvaardigd belang (art. 21 AVG)"]],
        ["p", "U heeft ook het recht een klacht in te dienen bij een toezichthoudende autoriteit, met name in de EU-lidstaat waar u woont of werkt de Belgische Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel, www.gegevensbeschermingsautoriteit.be."],
        ["h2", "Wijzigingen"],
        ["p", "We passen deze verklaring aan als onze website of de wet verandert. De actuele versie staat altijd op deze pagina."]
      ]
    },

    cookies: {
      label: "Juridisch", h1: "Cookiebeleid", lead: "Kort gezegd: wij gebruiken geen tracking-, analytics- of advertentiecookies.", updated: "Laatst bijgewerkt: oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Wat we gebruiken"],
        ["p", "Deze website plaatst geen cookies. Er wordt één gegeven in de lokale opslag van uw browser bewaard, en alleen als u zelf een taal kiest:"],
        ["ul", ["**lexora-lang** — uw gekozen taal (bijvoorbeeld \"nl\"). Doel: de site de volgende keer in die taal openen. Bewaard totdat u het verwijdert. Wordt niet naar ons of naar anderen verzonden."]],
        ["p", "Omdat deze opslag strikt noodzakelijk is voor een functie waar u uitdrukkelijk om vraagt, is er geen toestemmingsbanner voor nodig."],
        ["h2", "Wat we niet gebruiken"],
        ["ul", ["Geen analytics (bijvoorbeeld Google Analytics)", "Geen advertentie- of socialemediapixels", "Geen ingesloten video's, kaarten of lettertypes van derden", "Geen enkele vorm van cross-site tracking"]],
        ["h2", "Formulieren"],
        ["p", "Als u een van onze formulieren verstuurt, wordt uw invoer naar onze formulierprovider verzonden. Het versturen plaatst geen cookies op deze website. Zie de privacyverklaring voor details."],
        ["h2", "Uw instellingen"],
        ["p", "U kunt de opgeslagen taalvoorkeur altijd bekijken en verwijderen via **Privacy-instellingen** in de footer, of door de sitegegevens in uw browser te wissen."]
      ]
    },

    imprint: {
      label: "Juridisch", h1: "Juridische informatie", lead: "Aanbiedersinformatie voor lexoradigital.com.", updated: "Laatst bijgewerkt: oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Aanbieder"],
        ["p", "**Lexora Digital**  \nRue Jean Robbie 44  \n1060 Saint-Gilles (Bruxelles), België  \nVertegenwoordigd door: Goran Kolouh, Oprichter & directeur"],
        ["h2", "Contact"],
        ["p", "Algemeen: info@lexoradigital.com  \nPrivacy: gdpr@lexoradigital.com  \nOprichter: kolouh@lexoradigital.com"],
        ["h2", "Btw-identificatienummer"],
        ["p", "17636920948"],
        ["h2", "Amerikaanse vennootschap"],
        ["p", "**Lexora Digital C-Corp.**  \n1401 Pennsylvania Ave  \nWilmington, DE 19806  \nDelaware, VS"],
        ["h2", "Verantwoordelijk voor de inhoud"],
        ["p", "Verantwoordelijk voor journalistiek-redactionele inhoud (§ 18 lid 2 MStV): Goran Kolouh, Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), België"],
        ["h2", "Geschillenbeslechting voor consumenten"],
        ["p", "Wij zijn niet bereid of verplicht deel te nemen aan geschillenbeslechting bij een consumentengeschillencommissie."],
        ["h2", "Aansprakelijkheid voor inhoud en links"],
        ["p", "We maken de inhoud van deze website met zorg, maar kunnen niet garanderen dat die volledig, juist en actueel is. Artikelen en compliance-overzichten zijn algemene informatie en geen juridisch advies. Wij zijn niet verantwoordelijk voor de inhoud van externe websites waarnaar we linken."]
      ]
    },

    accessibility: {
      label: "Juridisch", h1: "Toegankelijkheidsverklaring", lead: "Deze website moet voor iedereen bruikbaar zijn.", updated: "Laatst bijgewerkt: oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Ons doel"],
        ["p", "We streven ernaar te voldoen aan de Web Content Accessibility Guidelines (WCAG) 2.2 op niveau AA."],
        ["h2", "Wat we hebben gedaan"],
        ["ul", ["Semantische paginastructuur met koppen, landmarks en een skiplink", "Volledige toetsenbordbediening met zichtbare focus", "Tekstcontrast gecontroleerd volgens WCAG AA", "Animaties worden beperkt of uitgeschakeld als uw apparaat om minder beweging vraagt", "Formulieren met zichtbare labels en duidelijke foutmeldingen", "Beschrijvende alternatieve teksten voor afbeeldingen"]],
        ["h2", "Bekende beperkingen"],
        ["ul", ["De geanimeerde planeet is decoratief en verborgen voor schermlezers.", "Screenshots van conceptprojecten bevatten kleine tekst die in de omringende tekst wordt beschreven en niet volledig wordt voorgelezen."]],
        ["h2", "Feedback"],
        ["p", "Stuit u op deze website op een barrière, laat het ons weten via info@lexoradigital.com. We antwoorden en werken aan een oplossing."],
        ["h2", "Status"],
        ["p", "Deze verklaring is gebaseerd op een zelfevaluatie uit oktober 2026."]
      ]
    }
  },

  form: {
    optional: "(optioneel)", privacyLink: "privacyverklaring", note: "Wij antwoorden in uw taal.",
    js: {
      required: "Vul dit veld in.", email: "Vul een geldig e-mailadres in.", url: "Vul een geldig websiteadres in, bijv. voorbeeld.nl.",
      consent: "Bevestig dit zodat we uw aanvraag kunnen verwerken.",
      fix: "Controleer de gemarkeerde velden.", sending: "Bezig met verzenden…",
      error: "Er ging iets mis. Probeer het opnieuw — of e-mail ons direct.",
      notConnected: "Dit formulier is nog niet gekoppeld. E-mail ons voorlopig direct."
    },
    contact: {
      title: "Vertel ons over uw project", intro: "Optionele velden mag u leeg laten.",
      submit: "Bericht versturen", subject: "Nieuwe aanvraag via lexoradigital.com",
      consent: "Ik ga ermee akkoord dat Lexora Digital mijn gegevens gebruikt om mijn aanvraag te beantwoorden. Meer in de {privacy}.",
      success: ["Bedankt — uw bericht is verzonden.", "We antwoorden zo snel mogelijk, in uw taal."],
      f: { name: "Naam", email: "E-mail", company: "Bedrijfsnaam", language: "Voorkeurstaal", service: "Waarmee kunnen we helpen?", budget: "Budget", message: "Uw bericht", messagePh: "Wat wilt u bereiken?", choose: "Maak een keuze" },
      services: [["web", "Website (ontwerp & ontwikkeling)"], ["design", "Creatieve & designdiensten"], ["compliance", "AVG- & cookieadvies"], ["check", "AVG- & cookiecheck / oplossing vanaf € 99"], ["translation", "Vertaling"], ["other", "Iets anders"]],
      budgets: [["<500", "Minder dan € 500"], ["500-1500", "€ 500–1.500"], ["1500-5000", "€ 1.500–5.000"], ["5000+", "Meer dan € 5.000"], ["unsure", "Weet ik nog niet"]]
    },
    check: {
      title: "Vraag uw gratis check aan", intro: "We sturen het resultaat naar uw e-mailadres.",
      submit: "Check mijn website gratis", subject: "Aanvraag AVG- & cookiecheck",
      consent: "Ik ga ermee akkoord dat mijn gegevens alleen worden gebruikt om de check uit te voeren en mij het resultaat te sturen. Meer in de {privacy}.",
      success: ["Bedankt — uw aanvraag is ontvangen.", "We sturen het resultaat naar uw e-mailadres. Vinden we problemen, dan ontvangt u een aanbod voor de oplossing (vanaf € 99) — er verandert niets aan uw website zonder uw akkoord."],
      f: { website: "Websiteadres", email: "E-mail voor het resultaat", country: "Land van uw bedrijf", platform: "Websiteplatform", message: "Is er iets wat we moeten weten?", choose: "Maak een keuze" },
      countries: [["DE", "Duitsland"], ["AT", "Oostenrijk"], ["CH", "Zwitserland"], ["NL", "Nederland"], ["BE", "België"], ["ES", "Spanje"], ["HR", "Kroatië"], ["UK", "Verenigd Koninkrijk"], ["EU", "Ander EU-land"], ["other", "Ander land"]],
      platforms: [["wordpress", "WordPress"], ["wix", "Wix"], ["squarespace", "Squarespace"], ["shopify", "Shopify"], ["webflow", "Webflow"], ["jimdo", "Jimdo"], ["html", "Maatwerk / HTML"], ["unknown", "Weet ik niet"]]
    }
  },

  footer: {
    pos: "Een onafhankelijke digitale studio voor websites, digitale compliance, vertaling en design — voor bedrijven in heel Europa en daarbuiten.",
    studio: "Studio", services: "Diensten", legal: "Juridisch", email: "E-mail", emailPh: "e-mailadres",
    privacy: "Privacyverklaring", cookies: "Cookiebeleid", imprint: "Juridische informatie", accessibility: "Toegankelijkheid", settings: "Privacy-instellingen", langs: "Talen"
  },
  privacyDialog: {
    title: "Privacy-instellingen",
    p: "Deze website gebruikt geen analytics-, advertentie- of trackingcookies en laadt geen lettertypes of scripts van derden. Er is niets om toestemming voor te geven.",
    rows: [["Strikt noodzakelijk", "Altijd actief"], ["Analytics", "Niet gebruikt"], ["Marketing", "Niet gebruikt"]],
    pref: "Als u een taal kiest, wordt die in de lokale opslag van uw browser onthouden zodat de site de volgende keer in die taal opent. Dit wordt nooit naar ons verzonden.",
    prefSet: "Opgeslagen taalvoorkeur: %s", prefNone: "Geen taalvoorkeur opgeslagen.",
    clear: "Opgeslagen voorkeur wissen", close: "Sluiten", more: "Lees het cookiebeleid"
  },
  notFound: {
    title: "Pagina niet gevonden — Lexora Digital",
    h1: "Deze pagina is *uit zijn baan geraakt.*",
    lead: "De pagina die u zoekt bestaat niet of is verplaatst. We brengen u weer op koers.",
    home: "Terug naar de homepage", contact: "Neem contact op"
  }
};
