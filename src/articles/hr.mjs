// Članci za journal — Hrvatski
export default [
  {
    slug: "gdpr-website-legal-document",
    tag: "GDPR",
    t: "Vaša web stranica već je pravni dokument",
    d: "GDPR i pravila o kolačićima nisu natpis koji se dodaje na kraju. To su dizajnerske odluke — a najjeftinije ih je donijeti prije prvog retka koda.",
    lead: "GDPR i pravila o kolačićima nisu natpis koji se dodaje na kraju. To su dizajnerske odluke — a najjeftinije ih je donijeti prije prvog retka koda.",
    date: "Listopad 2026.", iso: "2026-10-18",
    blocks: [
      ["p", "Većina web stranica koje provjeravam nije usklađena s propisima ne zato što je njihovim vlasnicima svejedno, nego zato što je pravo stiglo posljednje. Dizajn je odobren, programer ga je izradio, stranica je objavljena — a onda se netko sjetio natpisa o kolačićima i zalijepio ga na vrh."],
      ["p", "Upravo je taj redoslijed problem. Dok natpis stigne, fontovi se već učitavaju s poslužitelja u drugoj zemlji, karta već postavlja kolačiće, a analitička skripta već se pokreće prije nego što je itko išta kliknuo. Natpis postaje ukras preko odluka koje su donesene bez njega."],
      ["quote", "Web stranica nije brošura kojoj je prikvačena politika privatnosti. Svaki element na njoj odluka je o tuđim podacima."],

      ["h2", "Svaki element pravna je odluka"],
      ["p", "Kad izrađujete web stranicu, ne birate samo kako će izgledati. Birate koje tvrtke dobivaju podatke vaših posjetitelja, kada i na kojoj pravnoj osnovi. Nekoliko sasvim običnih primjera:"],
      ["ul", [
        "**Web fontovi.** Učitavanje fontova izravno s poslužitelja treće strane šalje IP adresu svakog posjetitelja tom pružatelju. Njemački sud (LG München I) 2022. godine dosudio je posjetitelju naknadu štete upravo zbog toga. Smještanje fontova na vlastiti poslužitelj ne košta ništa i uklanja problem.",
        "**Ugrađeni videozapisi i karte.** YouTube videozapis ili Google karta mogu postaviti kolačiće i kontaktirati vanjske poslužitelje čim se stranica učita. Jednostavno rezervirano mjesto „kliknite za učitavanje” to rješava.",
        "**Analitika.** Alati za praćenje koji pohranjuju identifikatore na uređaju u pravilu prvo trebaju privolu. Rješenja bez kolačića koja poštuju privatnost često ne trebaju — to je dizajnerski izbor, a ne pravna sitnica.",
        "**Kontaktni obrasci.** Svaki obrazac prikuplja osobne podatke. Tko prima poruke, gdje se pohranjuju i koliko dugo?",
        "**Chat widgeti, alati za newsletter, sustavi za rezervacije.** Svaki od njih obično je izvršitelj obrade kojem je potreban ugovor (članak 28. GDPR-a) i redak u vašoj politici privatnosti."
      ]],
      ["p", "Ništa od toga nije egzotično. To je uobičajena anatomija poslovne web stranice. Upravo zato pravno znanje pripada u brief, uz paletu boja i mapu stranice."],

      ["h2", "Što zakon zapravo traži"],
      ["p", "Bez žargona, pravila za tipičnu poslovnu web stranicu svode se na nekoliko načela:"],
      ["ul", [
        "**Privola prije kolačića koji nisu nužni.** Prema pravilima o e-privatnosti (članak 5. stavak 3. Direktive o e-privatnosti, prenesen u nacionalna prava — u Hrvatskoj Zakonom o elektroničkim komunikacijama), pohranjivanje ili čitanje podataka na uređaju zahtijeva privolu, osim ako je to strogo nužno za uslugu koju je posjetitelj zatražio.",
        "**Prava privola, a ne trik.** Sud Europske unije presudio je u predmetu **Planet49** (2019.) da unaprijed označeni kvadratići nisu valjana privola. Europska nadzorna tijela očekuju da je „odbij” jednako jednostavno kao „prihvati”.",
        "**Pravna osnova za svaku obradu.** Članak 6. GDPR-a: privola, ugovor, pravna obveza, legitimni interes — potrebna vam je jedna i morate znati koja.",
        "**Transparentnost.** Članak 13. GDPR-a: jasnim jezikom recite što prikupljate, zašto, tko to prima i koliko dugo čuvate.",
        "**Tehnička i integrirana zaštita podataka.** Članak 25. GDPR-a doslovno traži da se zaštita podataka ugradi u sustav od samog početka. Sam zakon kaže: prvo oblikovati, a ne kasnije krpati.",
        "**Oprez pri prijenosu izvan EU-a.** Mnogi alati šalju podatke u SAD. Okvir za privatnost podataka EU-SAD (od srpnja 2023.) obuhvaća certificirane tvrtke, ali i dalje morate znati koje alate koristite i na kojoj osnovi."
      ]],

      ["h2", "Zašto je naknadno popravljanje skuplje"],
      ["p", "Rizik iz naslova jest kazna prema GDPR-u: do 20 milijuna eura ili 4 % ukupnog godišnjeg prometa na svjetskoj razini. Za malu tvrtku to je rijetko realna prijetnja. Realne prijetnje manje su i češće:"],
      ["ul", [
        "opomene konkurenata ili udruga — uobičajene u Njemačkoj i Austriji;",
        "zahtjevi posjetitelja za naknadu nematerijalne štete prema članku 82. GDPR-a;",
        "pritužbe nadzornom tijelu, koje zatim postavlja pitanja na koja morate odgovoriti;",
        "i tihi trošak: ponovna izrada dijelova stranice koji su se mogli odmah napraviti kako treba."
      ]],
      ["p", "Zamjena ugrađene karte, ponovno smještanje fontova, preslagivanje analitike i prepisivanje politike privatnosti nakon objave traju dulje nego da se to učini tijekom izrade. Pravno znanje primijenjeno na vrijeme jednostavno je jeftinije."],

      ["h2", "Što se mijenja — a što ne"],
      ["p", "Europska komisija u studenom 2025. predložila je „Digital Omnibus” koji bi, među ostalim, pravila o kolačićima premjestio u GDPR i uveo neke iznimke, primjerice za određeno mjerenje posjećenosti. U listopadu 2026. taj je dio **i dalje nacrt**: Vijeće nije usuglasilo pregovaračko stajalište i ništa nije doneseno."],
      ["p", "Praktično pravilo je jednostavno: **gradite za važeće pravo, a ne za prijedlog.** Sadašnja pravila o privoli primjenjuju se danas. Ako se pravila promijene, stranicu s urednom logikom privole bit će i najlakše prilagoditi."],

      ["h2", "Kratki popis za vašu sljedeću web stranicu"],
      ["check", [
        "Popišite svaku uslugu treće strane koju će stranica učitavati — prije nego što se dizajn odobri.",
        "Fontove i ključne skripte smjestite na vlastiti poslužitelj gdje god možete.",
        "Videozapise, karte i sadržaje društvenih mreža stavite iza rezerviranog mjesta „kliknite za učitavanje”.",
        "Blokirajte kolačiće koji nisu nužni do davanja privole; neka „odbij” bude jednako vidljiv kao „prihvati”.",
        "Sklopite ugovore o obradi s pružateljima obrazaca, hostinga, newslettera i chata.",
        "Politiku privatnosti napišite prema stvarnim postavkama — ne prema predlošku."
      ]],

      ["h2", "Bit"],
      ["p", "Pravo nije neprijatelj dobrog dizajna. Uredne, brze web stranice koje učitavaju samo ono što im treba obično su istodobno usklađenije i ugodnije za korištenje. Najbolji trenutak za razmišljanje o GDPR-u jest dok još odlučujete što će stranica biti. Nakon toga više ne oblikujete — popravljate."],
      ["note", "Želite znati gdje je vaša trenutačna web stranica? Naša **besplatna GDPR provjera i provjera kolačića** pokazuje što se učitava, što postavlja kolačiće i što treba ispraviti — a za 99 € to ispravljamo umjesto vas."]
    ],
    sources: [
      ["GDPR — Uredba (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["Direktiva o e-privatnosti 2002/58/EZ (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2002/58/oj"],
      ["Sud EU-a, Planet49, C-673/17 (2019.)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["Europska komisija — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "digital-services-act-business",
    tag: "DSA",
    t: "Akt o digitalnim uslugama ne tiče se samo velikih tehnoloških tvrtki",
    d: "Naslovi govore o rekordnim kaznama za globalne platforme. No DSA određuje i što se događa kad vaša tvrtka objavljuje recenzije, prodaje na tržnici ili joj se suspendira račun.",
    lead: "Naslovi govore o rekordnim kaznama za globalne platforme. No DSA oblikuje i ono što se događa kad vaša tvrtka objavljuje recenzije, prodaje na internetskoj tržnici — ili se jednog jutra probudi sa suspendiranim računom.",
    date: "Listopad 2026.", iso: "2026-10-18",
    blocks: [
      ["p", "Europska komisija u prosincu 2025. izrekla je platformi X kaznu od 120 milijuna eura prema Aktu o digitalnim uslugama. U srpnju 2026. AliExpress je kažnjen s 550 milijuna eura jer nije na odgovarajući način postupao s nezakonitim i nesigurnim proizvodima. Tko čita samo naslove, pomislit će da je DSA zakon o šačici divova."],
      ["p", "Nije. Divovi nose najteže obveze, ali DSA je izgrađen u slojevima — a neki od njih dopiru do običnih tvrtki na dva vrlo različita načina: kao **pružatelja** digitalne usluge i kao **korisnika** platformi o kojima ovise."],
      ["quote", "Ne treba vam 45 milijuna korisnika da bi vas DSA dotaknuo. Dovoljno je da smještate tuđi sadržaj — ili da ovisite o platformi koja to čini."],

      ["h2", "Slojevi, jednostavnim jezikom"],
      ["p", "DSA se primjenjuje na „usluge posredovanja” — usluge koje prenose, pohranjuju ili objavljuju informacije koje su dostavili drugi. Obveze se nadograđuju:"],
      ["ul", [
        "**Sve usluge posredovanja** — osnovne obveze poput kontaktne točke i jasnih uvjeta poslovanja.",
        "**Usluge smještaja informacija na poslužitelju (hosting)** — tko pohranjuje informacije u ime korisnika, mora ponuditi način prijave nezakonitog sadržaja (prijava i postupanje, članak 16.) i obrazložiti odluke o ograničavanju sadržaja (obrazloženje, članak 17.).",
        "**Internetske platforme** — usluge smještaja koje sadržaj korisnika i javno šire, poput foruma, društvenih mreža i internetskih tržnica: sustavi pritužbi, transparentnost oglašavanja, zabrana obmanjujućeg dizajna sučelja („mračni obrasci”, članak 25.), zaštita maloljetnika.",
        "**Vrlo velike platforme i tražilice** — više od 45 milijuna mjesečnih korisnika u EU-u: procjene sistemskih rizika, neovisne revizije, pristup podacima za istraživače."
      ]],
      ["p", "Obična poslovna web stranica koja prikazuje vaš vlastiti sadržaj u pravilu uopće nije usluga posredovanja. No čim dopustite drugima da objavljuju — recenzije kupaca, forum zajednice, ponude drugih prodavatelja, datoteke koje učitavaju korisnici — možda ste stali na prve prečke te ljestvice."],

      ["h2", "Kad vaša web stranica postane domaćin"],
      ["p", "Ovdje pravno znanje mijenja dizajn. Dodavanje odjeljka za recenzije ili male tržnice nije samo nova funkcija; to je izbor pravne uloge. Ako se DSA primjenjuje, izrada treba nekoliko stvari koje je lako uključiti na početku, a nespretno dodati kasnije:"],
      ["ul", [
        "vidljiv način na koji svatko može prijaviti sadržaj koji smatra nezakonitim;",
        "postupak za te prijave — tko ih pregledava, koliko brzo i kako se odluke bilježe;",
        "kratko obrazloženje korisniku čiji je sadržaj uklonjen ili ograničen;",
        "uvjete poslovanja koji jednostavnim riječima kažu što je dopušteno i kako funkcionira moderiranje."
      ]],
      ["p", "Za manje sudionike postoji dobra vijest: **mikro i mala poduzeća** izuzeta su od većine dodatnih obveza za internetske platforme (članak 19.). Osnovne obveze smještaja informacija, međutim, primjenjuju se bez obzira na veličinu. Tko točno zna gdje je ta granica, ne gradi ni previše ni premalo."],

      ["h2", "Ono što većina previdi: vaša prava kao korisnika platformi"],
      ["p", "Za mnoge tvrtke DSA je važniji kao **alat** nego kao obveza. Ako prodajete preko internetske tržnice, oglašavate se na društvenim mrežama ili za rezervacije ovisite o profilu, DSA vam daje prava kakva prije niste imali:"],
      ["ul", [
        "**Obrazloženje.** Ako platforma ukloni vaš sadržaj, smanji mu vidljivost, suspendira vaš račun ili obustavi plaćanja, mora vam dati jasno obrazloženje (članak 17.).",
        "**Pritužbu.** Internetske platforme moraju nuditi besplatan interni sustav pritužbi, a odluke se ne smiju donositi isključivo automatizirano (članak 20.).",
        "**Neovisnu provjeru.** Možete se obratiti certificiranom tijelu za izvansudsko rješavanje sporova (članak 21.).",
        "**Transparentnost oglašavanja.** Oglasi moraju pokazivati tko stoji iza njih i glavne parametre ciljanja (članak 26.)."
      ]],
      ["p", "U praksi se suspendirana trgovina ili oglasni račun često tretira kao problem korisničke službe. No to je i pravni problem — a tvrtka koja u pritužbi može navesti pravi članak ima mnogo veće izglede za stvarni odgovor."],

      ["h2", "Prodaja na internetskim tržnicama: sljedivost"],
      ["p", "Internetske tržnice moraju prikupiti i provjeriti osnovne podatke o trgovcima koji preko njih prodaju — ime, kontakt podatke, podatke o registraciji i plaćanju (članak 30.). Ako prodajete na tržnici, računajte na te zahtjeve i neka vaši podaci o tvrtki budu posvuda jednaki: na web stranici, u impresumu i u profilima prodavatelja. Nedosljednost je jedan od najčešćih razloga kašnjenja i suspenzija."],

      ["h2", "Pouka za svaku web stranicu"],
      ["p", "Zabrana mračnih obrazaca u DSA-u formalno se primjenjuje na internetske platforme. No načelo iza nje — ne oblikujte sučelja koja ljude navode na odluke koje nisu namjeravali donijeti — provlači se i kroz potrošačko pravo i pravo zaštite podataka. Unaprijed odabrane opcije, skriveni gumbi „odbij” i zbunjujući postupci otkazivanja sve se češće smatraju pravnim problemom, a ne samo lošim ukusom. Pošten dizajn postaje zahtjev usklađenosti."],

      ["h2", "Bit"],
      ["p", "DSA podsjeća da digitalna prisutnost nikad nije samo vaša. Ona živi na poslužiteljima, platformama i tržnicama s vlastitim pravilima — a sada i sa zakonskim obvezama prema vama. Tko razumije ta pravila, može odgovorno oblikovati funkcije i braniti svoje poslovanje kad platforma pogriješi."],
      ["note", "Planirate odjeljak za recenzije, zajednicu ili tržnicu? Oblikujemo ga od prvog dana s pravim postupkom prijave i moderiranja — **javite nam se** u vezi sa svojim projektom."]
    ],
    sources: [
      ["Akt o digitalnim uslugama — Uredba (EU) 2022/2065 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"],
      ["Europska komisija — Akt o digitalnim uslugama", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"],
      ["Europska komisija — Kazna od 550 milijuna eura za AliExpress (srpanj 2026.)", "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"],
      ["Goran Kolouh na Mediumu — The fine that missed the point (EN)", "https://gorankolouch.medium.com/the-fine-that-missed-the-point-why-platform-xs-anti-muslim-amplification-is-a-digital-services-b7007ec68ff0"]
    ]
  },

  {
    slug: "eu-ai-act-website",
    tag: "Akt o UI",
    t: "Vaš chatbot mora reći da je chatbot",
    d: "Obveze transparentnosti iz Akta o umjetnoj inteligenciji primjenjuju se od 2. kolovoza 2026. Što je Digital Omnibus odgodio, što nije — i što poslovna web stranica treba ugraditi već sada.",
    lead: "Obveze transparentnosti iz Akta o umjetnoj inteligenciji primjenjuju se od 2. kolovoza 2026. Što je Digital Omnibus odgodio, što nije — i što poslovna web stranica treba ugraditi već sada.",
    date: "Listopad 2026.", iso: "2026-10-18",
    blocks: [
      ["p", "Mnoge su tvrtke ovog ljeta o Aktu o umjetnoj inteligenciji čule uglavnom jedno: „odgođen je”. To je samo pola istine. Digital Omnibus, donesen u lipnju i na snazi od kraja srpnja 2026., odgodio je pravila za UI sustave **visokog rizika**. Nije odgodio pravila koja će najvjerojatnije pogoditi običnu poslovnu web stranicu."],
      ["p", "Ako vaša stranica ima chatbot, objavljuje slike generirane umjetnom inteligencijom ili sadržaj izrađujete uz pomoć UI-ja, relevantne obveze već se primjenjuju."],
      ["quote", "Transparentnost je dio Akta o UI-ju koji dotiče gotovo sve — i nikad nije odgođen."],

      ["h2", "Vremenski okvir, kakav je danas"],
      ["ul", [
        "**1. kolovoza 2024.** — Akt o UI-ju stupa na snagu.",
        "**2. veljače 2025.** — primjenjuju se zabranjene prakse (poput manipulativnog ili iskorištavajućeg UI-ja) i obveza pismenosti u području UI-ja.",
        "**2. kolovoza 2025.** — primjenjuju se pravila za UI modele opće namjene.",
        "**2. kolovoza 2026.** — primjenjuju se obveze transparentnosti (članak 50.) i većina preostalih pravila.",
        "**2. prosinca 2026.** — nova zabrana UI sustava koji generiraju intimne snimke bez pristanka; kraj prijelaznog razdoblja za strojno čitljivo označavanje kod sustava koji su već na tržištu.",
        "**2. prosinca 2027.** — pravila za samostalne sustave visokog rizika (Prilog III.), poput UI-ja pri zapošljavanju ili odlukama o kreditima — odgođena Omnibusom.",
        "**2. kolovoza 2028.** — pravila visokog rizika za UI ugrađen u regulirane proizvode (Prilog I.)."
      ]],

      ["h2", "Što se danas primjenjuje na poslovnu web stranicu"],
      ["h3", "1. Chatbot mora biti prepoznatljiv kao UI"],
      ["p", "UI sustavi koji izravno komuniciraju s ljudima moraju biti oblikovani tako da ljudi znaju da razgovaraju sa strojem, osim ako je to očito iz konteksta (članak 50. stavak 1.). Formalno ta obveza pripada pružatelju sustava. U praksi, međutim, to moraju znati vaši posjetitelji — pa obavijest pripada vašem dizajnu: jasna oznaka na početku razgovora, a ne rečenica skrivena u politici privatnosti."],
      ["h3", "2. Uvjerljivi krivotvoreni sadržaji moraju se označiti"],
      ["p", "Objavljujete li slike, zvuk ili videozapise generirane ili izmijenjene umjetnom inteligencijom koji izgledaju stvarno — realističnu „fotografiju” osobe, mjesta ili događaja — morate navesti da su umjetni (članak 50. stavak 4.). Očito umjetnička, satirična ili fikcionalna djela imaju blaži, prilagođeni režim. Stilizirana ilustracija nije problem; realistična lažna „fotografija kupca” jest."],
      ["h3", "3. Tekstovi od javnog interesa koje je napisao UI"],
      ["p", "Tekst generiran umjetnom inteligencijom koji se objavljuje kako bi se javnost informirala o pitanjima od javnog interesa mora se označiti — osim ako ga je pregledao čovjek i netko snosi uredničku odgovornost. Za poslovni blog pouka je jednostavna: neka u procesu ostane ljudski urednik i stojte iza onoga što objavljujete."],
      ["h3", "4. Pismenost u području UI-ja u vašem timu"],
      ["p", "Od veljače 2025. organizacije koje koriste UI sustave moraju poduzeti mjere kako bi osobe koje ih koriste u njihovo ime imale dostatnu razinu pismenosti u području UI-ja (članak 4.). Omnibus je to ublažio — više ne morate jamčiti određenu razinu za svaku osobu — ali obveza poduzimanja mjera ostaje. Kratke interne smjernice i osnovna obuka računaju se."],

      ["h2", "Kada UI postaje visokorizičan"],
      ["p", "Neke se primjene smatraju visokorizičnima jer mogu odlučivati o prilikama ljudi: probir prijava za posao, ocjenjivanje zaposlenika, procjena kreditne sposobnosti, pristup obrazovanju ili osnovnim uslugama. Ako vaša web stranica ili postupak zapošljavanja koristi UI za rangiranje kandidata, blizu ste toj kategoriji. Detaljne obveze — upravljanje rizikom, dokumentacija, ljudski nadzor — sada se primjenjuju od **prosinca 2027.** To nije razlog za čekanje; to je vrijeme za pripremu."],
      ["p", "Ovdje zakon ima i praznine. Kako sam već drugdje tvrdio, privatni poslodavci koji koriste UI pri zapošljavanju nisu dužni prije uvođenja provesti procjenu učinka na temeljna prava — provjeru koju Akt zahtijeva za kredite i osiguranje. Pravno znanje ovdje znači znati ne samo što je propisano, nego i što je mudro."],

      ["h2", "Akt o UI-ju ne zamjenjuje GDPR"],
      ["p", "Razgovor s chatbotom pun je osobnih podataka. GDPR se primjenjuje usporedno: potrebna vam je pravna osnova, ugovor o obradi s pružateljem chatbota, napomena u politici privatnosti i plan koliko se dugo razgovori čuvaju. Odluke s pravnim ili sličnim značajnim učinkom ne smiju se prepustiti isključivo automatiziranoj obradi (članak 22. GDPR-a). Većina problema s usklađenošću UI-ja na web stranicama na kraju su problemi zaštite podataka."],

      ["h2", "Kako izgledaju kazne"],
      ["p", "Kršenje zabranjenih praksi može stajati do 35 milijuna eura ili 7 % svjetskog prometa; većina ostalih povreda, uključujući transparentnost, do 15 milijuna eura ili 3 %. Za mala i srednja poduzeća te start-upove primjenjuje se niži od dvaju iznosa. Kao i kod GDPR-a, realan rizik za malu tvrtku nije toliko najviša kazna koliko pritužba, nalog za ispravak — ili izgubljeno povjerenje."],

      ["h2", "Kratki popis"],
      ["check", [
        "Popišite svaki UI alat na svojoj web stranici i u svojim procesima.",
        "Na početku svakog razgovora jasno označite chatbot kao UI.",
        "Označite realistične slike, zvuk i videozapise generirane umjetnom inteligencijom.",
        "Neka za objavljeni sadržaj odgovara ljudski urednik.",
        "Ažurirajte politiku privatnosti i ugovore o obradi za UI alate.",
        "Napišite interne smjernice o UI-ju na jednoj stranici za svoj tim."
      ]],

      ["h2", "Bit"],
      ["p", "Uz umjetnu inteligenciju web stranici se u jedno poslijepodne mogu dodati impresivne funkcije. Zakon postavlja sporije pitanje: znaju li ljudi s druge strane s čime imaju posla? Ugraditi tu iskrenost u dizajn od samog početka nije teret. Upravo to funkciju čini dovoljno pouzdanom da se koristi."],
      ["note", "Želite dodati chatbot ili UI funkcije na svoju web stranicu? Oblikujemo ih s pravim obavijestima i uredno riješenom privatnošću — **javite nam se**."]
    ],
    sources: [
      ["Akt o umjetnoj inteligenciji — Uredba (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["Europska komisija — Vremenski okvir Akta o UI-ju", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
      ["Gibson Dunn — AI Act Omnibus: odgođeni rokovi za visoki rizik (EN)", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"],
      ["Goran Kolouh na Mediumu — The algorithm Europe forgot to check (EN)", "https://gorankolouch.medium.com/the-algorithm-europe-forgot-to-check-1bc7f0ac18d2"]
    ]
  }
];
