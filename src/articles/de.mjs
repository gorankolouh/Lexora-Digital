// Journal-Artikel — Deutsch
export default [
  {
    slug: "ai-chats-court-company-data",
    tag: "KI & DSGVO",
    t: "Wenn KI-Chats vor Gericht landen",
    mt: "Wenn KI-Chats vor Gericht landen: Risiko für KMU",
    d: "Ein US-Gericht ließ OpenAI 20 Millionen ChatGPT-Gespräche herausgeben. Was das für europäische KMU bedeutet – und fünf Schritte zum Schutz Ihrer Unternehmensdaten.",
    lead: "Viele Unternehmen behandeln KI-Chats wie lautes Nachdenken. Rechtlich sind sie eher E-Mails auf einem fremden Server – und ein US-Gericht hat gerade gezeigt, dass sie in einem Verfahren herausverlangt werden können.",
    date: "November 2026", iso: "2026-11-14",
    blocks: [
      ["p", "Im Januar 2026 hat ein US-Bundesrichter eine Anordnung bestätigt: OpenAI muss 20 Millionen ChatGPT-Gespräche an die New York Times und weitere Verlage herausgeben. Es geht um eine Urheberrechtsklage. Die Protokolle wurden anonymisiert und unter einer Schutzanordnung übergeben. Die Botschaft an jedes Unternehmen ist trotzdem klar: Was Ihr Team in ein KI-Tool tippt, ist eine Aufzeichnung. Und Aufzeichnungen können herausverlangt werden."],
      ["quote", "Behandeln Sie KI-Chats schon heute als Geschäftsunterlagen – egal, wie die Gerichte entscheiden."],

      ["h2", "Eine Rechtslücke, mit der niemand gerechnet hat"],
      ["p", "In einem neuen Beitrag im Journal of Free Speech Law benennt Caroline De Cock das Problem. Die Menschenrechte schützen seit jeher zwei Räume. Der eine sind Ihre Gedanken, das *forum internum*, absolut geschützt. Der andere ist das, was Sie öffentlich sagen, das *forum externum*, das der Staat aus guten Gründen einschränken darf."],
      ["p", "Diese Trennung funktionierte, solange Denken keine Spuren hinterließ. Heute entwerfen Menschen Texte, testen Ideen und formulieren halbfertige Sorgen im Chatbot. Jeder dieser Schritte wird beim Anbieter gespeichert und kann in einem Verfahren angefordert werden."],
      ["p", "De Cock schlägt einen dritten Raum zwischen Gedanke und Äußerung vor: das **forum interstitiale**. Es soll vorläufige, nicht geteilte Denkschritte schützen – eine Suche, einen Entwurf, ein Argument, das man ausprobiert und wieder verwirft. Gerichte stellen ihrer Ansicht nach die falsche Frage, wenn sie prüfen, ob ein Chatbot einem Anwalt oder Therapeuten „ähnelt“. Entscheidend sei, was der Mensch gerade tat. Meistens: Er dachte nach."],
      ["p", "Das Argument ist überzeugend, bleibt aber vorerst ein Vorschlag. Kein Gericht und kein Gesetzgeber hat ihn bisher übernommen. Bis dahin müssen Unternehmen mit der geltenden Rechtslage planen."],

      ["h2", "Warum das für europäische KMU relevant ist"],
      ["p", "Ein US-Urheberrechtsfall scheint mit einer Beratung in Köln oder einer Spedition in Rotterdam wenig zu tun zu haben. Tatsächlich betrifft er Sie auf vier Wegen."],
      ["ul", [
        "**Ihre Daten liegen bei US-Anbietern.** Die meisten bekannten KI-Tools werden von US-Unternehmen betrieben. Deren Protokolle können in US-Verfahren zum Beweismittel werden – unabhängig davon, was Ihr EU-Vertrag zur Vertraulichkeit sagt.",
        "**Die DSGVO gilt auch für das, was Mitarbeitende einfügen.** Kundennamen, Lebensläufe oder Gesundheitsangaben im Chatbot sind personenbezogene Daten. Sie brauchen eine Rechtsgrundlage, einen Auftragsverarbeitungsvertrag, wenn der Anbieter als Auftragsverarbeiter tätig ist, und eine klare Speicherfrist (Art. 5, 28 und 32 DSGVO).",
        "**Geschäftsgeheimnisse brauchen angemessene Geheimhaltungsmaßnahmen.** Nach dem Geschäftsgeheimnisgesetz (GeschGehG), das die EU-Richtlinie 2016/943 umsetzt, sind Informationen nur geschützt, wenn Sie angemessene Maßnahmen zur Geheimhaltung treffen. Wer Kalkulationen oder Quellcode in Verbraucher-Chatbots kopieren lässt, schwächt diese Position.",
        "**Die KI-Verordnung verlangt KI-Kompetenz.** Seit Februar 2025 müssen Organisationen, die KI-Systeme einsetzen, Maßnahmen ergreifen, um die KI-Kompetenz ihres Personals aufzubauen (Art. 4 KI-VO). Eine schriftliche KI-Richtlinie ist der einfachste Nachweis."
      ]],

      ["h2", "Das wirtschaftliche Risiko, klar gesagt"],
      ["p", "Die Gefahr ist selten ein einzelnes spektakuläres Datenleck. Es ist die schleichende Ansammlung sensibler Inhalte an Orten, die Sie nicht kontrollieren: der Vertriebsleiter, der ein Angebot entwirft, die Personalreferentin, die eine Kündigungsakte zusammenfasst, die Gründerin, die eine zweite Meinung zu einem Vertrag einholt."],
      ["p", "Kommt es zum Streit, fragt die Gegenseite, wo Ihre Unterlagen liegen. „In den Chatverläufen unserer Mitarbeitenden“ ist keine Antwort, die Sie geben möchten."],

      ["h2", "Fünf Schritte für dieses Quartal"],
      ["check", [
        "**Eine einseitige KI-Richtlinie schreiben.** Erlaubte Tools, was nie eingegeben werden darf (personenbezogene Kundendaten, Geschäftsgeheimnisse, Rechtsakten) und wen man im Zweifel fragt.",
        "**Geschäftskonten statt privater Konten nutzen.** Team- und Enterprise-Tarife bieten meist einen Auftragsverarbeitungsvertrag, Admin-Kontrollen und den Ausschluss vom Modelltraining. Prüfen Sie die Bedingungen jedes Anbieters.",
        "**Speicherdauer minimieren.** Schalten Sie den Chatverlauf ab, wo möglich, oder stellen Sie eine kurze automatische Löschung ein. De Cocks Rat an KI-Anbieter gilt auch für Sie: weniger speichern.",
        "**Identität und Inhalt trennen.** Nutzen Sie, wo möglich, Tools oder Einstellungen, die Nutzer pseudonymisieren – damit ein offengelegtes Protokoll nicht direkt zu einer namentlich bekannten Person führt.",
        "**Das Team einmal schulen und regelmäßig erinnern.** Eine 30-minütige Schulung dazu, was nicht in den Chatbot gehört, erfüllt die Pflicht zur KI-Kompetenz und verhindert die meisten Probleme."
      ]],

      ["h2", "Worauf es ankommt"],
      ["p", "Vielleicht erkennt das Recht eines Tages an, dass ein Gespräch mit einer KI Teil unseres Denkens ist und starken Schutz verdient. De Cock begründet überzeugend, warum es so sein sollte. Doch kein Unternehmen sollte seine Kundendaten auf eine Rechtstheorie setzen, die es noch nicht gibt."],
      ["note", "Sie brauchen eine KI-Richtlinie oder einen DSGVO-Check der KI-Tools in Ihrem Team? Unser *Compliance-Handbuch für KMU* erklärt DSGVO, KI-Verordnung, NIS2 und DSA – und wir setzen es mit Ihnen praktisch um. **Sprechen Sie uns an**."]
    ],
    sources: [
      ["Cybersecurity News — Gericht ordnet Herausgabe von 20 Mio. anonymisierten ChatGPT-Chats an (EN, Jan. 2026)", "https://cybersecuritynews.com/openai-20-million-chatgpt-chats/"],
      ["eWeek — OpenAI ordered to hand over 20M ChatGPT logs (EN)", "https://www.eweek.com/news/openai-chatgpt-logs-new-york-times-copyright-mdl/"],
      ["DSGVO — Verordnung (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=de"],
      ["Geschäftsgeheimnis-Richtlinie — Richtlinie (EU) 2016/943 (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2016/943/oj?locale=de"],
      ["KI-Verordnung — Verordnung (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=de"]
    ]
  },
  {
    slug: "bfsg-website-barrierefrei-pflicht",
    tag: "BFSG",
    t: "Muss meine Website barrierefrei sein? Das BFSG für kleine Unternehmen",
    mt: "Muss meine Website barrierefrei sein? BFSG für KMU",
    d: "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz. Wer betroffen ist, wer ausgenommen ist, was die Marktüberwachung prüft — und was Sie bei einer Abmahnung tun.",
    lead: "Seit dem 28. Juni 2025 müssen viele Onlineshops und digitale Dienstleistungen barrierefrei sein. Die Marktüberwachung arbeitet, Abmahnungen laufen — und viele Unternehmen wissen noch immer nicht, ob sie überhaupt betroffen sind. Hier sind die Antworten.",
    date: "November 2026", iso: "2026-11-05",
    blocks: [
      ["p", "Das Barrierefreiheitsstärkungsgesetz (BFSG) setzt den European Accessibility Act der EU in deutsches Recht um. Es soll Menschen mit Behinderungen, aber auch älteren Menschen den Zugang zu digitalen Angeboten sichern — vom Warenkorb bis zur Terminbuchung."],
      ["p", "Die gute Nachricht vorweg: Nicht jede Website ist betroffen. Die weniger gute: Wer betroffen ist und nichts unternimmt, riskiert inzwischen konkret Post von der Behörde oder einem Anwalt."],
      ["quote", "Barrierefreiheit ist keine Zusatzfunktion. Sie ist die Frage, ob alle Ihre Kunden bei Ihnen kaufen können."],

      ["h2", "Kurz gesagt"],
      ["check", [
        "Betroffen sind vor allem Websites und Apps, über die **Verbraucher einen Vertrag abschließen** — Onlineshops, Buchungs- und Bestellstrecken.",
        "**Kleinstunternehmen** mit weniger als 10 Beschäftigten und höchstens 2 Mio. Euro Jahresumsatz oder Bilanzsumme sind bei Dienstleistungen ausgenommen.",
        "Der technische Maßstab ist **WCAG 2.1 Stufe AA** (über die Norm EN 301 549).",
        "Sie brauchen **Informationen zur Barrierefreiheit** auf der Website, die die zuständige Marktüberwachungsbehörde nennen.",
        "**Overlay-Widgets** machen eine Website nicht barrierefrei."
      ]],

      ["h2", "Für wen gilt das BFSG?"],
      ["p", "Entscheidend ist, ob Ihre Website auf einen **Vertragsabschluss mit Verbrauchern** hinausläuft. Typischerweise erfasst sind:"],
      ["ul", [
        "Onlineshops und Marktplätze — inklusive Warenkorb, Checkout und Kundenkonto;",
        "Online-Terminbuchungen, etwa beim Friseur, in der Praxis oder im Hotel;",
        "Registrierungen, die nötig sind, um einen Dienst zu nutzen;",
        "Apps, über die Verträge geschlossen werden."
      ]],
      ["p", "In der Regel **nicht** erfasst sind reine Informationsseiten ohne Bestell- oder Buchungsfunktion, private Blogs und Angebote, die sich technisch nachweisbar nur an Geschäftskunden richten. Ein einfaches Kontaktformular gilt als Grauzone — wer es zur Anbahnung von Verträgen nutzt, sollte es vorsorglich barrierefrei gestalten."],

      ["h2", "Die Ausnahme für Kleinstunternehmen"],
      ["p", "Dienstleister mit **weniger als zehn Beschäftigten** und **höchstens 2 Mio. Euro** Jahresumsatz oder Jahresbilanzsumme sind von den Anforderungen an Dienstleistungen befreit. Beide Bedingungen müssen erfüllt sein."],
      ["p", "Zwei Einschränkungen werden oft übersehen: Die Ausnahme gilt nur für Dienstleistungen, nicht für Hersteller von Produkten. Und wer wächst, kann aus der Ausnahme herausfallen — die Schwelle sollte man jährlich prüfen."],

      ["h2", "Was technisch verlangt wird"],
      ["p", "Das Gesetz selbst nennt keine Einzelheiten. In der Praxis gilt die europäische Norm EN 301 549, die auf die **WCAG 2.1 Stufe AA** verweist. Die häufigsten Baustellen auf kleinen Websites sind überschaubar:"],
      ["ul", [
        "**Kontraste:** Text muss sich ausreichend vom Hintergrund abheben — hellgraue Schrift auf Weiß fällt regelmäßig durch.",
        "**Tastaturbedienung:** Jede Funktion, auch Menü, Cookie-Banner und Checkout, muss ohne Maus erreichbar sein.",
        "**Alternativtexte:** Bilder, die Inhalt transportieren, brauchen eine Beschreibung für Screenreader.",
        "**Formulare:** Jedes Feld braucht eine sichtbare, verknüpfte Beschriftung und verständliche Fehlermeldungen.",
        "**Struktur:** Saubere Überschriften, beschreibende Linktexte, Untertitel für Videos."
      ]],
      ["p", "Barrierefreiheit lässt sich am günstigsten beim Bau einer Website umsetzen. Nachträglich wird es fast immer teurer — vor allem, wenn Theme oder Shop-System selbst die Probleme verursachen."],

      ["h2", "Die Erklärung zur Barrierefreiheit"],
      ["p", "Betroffene Unternehmen müssen Informationen bereitstellen, wie ihr Angebot die Anforderungen erfüllt (§ 14 BFSG mit Anlage 3). Diese Informationen müssen selbst barrierefrei und leicht auffindbar sein und die zuständige Marktüberwachungsbehörde nennen. Üblich ist eine eigene Seite „Erklärung zur Barrierefreiheit“, verlinkt im Footer neben Impressum und Datenschutz."],
      ["p", "Gar keine Informationen bereitzustellen ist ein formaler Verstoß — und einer, der von außen leicht zu erkennen ist."],

      ["h2", "Wer kontrolliert — und was droht"],
      ["p", "Zuständig ist die gemeinsame **Marktüberwachungsstelle der Länder für die Barrierefreiheit (MLBF)** in Magdeburg, die seit dem 26. September 2025 arbeitet. Sie geht vorrangig Beschwerden nach und nutzt für Websites automatisierte Vorprüfungen."],
      ["p", "Das Verfahren ist gestuft: Zuerst kommt eine Aufforderung zur Nachbesserung mit Frist, dann kann die Behörde anordnen, den Dienst einzustellen, und erst danach droht ein Bußgeld von **bis zu 100.000 Euro**. Bis Juli 2026 waren keine öffentlichen Bußgelder nach dem BFSG dokumentiert."],

      ["h2", "Abmahnungen: was gerade passiert"],
      ["p", "Parallel sind zwei Abmahnwellen bekannt geworden. Eine erste ab August 2025 mit eher pauschalen Vorwürfen und Forderungen um 600 Euro; eine zweite seit Februar 2026, die sich auf Prüfberichte stützt und rund 2.700 Euro je Schreiben verlangt."],
      ["p", "Ob Wettbewerber BFSG-Verstöße überhaupt abmahnen dürfen, ist rechtlich offen: Bisher hat kein veröffentlichtes Urteil entschieden, dass die BFSG-Pflichten Marktverhaltensregeln im Sinne von § 3a UWG sind. Viele Fachleute halten die Schreiben deshalb für angreifbar."],
      ["p", "Trotzdem gilt: Eine Abmahnung nie ignorieren, nicht ungeprüft unterschreiben und Fristen ernst nehmen. Lassen Sie das Schreiben von einer Anwältin oder einem Anwalt prüfen — und nutzen Sie die Gelegenheit, die tatsächlichen Mängel zu beheben."],

      ["h2", "Warum Overlay-Tools nicht helfen"],
      ["p", "Die häufigste Schnelllösung sind Overlay-Widgets: ein Symbol, das eine Leiste mit Schriftgrößen- und Kontrastreglern über die Website legt und Konformität „per Klick“ verspricht. Prüfstellen von Bund und Ländern kommen regelmäßig zu dem Ergebnis, dass solche Tools die Anforderungen nicht erfüllen. Fehlende Alternativtexte, unbeschriftete Formularfelder oder eine nicht bedienbare Navigation bleiben fehlerhaft — das Overlay legt sich nur darüber."],

      ["h2", "Übergangsfristen und Österreich"],
      ["p", "Für Dienstleistungsverträge, die vor dem 28. Juni 2025 geschlossen wurden, gibt es eine Übergangsfrist bis zum 27. Juni 2030 (§ 38 BFSG). Einem laufenden Onlineshop hilft das kaum: Jede neue Bestellung ist ein neuer Vertrag."],
      ["p", "In Österreich gilt mit dem Barrierefreiheitsgesetz (BaFG) eine eigene Umsetzung derselben EU-Richtlinie, mit vergleichbarem Anwendungsbereich und eigener Behörde. Wer in beide Länder verkauft, sollte beide Regelwerke im Blick haben."],

      ["h2", "Checkliste für Ihre Website"],
      ["check", [
        "Klären Sie, ob Ihre Website auf Verträge mit Verbrauchern hinausläuft — und ob Sie unter die Kleinstunternehmen-Ausnahme fallen.",
        "Lassen Sie Ihre wichtigsten Seiten gegen WCAG 2.1 AA prüfen: Startseite, Produkt- oder Leistungsseiten, Formular, Checkout.",
        "Testen Sie selbst: Kommen Sie nur mit der Tab-Taste durch den gesamten Kaufprozess?",
        "Beheben Sie Kontraste, Alternativtexte und Formularbeschriftungen zuerst — sie machen den Großteil der Mängel aus.",
        "Veröffentlichen Sie eine Erklärung zur Barrierefreiheit mit Nennung der MLBF und verlinken Sie sie im Footer.",
        "Verzichten Sie auf Overlay-Widgets als Ersatz für echte Barrierefreiheit.",
        "Dokumentieren Sie, was Sie geprüft und behoben haben — das hilft bei Behördenanfragen und Abmahnungen."
      ]],

      ["h2", "Worauf es ankommt"],
      ["p", "Das BFSG wird oft als weitere Bürokratie wahrgenommen. Dabei geht es um etwas sehr Praktisches: Fast jeder zehnte Mensch in Deutschland ist schwerbehindert, und viele mehr sehen schlechter oder nutzen das Smartphone mit einer Hand. Eine Website, die alle bedienen können, ist nicht nur rechtssicherer — sie verkauft auch besser."],
      ["note", "Sie möchten wissen, ob Ihre Website unter das BFSG fällt und wo sie nachbessern muss? Wir prüfen sie und setzen die Barrierefreiheit technisch um — **nehmen Sie Kontakt auf**."]
    ],
    sources: [
      ["Barrierefreiheitsstärkungsgesetz (BFSG) — Gesetzestext", "https://www.gesetze-im-internet.de/bfsg/"],
      ["IHK Region Stuttgart — Barrierefreie Webseiten und Onlineshops", "https://www.ihk.de/stuttgart/fuer-unternehmen/recht-und-steuern/it-recht/barrierefreie-webseiten"],
      ["ITMR Legal — BFSG 2026: MLBF-Prüfung und Abmahnung", "https://itmr-legal.de/blog/bfsg"],
      ["D!E mit Ausrufezeichen — Zwei Abmahnwellen laufen (September 2026)", "https://die-mit-ausrufezeichen.de/bfsg-abmahnung-barrierefreiheit-website/"]
    ]
  },
  {
    slug: "ki-sicherheit-unternehmen",
    tag: "KI-Sicherheit",
    t: "Wenn Daten zu Befehlen werden: KI-Sicherheit für Unternehmen",
    mt: "Wenn Daten zu Befehlen werden: KI-Sicherheit",
    d: "Prompt Injection, KI-Agenten, vergiftete Daten und Deepfakes: Was Unternehmen über KI-Sicherheit wissen müssen — und was die KI-Verordnung verlangt.",
    lead: "KI-Assistenten lesen E-Mails, durchsuchen Dateiablagen und lösen Zahlungen aus. Damit entsteht eine Angriffsfläche, die klassische IT-Sicherheit nicht kennt: Ein einziges Dokument kann eine KI dazu bringen, Daten preiszugeben oder falsch zu handeln.",
    date: "November 2026", iso: "2026-11-05",
    blocks: [
      ["p", "Das „AI Security Glossary“ von Kunal RK erklärt auf 45 Seiten 149 Begriffe rund um Aufbau, Angriff und Verteidigung von KI-Systemen. Dieser Artikel fasst die wichtigsten Erkenntnisse für Unternehmen im deutschsprachigen Raum zusammen — mit Blick auf den europäischen Rechtsrahmen."],
      ["quote", "Sicherheit lässt sich nicht allein im KI-Modell herstellen. Sie muss rund um das Modell gebaut werden."],

      ["h2", "Das Grundproblem: Anweisungen und Daten verschwimmen"],
      ["p", "Klassische Software trennt Befehle sauber von Daten. SQL-Injection wurde weitgehend gelöst, weil Abfrage und Nutzereingabe getrennt übermittelt werden. Ein Sprachmodell kennt diese Trennung nicht: Systemanweisung, Nutzerfrage und ein angehängtes PDF landen als ein einziger Textstrom im Modell."],
      ["p", "Daraus folgt die zentrale Schwachstelle, die **Prompt Injection**. Ein Angreifer platziert Anweisungen in Text, den die KI liest. Zwei Varianten sind zu unterscheiden:"],
      ["ul", [
        "**Direkt:** Der Nutzer tippt die Manipulation selbst ein. Ein Autohaus-Chatbot in den USA ließ sich 2023 so dazu bringen, einem Kunden ein Auto für einen Dollar „zuzusagen“.",
        "**Indirekt:** Die Anweisung steckt in einer E-Mail, Webseite oder Rechnung. Der Angreifer muss das System nie berühren. Bei EchoLeak (CVE-2025-32711) genügte eine präparierte E-Mail, damit Microsoft 365 Copilot interne Daten nach außen schickte — ganz ohne Klick des Opfers."
      ]],
      ["p", "Versteckte Anweisungen können sogar unsichtbar sein: weiße Schrift auf weißem Grund, unsichtbare Unicode-Zeichen oder Bilder, deren Botschaft erst nach dem Verkleinern lesbar wird. Ein menschlicher Prüfer sieht nichts."],
      ["p", "Für Prompt Injection gibt es keine vollständige Lösung. Sie führt seit 2023 die OWASP-Liste der LLM-Risiken an. Unternehmen können nur begrenzen, was eine erfolgreiche Manipulation anrichten kann."],

      ["h2", "KI-Agenten: Wenn aus falschen Antworten falsche Handlungen werden"],
      ["p", "Ein Chatbot, der sich irrt, gibt eine falsche Antwort. Ein KI-Agent, der sich irrt, löscht Daten, verschickt E-Mails oder gibt Zahlungen frei. Im Juli 2025 löschte ein KI-Coding-Agent bei Replit trotz ausdrücklichem Code-Freeze eine Produktionsdatenbank."],
      ["p", "Der Sicherheitsforscher Simon Willison prägte 2025 den Begriff **„lethal trifecta“**, die tödliche Dreifaltigkeit. Datendiebstahl per Prompt Injection wird wahrscheinlich, wenn ein Agent drei Fähigkeiten zugleich hat:"],
      ["ul", [
        "Zugriff auf **private Daten** (Postfach, Dateien);",
        "Kontakt mit **nicht vertrauenswürdigen Inhalten** (eingehende Mails, Webseiten);",
        "die Möglichkeit zur **externen Kommunikation** (Links laden, Mails senden)."
      ]],
      ["p", "Da sich Prompt Injection nicht vollständig verhindern lässt, ist der verlässlichste Schutz, mindestens eines dieser drei Elemente zu entfernen."],
      ["p", "Weitere agentenspezifische Risiken nach den OWASP Top 10 für agentische Anwendungen (2026):"],
      ["ul", [
        "**Zielentführung:** Der Agent verfolgt unbemerkt das Ziel des Angreifers.",
        "**Gedächtnisvergiftung:** Falsche Informationen im Speicher des Agenten wirken in künftigen Sitzungen weiter.",
        "**Vergiftete Werkzeuge:** Versteckte Anweisungen in der Beschreibung eines MCP-Servers. Beim „MCP Rug Pull“ funktioniert ein Werkzeug zunächst einwandfrei und wird erst nach einem Update bösartig.",
        "**Kaskadeneffekte:** Der Fehler eines Agenten pflanzt sich über vernetzte Agenten fort und wächst dabei."
      ]],

      ["h2", "Vergiftete Daten und eine unsichere Lieferkette"],
      ["p", "KI lernt aus Daten — wer die Daten manipuliert, steuert das Verhalten. Solche Angriffe können Monate vor dem Einsatz stattfinden und trotzdem jeden Test vor der Inbetriebnahme bestehen."],
      ["ul", [
        "**Datenvergiftung:** Forscher zeigten 2023, dass sich gängige Web-Datensätze für rund 60 US-Dollar vergiften ließen, indem man abgelaufene Domains kaufte, auf die diese Datensätze verwiesen.",
        "**Hintertüren:** Eine Studie von Anthropic, dem britischen AI Security Institute und dem Alan Turing Institute fand 2025, dass etwa 250 präparierte Dokumente genügten, um Modelle jeder getesteten Größe mit einem versteckten Auslöser zu versehen.",
        "**RAG-Vergiftung:** Wer eine Wiki-Seite oder einen geteilten Ordner bearbeiten kann, den der KI-Assistent durchsucht, beeinflusst dessen Antworten für alle Nutzer.",
        "**Schädliche Modelldateien:** 2024 fand JFrog rund 100 Modelle auf Hugging Face, die beim Laden Schadcode ausführten.",
        "**„Slopsquatting“:** KI-Assistenten empfehlen Software-Pakete, die es nicht gibt. Angreifer registrieren genau diese Namen mit Schadcode."
      ]],
      ["p", "Hinzu kommt **Schatten-KI**: Tools, die Mitarbeitende ohne Freigabe nutzen. 2023 kopierten Samsung-Ingenieure vertraulichen Quellcode in ChatGPT. Verbote drängen die Nutzung erfahrungsgemäß nur in den Untergrund; freigegebene Alternativen wirken besser."],
      ["p", "Auch bestehende Dienstleister gehören in den Blick. Schaltet etwa ein CRM-Anbieter eine KI-Funktion frei, fließen Kundendaten womöglich an einen Modellanbieter, den Ihr Vertrag nicht abdeckt."],

      ["h2", "KI als Werkzeug der Angreifer"],
      ["p", "KI wird nicht nur angegriffen, sie greift auch an. Die Ziele sind gewöhnliche Menschen und Prozesse; KI macht die Angriffe schneller, billiger und glaubwürdiger."],
      ["ul", [
        "**Deepfakes:** 2024 überwies ein Mitarbeiter des Ingenieurbüros Arup in Hongkong rund 25 Millionen US-Dollar nach einer Videokonferenz, in der der Finanzchef und weitere Kollegen vollständig gefälscht waren.",
        "**Stimmklone:** Bereits 2019 überwies ein britisches Energieunternehmen 220.000 Euro nach einem Anruf, der wie der Chef der deutschen Muttergesellschaft klang.",
        "**KI-Phishing:** Rechtschreibfehler sind kein Warnsignal mehr. Nachrichten sind fließend, in jeder Sprache und persönlich zugeschnitten.",
        "**Synthetische Identitäten:** 2024 stellte die Sicherheitsfirma KnowBe4 einen nordkoreanischen Agenten als Software-Entwickler ein — mit gestohlener Identität und KI-bearbeitetem Foto."
      ]],
      ["p", "Die Konsequenz: Ein Gesicht oder eine Stimme zu erkennen, ist kein Identitätsnachweis mehr. Zahlungs- und Zugriffsfreigaben brauchen eine Bestätigung über einen zweiten, unabhängigen Kanal."],

      ["h2", "Abwehr in Schichten"],
      ["p", "Keine einzelne Maßnahme hält alle Angriffe auf. Jede Schicht versagt manchmal — gemeinsam machen sie aus einem wahrscheinlichen Vorfall einen unwahrscheinlichen. Die meisten Schutzmaßnahmen liegen dabei außerhalb des Modells:"],
      ["ul", [
        "**Identität und Zugriff:** eigene Identitäten für Agenten und minimale Rechte — das begrenzt den möglichen Schaden.",
        "**Eingangskontrolle:** Filter für Injection-Versuche und versteckten Text fangen bekannte, einfache Angriffe ab.",
        "**Modell:** Anweisungshierarchie und adversariales Training senken die Erfolgsquote, aber nicht auf null.",
        "**Ausgangskontrolle:** externe Bilder und Links entfernen, menschliche Freigabe vor dem Versand — die letzte Prüfung vor dem Schaden.",
        "**Eindämmung:** Sandbox, Ratenbegrenzung und Notabschaltung halten einen kompromittierten Agenten in Schach."
      ]],
      ["p", "Über allem stehen Protokollierung und regelmäßiges **Red Teaming**: gezielte Angriffstests auf das gesamte System mit seinen echten Werkzeugen und Rechten. Weil KI nicht immer gleich antwortet, sollten Ergebnisse als Erfolgsquote über viele Durchläufe berichtet werden, nicht als „bestanden“ oder „nicht bestanden“."],
      ["p", "Auch der Mensch in der Schleife schützt nur, wenn er Zeit, Informationen und echte Befugnis hat, Nein zu sagen. Ein bloßes Abnicken ist keine Aufsicht."],

      ["h2", "Der Rechtsrahmen"],
      ["p", "Die **KI-Verordnung der EU** (Verordnung (EU) 2024/1689) ist seit dem 1. August 2024 in Kraft. Sie gilt auch für Unternehmen außerhalb der EU, wenn ihre KI-Systeme oder deren Ergebnisse in der EU genutzt werden. Bußgelder reichen bis zu 35 Mio. Euro oder 7 % des weltweiten Jahresumsatzes."],
      ["ul", [
        "**Verbotene Praktiken** wie Social Scoring gelten seit dem 2. Februar 2025.",
        "**Allzweck-KI-Modelle** unterliegen seit dem 2. August 2025 eigenen Pflichten. Der Digital-Omnibus hat den Zeitplan für die Hochrisiko-Pflichten verschoben.",
        "**Hochrisiko-Systeme** nach Anhang III — etwa in Personalauswahl, Kreditwürdigkeitsprüfung oder Bildung — brauchen Risikomanagement, Daten-Governance, Protokollierung, menschliche Aufsicht und nach Art. 15 angemessene Genauigkeit, Robustheit und Cybersicherheit.",
        "**Schwerwiegende Vorfälle** müssen Anbieter von Hochrisiko-Systemen nach Art. 73 den Behörden melden."
      ]],
      ["p", "Besonders praxisrelevant ist die Unterscheidung zwischen **Anbieter** und **Betreiber**. Der Anbieter entwickelt das System und bringt es unter eigenem Namen auf den Markt; der Betreiber nutzt es beruflich. Die meisten Pflichten treffen den Anbieter. Wer ein Hochrisiko-System aber wesentlich verändert oder unter eigenem Namen vertreibt, wird selbst zum Anbieter."],
      ["p", "Neben der Verordnung setzen sich Normen durch: **ISO/IEC 42001** ist die zertifizierbare Norm für KI-Managementsysteme und passt zu einem bestehenden ISO/IEC-27001-Programm; **ISO/IEC 27090** liefert seit Oktober 2026 Leitlinien zu Sicherheitsbedrohungen für KI. Die OWASP-Listen und MITRE ATLAS bieten technischen Teams ein gemeinsames Vokabular."],
      ["p", "Und die Haftung bleibt beim Unternehmen: Ein kanadisches Tribunal verurteilte Air Canada 2024, weil der Website-Chatbot eine nicht existierende Erstattungsregel erfunden hatte. „Das hat der Chatbot gesagt“ ist keine Verteidigung."],

      ["h2", "Checkliste für Unternehmen"],
      ["check", [
        "Ein KI-Inventar anlegen: jedes KI-System, jeden Agenten und jede KI-Funktion bei Lieferanten — mit Verantwortlichem, Zweck, Daten, Risikostufe und Rolle (Anbieter oder Betreiber).",
        "Agenten nur die Rechte geben, die ihre Aufgabe erfordert, und eine eigene, widerrufbare Identität.",
        "Die Dreifaltigkeit prüfen: private Daten, fremde Inhalte, externe Kommunikation — mindestens eines davon entfernen.",
        "Externe Bilder und Links in KI-Antworten blockieren oder über einen Proxy leiten.",
        "Zahlungen, Löschungen und Vertragsschritte nur nach menschlicher Freigabe.",
        "Modelle nur aus geprüften Quellen laden, Versionen festschreiben, MCP-Server nach jedem Update neu bewerten.",
        "Keine Zahlung allein auf Basis eines Anrufs oder Videocalls — immer über einen zweiten Kanal bestätigen.",
        "Eine KI-Nutzungsrichtlinie einführen: welche Tools freigegeben sind und welche Daten hinein dürfen.",
        "Regelmäßig testen und eine Notabschaltung bereithalten — und vor dem Ernstfall ausprobieren."
      ]],

      ["h2", "Worauf es ankommt"],
      ["p", "KI-Sicherheit ist weniger eine Frage des perfekten Modells als der Architektur drumherum. Wer Rechte begrenzt, Schutzschichten aufbaut und Verantwortlichkeiten klar festlegt, kann KI produktiv einsetzen — und bleibt auch dann handlungsfähig, wenn eine Manipulation gelingt."],
      ["note", "Sie setzen KI-Assistenten oder Agenten im Unternehmen ein? Wir unterstützen Sie bei Dokumentation, Datenschutz und der technischen Umsetzung nach KI-Verordnung und DSGVO — **nehmen Sie Kontakt auf**."]
    ],
    sources: [
      ["KI-Verordnung — Verordnung (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["OWASP GenAI Security Project — Top 10 für LLM- und agentische Anwendungen (EN)", "https://genai.owasp.org/"],
      ["MITRE ATLAS — Angriffstechniken gegen KI-Systeme (EN)", "https://atlas.mitre.org/"],
      ["ISO/IEC 42001 — KI-Managementsysteme (EN)", "https://www.iso.org/standard/42001"]
    ]
  },
  {
    slug: "cookie-banner-urteile",
    tag: "Cookies",
    cta: "check",
    t: "Cookie-Banner: 8 Urteile, die jede Website kennen sollte (2026)",
    d: "Von Planet49 bis VG Hannover: Was deutsche Gerichte zu Cookie-Bannern, „Alles ablehnen“, Google Fonts und Abmahnungen entschieden haben — mit Checkliste für Ihre Website.",
    md: "Planet49 bis VG Hannover: Was Gerichte zu Cookie-Bannern, „Alles ablehnen“, Google Fonts und Abmahnungen entschieden haben — mit Checkliste.",
    lead: "„Alles ablehnen“ auf der ersten Ebene, kein Häkchen voreingestellt, kein Google Fonts ohne Einwilligung: Was heute für Cookie-Banner gilt, haben vor allem Gerichte festgelegt. Hier sind die acht Entscheidungen, die man kennen sollte — und was sie für Ihre Website bedeuten.",
    date: "Oktober 2026", iso: "2026-10-29",
    blocks: [
      ["p", "Kaum ein Element einer Website ist so umstritten wie das Cookie-Banner. Es nervt Besucher, es kostet Betreiber Daten — und trotzdem ist es bei vielen Websites rechtlich falsch gebaut. Das Gesetz selbst sagt nur wenig darüber, wie ein Banner aussehen muss. Die Details haben Gerichte in den letzten Jahren entschieden, Stück für Stück."],
      ["p", "Wir prüfen Websites von kleinen und mittleren Unternehmen auf genau diese Punkte. Die Fehler wiederholen sich, und fast jeder davon ist schon einmal vor Gericht gelandet. Deshalb lohnt sich der Blick auf die Urteile."],

      ["h2", "Kurz zusammengefasst"],
      ["check", [
        "Nicht notwendige Cookies und Tracking erst **nach** einer aktiven Einwilligung — vorher wird nichts geladen.",
        "Keine voreingestellten Häkchen. Schweigen oder Weitersurfen ist keine Einwilligung.",
        "„Alles ablehnen“ muss **auf der ersten Ebene** stehen und so leicht sein wie „Alles akzeptieren“.",
        "Das „X“ zum Schließen darf nicht heimlich „Akzeptieren“ bedeuten.",
        "Google Fonts, Google Maps, YouTube, Tag Manager, Analytics und Pixel brauchen eine Einwilligung — oder eine datensparsame Alternative.",
        "Abmahnen dürfen nicht nur Betroffene, sondern seit 2025 ausdrücklich auch **Mitbewerber und Verbraucherverbände**."
      ]],

      ["h2", "Die Rechtslage in zwei Sätzen"],
      ["p", "Für Cookies und ähnliche Technologien gilt in Deutschland **§ 25 TDDDG** (bis Mai 2024 hieß das Gesetz TTDSG): Wer Informationen auf dem Gerät eines Besuchers speichert oder ausliest, braucht dafür eine Einwilligung — außer, es ist unbedingt erforderlich für den Dienst, den der Besucher ausdrücklich angefordert hat. Wie eine wirksame Einwilligung aussieht, bestimmt die **DSGVO**: freiwillig, informiert, für einen bestimmten Zweck und durch eine eindeutige, aktive Handlung (Art. 4 Nr. 11, Art. 7 DSGVO)."],
      ["p", "Alles Weitere — welche Buttons, auf welcher Ebene, in welcher Farbe — steht in keinem Gesetz. Das haben die folgenden Gerichte entschieden."],

      ["h2", "Die 8 wichtigsten Urteile"],

      ["h3", "1. EuGH und BGH „Planet49“ (2019/2020): Vorausgefüllte Häkchen sind keine Einwilligung"],
      ["p", "Ein Gewinnspielanbieter hatte das Kästchen für Werbe-Cookies schon angekreuzt. Der Gerichtshof der EU entschied am 1. Oktober 2019 (C-673/17): Ein voreingestelltes Häkchen, das der Nutzer abwählen müsste, ist keine wirksame Einwilligung. Der Bundesgerichtshof übernahm das am 28. Mai 2020 (I ZR 7/16, „Cookie-Einwilligung II“) für das deutsche Recht."],
      ["p", "**Für Ihre Website:** Alle optionalen Kategorien im Banner — Statistik, Marketing, Komfort — müssen standardmäßig **aus** sein."],

      ["h3", "2. LG Rostock (2020): Ein „OK“-Button und versteckte Ablehnung reichen nicht"],
      ["p", "Der Verbraucherzentrale Bundesverband klagte gegen ein Anwaltssuchportal. Dessen Banner hatte Statistik- und Marketing-Cookies vorausgewählt und nur einen Button „OK“; eine spätere Version bot einen großen grünen Button „Cookies zulassen“, während die Option für nur notwendige Cookies kaum als klickbar zu erkennen war. Das LG Rostock (15.09.2020, 3 O 762/19) hielt beides für unwirksam."],
      ["p", "**Für Ihre Website:** Eine Ablehnung, die man suchen muss, ist rechtlich so gut wie keine Ablehnung."],

      ["h3", "3. LG München I (2022): 100 Euro wegen Google Fonts"],
      ["p", "Eine Website lud Schriftarten dynamisch von Googles Servern. Dabei wurde die IP-Adresse jedes Besuchers an Google übertragen — ohne Einwilligung. Das LG München I (20.01.2022, 3 O 17493/20) sprach einem Besucher 100 Euro Schadensersatz zu und untersagte die Übertragung."],
      ["p", "Das Urteil löste 2022 eine Welle von Massenabmahnungen aus. Tausende Website-Betreiber erhielten Schreiben mit Zahlungsaufforderungen."],

      ["h3", "4. LG München I (2023): Die Abmahnwelle war rechtsmissbräuchlich — das Problem bleibt"],
      ["p", "Ein Jahr später stellte das LG München I (30.03.2023, 4 O 13063/22) klar: Wer mit einem Crawler gezielt Websites mit Google Fonts sucht, um daraus Ansprüche zu machen, handelt rechtsmissbräuchlich und hat keinen Anspruch auf Schadensersatz. Gegen die Initiatoren der Abmahnwelle wurde auch strafrechtlich ermittelt."],
      ["p", "**Für Ihre Website:** Massenabmahnungen sind nicht automatisch berechtigt — aber die Pflicht dahinter besteht weiter. Schriften selbst zu hosten kostet nichts und beendet das Thema dauerhaft."],

      ["h3", "5. OLG Köln (2024): „Ablehnen“ muss gleichwertig sein — und das „X“ ist kein Ja"],
      ["p", "Die Verbraucherzentrale NRW klagte gegen wetteronline.de. Auf der ersten Ebene des Banners gab es keine Ablehnungsoption; die zweite Ebene bot nur „Alles akzeptieren“ und „Speichern“. Oben rechts stand ein Link „Akzeptieren & Schließen X“. Das OLG Köln (19.01.2024, 6 U 80/23) entschied: Die Einwilligung war weder freiwillig noch ausreichend informiert. Besucher kennen das „X“ als Schließen-Symbol — dass es zugleich eine Einwilligung auslöst, ist irreführend."],
      ["p", "**Für Ihre Website:** Kein Kombi-Button aus Schließen und Akzeptieren. Wer das Banner wegklickt, hat nicht eingewilligt."],

      ["h3", "6. BGH (2024): Schon der Kontrollverlust über Daten ist ein Schaden"],
      ["p", "Im Facebook-Scraping-Verfahren entschied der BGH am 18.11.2024 (VI ZR 10/24): Bereits der kurzzeitige Verlust der Kontrolle über personenbezogene Daten kann ein immaterieller Schaden nach Art. 82 DSGVO sein — ein Missbrauch der Daten muss nicht nachgewiesen werden. Als Größenordnung nannte das Gericht für den konkreten Fall rund 100 Euro."],
      ["p", "**Für Ihre Website:** Der Fall betraf kein Cookie-Banner. Er senkt aber die Hürde für Schadensersatzforderungen allgemein — auch wegen Tracking ohne Einwilligung."],

      ["h3", "7. BGH (2025): Mitbewerber und Verbände dürfen abmahnen"],
      ["p", "Lange war umstritten, ob Konkurrenten Datenschutzverstöße abmahnen dürfen. Nach dem EuGH-Urteil „Lindenapotheke“ (04.10.2024, C-21/23) entschied der BGH am 27. März 2025 (I ZR 186/17, I ZR 222/19, I ZR 223/19): Verbraucherschutzverbände und Mitbewerber können DSGVO-Verstöße mit einer wettbewerbsrechtlichen Klage verfolgen."],
      ["p", "**Für Ihre Website:** Das Risiko kommt nicht mehr nur von Besuchern oder der Aufsichtsbehörde, sondern auch von der Konkurrenz."],

      ["h3", "8. VG Hannover (2025): „Alles ablehnen“ gehört auf die erste Ebene"],
      ["p", "Die Datenschutzbehörde Niedersachsen hatte einem Medienunternehmen aufgegeben, sein Banner umzubauen. Dort gab es auf der ersten Ebene nur „Alle akzeptieren“ und „Einstellungen“; ablehnen ging erst eine Ebene tiefer. Das VG Hannover (19.03.2025, 10 A 5385/22) wies die Klage des Unternehmens ab. Ablehnen muss so einfach sein wie Zustimmen. Wer das Banner bei jedem Besuch erneut zeigt, bis der Nutzer nachgibt, übt unzulässigen Druck aus. Und auch der **Google Tag Manager** selbst braucht eine Einwilligung, weil er für den angeforderten Dienst nicht unbedingt erforderlich ist."],
      ["p", "**Für Ihre Website:** Zwei gleichwertige Buttons auf der ersten Ebene — „Alles akzeptieren“ und „Alles ablehnen“ — plus „Einstellungen“. Und der Tag Manager lädt erst nach der Einwilligung."],

      ["h2", "Checkliste: So prüfen Sie Ihr Cookie-Banner"],
      ["p", "Öffnen Sie Ihre Website in einem privaten Browserfenster und gehen Sie diese Punkte durch:"],
      ["check", [
        "Werden **vor** einem Klick im Banner Anfragen an Google, Meta, YouTube oder andere Dritte gesendet? (Entwicklertools → Netzwerk.) Wenn ja: Fehler.",
        "Stehen „Alles akzeptieren“ und „Alles ablehnen“ **gleich groß und gleich auffällig** auf der ersten Ebene?",
        "Sind in den Einstellungen alle optionalen Kategorien **standardmäßig deaktiviert**?",
        "Schließt das „X“ das Banner, ohne eine Einwilligung zu erteilen?",
        "Nennt das Banner Zwecke, Empfänger und eventuelle Übermittlungen in Drittländer — oder verlinkt es direkt dorthin?",
        "Kann man die Einwilligung jederzeit genauso leicht **widerrufen**, etwa über einen Link im Footer?",
        "Bleiben Impressum und Datenschutzerklärung erreichbar, solange das Banner offen ist?",
        "Wird eine Ablehnung **gespeichert**, statt das Banner bei jedem Seitenaufruf erneut zu zeigen?",
        "Stimmt die Datenschutzerklärung mit den Diensten überein, die tatsächlich laden?"
      ]],

      ["h2", "Die häufigsten Fehler auf deutschen Websites"],
      ["ul", [
        "**Google Fonts vom Google-Server** statt lokal eingebunden.",
        "**Google Maps und YouTube direkt eingebettet** — sie setzen beim Laden der Seite Cookies und kontaktieren Google. Ein „Zum Laden klicken“-Platzhalter löst das.",
        "**Google Analytics, Meta Pixel oder der Tag Manager feuern sofort**, und das Banner ist nur Dekoration.",
        "**Ein Baukasten-Banner mit Standardeinstellungen**, das nie an die eigene Website angepasst wurde.",
        "**„Nur notwendige Cookies“ als grauer Textlink**, „Alle akzeptieren“ als großer farbiger Button."
      ]],

      ["h2", "Was ist mit EinwV und Digital Omnibus?"],
      ["p", "Zwei Entwicklungen versprechen weniger Banner — ändern heute aber wenig:"],
      ["ul", [
        "**Einwilligungsverwaltungsverordnung (EinwV).** Seit dem 1. April 2025 können anerkannte Dienste Einwilligungen zentral verwalten, etwa im Browser. Die Einbindung ist für Website-Betreiber freiwillig (§ 18 Abs. 1 EinwV), und bis Mai 2025 lagen der Bundesdatenschutzbeauftragten noch keine Anträge auf Anerkennung vor. Ihr Banner ersetzt das vorerst nicht.",
        "**Digital Omnibus der EU.** Die Kommission hat im November 2025 vorgeschlagen, die Cookie-Regeln in die DSGVO zu verschieben, einige Zwecke von der Einwilligung auszunehmen und Browsersignale verbindlich zu machen. Stand Oktober 2026 ist der Vorschlag nicht beschlossen: Parlament und Rat haben noch keine Positionen verabschiedet. Bis eine Einigung in Kraft tritt, gilt § 25 TDDDG unverändert."
      ]],

      ["h2", "Die eleganteste Lösung: gar kein Banner brauchen"],
      ["p", "Ein Cookie-Banner ist nur nötig, wenn Ihre Website Dinge tut, die eine Einwilligung erfordern. Viele Unternehmenswebsites brauchen das gar nicht: Schriften lokal hosten, Karten und Videos erst nach Klick laden, eine cookielose Statistik statt Google Analytics verwenden — und das Banner entfällt."],
      ["p", "Unsere eigene Website lexoradigital.com funktioniert genau so: keine Cookies, keine Tracker, kein Banner. Das ist keine Verzichtserklärung, sondern eine Designentscheidung — schneller für Besucher, sauberer im Recht."],

      ["h2", "Häufige Fragen"],
      ["h3", "Ist ein „Alles ablehnen“-Button Pflicht?"],
      ["p", "Das Gesetz nennt keinen Button. Nach dem OLG Köln (2024) und dem VG Hannover (2025) muss das Ablehnen aber so einfach sein wie das Zustimmen — in der Praxis bedeutet das einen gleichwertigen „Alles ablehnen“-Button auf der ersten Ebene."],
      ["h3", "Brauche ich ein Cookie-Banner, wenn ich nur technisch notwendige Cookies nutze?"],
      ["p", "Für unbedingt erforderliche Cookies — etwa für einen Warenkorb oder einen Login — brauchen Sie keine Einwilligung und damit auch kein Einwilligungsbanner. In der Datenschutzerklärung müssen Sie diese Cookies trotzdem beschreiben."],
      ["h3", "Was kostet ein Fehler im Cookie-Banner?"],
      ["p", "Bußgelder gegen kleine Unternehmen sind selten. Realistischer sind Abmahnungen von Mitbewerbern oder Verbänden mit Anwaltskosten, Unterlassungserklärungen und Forderungen von Besuchern nach Schadensersatz — oft um die 100 Euro pro Fall, bei vielen Fällen schnell mehr."],
      ["h3", "Ist mein Banner sicher, wenn ich ein bekanntes Consent-Tool verwende?"],
      ["p", "Nicht automatisch. In den Fällen des OLG Köln und des VG Hannover lag das Problem in der Konfiguration: welche Buttons auf welcher Ebene stehen und was vor der Einwilligung lädt. Entscheidend ist, wie das Tool auf Ihrer Website eingestellt ist."],

      ["note", "Unsicher, ob Ihr Banner diesen Urteilen standhält? Wir prüfen Ihre Website technisch — was vor der Einwilligung lädt, wie das Banner aufgebaut ist — und **beheben die Fehler direkt**, statt nur einen Bericht zu schreiben."]
    ],
    sources: [
      ["§ 25 TDDDG (gesetze-im-internet.de)", "https://www.gesetze-im-internet.de/ttdsg/__25.html"],
      ["EuGH, Planet49, C-673/17 (2019)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["BGH, Cookie-Einwilligung II, I ZR 7/16 (2020) — Noerr", "https://www.noerr.com/de/insights/kurzinfo-zu-bgh-entscheidung-voreingestellte-einwilligungen"],
      ["LG Rostock, 3 O 762/19 (2020) — beck-aktuell", "https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/lg-rostock-tracking-cookies-mit-voreingestellter-einwilligung-nicht-erlaubt-2020-11-26"],
      ["LG München I, 3 O 17493/20 (2022) — IHK", "https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176"],
      ["LG München I, 4 O 13063/22 (2023) — Der Betrieb", "https://der-betrieb.de/meldungen/google-fonts-abmahnwelle-war-rechtsmissbraeuchlich"],
      ["OLG Köln, 6 U 80/23 (2024) — Urteil (PDF, Verbraucherzentrale NRW)", "https://www.verbraucherzentrale.nrw/sites/default/files/2024-01/olg-koln-vom-19.01.2024_6-u-80_23_geschwarzt.pdf"],
      ["BGH, VI ZR 10/24 (2024) — CURIA", "https://curia.europa.eu/site/jcms/p1_1000048773/de/bundesgerichtshof-urteil-vom-18-november-2024-vi-zr-10/24"],
      ["BGH, I ZR 186/17 u. a. (2025) — Dr. Datenschutz", "https://www.dr-datenschutz.de/bgh-ermoeglicht-leichtere-abmahnung-von-datenschutzverstoessen/"],
      ["VG Hannover, 10 A 5385/22 (2025) — WBS Legal", "https://www.wbs.legal/it-und-internet-recht/datenschutzrecht/vg-hannover-zu-einwilligungsbutton-cookie-banner-brauchen-alles-ablehnen-schaltflaeche-82973/"],
      ["Einwilligungsverwaltungsverordnung (EinwV)", "https://www.gesetze-im-internet.de/einwv/"],
      ["Europäische Kommission — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "gdpr-website-legal-document",
    tag: "DSGVO",
    t: "Ihre Website ist bereits ein Rechtsdokument",
    d: "DSGVO und Cookie-Regeln sind kein Banner, das man am Ende einfügt. Es sind Designentscheidungen — und am günstigsten trifft man sie vor der ersten Zeile Code.",
    lead: "DSGVO und Cookie-Regeln sind kein Banner, das man am Ende einfügt. Es sind Designentscheidungen — und am günstigsten trifft man sie vor der ersten Zeile Code.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Die meisten Websites, die ich prüfe, sind nicht deshalb rechtswidrig, weil ihren Betreibern der Datenschutz egal wäre. Sie sind es, weil das Recht als Letztes kam. Das Design wurde abgenommen, der Entwickler hat gebaut, die Seite ging online — und dann fiel jemandem das Cookie-Banner ein, und es wurde obendrauf gesetzt."],
      ["p", "Genau diese Reihenfolge ist das Problem. Wenn das Banner kommt, laden die Schriften längst von einem Server in einem anderen Land, die Karte setzt längst Cookies, das Analyse-Skript feuert, bevor irgendjemand etwas angeklickt hat. Das Banner wird zur Dekoration über Entscheidungen, die ohne es getroffen wurden."],
      ["quote", "Eine Website ist keine Broschüre mit angehängter Datenschutzerklärung. Jedes Element darauf ist eine Entscheidung über die Daten anderer Menschen."],

      ["h2", "Jedes Element ist eine rechtliche Entscheidung"],
      ["p", "Wer eine Website baut, entscheidet nicht nur, wie sie aussieht. Er entscheidet, welche Unternehmen die Daten der Besucher erhalten, wann und auf welcher Rechtsgrundlage. Einige ganz gewöhnliche Beispiele:"],
      ["ul", [
        "**Webfonts.** Werden Schriften direkt vom Server eines Drittanbieters geladen, geht die IP-Adresse jedes Besuchers an diesen Anbieter. 2022 sprach das LG München I einem Besucher genau dafür Schadensersatz zu. Die Schriften selbst zu hosten kostet nichts und löst das Problem.",
        "**Eingebettete Videos und Karten.** Ein YouTube-Video oder eine Google-Karte kann beim Laden der Seite sofort Cookies setzen und externe Server kontaktieren. Ein einfacher „Zum Laden klicken“-Platzhalter löst das.",
        "**Webanalyse.** Tracking-Tools, die Kennungen auf dem Gerät speichern, brauchen in der Regel vorher eine Einwilligung. Datenschutzfreundliche, cookielose Lösungen oft nicht — das ist eine Designentscheidung, keine juristische Spitzfindigkeit.",
        "**Kontaktformulare.** Jedes Formular sammelt personenbezogene Daten. Wer erhält die Anfragen, wo werden sie gespeichert, wie lange?",
        "**Chat-Widgets, Newsletter-Tools, Buchungssysteme.** Jedes davon ist meist ein Auftragsverarbeiter, der einen Vertrag (Art. 28 DSGVO) und eine Zeile in Ihrer Datenschutzerklärung braucht."
      ]],
      ["p", "Nichts davon ist exotisch. Es ist die ganz normale Anatomie einer Unternehmenswebsite. Genau deshalb gehört rechtliches Wissen ins Briefing — neben die Farbpalette und die Sitemap."],

      ["h2", "Was das Recht tatsächlich verlangt"],
      ["p", "Ohne Fachjargon lassen sich die Regeln für eine typische Unternehmenswebsite auf wenige Grundsätze zurückführen:"],
      ["ul", [
        "**Einwilligung vor nicht notwendigen Cookies.** Nach den ePrivacy-Regeln (Art. 5 Abs. 3 ePrivacy-Richtlinie, in Deutschland umgesetzt durch § 25 TDDDG) braucht das Speichern oder Auslesen von Informationen auf dem Gerät eine Einwilligung, sofern es nicht unbedingt erforderlich ist für den Dienst, den der Besucher angefordert hat.",
        "**Echte Einwilligung, kein Trick.** Der Gerichtshof der EU hat in **Planet49** (2019) entschieden, dass vorangekreuzte Kästchen keine wirksame Einwilligung sind. Europäische Aufsichtsbehörden erwarten, dass „Ablehnen“ so einfach ist wie „Akzeptieren“.",
        "**Eine Rechtsgrundlage für jede Verarbeitung.** Art. 6 DSGVO: Einwilligung, Vertrag, rechtliche Pflicht, berechtigtes Interesse — Sie brauchen eine, und Sie müssen wissen, welche.",
        "**Transparenz.** Art. 13 DSGVO: Sagen Sie in klarer Sprache, was Sie erheben, warum, wer es erhält und wie lange Sie es speichern.",
        "**Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen.** Art. 25 DSGVO verlangt wörtlich, dass Datenschutz von Anfang an in das System eingebaut wird. Das Gesetz selbst sagt: erst gestalten, nicht später flicken.",
        "**Vorsicht bei Übermittlungen außerhalb der EU.** Viele Tools senden Daten in die USA. Das EU-US Data Privacy Framework (seit Juli 2023) erfasst zertifizierte Unternehmen — trotzdem müssen Sie wissen, welche Tools Sie nutzen und auf welcher Grundlage."
      ]],

      ["h2", "Warum Nachrüsten teurer ist"],
      ["p", "Das Schlagzeilen-Risiko ist das DSGVO-Bußgeld: bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes. Für ein kleines Unternehmen ist das selten die realistische Gefahr. Die realistischen Gefahren sind kleiner und häufiger:"],
      ["ul", [
        "Abmahnungen von Wettbewerbern oder Verbänden — in Deutschland und Österreich verbreitet;",
        "Ansprüche von Besuchern auf immateriellen Schadensersatz nach Art. 82 DSGVO;",
        "Beschwerden bei der Datenschutzbehörde, die dann Fragen stellt, die Sie beantworten müssen;",
        "und die stillen Kosten: Teile einer Website neu zu bauen, die man gleich richtig hätte bauen können."
      ]],
      ["p", "Eine eingebettete Karte ersetzen, Schriften lokal einbinden, die Analyse neu verdrahten und die Datenschutzerklärung nach dem Launch neu schreiben dauert länger, als es während des Baus zu erledigen. Rechtliches Wissen, früh angewendet, ist schlicht günstiger."],

      ["h2", "Was sich ändert — und was nicht"],
      ["p", "Im November 2025 hat die Europäische Kommission einen „Digital Omnibus“ vorgeschlagen, der unter anderem die Cookie-Regeln in die DSGVO verschieben und einige Ausnahmen einführen würde, etwa für bestimmte Reichweitenmessung. Stand Oktober 2026 ist dieser Teil **noch ein Entwurf**: Der Rat hat sich nicht auf seine Verhandlungsposition geeinigt, beschlossen ist nichts."],
      ["p", "Die praktische Regel ist einfach: **Bauen Sie für das geltende Recht, nicht für einen Vorschlag.** Die aktuellen Einwilligungsregeln gelten heute. Ändern sich die Regeln, ist eine Website mit sauberer Einwilligungslogik auch am leichtesten anzupassen."],

      ["h2", "Eine kurze Checkliste für Ihre nächste Website"],
      ["check", [
        "Listen Sie jeden Drittanbieter-Dienst auf, den die Website laden wird — bevor das Design abgenommen wird.",
        "Hosten Sie Schriften und wesentliche Skripte selbst, wo es möglich ist.",
        "Setzen Sie Videos, Karten und Social-Media-Einbettungen hinter einen Klick-Platzhalter.",
        "Blockieren Sie nicht notwendige Cookies bis zur Einwilligung; machen Sie „Ablehnen“ so sichtbar wie „Akzeptieren“.",
        "Schließen Sie Auftragsverarbeitungsverträge mit Formular-, Hosting-, Newsletter- und Chat-Anbietern.",
        "Schreiben Sie die Datenschutzerklärung nach dem tatsächlichen Setup — nicht nach einer Vorlage."
      ]],

      ["h2", "Worauf es ankommt"],
      ["p", "Recht ist nicht der Feind guten Designs. Schlanke, schnelle Websites, die nur laden, was sie brauchen, sind meist zugleich rechtskonformer und angenehmer zu benutzen. Der beste Zeitpunkt, über die DSGVO nachzudenken, ist, solange Sie noch entscheiden, was die Website sein soll. Danach gestalten Sie nicht mehr — Sie reparieren."],
      ["note", "Sie möchten wissen, wo Ihre aktuelle Website steht? Unser **kostenloser DSGVO- & Cookie-Check** zeigt, was lädt, was Cookies setzt und was korrigiert werden muss — und ab 99 € beheben wir es für Sie."]
    ],
    sources: [
      ["DSGVO — Verordnung (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["ePrivacy-Richtlinie 2002/58/EG (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2002/58/oj"],
      ["EuGH, Planet49, C-673/17 (2019)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["Europäische Kommission — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "digital-services-act-business",
    tag: "DSA",
    t: "Der Digital Services Act betrifft nicht nur Big Tech",
    d: "Die Schlagzeilen handeln von Rekordstrafen für globale Plattformen. Doch der DSA entscheidet auch, was passiert, wenn Ihr Unternehmen Bewertungen hostet, auf einem Marktplatz verkauft oder sein Konto gesperrt wird.",
    md: "Der DSA betrifft auch Unternehmen, die Bewertungen hosten, auf Marktplätzen verkaufen oder deren Konto gesperrt wird. Was das konkret bedeutet.",
    lead: "Die Schlagzeilen handeln von Rekordstrafen für globale Plattformen. Doch der DSA prägt auch, was passiert, wenn Ihr Unternehmen Bewertungen hostet, auf einem Marktplatz verkauft — oder eines Morgens ein gesperrtes Konto vorfindet.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Im Dezember 2025 verhängte die Europäische Kommission gegen X ein Bußgeld von 120 Mio. Euro nach dem Digital Services Act. Im Juli 2026 traf es AliExpress mit 550 Mio. Euro, weil illegale und unsichere Produkte nicht angemessen behandelt wurden. Wer nur die Schlagzeilen liest, hält den DSA für ein Gesetz über eine Handvoll Giganten."],
      ["p", "Das ist er nicht. Die Giganten tragen die schwersten Pflichten, aber der DSA ist in Schichten aufgebaut — und manche dieser Schichten erreichen ganz normale Unternehmen auf zwei sehr unterschiedliche Weisen: als **Anbieter** eines digitalen Dienstes und als **Nutzer** der Plattformen, von denen sie abhängen."],
      ["quote", "Man braucht keine 45 Millionen Nutzer, um vom DSA betroffen zu sein. Es genügt, Inhalte anderer zu hosten — oder von einer Plattform abzuhängen, die das tut."],

      ["h2", "Die Schichten, verständlich erklärt"],
      ["p", "Der DSA gilt für „Vermittlungsdienste“ — Dienste, die von anderen bereitgestellte Informationen übermitteln, speichern oder veröffentlichen. Die Pflichten bauen aufeinander auf:"],
      ["ul", [
        "**Alle Vermittlungsdienste** — Grundpflichten wie eine Kontaktstelle und klare Geschäftsbedingungen.",
        "**Hostingdienste** — wer Informationen im Auftrag von Nutzern speichert, muss eine Meldemöglichkeit für rechtswidrige Inhalte anbieten (Melde- und Abhilfeverfahren, Art. 16) und Einschränkungen von Inhalten begründen (Begründung, Art. 17).",
        "**Online-Plattformen** — Hostingdienste, die Nutzerinhalte zusätzlich öffentlich verbreiten, etwa Foren, soziale Netzwerke und Marktplätze: Beschwerdesysteme, Werbetransparenz, ein Verbot manipulativer Oberflächengestaltung („Dark Patterns“, Art. 25), Schutz Minderjähriger.",
        "**Sehr große Plattformen und Suchmaschinen** — über 45 Millionen monatliche Nutzer in der EU: systemische Risikobewertungen, unabhängige Prüfungen, Datenzugang für Forschende."
      ]],
      ["p", "Eine gewöhnliche Unternehmenswebsite, die Ihre eigenen Inhalte zeigt, ist in der Regel überhaupt kein Vermittlungsdienst. Doch sobald Sie andere veröffentlichen lassen — Kundenbewertungen, ein Community-Forum, Angebote anderer Verkäufer, Uploads von Nutzern —, stehen Sie womöglich auf den ersten Sprossen dieser Leiter."],

      ["h2", "Wenn Ihre Website zum Host wird"],
      ["p", "Hier verändert rechtliches Wissen das Design. Ein Bewertungsbereich oder ein kleiner Marktplatz ist nicht nur eine Funktion, sondern die Wahl einer rechtlichen Rolle. Gilt der DSA, braucht der Bau einige Dinge, die man zu Beginn leicht einplant und später nur mühsam nachrüstet:"],
      ["ul", [
        "eine sichtbare Möglichkeit für jeden, Inhalte zu melden, die er für rechtswidrig hält;",
        "einen Prozess für diese Meldungen — wer sie prüft, wie schnell und wie Entscheidungen dokumentiert werden;",
        "eine kurze Begründung an den Nutzer, dessen Inhalt entfernt oder eingeschränkt wird;",
        "Geschäftsbedingungen, die in klaren Worten sagen, was erlaubt ist und wie moderiert wird."
      ]],
      ["p", "Für kleinere Anbieter gibt es eine gute Nachricht: **Kleinst- und Kleinunternehmen** sind von den meisten zusätzlichen Pflichten für Online-Plattformen ausgenommen (Art. 19). Die grundlegenden Hosting-Pflichten gelten jedoch unabhängig von der Größe. Wer genau weiß, wo diese Linie verläuft, baut weder zu viel noch zu wenig."],

      ["h2", "Was die meisten übersehen: Ihre Rechte als Plattformnutzer"],
      ["p", "Für viele Unternehmen ist der DSA weniger eine Pflicht als ein **Werkzeug**. Wenn Sie über einen Marktplatz verkaufen, in sozialen Medien werben oder für Buchungen auf ein Profil angewiesen sind, gibt Ihnen der DSA Rechte, die Sie vorher nicht hatten:"],
      ["ul", [
        "**Eine Begründung.** Entfernt eine Plattform Ihre Inhalte, stuft sie herab, sperrt Ihr Konto oder stoppt Zahlungen, muss sie Ihnen eine klare Begründung geben (Art. 17).",
        "**Eine Beschwerde.** Online-Plattformen müssen ein kostenloses internes Beschwerdesystem anbieten, und Entscheidungen dürfen nicht rein automatisiert getroffen werden (Art. 20).",
        "**Eine unabhängige Überprüfung.** Sie können sich an eine zertifizierte außergerichtliche Streitbeilegungsstelle wenden (Art. 21).",
        "**Transparenz bei Werbung.** Anzeigen müssen zeigen, wer dahintersteht und nach welchen Hauptparametern sie ausgespielt werden (Art. 26)."
      ]],
      ["p", "In der Praxis wird ein gesperrter Shop oder ein gesperrtes Werbekonto oft wie ein Kundenservice-Problem behandelt. Es ist aber auch ein rechtliches — und ein Unternehmen, das in seiner Beschwerde den richtigen Artikel nennen kann, bekommt deutlich eher eine echte Antwort."],

      ["h2", "Verkaufen auf Marktplätzen: Nachverfolgbarkeit"],
      ["p", "Online-Marktplätze müssen grundlegende Informationen über die Händler erheben und prüfen, die über sie verkaufen — Name, Kontaktdaten, Registrierungs- und Zahlungsinformationen (Art. 30). Wenn Sie auf einem Marktplatz verkaufen, rechnen Sie mit diesen Anfragen und halten Sie Ihre Unternehmensangaben überall einheitlich: auf Ihrer Website, im Impressum und in Ihren Verkäuferprofilen. Uneinheitliche Angaben gehören zu den häufigsten Gründen für Verzögerungen und Sperren."],

      ["h2", "Eine Lehre für jede Website"],
      ["p", "Das Dark-Pattern-Verbot des DSA gilt formal für Online-Plattformen. Das Prinzip dahinter — gestalte keine Oberflächen, die Menschen zu Entscheidungen verleiten, die sie nicht wollten — zieht sich aber auch durch Verbraucher- und Datenschutzrecht. Vorausgewählte Optionen, versteckte „Ablehnen“-Schaltflächen und verwirrende Kündigungswege werden zunehmend als Rechtsproblem behandelt, nicht nur als schlechter Stil. Ehrliches Design wird zur Compliance-Anforderung."],

      ["h2", "Worauf es ankommt"],
      ["p", "Der DSA erinnert daran, dass eine digitale Präsenz nie nur Ihnen gehört. Sie lebt auf Servern, Plattformen und Marktplätzen mit eigenen Regeln — und nun mit rechtlichen Pflichten Ihnen gegenüber. Wer diese Regeln versteht, kann Funktionen verantwortungsvoll gestalten und sein Unternehmen verteidigen, wenn eine Plattform falsch entscheidet."],
      ["note", "Sie planen einen Bewertungsbereich, eine Community oder einen Marktplatz? Wir gestalten ihn vom ersten Tag an mit dem richtigen Melde- und Moderationsablauf — **sprechen Sie mit uns** über Ihr Projekt."]
    ],
    sources: [
      ["Digital Services Act — Verordnung (EU) 2022/2065 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"],
      ["Europäische Kommission — Der Digital Services Act", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"],
      ["Europäische Kommission — Bußgeld von 550 Mio. Euro gegen AliExpress (Juli 2026)", "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"],
      ["Goran Kolouh auf Medium — The fine that missed the point (EN)", "https://gorankolouch.medium.com/the-fine-that-missed-the-point-why-platform-xs-anti-muslim-amplification-is-a-digital-services-b7007ec68ff0"]
    ]
  },

  {
    slug: "eu-ai-act-website",
    tag: "KI-VO",
    t: "Ihr Chatbot muss sagen, dass er ein Chatbot ist",
    d: "Die Transparenzpflichten der KI-Verordnung gelten seit dem 2. August 2026. Was der Digital Omnibus verschoben hat, was nicht — und was eine Unternehmenswebsite jetzt einbauen sollte.",
    md: "Die Transparenzpflichten der KI-Verordnung gelten seit 2. August 2026. Was der Digital Omnibus verschoben hat — und was Ihre Website jetzt braucht.",
    lead: "Die Transparenzpflichten der KI-Verordnung gelten seit dem 2. August 2026. Was der Digital Omnibus verschoben hat, was nicht — und was eine Unternehmenswebsite jetzt einbauen sollte.",
    date: "Oktober 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Viele Unternehmen haben diesen Sommer vor allem eines über die KI-Verordnung gehört: „Sie wurde verschoben.“ Das ist nur die halbe Wahrheit. Der Digital Omnibus, im Juni beschlossen und seit Ende Juli 2026 in Kraft, hat die Regeln für **Hochrisiko**-KI-Systeme verschoben. Nicht verschoben hat er die Regeln, die eine normale Unternehmenswebsite am wahrscheinlichsten betreffen."],
      ["p", "Hat Ihre Website einen Chatbot, veröffentlicht sie KI-generierte Bilder oder erstellen Sie Inhalte mit KI, gelten die einschlägigen Pflichten bereits."],
      ["quote", "Transparenz ist der Teil der KI-Verordnung, der fast alle erreicht — und er wurde nie verschoben."],

      ["h2", "Der Zeitplan, Stand heute"],
      ["ul", [
        "**1. August 2024** — die KI-Verordnung tritt in Kraft.",
        "**2. Februar 2025** — verbotene Praktiken (etwa manipulative oder ausbeuterische KI) und die Pflicht zur KI-Kompetenz gelten.",
        "**2. August 2025** — Regeln für KI-Modelle mit allgemeinem Verwendungszweck gelten.",
        "**2. August 2026** — Transparenzpflichten (Art. 50) und die meisten übrigen Regeln gelten.",
        "**2. Dezember 2026** — neues Verbot von KI-Systemen, die nicht einvernehmliche intime Bilder erzeugen; Ende der Übergangsfrist für maschinenlesbare Kennzeichnung bei bereits vermarkteten Systemen.",
        "**2. Dezember 2027** — Hochrisiko-Regeln für eigenständige Systeme (Anhang III), etwa KI bei Personalauswahl oder Kreditentscheidungen — durch den Omnibus verschoben.",
        "**2. August 2028** — Hochrisiko-Regeln für KI in regulierten Produkten (Anhang I)."
      ]],

      ["h2", "Was heute für eine Unternehmenswebsite gilt"],
      ["h3", "1. Chatbots müssen als KI erkennbar sein"],
      ["p", "KI-Systeme, die direkt mit Menschen interagieren, müssen so gestaltet sein, dass Menschen wissen, dass sie es mit einer Maschine zu tun haben — es sei denn, das ist aus dem Kontext offensichtlich (Art. 50 Abs. 1). Formal trifft diese Pflicht den Anbieter des Systems. In der Praxis sind es aber Ihre Besucher, die informiert werden müssen — der Hinweis gehört also in Ihr Design: ein klares Label zu Beginn des Gesprächs, kein versteckter Satz in der Datenschutzerklärung."],
      ["h3", "2. Deepfakes müssen offengelegt werden"],
      ["p", "Veröffentlichen Sie KI-generierte oder manipulierte Bilder, Audio- oder Videoinhalte, die echt wirken — ein realistisches „Foto“ einer Person, eines Ortes oder eines Ereignisses —, müssen Sie offenlegen, dass sie künstlich sind (Art. 50 Abs. 4). Für erkennbar künstlerische, satirische oder fiktionale Werke gilt eine abgeschwächte Form. Eine stilisierte Illustration ist nicht das Problem; ein realistisches gefälschtes „Kundenfoto“ schon."],
      ["h3", "3. KI-geschriebene Texte von öffentlichem Interesse"],
      ["p", "KI-generierte Texte, die veröffentlicht werden, um die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse zu informieren, müssen gekennzeichnet werden — es sei denn, sie wurden von Menschen geprüft und jemand trägt die redaktionelle Verantwortung. Für einen Unternehmensblog heißt das schlicht: Behalten Sie eine menschliche Redaktion und stehen Sie zu dem, was Sie veröffentlichen."],
      ["h3", "4. KI-Kompetenz im Team"],
      ["p", "Seit Februar 2025 müssen Organisationen, die KI-Systeme einsetzen, Maßnahmen ergreifen, um bei den Personen, die diese in ihrem Auftrag nutzen, ausreichende KI-Kompetenz aufzubauen (Art. 4). Der Omnibus hat das abgeschwächt — Sie müssen nicht mehr für jede Person ein bestimmtes Niveau garantieren —, die Pflicht, Maßnahmen zu ergreifen, bleibt aber. Eine kurze interne Richtlinie und eine Grundschulung zählen."],

      ["h2", "Wann KI zum Hochrisiko wird"],
      ["p", "Manche Anwendungen gelten als hochriskant, weil sie über Chancen von Menschen entscheiden können: Bewerbungen sichten, Beschäftigte bewerten, Kreditwürdigkeit prüfen, Zugang zu Bildung oder grundlegenden Leistungen. Nutzt Ihre Website oder Ihr HR-Prozess KI, um Bewerber zu ranken, sind Sie nah an dieser Kategorie. Die detaillierten Pflichten — Risikomanagement, Dokumentation, menschliche Aufsicht — gelten nun ab **Dezember 2027**. Das ist kein Grund zu warten; es ist Vorbereitungszeit."],
      ["p", "Hier hat das Gesetz auch noch Lücken. Wie ich an anderer Stelle argumentiert habe, müssen private Arbeitgeber, die KI bei der Personalauswahl einsetzen, vor dem Einsatz keine Grundrechte-Folgenabschätzung durchführen — eine Prüfung, die die Verordnung für Kredite und Versicherungen sehr wohl verlangt. Rechtliches Wissen heißt hier, nicht nur zu wissen, was vorgeschrieben ist, sondern auch, was klug ist."],

      ["h2", "Die KI-Verordnung ersetzt nicht die DSGVO"],
      ["p", "Ein Chatbot-Gespräch ist voller personenbezogener Daten. Die DSGVO gilt parallel: Sie brauchen eine Rechtsgrundlage, einen Auftragsverarbeitungsvertrag mit dem Chatbot-Anbieter, einen Hinweis in Ihrer Datenschutzerklärung und einen Plan, wie lange Gespräche gespeichert werden. Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung dürfen nicht ausschließlich automatisiert getroffen werden (Art. 22 DSGVO). Die meisten KI-Compliance-Probleme auf Websites sind am Ende Datenschutzprobleme."],

      ["h2", "Wie Bußgelder aussehen"],
      ["p", "Verstöße gegen die verbotenen Praktiken können bis zu 35 Mio. Euro oder 7 % des weltweiten Umsatzes kosten; die meisten anderen Verstöße, auch gegen die Transparenzpflichten, bis zu 15 Mio. Euro oder 3 %. Für KMU und Start-ups gilt jeweils der niedrigere Betrag. Wie bei der DSGVO ist das realistische Risiko für ein kleines Unternehmen weniger ein Höchstbußgeld als eine Beschwerde, eine Anordnung zur Korrektur — oder verlorenes Vertrauen."],

      ["h2", "Eine kurze Checkliste"],
      ["check", [
        "Listen Sie jedes KI-Tool auf Ihrer Website und in Ihren Abläufen auf.",
        "Kennzeichnen Sie Ihren Chatbot zu Beginn jedes Gesprächs klar als KI.",
        "Legen Sie realistische KI-generierte Bilder, Audio- und Videoinhalte offen.",
        "Lassen Sie eine verantwortliche Person veröffentlichte Inhalte redigieren.",
        "Aktualisieren Sie Datenschutzerklärung und Auftragsverarbeitungsverträge für KI-Tools.",
        "Schreiben Sie eine einseitige interne KI-Richtlinie für Ihr Team."
      ]],

      ["h2", "Worauf es ankommt"],
      ["p", "Mit KI lassen sich an einem Nachmittag beeindruckende Funktionen in eine Website einbauen. Das Recht stellt eine langsamere Frage: Wissen die Menschen auf der anderen Seite, womit sie es zu tun haben? Diese Ehrlichkeit von Anfang an ins Design einzubauen ist keine Last. Sie ist es, was die Funktion vertrauenswürdig genug macht, um sie zu nutzen."],
      ["note", "Sie möchten einen Chatbot oder KI-Funktionen auf Ihrer Website einsetzen? Wir gestalten sie mit den richtigen Hinweisen und sauberem Datenschutz — **nehmen Sie Kontakt auf**."]
    ],
    sources: [
      ["KI-Verordnung — Verordnung (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["Europäische Kommission — Zeitplan der KI-Verordnung", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
      ["Gibson Dunn — AI Act Omnibus: verschobene Hochrisiko-Fristen (EN)", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"],
      ["Goran Kolouh auf Medium — The algorithm Europe forgot to check (EN)", "https://gorankolouch.medium.com/the-algorithm-europe-forgot-to-check-1bc7f0ac18d2"]
    ]
  }
];
