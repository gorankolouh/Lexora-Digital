// Journal-Artikel — Deutsch
export default [
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
      ["note", "Sie möchten wissen, wo Ihre aktuelle Website steht? Unser **kostenloser DSGVO- & Cookie-Check** zeigt, was lädt, was Cookies setzt und was korrigiert werden muss — und für 99 € beheben wir es für Sie."]
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
