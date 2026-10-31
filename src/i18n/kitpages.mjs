// One detail page per kit: /<lang>/<templates slug>/<kit slug>/  (e.g. /en/templates/gdpr-compliance-kit/)
// A language only gets kit pages once it has an entry here; the Templates page shows a "Details" link only where a page exists.
// "inside" mirrors the product descriptions on Gumroad — keep both in step when a kit changes.
export default {
  en: {
    ui: {
      details: "What's inside", insideH: "What's in the kit", whoH: "Made for", rulesH: "The rules it covers",
      faqH: "Questions about this kit", edH: "Two editions, same price", edLead: "Choose how you want to work. Content and price are the same.",
      bundleH: "Need more than one kit?", bundleLead: "This kit is part of the EU Compliance Bundle: all five kits for {bundle} instead of {full}.", bundleCta: "See the bundle",
      others: "Other kits", back: "All templates", lang: "Languages", format: "Formats", price: "Price", access: "Access",
      langVal: "EN, DE, NL, ES, HR — country editions adapted to national law", formatVal: "Notion template or Word, Excel & PDF", accessVal: "Instantly after purchase, one-time payment"
    },
    kits: {
      gdpr: {
        slug: "gdpr-compliance-kit",
        meta: { title: "GDPR Compliance Kit for Small Businesses — Templates & Registers", desc: "GDPR templates for SMEs: Art. 30 records, data subject request and breach logs with automatic deadlines, processor and cookie registers. Notion or Word & Excel. €29.99." },
        label: "GDPR · Regulation (EU) 2016/679",
        h1: "GDPR Compliance Kit *for small businesses.*",
        lead: "The GDPR expects you to keep records and to prove compliance. This kit gives you the registers, deadlines and checklist to do it, without hiring a consultant.",
        inside: [
          "**Guide** — what applies in your country, how to set everything up and what to check every week",
          "**Step-by-step compliance checklist** with GDPR article references and an automatic progress score",
          "**Records of Processing (Art. 30)** with legal bases and retention periods",
          "**Data Subject Request log** with an automatic one-month deadline and days-left counter",
          "**Data Breach log** with the automatic 72-hour reporting deadline",
          "**Processors & DPA tracker** for every service provider and contract",
          "**Cookie & tracker audit** that flags cookies set without consent",
          "**Example entries** in every register, so you see exactly how to fill it in"
        ],
        who: ["Small and medium-sized businesses", "Freelancers and agencies", "Website and online shop owners", "Data protection coordinators without a legal team"],
        rules: [
          { t: "Records and accountability", p: "Art. 5(2) and Art. 30 GDPR: you must be able to show what personal data you process, why and on which legal basis." },
          { t: "Requests and breaches", p: "Data subject requests are answered within one month (Art. 12(3)); notifiable breaches go to the authority within 72 hours (Art. 33)." },
          { t: "Processors and cookies", p: "Service providers need a data processing agreement (Art. 28). Non-essential cookies need prior consent under the ePrivacy rules and national law." }
        ],
        faq: [
          ["Does a small business really need records of processing?", "Almost always. The exemption for businesses under 250 employees in Art. 30(5) GDPR does not apply if processing is regular, which is the case for customer, staff or newsletter data. The kit's register is built for exactly that situation."],
          ["How fast do I have to answer a data subject request?", "Within one month of receipt. In complex cases it can be extended by two further months, but you must tell the person within the first month. The request log calculates the deadline and the days left automatically."],
          ["When must I report a data breach?", "Within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to people. You must document every breach either way, and the breach log does that, with the deadline calculated for you."]
        ]
      },
      ai: {
        slug: "ai-compliance-toolkit",
        meta: { title: "EU AI Act Compliance Toolkit for SMEs — AI Register & Policy", desc: "EU AI Act and GDPR toolkit: AI tools register with risk tiers, GDPR checkpoints, employee AI policy, training scripts and an AI literacy log. Notion or Word & Excel." },
        label: "EU AI Act + GDPR",
        h1: "AI Compliance Toolkit: *EU AI Act + GDPR.*",
        lead: "Your team already uses ChatGPT, Copilot and other AI tools. Under the EU AI Act, businesses must already make sure staff who use AI have sufficient AI literacy. This toolkit helps you get control of it in an afternoon.",
        inside: [
          "**Guide** — the EU and national rules at a glance, a step-by-step setup and a 6-month review routine",
          "**Approved AI Tools Registry** — every AI tool, its EU AI Act risk tier, review status and next review date",
          "**GDPR checkpoints** for every tool that processes personal data",
          "**AI Employee Policy** — ready to adapt, just fill in your company details",
          "**Two training video scripts** to record your own staff training",
          "**Training Log** — who has been trained and when, as proof of AI literacy",
          "**Incident log and review & sign-off** with an automatic next review date"
        ],
        who: ["Businesses whose staff use AI tools", "Founders and managing directors", "HR and operations managers", "IT and data protection coordinators"],
        rules: [
          { t: "AI literacy (Art. 4 AI Act)", p: "Has applied since 2 February 2025 to every business that uses AI systems, including everyday tools like chatbots and writing assistants." },
          { t: "Risk tiers", p: "The AI Act sorts uses into prohibited, high-risk, limited-risk and minimal-risk. Knowing which tier each tool falls into tells you what else you have to do." },
          { t: "GDPR still applies", p: "As soon as personal data goes into a prompt, the GDPR applies: legal basis, transparency, processor agreements and transfers outside the EU." }
        ],
        faq: [
          ["Does the AI Act apply if we only use ChatGPT or Copilot?", "Yes. As a business that uses AI systems you are a “deployer”, and the AI literacy duty in Art. 4 already applies to you. Most of the heavier obligations only apply to high-risk uses, such as AI in recruitment."],
          ["How do I prove AI literacy?", "The AI Act does not prescribe a certificate. What helps is a record: which tools are approved, what the rules are, and who has been trained when. The registry, policy and training log give you exactly that."],
          ["What is the difference from the AI Workplace Policy Pack?", "This toolkit is about governing the tools: register, risk tiers, GDPR checks and reviews. The Policy Pack is about the people: the policy, staff guide, acknowledgments and tool requests. Many businesses use both."]
        ]
      },
      policy: {
        slug: "ai-workplace-policy-pack",
        meta: { title: "AI Workplace Policy Template (EU AI Act & GDPR) — Policy Pack", desc: "AI use policy template for EU employers: staff quick guide, acknowledgment form, AI tool requests and training log. EU AI Act and GDPR. Notion or Word & Excel." },
        label: "EU AI Act + GDPR",
        h1: "AI Workplace Policy Pack: *clear rules for AI at work.*",
        lead: "Since February 2025 the EU AI Act expects every business that uses AI to support the AI literacy of its staff, and the GDPR applies as soon as personal data goes into a prompt. This pack gives you clear rules and the paper trail to show what you did.",
        inside: [
          "**AI Use Policy template** — approved tools, data rules, prohibited uses, human review, training and incidents, ready to adapt",
          "**Staff Quick Guide** — a one-page summary for everyone, with a simple traffic-light rule for data",
          "**Employee Acknowledgment form** — print or send for signature",
          "**AI Tool Requests** — request, review and approve each AI tool for a defined purpose",
          "**Training & Acknowledgment Log** — evidence of acknowledgments and AI literacy training",
          "**Guide** — the EU rules at a glance and the national rules for works councils and employee representatives"
        ],
        who: ["Employers of any size whose staff use AI", "HR managers", "Managing directors", "Works councils and employee representatives"],
        rules: [
          { t: "AI literacy (Art. 4 AI Act)", p: "Businesses must take measures so that staff using AI understand how to use it and its risks. A written policy plus training is the most common way to show it." },
          { t: "Personal data in prompts", p: "The GDPR applies to anything personal that staff type into an AI tool. The policy's traffic-light rule tells staff what may and may not go in." },
          { t: "Employee participation", p: "In several countries, introducing tools that can monitor staff requires involving the works council. The national editions cover the local rules." }
        ],
        faq: [
          ["Do we need an AI policy if we are a small team?", "No law says “write a policy”, but the AI Act's literacy duty and the GDPR both require you to be able to show what you did. A short written policy with signed acknowledgments is the simplest proof."],
          ["Do we have to involve the works council?", "That depends on the country. In Germany, for example, introducing technical tools that can monitor performance usually needs the works council's agreement (§ 87(1) no. 6 BetrVG). The guide in each country edition explains the local rules."],
          ["Can we ban AI tools completely?", "You can, and the policy template lets you list prohibited tools and uses. In practice, a short list of approved tools with clear data rules works better than a ban staff work around."]
        ]
      },
      pay: {
        slug: "pay-transparency-kit",
        meta: { title: "EU Pay Transparency Directive Kit for SMEs — Templates & Gap Calculator", desc: "Prepare for Directive (EU) 2023/970: pay policy, job architecture and pay ranges, pay gap calculator, 2-month request log and ready-to-use texts. Notion or Word & Excel." },
        label: "Directive (EU) 2023/970",
        h1: "EU Pay Transparency Kit *for SMEs.*",
        lead: "The Pay Transparency Directive changes how employers set and talk about pay: pay ranges for candidates, no questions about pay history, answers to pay requests within two months, and pay gap reporting for larger employers. This kit helps you prepare.",
        inside: [
          "**Pay Policy & pay-setting criteria** — gender-neutral pay rules ready to adapt and share with staff",
          "**Recruiter & Manager Guide** — what to say, and never ask, in job ads, interviews and pay talks",
          "**Job Architecture & Pay Ranges** — score every role on skills, effort, responsibility and working conditions",
          "**Pay Data** — pseudonymised pay records with automatic total and hourly pay",
          "**Pay Gap Calculator** — the gap per category with an automatic 5% warning",
          "**Information Requests** — employee requests with an automatic two-month deadline",
          "**Step-by-step compliance plan**, filterable by company size",
          "**Ready-to-use texts** — job ad pay wording, annual staff notice, reply to a pay request, contract clause"
        ],
        who: ["Employers in the EU, from about 10 staff", "HR and payroll teams", "Recruiters and hiring managers", "Managing directors preparing for national law"],
        rules: [
          { t: "Before hiring (Art. 5)", p: "Candidates must get the starting pay or pay range, and you may no longer ask about their pay history." },
          { t: "Right to information (Art. 7)", p: "Employees can ask for their pay level and the average pay of colleagues doing equal work, by gender. You answer within two months." },
          { t: "Pay gap reporting (Art. 9)", p: "From June 2027 for employers with 150+ staff, from 2031 for 100+. A gap of 5% or more that you cannot justify triggers a joint pay assessment." }
        ],
        faq: [
          ["When do the rules apply?", "Member states had to transpose the directive by 7 June 2026. Your national law sets the exact start date, and several countries are still finishing theirs. The kit is built on the directive, and the country editions note the national state of play."],
          ["We have fewer than 100 employees. Does this affect us?", "Yes. Pay transparency for candidates, the ban on pay history questions and the right to information apply to all employers. Only gap reporting depends on size."],
          ["What does the pay gap calculator do?", "It calculates the gap per category of workers from your pseudonymised pay data and flags any gap of 5% or more, the threshold that matters under the directive."]
        ]
      },
      vendor: {
        slug: "vendor-ai-supplier-kit",
        meta: { title: "Vendor & AI Supplier Assessment Kit — GDPR Questionnaire & DPA Checklist", desc: "Check suppliers and AI tools before you sign: supplier questionnaire, Art. 28 DPA checklist, supplier register and assessment log. GDPR, AI Act, NIS2. Notion or Word & Excel." },
        label: "GDPR + EU AI Act",
        h1: "Vendor & AI Supplier Assessment Kit: *check before you sign.*",
        lead: "Every supplier that touches your data, and every AI tool your team uses, is your responsibility under the GDPR. This kit gives you a structured way to check them before you sign, and to document that you did.",
        inside: [
          "**Supplier Questionnaire** — ready-to-send questions on data protection, security, sub-processors, AI, continuity and exit",
          "**Assessment Guide** — how to rate answers, typical red flags and how to decide",
          "**DPA Checklist** — the minimum content of a data processing agreement under Art. 28(3) GDPR",
          "**Supplier Register** — every supplier with its role, data, location, contract status and next review",
          "**Assessment Log** — each assessment with ratings, evidence, decision and conditions",
          "**EU rules at a glance** — GDPR, international transfers, EU AI Act and NIS2 supply-chain duties"
        ],
        who: ["Businesses buying SaaS and AI tools", "Procurement and operations teams", "IT and data protection coordinators", "Agencies working with subcontractors"],
        rules: [
          { t: "Choosing processors (Art. 28)", p: "You may only use processors that give sufficient guarantees, and you need a contract with the content Art. 28(3) GDPR requires." },
          { t: "Transfers outside the EU", p: "Suppliers in third countries need a transfer basis, such as the EU–US Data Privacy Framework or standard contractual clauses." },
          { t: "Supply-chain security", p: "Businesses in scope of NIS2 must manage the security of their suppliers. The kit's questionnaire covers the questions that matter for that too." }
        ],
        faq: [
          ["What has to be in a data processing agreement?", "Art. 28(3) GDPR lists the minimum: processing only on your instructions, confidentiality, security measures, rules for sub-processors, help with requests and breaches, deletion or return at the end, and audits. The DPA checklist walks through each point."],
          ["Do I need to assess big providers like Google or Microsoft?", "Yes, but differently. You will not get answers to a custom questionnaire, so you assess their published terms, DPA and certifications instead. The guide shows how to document that."],
          ["Does this help with AI tools?", "Yes. The questionnaire asks AI-specific questions, such as whether your data is used for training, where it is processed and how outputs are checked, and the register records the AI Act risk tier."]
        ]
      }
    }
  },

  de: {
    ui: {
      details: "Inhalt ansehen", insideH: "Was im Kit steckt", whoH: "Gemacht für", rulesH: "Welche Regeln es abdeckt",
      faqH: "Fragen zu diesem Kit", edH: "Zwei Editionen, gleicher Preis", edLead: "Wählen Sie, wie Sie arbeiten möchten. Inhalt und Preis sind gleich.",
      bundleH: "Mehr als ein Kit nötig?", bundleLead: "Dieses Kit ist Teil des EU-Compliance-Bundles: alle fünf Kits für {bundle} statt {full}.", bundleCta: "Zum Bundle",
      others: "Weitere Kits", back: "Alle Vorlagen", lang: "Sprachen", format: "Formate", price: "Preis", access: "Zugang",
      langVal: "DE, EN, NL, ES, HR — Länderausgaben an nationales Recht angepasst", formatVal: "Notion-Vorlage oder Word, Excel & PDF", accessVal: "Sofort nach dem Kauf, Einmalzahlung"
    },
    kits: {
      gdpr: {
        slug: "gdpr-compliance-kit",
        meta: { title: "DSGVO-Kit für kleine Unternehmen — Vorlagen & Verzeichnisse", desc: "DSGVO-Vorlagen für KMU: Verarbeitungsverzeichnis, Betroffenenanfragen und Datenpannen mit automatischen Fristen, AV-Verträge, Cookie-Prüfung. Notion oder Word & Excel. 29,99 €." },
        label: "DSGVO · Verordnung (EU) 2016/679",
        h1: "DSGVO-Kit *für kleine Unternehmen.*",
        lead: "Die DSGVO verlangt, dass Sie Verzeichnisse führen und die Einhaltung nachweisen können. Dieses Kit gibt Ihnen die Register, Fristen und Checkliste dafür, ohne Beratung einzukaufen.",
        inside: [
          "**Leitfaden** — was in Deutschland gilt, wie Sie alles einrichten und was Sie wöchentlich prüfen",
          "**Schritt-für-Schritt-Checkliste** mit DSGVO-Artikeln und automatischem Fortschrittswert",
          "**Verzeichnis von Verarbeitungstätigkeiten (Art. 30)** mit Rechtsgrundlagen und Löschfristen",
          "**Register für Betroffenenanfragen** mit automatischer Monatsfrist und Resttage-Zähler",
          "**Datenpannen-Register** mit automatischer 72-Stunden-Meldefrist",
          "**Auftragsverarbeiter & AV-Verträge** für jeden Dienstleister und Vertrag",
          "**Cookie- & Tracker-Prüfung**, die Cookies ohne Einwilligung markiert",
          "**Beispieleinträge** in jedem Register, damit Sie sehen, wie es ausgefüllt wird"
        ],
        who: ["Kleine und mittlere Unternehmen", "Selbstständige und Agenturen", "Betreiber von Websites und Onlineshops", "Datenschutzkoordinatoren ohne Rechtsabteilung"],
        rules: [
          { t: "Nachweis und Verzeichnis", p: "Art. 5 Abs. 2 und Art. 30 DSGVO: Sie müssen zeigen können, welche personenbezogenen Daten Sie wofür und auf welcher Rechtsgrundlage verarbeiten. Ergänzend gilt das BDSG." },
          { t: "Anfragen und Datenpannen", p: "Betroffenenanfragen beantworten Sie innerhalb eines Monats (Art. 12 Abs. 3); meldepflichtige Pannen gehen innerhalb von 72 Stunden an die Aufsichtsbehörde (Art. 33)." },
          { t: "Dienstleister und Cookies", p: "Auftragsverarbeiter brauchen einen AV-Vertrag (Art. 28). Für nicht notwendige Cookies ist nach § 25 TDDDG vorab eine Einwilligung nötig." }
        ],
        faq: [
          ["Braucht ein kleines Unternehmen wirklich ein Verarbeitungsverzeichnis?", "Fast immer. Die Ausnahme für Unternehmen unter 250 Beschäftigten in Art. 30 Abs. 5 DSGVO greift nicht, wenn die Verarbeitung regelmäßig erfolgt — und das ist bei Kunden-, Personal- oder Newsletterdaten der Fall."],
          ["Wie schnell muss ich auf eine Auskunftsanfrage antworten?", "Innerhalb eines Monats nach Eingang. In komplexen Fällen ist eine Verlängerung um zwei weitere Monate möglich, Sie müssen die Person aber innerhalb des ersten Monats informieren. Das Register berechnet Frist und Resttage automatisch."],
          ["Wann muss ich eine Datenpanne melden?", "Innerhalb von 72 Stunden, nachdem sie Ihnen bekannt wurde, außer die Panne führt voraussichtlich zu keinem Risiko für Betroffene. Dokumentieren müssen Sie jede Panne, und genau das leistet das Datenpannen-Register."]
        ]
      },
      ai: {
        slug: "ai-compliance-toolkit",
        meta: { title: "AI-Act-Toolkit für KMU — KI-Register, KI-Richtlinie & Schulung", desc: "EU AI Act und DSGVO: Register für KI-Tools mit Risikoklassen, DSGVO-Prüfpunkte, KI-Richtlinie für Beschäftigte, Schulungsskripte und Nachweis der KI-Kompetenz. Notion oder Word & Excel." },
        label: "EU AI Act + DSGVO",
        h1: "AI-Compliance-Toolkit: *EU AI Act + DSGVO.*",
        lead: "Ihr Team nutzt längst ChatGPT, Copilot und andere KI-Tools. Nach dem EU AI Act müssen Unternehmen schon jetzt für ausreichende KI-Kompetenz ihrer Beschäftigten sorgen. Mit diesem Toolkit haben Sie das an einem Nachmittag im Griff.",
        inside: [
          "**Leitfaden** — EU- und deutsche Regeln im Überblick, Einrichtung Schritt für Schritt und 6-monatliche Überprüfung",
          "**Register freigegebener KI-Tools** — jedes Tool mit Risikoklasse nach AI Act, Prüfstatus und nächstem Prüftermin",
          "**DSGVO-Prüfpunkte** für jedes Tool, das personenbezogene Daten verarbeitet",
          "**KI-Richtlinie für Beschäftigte** — anpassbar, nur Ihre Unternehmensdaten eintragen",
          "**Zwei Skripte für Schulungsvideos**, um die eigene Schulung aufzunehmen",
          "**Schulungsnachweis** — wer wann geschult wurde, als Beleg der KI-Kompetenz",
          "**Vorfallsprotokoll und Freigabe** mit automatischem nächstem Prüftermin"
        ],
        who: ["Unternehmen, deren Beschäftigte KI nutzen", "Gründer und Geschäftsführer", "Personal- und Betriebsleitung", "IT- und Datenschutzkoordinatoren"],
        rules: [
          { t: "KI-Kompetenz (Art. 4 AI Act)", p: "Gilt seit dem 2. Februar 2025 für jedes Unternehmen, das KI-Systeme einsetzt, auch für Alltags-Tools wie Chatbots und Schreibassistenten." },
          { t: "Risikoklassen", p: "Der AI Act unterscheidet verbotene, hochriskante, begrenzt riskante und minimal riskante Anwendungen. Die Einstufung jedes Tools zeigt, was Sie zusätzlich tun müssen." },
          { t: "Die DSGVO gilt weiter", p: "Sobald personenbezogene Daten in einen Prompt gelangen, gilt die DSGVO: Rechtsgrundlage, Transparenz, AV-Verträge und Übermittlungen außerhalb der EU." }
        ],
        faq: [
          ["Gilt der AI Act, wenn wir nur ChatGPT oder Copilot nutzen?", "Ja. Als Unternehmen, das KI-Systeme einsetzt, sind Sie „Betreiber“, und die Pflicht zur KI-Kompetenz aus Art. 4 gilt bereits für Sie. Die meisten schwereren Pflichten betreffen nur Hochrisiko-Anwendungen, etwa KI im Recruiting."],
          ["Wie weise ich KI-Kompetenz nach?", "Der AI Act schreibt kein Zertifikat vor. Was hilft, ist Dokumentation: welche Tools freigegeben sind, welche Regeln gelten und wer wann geschult wurde. Register, Richtlinie und Schulungsnachweis liefern genau das."],
          ["Was ist der Unterschied zum KI-Richtlinien-Paket?", "Dieses Toolkit steuert die Tools: Register, Risikoklassen, DSGVO-Prüfung und Überprüfung. Das Richtlinien-Paket betrifft die Menschen: Richtlinie, Kurzleitfaden, Bestätigungen und Tool-Anfragen. Viele Unternehmen nutzen beides."]
        ]
      },
      policy: {
        slug: "ai-workplace-policy-pack",
        meta: { title: "KI-Richtlinie für Unternehmen: Vorlage nach AI Act & DSGVO", desc: "Vorlage für eine KI-Nutzungsrichtlinie: Kurzleitfaden für Beschäftigte, Bestätigung, Anfragen für KI-Tools und Schulungsnachweis. EU AI Act und DSGVO. Notion oder Word & Excel." },
        label: "EU AI Act + DSGVO",
        h1: "KI-Richtlinien-Paket: *klare Regeln für KI im Job.*",
        lead: "Seit Februar 2025 erwartet der EU AI Act von jedem Unternehmen, das KI nutzt, die KI-Kompetenz seiner Beschäftigten zu fördern, und die DSGVO gilt, sobald personenbezogene Daten in einen Prompt gelangen. Dieses Paket gibt Ihnen klare Regeln und die Nachweise dazu.",
        inside: [
          "**Vorlage KI-Nutzungsrichtlinie** — freigegebene Tools, Datenregeln, verbotene Nutzungen, menschliche Kontrolle, Schulung und Vorfälle",
          "**Kurzleitfaden für Beschäftigte** — eine Seite für alle, mit einer einfachen Ampelregel für Daten",
          "**Bestätigungsformular** — ausdrucken oder zur Unterschrift senden",
          "**Anfragen für KI-Tools** — jedes Tool für einen festgelegten Zweck beantragen, prüfen und freigeben",
          "**Schulungs- und Bestätigungsnachweis** — Belege für Bestätigungen und KI-Schulungen",
          "**Leitfaden** — EU-Regeln im Überblick und die Mitbestimmung des Betriebsrats in Deutschland"
        ],
        who: ["Arbeitgeber jeder Größe, deren Beschäftigte KI nutzen", "Personalverantwortliche", "Geschäftsführer", "Betriebsräte"],
        rules: [
          { t: "KI-Kompetenz (Art. 4 AI Act)", p: "Unternehmen müssen dafür sorgen, dass Beschäftigte, die KI nutzen, Funktionsweise und Risiken verstehen. Eine schriftliche Richtlinie plus Schulung ist der übliche Nachweis." },
          { t: "Personenbezogene Daten in Prompts", p: "Die DSGVO gilt für alles Personenbezogene, das in ein KI-Tool eingegeben wird. Die Ampelregel der Richtlinie zeigt, was hinein darf und was nicht." },
          { t: "Mitbestimmung", p: "Technische Einrichtungen, die Leistung oder Verhalten überwachen können, sind nach § 87 Abs. 1 Nr. 6 BetrVG mitbestimmungspflichtig. Das betrifft viele KI-Tools." }
        ],
        faq: [
          ["Brauchen wir als kleines Team eine KI-Richtlinie?", "Kein Gesetz sagt wörtlich „schreiben Sie eine Richtlinie“, aber die KI-Kompetenzpflicht des AI Act und die DSGVO verlangen, dass Sie zeigen können, was Sie getan haben. Eine kurze Richtlinie mit unterschriebenen Bestätigungen ist der einfachste Nachweis."],
          ["Müssen wir den Betriebsrat beteiligen?", "Wenn es einen gibt, meistens ja: Tools, die Leistung oder Verhalten überwachen können, fallen unter § 87 Abs. 1 Nr. 6 BetrVG. Der Leitfaden erklärt, wie Sie das vorbereiten."],
          ["Können wir KI-Tools ganz verbieten?", "Ja, die Vorlage erlaubt eine Liste verbotener Tools und Nutzungen. In der Praxis funktioniert eine kurze Liste freigegebener Tools mit klaren Datenregeln besser als ein Verbot, das umgangen wird."]
        ]
      },
      pay: {
        slug: "pay-transparency-kit",
        meta: { title: "Entgelttransparenz-Richtlinie: Kit für KMU mit Vorlagen & Lückenrechner", desc: "Vorbereitung auf die Richtlinie (EU) 2023/970: Vergütungsrichtlinie, Stellenbewertung und Gehaltsbänder, Entgeltlücken-Rechner, Auskunftsanfragen mit Frist und Mustertexte." },
        label: "Richtlinie (EU) 2023/970",
        h1: "Entgelttransparenz-Kit *für KMU.*",
        lead: "Die Entgelttransparenz-Richtlinie verändert, wie Arbeitgeber Gehälter festlegen und darüber sprechen: Gehaltsspannen für Bewerber, keine Fragen nach dem bisherigen Gehalt, Antworten auf Auskunftsanfragen innerhalb von zwei Monaten und Berichte über das Entgeltgefälle für größere Arbeitgeber.",
        inside: [
          "**Vergütungsrichtlinie & Kriterien** — geschlechtsneutrale Regeln zum Anpassen und Teilen",
          "**Leitfaden für Recruiting und Führungskräfte** — was Sie in Anzeigen, Gesprächen und Gehaltsrunden sagen und nie fragen",
          "**Stellenbewertung & Gehaltsbänder** — jede Rolle nach Kompetenz, Belastung, Verantwortung und Arbeitsbedingungen",
          "**Entgeltdaten** — pseudonymisiert, mit automatischem Gesamt- und Stundenentgelt",
          "**Entgeltlücken-Rechner** — Gefälle je Kategorie mit automatischer 5-%-Warnung",
          "**Auskunftsanfragen** — mit automatischer Zwei-Monats-Frist",
          "**Umsetzungsplan Schritt für Schritt**, filterbar nach Unternehmensgröße",
          "**Mustertexte** — Gehaltsangabe in Stellenanzeigen, jährliche Information, Antwort auf eine Anfrage, Vertragsklausel"
        ],
        who: ["Arbeitgeber in der EU, ab etwa 10 Beschäftigten", "Personal- und Lohnabrechnung", "Recruiting und Führungskräfte", "Geschäftsführung, die sich auf das neue Gesetz vorbereitet"],
        rules: [
          { t: "Vor der Einstellung (Art. 5)", p: "Bewerber erhalten das Einstiegsgehalt oder die Spanne, und nach dem bisherigen Gehalt dürfen Sie nicht mehr fragen." },
          { t: "Auskunftsrecht (Art. 7)", p: "Beschäftigte können ihr Entgelt und das Durchschnittsentgelt vergleichbarer Kollegen nach Geschlecht erfragen. Sie antworten innerhalb von zwei Monaten." },
          { t: "Berichte zum Entgeltgefälle (Art. 9)", p: "Ab Juni 2027 für Arbeitgeber mit 150+ Beschäftigten, ab 2031 auch ab 100. Ein nicht begründbares Gefälle ab 5 % löst eine gemeinsame Entgeltbewertung aus." }
        ],
        faq: [
          ["Ab wann gelten die Regeln?", "Die Mitgliedstaaten mussten die Richtlinie bis zum 7. Juni 2026 umsetzen. Den genauen Start legt das nationale Gesetz fest. Das Kit baut auf der Richtlinie auf, die deutsche Ausgabe nennt den aktuellen Stand."],
          ["Wir haben weniger als 100 Beschäftigte. Betrifft uns das?", "Ja. Transparenz für Bewerber, das Verbot der Frage nach dem bisherigen Gehalt und das Auskunftsrecht gelten für alle Arbeitgeber. Nur die Berichtspflicht hängt von der Größe ab."],
          ["Was macht der Entgeltlücken-Rechner?", "Er berechnet aus Ihren pseudonymisierten Entgeltdaten das Gefälle je Beschäftigtenkategorie und markiert Werte ab 5 %, die Schwelle, auf die es nach der Richtlinie ankommt."]
        ]
      },
      vendor: {
        slug: "vendor-ai-supplier-kit",
        meta: { title: "Lieferanten- & KI-Dienstleister-Prüfung — DSGVO-Fragebogen & AV-Checkliste", desc: "Dienstleister und KI-Tools vor Vertragsschluss prüfen: Fragebogen, Checkliste für AV-Verträge nach Art. 28, Lieferantenregister und Prüfprotokoll. DSGVO, AI Act, NIS2." },
        label: "DSGVO + EU AI Act",
        h1: "Lieferanten- & KI-Prüfungs-Kit: *prüfen, bevor Sie unterschreiben.*",
        lead: "Jeder Dienstleister, der mit Ihren Daten arbeitet, und jedes KI-Tool Ihres Teams liegt nach der DSGVO in Ihrer Verantwortung. Dieses Kit gibt Ihnen ein strukturiertes Verfahren, um sie vor Vertragsschluss zu prüfen und das zu dokumentieren.",
        inside: [
          "**Lieferanten-Fragebogen** — versandfertige Fragen zu Datenschutz, Sicherheit, Unterauftragnehmern, KI, Notfall und Ausstieg",
          "**Bewertungsleitfaden** — wie Sie Antworten bewerten, typische Warnsignale und wie Sie entscheiden",
          "**Checkliste AV-Vertrag** — Mindestinhalt nach Art. 28 Abs. 3 DSGVO",
          "**Lieferantenregister** — jeder Dienstleister mit Rolle, Daten, Standort, Vertragsstatus und nächster Prüfung",
          "**Prüfprotokoll** — jede Bewertung mit Ergebnis, Belegen, Entscheidung und Auflagen",
          "**EU-Regeln im Überblick** — DSGVO, Drittlandübermittlung, AI Act und NIS2-Lieferkettenpflichten"
        ],
        who: ["Unternehmen, die SaaS- und KI-Tools einkaufen", "Einkauf und Betrieb", "IT- und Datenschutzkoordinatoren", "Agenturen mit Subunternehmern"],
        rules: [
          { t: "Auswahl von Auftragsverarbeitern (Art. 28)", p: "Sie dürfen nur Dienstleister einsetzen, die hinreichende Garantien bieten, und brauchen einen Vertrag mit dem Inhalt nach Art. 28 Abs. 3 DSGVO." },
          { t: "Übermittlung außerhalb der EU", p: "Dienstleister in Drittländern brauchen eine Grundlage, etwa das EU-US Data Privacy Framework oder Standardvertragsklauseln." },
          { t: "Sicherheit der Lieferkette", p: "Unternehmen im Anwendungsbereich von NIS2 müssen die Sicherheit ihrer Lieferanten steuern. Der Fragebogen deckt auch diese Fragen ab." }
        ],
        faq: [
          ["Was muss in einem AV-Vertrag stehen?", "Art. 28 Abs. 3 DSGVO nennt das Minimum: Verarbeitung nur auf Weisung, Vertraulichkeit, Sicherheitsmaßnahmen, Regeln für Unterauftragnehmer, Unterstützung bei Anfragen und Pannen, Löschung oder Rückgabe am Ende sowie Kontrollen. Die Checkliste geht jeden Punkt durch."],
          ["Muss ich auch große Anbieter wie Google oder Microsoft prüfen?", "Ja, aber anders. Einen eigenen Fragebogen beantworten diese Anbieter nicht, also bewerten Sie deren veröffentlichte Bedingungen, AV-Vertrag und Zertifizierungen. Der Leitfaden zeigt, wie Sie das dokumentieren."],
          ["Hilft das Kit bei KI-Tools?", "Ja. Der Fragebogen enthält KI-spezifische Fragen, etwa ob Ihre Daten zum Training genutzt werden, wo sie verarbeitet werden und wie Ergebnisse geprüft werden, und das Register erfasst die Risikoklasse nach AI Act."]
        ]
      }
    }
  }
};

// Journal article → the kit it should point to (articles without an entry show no kit box)
export const ARTICLE_KIT = {
  "gdpr-website-legal-document": "gdpr",
  "eu-ai-act-website": "ai",
  "cookie-banner-urteile": "gdpr",
  "cookiebanner-regels-ap": "gdpr"
};
