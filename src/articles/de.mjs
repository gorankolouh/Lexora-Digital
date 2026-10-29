// Journal-Artikel — Deutsch
export default [
  {
    slug: "cookie-banner-urteile",
    tag: "Cookies",
    cta: "check",
    t: "Cookie-Banner: 8 Urteile, die jede Website kennen sollte (2026)",
    d: "Von Planet49 bis VG Hannover: Was deutsche Gerichte zu Cookie-Bannern, „Alles ablehnen“, Google Fonts und Abmahnungen entschieden haben — mit Checkliste für Ihre Website.",
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
