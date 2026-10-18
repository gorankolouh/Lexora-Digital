// Journal-artikelen — Nederlands
export default [
  {
    slug: "gdpr-website-legal-document",
    tag: "AVG",
    t: "Uw website is al een juridisch document",
    d: "De AVG en de cookieregels zijn geen banner die u aan het eind toevoegt. Het zijn ontwerpbeslissingen — en die neemt u het goedkoopst vóór de eerste regel code.",
    lead: "De AVG en de cookieregels zijn geen banner die u aan het eind toevoegt. Het zijn ontwerpbeslissingen — en die neemt u het goedkoopst vóór de eerste regel code.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "De meeste websites die ik controleer, voldoen niet aan de regels omdat het recht als laatste kwam — niet omdat de eigenaars er niet om geven. Het ontwerp werd goedgekeurd, de ontwikkelaar bouwde het, de site ging live — en toen dacht iemand aan de cookiebanner en plakte er een bovenop."],
      ["p", "Die volgorde is het probleem. Tegen de tijd dat de banner komt, laden de lettertypen al van een server in een ander land, plaatst de kaart al cookies en draait het analysescript al voordat iemand ergens op heeft geklikt. De banner wordt een decoratie over beslissingen die zonder hem zijn genomen."],
      ["quote", "Een website is geen brochure met een privacyverklaring eraan vast. Elk element erop is een beslissing over de gegevens van iemand anders."],

      ["h2", "Elk element is een juridische beslissing"],
      ["p", "Wie een website bouwt, kiest niet alleen hoe die eruitziet. U kiest welke bedrijven de gegevens van uw bezoekers ontvangen, wanneer en op welke rechtsgrond. Een paar heel gewone voorbeelden:"],
      ["ul", [
        "**Webfonts.** Lettertypen die rechtstreeks van de server van een derde worden geladen, sturen het IP-adres van elke bezoeker naar die aanbieder. In 2022 kende een Duitse rechter (LG München I) een bezoeker precies daarvoor schadevergoeding toe. De lettertypen zelf hosten kost niets en lost het op.",
        "**Ingesloten video's en kaarten.** Een YouTube-video of Google-kaart kan cookies plaatsen en externe servers benaderen zodra de pagina laadt. Een eenvoudige „klik om te laden”-placeholder lost dat op.",
        "**Analyse.** Trackingtools die identificatoren op het apparaat opslaan, hebben doorgaans eerst toestemming nodig. Privacyvriendelijke, cookieloze oplossingen vaak niet — dat is een ontwerpkeuze, geen juridisch detail.",
        "**Contactformulieren.** Elk formulier verzamelt persoonsgegevens. Wie ontvangt de inzendingen, waar worden ze bewaard en hoe lang?",
        "**Chatwidgets, nieuwsbrieftools, boekingssystemen.** Elk daarvan is meestal een verwerker die een overeenkomst nodig heeft (artikel 28 AVG) en een regel in uw privacyverklaring."
      ]],
      ["p", "Niets hiervan is exotisch. Het is de normale anatomie van een bedrijfswebsite. Juist daarom hoort juridische kennis in de briefing, naast het kleurenpalet en de sitemap."],

      ["h2", "Wat de wet werkelijk vraagt"],
      ["p", "Zonder jargon komen de regels voor een gewone bedrijfswebsite neer op een handvol principes:"],
      ["ul", [
        "**Toestemming vóór niet-noodzakelijke cookies.** Volgens de ePrivacy-regels (artikel 5, lid 3, van de ePrivacyrichtlijn, nationaal omgezet — in Nederland in artikel 11.7a Telecommunicatiewet) is voor het opslaan of uitlezen van informatie op het apparaat toestemming nodig, tenzij dat strikt noodzakelijk is voor de dienst waar de bezoeker om vroeg.",
        "**Echte toestemming, geen truc.** Het Hof van Justitie van de EU oordeelde in **Planet49** (2019) dat vooraf aangevinkte vakjes geen geldige toestemming zijn. Europese toezichthouders verwachten dat „weigeren” even eenvoudig is als „accepteren”.",
        "**Een rechtsgrond voor elke verwerking.** Artikel 6 AVG: toestemming, overeenkomst, wettelijke plicht, gerechtvaardigd belang — u hebt er één nodig, en u moet weten welke.",
        "**Transparantie.** Artikel 13 AVG: vertel mensen in begrijpelijke taal wat u verzamelt, waarom, wie het ontvangt en hoe lang u het bewaart.",
        "**Gegevensbescherming door ontwerp en door standaardinstellingen.** Artikel 25 AVG eist letterlijk dat gegevensbescherming vanaf het begin in het systeem wordt ingebouwd. De wet zegt het zelf: eerst ontwerpen, niet later repareren.",
        "**Zorgvuldigheid bij doorgifte buiten de EU.** Veel tools sturen gegevens naar de VS. Het EU-VS Data Privacy Framework (sinds juli 2023) dekt gecertificeerde bedrijven, maar u moet nog steeds weten welke tools u gebruikt en op welke grond."
      ]],

      ["h2", "Waarom achteraf repareren duurder is"],
      ["p", "Het risico uit de krantenkoppen is de AVG-boete: tot € 20 miljoen of 4% van de wereldwijde jaaromzet. Voor een klein bedrijf is dat zelden de realistische dreiging. De realistische dreigingen zijn kleiner en komen vaker voor:"],
      ["ul", [
        "sommaties van concurrenten of verenigingen — vooral gebruikelijk in Duitsland en Oostenrijk;",
        "claims van bezoekers voor immateriële schade op grond van artikel 82 AVG;",
        "klachten bij de toezichthouder, die vervolgens vragen stelt die u moet beantwoorden;",
        "en de stille kosten: delen van een site opnieuw bouwen die de eerste keer goed gebouwd hadden kunnen worden."
      ]],
      ["p", "Een ingesloten kaart vervangen, lettertypen opnieuw hosten, de analyse omgooien en de privacyverklaring herschrijven na de lancering kost meer tijd dan het tijdens de bouw te doen. Juridische kennis, vroeg toegepast, is gewoon goedkoper."],

      ["h2", "Wat er verandert — en wat niet"],
      ["p", "In november 2025 stelde de Europese Commissie een „Digital Omnibus” voor die onder meer de cookieregels naar de AVG zou verplaatsen en enkele uitzonderingen zou invoeren, bijvoorbeeld voor bepaalde bereikmeting. Per oktober 2026 is dit deel **nog een ontwerp**: de Raad heeft geen onderhandelingsstandpunt vastgesteld en er is niets aangenomen."],
      ["p", "De praktische regel is eenvoudig: **bouw voor het geldende recht, niet voor een voorstel.** De huidige toestemmingsregels gelden vandaag. Als de regels veranderen, is een site met een schone toestemmingslogica ook het makkelijkst aan te passen."],

      ["h2", "Een korte checklist voor uw volgende website"],
      ["check", [
        "Maak een lijst van elke externe dienst die de site laadt — vóór het ontwerp wordt goedgekeurd.",
        "Host lettertypen en essentiële scripts zelf waar dat kan.",
        "Zet video's, kaarten en social-media-embeds achter een klik-om-te-laden-placeholder.",
        "Blokkeer niet-noodzakelijke cookies tot er toestemming is; maak „weigeren” even zichtbaar als „accepteren”.",
        "Sluit verwerkersovereenkomsten met aanbieders van formulieren, hosting, nieuwsbrieven en chat.",
        "Schrijf de privacyverklaring op basis van de werkelijke opzet — niet op basis van een sjabloon."
      ]],

      ["h2", "Waar het om gaat"],
      ["p", "Recht is niet de vijand van goed ontwerp. Schone, snelle websites die alleen laden wat ze nodig hebben, zijn meestal zowel beter in lijn met de regels als prettiger in gebruik. Het beste moment om over de AVG na te denken, is wanneer u nog beslist wat de site moet worden. Daarna ontwerpt u niet meer — dan repareert u."],
      ["note", "Wilt u weten waar uw huidige website staat? Onze **gratis AVG- & cookiecheck** laat zien wat er laadt, wat cookies plaatst en wat moet worden opgelost — en voor € 99 lossen wij het voor u op."]
    ],
    sources: [
      ["AVG — Verordening (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["ePrivacyrichtlijn 2002/58/EG (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2002/58/oj"],
      ["HvJ EU, Planet49, C-673/17 (2019)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["Europese Commissie — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "digital-services-act-business",
    tag: "DSA",
    t: "De Digital Services Act gaat niet alleen over Big Tech",
    d: "De krantenkoppen gaan over recordboetes voor wereldwijde platforms. Maar de DSA bepaalt ook wat er gebeurt als uw bedrijf reviews host, op een marktplaats verkoopt of een geblokkeerd account heeft.",
    lead: "De krantenkoppen gaan over recordboetes voor wereldwijde platforms. Maar de DSA bepaalt ook wat er gebeurt als uw bedrijf reviews host, op een marktplaats verkoopt — of wakker wordt met een geblokkeerd account.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "In december 2025 legde de Europese Commissie X een boete op van € 120 miljoen op grond van de Digital Services Act. In juli 2026 kreeg AliExpress € 550 miljoen boete omdat het illegale en onveilige producten niet goed aanpakte. Wie alleen de koppen leest, denkt dat de DSA een wet is over een handvol reuzen."],
      ["p", "Dat is hij niet. De reuzen dragen de zwaarste verplichtingen, maar de DSA is in lagen opgebouwd — en sommige lagen raken gewone bedrijven op twee heel verschillende manieren: als **aanbieder** van een digitale dienst en als **gebruiker** van de platforms waarvan ze afhankelijk zijn."],
      ["quote", "U hebt geen 45 miljoen gebruikers nodig om door de DSA geraakt te worden. Het volstaat om inhoud van anderen te hosten — of afhankelijk te zijn van een platform dat dat doet."],

      ["h2", "De lagen, in gewone taal"],
      ["p", "De DSA geldt voor „tussenhandelsdiensten” — diensten die informatie van anderen doorgeven, opslaan of publiceren. De verplichtingen stapelen zich op:"],
      ["ul", [
        "**Alle tussenhandelsdiensten** — basisplichten zoals een contactpunt en duidelijke algemene voorwaarden.",
        "**Hostingdiensten** — wie informatie opslaat namens gebruikers, moet een manier bieden om illegale inhoud te melden (melding en actie, artikel 16) en beslissingen om inhoud te beperken motiveren (motivering, artikel 17).",
        "**Onlineplatforms** — hostingdiensten die gebruikersinhoud ook openbaar maken, zoals fora, sociale netwerken en marktplaatsen: klachtensystemen, transparantie over advertenties, een verbod op misleidend interfaceontwerp („dark patterns”, artikel 25), bescherming van minderjarigen.",
        "**Zeer grote platforms en zoekmachines** — meer dan 45 miljoen maandelijkse gebruikers in de EU: systeemrisicobeoordelingen, onafhankelijke audits, gegevenstoegang voor onderzoekers."
      ]],
      ["p", "Een gewone bedrijfswebsite die uw eigen inhoud toont, is meestal helemaal geen tussenhandelsdienst. Maar zodra u anderen laat publiceren — klantreviews, een communityforum, aanbiedingen van andere verkopers, uploads van gebruikers — staat u mogelijk op de eerste treden van deze ladder."],

      ["h2", "Wanneer uw website een host wordt"],
      ["p", "Hier verandert juridische kennis het ontwerp. Een reviewsectie of kleine marktplaats toevoegen is niet alleen een functie; het is de keuze voor een juridische rol. Als de DSA van toepassing is, heeft de bouw een paar dingen nodig die aan het begin makkelijk zijn mee te nemen en later lastig toe te voegen:"],
      ["ul", [
        "een zichtbare manier voor iedereen om inhoud te melden die volgens hen illegaal is;",
        "een proces voor die meldingen — wie bekijkt ze, hoe snel, en hoe worden beslissingen vastgelegd;",
        "een korte uitleg aan de gebruiker van wie inhoud wordt verwijderd of beperkt;",
        "algemene voorwaarden die in gewone woorden zeggen wat is toegestaan en hoe moderatie werkt."
      ]],
      ["p", "Er is goed nieuws voor kleinere spelers: **micro- en kleine ondernemingen** zijn vrijgesteld van de meeste aanvullende verplichtingen voor onlineplatforms (artikel 19). De basisplichten voor hosting gelden echter ongeacht de omvang. Wie precies weet waar die grens ligt, bouwt niet te veel en niet te weinig."],

      ["h2", "Wat de meeste bedrijven over het hoofd zien: uw rechten als platformgebruiker"],
      ["p", "Voor veel bedrijven is de DSA vooral een **instrument**, geen verplichting. Als u via een marktplaats verkoopt, adverteert op sociale media of voor boekingen afhankelijk bent van een profiel, geeft de DSA u rechten die u eerder niet had:"],
      ["ul", [
        "**Een motivering.** Verwijdert een platform uw inhoud, verlaagt het de zichtbaarheid, schort het uw account op of stopt het betalingen, dan moet het u een duidelijke motivering geven (artikel 17).",
        "**Een klacht.** Onlineplatforms moeten een gratis intern klachtensysteem bieden, en beslissingen mogen niet uitsluitend geautomatiseerd worden genomen (artikel 20).",
        "**Een onafhankelijke toetsing.** U kunt terecht bij een gecertificeerde instantie voor buitengerechtelijke geschillenbeslechting (artikel 21).",
        "**Transparantie over advertenties.** Advertenties moeten tonen wie erachter zit en wat de belangrijkste parameters voor de targeting zijn (artikel 26)."
      ]],
      ["p", "In de praktijk wordt een geblokkeerde winkel of advertentieaccount vaak behandeld als een klantenserviceprobleem. Het is ook een juridisch probleem — en een bedrijf dat in zijn klacht het juiste artikel kan noemen, krijgt veel eerder een echt antwoord."],

      ["h2", "Verkopen op marktplaatsen: traceerbaarheid"],
      ["p", "Onlinemarktplaatsen moeten basisgegevens verzamelen en controleren van handelaren die via hen verkopen — naam, contactgegevens, registratie- en betaalgegevens (artikel 30). Verkoopt u op een marktplaats, reken dan op deze verzoeken en houd uw bedrijfsgegevens overal gelijk: op uw website, in uw juridische informatie en in uw verkopersprofielen. Inconsistentie is een van de meest voorkomende redenen voor vertraging en blokkering."],

      ["h2", "Een les voor elke website"],
      ["p", "Het verbod op dark patterns in de DSA geldt formeel voor onlineplatforms. Maar het principe erachter — ontwerp geen interfaces die mensen verleiden tot keuzes die ze niet bedoelden — loopt ook door het consumentenrecht en het gegevensbeschermingsrecht. Vooraf geselecteerde opties, verstopte „weigeren”-knoppen en verwarrende opzegroutes worden steeds vaker als juridisch probleem behandeld, niet alleen als slechte smaak. Eerlijk ontwerp wordt een compliance-eis."],

      ["h2", "Waar het om gaat"],
      ["p", "De DSA herinnert eraan dat een digitale aanwezigheid nooit alleen van u is. Ze leeft op servers, platforms en marktplaatsen met hun eigen regels — en nu ook met wettelijke plichten tegenover u. Wie die regels begrijpt, kan functies verantwoord ontwerpen en zijn bedrijf verdedigen wanneer een platform het verkeerd doet."],
      ["note", "Plant u een reviewsectie, een community of een marktplaats? Wij ontwerpen die vanaf dag één met de juiste meld- en moderatieflow — **neem contact op** over uw project."]
    ],
    sources: [
      ["Digital Services Act — Verordening (EU) 2022/2065 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"],
      ["Europese Commissie — De Digital Services Act", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"],
      ["Europese Commissie — Boete van € 550 miljoen voor AliExpress (juli 2026)", "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"],
      ["Goran Kolouh op Medium — The fine that missed the point (EN)", "https://gorankolouch.medium.com/the-fine-that-missed-the-point-why-platform-xs-anti-muslim-amplification-is-a-digital-services-b7007ec68ff0"]
    ]
  },

  {
    slug: "eu-ai-act-website",
    tag: "AI Act",
    t: "Uw chatbot moet zeggen dat hij een chatbot is",
    d: "De transparantieregels van de AI-verordening gelden sinds 2 augustus 2026. Wat de Digital Omnibus heeft uitgesteld, wat niet — en wat een bedrijfswebsite nu moet inbouwen.",
    lead: "De transparantieregels van de AI-verordening gelden sinds 2 augustus 2026. Wat de Digital Omnibus heeft uitgesteld, wat niet — en wat een bedrijfswebsite nu moet inbouwen.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Veel bedrijven hoorden deze zomer vooral één ding over de AI-verordening: „ze is uitgesteld”. Dat is maar half waar. De Digital Omnibus, in juni aangenomen en sinds eind juli 2026 van kracht, stelde de regels voor AI-systemen met een **hoog risico** uit. De regels die een gewone bedrijfswebsite het meest raken, stelde hij niet uit."],
      ["p", "Heeft uw site een chatbot, publiceert u AI-gegenereerde beelden of maakt u inhoud met AI, dan gelden de relevante verplichtingen al."],
      ["quote", "Transparantie is het deel van de AI-verordening dat bijna iedereen raakt — en het is nooit uitgesteld."],

      ["h2", "De tijdlijn, zoals die nu is"],
      ["ul", [
        "**1 augustus 2024** — de AI-verordening treedt in werking.",
        "**2 februari 2025** — verboden praktijken (zoals manipulatieve of uitbuitende AI) en de plicht tot AI-geletterdheid gelden.",
        "**2 augustus 2025** — regels voor AI-modellen voor algemene doeleinden gelden.",
        "**2 augustus 2026** — transparantieverplichtingen (artikel 50) en de meeste overige regels gelden.",
        "**2 december 2026** — nieuw verbod op AI-systemen die niet-consensuele intieme beelden genereren; einde van de overgangstermijn voor machineleesbare markering door systemen die al op de markt waren.",
        "**2 december 2027** — hoogrisicoregels voor zelfstandige systemen (bijlage III), zoals AI bij werving of kredietbeslissingen — uitgesteld door de Omnibus.",
        "**2 augustus 2028** — hoogrisicoregels voor AI in gereguleerde producten (bijlage I)."
      ]],

      ["h2", "Wat vandaag geldt voor een bedrijfswebsite"],
      ["h3", "1. Chatbots moeten herkenbaar zijn als AI"],
      ["p", "AI-systemen die rechtstreeks met mensen communiceren, moeten zo zijn ontworpen dat mensen weten dat ze met een machine te maken hebben, tenzij dat uit de context duidelijk is (artikel 50, lid 1). Formeel ligt die plicht bij de aanbieder van het systeem. In de praktijk zijn het uw bezoekers die het moeten weten — dus hoort de melding in uw ontwerp: een duidelijk label aan het begin van het gesprek, geen zin die verstopt zit in de privacyverklaring."],
      ["h3", "2. Deepfakes moeten worden vermeld"],
      ["p", "Publiceert u AI-gegenereerde of gemanipuleerde beelden, audio of video die echt lijken — een realistische „foto” van een persoon, plaats of gebeurtenis — dan moet u vermelden dat ze kunstmatig zijn (artikel 50, lid 4). Duidelijk artistiek, satirisch of fictief werk krijgt een lichtere, aangepaste behandeling. Een gestileerde illustratie is niet het probleem; een realistische nep-„klantfoto” wel."],
      ["h3", "3. Door AI geschreven tekst van algemeen belang"],
      ["p", "Door AI gegenereerde tekst die wordt gepubliceerd om het publiek te informeren over zaken van algemeen belang, moet worden vermeld — tenzij een mens hem heeft beoordeeld en iemand redactionele verantwoordelijkheid draagt. Voor een bedrijfsblog is de les eenvoudig: houd een menselijke redacteur betrokken en sta achter wat u publiceert."],
      ["h3", "4. AI-geletterdheid in uw team"],
      ["p", "Sinds februari 2025 moeten organisaties die AI-systemen gebruiken maatregelen nemen om voldoende AI-geletterdheid op te bouwen bij de mensen die ze namens hen gebruiken (artikel 4). De Omnibus heeft dit verzacht — u hoeft niet langer voor ieder persoon een bepaald niveau te garanderen — maar de plicht om maatregelen te nemen blijft. Een korte interne richtlijn en een basistraining tellen mee."],

      ["h2", "Wanneer AI een hoog risico wordt"],
      ["p", "Sommige toepassingen gelden als hoog risico omdat ze over de kansen van mensen kunnen beslissen: sollicitaties screenen, werknemers beoordelen, kredietwaardigheid bepalen, toegang tot onderwijs of essentiële diensten. Gebruikt uw website of HR-proces AI om sollicitanten te rangschikken, dan zit u dicht bij deze categorie. De gedetailleerde plichten — risicobeheer, documentatie, menselijk toezicht — gelden nu vanaf **december 2027**. Dat is geen reden om te wachten; het is voorbereidingstijd."],
      ["p", "Hier heeft de wet ook nog lacunes. Zoals ik elders heb betoogd, hoeven particuliere werkgevers die AI bij werving gebruiken vóór de inzet geen effectbeoordeling op grondrechten uit te voeren — een toets die de verordening wél eist voor krediet en verzekeringen. Juridische kennis betekent hier niet alleen weten wat verplicht is, maar ook wat verstandig is."],

      ["h2", "De AI-verordening vervangt de AVG niet"],
      ["p", "Een chatbotgesprek zit vol persoonsgegevens. De AVG geldt daarnaast: u hebt een rechtsgrond nodig, een verwerkersovereenkomst met de chatbotaanbieder, een vermelding in uw privacyverklaring en een plan voor hoe lang gesprekken worden bewaard. Beslissingen met rechtsgevolgen of vergelijkbare aanmerkelijke gevolgen mogen niet uitsluitend aan geautomatiseerde verwerking worden overgelaten (artikel 22 AVG). De meeste AI-complianceproblemen op websites zijn uiteindelijk gegevensbeschermingsproblemen."],

      ["h2", "Hoe boetes eruitzien"],
      ["p", "Overtreding van de verboden praktijken kan tot € 35 miljoen of 7% van de wereldwijde omzet kosten; de meeste andere overtredingen, ook van de transparantieregels, tot € 15 miljoen of 3%. Voor kmo's en start-ups geldt telkens het laagste bedrag. Net als bij de AVG is het realistische risico voor een klein bedrijf minder een maximale boete dan een klacht, een correctiebevel — of verloren vertrouwen."],

      ["h2", "Een korte checklist"],
      ["check", [
        "Maak een lijst van elke AI-tool op uw website en in uw werkprocessen.",
        "Label uw chatbot aan het begin van elk gesprek duidelijk als AI.",
        "Vermeld realistische AI-gegenereerde beelden, audio en video.",
        "Houd een menselijke redacteur verantwoordelijk voor gepubliceerde inhoud.",
        "Werk uw privacyverklaring en verwerkersovereenkomsten bij voor AI-tools.",
        "Schrijf een interne AI-richtlijn van één pagina voor uw team."
      ]],

      ["h2", "Waar het om gaat"],
      ["p", "Met AI voegt u in een middag indrukwekkende functies aan een website toe. De wet stelt een tragere vraag: weten de mensen aan de andere kant waarmee ze te maken hebben? Die eerlijkheid vanaf het begin in het ontwerp bouwen is geen last. Het is wat de functie betrouwbaar genoeg maakt om te gebruiken."],
      ["note", "Wilt u een chatbot of AI-functies aan uw website toevoegen? Wij ontwerpen ze met de juiste vermeldingen en privacy-instellingen ingebouwd — **neem contact op**."]
    ],
    sources: [
      ["AI-verordening — Verordening (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["Europese Commissie — Tijdlijn van de AI-verordening", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
      ["Gibson Dunn — AI Act Omnibus: uitgestelde hoogrisicotermijnen (EN)", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"],
      ["Goran Kolouh op Medium — The algorithm Europe forgot to check (EN)", "https://gorankolouch.medium.com/the-algorithm-europe-forgot-to-check-1bc7f0ac18d2"]
    ]
  }
];
