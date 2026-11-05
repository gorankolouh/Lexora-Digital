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
      langVal: "EN, DE, NL, ES, HR — country editions adapted to national law", formatVal: "Notion template or Word, Excel & PDF", accessVal: "Instantly after purchase, one-time payment",
      formatValN: "Notion template", langValN: "EU edition in English; country editions for DE/AT, NL, ES and HR", edHN: "Notion template", edLeadN: "This kit is currently available as a Notion template. The free Notion plan is enough.", coreH: "Also need GDPR or AI Act kits?", coreLead: "Our five core kits come as Notion templates or Word, Excel & PDF files. All five are in the EU Compliance Bundle for {bundle} instead of {full}."
    },
    kits: {
      nis2: {
        slug: "eu-nis2-compliance-kit",
        meta: { title: "EU NIS2 Compliance Kit — Notion Template for SMEs", desc: "NIS2 toolkit for SMEs: scope checker, Art. 21 control register, risk and supplier registers, incident log with 24 h / 72 h / 1-month deadlines. Notion template, €29.99." },
        label: "NIS2 · Directive (EU) 2022/2555",
        h1: "EU NIS2 Compliance Kit *for mid-sized businesses.*",
        lead: "NIS2 makes thousands of mid-sized companies responsible for cybersecurity, with management liability and 24-hour incident reporting. This kit turns the directive into a workspace you can actually run.",
        inside: [
          "**Scope Checker** — enter sector, headcount and turnover; a formula suggests essential, important or out of scope",
          "**Authority Directory** — national law, authority, CSIRT and registration route for DE, AT, NL, BE, ES and HR, with official links",
          "**Governance & Management Board** — approvals, oversight and training of the management body (Art. 20)",
          "**Control Register** — the 10 minimum measures of Art. 21(2), each with owner, status and evidence",
          "**Risk Register**, **Supplier Register** and **Policy Library**, linked to the controls",
          "**Incident Log** — automatic 24 h / 72 h / 1-month NIS2 deadlines plus the 72 h GDPR breach deadline",
          "**Evidence Library** and **Training Tracker** for audits and management training",
          "**Setup guide**, **incident reporting playbook** and a ready-to-send **supplier security questionnaire**"
        ],
        who: ["IT managers and compliance leads", "Managing directors of companies in scope", "Information security officers", "Consultants who support SMEs"],
        rules: [{ t: "Scope and registration", p: "NIS2 covers medium-sized and large organisations in 18 sectors, sorted into essential and important entities. Most of them must register with their national authority." }, { t: "Risk-management measures", p: "Art. 21(2) lists ten minimum measures, from risk analysis and incident handling to supply-chain security, encryption and access control." }, { t: "Management and reporting", p: "The management body approves and oversees the measures and must be trained (Art. 20). Significant incidents: early warning within 24 hours, notification within 72 hours, final report within one month (Art. 23)." }],
        faq: [
          ["Does NIS2 apply to my company?", "As a rule it applies to medium-sized and large organisations (from 50 employees or €10 million annual turnover) in the sectors listed in Annexes I and II, and to some entities regardless of size. The scope checker suggests essential, important or out of scope; the national law decides the details."],
          ["Is NIS2 already law in my country?", "It depends on the country. The authority directory lists the national law and its status for Germany, Austria, the Netherlands, Belgium, Spain and Croatia, with official links. For Germany & Austria, the Netherlands, Spain and Croatia there are also localised editions of this kit."],
          ["Is there a Word or Excel edition?", "Not yet. This kit is currently available as a Notion template only. The free Notion plan is enough: after purchase you click “Duplicate” and the kit is copied into your own workspace."]
        ]
      },
      einv: {
        slug: "eu-e-invoicing-readiness-kit",
        meta: { title: "EU E-Invoicing Readiness Kit — Notion Template (EN 16931, Peppol, ViDA)", desc: "Track 18 EU e-invoicing mandates with live countdowns, plan your readiness, check the EN 16931 core fields and compare providers. Notion template, €29.99." },
        label: "E-invoicing · EN 16931 · ViDA",
        h1: "EU E-Invoicing Readiness Kit: *one plan for every mandate.*",
        lead: "Belgium and Croatia switched in 2026, France and Poland are rolling out, Germany, Spain and the Netherlands follow, and ViDA arrives in 2030. This kit shows which mandates apply to you and gets your business ready.",
        inside: [
          "**Mandate Tracker** — 18 mandates (BE, HR, DE, FR, PL, ES, IT, NL, EU ViDA) with live countdowns and official sources",
          "**Readiness Plan** — 15 tasks across 7 workstreams, linked to each mandate",
          "**Invoice Data Checklist** — the 30 core EN 16931 fields, so your invoices aren't rejected",
          "**Provider Comparison** — compare software and access points on formats, countries and price",
          "**Partner Directory** — your customers' and suppliers' e-invoice addresses and readiness",
          "**Setup guide** with country quick notes and a **partner announcement email**",
          "**Example rows**, an FAQ and a key-dates table"
        ],
        who: ["Small and mid-sized businesses trading across borders", "Finance teams and bookkeepers", "Accounting firms advising clients", "Businesses invoicing customers in several EU countries"],
        rules: [{ t: "National mandates", p: "Member states are introducing B2B e-invoicing one by one, each with its own dates, formats and platforms. The mandate tracker keeps them in one place, with official sources." }, { t: "EN 16931", p: "The European standard for the core content of an e-invoice. Invoices that miss required fields can be rejected by the recipient's system." }, { t: "ViDA", p: "VAT in the Digital Age makes e-invoicing and digital reporting the rule for intra-EU B2B transactions from 2030." }],
        faq: [
          ["Which countries does the kit cover?", "Belgium, Croatia, Germany, France, Poland, Spain, Italy, the Netherlands and EU ViDA: 18 mandates in total, each with its dates and an official source. Content verified on 29 October 2026."],
          ["Do I need new software?", "Often, but not always. The provider comparison helps you check whether your current software supports the formats you need, or which provider or access point to choose."],
          ["Is there a Word or Excel edition?", "Not yet. This kit is currently available as a Notion template only. The free Notion plan is enough: after purchase you click “Duplicate” and the kit is copied into your own workspace."]
        ]
      },
      wb: {
        slug: "eu-whistleblower-channel-kit",
        meta: { title: "EU Whistleblower Channel Kit — Notion Template for Employers with 50+ Staff", desc: "Set up an internal reporting channel under Directive (EU) 2019/1937: setup checklist, case register with 7-day and 3-month deadlines, policy and letter templates. €29.99." },
        label: "Whistleblowing · Directive (EU) 2019/1937",
        h1: "EU Whistleblower Channel Kit: *set it up, handle every report on time.*",
        lead: "Every employer with 50 or more workers needs an internal reporting channel under the EU Whistleblower Directive. This kit helps you set it up properly and handle every report on time.",
        inside: [
          "**Channel Setup Checklist** — 15 tasks with the article behind each one",
          "**Handlers & Roles** — designated handler and deputy, impartiality and training",
          "**National Law Directory** — law, external authority and retention rule for DE, AT, NL, BE, ES and HR",
          "**Case Register** — automatic acknowledgement (7 days), feedback (3 months) and deletion dates",
          "**Whistleblowing policy template**, ready to adapt and publish",
          "**Message templates** — acknowledgement, questions, feedback and closing letters",
          "**Setup guide** with confidentiality and data-protection tips, plus an FAQ"
        ],
        who: ["HR teams", "Legal and compliance teams", "Managing directors of companies with 50+ employees", "Advisers who set up channels for clients"],
        rules: [{ t: "Who needs a channel", p: "Private employers with 50 or more workers must set up internal reporting channels (Art. 8). Some sectors, such as financial services, must do so regardless of size." }, { t: "Deadlines", p: "Acknowledge receipt within 7 days and give feedback within a reasonable time of no more than 3 months (Art. 9)." }, { t: "Confidentiality and protection", p: "The reporter's identity must stay confidential (Art. 16) and retaliation is prohibited (Art. 19). Records are kept only as long as necessary." }],
        faq: [
          ["We have fewer than 50 employees. Do we need this?", "Usually not under the directive, unless you work in financial services or another sector covered regardless of size. Some countries go further, so check the national law in the directory."],
          ["Can an external provider run the channel?", "Yes. A third party can receive reports on your behalf, but the duties stay with you. The kit helps you document roles and deadlines either way."],
          ["Is there a Word or Excel edition?", "Not yet. This kit is currently available as a Notion template only. The free Notion plan is enough: after purchase you click “Duplicate” and the kit is copied into your own workspace."]
        ]
      },
      eaa: {
        slug: "eu-accessibility-act-kit",
        meta: { title: "European Accessibility Act (EAA) Compliance Kit — WCAG 2.1 AA Notion Template", desc: "EAA toolkit for online shops and digital services: scope checker, WCAG 2.1 AA audit checklist (50 criteria), issue tracker and accessibility statement template. €29.99." },
        label: "EAA · Directive (EU) 2019/882",
        h1: "European Accessibility Act Kit: *from scope check to published statement.*",
        lead: "Since 28 June 2025 the European Accessibility Act applies to online shops, banking, e-books, transport and many other services. This kit gives you a clear process from scope check to published statement.",
        inside: [
          "**Scope Checker** — which products and services are covered, with the microenterprise exemption built in",
          "**Authority Directory** — national EAA law and market surveillance authority per country, with official links",
          "**Digital Assets** — your websites, shops, apps and documents in one list",
          "**WCAG 2.1 AA Audit Checklist** — all 50 success criteria with a plain-English “what to check”",
          "**Issue Tracker** — every failure with severity, owner, fix-by date and retest",
          "**Feedback & Complaints Log** and **Disproportionate Burden Assessments** (Art. 14, Annex VI)",
          "**Setup guide** and an **accessibility statement template**, ready to adapt",
          "**Example rows**, an FAQ and a key-facts table"
        ],
        who: ["E-commerce owners", "Web agencies", "Product and marketing teams", "Service providers selling to consumers in the EU"],
        rules: [{ t: "Since 28 June 2025", p: "The EAA applies to covered products and services placed on the EU market, including online shops, banking, e-books, transport and electronic communications." }, { t: "Microenterprise exemption", p: "Microenterprises providing services (fewer than 10 staff and no more than €2 million turnover or balance sheet) are exempt from the requirements for services." }, { t: "WCAG 2.1 AA in practice", p: "The harmonised standard EN 301 549 builds on WCAG 2.1 level AA, which is why the audit checklist covers all 50 success criteria." }],
        faq: [
          ["Does the EAA apply to my online shop?", "If you sell to consumers in the EU and are not a microenterprise, very likely. The scope checker walks you through the covered products and services."],
          ["What is a disproportionate burden?", "A business can argue that a requirement would be a disproportionate burden (Art. 14, Annex VI), but it has to document the assessment. The kit includes a log for exactly that."],
          ["Is there a Word or Excel edition?", "Not yet. This kit is currently available as a Notion template only. The free Notion plan is enough: after purchase you click “Duplicate” and the kit is copied into your own workspace."]
        ]
      },
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
      langVal: "DE, EN, NL, ES, HR — Länderausgaben an nationales Recht angepasst", formatVal: "Notion-Vorlage oder Word, Excel & PDF", accessVal: "Sofort nach dem Kauf, Einmalzahlung",
      formatValN: "Notion-Vorlage", langValN: "Ausgabe für DE & AT; EU-Ausgabe auf Englisch sowie Ausgaben für NL, ES und HR", edHN: "Notion-Vorlage", edLeadN: "Dieses Kit gibt es derzeit als Notion-Vorlage. Der kostenlose Notion-Tarif reicht.", coreH: "Brauchen Sie auch DSGVO- oder AI-Act-Kits?", coreLead: "Unsere fünf Basis-Kits gibt es als Notion-Vorlage oder als Word-, Excel- und PDF-Dateien. Alle fünf stecken im EU Compliance Bundle für {bundle} statt {full}."
    },
    kits: {
      nis2: {
        slug: "nis2-kit-deutschland-oesterreich",
        meta: { title: "NIS2-Kit Deutschland & Österreich — BSIG & NISG 2026 als Notion-Vorlage", desc: "NIS2 umsetzen: Betroffenheitsprüfung für DE und AT, Maßnahmen nach § 30 BSIG, Register und Vorfallmeldungen mit automatischen Fristen. Notion-Vorlage, 29,99 €." },
        label: "NIS2 · BSIG · NISG 2026",
        h1: "NIS2-Compliance-Kit *für Deutschland und Österreich.*",
        lead: "Seit dem 6. Dezember 2025 gilt in Deutschland das neue BSI-Gesetz, in Österreich seit 1. Oktober 2026 das NISG 2026. Tausende Unternehmen müssen sich registrieren, Maßnahmen umsetzen und Vorfälle binnen 24 Stunden melden.",
        inside: [
          "**Betroffenheitsprüfung** — besonders wichtige / wesentliche oder wichtige Einrichtung, getrennt für DE und AT",
          "**Behördenverzeichnis** — BSI, Bundesamt für Cybersicherheit, Fristen und Registrierungswege (inkl. Schweiz zur Orientierung)",
          "**Geschäftsleitung & Rollen** — Billigung, Überwachung und Schulungspflicht nach § 38 BSIG",
          "**Maßnahmenregister** — alle Maßnahmen nach § 30 Abs. 2 BSIG mit Verantwortlichen und Nachweisen",
          "**Risikoregister**, **Lieferantenregister**, **Nachweise**, **Schulungen** und **Richtlinien** (10 Vorlagen)",
          "**Vorfallregister** — Frühwarnung 24 h, Meldung 72 h, Abschlussmeldung 1 Monat und DSGVO 72 h werden automatisch berechnet",
          "**Einrichtungsleitfaden**, **Meldeleitfaden** und **Lieferanten-Fragebogen Informationssicherheit**",
          "**Beispieldaten** (Stuttgarter Maschinenbauer, Linzer Logistiker), FAQ und Überblickstabelle"
        ],
        who: ["Geschäftsführung im Mittelstand", "IT-Leitung", "Informationssicherheitsbeauftragte", "Beraterinnen und Berater"],
        rules: [{ t: "Betroffenheit und Registrierung", p: "Besonders wichtige und wichtige Einrichtungen müssen sich in Deutschland beim BSI registrieren; in Österreich gilt die Registrierungspflicht nach dem NISG 2026." }, { t: "Risikomanagementmaßnahmen", p: "§ 30 Abs. 2 BSIG nennt die Mindestmaßnahmen, von Risikoanalyse und Vorfallbewältigung bis zu Lieferkettensicherheit, Verschlüsselung und Zugriffskontrolle." }, { t: "Geschäftsleitung und Meldepflichten", p: "Die Geschäftsleitung billigt und überwacht die Maßnahmen und muss an Schulungen teilnehmen (§ 38 BSIG). Erhebliche Vorfälle: Frühwarnung binnen 24 Stunden, Meldung binnen 72 Stunden, Abschlussmeldung nach einem Monat." }],
        faq: [
          ["Woher weiß ich, ob mein Unternehmen betroffen ist?", "Maßgeblich sind Sektor, Beschäftigtenzahl und Umsatz bzw. Bilanzsumme. Die Betroffenheitsprüfung im Kit führt Sie getrennt für Deutschland und Österreich durch die Kriterien und zeigt das Ergebnis an."],
          ["Was muss die Geschäftsleitung tun?", "Sie muss die Risikomanagementmaßnahmen billigen, ihre Umsetzung überwachen und regelmäßig an Schulungen teilnehmen. Das Kit dokumentiert Billigung, Überwachung und Schulungen, damit Sie das nachweisen können."],
          ["Gibt es eine Word- oder Excel-Ausgabe?", "Noch nicht. Dieses Kit gibt es derzeit nur als Notion-Vorlage. Der kostenlose Notion-Tarif reicht: Nach dem Kauf klicken Sie auf „Duplizieren“, und das Kit liegt in Ihrem Workspace."]
        ]
      },
      einv: {
        slug: "e-rechnung-kit-deutschland-oesterreich",
        meta: { title: "E-Rechnungs-Kit Deutschland & Österreich — XRechnung & ZUGFeRD als Notion-Vorlage", desc: "E-Rechnungspflicht vorbereiten: Betroffenheits-Check mit 800.000-€-Grenze, Fristen, Umsetzungsplan, Pflichtangaben-Check und Software-Vergleich. Notion-Vorlage, 29,99 €." },
        label: "E-Rechnung · XRechnung · ZUGFeRD",
        h1: "E-Rechnungs-Kit *für Deutschland und Österreich.*",
        lead: "Seit 2025 müssen alle Unternehmen in Deutschland E-Rechnungen empfangen können. Ab 1. Januar 2027 müssen Unternehmen mit mehr als 800.000 € Umsatz XRechnung oder ZUGFeRD ausstellen, ab 2028 alle. Das Kit berücksichtigt bereits das BMF-Schreiben vom 15.10.2026.",
        inside: [
          "**Betroffenheits-Check** — ab wann Sie ausstellen müssen, inkl. 800.000-€-Grenze und Ausnahmen",
          "**Pflichten & Fristen** — Deutschland, Österreich und die Länder Ihrer Geschäftspartner (BE, FR, PL, ES, IT, HR, EU-ViDA)",
          "**Umsetzungsplan** — Aufgaben von der Bestandsaufnahme bis zur Archivierung",
          "**Pflichtangaben-Check (UStG ↔ EN 16931)** — damit Ihre Rechnungen nicht abgelehnt werden",
          "**Software-Vergleich** — XRechnung, ZUGFeRD, Peppol, DATEV, GoBD, ebInterface",
          "**Geschäftspartner** — Formate und E-Rechnungs-Bereitschaft Ihrer Kunden und Lieferanten",
          "**Einrichtungsleitfaden** und **Mustertexte für Kunden und Lieferanten**",
          "**Beispieldaten** (Stuttgarter GmbH, Regensburger Handwerksbetrieb, Kleinunternehmerin, Linzer Logistiker), FAQ"
        ],
        who: ["KMU und Handwerksbetriebe", "Selbstständige", "Buchhaltung und Finanzteams", "Steuerkanzleien"],
        rules: [{ t: "Empfangen seit 2025", p: "Seit dem 1. Januar 2025 müssen alle Unternehmen in Deutschland E-Rechnungen im B2B-Bereich empfangen können." }, { t: "Ausstellen ab 2027 und 2028", p: "Ab 1. Januar 2027 müssen Unternehmen mit mehr als 800.000 € Vorjahresumsatz E-Rechnungen ausstellen, ab 1. Januar 2028 alle." }, { t: "Formate und Pflichtangaben", p: "Zulässig sind strukturierte Formate nach EN 16931 wie XRechnung und ZUGFeRD. Fehlen Pflichtangaben nach § 14 UStG, kann die Rechnung abgelehnt werden." }],
        faq: [
          ["Reicht ein PDF per E-Mail noch?", "Für den Empfang nicht: Seit 2025 muss jedes Unternehmen in Deutschland E-Rechnungen annehmen können. Für das Ausstellen gelten Übergangsfristen, abhängig vom Umsatz. Der Betroffenheits-Check zeigt, ab wann es für Sie gilt."],
          ["Was gilt für Österreich und andere Länder?", "Das Kit zeigt Pflichten und Fristen für Österreich und die Länder Ihrer Geschäftspartner (BE, FR, PL, ES, IT, HR und EU-ViDA), jeweils mit Rechtsstand Oktober 2026 und Quellen."],
          ["Gibt es eine Word- oder Excel-Ausgabe?", "Noch nicht. Dieses Kit gibt es derzeit nur als Notion-Vorlage. Der kostenlose Notion-Tarif reicht: Nach dem Kauf klicken Sie auf „Duplizieren“, und das Kit liegt in Ihrem Workspace."]
        ]
      },
      wb: {
        slug: "hinweisgeberschutz-kit-hinschg-hschg",
        meta: { title: "Hinweisgeberschutz-Kit HinSchG & HSchG — Interne Meldestelle als Notion-Vorlage", desc: "Interne Meldestelle einrichten: Checkliste, Fallregister mit 7-Tage- und 3-Monats-Fristen, Muster-Hinweisgeberrichtlinie und Mustertexte für DE und AT. 29,99 €." },
        label: "HinSchG · HSchG",
        h1: "Hinweisgeberschutz-Kit: *Meldestelle einrichten, Fristen einhalten.*",
        lead: "Ab 50 Beschäftigten ist eine interne Meldestelle Pflicht, nach dem HinSchG in Deutschland und dem HSchG in Österreich. Dieses Kit hilft, die Meldestelle sauber aufzusetzen und jede Meldung fristgerecht zu bearbeiten.",
        inside: [
          "**Einrichtungs-Checkliste** — 16 Schritte mit Paragrafen",
          "**Meldestelle & Zuständigkeiten** — Meldestellenbeauftragte, Vertretung, Unabhängigkeit, Schulung",
          "**Recht & externe Meldestellen** — HinSchG, HSchG, Bundesamt für Justiz, BAK, Bußgelder, mit Links",
          "**Fallregister** — Eingangsbestätigung (7 Tage), Rückmeldung (3 Monate) und Löschfrist (DE 3 Jahre, AT 5 Jahre) automatisch berechnet",
          "**Muster-Hinweisgeberrichtlinie** zum Anpassen und Veröffentlichen",
          "**Mustertexte für die Meldestelle** — Bestätigung, Rückfragen, Rückmeldung, Abschluss",
          "**Einrichtungsleitfaden** mit Hinweisen zu Vertraulichkeit und Datenschutz, FAQ"
        ],
        who: ["Personalabteilungen", "Compliance-Verantwortliche", "Geschäftsführung ab 50 Beschäftigten", "Kanzleien und Berater"],
        rules: [{ t: "Pflicht ab 50 Beschäftigten", p: "Beschäftigungsgeber mit in der Regel mindestens 50 Beschäftigten müssen eine interne Meldestelle einrichten, in Deutschland nach dem HinSchG, in Österreich nach dem HSchG." }, { t: "Fristen", p: "Die Eingangsbestätigung geht spätestens nach 7 Tagen raus, die Rückmeldung an die hinweisgebende Person innerhalb von 3 Monaten." }, { t: "Vertraulichkeit und Dokumentation", p: "Die Identität der hinweisgebenden Person bleibt vertraulich. Die Dokumentation wird in Deutschland drei Jahre nach Abschluss des Verfahrens gelöscht, in Österreich nach fünf Jahren." }],
        faq: [
          ["Darf eine externe Stelle die Meldestelle betreiben?", "Ja. Sie können Dritte, zum Beispiel eine Kanzlei, mit den Aufgaben der Meldestelle beauftragen. Die Pflicht, Hinweisen nachzugehen und Missstände abzustellen, bleibt beim Unternehmen."],
          ["Was droht ohne Meldestelle?", "In Deutschland ein Bußgeld bis 20.000 €. Ebenso wichtig: Ohne gut erreichbare interne Meldestelle wenden sich Beschäftigte eher direkt an externe Stellen."],
          ["Gibt es eine Word- oder Excel-Ausgabe?", "Noch nicht. Dieses Kit gibt es derzeit nur als Notion-Vorlage. Der kostenlose Notion-Tarif reicht: Nach dem Kauf klicken Sie auf „Duplizieren“, und das Kit liegt in Ihrem Workspace."]
        ]
      },
      eaa: {
        slug: "barrierefreiheit-kit-bfsg-bafg",
        meta: { title: "Barrierefreiheits-Kit BFSG & BaFG — WCAG-2.1-AA-Prüfkatalog als Notion-Vorlage", desc: "BFSG und BaFG umsetzen: Anwendungsbereich prüfen, WCAG-2.1-AA-Prüfkatalog mit 50 Kriterien, Mängelliste und Mustervorlage zur Barrierefreiheit. 29,99 €." },
        label: "BFSG · BaFG",
        h1: "Barrierefreiheits-Kit *nach BFSG und BaFG.*",
        lead: "Seit dem 28. Juni 2025 gelten in Deutschland das Barrierefreiheitsstärkungsgesetz und in Österreich das Barrierefreiheitsgesetz. Onlineshops und digitale Dienste müssen barrierefrei sein. Dieses Kit führt Sie von der Prüfung bis zur veröffentlichten Information zur Barrierefreiheit.",
        inside: [
          "**Anwendungsbereich prüfen** — Produkte und Dienstleistungen, mit Ausnahme für Kleinstunternehmen",
          "**Behörden & Anlaufstellen** — MLBF, Sozialministeriumservice, Bundesfachstelle, mit Sanktionen und Links",
          "**Digitale Angebote** — Websites, Shops, Apps und Dokumente im Überblick",
          "**WCAG-2.1-AA-Prüfkatalog** — alle 50 Kriterien mit verständlicher Prüfanleitung",
          "**Mängelliste** — jeder Mangel mit Schweregrad, Verantwortlichem, Frist und Nachtest",
          "**Rückmeldungen & Beschwerden** und **Unverhältnismäßigkeitsprüfungen** (§§ 16, 17 BFSG)",
          "**Einrichtungsleitfaden**, **Mustervorlage: Informationen zur Barrierefreiheit** und **Abmahnung erhalten? Sofort-Checkliste**",
          "**Beispieldaten** (Münchner Onlineshop, österreichischer Kleinshop), FAQ und Überblickstabelle"
        ],
        who: ["Onlinehändler", "Webagenturen", "Dienstleister mit Endkunden", "Produkt- und Marketingteams"],
        rules: [{ t: "Seit 28. Juni 2025", p: "BFSG (Deutschland) und BaFG (Österreich) setzen den European Accessibility Act um: Onlineshops und viele digitale Dienstleistungen für Verbraucher müssen barrierefrei sein." }, { t: "Ausnahme für Kleinstunternehmen", p: "Kleinstunternehmen, die Dienstleistungen erbringen (weniger als 10 Beschäftigte und höchstens 2 Mio. € Umsatz oder Bilanzsumme), sind von den Anforderungen an Dienstleistungen ausgenommen." }, { t: "WCAG 2.1 AA als Maßstab", p: "Die harmonisierte Norm EN 301 549 baut auf WCAG 2.1 Stufe AA auf. Deshalb enthält der Prüfkatalog alle 50 Erfolgskriterien." }],
        faq: [
          ["Gilt das BFSG für meinen Onlineshop?", "Wenn Sie an Verbraucher verkaufen und kein Kleinstunternehmen sind, sehr wahrscheinlich. Die Prüfung des Anwendungsbereichs führt Sie durch die erfassten Produkte und Dienstleistungen."],
          ["Was tun bei einer Abmahnung?", "Fristen prüfen und nichts vorschnell unterschreiben. Das Kit enthält eine Sofort-Checkliste für diesen Fall; für die rechtliche Bewertung ziehen Sie bitte eine Anwältin oder einen Anwalt hinzu."],
          ["Gibt es eine Word- oder Excel-Ausgabe?", "Noch nicht. Dieses Kit gibt es derzeit nur als Notion-Vorlage. Der kostenlose Notion-Tarif reicht: Nach dem Kauf klicken Sie auf „Duplizieren“, und das Kit liegt in Ihrem Workspace."]
        ]
      },
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
  "ai-agents-human-judgment": "ai",
  "ki-sicherheit-unternehmen": "ai",
  "bfsg-website-barrierefrei-pflicht": "eaa",
  "avg-fouten-mkb-website": "gdpr",
  "cookie-banner-urteile": "gdpr",
  "cookiebanner-regels-ap": "gdpr"
};
