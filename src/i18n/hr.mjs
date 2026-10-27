// Hrvatski — ista struktura kao en.mjs
export default {
  lang: "hr",
  locale: "hr_HR",
  slugs: {
    home: "", web: "izrada-web-stranica/", compliance: "digitalna-uskladenost/", check: "gdpr-provjera-kolacica/", language: "prijevodi/",
    creative: "kreativne-usluge/", work: "radovi/", journal: "journal/", about: "o-nama/", contact: "kontakt/",
    privacy: "privatnost/", cookies: "kolacici/", imprint: "impresum/", accessibility: "pristupacnost/", shop: "predlosci/"
  },
  ui: {
    skip: "Preskoči na sadržaj", home: "Početna", mainNav: "Glavna navigacija", contents: "Sadržaj",
    menu: "Izbornik", language: "Jezik", soon: "uskoro", services: "Usluge", startProject: "Pokrenite projekt"
  },
  nav: {
    work: "Radovi", journal: "Journal", about: "O nama", contact: "Kontakt", shop: "Predlošci",
    web: ["Web dizajn i razvoj", "Web stranice, landing stranice, objava", "</>"],
    compliance: ["Digitalna usklađenost", "GDPR, kolačići, digitalna pravila EU-a", "§"],
    check: ["GDPR i provjera kolačića", "Besplatna provjera · ispravak za 99 €", "✓"],
    language: ["Prijevodi", "Pet jezika, u svim smjerovima", "⇄"],
    creative: ["Kreativne usluge", "Identitet, grafika, obrada medija", "Aa"]
  },
  meta: {
    home: { title: "Lexora Digital — studio za web, pravo, jezik i dizajn", desc: "Neovisni digitalni studio za web stranice, usklađenost s GDPR-om i pravilima o kolačićima, prijevode i dizajn — za tvrtke diljem Europe, na pet jezika." },
    web: { title: "Izrada web stranica — Lexora Digital", desc: "Web stranice i landing stranice po mjeri za mala i srednja poduzeća. Osnovna web stranica od 99 €, prilagođena mobitelima, prijateljska prema privatnosti i objavljena na Vašoj domeni." },
    compliance: { title: "Digitalna usklađenost: GDPR, kolačići i pravila EU-a — Lexora Digital", desc: "Praktična pomoć s GDPR-om, privolom za kolačiće, izjavama o privatnosti i digitalnim pravilima EU-a za poslovne web stranice — informacije i provedba, ne pravni savjet." },
    check: { title: "Besplatna GDPR provjera i provjera kolačića — ispravak za 99 € | Lexora Digital", desc: "GDPR, Cookies & Co.: besplatna provjera privole, praćenja i pravnih stranica Vaše web stranice. Ako pronađemo nedostatke, ispravljamo ih po fiksnoj cijeni od 99 €." },
    language: { title: "Prijevodi s engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog — Lexora Digital", desc: "Prijevod web stranica, poslovnih i pravnih tekstova između engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog — precizno i prirodno." },
    creative: { title: "Kreativne usluge: identitet, grafički dizajn i obrada medija — Lexora Digital", desc: "Vizualni identitet, materijali brenda, grafički dizajn te odabrana obrada fotografija, videa, zvuka i glasa za tvrtke." },
    work: { title: "Radovi — konceptualni projekti | Lexora Digital", desc: "Koncepti web stranica za kozmetiku, obrtnike i autoservise — cjeloviti, prilagodljivi dizajni koji pokazuju kako Lexora Digital radi." },
    journal: { title: "Journal — vodiči o GDPR-u, DSA-u i Aktu o UI | Lexora Digital", desc: "Razumljivi vodiči o europskim pravilima za poslovne web stranice: GDPR i kolačići, Akt o digitalnim uslugama i Akt EU-a o umjetnoj inteligenciji." },
    about: { title: "O nama — Lexora Digital", desc: "Neovisni digitalni studio koji spaja web dizajn, praktično znanje o europskim digitalnim pravilima, prevođenje i kreativni rad." },
    contact: { title: "Kontakt — Lexora Digital", desc: "Recite nam o svom projektu: web stranica, dizajn, usklađenost s GDPR-om i kolačićima ili prijevod. Odgovaramo na Vašem jeziku." },
    privacy: { title: "Izjava o privatnosti — Lexora Digital", desc: "Kako Lexora Digital obrađuje osobne podatke na ovoj web stranici." },
    cookies: { title: "Politika kolačića — Lexora Digital", desc: "Ova web stranica ne koristi kolačiće za praćenje ni oglašavanje. Ovdje točno piše što se sprema i zašto." },
    imprint: { title: "Impresum — Lexora Digital", desc: "Podaci o pružatelju usluge za lexoradigital.com." },
    shop: {
      title: "Notion predlošci za EU usklađenost: GDPR, Akt o UI i više — Lexora Digital",
      desc: "Notion kitovi spremni za rad za GDPR, EU Akt o umjetnoj inteligenciji, politike korištenja UI na radnom mjestu, transparentnost plaća i provjeru dobavljača — na hrvatskom, engleskom, njemačkom, nizozemskom i španjolskom."
    },
    accessibility: { title: "Izjava o pristupačnosti — Lexora Digital", desc: "Naši ciljevi pristupačnosti za ovu web stranicu, poznata ograničenja i kako nam poslati povratnu informaciju." }
  },

  home: {
    hero: {
      eyebrow: "Neovisni digitalni studio · Europa i šire",
      h1: ["Digitalna prisutnost.", "Oblikovana sa *svrhom.*"],
      lead: "Izrađujemo promišljene web stranice, usklađujemo ih s GDPR-om i pravilima o kolačićima, prevodimo ih na pet jezika i ostvarujemo kreativne ideje — uz jasnu komunikaciju preko granica.",
      cta1: "Pogledajte naše radove", cta2: "Razgovarajmo o projektu",
      langs: "Radimo na"
    },
    intro: {
      statement: "Dobar digitalni rad ne mora samo dobro izgledati. ~Mora graditi povjerenje, raditi za svakoga i govoriti jezikom Vaših kupaca.~",
      p: [
        "Web stranica često je prvi razgovor između kupca i Vaše tvrtke. Treba djelovati promišljeno, brzo se učitavati, raditi na svakom zaslonu, odgovorno postupati s podacima — i prirodno se čitati na jeziku Vaših kupaca.",
        "Zato dizajn, razvoj, digitalnu usklađenost i prijevod spajamo u jedan proces. Rezultat je web stranica koja Vašu tvrtku čini vjerodostojnijom, pristupačnijom i spremnom za kupce diljem Europe."
      ],
      facts: [
        ["Vjerodostojno", "Jasan, samouvjeren nastup koji odražava kvalitetu Vašeg rada."],
        ["Usklađeno", "Privatnost, kolačići i digitalna pravila EU-a uzeti u obzir od početka."],
        ["Višejezično", "Prirodan i precizan sadržaj na engleskom, njemačkom, nizozemskom, španjolskom i hrvatskom."]
      ]
    },
    disc: {
      label: "Što radimo",
      h2: "Četiri discipline. Jedan studio.",
      lead: "Većini tvrtki treba više od web stranice. Spajamo vještine koje su obično na četiri različita mjesta — a najbolji rad nastaje tamo gdje se preklapaju.",
      core: "LEXORA",
      caption: "Gdje se web, pravo, jezik i dizajn preklapaju: web stranice koje dobro izgledaju, ispravno rade, pažljivo postupaju s podacima i obraćaju se svakom kupcu.",
      cards: [
        { key: "web", route: "web", g: "</>", word: "Web", title: "Web stranice kojima se lakše vjeruje.",
          p: "Web stranice i landing stranice po mjeri, prilagodljiv dizajn, poboljšanja postojećih stranica, objava i jasna primopredaja. Osnovne web stranice od 99 €.",
          tags: ["Web stranice po mjeri", "Landing stranice", "Prilagodljiv dizajn", "Poboljšanja", "Objava"], link: "Web dizajn i razvoj" },
        { key: "law", route: "compliance", g: "§", word: "Pravo", title: "Web stranice koje poštuju svoje posjetitelje.",
          p: "Savjetovanje i praktična podrška za GDPR, kolačiće i izjave o privatnosti — uključujući besplatnu provjeru web stranice i ispravak po fiksnoj cijeni od 99 €.",
          tags: ["GDPR i kolačići", "Postavljanje privole", "Pravne stranice", "Digitalna pravila EU-a"],
          note: "Opće informacije i praktična provedba na web stranicama. Nismo odvjetnički ured i ne pružamo pravne savjete ni pravno zastupanje.", link: "Digitalna usklađenost" },
        { key: "language", route: "language", g: "⇄", word: "Jezik", title: "Tekstovi koji zvuče kao da su napisani na Vašem jeziku.",
          p: "Prijevod web stranica, poslovnih i pravnih dokumenata između engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog.",
          tags: ["Lokalizacija web stranica", "Poslovni dokumenti", "Pravni tekstovi", "Lektura"], link: "Prijevodi" },
        { key: "design", route: "creative", g: "Aa", word: "Dizajn", title: "Vizualni rad s jasnim stavom.",
          p: "Vizualni identitet, materijali brenda i grafički dizajn — uz odabranu obradu fotografija, videa, zvuka i glasa.",
          tags: ["Vizualni identitet", "Materijali brenda", "Grafički dizajn", "Foto i video", "Zvuk i glas"], link: "Kreativne usluge" }
      ]
    },
    focus: { label: "U fokusu", h2: "Tri usluge, *jedan standard.*", lead: "Web stranice, usklađenost s GDPR-om i pravilima o kolačićima te prijevodi — svaka s jednakom pažnjom prema detaljima." },
    work: {
      label: "Odabrani radovi",
      h2: "Konceptualni projekti, izrađeni po standardu pravih.",
      p: "Svaki koncept je cjelovita, prilagodljiva web stranica za određenu vrstu tvrtke. Pokazuju naš pristup — nisu naručeni projekti klijenata.",
      all: "Svi radovi", badge: "Koncept", count: "3 koncepta · još u pripremi", cta: "Pogledajte studiju slučaja",
      items: [
        { slug: "studio-rosalie", img: "rosalie", cat: "Kozmetika i njega", title: "Studio Rosalie",
          p: "Smirena, elegantna web stranica na jednoj stranici za kozmetički salon: tople ružičaste nijanse, urednička tipografija sa serifima i struktura usmjerena na rezervaciju termina.",
          svc: ["Web dizajn", "Vizualni smjer", "Prilagodljiva izrada"], alt: "Koncept web stranice kozmetičkog salona Studio Rosalie na računalu i mobitelu" },
        { slug: "mustermann-sanitaer", img: "mustermann", cat: "Obrt i kućne usluge", title: "Mustermann Sanitär",
          p: "Jasna, pouzdana web stranica za vodoinstalatersku i plinoinstalatersku tvrtku, izgrađena oko jednog cilja: da telefon zazvoni.",
          svc: ["Web dizajn", "Prilagodljiva izrada", "Struktura za konverziju"], alt: "Koncept web stranice vodoinstalaterske tvrtke na računalu i mobitelu" },
        { slug: "kfz-werkstatt", img: "kfz", cat: "Automobili i popravci", title: "Kfz-Werkstatt",
          p: "Snažan, tehnički izgled za neovisni autoservis, s uslugama, točkama povjerenja i zahtjevom za termin odmah na početku.",
          svc: ["Web dizajn", "Umjetničko vodstvo", "Prilagodljiva izrada"], alt: "Koncept web stranice autoservisa na računalu i mobitelu" }
      ]
    },
    trust: {
      label: "Digitalna usklađenost",
      h2: "Dizajn i usklađenost pripadaju istom razgovoru.",
      lead: "Bannere za kolačiće, kontaktni obrasci i izjave o privatnosti dio su korisničkog iskustva. Pomažemo Vam razumjeti koja se europska pravila mogu odnositi na Vašu web stranicu — i ugrađujemo ih ispravno od početka, umjesto da ih dodajemo na kraju.",
      cta: "Saznajte više o digitalnoj usklađenosti",
      disclaimer: "Opće informacije, ne pravni savjet. Primjenjuje li se neko pravilo, ovisi o Vašoj tvrtki, web stranici i državi. Za savjet o Vašem slučaju obratite se odvjetniku.",
      cols: { req: "Odnosi se na većinu poslovnih web stranica", ctx: "Ovisi o Vašem poslovanju", gp: "Dobra praksa" },
      reviewed: "Zadnja provjera: listopad 2026. · izvori: EUR-Lex",
      topics: [
        { t: "Osobni podaci i GDPR", s: "req", ref: "Uredba (EU) 2016/679", p: "Primjenjuje se čim web stranica obrađuje osobne podatke — kontaktni obrasci, newsletteri, analitika, pa čak i zapisi poslužitelja." },
        { t: "Privola za kolačiće i praćenje", s: "req", ref: "Direktiva 2002/58/EZ, čl. 5. st. 3.", p: "Kolačići koji nisu nužni i slično praćenje u pravilu zahtijevaju prethodnu privolu. Strogo nužna pohrana ne zahtijeva." },
        { t: "Izjava o privatnosti", s: "req", ref: "GDPR čl. 13.–14.", p: "Posjetitelji moraju znati tko obrađuje njihove podatke, zašto, na kojoj pravnoj osnovi i koja su im prava." },
        { t: "Obrasci i prikupljanje podataka", s: "req", ref: "GDPR čl. 5., 25., 32.", p: "Prikupljajte samo ono što je potrebno, zaštitite podatke pri prijenosu i odredite koliko ih dugo čuvate." },
        { t: "Podaci o pružatelju usluge", s: "ctx", ref: "Direktiva 2000/31/EZ, čl. 5. · DE: § 5 DDG", p: "Poslovne web stranice moraju navesti pružatelja usluge. Njemačka i Austrija imaju posebno detaljna pravila o impresumu." },
        { t: "Digitalna pristupačnost", s: "ctx", ref: "Direktiva (EU) 2019/882", p: "Europski akt o pristupačnosti od lipnja 2025. obuhvaća određene proizvode i usluge, poput e-trgovine. Mikropoduzeća koja pružaju usluge su izuzeta." },
        { t: "Akt o digitalnim uslugama", s: "ctx", ref: "Uredba (EU) 2022/2065", p: "Važan je ako pohranjujete sadržaj korisnika ili vodite platformu ili tržnicu. Obična web stranica tvrtke uglavnom nije obuhvaćena." },
        { t: "Akt EU-a o umjetnoj inteligenciji", s: "ctx", ref: "Uredba (EU) 2024/1689, kako je izmijenjena Uredbom (EU) 2026/1744", p: "Važan je ako razvijate ili koristite sustave umjetne inteligencije, poput chatbotova ili sadržaja koji generira UI. Obveze se primjenjuju postupno; nekoliko rokova pomaknuto je 2026." },
        { t: "Pristupačan dizajn", s: "gp", ref: "WCAG 2.2, razina AA", p: "Čitljiv kontrast, upravljanje tipkovnicom i jasna struktura pomažu svakom posjetitelju — i ondje gdje to nije obvezno." },
        { t: "Privatnost kao standard", s: "gp", ref: "Lexora standard", p: "Bez nepotrebnih alata za praćenje, s fontovima na vlastitom poslužitelju i poštenim izborom uz jednako istaknute gumbe Prihvati i Odbij." }
      ]
    },
    checkBand: {
      label: "GDPR, Cookies & Co.",
      h2: "Je li Vaša web stranica usklađena s GDPR-om i pravilima o kolačićima? *Saznajte besplatno.*",
      lead: "Provjeravamo privolu, praćenje, izjavu o privatnosti i pravne stranice. Ako pronađemo nedostatke, ispravljamo ih po jednoj fiksnoj cijeni.",
      priceFree: "0 €", priceFix: "99 €", free: "Provjera", fix: "Ispravak — jednokratno", cta: "Provjerite moju stranicu"
    },
    process: {
      label: "Naš pristup",
      h2: "Jasan postupak, bez iznenađenja.",
      lead: "Svaki projekt prolazi ista četiri koraka, s dogovorenim opsegom i cijenom prije početka rada.",
      steps: [
        ["Upoznavanje", "Upoznajemo Vašu tvrtku, publiku i ciljeve — i dogovaramo što projekt obuhvaća."],
        ["Dizajn", "Razvijamo promišljen vizualni smjer i strukturu stranica te ih doradimo prema Vašim povratnim informacijama."],
        ["Izrada", "Izrađujemo web stranicu, testiramo je na stvarnim uređajima i preglednicima i ispravljamo ono što treba."],
        ["Objava", "Objavljujemo stranicu i predajemo Vam jasne informacije o tome kako radi i što slijedi."]
      ]
    },
    langs: {
      label: "Pet jezika",
      h2: "Vaš projekt, na Vašem jeziku.",
      lead: "S klijentima radimo na pet jezika — od prvog razgovora do ponude, sadržaja web stranice i dokumentacije pri primopredaji.",
      note: "U svim smjerovima između pet jezika",
      link: "Prijevodi",
      list: [["EN", "Let's talk.", "English"], ["DE", "Lassen Sie uns sprechen.", "Deutsch"], ["NL", "Laten we praten.", "Nederlands"], ["ES", "Hablemos.", "Español"], ["HR", "Razgovarajmo.", "Hrvatski"]]
    },
    journal: {
      label: "Journal",
      h2: "Razumljivi vodiči o europskim digitalnim pravilima.",
      lead: "Pisano za poduzetnike, ne za pravnike: što pravila kažu, na koga se odnose i što učiniti.",
      soon: "U pripremi", kind: "Vodič",
      posts: [
        { tag: "GDPR", t: "GDPR i kolačići: što web stranici male tvrtke stvarno treba", d: "Privola, kolačići, izjave o privatnosti i obrasci — što je obvezno, što nije i gdje većina stranica griješi." },
        { tag: "DSA", t: "Akt o digitalnim uslugama: što tvrtke trebaju znati", d: "Na koga se DSA odnosi, koje su obveze važne za manje tvrtke i kada je obična web stranica tvrtke obuhvaćena." },
        { tag: "Akt o UI", t: "Akt EU-a o umjetnoj inteligenciji: pravila, opseg i rokovi", d: "Kategorije rizika, obveze transparentnosti i postupni raspored — uključujući rokove pomaknute 2026." }
      ]
    },
    about: {
      label: "O Lexori",
      h2: "Neovisni studio koji radi preko granica.",
      p: [
        "Lexora Digital je neovisni digitalni studio za mala i srednja poduzeća. Spajamo web dizajn i razvoj, praktično znanje o europskim digitalnim pravilima, prevođenje i kreativnu produkciju.",
        "Držimo stvari jasnima: dogovoren opseg, iskren savjet o tome što Vam treba — i što ne — te objašnjenja jednostavnim jezikom, na jeziku na kojem radite."
      ],
      link: "Više o Lexori",
      values: [
        ["Jasna komunikacija", "Bez žargona i skrivenih koraka. Uvijek znate gdje je Vaš projekt."],
        ["Promišljen dizajn", "Svaki element ima razlog — ništa nije dodano samo radi efekta."],
        ["Pošten opseg", "Transparentni paketi i cijene; dodaci se navode prije nego što išta koštaju."],
        ["Praktična usklađenost", "Privatnost i pristupačnost ugrađene, bez obećanja koja nitko ne može ispuniti."]
      ]
    },
    final: {
      label: "Pokrenite projekt",
      h2: "Imate dobru ideju? *Izgradimo je kako treba.*",
      lead: "Recite nam što želite postići. Razgovarat ćemo o Vašim potrebama i najpraktičnijem sljedećem koraku.",
      cta1: "Pokrenite projekt", cta2: "Kontaktirajte Lexoru"
    }
  },

  pages: {
    web: {
      hero: { label: "Web dizajn i razvoj", h1: "Web stranice kojima se *lakše vjeruje.*", lead: "Od usmjerene web stranice na jednoj stranici do web stranice po mjeri s više stranica — pažljivo dizajnirane, izrađene za svaki zaslon i objavljene uz jasnu primopredaju.", cta1: "Pokrenite web projekt", cta2: "Pogledajte konceptualne projekte" },
      what: {
        label: "Što izrađujemo", h2: "Sve što poslovnoj web stranici treba. Ništa suvišno.", lead: "Dizajniramo i razvijamo web stranice koje su brze, čitljive, prijateljske prema privatnosti i jednostavne za održavanje.",
        items: [
          { g: "01", t: "Web stranice na jednoj stranici", p: "Cjelovit, usmjeren nastup na jednoj stranici — idealno za obrtnike, studije i lokalne tvrtke." },
          { g: "02", t: "Web stranice po mjeri", p: "Web stranice s više stranica i strukturom prilagođenom Vašim uslugama, kupcima i ciljevima." },
          { g: "03", t: "Landing stranice", p: "Stranice s jednom svrhom — za kampanju, ponudu ili novu uslugu." },
          { g: "04", t: "Redizajn i poboljšanja", p: "Jasnija struktura, bolje iskustvo na mobitelu i brže stranice za postojeću web stranicu." },
          { g: "05", t: "Višejezične web stranice", p: "Web stranice na do pet jezika, koje prevodimo mi — ne dodatak za strojno prevođenje." },
          { g: "06", t: "Postavke prijateljske prema privatnosti", p: "Bez nepotrebnih alata za praćenje, s ispravnom privolom gdje je potrebna i potpunim pravnim stranicama." }
        ]
      },
      pricing: {
        label: "Paketi", h2: "Transparentno od početka.", lead: "Jasno definiran početni paket za male tvrtke i individualne ponude za sve veće.",
        incl: "Uključeno", extra: "Nije uključeno / dodatno",
        starter: { name: "Osnovna web stranica", price: "99 €", unit: "jednokratno", svc: "web", cta: "Naručite osnovnu web stranicu",
          p: "Profesionalna web stranica na jednoj stranici za malu tvrtku, obično gotova u roku od 48 sati nakon što primimo sav sadržaj.",
          incl: ["Jedna prilagodljiva stranica s do 6 odjeljaka", "Vaši tekstovi, fotografije i logotip, pažljivo složeni", "Kontaktni odjeljak s telefonom, e-mailom, adresom i poveznicom na kartu", "Postavke prijateljske prema privatnosti i poveznice na Vaše pravne stranice", "Objava na Vašoj postojećoj domeni"],
          extra: ["Troškovi domene i hostinga", "Pisanje ili prijevod Vaših tekstova", "Dodatne stranice, rezervacije ili web trgovina", "Izrada logotipa ili fotografija", "Stalne izmjene nakon objave"] },
        custom: { name: "Web stranica po mjeri", price: "Na upit", unit: "ponuda po projektu", svc: "web", cta: "Zatražite ponudu",
          p: "Za tvrtke kojima treba više stranica, više jezika ili posebne funkcije. Nakon kratkog razgovora dobivate ponudu s fiksnom cijenom.",
          incl: ["Uvodni razgovor i struktura stranica", "Vizualni dizajn po mjeri", "Izrada s više stranica i više jezika", "Testiranje na stvarnim uređajima i preglednicima", "Objava, primopredaja i dokumentacija"] },
        note: "Cijene bez PDV-a, gdje je primjenjivo. Sve izvan paketa nudimo prije početka rada — Vi odlučujete želite li to."
      },
      after: {
        label: "Nakon objave", h2: "Uredna primopredaja i jasne granice.", lead: "Trebate točno znati što dobivate — i što se događa nakon što web stranica bude objavljena.",
        items: [
          { g: "→", t: "Objava", p: "Objavljujemo stranicu na Vašoj domeni i provjeravamo radi li sve u stvarnom radu." },
          { g: "→", t: "Primopredaja", p: "Dobivate pristupne podatke i kratak vodič o tome kako je Vaša web stranica postavljena." },
          { g: "→", t: "Održavanje", p: "Ažuriranja i izmjene nakon objave nisu uključeni u pakete. Nudimo ih na upit, po unaprijed navedenoj cijeni." }
        ]
      },
      work: { label: "Konceptualni projekti", h2: "Ovako naše web stranice izgledaju u praksi." },
      band: { h2: "Spremni za web stranicu koja *radi kako treba?*", lead: "Recite nam nešto o svojoj tvrtki i što web stranica treba postići." }
    },

    compliance: {
      hero: { label: "Digitalna usklađenost", h1: "GDPR, kolačići i digitalna pravila EU-a — *objašnjeni i provedeni.*", lead: "Pomažemo tvrtkama razumjeti koja se europska pravila odnose na njihovu web stranicu i provodimo ih u praksi: privola, praćenje, izjave o privatnosti, obrasci i pravne stranice.", cta1: "Besplatna provjera web stranice", cta2: "Zatražite savjetovanje" },
      help: {
        label: "Kako pomažemo", h2: "Praktična podrška, od prvog pitanja do web stranice koja radi.", lead: "Opće informacije i konkretna provedba — jasno odvojene od formalnog pravnog savjeta.",
        items: [
          { g: "01", t: "Savjetovanje", p: "Jasno objašnjenje koja su pravila vjerojatno važna za Vašu web stranicu — razumljivo i na Vašem jeziku." },
          { g: "02", t: "Postavljanje privole za kolačiće", p: "Banner s jednako istaknutim gumbima Prihvati i Odbij i stvarnim izborom po kategorijama." },
          { g: "03", t: "Provjera praćenja", p: "Pronalazimo analitiku, piksele, ugrađene medije i vanjske resurse koji se učitavaju prije privole." },
          { g: "04", t: "Obrasci prijateljski prema privatnosti", p: "Kontaktni obrasci i obrasci za rezervaciju koji traže samo potrebno, uz odgovarajuće obavijesti." },
          { g: "05", t: "Izjava o privatnosti i impresum", p: "Potpune i strukturirane pravne stranice na temelju podataka koje nam date." },
          { g: "06", t: "Provjera pristupačnosti", p: "Praktična provjera prema WCAG 2.2 i, gdje je primjenjivo, Europskom aktu o pristupačnosti." }
        ]
      },
      overview: { h2: "Pravila na prvi pogled.", lead: "Koji se europski zahtjevi obično odnose na poslovnu web stranicu — a koji ovise o tome čime se bavite." },
      national: {
        label: "Nacionalna pravila", h2: "Pravila EU-a, primijenjena u svakoj državi.", lead: "GDPR vrijedi u cijelom EU-u, ali privolu za kolačiće i podatke o pružatelju usluge uređuju nacionalni zakoni. S ovima najčešće radimo.",
        head: ["Država", "Kolačići i praćenje", "Podaci o pružatelju"],
        rows: [
          ["Njemačka", "§ 25 TDDDG + GDPR", "§ 5 DDG (Impressum)"],
          ["Austrija", "§ 165 TKG 2021 + GDPR", "§ 5 ECG, § 25 MedienG"],
          ["Nizozemska", "čl. 11.7a Telecommunicatiewet + AVG (GDPR)", "čl. 3:15d BW"],
          ["Španjolska", "čl. 22.2 LSSI-CE + RGPD / LOPDGDD", "čl. 10 LSSI-CE"],
          ["Hrvatska", "Zakon o elektroničkim komunikacijama + GDPR", "Zakon o elektroničkoj trgovini"],
          ["Ujedinjeno Kraljevstvo", "PECR, reg. 6 + UK GDPR", "Electronic Commerce Regulations 2002, reg. 6"]
        ],
        note: "Pregled za orijentaciju. Pravila se mijenjaju, a nacionalna tijela ih različito tumače; pri provjeri Vaše web stranice uzimamo u obzir važeća pravila Vaše države."
      },
      bounds: {
        label: "Granice", h2: "Što radimo — a što ne.",
        doT: "Što radimo", do: ["Razumljivo objašnjavamo pravila koja se vjerojatno primjenjuju", "Provjeravamo Vašu web stranicu na uobičajene nedostatke", "Ispravljamo privolu, praćenje i obrasce na Vašoj web stranici", "Strukturiramo izjavu o privatnosti i impresum iz Vaših podataka", "Ponovno provjeravamo stranicu nakon izmjena"],
        dontT: "Što ne radimo", dont: ["Pravni savjeti ili pravno zastupanje", "Jamstvo da je web stranica \"100 % usklađena\"", "Uloga Vašeg službenika za zaštitu podataka", "Sastavljanje ugovora ili zastupanje pred tijelima"]
      },
      band: { h2: "Počnite s *besplatnom provjerom* svoje web stranice.", lead: "Provjeravamo privolu, praćenje, izjavu o privatnosti i pravne stranice. Ako pronađemo nedostatke, ispravljamo ih po fiksnoj cijeni od 99 €.", cta: "Provjerite moju stranicu" }
    },

    check: {
      hero: { label: "GDPR, Cookies & Co.", h1: "Besplatna GDPR provjera i provjera kolačića. *Ispravljamo za 99 €.*", lead: "Pošaljite nam svoju web stranicu. Provjeravamo privolu, praćenje, izjavu o privatnosti i pravne stranice prema pravilima EU-a i Vaše države. Ako je sve u redu, ne plaćate ništa. Ako nije, uskladit ćemo Vašu stranicu po jednoj fiksnoj cijeni.",
        points: ["Bez računa i kartice", "Besplatno ako nema nedostataka", "Jedna fiksna cijena za ispravak", "Besplatna ponovna provjera"] },
      areas: {
        label: "Što provjeravamo", h2: "Četiri područja koja najčešće dovode do pritužbi i kazni.", lead: "Provjeravamo ono što Vaši posjetitelji zaista vide i što Vaša stranica zaista učitava.",
        items: [
          { g: "01", t: "Osnove GDPR-a", p: "Kako se osobni podaci prikupljaju i prikazuju — obrasci, obavijesti i vidljive postavke privatnosti." },
          { g: "02", t: "Privola za kolačiće", p: "Je li privola jasna, je li odbijanje jednako jednostavno kao prihvaćanje i čeka li praćenje na odluku." },
          { g: "03", t: "Privatnost i pravne stranice", p: "Vaša izjava o privatnosti, impresum i obrasci koji na njih upućuju." },
          { g: "04", t: "Praćenje trećih strana", p: "Analitika, oglasni pikseli, ugrađeni videozapisi, karte, fontovi i drugi vanjski resursi." }
        ]
      },
      how: {
        label: "Kako funkcionira", h2: "Četiri koraka od provjere do usklađenosti.", lead: "Vi zadržavate kontrolu: na Vašoj stranici ništa se ne mijenja dok ne prihvatite ponudu.",
        steps: [
          ["Pošaljite stranicu", "Unesite adresu web stranice, e-mail i državu — više nam ne treba."],
          ["Provjeravamo", "Provjeravamo privolu, praćenje, izjavu o privatnosti i pravne stranice prema pravilima EU-a i Vaše države."],
          ["Dobivate rezultat", "Besplatno. Ako je sve u redu, to je sve. Ako nije, dobivate kratak, razumljiv popis nedostataka."],
          ["Ispravljamo za 99 €", "Uz Vaše odobrenje ispravljamo nedostatke na stranici, a zatim je besplatno ponovno provjeravamo."]
        ]
      },
      example: {
        label: "Primjer rezultata", h2: "Jasan rezultat, *ne pravna rasprava.*", lead: "Vidite što nije u redu, zašto je to važno i što slijedi — jednostavnim jezikom, na Vašem jeziku.",
        site: "vasatvrtka.hr", tag: "Ilustracija", status: { bad: "Nedostatak", warn: "Nepotpuno", ok: "U redu" },
        items: [
          { s: "bad", t: "Analitika se učitava prije privole", p: "Praćenje počinje čim se stranica otvori, prije nego što posjetitelj odluči." },
          { s: "warn", t: "Izjava o privatnosti je nepotpuna", p: "Nisu navedeni rokovi čuvanja ni pružatelji usluga." },
          { s: "ok", t: "Impresum postoji", p: "Povezan sa svake stranice i sadrži potrebne podatke." }
        ],
        note: "Primjer samo za ilustraciju — nije stvarna web stranica."
      },
      pricing: {
        label: "Cijene", h2: "Dvije cijene. Bez iznenađenja.", lead: "Provjera je uvijek besplatna. Plaćate samo ako pronađemo nedostatke i želite da ih ispravimo.",
        plans: [
          { name: "Provjera", price: "0 €", unit: "besplatno", cta: "Zatražite besplatnu provjeru", p: "Pregled Vaše web stranice koji provodimo mi.", incl: ["Privola, praćenje, izjava o privatnosti i pravne stranice", "Prema pravilima EU-a i Vaše države", "Kratak, razumljiv popis mogućih nedostataka", "Bez obveze"] },
          { name: "Ispravak", price: "99 €", unit: "jednokratno", cta: "Počnite s besplatnom provjerom", p: "Usklađujemo Vašu web stranicu s GDPR-om i pravilima o kolačićima EU-a i Vaše države.",
            incl: ["Ispravno postavljen banner za privolu — jednako istaknuti Prihvati i Odbij, stvaran izbor", "Alati za praćenje i ugrađeni sadržaj blokirani do privole, koliko to Vaša platforma dopušta", "Izjava o privatnosti i impresum dopunjeni iz podataka koje nam date", "Obavijesti u obrascima i poveznice na pravne stranice na svakoj stranici", "Besplatna ponovna provjera i kratak sažetak izmjena"] }
        ],
        scope: "Ispravak za 99 € obuhvaća standardne web stranice na uobičajenim platformama poput WordPressa, Wixa, Squarespacea, Shopifyja, Webflowa, Jimda ili čistog HTML-a i zahtijeva pristup Vašoj stranici ili Vašem developeru. Ako Vašoj stranici treba više — primjerice posebni dodaci, naplata u web trgovini ili promjena hostinga — reći ćemo Vam to unaprijed, s posebnom cijenom. Cijene bez PDV-a, gdje je primjenjivo."
      },
      countries: { label: "Države", h2: "Provjereno prema pravilima koja vrijede za Vas.", lead: "Recite nam gdje je sjedište Vaše tvrtke. Vašu stranicu provjeravamo prema pravilima EU-a i nacionalnom zakonodavstvu te države." },
      faq: {
        label: "Pitanja", h2: "Česta pitanja.",
        items: [
          ["Je li provjera zaista besplatna?", "Da. Provjera ne košta ništa. Ako ne pronađemo nedostatke, ne plaćate baš ništa."],
          ["Što točno uključuje ispravak za 99 €?", "Ispravno postavljamo privolu, blokiramo alate za praćenje do privole koliko to Vaša platforma dopušta, dopunjujemo izjavu o privatnosti i impresum iz podataka koje nam date, dodajemo obavijesti u obrasce i poveznice na pravne stranice te nakon toga ponovno provjeravamo stranicu."],
          ["Mijenjate li moju stranicu bez pitanja?", "Ne. Mijenjamo nešto tek nakon što prihvatite ponudu, i samo ono što je u njoj opisano."],
          ["Što trebate od mene?", "Pristup Vašoj web stranici (npr. privremeni administratorski pristup) ili kontakt Vašeg developera — te podatke o tvrtki koji trebaju biti u izjavi o privatnosti i impresumu."],
          ["Je li ovo pravni savjet?", "Ne. Provjera i ispravak praktičan su, tehnički rad na temelju pravila EU-a i nacionalnih pravila. Nisu pravni savjet i ne jamče usklađenost. Za pravni savjet obratite se odvjetniku."],
          ["Koje države pokrivate?", "Web stranice namijenjene kupcima u EU-u i Ujedinjenom Kraljevstvu, s posebnim iskustvom u Njemačkoj, Austriji, Nizozemskoj, Španjolskoj i Hrvatskoj."],
          ["Kako plaćam?", "Prije početka rada dobivate ponudu s cijenom. Plaćate tek nakon što je prihvatite."]
        ]
      },
      band: { h2: "Saznajte gdje je Vaša web stranica — *besplatno.*", lead: "Slanje stranice traje minutu. Ostalo prepustite nama.", cta: "Provjerite moju stranicu" },
      disclaimer: "GDPR, Cookies & Co. usluga je tvrtke Lexora Digital. Provjera i ispravak praktični su pregledi i provedbe; nisu pravni savjet i ne jamče usklađenost."
    },

    language: {
      hero: { label: "Prijevodi", h1: "Pet jezika. *U svim smjerovima.*", lead: "Prijevod web stranica, poslovnih dokumenata i pravnih tekstova između engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog — precizno, prirodno i u skladu s Vašim brendom.", cta1: "Zatražite prijevod", cta2: "Jezični parovi" },
      pairs: {
        label: "Jezični parovi", h2: "Dvadeset jezičnih parova, jedna kontakt osoba.", lead: "Prevodimo između bilo koja dva od naših pet jezika — njemačka web stranica može postati nizozemska, hrvatski ugovor engleski, a španjolska brošura njemačka.",
        aria: "Mreža dvadeset jezičnih parova između engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog",
        langs: [["EN", "English", "UK i međunarodno"], ["DE", "Deutsch", "Njemačka, Austrija, Švicarska"], ["NL", "Nederlands", "Nizozemska i Flandrija"], ["ES", "Español", "Španjolska"], ["HR", "Hrvatski", "Hrvatska"]]
      },
      services: {
        label: "Što prevodimo", h2: "Od jedne web stranice do cijelog paketa dokumenata.", lead: "Svaki prijevod izrađuje i provjerava čovjek — ne prepuštamo ga dodatku za strojno prevođenje.",
        items: [
          { g: "01", t: "Lokalizacija web stranica", p: "Sadržaj Vaše web stranice prilagođen svakom tržištu — uključujući naslove, gumbe, obrasce i SEO tekstove." },
          { g: "02", t: "Poslovni dokumenti", p: "Ponude, prezentacije, informacije o proizvodima, e-poruke i interni dokumenti." },
          { g: "03", t: "Pravni tekstovi i ugovori", p: "Ugovori, opći uvjeti poslovanja, izjave o privatnosti i službena korespondencija." },
          { g: "04", t: "Marketinški tekstovi", p: "Brošure, kampanje i tekstovi za društvene mreže koji na svakom jeziku zadržavaju svoj ton." },
          { g: "05", t: "Lektura i revizija", p: "Pažljiv drugi pogled na prijevode koje već imate." },
          { g: "06", t: "Višejezične web stranice", p: "U kombinaciji s našom web uslugom: jedna web stranica, do pet jezika, izrađena i prevedena u jednom projektu." }
        ]
      },
      focus: {
        label: "Naša specijalnost", h2: "Pravni i poslovni jezik za tržišta DACH i Beneluksa.",
        p: ["Najviše iskustva imamo u pravnom i poslovnom prevođenju za tvrtke koje posluju u Njemačkoj, Austriji, Švicarskoj, Nizozemskoj i Belgiji — te između tih tržišta i engleskog i hrvatskog jezika.",
          "Pravnu i tehničku terminologiju obrađujemo s pažnjom, a Vaše vlastite izraze držimo dosljednima u svakom dokumentu i na svakom jeziku."]
      },
      how: {
        label: "Kako funkcionira", h2: "Jednostavno, uz fiksnu ponudu.", lead: "Cijenu i rok isporuke znate prije nego što počnemo.",
        steps: [
          ["Pošaljite tekst", "Učitajte ili opišite dokumente, jezični par i svoj rok."],
          ["Dobijte ponudu", "Dobivate fiksnu cijenu i rok isporuke — obično prema broju riječi."],
          ["Prijevod i revizija", "Prevodimo, a zatim provjeravamo točnost, terminologiju i ton."],
          ["Isporuka", "Dobivate prijevod u dogovorenom formatu, spreman za uporabu."]
        ]
      },
      faq: {
        label: "Pitanja", h2: "O našim prijevodima.",
        items: [
          ["Koliko košta prijevod?", "Cijena ovisi o jezičnom paru, vrsti teksta i roku. Prije početka dobivate ponudu s fiksnom cijenom."],
          ["Nudite li ovjerene (sudske) prijevode?", "Recite nam trebate li ovjereni prijevod za tijelo ili sud. Iskreno ćemo Vam reći možemo li ga ponuditi — ili ćemo Vam preporučiti sudskog tumača u odgovarajućoj državi."],
          ["Postupate li s mojim dokumentima povjerljivo?", "Da. Vaši se dokumenti koriste samo za prijevod i brišu se nakon projekta u roku od 30 dana nakon isporuke."],
          ["Koristite li strojno prevođenje?", "Svaki tekst prevodi i provjerava čovjek. Nikada ne isporučujemo neuređeni strojni prijevod."]
        ]
      },
      band: { h2: "Trebate tekst *na drugom jeziku?*", lead: "Recite nam jezični par, vrstu teksta i svoj rok.", cta: "Zatražite prijevod" }
    },

    creative: {
      hero: { label: "Kreativne usluge", h1: "Vizualni rad s *jasnim stavom.*", lead: "Identitet, grafika i obrada medija za tvrtke koje žele izgledati jednako dobro kao njihov rad — dosljedno na webu, u tisku i na društvenim mrežama.", cta1: "Razgovarajmo o kreativnom projektu", cta2: "Pogledajte konceptualne projekte" },
      services: {
        label: "Što nudimo", h2: "Odabrane kreativne usluge.", lead: "Usmjerene usluge koje podržavaju Vašu web stranicu i Vaš brend.",
        items: [
          { g: "01", t: "Vizualni identitet", p: "Dorada logotipa, paleta boja, tipografija i jednostavne smjernice brenda." },
          { g: "02", t: "Materijali brenda", p: "Posjetnice, predlošci za društvene mreže, memorandumi i predlošci prezentacija." },
          { g: "03", t: "Grafički dizajn", p: "Letci, plakati, brošure i grafike za kampanje." },
          { g: "04", t: "Obrada fotografija", p: "Korekcija boja, retuširanje i ujednačena obrada slika za Vašu web stranicu." },
          { g: "05", t: "Montaža videa", p: "Kratki videozapisi za web i društvene mreže — montirani, s natpisima i spremni za objavu." },
          { g: "06", t: "Obrada zvuka i glasa", p: "Čišćenje i montaža glasovnih snimki, podcasta i zvuka za video." }
        ]
      },
      approach: {
        label: "Pristup", h2: "Dizajn u službi poslovanja.",
        items: [
          ["Jedan vizualni jezik", "Web, tisak i društvene mreže koriste iste boje, fontove i ton."],
          ["Praktične datoteke", "Dobivate datoteke u formatima koji Vam stvarno trebaju, imenovane i složene."],
          ["Jasan opseg", "Svaki kreativni projekt ima dogovoren opseg i cijenu prije početka."]
        ]
      },
      work: { label: "Konceptualni projekti", h2: "Umjetničko vodstvo u praksi." },
      band: { h2: "Dajmo Vašem brendu *jasan izgled.*", lead: "Recite nam što Vam treba i gdje će se koristiti." }
    },

    work: {
      hero: { label: "Radovi", h1: "Konceptualni projekti, *izrađeni po standardu pravih.*", lead: "Svaki koncept je cjelovita, prilagodljiva web stranica za određenu vrstu tvrtke. Pokazuju kako radimo — nisu naručeni projekti klijenata." },
      filter: "Filtriraj po djelatnosti", all: "Svi", empty: "U ovoj kategoriji još nema projekata.",
      soon: { label: "U pripremi", items: ["Smještaj za odmor", "Stručne usluge", "Kreativni i digitalni projekti"], p: "Nove koncepte dodajemo čim budu gotovi." },
      band: { h2: "Ovakva web stranica *za Vašu tvrtku?*", lead: "Svaki koncept može se prilagoditi stvarnoj tvrtki — s Vašim sadržajem, brendom i jezicima." }
    },

    caseUi: {
      overview: "Pregled", goals: "Poslovni ciljevi", approach: "Pristup dizajnu", system: "Sustav dizajna", palette: "Paleta boja", type2: "Tipografija",
      roles: { display: "Naslovi", body: "Tekst", both: "Naslovi i tekst" },
      type: "Vrsta", sector: "Djelatnost", services: "Prikazane usluge", lang: "Jezik",
      desk: "Računalo — odjeljci početne stranice", mob: "Mobitel — raspored se za male zaslone slaže iznova, a ne samo smanjuje.",
      deskAlt: "Koncept web stranice %s — prikaz početne stranice na računalu", mobAlt: "Koncept web stranice %s — prikaz na mobitelu",
      note: "Ovo je konceptualni projekt tvrtke Lexora Digital koji pokazuje naš pristup. Imena, kontaktni podaci i tekstovi u uglatim zagradama su rezervirana mjesta.",
      next: "Sljedeći projekt", cta: "Razgovarajmo o sličnoj web stranici",
      band: { h2: "Ovakva web stranica *za Vašu tvrtku?*", lead: "Pristup prilagođavamo Vašoj tvrtki, sadržaju i jezicima." }
    },
    cases: {
      "studio-rosalie": {
        lead: "Smiren, elegantan koncept web stranice na jednoj stranici za kozmetički salon — osmišljen tako da rezervacija termina bude prirodan sljedeći korak.", lang: "Njemački",
        svc: ["Web dizajn", "Vizualni smjer", "Prilagodljiva izrada"],
        overview: "Studio Rosalie koncept je za neovisni kozmetički salon koji nudi tretmane lica, trepavice, obrve i dizajn noktiju. Stranica je trebala djelovati osobno i vrhunski u isto vrijeme — te jednako dobro raditi na mobitelu i na prijenosnom računalu.",
        goals: ["Na prvi pogled pokazati salon kao ugodan i kvalitetan", "Jasno predstaviti usluge i cijene", "Učiniti rezervaciju termina prirodnim sljedećim korakom", "Osobno predstaviti vlasnicu radi izgradnje povjerenja"],
        approach: ["Topla paleta pepeljasto ružičaste i bordo boje zamjenjuje uobičajenu ružičastu, uz uredničku serifnu tipografiju za naslove i čist sans-serif za čitanje.", "Fotografije salona, rada i vlasnice nose stranicu. Raspored svakoj slici daje prostor, a gumbi za rezervaciju ostaju vidljivi, ali nenametljivi."]
      },
      "mustermann-sanitaer": {
        lead: "Jasan, pouzdan koncept web stranice za vodoinstalatersku i plinoinstalatersku tvrtku — izgrađen oko jednog cilja: da telefon zazvoni.", lang: "Njemački",
        svc: ["Web dizajn", "Prilagodljiva izrada", "Struktura za konverziju"],
        overview: "Mustermann Sanitär koncept je za majstorsku obrtničku tvrtku za kupaonice, vodoinstalacije i grijanje. Kupci često dolaze s problemom i telefonom u ruci, pa su brzina i jasnoća važnije od svega.",
        goals: ["Odmah pokazati stručnost i pouzdanost", "Telefon i hitnu službu učiniti dostupnima jednim dodirom", "Objasniti usluge jednostavnim jezikom", "Graditi povjerenje stvarnim fotografijama tima i rada"],
        approach: ["Paleta tamnoplave i tople narančaste boje odaje pouzdanost i djelovanje. Broj telefona glavni je gumb posvuda, a na mobitelu ga fiksna traka za poziv drži nadohvat ruke.", "Kartice usluga, točke povjerenja i kratak odjeljak s recenzijama odgovaraju na uobičajena pitanja prije nego što ih kupac postavi."]
      },
      "kfz-werkstatt": {
        lead: "Snažan, tehnički koncept web stranice za neovisni autoservis, s uslugama, točkama povjerenja i zahtjevom za termin odmah na početku.", lang: "Njemački",
        svc: ["Web dizajn", "Umjetničko vodstvo", "Prilagodljiva izrada"],
        overview: "Ovaj koncept predstavlja neovisni autoservis kao moderan i stručan — bez uobičajenog izgleda generičkih fotografija iz te djelatnosti.",
        goals: ["Djelovati profesionalno i tehnički stručno", "Prikazati glavne usluge na prvi pogled", "Olakšati zahtjeve za termin", "Graditi povjerenje bez izmišljenih certifikata ili recenzija"],
        approach: ["Duboka tamnoplava i signalna narančasta uz zbijeni font daju stranici samouvjeren, tehnički dojam radionice. Realistične fotografije radionice pričaju priču.", "Jasna mreža usluga, četiri točke povjerenja i jednostavan obrazac za termin čine sljedeći korak očitim na svakom zaslonu."]
      }
    },

    journal: {
      hero: { label: "Journal", h1: "Vodiči kroz *europska digitalna pravila.*", lead: "Razumljivi članci o GDPR-u i kolačićima, Aktu o digitalnim uslugama i Aktu EU-a o umjetnoj inteligenciji — što pravila kažu, na koga se odnose i što učiniti." },
      note: { label: "O journalu", p: "Piše **Goran Kolouh**, osnivač tvrtke Lexora Digital — pravnik po obrazovanju koji izrađuje web stranice. Svaki vodič provjeren je prema službenim tekstovima i ažurira se kad se pravila promijene. Opća informacija, ne pravni savjet." },
      article: { by: "Autor:", min: "min čitanja", read: "Pročitajte članak", back: "Svi članci", sources: "Izvori", more: "Čitajte dalje", talk: "Javite nam se", all: "Svi članci", bio: "Pravnik po obrazovanju, izrađivač web stranica po zanimanju. Goran piše o digitalnom pravu EU-a — GDPR-u, DSA-u i Aktu o umjetnoj inteligenciji — i o tome što ono znači za one koji izrađuju i vode web stranice.", disclaimer: "Ovaj članak je opća informacija, a ne pravni savjet. Odražava pravno stanje na dan objave." },
      band: { h2: "Želite znati gdje je Vaša web stranica?", lead: "Naša besplatna GDPR provjera i provjera kolačića daje Vam jasan odgovor." }
    },

    about: {
      photoAlt: "Portret Gorana Kolouha, osnivača i direktora tvrtke Lexora Digital", photoCap: "Goran Kolouh — Osnivač i direktor", photoLine: "Jedna polovica pravo i jezik, druga polovica digitalno.",
      hero: { label: "O Lexori", h1: "Neovisni studio koji *radi preko granica.*", lead: "Lexora Digital spaja web dizajn, praktično znanje o europskim digitalnim pravilima, prevođenje i kreativni rad — za mala i srednja poduzeća diljem Europe." },
      story: {
        label: "Naša priča", h2: "Zašto web, pravo, jezik i dizajn idu zajedno.",
        p: ["Malim tvrtkama kažu da im treba web stranica, banner za kolačiće, izjava o privatnosti, prevedeni sadržaj i dosljedan izgled — obično od četiri različita pružatelja koji nikad ne razgovaraju međusobno.",
          "Lexora Digital nastala je iz jednostavne ideje: te stvari bolje funkcioniraju kad se planiraju zajedno. Lijepa web stranica koja učitava alate za praćenje bez privole je rizik. Izjava o privatnosti koju nitko ne razumije nikome ne pomaže. Prijevod koji zanemaruje dizajn kvari raspored.",
          "Studio spaja iskustvo u pravu, profesionalnom prevođenju i web dizajnu. Radimo na pet jezika i svaki korak objašnjavamo jednostavno."]
      },
      four: {
        label: "Četiri discipline", h2: "WEB · LAW · LANGUAGE · DESIGN", lead: "Jedan studio, četiri vještine — spojene u svakom projektu.",
        items: [
          { g: "</>", t: "Web", p: "Web stranice i landing stranice koje su brze, jasne i jednostavne za održavanje." },
          { g: "§", t: "Pravo", p: "Praktična usklađenost s GDPR-om i pravilima o kolačićima — informacije i provedba, ne pravni savjet." },
          { g: "⇄", t: "Jezik", p: "Prevođenje između engleskog, njemačkog, nizozemskog, španjolskog i hrvatskog." },
          { g: "Aa", t: "Dizajn", p: "Vizualni identitet, grafika i obrada medija s jasnim stavom." }
        ]
      },
      values: { h2: "Kako radimo." },
      bounds: {
        doT: "Što možete očekivati", do: ["Dogovoren opseg i cijenu prije početka rada", "Razumljiva objašnjenja na Vašem jeziku", "Iskren savjet — i kad Vam nešto ne treba", "Web stranice prijateljske prema privatnosti kao standard"],
        dontT: "Što nismo", dont: ["Odvjetnički ured — ne pružamo pravne savjete ni zastupanje", "Ured sudskih tumača — ovjereni prijevodi samo kad je to izričito navedeno", "Agencija koja Vam prodaje više nego što Vam treba"]
      }
    },

    contact: {
      hero: { label: "Kontakt", h1: "Počnimo s *razgovorom.*", lead: "Recite nam što želite postići — web stranicu, provjeru usklađenosti, prijevod ili kreativni projekt. Odgovaramo na Vašem jeziku." },
      direct: { label: "E-mail", p: "Obično odgovaramo u roku od dva radna dana." },
      next: { label: "Što slijedi", steps: [["Čitamo Vašu poruku", "i pitamo ako nešto nije jasno."], ["Predlažemo sljedeći korak", "— kratak razgovor, ponudu ili besplatnu provjeru."], ["Vi odlučujete", "Ništa ne počinje bez Vašeg odobrenja."]] },
      check: { t: "Samo želite znati je li Vaša web stranica usklađena s GDPR-om?", p: "Iskoristite besplatnu GDPR provjeru i provjeru kolačića." }
    },

    shop: {
      hero: {
        label: "Notion predlošci",
        h1: "Kitovi za EU usklađenost, *spremni u Notionu.*",
        lead: "Praktični Notion predlošci za GDPR, EU Akt o umjetnoj inteligenciji, transparentnost plaća i provjeru dobavljača — za mala i srednja poduzeća, na pet jezika.",
        cta1: "Paket svih kitova",
        cta2: "Pogledajte sve kitove",
        points: ["Hrvatski, engleski, njemački, nizozemski, španjolski", "Radi s besplatnim Notion paketom", "Pristup odmah nakon kupnje", "Jednokratno plaćanje, bez pretplate"]
      },
      kits: { label: "Kitovi", h2: "Pet kitova. *Jedan paket.*", lead: "Svaki kit je Notion workspace spreman za rad, s evidencijama, vodičima i primjerima unosa. Jezičnu verziju birate pri plaćanju." },
      cat: "Notion predložak",
      notion: "Izrađeno za Notion",
      bundleCat: "Paket · 5 Notion kitova",
      num: "5 kitova",
      vs: "{bundle} umjesto {full}",
      buy: "Kupi na Gumroadu",
      items: {
        bundle: {
          t: "EU Compliance Bundle",
          s: "5 Notion kitova",
          p: "Svih pet kitova u jednoj kupnji: GDPR, usklađenost u korištenju UI, politika korištenja UI na radnom mjestu, transparentnost plaća i procjena dobavljača."
        },
        gdpr: { t: "GDPR Compliance Kit", s: "GDPR", p: "Kontrolni popis s pozivima na članke te evidencije aktivnosti obrade, zahtjeva ispitanika, povreda osobnih podataka, izvršitelja obrade i kolačića." },
        ai: { t: "AI Compliance Toolkit", s: "Akt o UI + GDPR", p: "Registar UI alata, GDPR kontrolne točke, politika korištenja UI za zaposlenike, skripte za edukacijske videozapise i evidencija edukacija." },
        policy: { t: "AI Workplace Policy Pack", s: "Akt o UI + GDPR", p: "Politika korištenja UI, kratki vodič za zaposlenike, obrazac potvrde, zahtjevi za UI alate i evidencija edukacija." },
        pay: {
          t: "EU Pay Transparency Kit",
          s: "Direktiva (EU) 2023/970",
          p: "Politika plaća, struktura radnih mjesta i platni razredi, kalkulator razlike u plaćama, zahtjevi zaposlenika za informacijama i gotovi tekstovi."
        },
        vendor: {
          t: "Vendor & AI Supplier Assessment Kit",
          s: "GDPR + Akt o UI",
          p: "Upitnik za dobavljače, vodič za procjenu, kontrolni popis za ugovor o obradi (čl. 28. GDPR-a), registar dobavljača i evidencija procjena."
        }
      },
      how: {
        label: "Kako funkcionira",
        h2: "Od kupnje do Vašeg workspacea *u dvije minute.*",
        lead: "Bez instalacije i bez računa kod nas — predložak se kopira u Vaš vlastiti Notion workspace.",
        steps: [
          ["Odaberite kit i jezik", "Odaberite kit ili paket te pri plaćanju na Gumroadu odaberite jezičnu verziju."],
          ["Primite poveznicu", "Odmah nakon plaćanja primate poveznicu na svoj predložak."],
          ["Duplicirajte u Notion", "Otvorite poveznicu i kliknite „Duplicate” kako biste predložak kopirali u svoj Notion workspace. Besplatni paket je dovoljan."],
          ["Ispunite ga", "Slijedite vodič za postavljanje i primjere unosa te dodajte vlastite podatke."]
        ]
      },
      bounds: {
        label: "Granice",
        h2: "Što kitovi rade — a što ne.",
        doT: "Što kitovi rade",
        do: ["Daju jasnu strukturu za evidencije, registre i politike", "Primjerima unosa pokazuju kako se ispunjava svaka evidencija", "Objašnjavaju relevantna pravila EU-a razumljivim jezikom", "Pomažu Vam dokumentirati što ste napravili"],
        dontT: "Što ne rade",
        dont: ["Ne zamjenjuju pravni savjet za Vaš konkretni slučaj", "Sami po sebi ne čine Vaše poduzeće usklađenim", "Ne podnose prijave ni izvješća nadležnim tijelima umjesto Vas", "Ne razvrstavaju UI sustave i ne donose pravne odluke umjesto Vas"]
      },
      faq: {
        label: "Pitanja",
        h2: "Prije kupnje.",
        items: [
          ["Trebam li plaćeni Notion paket?", "Ne. Predlošci rade s besplatnim Notion paketom. Potreban Vam je samo Notion račun, koji možete otvoriti besplatno."],
          ["Na kojim su jezicima dostupni?", "Svaki kit dostupan je na hrvatskom, engleskom, njemačkom, nizozemskom i španjolskom. Jezičnu verziju birate pri plaćanju."],
          ["Kako dobivam predložak?", "Plaćanje i potvrdu o kupnji obrađuje Gumroad. Odmah nakon kupnje dobivate poveznicu za dupliciranje predloška u svoj Notion workspace."],
          ["Mogu li kit koristiti za više poduzeća?", "Jedna kupnja vrijedi za korištenje unutar jednog poduzeća. Ako trebate kitove za više poduzeća ili za svoje klijente, javite nam se."],
          ["Je li ovo pravni savjet?", "Ne. Kitovi su organizacijski alati i praktična polazna točka. Ne predstavljaju pravni savjet i sami po sebi ne čine Vaše poduzeće usklađenim. Za visokorizične primjene — primjerice UI pri zapošljavanju — neka Vaše konačne dokumente pregleda stručna osoba."],
          ["Prati li me netko kad kliknem „Kupi”?", "Ova stranica ne. Ne učitava Gumroad skripte i ne postavlja kolačiće. Gumbi za kupnju obične su poveznice; na stranici za plaćanje primjenjuju se Gumroadova pravila privatnosti."]
        ]
      },
      band: { h2: "Svih pet kitova *po jednoj cijeni.*", lead: "{bundle} umjesto {full} — jezičnu verziju birate pri plaćanju.", cta: "Paket svih kitova" },
      disclaimer: "Kitovi su organizacijski alati i praktična polazna točka. Ne predstavljaju pravni savjet i ne jamče usklađenost s GDPR-om, EU Aktom o umjetnoj inteligenciji ni drugim propisima."
    },

    privacy: {
      label: "Pravno", h1: "Izjava o privatnosti", lead: "Kako obrađujemo osobne podatke kada posjetite ovu web stranicu ili nas kontaktirate.", updated: "Zadnje ažuriranje: listopad 2026.",
      draft: "",
      blocks: [
        ["h2", "Voditelj obrade"],
        ["p", "Voditelj obrade podataka na ovoj web stranici je: Lexora Digital (Goran Kolouh), Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgija, gdpr@lexoradigital.com. Više podataka nalazi se u impresumu."],
        ["h2", "Hosting i zapisi poslužitelja"],
        ["p", "Ova web stranica smještena je kod Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, SAD. Pri posjetu pružatelj hostinga automatski obrađuje tehničke podatke poput IP adrese, datuma i vremena, tražene stranice, preglednika i operacijskog sustava kako bi isporučio stranicu i održao je sigurnom."],
        ["p", "Pravna osnova: čl. 6. st. 1. t. (f) GDPR-a (naš legitimni interes za sigurnu web stranicu koja radi). Prijenosi u SAD temelje se na Okviru EU-a i SAD-a za privatnost podataka i/ili standardnim ugovornim klauzulama. Rok čuvanja: najviše 30 dana."],
        ["h2", "Kontaktni obrazac i GDPR provjera i provjera kolačića"],
        ["p", "Kad koristite neki od naših obrazaca, obrađujemo podatke koje unesete (npr. ime, e-mail adresu, adresu web stranice, državu i poruku) kako bismo odgovorili na Vaš upit ili proveli provjeru koju ste zatražili."],
        ["p", "Pravna osnova: čl. 6. st. 1. t. (b) GDPR-a (predugovorne radnje na Vaš zahtjev) i čl. 6. st. 1. t. (f) GDPR-a (odgovaranje na upite). Obrasce obrađuje Formspree, Inc., SAD, na temelju ugovora o obradi podataka te Okvira EU-a i SAD-a za privatnost podataka i/ili standardnih ugovornih klauzula."],
        ["p", "Vaš upit brišemo kada više nije potreban, osim ako postoje zakonske obveze čuvanja najkasnije 12 mjeseci nakon završetka upita."],
        ["h2", "E-mail"],
        ["p", "Ako nam pišete e-mailom, obrađujemo Vašu e-mail adresu i poruku kako bismo odgovorili. Pravna osnova: čl. 6. st. 1. t. (b) ili (f) GDPR-a."],
        ["h2", "Kolačići i lokalna pohrana"],
        ["p", "Ova web stranica ne koristi kolačiće za analitiku, oglašavanje ni praćenje. Ako odaberete jezik, taj se odabir sprema u lokalnu pohranu Vašeg preglednika kako bi se stranica sljedeći put otvorila na Vašem jeziku. To je strogo nužno za funkciju koju ste zatražili i ne šalje se nama. Pojedinosti su u našoj politici kolačića."],
        ["h2", "Fontovi i vanjski resursi"],
        ["p", "Svi fontovi i skripte nalaze se na našem vlastitom poslužitelju. Pri posjetu ovoj web stranici nikakvi se podaci ne šalju Google Fontsu ni drugim mrežama trećih strana."],
        ["h2", "Vaša prava"],
        ["ul", ["Pristup podacima (čl. 15. GDPR-a)", "Ispravak (čl. 16. GDPR-a)", "Brisanje (čl. 17. GDPR-a)", "Ograničenje obrade (čl. 18. GDPR-a)", "Prenosivost podataka (čl. 20. GDPR-a)", "Prigovor na obradu na temelju legitimnog interesa (čl. 21. GDPR-a)"]],
        ["p", "Također imate pravo podnijeti pritužbu nadzornom tijelu za zaštitu podataka, osobito u državi članici EU-a u kojoj imate uobičajeno boravište ili mjesto rada belgijsko tijelo za zaštitu podataka (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Bruxelles, www.dataprotectionauthority.be."],
        ["h2", "Izmjene"],
        ["p", "Ovu izjavu ažuriramo kada se promijeni naša web stranica ili zakon. Važeća verzija uvijek je dostupna na ovoj stranici."]
      ]
    },

    cookies: {
      label: "Pravno", h1: "Politika kolačića", lead: "Ukratko: ne koristimo kolačiće za praćenje, analitiku ni oglašavanje.", updated: "Zadnje ažuriranje: listopad 2026.",
      draft: "",
      blocks: [
        ["h2", "Što koristimo"],
        ["p", "Ova web stranica ne postavlja kolačiće. U lokalnu pohranu Vašeg preglednika sprema samo jedan podatak, i to samo ako sami odaberete jezik:"],
        ["ul", ["**lexora-lang** — odabrani jezik (npr. \"hr\"). Svrha: sljedeći put otvoriti stranicu na tom jeziku. Čuva se dok ga ne izbrišete. Ne šalje se ni nama ni trećima."]],
        ["p", "Budući da je ta pohrana strogo nužna za funkciju koju ste izričito zatražili, za nju nije potreban banner za privolu."],
        ["h2", "Što ne koristimo"],
        ["ul", ["Bez analitike (npr. Google Analytics)", "Bez oglasnih piksela i piksela društvenih mreža", "Bez ugrađenih videozapisa, karata i fontova trećih strana", "Bez ikakvog praćenja među stranicama"]],
        ["h2", "Obrasci"],
        ["p", "Kada pošaljete neki od naših obrazaca, Vaši se podaci prenose našem pružatelju obrazaca. Slanje ne postavlja kolačiće na ovoj web stranici. Pojedinosti su u izjavi o privatnosti."],
        ["h2", "Vaše postavke"],
        ["p", "Spremljeni odabir jezika možete u bilo kojem trenutku pogledati i izbrisati u **Postavkama privatnosti** u podnožju stranice ili brisanjem podataka stranice u pregledniku."]
      ]
    },

    imprint: {
      label: "Pravno", h1: "Impresum", lead: "Podaci o pružatelju usluge za lexoradigital.com.", updated: "Zadnje ažuriranje: listopad 2026.",
      draft: "",
      blocks: [
        ["h2", "Pružatelj usluge"],
        ["p", "**Lexora Digital**  \nRue Jean Robbie 44  \n1060 Saint-Gilles (Bruxelles), Belgija  \nZastupa: Goran Kolouh, Osnivač i direktor"],
        ["h2", "Kontakt"],
        ["p", "Općenito: info@lexoradigital.com  \nZaštita podataka: gdpr@lexoradigital.com  \nOsnivač: kolouh@lexoradigital.com"],
        ["h2", "PDV identifikacijski broj"],
        ["p", "17636920948"],
        ["h2", "Američko društvo"],
        ["p", "**Lexora Digital C-Corp.**  \n1401 Pennsylvania Ave  \nWilmington, DE 19806  \nDelaware, SAD"],
        ["h2", "Odgovorna osoba za sadržaj"],
        ["p", "Odgovorno za novinarsko-urednički sadržaj (§ 18. st. 2. MStV): Goran Kolouh, Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgija"],
        ["h2", "Rješavanje potrošačkih sporova"],
        ["p", "Nismo spremni niti obvezni sudjelovati u postupcima rješavanja sporova pred tijelom za alternativno rješavanje potrošačkih sporova."],
        ["h2", "Odgovornost za sadržaj i poveznice"],
        ["p", "Sadržaj ove web stranice izrađujemo pažljivo, ali ne možemo jamčiti njegovu potpunost, točnost i ažurnost. Članci i pregledi usklađenosti opće su informacije, a ne pravni savjet. Nismo odgovorni za sadržaj vanjskih web stranica na koje upućujemo."]
      ]
    },

    accessibility: {
      label: "Pravno", h1: "Izjava o pristupačnosti", lead: "Želimo da ovu web stranicu mogu koristiti svi.", updated: "Zadnje ažuriranje: listopad 2026.",
      draft: "",
      blocks: [
        ["h2", "Naš cilj"],
        ["p", "Težimo ispunjavanju Smjernica za pristupačnost web sadržaja (WCAG) 2.2 na razini AA."],
        ["h2", "Što smo učinili"],
        ["ul", ["Semantička struktura s naslovima, orijentirima i poveznicom za preskakanje na sadržaj", "Potpuno upravljanje tipkovnicom s vidljivim fokusom", "Kontrast teksta provjeren prema WCAG AA", "Animacije se smanjuju ili isključuju kada Vaš uređaj traži smanjeno kretanje", "Obrasci s vidljivim oznakama i jasnim porukama o pogreškama", "Opisni alternativni tekstovi za slike"]],
        ["h2", "Poznata ograničenja"],
        ["ul", ["Animirani planet je ukrasni element i skriven je od čitača zaslona.", "Snimke zaslona konceptualnih projekata sadrže sitan tekst koji je opisan u okolnom tekstu, a ne čita se u cijelosti."]],
        ["h2", "Povratne informacije"],
        ["p", "Ako na ovoj web stranici naiđete na prepreku, javite nam na info@lexoradigital.com. Odgovorit ćemo i raditi na rješenju."],
        ["h2", "Stanje"],
        ["p", "Ova izjava temelji se na samoprocjeni provedenoj u listopadu 2026."]
      ]
    }
  },

  form: {
    optional: "(neobavezno)", privacyLink: "izjavi o privatnosti", note: "Odgovaramo na Vašem jeziku.",
    js: {
      required: "Molimo ispunite ovo polje.", email: "Molimo unesite ispravnu e-mail adresu.", url: "Molimo unesite ispravnu adresu web stranice, npr. primjer.hr.",
      consent: "Molimo potvrdite kako bismo mogli obraditi Vaš zahtjev.",
      fix: "Molimo provjerite označena polja.", sending: "Slanje…",
      error: "Nešto nije u redu. Pokušajte ponovno — ili nam pišite izravno e-mailom.",
      notConnected: "Ovaj obrazac još nije povezan. Za sada nam pišite izravno e-mailom."
    },
    contact: {
      title: "Recite nam o svom projektu", intro: "Neobavezna polja možete ostaviti praznima.",
      submit: "Pošaljite poruku", subject: "Novi upit putem lexoradigital.com",
      consent: "Slažem se da Lexora Digital koristi moje podatke kako bi odgovorila na moj upit. Više u {privacy}.",
      success: ["Hvala — Vaša poruka je poslana.", "Odgovorit ćemo što prije, na Vašem jeziku."],
      f: { name: "Ime", email: "E-mail", company: "Naziv tvrtke", language: "Željeni jezik", service: "S čime Vam možemo pomoći?", budget: "Budžet", message: "Vaša poruka", messagePh: "Što želite postići?", choose: "Odaberite" },
      services: [["web", "Web stranica (dizajn i razvoj)"], ["design", "Kreativne i dizajnerske usluge"], ["compliance", "Savjetovanje o GDPR-u i kolačićima"], ["check", "GDPR provjera i provjera kolačića / ispravak za 99 €"], ["translation", "Prijevod"], ["other", "Nešto drugo"]],
      budgets: [["<500", "Manje od 500 €"], ["500-1500", "500–1.500 €"], ["1500-5000", "1.500–5.000 €"], ["5000+", "Više od 5.000 €"], ["unsure", "Još ne znam"]]
    },
    check: {
      title: "Zatražite besplatnu provjeru", intro: "Rezultat šaljemo na Vašu e-mail adresu.",
      submit: "Besplatno provjerite moju stranicu", subject: "Zahtjev za GDPR provjeru i provjeru kolačića",
      consent: "Slažem se da se moji podaci koriste samo za provedbu provjere i slanje rezultata. Više u {privacy}.",
      success: ["Hvala — Vaš zahtjev je zaprimljen.", "Rezultat ćemo Vam poslati e-mailom. Ako pronađemo nedostatke, dobit ćete ponudu za ispravak od 99 € — na Vašoj stranici ništa se ne mijenja bez Vašeg odobrenja."],
      f: { website: "Adresa web stranice", email: "E-mail za rezultat", country: "Država sjedišta tvrtke", platform: "Platforma web stranice", message: "Trebamo li nešto znati?", choose: "Odaberite" },
      countries: [["DE", "Njemačka"], ["AT", "Austrija"], ["CH", "Švicarska"], ["NL", "Nizozemska"], ["BE", "Belgija"], ["ES", "Španjolska"], ["HR", "Hrvatska"], ["UK", "Ujedinjeno Kraljevstvo"], ["EU", "Druga država EU-a"], ["other", "Druga država"]],
      platforms: [["wordpress", "WordPress"], ["wix", "Wix"], ["squarespace", "Squarespace"], ["shopify", "Shopify"], ["webflow", "Webflow"], ["jimdo", "Jimdo"], ["html", "Po mjeri / HTML"], ["unknown", "Ne znam"]]
    }
  },

  footer: {
    pos: "Neovisni digitalni studio za web stranice, digitalnu usklađenost, prijevode i dizajn — za tvrtke diljem Europe i šire.",
    studio: "Studio", services: "Usluge", legal: "Pravno", email: "E-mail", emailPh: "e-mail adresa",
    privacy: "Izjava o privatnosti", cookies: "Politika kolačića", imprint: "Impresum", accessibility: "Pristupačnost", settings: "Postavke privatnosti", langs: "Jezici"
  },
  privacyDialog: {
    title: "Postavke privatnosti",
    p: "Ova web stranica ne koristi kolačiće za analitiku, oglašavanje ni praćenje i ne učitava fontove ni skripte trećih strana. Nema ničega za što biste morali dati privolu.",
    rows: [["Strogo nužni", "Uvijek aktivni"], ["Analitika", "Ne koristi se"], ["Marketing", "Ne koristi se"]],
    pref: "Ako odaberete jezik, on se pamti u lokalnoj pohrani Vašeg preglednika kako bi se stranica sljedeći put otvorila na tom jeziku. Nikada nam se ne šalje.",
    prefSet: "Spremljeni odabir jezika: %s", prefNone: "Nema spremljenog odabira jezika.",
    clear: "Izbriši spremljeni odabir", close: "Zatvori", more: "Pročitajte politiku kolačića"
  },
  notFound: {
    title: "Stranica nije pronađena — Lexora Digital",
    h1: "Ova je stranica *izašla iz orbite.*",
    lead: "Stranica koju tražite ne postoji ili je premještena. Vratit ćemo Vas na pravi put.",
    home: "Natrag na početnu", contact: "Kontaktirajte nas"
  }
};
