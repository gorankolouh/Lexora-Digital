// Deutsch — gleiche Struktur wie en.mjs
export default {
  lang: "de",
  locale: "de_DE",
  slugs: {
    home: "", web: "webdesign/", compliance: "digitale-compliance/", check: "dsgvo-cookie-check/", language: "uebersetzungen/",
    creative: "kreativleistungen/", work: "arbeiten/", journal: "journal/", about: "ueber-uns/", contact: "kontakt/",
    privacy: "datenschutz/", cookies: "cookies/", imprint: "impressum/", accessibility: "barrierefreiheit/", shop: "vorlagen/"
  },
  ui: {
    skip: "Zum Inhalt springen", home: "Startseite", mainNav: "Hauptnavigation", contents: "Inhalt",
    menu: "Menü", language: "Sprache", soon: "bald", services: "Leistungen", startProject: "Projekt starten"
  },
  nav: {
    work: "Arbeiten", journal: "Journal", about: "Über uns", contact: "Kontakt", shop: "Vorlagen",
    web: ["Webdesign & Entwicklung", "Websites, Landingpages, Launch", "</>"],
    compliance: ["Digitale Compliance", "DSGVO, Cookies, EU-Digitalrecht", "§"],
    check: ["DSGVO- & Cookie-Check", "Kostenloser Check · Behebung ab 99 €", "✓"],
    language: ["Übersetzungen", "Fünf Sprachen, jede Richtung", "⇄"],
    creative: ["Kreativleistungen", "Identität, Grafik, Medienbearbeitung", "Aa"]
  },
  meta: {
    home: { title: "Lexora Digital — Studio für Web, Recht, Sprache & Design", desc: "Unabhängiges Digitalstudio für Websites, DSGVO- und Cookie-Compliance, Übersetzungen und Design — für Unternehmen in ganz Europa, in fünf Sprachen." },
    web: { title: "Webdesign & Webentwicklung — Lexora Digital", desc: "Individuelle Websites und Landingpages für kleine und mittlere Unternehmen. Einstiegs-Website ab 99 €, responsiv, datenschutzfreundlich und auf Ihrer Domain live." },
    compliance: { title: "Digitale Compliance: DSGVO, Cookies & EU-Recht — Lexora Digital", desc: "Praktische Unterstützung bei DSGVO, Cookie-Einwilligung, Datenschutzerklärung und EU-Digitalrecht für Unternehmenswebsites — Information und Umsetzung, keine Rechtsberatung." },
    check: { title: "Kostenloser DSGVO- & Cookie-Check — Behebung ab 99 € | Lexora Digital", desc: "GDPR, Cookies & Co.: kostenloser Check von Einwilligung, Tracking und Rechtstexten Ihrer Website. Finden wir Mängel, beheben wir sie ab 99 €." },
    language: { title: "Übersetzungen Englisch, Deutsch, Niederländisch, Spanisch & Kroatisch — Lexora Digital", desc: "Übersetzung von Websites, Geschäfts- und Rechtstexten zwischen Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch — präzise und natürlich formuliert." },
    creative: { title: "Kreativleistungen: Identität, Grafik & Medienbearbeitung — Lexora Digital", desc: "Visuelle Identität, Markenmaterialien, Grafikdesign sowie ausgewählte Foto-, Video-, Audio- und Sprachbearbeitung für Unternehmen." },
    work: { title: "Arbeiten — Konzeptprojekte | Lexora Digital", desc: "Website-Konzepte für Beauty, Handwerk und Kfz-Betriebe — vollständige, responsive Designs, die zeigen, wie Lexora Digital arbeitet." },
    journal: { title: "Journal — Leitfäden zu DSGVO, DSA und AI Act | Lexora Digital", desc: "Verständliche Leitfäden zu den europäischen Regeln für Unternehmenswebsites: DSGVO und Cookies, Digital Services Act und EU AI Act." },
    about: { title: "Über uns — Lexora Digital", desc: "Ein unabhängiges Digitalstudio, das Webdesign, praktisches Wissen über europäisches Digitalrecht, Übersetzung und Gestaltung verbindet." },
    contact: { title: "Kontakt — Lexora Digital", desc: "Erzählen Sie uns von Ihrem Projekt: Website, Design, DSGVO- und Cookie-Compliance oder Übersetzung. Wir antworten in Ihrer Sprache." },
    privacy: { title: "Datenschutzerklärung — Lexora Digital", desc: "Wie Lexora Digital personenbezogene Daten auf dieser Website verarbeitet." },
    cookies: { title: "Cookie-Richtlinie — Lexora Digital", desc: "Diese Website verwendet keine Tracking- oder Werbe-Cookies. Hier steht genau, was gespeichert wird und warum." },
    imprint: { title: "Impressum — Lexora Digital", desc: "Anbieterkennzeichnung für lexoradigital.com." },
    shop: {
      title: "Notion-Vorlagen für EU-Compliance: DSGVO, AI Act & mehr — Lexora Digital",
      desc: "Einsatzbereite Notion-Kits für DSGVO, EU AI Act, KI-Richtlinien am Arbeitsplatz, Entgelttransparenz und Lieferantenprüfung — auf Deutsch, Englisch, Niederländisch, Spanisch und Kroatisch."
    },
    accessibility: { title: "Erklärung zur Barrierefreiheit — Lexora Digital", desc: "Unsere Ziele zur Barrierefreiheit dieser Website, bekannte Einschränkungen und wie Sie uns Rückmeldung geben." }
  },

  home: {
    hero: {
      eyebrow: "Unabhängiges Digitalstudio · Europa & darüber hinaus",
      h1: ["Digitale Präsenz.", "Gestaltet mit *Bedacht.*"],
      lead: "Wir entwickeln anspruchsvolle Websites, machen sie DSGVO- und cookie-konform, übersetzen sie in fünf Sprachen und setzen kreative Ideen um — mit klarer Kommunikation über Grenzen hinweg.",
      cta1: "Unsere Arbeiten ansehen", cta2: "Projekt besprechen",
      langs: "Wir arbeiten auf"
    },
    intro: {
      statement: "Gute digitale Arbeit sieht nicht nur gut aus. ~Sie schafft Vertrauen, funktioniert für alle und spricht die Sprache Ihrer Kunden.~",
      p: [
        "Eine Website ist oft das erste Gespräch zwischen Kunden und Ihrem Unternehmen. Sie sollte durchdacht wirken, schnell laden, auf jedem Bildschirm funktionieren, respektvoll mit Daten umgehen — und sich in der Sprache Ihrer Kunden natürlich lesen.",
        "Deshalb verbinden wir Design, Entwicklung, digitale Compliance und Übersetzung in einem Prozess. Das Ergebnis ist eine Website, die Ihr Unternehmen glaubwürdiger, zugänglicher und bereit für Kunden in ganz Europa macht."
      ],
      facts: [
        ["Glaubwürdig", "Ein klarer, selbstbewusster Auftritt, der die Qualität Ihrer Arbeit zeigt."],
        ["Regelkonform", "Datenschutz, Cookies und EU-Digitalrecht von Anfang an mitgedacht."],
        ["Mehrsprachig", "Natürliche, präzise Inhalte auf Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch."]
      ]
    },
    disc: {
      label: "Was wir tun",
      h2: "Vier Disziplinen. Ein Studio.",
      lead: "Die meisten Unternehmen brauchen mehr als eine Website. Wir verbinden Fähigkeiten, die sonst an vier verschiedenen Stellen sitzen — die beste Arbeit entsteht dort, wo sie sich überschneiden.",
      core: "LEXORA",
      caption: "Wo Web, Recht, Sprache und Design sich überschneiden: Websites, die richtig aussehen, richtig funktionieren, sorgsam mit Daten umgehen und jeden Kunden ansprechen.",
      cards: [
        { key: "web", route: "web", g: "</>", word: "Web", title: "Websites, denen man leichter vertraut.",
          p: "Individuelle Websites und Landingpages, responsives Design, Verbesserungen bestehender Seiten, Veröffentlichung und eine klare Übergabe. Einstiegs-Websites ab 99 €.",
          tags: ["Individuelle Websites", "Landingpages", "Responsives Design", "Optimierung", "Veröffentlichung"], link: "Webdesign & Entwicklung" },
        { key: "law", route: "compliance", g: "§", word: "Recht", title: "Websites, die ihre Besucher respektieren.",
          p: "Beratung und praktische Unterstützung zu DSGVO, Cookies und Datenschutzerklärungen — inklusive kostenlosem Website-Check und Behebung ab 99 €.",
          tags: ["DSGVO & Cookies", "Einwilligung einrichten", "Rechtstexte", "EU-Digitalrecht"],
          note: "Allgemeine Informationen und praktische Umsetzung auf Websites. Wir sind keine Anwaltskanzlei und erbringen keine Rechtsberatung oder rechtliche Vertretung.", link: "Digitale Compliance" },
        { key: "language", route: "language", g: "⇄", word: "Sprache", title: "Inhalte, die klingen, als wären sie in Ihrer Sprache geschrieben.",
          p: "Übersetzung von Websites, Geschäfts- und Rechtstexten zwischen Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch.",
          tags: ["Website-Lokalisierung", "Geschäftsdokumente", "Rechtstexte", "Korrektorat"], link: "Übersetzungen" },
        { key: "design", route: "creative", g: "Aa", word: "Design", title: "Gestaltung mit klarer Haltung.",
          p: "Visuelle Identität, Markenmaterialien und Grafikdesign — sowie ausgewählte Foto-, Video-, Audio- und Sprachbearbeitung.",
          tags: ["Visuelle Identität", "Markenmaterialien", "Grafikdesign", "Foto & Video", "Audio & Stimme"], link: "Kreativleistungen" }
      ]
    },
    focus: { label: "Im Fokus", h2: "Drei Leistungen, *ein Anspruch.*", lead: "Websites, DSGVO- und Cookie-Compliance und Übersetzungen — jede mit derselben Sorgfalt im Detail." },
    work: {
      label: "Ausgewählte Arbeiten",
      h2: "Konzeptprojekte, gebaut nach dem Standard echter Projekte.",
      p: "Jedes Konzept ist eine vollständige, responsive Website für eine bestimmte Art von Unternehmen. Sie zeigen unsere Arbeitsweise — es sind keine beauftragten Kundenprojekte.",
      all: "Alle Arbeiten", badge: "Konzept", count: "3 Konzepte · weitere in Vorbereitung", cta: "Fallstudie ansehen",
      items: [
        { slug: "studio-rosalie", img: "rosalie", cat: "Beauty & Kosmetik", title: "Studio Rosalie",
          p: "Eine ruhige, hochwertige One-Page-Website für ein Kosmetikstudio: warme Rosé-Töne, editoriale Serifenschrift und ein Aufbau, der zur Terminbuchung führt.",
          svc: ["Webdesign", "Visuelle Richtung", "Responsive Umsetzung"], alt: "Website-Konzept für das Kosmetikstudio Studio Rosalie auf Desktop und Smartphone" },
        { slug: "mustermann-sanitaer", img: "mustermann", cat: "Handwerk & Haustechnik", title: "Mustermann Sanitär",
          p: "Eine klare, vertrauenswürdige Website für einen Sanitär- und Heizungsbetrieb — mit einem Ziel: dass das Telefon klingelt.",
          svc: ["Webdesign", "Responsive Umsetzung", "Conversion-Struktur"], alt: "Website-Konzept für einen Sanitär- und Heizungsbetrieb auf Desktop und Smartphone" },
        { slug: "kfz-werkstatt", img: "kfz", cat: "Kfz & Reparatur", title: "Kfz-Werkstatt",
          p: "Ein kräftiger, technischer Auftritt für eine freie Kfz-Werkstatt — mit Leistungen, Vertrauenspunkten und Terminanfrage gleich zu Beginn.",
          svc: ["Webdesign", "Art Direction", "Responsive Umsetzung"], alt: "Website-Konzept für eine Kfz-Werkstatt auf Desktop und Smartphone" }
      ]
    },
    trust: {
      label: "Digitale Compliance",
      h2: "Design und Compliance gehören in dasselbe Gespräch.",
      lead: "Cookie-Banner, Kontaktformulare und Datenschutzerklärungen sind Teil des Nutzererlebnisses. Wir helfen Ihnen zu verstehen, welche europäischen Regeln für Ihre Website gelten können — und setzen sie von Anfang an richtig um, statt sie am Ende anzuhängen.",
      cta: "Digitale Compliance entdecken",
      disclaimer: "Allgemeine Informationen, keine Rechtsberatung. Ob eine Regel gilt, hängt von Ihrem Unternehmen, Ihrer Website und Ihrem Land ab. Für eine Beratung zu Ihrem Fall wenden Sie sich an eine Rechtsanwältin oder einen Rechtsanwalt.",
      cols: { req: "Gilt für die meisten Unternehmenswebsites", ctx: "Hängt von Ihrem Unternehmen ab", gp: "Gute Praxis" },
      reviewed: "Zuletzt geprüft im Oktober 2026 · Quellen: EUR-Lex",
      topics: [
        { t: "Personenbezogene Daten & DSGVO", s: "req", ref: "Verordnung (EU) 2016/679", p: "Gilt, sobald eine Website personenbezogene Daten verarbeitet — Kontaktformulare, Newsletter, Analyse, selbst Server-Logs." },
        { t: "Cookie-Einwilligung & Tracking", s: "req", ref: "Richtlinie 2002/58/EG, Art. 5 Abs. 3", p: "Nicht notwendige Cookies und ähnliches Tracking erfordern in der Regel eine vorherige Einwilligung. Technisch notwendige Speicherung nicht." },
        { t: "Datenschutzerklärung", s: "req", ref: "DSGVO Art. 13–14", p: "Besucher müssen erfahren, wer ihre Daten verarbeitet, warum, auf welcher Rechtsgrundlage und welche Rechte sie haben." },
        { t: "Formulare & Datenerhebung", s: "req", ref: "DSGVO Art. 5, 25, 32", p: "Nur erheben, was nötig ist, Daten bei der Übertragung schützen und Speicherdauer festlegen." },
        { t: "Anbieterkennzeichnung", s: "ctx", ref: "Richtlinie 2000/31/EG, Art. 5 · DE: § 5 DDG", p: "Geschäftliche Websites müssen den Anbieter nennen. Deutschland und Österreich haben besonders detaillierte Impressumspflichten." },
        { t: "Digitale Barrierefreiheit", s: "ctx", ref: "Richtlinie (EU) 2019/882", p: "Der European Accessibility Act erfasst seit Juni 2025 bestimmte Produkte und Dienstleistungen, etwa den Online-Handel. Kleinstunternehmen, die Dienstleistungen erbringen, sind ausgenommen." },
        { t: "Digital Services Act", s: "ctx", ref: "Verordnung (EU) 2022/2065", p: "Relevant, wenn Sie Inhalte von Nutzern speichern oder eine Plattform bzw. einen Marktplatz betreiben. Eine typische Unternehmenswebsite ist meist nicht betroffen." },
        { t: "EU AI Act", s: "ctx", ref: "Verordnung (EU) 2024/1689, geändert durch (EU) 2026/1744", p: "Relevant, wenn Sie KI-Systeme entwickeln oder einsetzen, etwa Chatbots oder KI-generierte Inhalte. Die Pflichten gelten stufenweise; mehrere Fristen wurden 2026 verschoben." },
        { t: "Barrierearmes Design", s: "gp", ref: "WCAG 2.2, Stufe AA", p: "Gut lesbarer Kontrast, Tastaturbedienung und klare Struktur helfen allen Besuchern — auch dort, wo es nicht vorgeschrieben ist." },
        { t: "Datenschutz als Standard", s: "gp", ref: "Lexora-Standard", p: "Keine unnötigen Tracker, selbst gehostete Schriften und ehrliche Einwilligung mit gleichwertigem Akzeptieren und Ablehnen." }
      ]
    },
    checkBand: {
      label: "GDPR, Cookies & Co.",
      h2: "Ist Ihre Website DSGVO- und cookie-konform? *Finden Sie es kostenlos heraus.*",
      lead: "Wir prüfen Einwilligung, Tracking, Datenschutzerklärung und Impressum. Finden wir Mängel, beheben wir sie ab 99 € — den Preis kennen Sie vorher.",
      priceFree: "0 €", priceFix: "ab 99 €", free: "Der Check", fix: "Die Behebung — einmalig", cta: "Website prüfen lassen"
    },
    process: {
      label: "Unsere Arbeitsweise",
      h2: "Ein klarer Ablauf, ohne Überraschungen.",
      lead: "Jedes Projekt folgt denselben vier Schritten — mit festgelegtem Umfang und vereinbartem Preis, bevor die Arbeit beginnt.",
      steps: [
        ["Verstehen", "Wir lernen Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele kennen — und legen gemeinsam fest, was das Projekt umfasst."],
        ["Gestalten", "Wir entwickeln eine durchdachte visuelle Richtung und Seitenstruktur und verfeinern sie mit Ihrem Feedback."],
        ["Umsetzen", "Wir entwickeln die Website, testen sie auf echten Geräten und Browsern und beheben, was zu beheben ist."],
        ["Veröffentlichen", "Wir stellen die Website online und übergeben verständliche Informationen dazu, wie sie funktioniert und was als Nächstes kommt."]
      ]
    },
    langs: {
      label: "Fünf Sprachen",
      h2: "Ihr Projekt, in Ihrer Sprache.",
      lead: "Wir arbeiten mit Kunden in fünf Sprachen — vom ersten Gespräch über das Angebot und die Website-Inhalte bis zur Übergabe.",
      note: "Jede Richtung zwischen den fünf Sprachen",
      link: "Übersetzungen",
      list: [["EN", "Let's talk.", "English"], ["DE", "Lassen Sie uns sprechen.", "Deutsch"], ["NL", "Laten we praten.", "Nederlands"], ["ES", "Hablemos.", "Español"], ["HR", "Razgovarajmo.", "Hrvatski"]]
    },
    journal: {
      label: "Das Journal",
      h2: "Verständliche Leitfäden zu Europas Digitalrecht.",
      lead: "Geschrieben für Unternehmer, nicht für Juristen: was die Regeln sagen, für wen sie gelten und was als Nächstes zu tun ist.",
      soon: "In Vorbereitung", kind: "Leitfaden",
      posts: [
        { tag: "DSGVO", t: "DSGVO und Cookies: Was eine Website für kleine Unternehmen wirklich braucht", d: "Einwilligung, Cookies, Datenschutzerklärung und Formulare — was Pflicht ist, was optional ist und was die meisten Websites falsch machen." },
        { tag: "DSA", t: "Der Digital Services Act: Was Unternehmen verstehen sollten", d: "Für wen der DSA gilt, welche Pflichten für kleinere Unternehmen zählen und wann eine normale Unternehmenswebsite betroffen ist." },
        { tag: "AI Act", t: "Der EU AI Act: Regeln, Anwendungsbereich und Zeitplan verstehen", d: "Risikoklassen, Transparenzpflichten und der gestaffelte Zeitplan — einschließlich der 2026 verschobenen Fristen." }
      ]
    },
    about: {
      label: "Über Lexora",
      h2: "Ein unabhängiges Studio, grenzüberschreitend tätig.",
      p: [
        "Lexora Digital ist ein unabhängiges Digitalstudio für kleine und mittlere Unternehmen. Wir verbinden Webdesign und -entwicklung, praktisches Wissen über europäisches Digitalrecht, Übersetzung und kreative Produktion.",
        "Wir halten die Dinge klar: ein festgelegter Umfang, ehrliche Beratung darüber, was Sie brauchen — und was nicht — und Erklärungen in einfacher Sprache, in der Sprache, in der Sie arbeiten."
      ],
      link: "Mehr über Lexora",
      values: [
        ["Klare Kommunikation", "Kein Fachjargon, keine versteckten Schritte. Sie wissen immer, wo Ihr Projekt steht."],
        ["Durchdachtes Design", "Jedes Element hat einen Grund — nichts wird nur für den Effekt hinzugefügt."],
        ["Ehrlicher Umfang", "Transparente Pakete und Preise; Extras werden genannt, bevor sie etwas kosten."],
        ["Praktische Compliance", "Datenschutz und Barrierefreiheit von Anfang an — ohne Versprechen, die niemand halten kann."]
      ]
    },
    final: {
      label: "Projekt starten",
      h2: "Sie haben eine gute Idee? *Bauen wir sie richtig.*",
      lead: "Erzählen Sie uns, was Sie erreichen möchten. Wir besprechen Ihren Bedarf und den sinnvollsten nächsten Schritt.",
      cta1: "Projekt starten", cta2: "Lexora kontaktieren"
    }
  },

  pages: {
    web: {
      hero: { label: "Webdesign & Entwicklung", h1: "Websites, denen man *leichter vertraut.*", lead: "Von der fokussierten One-Page-Website bis zur individuellen Website mit mehreren Seiten — sorgfältig gestaltet, für jeden Bildschirm gebaut und mit klarer Übergabe veröffentlicht.", cta1: "Website-Projekt starten", cta2: "Konzeptprojekte ansehen" },
      what: {
        label: "Was wir bauen", h2: "Alles, was eine Unternehmenswebsite braucht. Nichts darüber hinaus.", lead: "Wir gestalten und entwickeln Websites, die schnell, gut lesbar, datenschutzfreundlich und leicht zu pflegen sind.",
        items: [
          { g: "01", t: "One-Page-Websites", p: "Ein vollständiger, fokussierter Auftritt auf einer Seite — ideal für Handwerk, Studios und lokale Betriebe." },
          { g: "02", t: "Individuelle Websites", p: "Mehrseitige Websites mit einer Struktur, die sich an Ihren Leistungen, Kunden und Zielen orientiert." },
          { g: "03", t: "Landingpages", p: "Seiten mit einem klaren Zweck — für eine Kampagne, ein Angebot oder eine neue Leistung." },
          { g: "04", t: "Relaunch & Optimierung", p: "Klarere Struktur, besseres mobiles Erlebnis und schnellere Seiten für eine bestehende Website." },
          { g: "05", t: "Mehrsprachige Websites", p: "Websites in bis zu fünf Sprachen, von uns übersetzt — nicht von einem Übersetzungs-Plugin." },
          { g: "06", t: "Datenschutzfreundliche Einrichtung", p: "Keine unnötigen Tracker, eine korrekte Einwilligung, wo nötig, und vollständige Rechtstexte." }
        ]
      },
      pricing: {
        label: "Pakete", h2: "Transparent von Anfang an.", lead: "Ein klar definiertes Einstiegspaket für kleine Unternehmen und individuelle Angebote für alles Größere.",
        incl: "Enthalten", extra: "Nicht enthalten / extra",
        starter: { name: "Einstiegs-Website", price: "ab 99 €", unit: "einmalig", svc: "web", cta: "Einstiegs-Website bestellen",
          p: "Eine professionelle One-Page-Website für kleine Unternehmen, in der Regel innerhalb von 48 Stunden nach Erhalt aller Inhalte fertig.",
          incl: ["Eine responsive Seite mit bis zu 6 Abschnitten", "Ihre Texte, Fotos und Ihr Logo, sorgfältig gestaltet", "Kontaktbereich mit Telefon, E-Mail, Adresse und Kartenlink", "Datenschutzfreundliche Einrichtung und Links zu Ihren Rechtstexten", "Veröffentlichung auf Ihrer bestehenden Domain"],
          extra: ["Kosten für Domain und Hosting", "Erstellung oder Übersetzung Ihrer Texte", "Weitere Seiten, Buchungs- oder Shopfunktionen", "Logo- oder Fotoproduktion", "Laufende Änderungen nach dem Launch"] },
        custom: { name: "Individuelle Website", price: "Auf Anfrage", unit: "Angebot pro Projekt", svc: "web", cta: "Angebot anfragen",
          p: "Für Unternehmen, die mehrere Seiten, mehr Sprachen oder besondere Funktionen brauchen. Nach einem kurzen Gespräch erhalten Sie ein Festpreisangebot.",
          incl: ["Erstgespräch und Seitenstruktur", "Individuelles visuelles Design", "Mehrseitige, mehrsprachige Umsetzung", "Tests auf echten Geräten und Browsern", "Veröffentlichung, Übergabe und Dokumentation"] },
        note: "Preise zzgl. MwSt., sofern anwendbar. Alles außerhalb eines Pakets wird vor Arbeitsbeginn angeboten — Sie entscheiden, ob Sie es möchten."
      },
      after: {
        label: "Nach dem Launch", h2: "Eine saubere Übergabe und klare Grenzen.", lead: "Sie sollten genau wissen, was Sie bekommen — und was passiert, nachdem die Website online ist.",
        items: [
          { g: "→", t: "Veröffentlichung", p: "Wir stellen die Website auf Ihrer Domain online und prüfen, ob im Livebetrieb alles funktioniert." },
          { g: "→", t: "Übergabe", p: "Sie erhalten die Zugangsdaten und eine kurze Anleitung, wie Ihre Website aufgebaut ist." },
          { g: "→", t: "Wartung", p: "Updates und Änderungen nach dem Launch sind nicht im Paket enthalten. Wir bieten sie auf Anfrage zu einem vorab genannten Preis an." }
        ]
      },
      work: { label: "Konzeptprojekte", h2: "So sehen unsere Websites in der Praxis aus." },
      band: { h2: "Bereit für eine Website, die *richtig funktioniert?*", lead: "Erzählen Sie uns von Ihrem Unternehmen und davon, was die Website leisten soll." }
    },

    compliance: {
      hero: { label: "Digitale Compliance", h1: "DSGVO, Cookies und EU-Digitalrecht — *erklärt und umgesetzt.*", lead: "Wir helfen Unternehmen zu verstehen, welche europäischen Regeln ihre Website betreffen, und setzen sie in die Praxis um: Einwilligung, Tracking, Datenschutzerklärung, Formulare und Impressum.", cta1: "Kostenloser Website-Check", cta2: "Beratung anfragen" },
      help: {
        label: "Wie wir helfen", h2: "Praktische Unterstützung — von der ersten Frage bis zur fertigen Website.", lead: "Allgemeine Informationen und konkrete Umsetzung — klar getrennt von formaler Rechtsberatung.",
        items: [
          { g: "01", t: "Beratung", p: "Eine klare Erklärung, welche Regeln für Ihre Website voraussichtlich wichtig sind — verständlich und in Ihrer Sprache." },
          { g: "02", t: "Cookie-Einwilligung einrichten", p: "Ein Consent-Banner mit gleichwertigem Akzeptieren und Ablehnen und echter Kontrolle je Kategorie." },
          { g: "03", t: "Tracking-Prüfung", p: "Wir finden Analyse-Tools, Pixel, eingebettete Medien und externe Ressourcen, die vor der Einwilligung laden." },
          { g: "04", t: "Datenschutzfreundliche Formulare", p: "Kontakt- und Buchungsformulare, die nur das Nötige erheben — mit den richtigen Hinweisen." },
          { g: "05", t: "Datenschutzerklärung & Impressum", p: "Vollständig und strukturiert, auf Grundlage der Angaben, die Sie uns machen." },
          { g: "06", t: "Barrierefreiheits-Check", p: "Eine praktische Prüfung nach WCAG 2.2 und — wo anwendbar — dem European Accessibility Act." }
        ]
      },
      overview: { h2: "Die Regeln auf einen Blick.", lead: "Welche europäischen Anforderungen für eine Unternehmenswebsite in der Regel gelten — und welche davon abhängen, was Sie tun." },
      national: {
        label: "Nationale Regeln", h2: "EU-Recht, national umgesetzt.", lead: "Die DSGVO gilt EU-weit, doch Cookie-Einwilligung und Anbieterkennzeichnung regeln nationale Gesetze. Mit diesen arbeiten wir am häufigsten.",
        head: ["Land", "Cookies & Tracking", "Anbieterkennzeichnung"],
        rows: [
          ["Deutschland", "§ 25 TDDDG + DSGVO", "§ 5 DDG (Impressum)"],
          ["Österreich", "§ 165 TKG 2021 + DSGVO", "§ 5 ECG, § 25 MedienG"],
          ["Niederlande", "Art. 11.7a Telecommunicatiewet + AVG (DSGVO)", "Art. 3:15d BW"],
          ["Spanien", "Art. 22.2 LSSI-CE + RGPD / LOPDGDD", "Art. 10 LSSI-CE"],
          ["Kroatien", "Zakon o elektroničkim komunikacijama + DSGVO", "Zakon o elektroničkoj trgovini"],
          ["Vereinigtes Königreich", "PECR, reg. 6 + UK GDPR", "Electronic Commerce Regulations 2002, reg. 6"]
        ],
        note: "Übersicht zur Orientierung. Regeln ändern sich, und nationale Behörden legen sie unterschiedlich aus; bei der Prüfung Ihrer Website berücksichtigen wir die aktuellen Regeln Ihres Landes."
      },
      bounds: {
        label: "Grenzen", h2: "Was wir tun — und was nicht.",
        doT: "Was wir tun", do: ["Die voraussichtlich geltenden Regeln verständlich erklären", "Ihre Website auf typische Compliance-Mängel prüfen", "Einwilligung, Tracking und Formulare auf Ihrer Website korrigieren", "Datenschutzerklärung und Impressum aus Ihren Angaben strukturieren", "Die Website nach den Änderungen erneut prüfen"],
        dontT: "Was wir nicht tun", dont: ["Rechtsberatung oder rechtliche Vertretung", "Garantieren, dass eine Website „100 % konform“ ist", "Als Ihr Datenschutzbeauftragter tätig werden", "Verträge entwerfen oder Sie gegenüber Behörden vertreten"]
      },
      band: { h2: "Beginnen Sie mit einem *kostenlosen Check* Ihrer Website.", lead: "Wir prüfen Einwilligung, Tracking, Datenschutzerklärung und Impressum. Finden wir Mängel, beheben wir sie ab 99 €.", cta: "Website prüfen lassen" }
    },

    check: {
      hero: { label: "GDPR, Cookies & Co.", h1: "Kostenloser DSGVO- & Cookie-Check. *Behebung ab 99 €.*", lead: "Senden Sie uns Ihre Website. Wir prüfen Einwilligung, Tracking, Datenschutzerklärung und Impressum nach EU- und nationalem Recht. Ist alles in Ordnung, kostet es nichts. Wenn nicht, machen wir Ihre Website ab 99 € regelkonform — den Preis kennen Sie vorher.",
        points: ["Kein Konto, keine Karte", "Kostenlos, wenn alles passt", "Preis steht vor Beginn fest", "Kostenloser Nach-Check"] },
      areas: {
        label: "Was wir prüfen", h2: "Die vier Bereiche, die am häufigsten zu Beschwerden und Bußgeldern führen.", lead: "Wir prüfen, was Ihre Besucher tatsächlich sehen und was Ihre Website tatsächlich lädt.",
        items: [
          { g: "01", t: "DSGVO-Grundlagen", p: "Wie personenbezogene Daten erhoben und dargestellt werden — Formulare, Hinweise und die sichtbare Datenschutz-Einrichtung." },
          { g: "02", t: "Cookie-Einwilligung", p: "Ob die Einwilligung klar ist, ob Ablehnen so einfach ist wie Akzeptieren und ob Tracking auf die Entscheidung wartet." },
          { g: "03", t: "Datenschutz & Impressum", p: "Ihre Datenschutzerklärung, Ihr Impressum und die Formulare, die darauf verweisen." },
          { g: "04", t: "Tracking durch Dritte", p: "Analyse-Tools, Werbepixel, eingebettete Videos, Karten, Schriften und andere externe Ressourcen." }
        ]
      },
      how: {
        label: "So funktioniert es", h2: "Vier Schritte vom Check zur Konformität.", lead: "Sie behalten die Kontrolle: An Ihrer Website wird nichts geändert, bevor Sie das Angebot annehmen.",
        steps: [
          ["Website senden", "Geben Sie Ihre Website-Adresse, Ihre E-Mail und Ihr Land ein — mehr brauchen wir nicht."],
          ["Wir prüfen", "Wir prüfen Einwilligung, Tracking, Datenschutzerklärung und Impressum nach EU- und nationalem Recht."],
          ["Sie erhalten das Ergebnis", "Kostenlos. Ist alles in Ordnung, war's das. Wenn nicht, erhalten Sie eine kurze, verständliche Liste der Mängel."],
          ["Wir beheben es ab 99 €", "Nach Ihrer Freigabe nehmen wir die Korrekturen an Ihrer Website vor und prüfen sie anschließend kostenlos erneut."]
        ]
      },
      example: {
        label: "Beispielergebnis", h2: "Ein klares Ergebnis, *kein juristischer Aufsatz.*", lead: "Sie sehen, was nicht stimmt, warum es wichtig ist und wie es weitergeht — verständlich und in Ihrer Sprache.",
        site: "ihrunternehmen.de", tag: "Illustration", status: { bad: "Mangel", warn: "Unvollständig", ok: "OK" },
        items: [
          { s: "bad", t: "Analyse lädt vor der Einwilligung", p: "Das Tracking startet beim Öffnen der Seite, bevor der Besucher eine Wahl getroffen hat." },
          { s: "warn", t: "Datenschutzerklärung unvollständig", p: "Speicherdauer und Dienstleister sind nicht genannt." },
          { s: "ok", t: "Impressum vorhanden", p: "Von jeder Seite verlinkt und mit den erforderlichen Angaben." }
        ],
        note: "Nur ein Beispiel zur Veranschaulichung — keine echte Website."
      },
      pricing: {
        label: "Preise", h2: "Zwei Preise. Keine Überraschungen.", lead: "Der Check ist immer kostenlos. Sie zahlen nur, wenn wir Mängel finden und Sie diese beheben lassen möchten.",
        plans: [
          { name: "Der Check", price: "0 €", unit: "kostenlos", cta: "Kostenlosen Check anfragen", p: "Eine Prüfung Ihrer Website durch uns.", incl: ["Einwilligung, Tracking, Datenschutzerklärung und Impressum", "Geprüft nach EU- und Ihrem nationalen Recht", "Kurze, verständliche Liste möglicher Mängel", "Unverbindlich"] },
          { name: "Die Behebung", price: "ab 99 €", unit: "einmalig", cta: "Mit dem kostenlosen Check starten", p: "Wir machen Ihre Website DSGVO- und cookie-konform nach EU- und nationalem Recht.",
            incl: ["Consent-Banner korrekt eingerichtet — gleichwertiges Akzeptieren und Ablehnen, echte Wahl", "Tracker und Einbettungen bis zur Einwilligung blockiert, soweit Ihre Plattform es zulässt", "Datenschutzerklärung und Impressum aus Ihren Angaben vervollständigt", "Hinweise in Formularen und Links zu den Rechtstexten auf jeder Seite", "Kostenloser Nach-Check und kurze Zusammenfassung der Änderungen"] }
        ],
        scope: "Die Behebung ab 99 € gilt für Standard-Websites auf gängigen Plattformen wie WordPress, Wix, Squarespace, Shopify, Webflow, Jimdo oder reinem HTML und setzt Zugang zu Ihrer Website oder zu Ihrem Entwickler voraus. Braucht Ihre Website mehr — etwa individuelle Plugins, Shop-Checkouts oder einen Hosting-Wechsel —, sagen wir Ihnen das vorher, mit einem separaten Preis. Preise zzgl. MwSt., sofern anwendbar."
      },
      countries: { label: "Länder", h2: "Geprüft nach den Regeln, die für Sie gelten.", lead: "Nennen Sie uns den Sitz Ihres Unternehmens. Wir prüfen Ihre Website nach EU-Recht und dem nationalen Recht dieses Landes." },
      faq: {
        label: "Fragen", h2: "Häufige Fragen.",
        items: [
          ["Ist der Check wirklich kostenlos?", "Ja. Der Check kostet nichts. Finden wir keine Mängel, zahlen Sie überhaupt nichts."],
          ["Was umfasst die Behebung ab 99 €?", "Wir richten die Einwilligung korrekt ein, blockieren Tracker bis zur Einwilligung, soweit Ihre Plattform es zulässt, vervollständigen Datenschutzerklärung und Impressum aus Ihren Angaben, ergänzen Hinweise in Formularen und Links zu den Rechtstexten und prüfen die Website anschließend erneut."],
          ["Ändern Sie meine Website ohne Rückfrage?", "Nein. Wir ändern erst etwas, nachdem Sie das Angebot angenommen haben — und nur das, was darin beschrieben ist."],
          ["Was brauchen Sie von mir?", "Zugang zu Ihrer Website (zum Beispiel einen vorübergehenden Admin-Zugang) oder den Kontakt zu Ihrem Entwickler — sowie die Unternehmensangaben für Datenschutzerklärung und Impressum."],
          ["Ist das eine Rechtsberatung?", "Nein. Check und Behebung sind praktische, technische Arbeiten auf Grundlage des EU- und nationalen Rechts. Sie sind keine Rechtsberatung und garantieren keine Konformität. Für Rechtsberatung wenden Sie sich an eine Rechtsanwältin oder einen Rechtsanwalt."],
          ["Welche Länder decken Sie ab?", "Websites, die sich an Kunden in der EU und im Vereinigten Königreich richten — mit besonderer Erfahrung in Deutschland, Österreich, den Niederlanden, Spanien und Kroatien."],
          ["Wie bezahle ich?", "Sie erhalten vor Arbeitsbeginn ein Angebot mit Preis. Sie zahlen erst, nachdem Sie es angenommen haben."]
        ]
      },
      band: { h2: "Finden Sie heraus, wo Ihre Website steht — *kostenlos.*", lead: "Das Absenden dauert eine Minute. Den Rest erledigen wir.", cta: "Website prüfen lassen" },
      disclaimer: "GDPR, Cookies & Co. ist ein Service von Lexora Digital. Check und Behebung sind praktische Prüfungen und Umsetzungen; sie sind keine Rechtsberatung und garantieren keine Konformität."
    },

    language: {
      hero: { label: "Übersetzungen", h1: "Fünf Sprachen. *Jede Richtung.*", lead: "Übersetzung von Websites, Geschäftsdokumenten und Rechtstexten zwischen Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch — präzise, natürlich und passend zu Ihrer Marke.", cta1: "Übersetzung anfragen", cta2: "Sprachpaare" },
      pairs: {
        label: "Sprachpaare", h2: "Zwanzig Sprachpaare, ein Ansprechpartner.", lead: "Wir übersetzen zwischen zwei beliebigen unserer fünf Sprachen — so wird eine deutsche Website niederländisch, ein kroatischer Vertrag englisch oder eine spanische Broschüre deutsch.",
        aria: "Raster der zwanzig Sprachpaare zwischen Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch",
        langs: [["EN", "English", "UK & international"], ["DE", "Deutsch", "Deutschland, Österreich, Schweiz"], ["NL", "Nederlands", "Niederlande & Flandern"], ["ES", "Español", "Spanien"], ["HR", "Hrvatski", "Kroatien"]]
      },
      services: {
        label: "Was wir übersetzen", h2: "Von einer Webseite bis zu einem ganzen Dokumentenpaket.", lead: "Jede Übersetzung wird von einem Menschen erstellt und geprüft — nicht einem Plugin überlassen.",
        items: [
          { g: "01", t: "Website-Lokalisierung", p: "Ihre Website-Inhalte für jeden Markt angepasst — einschließlich Überschriften, Buttons, Formularen und SEO-Texten." },
          { g: "02", t: "Geschäftsdokumente", p: "Angebote, Präsentationen, Produktinformationen, E-Mails und interne Dokumente." },
          { g: "03", t: "Rechts- & Vertragstexte", p: "Verträge, AGB, Datenschutzerklärungen und behördliche Korrespondenz." },
          { g: "04", t: "Marketingtexte", p: "Broschüren, Kampagnen und Social-Media-Texte, die in jeder Sprache ihren Ton behalten." },
          { g: "05", t: "Korrektorat & Lektorat", p: "Ein sorgfältiger zweiter Blick auf vorhandene Übersetzungen." },
          { g: "06", t: "Mehrsprachige Websites", p: "Kombiniert mit unserem Webservice: eine Website, bis zu fünf Sprachen, gebaut und übersetzt in einem Projekt." }
        ]
      },
      focus: {
        label: "Unser Schwerpunkt", h2: "Rechts- und Wirtschaftssprache für den DACH- und Benelux-Raum.",
        p: ["Unsere größte Erfahrung liegt in juristischen und wirtschaftlichen Übersetzungen für Unternehmen in Deutschland, Österreich, der Schweiz, den Niederlanden und Belgien — und zwischen diesen Märkten und dem Englischen und Kroatischen.",
          "Juristische und technische Fachbegriffe behandeln wir mit Sorgfalt, und wir halten Ihre eigene Terminologie in jedem Dokument und jeder Sprache einheitlich."]
      },
      how: {
        label: "So funktioniert es", h2: "Einfach, mit Festpreisangebot.", lead: "Sie kennen Preis und Liefertermin, bevor wir beginnen.",
        steps: [
          ["Text senden", "Laden Sie die Dokumente hoch oder beschreiben Sie sie — mit Sprachpaar und Termin."],
          ["Angebot erhalten", "Sie erhalten einen Festpreis und einen Liefertermin — meist auf Basis der Wortzahl."],
          ["Übersetzung & Prüfung", "Wir übersetzen und prüfen den Text auf Genauigkeit, Terminologie und Ton."],
          ["Lieferung", "Sie erhalten die Übersetzung im vereinbarten Format, sofort einsetzbar."]
        ]
      },
      faq: {
        label: "Fragen", h2: "Zu unseren Übersetzungen.",
        items: [
          ["Was kostet eine Übersetzung?", "Der Preis hängt vom Sprachpaar, der Textart und dem Termin ab. Vor Beginn erhalten Sie ein Festpreisangebot."],
          ["Bieten Sie beglaubigte Übersetzungen an?", "Sagen Sie uns, wenn Sie eine beglaubigte Übersetzung für eine Behörde oder ein Gericht benötigen. Wir sagen Ihnen ehrlich, ob wir sie anbieten können — oder empfehlen eine beeidigte Übersetzerin bzw. einen beeidigten Übersetzer im richtigen Land."],
          ["Werden meine Dokumente vertraulich behandelt?", "Ja. Ihre Dokumente werden nur für die Übersetzung verwendet und nach dem Projekt gelöscht innerhalb von 30 Tagen nach Lieferung."],
          ["Nutzen Sie maschinelle Übersetzung?", "Jeder Text wird von einem Menschen übersetzt und geprüft. Wir liefern nie unbearbeitete Maschinenübersetzungen."]
        ]
      },
      band: { h2: "Sie brauchen einen Text *in einer anderen Sprache?*", lead: "Nennen Sie uns Sprachpaar, Textart und Termin.", cta: "Übersetzung anfragen" }
    },

    creative: {
      hero: { label: "Kreativleistungen", h1: "Gestaltung mit *klarer Haltung.*", lead: "Identität, Grafik und Medienbearbeitung für Unternehmen, die so gut aussehen wollen wie ihre Arbeit — einheitlich auf Website, Print und Social Media.", cta1: "Kreativprojekt besprechen", cta2: "Konzeptprojekte ansehen" },
      services: {
        label: "Was wir anbieten", h2: "Ausgewählte Kreativleistungen.", lead: "Fokussierte Leistungen, die Ihre Website und Ihre Marke unterstützen.",
        items: [
          { g: "01", t: "Visuelle Identität", p: "Logo-Überarbeitung, Farbpalette, Typografie und einfache Markenrichtlinien." },
          { g: "02", t: "Markenmaterialien", p: "Visitenkarten, Social-Media-Vorlagen, Briefpapier und Präsentationslayouts." },
          { g: "03", t: "Grafikdesign", p: "Flyer, Plakate, Broschüren und Grafiken für Kampagnen." },
          { g: "04", t: "Fotobearbeitung", p: "Farbkorrektur, Retusche und einheitliche Bildbearbeitung für Ihre Website." },
          { g: "05", t: "Videoschnitt", p: "Kurze Videos für Website und Social Media — geschnitten, betitelt und veröffentlichungsbereit." },
          { g: "06", t: "Audio- & Sprachbearbeitung", p: "Bereinigung und Schnitt von Sprachaufnahmen, Podcasts und Ton für Videos." }
        ]
      },
      approach: {
        label: "Ansatz", h2: "Design, das dem Unternehmen dient.",
        items: [
          ["Eine visuelle Sprache", "Website, Print und Social Media nutzen dieselben Farben, Schriften und denselben Ton."],
          ["Praktische Dateien", "Sie erhalten Dateien in den Formaten, die Sie wirklich brauchen — benannt und geordnet."],
          ["Klarer Umfang", "Jedes Kreativprojekt hat vor Beginn einen vereinbarten Umfang und Preis."]
        ]
      },
      work: { label: "Konzeptprojekte", h2: "Art Direction in der Praxis." },
      band: { h2: "Geben wir Ihrer Marke *einen klaren Auftritt.*", lead: "Erzählen Sie uns, was Sie brauchen und wo es eingesetzt wird." }
    },

    work: {
      hero: { label: "Arbeiten", h1: "Konzeptprojekte, *gebaut nach dem Standard echter Projekte.*", lead: "Jedes Konzept ist eine vollständige, responsive Website für eine bestimmte Art von Unternehmen. Sie zeigen, wie wir arbeiten — es sind keine beauftragten Kundenprojekte." },
      filter: "Nach Branche filtern", all: "Alle", empty: "In dieser Kategorie gibt es noch keine Projekte.",
      soon: { label: "In Vorbereitung", items: ["Ferienunterkünfte", "Freie Berufe & Dienstleister", "Kreativ- & Digitalprojekte"], p: "Neue Konzepte kommen hinzu, sobald sie fertig sind." },
      band: { h2: "Eine Website wie diese *für Ihr Unternehmen?*", lead: "Jedes Konzept lässt sich auf ein echtes Unternehmen übertragen — mit Ihren Inhalten, Ihrer Marke und Ihren Sprachen." }
    },

    caseUi: {
      overview: "Überblick", goals: "Unternehmensziele", approach: "Gestaltungsansatz", system: "Designsystem", palette: "Farbpalette", type2: "Typografie",
      roles: { display: "Überschriften", body: "Fließtext", both: "Überschriften & Fließtext" },
      type: "Art", sector: "Branche", services: "Gezeigte Leistungen", lang: "Sprache",
      desk: "Desktop — Abschnitte der Startseite", mob: "Mobil — das Layout wird für kleine Bildschirme neu komponiert, nicht nur verkleinert.",
      deskAlt: "Website-Konzept %s — Desktop-Ansicht der Startseite", mobAlt: "Website-Konzept %s — mobile Ansicht",
      note: "Dies ist ein Konzeptprojekt von Lexora Digital, das unsere Arbeitsweise zeigt. Namen, Kontaktdaten und Texte in eckigen Klammern sind Platzhalter.",
      next: "Nächstes Projekt", cta: "Ähnliche Website besprechen",
      band: { h2: "Eine Website wie diese *für Ihr Unternehmen?*", lead: "Wir übertragen den Ansatz auf Ihr Unternehmen, Ihre Inhalte und Ihre Sprachen." }
    },
    cases: {
      "studio-rosalie": {
        lead: "Ein ruhiges, hochwertiges One-Page-Website-Konzept für ein Kosmetikstudio — gestaltet, damit die Terminbuchung der naheliegende nächste Schritt ist.", lang: "Deutsch",
        svc: ["Webdesign", "Visuelle Richtung", "Responsive Umsetzung"],
        overview: "Studio Rosalie ist ein Konzept für ein unabhängiges Kosmetikstudio mit Gesichtsbehandlungen, Wimpern, Brauen und Nageldesign. Die Website sollte zugleich persönlich und hochwertig wirken — und auf dem Smartphone genauso gut funktionieren wie auf dem Laptop.",
        goals: ["Das Studio auf den ersten Blick einladend und hochwertig zeigen", "Leistungen und Preise klar darstellen", "Die Terminbuchung zum naheliegenden nächsten Schritt machen", "Die Inhaberin persönlich vorstellen, um Vertrauen aufzubauen"],
        approach: ["Eine warme Rosé- und Bordeaux-Palette ersetzt das übliche Pink, mit einer editorialen Serifenschrift für Überschriften und einer klaren Grotesk zum Lesen.", "Fotos des Studios, der Arbeit und der Inhaberin tragen die Seite. Das Layout gibt jedem Bild Raum, und die Buchungsbuttons bleiben sichtbar, ohne aufdringlich zu sein."]
      },
      "mustermann-sanitaer": {
        lead: "Ein klares, vertrauenswürdiges Website-Konzept für einen Sanitär- und Heizungsbetrieb — mit einem Ziel: dass das Telefon klingelt.", lang: "Deutsch",
        svc: ["Webdesign", "Responsive Umsetzung", "Conversion-Struktur"],
        overview: "Mustermann Sanitär ist ein Konzept für einen Meisterbetrieb für Bad, Sanitär und Heizung. Kunden kommen oft mit einem Problem und dem Telefon in der Hand — Geschwindigkeit und Klarheit zählen mehr als alles andere.",
        goals: ["Kompetenz und Zuverlässigkeit sofort zeigen", "Telefonnummer und Notdienst mit einem Tipp erreichbar machen", "Leistungen verständlich erklären", "Vertrauen mit echten Fotos von Team und Arbeit aufbauen"],
        approach: ["Eine Palette aus Marineblau und warmem Orange steht für Verlässlichkeit und Handeln. Die Telefonnummer ist überall der Haupt-Button, auf dem Smartphone hält eine feste Anrufleiste sie in Reichweite.", "Leistungskarten, Vertrauenspunkte und ein kurzer Bewertungsbereich beantworten die üblichen Fragen, bevor der Kunde sie stellen muss."]
      },
      "kfz-werkstatt": {
        lead: "Ein kräftiges, technisches Website-Konzept für eine freie Kfz-Werkstatt — mit Leistungen, Vertrauenspunkten und Terminanfrage gleich zu Beginn.", lang: "Deutsch",
        svc: ["Webdesign", "Art Direction", "Responsive Umsetzung"],
        overview: "Dieses Konzept präsentiert eine freie Kfz-Werkstatt modern und kompetent — ohne den branchenüblichen Stockfoto-Look.",
        goals: ["Professionell und technisch kompetent wirken", "Die wichtigsten Leistungen auf einen Blick zeigen", "Terminanfragen einfach machen", "Vertrauen ohne erfundene Zertifikate oder Bewertungen aufbauen"],
        approach: ["Tiefes Marineblau und Signalorange mit einer schmalen Schrift geben der Website das selbstbewusste, technische Gefühl einer Werkstatt. Realistische Werkstattfotos erzählen die Geschichte.", "Ein klares Leistungsraster, vier Vertrauenspunkte und ein einfaches Terminformular machen den nächsten Schritt auf jedem Bildschirm offensichtlich."]
      }
    },

    journal: {
      hero: { label: "Journal", h1: "Leitfäden zu *Europas Digitalrecht.*", lead: "Verständliche Artikel zu DSGVO und Cookies, dem Digital Services Act und dem EU AI Act — was die Regeln sagen, für wen sie gelten und was zu tun ist." },
      note: { label: "Über das Journal", p: "Geschrieben von **Goran Kolouh**, Gründer von Lexora Digital — Jurist von der Ausbildung, der Websites baut. Jeder Leitfaden wird an den amtlichen Texten geprüft und aktualisiert, wenn sich die Regeln ändern. Allgemeine Information, keine Rechtsberatung." },
      article: { by: "Von", min: "Min. Lesezeit", read: "Artikel lesen", back: "Alle Artikel", sources: "Quellen", more: "Weiterlesen", talk: "Sprechen Sie mit uns", all: "Alle Artikel", bio: "Jurist von der Ausbildung, Webdesigner aus Überzeugung. Goran schreibt über EU-Digitalrecht — DSGVO, DSA und KI-Verordnung — und darüber, was es für alle bedeutet, die Websites bauen und betreiben.", disclaimer: "Dieser Artikel ist eine allgemeine Information und keine Rechtsberatung. Er gibt die Rechtslage zum Zeitpunkt der Veröffentlichung wieder." },
      band: { h2: "Wissen, wo Ihre Website steht?", lead: "Unser kostenloser DSGVO- & Cookie-Check gibt Ihnen eine klare Antwort." }
    },

    about: {
      photoAlt: "Porträt von Goran Kolouh, Gründer und Geschäftsführer von Lexora Digital", photoCap: "Goran Kolouh — Gründer & Geschäftsführer", photoLine: "Eine Hälfte Recht und Sprache, die andere digital.",
      hero: { label: "Über Lexora", h1: "Ein unabhängiges Studio, *grenzüberschreitend tätig.*", lead: "Lexora Digital verbindet Webdesign, praktisches Wissen über europäisches Digitalrecht, Übersetzung und kreative Arbeit — für kleine und mittlere Unternehmen in ganz Europa." },
      story: {
        label: "Unsere Geschichte", h2: "Warum Web, Recht, Sprache und Design zusammengehören.",
        p: ["Kleinen Unternehmen wird gesagt, sie bräuchten eine Website, ein Cookie-Banner, eine Datenschutzerklärung, übersetzte Inhalte und einen einheitlichen Auftritt — meist von vier verschiedenen Anbietern, die nie miteinander sprechen.",
          "Lexora Digital entstand aus einer einfachen Idee: Diese Dinge funktionieren besser, wenn man sie gemeinsam plant. Eine schöne Website, die Tracker ohne Einwilligung lädt, ist ein Risiko. Eine Datenschutzerklärung, die niemand versteht, hilft niemandem. Eine Übersetzung, die das Design ignoriert, zerstört das Layout.",
          "Das Studio verbindet einen Hintergrund in Recht, professioneller Übersetzung und Webdesign. Wir arbeiten in fünf Sprachen und erklären jeden Schritt verständlich."]
      },
      four: {
        label: "Vier Disziplinen", h2: "WEB · LAW · LANGUAGE · DESIGN", lead: "Ein Studio, vier Fähigkeiten — in jedem Projekt verbunden.",
        items: [
          { g: "</>", t: "Web", p: "Websites und Landingpages, die schnell, klar und leicht zu pflegen sind." },
          { g: "§", t: "Recht", p: "Praktische DSGVO- und Cookie-Compliance — Information und Umsetzung, keine Rechtsberatung." },
          { g: "⇄", t: "Sprache", p: "Übersetzung zwischen Englisch, Deutsch, Niederländisch, Spanisch und Kroatisch." },
          { g: "Aa", t: "Design", p: "Visuelle Identität, Grafik und Medienbearbeitung mit klarer Haltung." }
        ]
      },
      values: { h2: "Wie wir arbeiten." },
      bounds: {
        doT: "Was Sie erwarten können", do: ["Festgelegter Umfang und Preis vor Arbeitsbeginn", "Verständliche Erklärungen in Ihrer Sprache", "Ehrliche Beratung — auch wenn Sie etwas nicht brauchen", "Datenschutzfreundliche Websites als Standard"],
        dontT: "Was wir nicht sind", dont: ["Eine Anwaltskanzlei — wir erbringen keine Rechtsberatung oder Vertretung", "Ein Büro für beeidigte Übersetzungen — beglaubigte Übersetzungen nur, wo ausdrücklich angegeben", "Eine Agentur, die Ihnen mehr verkauft, als Sie brauchen"]
      }
    },

    contact: {
      hero: { label: "Kontakt", h1: "Beginnen wir mit *einem Gespräch.*", lead: "Erzählen Sie uns, was Sie erreichen möchten — eine Website, einen Compliance-Check, eine Übersetzung oder ein Kreativprojekt. Wir antworten in Ihrer Sprache." },
      direct: { label: "E-Mail", p: "Wir antworten in der Regel innerhalb von zwei Werktagen." },
      next: { label: "So geht es weiter", steps: [["Wir lesen Ihre Nachricht", "und fragen nach, wenn etwas unklar ist."], ["Wir schlagen einen nächsten Schritt vor", "— ein kurzes Gespräch, ein Angebot oder einen kostenlosen Check."], ["Sie entscheiden", "Nichts beginnt ohne Ihre Freigabe."]] },
      check: { t: "Sie möchten nur wissen, ob Ihre Website DSGVO-konform ist?", p: "Nutzen Sie stattdessen den kostenlosen DSGVO- & Cookie-Check." }
    },

    shop: {
      hero: {
        label: "Notion-Vorlagen",
        h1: "EU-Compliance-Kits, *fertig in Notion.*",
        lead: "Praxisnahe Notion-Vorlagen für DSGVO, EU AI Act, Entgelttransparenz und Lieferantenprüfung — für kleine und mittlere Unternehmen, in fünf Sprachen.",
        cta1: "Zum Bundle",
        cta2: "Alle Kits ansehen",
        points: ["Deutsch, Englisch, Niederländisch, Spanisch, Kroatisch", "Funktioniert mit dem kostenlosen Notion-Tarif", "Sofortiger Zugang nach dem Kauf", "Einmalzahlung, kein Abo"]
      },
      kits: {
        label: "Die Kits",
        h2: "Fünf Kits. *Ein Bundle.*",
        lead: "Jedes Kit ist ein einsatzbereiter Notion-Workspace mit Registern, Anleitungen und Beispieleinträgen. Die Sprachversion wählen Sie beim Kauf."
      },
      cat: "Notion-Vorlage",
      notion: "Gemacht für Notion",
      bundleCat: "Bundle · 5 Notion-Kits",
      num: "5 Kits",
      vs: "{bundle} statt {full}",
      buy: "Bei Gumroad kaufen",
      items: {
        bundle: { t: "EU Compliance Bundle", s: "5 Notion-Kits", p: "Alle fünf Kits in einem Kauf: DSGVO, KI-Compliance, KI-Richtlinie am Arbeitsplatz, Entgelttransparenz und Lieferantenprüfung." },
        gdpr: { t: "GDPR Compliance Kit", s: "DSGVO", p: "Checkliste mit Artikelverweisen sowie Register für Verarbeitungstätigkeiten, Betroffenenanfragen, Datenpannen, Auftragsverarbeiter und Cookies." },
        ai: { t: "AI Compliance Toolkit", s: "EU AI Act + DSGVO", p: "KI-Tool-Register, DSGVO-Prüfpunkte, eine KI-Richtlinie für Mitarbeitende, Skripte für Schulungsvideos und ein Schulungsnachweis." },
        policy: { t: "AI Workplace Policy Pack", s: "EU AI Act + DSGVO", p: "KI-Nutzungsrichtlinie, Kurzleitfaden für Mitarbeitende, Bestätigungsformular, KI-Tool-Anfragen und ein Schulungsnachweis." },
        pay: {
          t: "EU Pay Transparency Kit",
          s: "Richtlinie (EU) 2023/970",
          p: "Vergütungsrichtlinie, Stellenarchitektur und Gehaltsbänder, Entgeltlücken-Rechner, Auskunftsanfragen von Beschäftigten und fertige Textbausteine."
        },
        vendor: { t: "Vendor & AI Supplier Assessment Kit", s: "DSGVO + EU AI Act", p: "Lieferantenfragebogen, Bewertungsleitfaden, AVV-Checkliste (Art. 28 DSGVO), Lieferantenregister und Bewertungsprotokoll." }
      },
      how: {
        label: "So funktioniert es",
        h2: "Vom Kauf zum eigenen Workspace *in zwei Minuten.*",
        lead: "Keine Installation, kein Konto bei uns — die Vorlage wird in Ihren eigenen Notion-Workspace kopiert.",
        steps: [
          ["Kit und Sprache wählen", "Wählen Sie ein Kit oder das Bundle und beim Checkout auf Gumroad Ihre Sprachversion."],
          ["Link erhalten", "Direkt nach der Zahlung erhalten Sie den Link zu Ihrer Vorlage."],
          ["In Notion duplizieren", "Öffnen Sie den Link und klicken Sie auf „Duplizieren“, um die Vorlage in Ihren eigenen Notion-Workspace zu kopieren. Der kostenlose Tarif reicht."],
          ["Ausfüllen", "Folgen Sie der Einrichtungsanleitung und den Beispieleinträgen und ergänzen Sie Ihre eigenen Angaben."]
        ]
      },
      bounds: {
        label: "Grenzen",
        h2: "Was die Kits leisten — und was nicht.",
        doT: "Was die Kits leisten",
        do: ["Eine klare Struktur für Verzeichnisse, Register und Richtlinien", "Beispieleinträge, die zeigen, wie jedes Register ausgefüllt wird", "Die relevanten EU-Regeln in verständlicher Sprache", "Hilfe dabei, zu dokumentieren, was Sie umgesetzt haben"],
        dontT: "Was sie nicht leisten",
        dont: ["Rechtsberatung für Ihren konkreten Fall ersetzen", "Ihr Unternehmen schon für sich allein rechtskonform machen", "Meldungen oder Berichte für Sie bei Behörden einreichen", "KI-Systeme einstufen oder rechtliche Entscheidungen für Sie treffen"]
      },
      faq: {
        label: "Fragen",
        h2: "Vor dem Kauf.",
        items: [
          ["Brauche ich einen kostenpflichtigen Notion-Tarif?", "Nein. Die Vorlagen funktionieren mit dem kostenlosen Notion-Tarif. Sie brauchen nur ein Notion-Konto, das Sie kostenlos anlegen können."],
          ["Welche Sprachen gibt es?", "Jedes Kit gibt es auf Deutsch, Englisch, Niederländisch, Spanisch und Kroatisch. Die Sprachversion wählen Sie beim Kauf."],
          ["Wie erhalte ich die Vorlage?", "Zahlung und Beleg laufen über Gumroad. Direkt nach dem Kauf erhalten Sie einen Link, mit dem Sie die Vorlage in Ihren Notion-Workspace duplizieren."],
          ["Kann ich ein Kit für mehrere Unternehmen nutzen?", "Ein Kauf gilt für die Nutzung in einem Unternehmen. Wenn Sie Kits für mehrere Unternehmen oder für Ihre Kunden brauchen, schreiben Sie uns."],
          ["Ist das Rechtsberatung?", "Nein. Die Kits sind Organisationshilfen und ein praktischer Ausgangspunkt. Sie stellen keine Rechtsberatung dar und machen Ihr Unternehmen nicht schon für sich allein rechtskonform. Bei Einsätzen mit hohem Risiko — etwa KI im Recruiting — lassen Sie Ihre finalen Dokumente fachkundig prüfen."],
          ["Werde ich beim Klick auf „Kaufen“ getrackt?", "Nicht von dieser Website. Sie lädt keine Gumroad-Skripte und setzt keine Cookies. Die Kaufbuttons sind einfache Links; auf der Checkout-Seite gilt die Datenschutzerklärung von Gumroad."]
        ]
      },
      band: { h2: "Alle fünf Kits *zu einem Preis.*", lead: "{bundle} statt {full} — die Sprachversion wählen Sie beim Kauf.", cta: "Zum Bundle" },
      disclaimer: "Die Kits sind Organisationshilfen und ein praktischer Ausgangspunkt. Sie stellen keine Rechtsberatung dar und garantieren nicht die Einhaltung der DSGVO, des EU AI Act oder anderer Gesetze."
    },

    privacy: {
      label: "Rechtliches", h1: "Datenschutzerklärung", lead: "Wie wir personenbezogene Daten verarbeiten, wenn Sie diese Website besuchen oder uns kontaktieren.", updated: "Stand: Oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Verantwortlicher"],
        ["p", "Verantwortlich für die Datenverarbeitung auf dieser Website ist: Lexora Digital (Goran Kolouh), Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgien, gdpr@lexoradigital.com. Weitere Angaben finden Sie im Impressum."],
        ["h2", "Hosting und Server-Logs"],
        ["p", "Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf verarbeitet der Hosting-Anbieter automatisch technische Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem, um die Website auszuliefern und sicher zu betreiben."],
        ["p", "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, funktionierenden Website). Übermittlungen in die USA erfolgen auf Grundlage des EU-US Data Privacy Framework und/oder von Standardvertragsklauseln. Speicherdauer: höchstens 30 Tage."],
        ["h2", "Kontaktformular und DSGVO- & Cookie-Check"],
        ["p", "Wenn Sie eines unserer Formulare nutzen, verarbeiten wir Ihre Eingaben (zum Beispiel Name, E-Mail-Adresse, Website-Adresse, Land und Nachricht), um Ihre Anfrage zu beantworten oder den gewünschten Check durchzuführen."],
        ["p", "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Ihre Anfrage) und Art. 6 Abs. 1 lit. f DSGVO (Beantwortung von Anfragen). Die Formulare werden über Formspree, Inc., USA verarbeitet, auf Grundlage eines Auftragsverarbeitungsvertrags und des EU-US Data Privacy Framework und/oder von Standardvertragsklauseln."],
        ["p", "Wir löschen Ihre Anfrage, sobald sie nicht mehr benötigt wird, sofern keine gesetzlichen Aufbewahrungspflichten bestehen spätestens 12 Monate nach Abschluss der Anfrage."],
        ["h2", "E-Mail"],
        ["p", "Wenn Sie uns per E-Mail schreiben, verarbeiten wir Ihre E-Mail-Adresse und Nachricht, um zu antworten. Rechtsgrundlage: Art. 6 Abs. 1 lit. b oder f DSGVO."],
        ["h2", "Cookies und lokaler Speicher"],
        ["p", "Diese Website verwendet keine Cookies für Analyse, Werbung oder Tracking. Wenn Sie eine Sprache wählen, wird diese Wahl im lokalen Speicher Ihres Browsers abgelegt, damit die Website beim nächsten Mal in Ihrer Sprache öffnet. Dies ist für eine von Ihnen gewünschte Funktion unbedingt erforderlich und wird nicht an uns übertragen. Details finden Sie in unserer Cookie-Richtlinie."],
        ["h2", "Schriften und externe Ressourcen"],
        ["p", "Alle Schriften und Skripte werden auf unserem eigenen Server gehostet. Beim Besuch dieser Website werden keine Daten an Google Fonts oder andere Drittanbieter-Netzwerke übertragen."],
        ["h2", "Ihre Rechte"],
        ["ul", ["Auskunft (Art. 15 DSGVO)", "Berichtigung (Art. 16 DSGVO)", "Löschung (Art. 17 DSGVO)", "Einschränkung der Verarbeitung (Art. 18 DSGVO)", "Datenübertragbarkeit (Art. 20 DSGVO)", "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)"]],
        ["p", "Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem EU-Mitgliedstaat Ihres gewöhnlichen Aufenthalts oder Arbeitsplatzes die belgische Datenschutzbehörde (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brüssel, www.dataprotectionauthority.be."],
        ["h2", "Änderungen"],
        ["p", "Wir passen diese Erklärung an, wenn sich unsere Website oder die Rechtslage ändert. Die aktuelle Fassung finden Sie immer auf dieser Seite."]
      ]
    },

    cookies: {
      label: "Rechtliches", h1: "Cookie-Richtlinie", lead: "Kurz gesagt: Wir verwenden keine Tracking-, Analyse- oder Werbe-Cookies.", updated: "Stand: Oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Was wir verwenden"],
        ["p", "Diese Website setzt keine Cookies. Sie speichert einen Eintrag im lokalen Speicher Ihres Browsers — und nur dann, wenn Sie selbst eine Sprache wählen:"],
        ["ul", ["**lexora-lang** — Ihre gewählte Sprache (zum Beispiel „de“). Zweck: die Website beim nächsten Besuch in dieser Sprache öffnen. Gespeichert, bis Sie den Eintrag löschen. Wird weder an uns noch an Dritte übertragen."]],
        ["p", "Da diese Speicherung für eine ausdrücklich gewünschte Funktion unbedingt erforderlich ist, ist dafür kein Einwilligungsbanner nötig."],
        ["h2", "Was wir nicht verwenden"],
        ["ul", ["Keine Analyse-Tools (zum Beispiel Google Analytics)", "Keine Werbe- oder Social-Media-Pixel", "Keine eingebetteten Videos, Karten oder Schriften von Drittanbietern", "Keinerlei seitenübergreifendes Tracking"]],
        ["h2", "Formulare"],
        ["p", "Wenn Sie eines unserer Formulare absenden, werden Ihre Angaben an unseren Formular-Anbieter übertragen. Das Absenden setzt auf dieser Website keine Cookies. Details finden Sie in der Datenschutzerklärung."],
        ["h2", "Ihre Einstellungen"],
        ["p", "Sie können die gespeicherte Sprachauswahl jederzeit unter **Datenschutz-Einstellungen** im Footer ansehen und löschen oder die Website-Daten in Ihrem Browser entfernen."]
      ]
    },

    imprint: {
      label: "Rechtliches", h1: "Impressum", lead: "Anbieterkennzeichnung für lexoradigital.com.", updated: "Stand: Oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Anbieter"],
        ["p", "**Lexora Digital**  \nRue Jean Robbie 44  \n1060 Saint-Gilles (Bruxelles), Belgien  \nVertreten durch: Goran Kolouh, Gründer & Geschäftsführer"],
        ["h2", "Kontakt"],
        ["p", "Allgemein: info@lexoradigital.com  \nDatenschutz: gdpr@lexoradigital.com  \nGründer: kolouh@lexoradigital.com"],
        ["h2", "Umsatzsteuer-Identifikationsnummer"],
        ["p", "17636920948"],
        ["h2", "US-Gesellschaft"],
        ["p", "**Lexora Digital C-Corp.**  \n1401 Pennsylvania Ave  \nWilmington, DE 19806  \nDelaware, USA"],
        ["h2", "Verantwortlich für den Inhalt"],
        ["p", "Verantwortlich für journalistisch-redaktionelle Inhalte (§ 18 Abs. 2 MStV): Goran Kolouh, Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgien"],
        ["h2", "Verbraucherstreitbeilegung"],
        ["p", "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."],
        ["h2", "Haftung für Inhalte und Links"],
        ["p", "Wir erstellen die Inhalte dieser Website mit Sorgfalt, können aber keine Gewähr für Vollständigkeit, Richtigkeit und Aktualität übernehmen. Artikel und Compliance-Übersichten sind allgemeine Informationen und keine Rechtsberatung. Für die Inhalte verlinkter externer Websites sind wir nicht verantwortlich."]
      ]
    },

    accessibility: {
      label: "Rechtliches", h1: "Erklärung zur Barrierefreiheit", lead: "Diese Website soll für alle nutzbar sein.", updated: "Stand: Oktober 2026",
      draft: "",
      blocks: [
        ["h2", "Unser Ziel"],
        ["p", "Wir streben an, die Web Content Accessibility Guidelines (WCAG) 2.2 auf Stufe AA zu erfüllen."],
        ["h2", "Was wir umgesetzt haben"],
        ["ul", ["Semantische Seitenstruktur mit Überschriften, Landmarks und Sprunglink", "Vollständige Tastaturbedienung mit sichtbarem Fokus", "Textkontraste nach WCAG AA geprüft", "Animationen werden reduziert oder abgeschaltet, wenn Ihr Gerät reduzierte Bewegung anfordert", "Formulare mit sichtbaren Beschriftungen und klaren Fehlermeldungen", "Beschreibende Alternativtexte für Bilder"]],
        ["h2", "Bekannte Einschränkungen"],
        ["ul", ["Der animierte Planet ist dekorativ und für Screenreader ausgeblendet.", "Screenshots der Konzeptprojekte enthalten kleine Texte, die im umgebenden Text beschrieben und nicht vollständig vorgelesen werden."]],
        ["h2", "Feedback"],
        ["p", "Wenn Sie auf dieser Website auf eine Barriere stoßen, schreiben Sie uns bitte an info@lexoradigital.com. Wir antworten und arbeiten an einer Lösung."],
        ["h2", "Stand"],
        ["p", "Diese Erklärung beruht auf einer Selbstbewertung vom Oktober 2026."]
      ]
    }
  },

  form: {
    optional: "(optional)", privacyLink: "Datenschutzerklärung", note: "Wir antworten in Ihrer Sprache.",
    js: {
      required: "Bitte füllen Sie dieses Feld aus.", email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", url: "Bitte geben Sie eine gültige Website-Adresse ein, z. B. beispiel.de.",
      consent: "Bitte bestätigen Sie, damit wir Ihre Anfrage bearbeiten können.",
      fix: "Bitte prüfen Sie die markierten Felder.", sending: "Wird gesendet …",
      error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut — oder schreiben Sie uns direkt per E-Mail.",
      notConnected: "Dieses Formular ist noch nicht verbunden. Bitte schreiben Sie uns vorerst direkt per E-Mail."
    },
    contact: {
      title: "Erzählen Sie uns von Ihrem Projekt", intro: "Optionale Felder können leer bleiben.",
      submit: "Nachricht senden", subject: "Neue Anfrage über lexoradigital.com",
      consent: "Ich bin einverstanden, dass Lexora Digital meine Angaben zur Beantwortung meiner Anfrage verwendet. Mehr in der {privacy}.",
      success: ["Vielen Dank — Ihre Nachricht wurde gesendet.", "Wir antworten so bald wie möglich, in Ihrer Sprache."],
      f: { name: "Name", email: "E-Mail", company: "Unternehmen", language: "Bevorzugte Sprache", service: "Wobei können wir helfen?", budget: "Budget", message: "Ihre Nachricht", messagePh: "Was möchten Sie erreichen?", choose: "Bitte wählen" },
      services: [["web", "Website (Design & Entwicklung)"], ["design", "Kreativ- & Designleistungen"], ["compliance", "DSGVO- & Cookie-Beratung"], ["check", "DSGVO- & Cookie-Check / Behebung ab 99 €"], ["translation", "Übersetzung"], ["other", "Etwas anderes"]],
      budgets: [["<500", "Unter 500 €"], ["500-1500", "500–1.500 €"], ["1500-5000", "1.500–5.000 €"], ["5000+", "Über 5.000 €"], ["unsure", "Noch unklar"]]
    },
    check: {
      title: "Kostenlosen Check anfragen", intro: "Wir senden Ihnen das Ergebnis per E-Mail.",
      submit: "Website kostenlos prüfen", subject: "Anfrage DSGVO- & Cookie-Check",
      consent: "Ich bin einverstanden, dass meine Angaben nur zur Durchführung des Checks und zur Zusendung des Ergebnisses verwendet werden. Mehr in der {privacy}.",
      success: ["Vielen Dank — Ihre Check-Anfrage ist eingegangen.", "Wir senden Ihnen das Ergebnis per E-Mail. Finden wir Mängel, erhalten Sie ein Angebot für die Behebung (ab 99 €) — an Ihrer Website ändert sich nichts ohne Ihre Freigabe."],
      f: { website: "Website-Adresse", email: "E-Mail für das Ergebnis", country: "Sitz Ihres Unternehmens", platform: "Website-Plattform", message: "Gibt es etwas, das wir wissen sollten?", choose: "Bitte wählen" },
      countries: [["DE", "Deutschland"], ["AT", "Österreich"], ["CH", "Schweiz"], ["NL", "Niederlande"], ["BE", "Belgien"], ["ES", "Spanien"], ["HR", "Kroatien"], ["UK", "Vereinigtes Königreich"], ["EU", "Anderes EU-Land"], ["other", "Anderes Land"]],
      platforms: [["wordpress", "WordPress"], ["wix", "Wix"], ["squarespace", "Squarespace"], ["shopify", "Shopify"], ["webflow", "Webflow"], ["jimdo", "Jimdo"], ["html", "Individuell / HTML"], ["unknown", "Weiß ich nicht"]]
    }
  },

  footer: {
    pos: "Ein unabhängiges Digitalstudio für Websites, digitale Compliance, Übersetzung und Design — für Unternehmen in ganz Europa und darüber hinaus.",
    studio: "Studio", services: "Leistungen", legal: "Rechtliches", email: "E-Mail", emailPh: "E-Mail-Adresse",
    privacy: "Datenschutz", cookies: "Cookie-Richtlinie", imprint: "Impressum", accessibility: "Barrierefreiheit", settings: "Datenschutz-Einstellungen", langs: "Sprachen"
  },
  privacyDialog: {
    title: "Datenschutz-Einstellungen",
    p: "Diese Website verwendet keine Analyse-, Werbe- oder Tracking-Cookies und lädt keine Schriften oder Skripte von Drittanbietern. Es gibt nichts, dem Sie zustimmen müssten.",
    rows: [["Unbedingt erforderlich", "Immer aktiv"], ["Analyse", "Nicht verwendet"], ["Marketing", "Nicht verwendet"]],
    pref: "Wenn Sie eine Sprache wählen, wird sie im lokalen Speicher Ihres Browsers gespeichert, damit die Website beim nächsten Mal in dieser Sprache öffnet. Sie wird nie an uns übertragen.",
    prefSet: "Gespeicherte Sprachauswahl: %s", prefNone: "Keine Sprachauswahl gespeichert.",
    clear: "Gespeicherte Auswahl löschen", close: "Schließen", more: "Cookie-Richtlinie lesen"
  },
  notFound: {
    title: "Seite nicht gefunden — Lexora Digital",
    h1: "Diese Seite ist *aus der Umlaufbahn geraten.*",
    lead: "Die gesuchte Seite existiert nicht oder wurde verschoben. Wir bringen Sie wieder auf Kurs.",
    home: "Zur Startseite", contact: "Kontakt aufnehmen"
  }
};
