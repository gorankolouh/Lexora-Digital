// English dictionary — every language file follows this exact structure.
// *text* → serif lime accent · ~text~ → dimmed text · [[text]] → visible placeholder (replace before launch)
export default {
  lang: "en",
  locale: "en_GB",
  slugs: {
    home: "", web: "web-design/", compliance: "digital-compliance/", check: "gdpr-cookie-check/", language: "translation/",
    creative: "creative-services/", work: "work/", journal: "journal/", about: "about/", contact: "contact/",
    privacy: "privacy/", cookies: "cookies/", imprint: "legal-notice/", accessibility: "accessibility/", shop: "templates/"
  },
  ui: {
    skip: "Skip to content", home: "Home", mainNav: "Main", contents: "Contents",
    menu: "Menu", language: "Language", soon: "soon", services: "Services", startProject: "Start a project"
  },
  nav: {
    work: "Work", journal: "Journal", about: "About", contact: "Contact", shop: "Templates",
    web: ["Web Design & Development", "Websites, landing pages, launch", "</>"],
    compliance: ["Digital Compliance", "GDPR, cookies, EU digital rules", "§"],
    check: ["GDPR & Cookie Check", "Free check · fixed for €99", "✓"],
    language: ["Translation", "Five languages, every direction", "⇄"],
    creative: ["Creative Services", "Identity, graphics, media editing", "Aa"]
  },
  meta: {
    home: { title: "Lexora Digital — Web, Law, Language & Design Studio", desc: "Independent digital studio for websites, GDPR and cookie compliance, translation and design — for businesses across Europe, in five languages." },
    web: { title: "Web Design & Development — Lexora Digital", desc: "Custom websites and landing pages for small and medium-sized businesses. Starter website from €99, responsive, privacy-friendly and launched on your domain." },
    compliance: { title: "Digital Compliance: GDPR, Cookies & EU Rules — Lexora Digital", desc: "Practical help with GDPR, cookie consent, privacy notices and EU digital rules for business websites — information and implementation, not legal advice." },
    check: { title: "Free GDPR & Cookie Check — We Fix It for €99 | Lexora Digital", desc: "GDPR, Cookies & Co.: a free check of your website's consent, tracking and legal pages. If we find issues, we fix them for a fixed €99." },
    language: { title: "Translation Services in English, German, Dutch, Spanish & Croatian — Lexora Digital", desc: "Business, legal and website translation between English, German, Dutch, Spanish and Croatian — with a focus on clear, natural language." },
    creative: { title: "Creative Services: Identity, Graphics & Media Editing — Lexora Digital", desc: "Visual identity, brand assets, graphic design and selected photo, video, audio and voice editing for businesses." },
    work: { title: "Work — Concept Projects | Lexora Digital", desc: "Website concepts for beauty, trades and automotive businesses — complete, responsive designs that show how Lexora Digital works." },
    journal: { title: "Journal — Guides to GDPR, the DSA and the AI Act | Lexora Digital", desc: "Plain-language guides to the European rules that shape business websites: GDPR and cookies, the Digital Services Act and the EU AI Act." },
    about: { title: "About — Lexora Digital", desc: "An independent digital studio combining web design, practical knowledge of European digital rules, translation and creative work." },
    contact: { title: "Contact — Lexora Digital", desc: "Tell us about your project: websites, design, GDPR and cookie compliance or translation. We reply in your language." },
    privacy: { title: "Privacy Policy — Lexora Digital", desc: "How Lexora Digital processes personal data on this website." },
    cookies: { title: "Cookie Policy — Lexora Digital", desc: "This website uses no tracking or advertising cookies. Here is exactly what is stored and why." },
    imprint: { title: "Legal Notice — Lexora Digital", desc: "Provider information for lexoradigital.com." },
    shop: {
      title: "Notion Templates for EU Compliance: GDPR, AI Act & more — Lexora Digital",
      desc: "Ready-to-use Notion kits for the GDPR, the EU AI Act, AI workplace policies, pay transparency and supplier checks — in English, German, Dutch, Spanish and Croatian."
    },
    accessibility: { title: "Accessibility Statement — Lexora Digital", desc: "Our accessibility goals for this website, known limitations and how to give feedback." }
  },

  home: {
    hero: {
      eyebrow: "Independent digital studio · Europe & beyond",
      h1: ["Digital presence.", "Designed with *purpose.*"],
      lead: "We build sophisticated websites, make them GDPR and cookie compliant, translate them into five languages and bring creative ideas to life — with clear communication across borders.",
      cta1: "Explore our work", cta2: "Discuss your project",
      langs: "Working in"
    },
    intro: {
      statement: "Good digital work does more than look good. ~It earns trust, works for everyone and speaks your customers' language.~",
      p: [
        "A website is often the first conversation a customer has with your business. It should look considered, load quickly, work on every screen, treat visitors' data with respect — and read naturally in their language.",
        "That is why we bring design, development, digital compliance and translation into one process. The result is a website that makes your business more credible, more accessible and ready for customers across Europe."
      ],
      facts: [
        ["Credible", "A clear, confident presence that reflects the quality of your work."],
        ["Compliant", "Privacy, cookies and EU digital rules considered from the start."],
        ["Multilingual", "Natural, accurate content in English, German, Dutch, Spanish and Croatian."]
      ]
    },
    disc: {
      label: "What we do",
      h2: "Four disciplines. One studio.",
      lead: "Most businesses need more than a website. We combine skills that usually sit in four different places — and the best work happens where they overlap.",
      core: "LEXORA",
      caption: "Where web, law, language and design overlap: websites that look right, work properly, treat data with care and speak to every customer.",
      cards: [
        { key: "web", route: "web", g: "</>", word: "Web", title: "Websites that make a business easier to trust.",
          p: "Custom websites and landing pages, responsive design, improvements to existing sites, deployment and a clear handover. Starter websites from €99.",
          tags: ["Custom websites", "Landing pages", "Responsive design", "Improvements", "Deployment"], link: "Web design & development" },
        { key: "law", route: "compliance", g: "§", word: "Law", title: "Websites that respect the people using them.",
          p: "Consultation and practical support on GDPR, cookies and privacy notices — including a free website check and a fixed-price €99 fix.",
          tags: ["GDPR & cookies", "Consent setup", "Privacy pages", "EU digital rules"],
          note: "General information and practical website implementation. We are not a law firm and do not provide legal advice or representation.", link: "Digital compliance" },
        { key: "language", route: "language", g: "⇄", word: "Language", title: "Content that reads as if it was written in your language.",
          p: "Translation of websites, business and legal documents between English, German, Dutch, Spanish and Croatian.",
          tags: ["Website localisation", "Business documents", "Legal texts", "Proofreading"], link: "Translation services" },
        { key: "design", route: "creative", g: "Aa", word: "Design", title: "Visual work with a clear point of view.",
          p: "Visual identity, brand assets and graphic design — plus selected photo, video, audio and voice editing.",
          tags: ["Visual identity", "Brand assets", "Graphic design", "Photo & video", "Audio & voice"], link: "Creative services" }
      ]
    },
    focus: { label: "In focus", h2: "Three services, *one standard.*", lead: "Websites, GDPR and cookie compliance, and translation — each built with the same care for detail." },
    work: {
      label: "Selected work",
      h2: "Concept projects, built to the standard of real ones.",
      p: "Each concept is a complete, responsive website designed for a specific kind of business. They demonstrate our approach — they are not commissioned client work.",
      all: "View all work", badge: "Concept", count: "3 concepts · more in preparation", cta: "View case study",
      items: [
        { slug: "studio-rosalie", img: "rosalie", cat: "Beauty & personal care", title: "Studio Rosalie",
          p: "A calm, premium one-page site for a beauty studio: warm rosé palette, editorial serif typography and a structure built around booking an appointment.",
          svc: ["Web design", "Visual direction", "Responsive build"], alt: "Studio Rosalie beauty salon website concept on desktop and mobile" },
        { slug: "mustermann-sanitaer", img: "mustermann", cat: "Trades & home services", title: "Mustermann Sanitär",
          p: "A clear, trustworthy site for a plumbing and heating business, built around one goal: getting the phone to ring.",
          svc: ["Web design", "Responsive build", "Conversion structure"], alt: "Plumbing and heating company website concept on desktop and mobile" },
        { slug: "kfz-werkstatt", img: "kfz", cat: "Automotive & repair", title: "Kfz-Werkstatt",
          p: "A bold, technical look for an independent car repair workshop, with services, trust points and appointment requests up front.",
          svc: ["Web design", "Art direction", "Responsive build"], alt: "Car repair workshop website concept on desktop and mobile" }
      ]
    },
    trust: {
      label: "Digital compliance",
      h2: "Design and compliance belong in the same conversation.",
      lead: "Cookie banners, contact forms and privacy notices are part of the user experience. We help you understand which European rules may apply to your website — and build them in properly, rather than adding them at the end.",
      cta: "Explore digital compliance",
      disclaimer: "General information, not legal advice. Whether a rule applies depends on your business, your website and your country. For advice on your situation, consult a qualified lawyer.",
      cols: { req: "Applies to most business websites", ctx: "Depends on your business", gp: "Good practice" },
      reviewed: "Last reviewed October 2026 · sources: EUR-Lex",
      topics: [
        { t: "Personal data & the GDPR", s: "req", ref: "Regulation (EU) 2016/679", p: "Applies whenever a website processes personal data — contact forms, newsletter sign-ups, analytics, even server logs." },
        { t: "Cookie consent & tracking", s: "req", ref: "Directive 2002/58/EC, Art. 5(3)", p: "Non-essential cookies and similar tracking generally need prior consent. Strictly necessary storage does not." },
        { t: "Privacy notices", s: "req", ref: "GDPR Art. 13–14", p: "Visitors must be told who processes their data, why, on what legal basis, and what their rights are." },
        { t: "Forms & data collection", s: "req", ref: "GDPR Art. 5, 25, 32", p: "Collect only what you need, protect it in transit and decide how long you keep it." },
        { t: "Provider information", s: "ctx", ref: "Directive 2000/31/EC, Art. 5 · DE: § 5 DDG", p: "Commercial websites must identify the provider. Germany and Austria have specific, detailed legal-notice (Impressum) rules." },
        { t: "Digital accessibility", s: "ctx", ref: "Directive (EU) 2019/882", p: "The European Accessibility Act covers certain products and services, such as e-commerce, since June 2025. Microenterprises providing services are exempt." },
        { t: "Digital Services Act", s: "ctx", ref: "Regulation (EU) 2022/2065", p: "Relevant if you host user content or run an online platform or marketplace. A typical company website is usually not affected." },
        { t: "EU AI Act", s: "ctx", ref: "Regulation (EU) 2024/1689, as amended by (EU) 2026/1744", p: "Relevant if you develop or use AI systems, such as chatbots or AI-generated content. Obligations apply in phases; several dates were moved in 2026." },
        { t: "Accessible design", s: "gp", ref: "WCAG 2.2, level AA", p: "Readable contrast, keyboard navigation and clear structure help every visitor — even where not legally required." },
        { t: "Privacy by default", s: "gp", ref: "Lexora standard", p: "No unnecessary trackers, self-hosted fonts and honest consent choices with equal Accept and Reject options." }
      ]
    },
    checkBand: {
      label: "GDPR, Cookies & Co.",
      h2: "Is your website GDPR and cookie compliant? *Find out for free.*",
      lead: "We check consent, tracking, privacy policy and legal pages. If we find issues, we fix them for one fixed price.",
      priceFree: "€0", priceFix: "€99", free: "The check", fix: "The fix — one-time", cta: "Check my website"
    },
    process: {
      label: "Our approach",
      h2: "A clear process, without surprises.",
      lead: "Every project follows the same four steps, with a defined scope and an agreed price before work begins.",
      steps: [
        ["Discover", "We get to know your business, your audience and your goals — and agree on what the project includes."],
        ["Design", "We develop a considered visual direction and page structure, and refine it with your feedback."],
        ["Build", "We develop the website, test it on real devices and browsers, and fix what needs fixing."],
        ["Launch", "We deploy the site and hand over clear information on how it works and what comes next."]
      ]
    },
    langs: {
      label: "Five languages",
      h2: "Your project, in your language.",
      lead: "We work with clients in five languages — from the first conversation to the proposal, the website content and the handover notes.",
      note: "Every direction between the five languages",
      link: "Translation services",
      list: [["EN", "Let's talk.", "English"], ["DE", "Lassen Sie uns sprechen.", "Deutsch"], ["NL", "Laten we praten.", "Nederlands"], ["ES", "Hablemos.", "Español"], ["HR", "Razgovarajmo.", "Hrvatski"]]
    },
    journal: {
      label: "The journal",
      h2: "Plain-language guides to Europe's digital rules.",
      lead: "Written for business owners, not lawyers: what the rules say, who they apply to and what to do next.",
      soon: "In preparation", kind: "Guide",
      posts: [
        { tag: "GDPR", t: "GDPR and Cookies: What a Small Business Website Actually Needs", d: "Consent, cookies, privacy notices and forms — what is required, what is optional and what most sites get wrong." },
        { tag: "DSA", t: "The Digital Services Act: What Businesses Should Understand", d: "Who the DSA applies to, which obligations matter for smaller businesses and when a normal company website is affected." },
        { tag: "AI Act", t: "The EU AI Act: Understanding the Rules, Scope, and Implementation Timeline", d: "Risk categories, transparency duties and the phased timeline — including the dates moved in 2026." }
      ]
    },
    about: {
      label: "About Lexora",
      h2: "An independent studio, working across borders.",
      p: [
        "Lexora Digital is an independent digital studio for small and medium-sized businesses. We combine web design and development, practical knowledge of European digital rules, translation and creative production.",
        "We keep things clear: a defined scope, honest advice about what you need — and what you don't — and explanations in plain language, in the language you work in."
      ],
      link: "More about Lexora",
      values: [
        ["Clear communication", "No jargon, no hidden steps. You always know where your project stands."],
        ["Considered design", "Every element has a reason to be there — nothing added just for effect."],
        ["Honest scope", "Transparent packages and prices, with extras named before they cost anything."],
        ["Practical compliance", "Privacy and accessibility built in, without promises nobody can keep."]
      ]
    },
    final: {
      label: "Start a project",
      h2: "Have a good idea? *Let's build it properly.*",
      lead: "Tell us what you want to achieve. We'll discuss your needs and the most practical next step.",
      cta1: "Start a project", cta2: "Contact Lexora"
    }
  },

  pages: {
    web: {
      hero: { label: "Web design & development", h1: "Websites that make your business *easier to trust.*", lead: "From a focused one-page website to a custom multi-page site — designed with care, built to work on every screen, and launched with a clear handover.", cta1: "Start a website project", cta2: "See concept projects" },
      what: {
        label: "What we build", h2: "Everything a business website needs. Nothing it doesn't.", lead: "We design and develop websites that are fast, readable, privacy-friendly and easy to maintain.",
        items: [
          { g: "01", t: "One-page websites", p: "A complete, focused presence on a single page — ideal for trades, studios and local businesses." },
          { g: "02", t: "Custom websites", p: "Multi-page sites with a structure designed around your services, customers and goals." },
          { g: "03", t: "Landing pages", p: "Single-purpose pages for a campaign, an offer or a new service." },
          { g: "04", t: "Redesigns & improvements", p: "A clearer structure, better mobile experience and faster pages for an existing website." },
          { g: "05", t: "Multilingual websites", p: "Sites in up to five languages, with content translated by us — not by a machine plugin." },
          { g: "06", t: "Privacy-friendly setup", p: "No unnecessary trackers, a proper consent setup where needed and complete legal pages." }
        ]
      },
      pricing: {
        label: "Packages", h2: "Transparent from the start.", lead: "A defined entry-level package for small businesses, and individual quotes for everything larger.",
        incl: "Included", extra: "Not included / extra",
        starter: { name: "Starter website", price: "€99", unit: "one-time", svc: "web", cta: "Order a starter website",
          p: "A professional one-page website for a small business, typically delivered within 48 hours after we have received all content.",
          incl: ["One responsive page with up to 6 sections", "Your texts, photos and logo, carefully laid out", "Contact section with phone, email, address and map link", "Privacy-friendly setup and links to your legal pages", "Launch on your existing domain"],
          extra: ["Domain and hosting costs", "Writing or translating your texts", "Additional pages, booking or shop functions", "Logo or photo production", "Ongoing changes after launch"] },
        custom: { name: "Custom website", price: "On request", unit: "quoted per project", svc: "web", cta: "Request a quote",
          p: "For businesses that need several pages, more languages or special functions. You receive a fixed quote after a short consultation.",
          incl: ["Discovery call and page structure", "Individual visual design", "Multi-page, multilingual build", "Testing on real devices and browsers", "Deployment, handover and documentation"] },
        note: "Prices exclude VAT where applicable. Anything outside a package is quoted before work starts — you decide whether you want it."
      },
      after: {
        label: "After launch", h2: "A clean handover, and clear boundaries.", lead: "You should know exactly what you're getting — and what happens after the website goes live.",
        items: [
          { g: "→", t: "Deployment", p: "We publish the site on your domain and check that everything works in production." },
          { g: "→", t: "Handover", p: "You receive the access details and a short guide to how your website is set up." },
          { g: "→", t: "Maintenance", p: "Updates and changes after launch are not included in a package. We offer them on request, at a quoted price." }
        ]
      },
      work: { label: "Concept projects", h2: "How our websites look in practice." },
      band: { h2: "Ready for a website that *works properly?*", lead: "Tell us about your business and what the website should achieve." }
    },

    compliance: {
      hero: { label: "Digital compliance", h1: "GDPR, cookies and EU digital rules — *explained and implemented.*", lead: "We help businesses understand which European rules affect their website and put them into practice: consent, tracking, privacy notices, forms and legal pages.", cta1: "Free website check", cta2: "Book a consultation" },
      help: {
        label: "How we help", h2: "Practical support, from first question to working website.", lead: "General information and hands-on implementation — clearly separated from formal legal advice.",
        items: [
          { g: "01", t: "Consultation", p: "A clear explanation of which rules are likely to matter for your website, in plain language and in your language." },
          { g: "02", t: "Cookie consent setup", p: "A consent banner with equal Accept and Reject options and real control over each category." },
          { g: "03", t: "Tracking audit", p: "We find analytics, pixels, embedded media and external resources that load before consent." },
          { g: "04", t: "Privacy-friendly forms", p: "Contact and booking forms that collect only what is needed, with the right notices." },
          { g: "05", t: "Privacy & legal pages", p: "Structured, complete privacy notice and legal-notice pages based on the information you provide." },
          { g: "06", t: "Accessibility review", p: "A practical check against WCAG 2.2 and the European Accessibility Act, where it applies." }
        ]
      },
      overview: { h2: "The rules at a glance.", lead: "Which European requirements usually apply to a business website — and which depend on what you do." },
      national: {
        label: "National rules", h2: "EU rules, applied nationally.", lead: "The GDPR applies across the EU, but cookie consent and provider information are governed by national laws. These are the ones we work with most.",
        head: ["Country", "Cookies & tracking", "Provider information"],
        rows: [
          ["Germany", "§ 25 TDDDG + GDPR", "§ 5 DDG (Impressum)"],
          ["Austria", "§ 165 TKG 2021 + GDPR", "§ 5 ECG, § 25 MedienG"],
          ["Netherlands", "Art. 11.7a Telecommunicatiewet + AVG (GDPR)", "Art. 3:15d BW"],
          ["Spain", "Art. 22.2 LSSI-CE + RGPD / LOPDGDD", "Art. 10 LSSI-CE"],
          ["Croatia", "Zakon o elektroničkim komunikacijama + GDPR", "Zakon o elektroničkoj trgovini"],
          ["United Kingdom", "PECR, reg. 6 + UK GDPR", "Electronic Commerce Regulations 2002, reg. 6"]
        ],
        note: "Overview for orientation only. Rules change and national authorities interpret them differently; we check the current rules for your country when we review your website."
      },
      bounds: {
        label: "Boundaries", h2: "What we do — and what we don't.",
        doT: "What we do", do: ["Explain the rules that are likely to apply, in plain language", "Check your website for common compliance issues", "Implement consent, tracking and form fixes on your website", "Structure privacy and legal pages from the information you provide", "Re-check the website after changes"],
        dontT: "What we don't do", dont: ["Give legal advice or legal representation", "Guarantee that a website is \"100% compliant\"", "Act as your data protection officer", "Draft contracts or represent you before authorities"]
      },
      band: { h2: "Start with a *free check* of your website.", lead: "We review consent, tracking, privacy policy and legal pages. If we find issues, we fix them for a fixed €99.", cta: "Check my website" }
    },

    check: {
      hero: { label: "GDPR, Cookies & Co.", h1: "Free GDPR & cookie check. *We fix it for €99.*", lead: "Send us your website. We check consent, tracking, privacy policy and legal pages against EU and national rules. If everything is fine, it costs nothing. If not, we make your website compliant for one fixed price.",
        points: ["No account, no card", "Free if no issues are found", "One fixed price for the fix", "Free re-check after the fix"] },
      areas: {
        label: "What we check", h2: "The four areas most often behind complaints and fines.", lead: "We review what your visitors actually see and what your website actually loads.",
        items: [
          { g: "01", t: "GDPR basics", p: "How personal data is collected and presented — forms, notices and the visible privacy setup." },
          { g: "02", t: "Cookie consent", p: "Whether consent is clear, whether rejecting is as easy as accepting and whether tracking waits for a choice." },
          { g: "03", t: "Privacy & legal pages", p: "Your privacy policy, legal notice (Impressum) and the forms that link to them." },
          { g: "04", t: "Third-party tracking", p: "Analytics, ad pixels, embedded videos, maps, fonts and other external resources." }
        ]
      },
      how: {
        label: "How it works", h2: "Four steps from check to compliant.", lead: "You stay in control: nothing is changed on your website until you accept the offer.",
        steps: [
          ["Send your website", "Enter your website address, your email and your country — that's all we need."],
          ["We check", "We review consent, tracking, privacy policy and legal pages against EU and national rules."],
          ["You get the result", "Free of charge. If everything is fine, that's it. If not, you receive a short, plain-language list of the issues."],
          ["We fix it for €99", "On your go-ahead we make the fixes on your website, then re-check it for free."]
        ]
      },
      example: {
        label: "Example result", h2: "A clear result, *not a legal essay.*", lead: "You see what is wrong, why it matters and what happens next — in plain language, in your language.",
        site: "yourcompany.com", tag: "Illustration", status: { bad: "Issue", warn: "Incomplete", ok: "OK" },
        items: [
          { s: "bad", t: "Analytics loads before consent", p: "Tracking starts as soon as the page opens, before the visitor has made a choice." },
          { s: "warn", t: "Privacy policy is incomplete", p: "Retention periods and service providers are not listed." },
          { s: "ok", t: "Legal notice is present", p: "Linked from every page and contains the required details." }
        ],
        note: "Example for illustration only — not a real website."
      },
      pricing: {
        label: "Pricing", h2: "Two prices. No surprises.", lead: "The check is always free. You only pay if we find issues and you want us to fix them.",
        plans: [
          { name: "The check", price: "€0", unit: "free", cta: "Request a free check", p: "A review of your website by us.", incl: ["Consent, tracking, privacy policy and legal pages", "Checked against EU and your national rules", "Short, plain-language list of any issues", "No obligation"] },
          { name: "The fix", price: "€99", unit: "one-time", cta: "Start with the free check", p: "We make your website GDPR and cookie compliant with EU and national rules.",
            incl: ["Consent banner set up correctly — equal Accept and Reject, real choices", "Trackers and embeds blocked until consent, where your platform allows it", "Privacy policy and legal notice completed from the information you provide", "Form notices and links to legal pages on every page", "Free re-check and a short summary of what we changed"] }
        ],
        scope: "The €99 fix covers standard websites on common platforms such as WordPress, Wix, Squarespace, Shopify, Webflow, Jimdo or plain HTML, and needs access to your website or your developer. If your site needs more — for example custom plugins, shop checkouts or a hosting change — we tell you before we start, with a separate price. Prices exclude VAT where applicable."
      },
      countries: { label: "Countries", h2: "Checked against the rules that apply to you.", lead: "Tell us where your business is based. We check your website against EU rules and the national law of that country." },
      faq: {
        label: "Questions", h2: "Frequently asked questions.",
        items: [
          ["Is the check really free?", "Yes. The check costs nothing. If we find no issues, you pay nothing at all."],
          ["What exactly does the €99 fix include?", "We set up consent correctly, block trackers until consent where your platform allows it, complete your privacy policy and legal notice from the information you provide, add form notices and links to legal pages, and re-check the website afterwards."],
          ["Do you change my website without asking?", "No. We only make changes after you accept the offer, and only the ones described in it."],
          ["What do you need from me?", "Access to your website (for example a temporary admin login) or your developer's contact — plus the business details that belong in your privacy policy and legal notice."],
          ["Is this legal advice?", "No. The check and the fix are practical, technical work based on EU and national rules. They are not legal advice and do not guarantee compliance. For legal advice, consult a qualified lawyer."],
          ["Which countries do you cover?", "Websites aimed at customers in the EU and the UK, with particular experience in Germany, Austria, the Netherlands, Spain and Croatia."],
          ["How do I pay?", "You receive an offer with the price before any work starts. You pay only after you have accepted it."]
        ]
      },
      band: { h2: "Find out where your website stands — *for free.*", lead: "It takes a minute to send your website. We do the rest.", cta: "Check my website" },
      disclaimer: "GDPR, Cookies & Co. is a service of Lexora Digital. The check and the fix are practical reviews and implementations; they are not legal advice and do not guarantee compliance."
    },

    language: {
      hero: { label: "Translation", h1: "Five languages. *Every direction.*", lead: "Translation of websites, business documents and legal texts between English, German, Dutch, Spanish and Croatian — accurate, natural and consistent with your brand.", cta1: "Request a translation", cta2: "Language pairs" },
      pairs: {
        label: "Language pairs", h2: "Twenty language pairs, one point of contact.", lead: "We translate between any two of our five languages — so a German website can become Dutch, a Croatian contract English, or a Spanish brochure German.",
        aria: "Grid of the twenty language pairs between English, German, Dutch, Spanish and Croatian",
        langs: [["EN", "English", "UK & international"], ["DE", "Deutsch", "Germany, Austria, Switzerland"], ["NL", "Nederlands", "Netherlands & Flanders"], ["ES", "Español", "Spain"], ["HR", "Hrvatski", "Croatia"]]
      },
      services: {
        label: "What we translate", h2: "From one web page to a full set of documents.", lead: "Every translation is done and reviewed by a person — not left to a machine plugin.",
        items: [
          { g: "01", t: "Website localisation", p: "Your website content adapted for each market — headings, buttons, forms and SEO texts included." },
          { g: "02", t: "Business documents", p: "Offers, presentations, product information, emails and internal documents." },
          { g: "03", t: "Legal & contract texts", p: "Contracts, terms and conditions, privacy policies and official correspondence." },
          { g: "04", t: "Marketing copy", p: "Brochures, campaigns and social media texts that keep their tone in every language." },
          { g: "05", t: "Proofreading & review", p: "A careful second look at translations you already have." },
          { g: "06", t: "Multilingual websites", p: "Combined with our web service: one website, up to five languages, built and translated in one project." }
        ]
      },
      focus: {
        label: "Our focus", h2: "Legal and business language for the DACH and Benelux markets.",
        p: ["Our strongest experience is in legal and business translation for companies working in Germany, Austria, Switzerland, the Netherlands and Belgium — and between those markets and English and Croatian.",
          "Legal and technical terminology is handled with care, and we keep your own terms consistent across every document and every language."]
      },
      how: {
        label: "How it works", h2: "Simple, with a fixed quote.", lead: "You know the price and the delivery date before we start.",
        steps: [
          ["Send your text", "Upload or describe the documents, the language pair and your deadline."],
          ["Get a quote", "You receive a fixed price and a delivery date — usually based on word count."],
          ["Translation & review", "We translate, then review the text for accuracy, terminology and tone."],
          ["Delivery", "You receive the translation in the agreed format, ready to use."]
        ]
      },
      faq: {
        label: "Questions", h2: "About our translations.",
        items: [
          ["How much does a translation cost?", "Prices depend on the language pair, the type of text and the deadline. You receive a fixed quote before we start."],
          ["Do you provide certified (sworn) translations?", "Tell us if you need a certified translation for an authority or a court. We will tell you honestly whether we can provide it — or recommend a sworn translator in the right country."],
          ["Is my document treated confidentially?", "Yes. Your documents are used only for the translation and are deleted after the project within 30 days after delivery."],
          ["Do you use machine translation?", "Every text is translated and reviewed by a person. We never deliver unedited machine output."]
        ]
      },
      band: { h2: "Need a text in *another language?*", lead: "Tell us the language pair, the type of text and your deadline.", cta: "Request a translation" }
    },

    creative: {
      hero: { label: "Creative services", h1: "Visual work with a *clear point of view.*", lead: "Identity, graphics and media editing for businesses that want to look as good as their work — consistent across the website, print and social media.", cta1: "Discuss a creative project", cta2: "See concept projects" },
      services: {
        label: "What we offer", h2: "Selected creative services.", lead: "Focused services that support your website and your brand.",
        items: [
          { g: "01", t: "Visual identity", p: "Logo refinement, colour palette, typography and simple brand guidelines." },
          { g: "02", t: "Brand assets", p: "Business cards, social media templates, letterheads and presentation layouts." },
          { g: "03", t: "Graphic design", p: "Flyers, posters, brochures and graphics for campaigns." },
          { g: "04", t: "Photo editing", p: "Colour correction, retouching and consistent image treatment for your website." },
          { g: "05", t: "Video editing", p: "Short videos for your website and social media — cut, titled and ready to publish." },
          { g: "06", t: "Audio & voice editing", p: "Clean-up and editing of voice recordings, podcasts and audio for video." }
        ]
      },
      approach: {
        label: "Approach", h2: "Design that serves the business.",
        items: [
          ["One visual language", "Website, print and social media use the same colours, type and tone."],
          ["Practical files", "You receive files in the formats you actually need, named and organised."],
          ["Clear scope", "Every creative project has an agreed scope and price before we start."]
        ]
      },
      work: { label: "Concept projects", h2: "Art direction in practice." },
      band: { h2: "Let's give your brand a *clear look.*", lead: "Tell us what you need and where it will be used." }
    },

    work: {
      hero: { label: "Work", h1: "Concept projects, *built to the standard of real ones.*", lead: "Each concept is a complete, responsive website designed for a specific kind of business. They show how we work — they are not commissioned client projects." },
      filter: "Filter by industry", all: "All", empty: "No projects in this category yet.",
      soon: { label: "In preparation", items: ["Holiday accommodation", "Professional services", "Creative & digital projects"], p: "New concepts are added as they are completed." },
      band: { h2: "Want a website like this *for your business?*", lead: "Every concept can be adapted to a real business — with your content, your brand and your languages." }
    },

    caseUi: {
      overview: "Overview", goals: "Business goals", approach: "Design approach", system: "Design system", palette: "Colour palette", type2: "Typography",
      roles: { display: "Headings", body: "Body text", both: "Headings & body" },
      type: "Type", sector: "Industry", services: "Services shown", lang: "Language",
      desk: "Desktop — homepage sections", mob: "Mobile — the layout is recomposed for small screens, not just scaled down.",
      deskAlt: "%s website concept — desktop view of the homepage", mobAlt: "%s website concept — mobile view",
      note: "This is a concept project created by Lexora Digital to demonstrate our approach. Names, contact details and texts in square brackets are placeholders.",
      next: "Next project", cta: "Discuss a similar website",
      band: { h2: "Want a website like this *for your business?*", lead: "We adapt the approach to your business, your content and your languages." }
    },
    cases: {
      "studio-rosalie": {
        lead: "A calm, premium one-page website concept for a beauty studio — designed to make booking an appointment the obvious next step.", lang: "German",
        svc: ["Web design", "Visual direction", "Responsive build"],
        overview: "Studio Rosalie is a concept for an independent beauty studio offering facials, lashes, brows and nail design. The site needed to feel personal and premium at the same time — and to work as well on a phone as on a laptop.",
        goals: ["Make the studio feel welcoming and high-quality at first glance", "Present services and prices clearly", "Make booking an appointment the obvious next step", "Introduce the owner personally to build trust"],
        approach: ["A warm rosé and burgundy palette replaces the usual pink, with an editorial serif for headings and a clean sans-serif for reading.", "Photography of the studio, the work and the owner carries the page. The layout gives each image room, and booking buttons stay visible without being pushy."]
      },
      "mustermann-sanitaer": {
        lead: "A clear, trustworthy website concept for a plumbing and heating business — built around one goal: getting the phone to ring.", lang: "German",
        svc: ["Web design", "Responsive build", "Conversion structure"],
        overview: "Mustermann Sanitär is a concept for a master plumbing business offering bathrooms, plumbing and heating. Customers often arrive with a problem and a phone in their hand, so speed and clarity matter more than anything else.",
        goals: ["Show competence and reliability immediately", "Put the phone number and emergency service within one tap", "Explain services in plain language", "Build trust with real photos of the team and the work"],
        approach: ["A navy and warm orange palette signals reliability and action. The phone number is the primary button everywhere, and on mobile a fixed call bar keeps it in reach.", "Service cards, trust points and a short review section answer the usual questions before the customer has to ask."]
      },
      "kfz-werkstatt": {
        lead: "A bold, technical website concept for an independent car repair workshop, with services, trust points and appointment requests up front.", lang: "German",
        svc: ["Web design", "Art direction", "Responsive build"],
        overview: "This concept presents an independent car repair workshop as modern and competent — without the usual stock-photo look of the industry.",
        goals: ["Look professional and technically competent", "Present the main services at a glance", "Make appointment requests easy", "Build trust without invented certifications or reviews"],
        approach: ["Deep navy and signal orange with a condensed typeface give the site the confident, technical feel of a workshop. Real-looking workshop photography carries the story.", "A clear service grid, four trust points and a simple appointment form make the next step obvious on every screen."]
      }
    },

    journal: {
      hero: { label: "Journal", h1: "Guides to *Europe's digital rules.*", lead: "Plain-language articles on GDPR and cookies, the Digital Services Act and the EU AI Act — what the rules say, who they apply to and what to do next." },
      note: { label: "About the journal", p: "Written by **Goran Kolouh**, founder of Lexora Digital — a lawyer by training who builds websites. Every guide is checked against the official texts and updated when the rules change. General information, not legal advice." },
      article: { by: "By", min: "min read", read: "Read the article", back: "All articles", sources: "Sources", more: "Keep reading", talk: "Talk to us", all: "All articles", bio: "Lawyer by training, web builder by trade. Goran writes about EU digital law — GDPR, the DSA and the AI Act — and what it means for the people who build and run websites.", disclaimer: "This article is general information, not legal advice. It reflects the law as of its publication date." },
      band: { h2: "Want to know where your website stands?", lead: "Our free GDPR & cookie check gives you a clear answer." }
    },

    about: {
      photoAlt: "Portrait of Goran Kolouh, founder and director of Lexora Digital", photoCap: "Goran Kolouh — Founder & Director", photoLine: "One half law and language, the other half digital.",
      hero: { label: "About Lexora", h1: "An independent studio, *working across borders.*", lead: "Lexora Digital brings together web design, practical knowledge of European digital rules, translation and creative work — for small and medium-sized businesses across Europe." },
      story: {
        label: "Our story", h2: "Why web, law, language and design belong together.",
        p: ["Small businesses are told they need a website, a cookie banner, a privacy policy, translated content and a consistent look — usually from four different providers who never talk to each other.",
          "Lexora Digital started from a simple idea: these things work better when they are planned together. A website that looks good but loads trackers without consent is a liability. A privacy policy nobody can understand helps nobody. A translation that ignores the design breaks the layout.",
          "The studio brings together a background in law, professional translation and web design. We work in five languages and explain every step in plain language."]
      },
      four: {
        label: "Four disciplines", h2: "WEB · LAW · LANGUAGE · DESIGN", lead: "One studio, four skills — combined in every project.",
        items: [
          { g: "</>", t: "Web", p: "Websites and landing pages that are fast, clear and easy to maintain." },
          { g: "§", t: "Law", p: "Practical GDPR and cookie compliance — information and implementation, not legal advice." },
          { g: "⇄", t: "Language", p: "Translation between English, German, Dutch, Spanish and Croatian." },
          { g: "Aa", t: "Design", p: "Visual identity, graphics and media editing with a clear point of view." }
        ]
      },
      values: { h2: "How we work." },
      bounds: {
        doT: "What you can expect", do: ["A defined scope and price before work begins", "Plain-language explanations in your language", "Honest advice — including when you don't need something", "Privacy-friendly websites by default"],
        dontT: "What we are not", dont: ["A law firm — we do not provide legal advice or representation", "A sworn translation agency — certified translations only where stated", "An agency that sells you more than you need"]
      }
    },

    contact: {
      hero: { label: "Contact", h1: "Let's start with *a conversation.*", lead: "Tell us what you want to achieve — a website, a compliance check, a translation or a creative project. We reply in your language." },
      direct: { label: "Email", p: "We usually reply within two working days." },
      next: { label: "What happens next", steps: [["We read your message", "and ask questions if anything is unclear."], ["We suggest a next step", "— a short call, a quote or a free check."], ["You decide", "Nothing starts without your go-ahead."]] },
      check: { t: "Just want to know if your website is GDPR compliant?", p: "Use the free GDPR & cookie check instead." }
    },

    shop: {
      hero: {
        label: "Notion templates",
        h1: "EU compliance kits, *ready in Notion.*",
        lead: "Practical Notion templates for the GDPR, the EU AI Act, pay transparency and supplier checks — built for small and medium-sized businesses, in five languages.",
        cta1: "Get the bundle",
        cta2: "See all kits",
        points: ["English, German, Dutch, Spanish, Croatian", "Works on the free Notion plan", "Instant access after purchase", "One-time payment, no subscription"]
      },
      kits: { label: "The kits", h2: "Five kits. *One bundle.*", lead: "Each kit is a ready-to-use Notion workspace with registers, guides and example entries. You choose your language edition at checkout." },
      cat: "Notion template",
      notion: "Made for Notion",
      bundleCat: "Bundle · 5 Notion kits",
      num: "5 kits",
      vs: "{bundle} instead of {full}",
      buy: "Buy on Gumroad",
      items: {
        bundle: { t: "EU Compliance Bundle", s: "5 Notion kits", p: "All five kits in one purchase: GDPR, AI compliance, AI workplace policy, pay transparency and supplier assessment." },
        gdpr: { t: "GDPR Compliance Kit", s: "GDPR", p: "A checklist with article references plus registers for processing activities, data subject requests, data breaches, processors and cookies." },
        ai: { t: "AI Compliance Toolkit", s: "EU AI Act + GDPR", p: "An AI tools registry, GDPR checkpoints, an employee AI policy, training video scripts and a training log." },
        policy: { t: "AI Workplace Policy Pack", s: "EU AI Act + GDPR", p: "An AI use policy, a staff quick guide, an acknowledgment form, AI tool requests and a training log." },
        pay: { t: "EU Pay Transparency Kit", s: "Directive (EU) 2023/970", p: "Pay policy, job architecture and pay ranges, a pay gap calculator, employee information requests and ready-to-use texts." },
        vendor: { t: "Vendor & AI Supplier Assessment Kit", s: "GDPR + EU AI Act", p: "A supplier questionnaire, an assessment guide, a DPA checklist (Art. 28 GDPR), a supplier register and an assessment log." }
      },
      how: {
        label: "How it works",
        h2: "From checkout to your workspace *in two minutes.*",
        lead: "No installation, no account with us — the template is copied into your own Notion workspace.",
        steps: [
          ["Choose kit and language", "Pick a kit or the bundle and choose your language edition at checkout on Gumroad."],
          ["Get your link", "Right after payment you receive the link to your template."],
          ["Duplicate into Notion", "Open the link and click “Duplicate” to copy the template into your own Notion workspace. The free plan is enough."],
          ["Fill it in", "Follow the setup guide and the example entries to add your own information."]
        ]
      },
      bounds: {
        label: "Boundaries",
        h2: "What the kits do — and what they don't.",
        doT: "What the kits do",
        do: ["Give you a clear structure for records, registers and policies", "Show with example entries how each register is filled in", "Explain the relevant EU rules in plain language", "Help you document what you have done"],
        dontT: "What they don't do",
        dont: ["Replace legal advice for your specific situation", "Make your business compliant on their own", "Submit notifications or reports to authorities for you", "Classify AI systems or make legal decisions for you"]
      },
      faq: {
        label: "Questions",
        h2: "Before you buy.",
        items: [
          ["Do I need a paid Notion plan?", "No. The templates work on the free Notion plan. You only need a Notion account, which you can create for free."],
          ["Which languages are available?", "Every kit is available in English, German, Dutch, Spanish and Croatian. You choose your edition at checkout."],
          ["How do I receive the template?", "Payment and your receipt are handled by Gumroad. Right after purchase you get a link to duplicate the template into your Notion workspace."],
          ["Can I use a kit for several companies?", "One purchase covers use within one business. If you need kits for several companies or for your clients, please contact us."],
          ["Is this legal advice?", "No. The kits are organisational tools and a practical starting point. They do not constitute legal advice and do not by themselves make your business compliant. For high-risk uses — for example AI in recruitment — have your final documents reviewed by a qualified professional."],
          ["Am I tracked when I click “Buy”?", "Not by this website. It loads no Gumroad scripts and sets no cookies. The buy buttons are plain links; on the checkout page, Gumroad's own privacy policy applies."]
        ]
      },
      band: { h2: "All five kits *for one price.*", lead: "{bundle} instead of {full} — choose your language edition at checkout.", cta: "Get the bundle" },
      disclaimer: "The kits are organisational tools and a practical starting point. They do not constitute legal advice and do not guarantee compliance with the GDPR, the EU AI Act or any other law."
    },

    privacy: {
      label: "Legal", h1: "Privacy Policy", lead: "How we process personal data when you visit this website or contact us.", updated: "Last updated: October 2026",
      draft: "",
      blocks: [
        ["h2", "Controller"],
        ["p", "The controller responsible for data processing on this website is: Lexora Digital (Goran Kolouh), Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgium, gdpr@lexoradigital.com. Further details are in our legal notice."],
        ["h2", "Hosting and server logs"],
        ["p", "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the site, the hosting provider automatically processes technical data such as IP address, date and time, requested page, browser and operating system, in order to deliver the website and keep it secure."],
        ["p", "Legal basis: Art. 6(1)(f) GDPR (our legitimate interest in a secure, working website). Transfers to the USA are based on the EU–US Data Privacy Framework and/or standard contractual clauses. Retention: a maximum of 30 days."],
        ["h2", "Contact form and GDPR & cookie check"],
        ["p", "When you use one of our forms, we process the details you enter (for example name, email address, website address, country and message) to answer your request or carry out the check you asked for."],
        ["p", "Legal basis: Art. 6(1)(b) GDPR (steps prior to a contract at your request) and Art. 6(1)(f) GDPR (answering enquiries). The forms are processed by Formspree, Inc., USA, on the basis of a data processing agreement and the EU–US Data Privacy Framework and/or standard contractual clauses."],
        ["p", "We delete your enquiry when it is no longer needed, unless statutory retention obligations apply no later than 12 months after the enquiry has been completed."],
        ["h2", "Email"],
        ["p", "If you email us, we process your email address and message to reply. Legal basis: Art. 6(1)(b) or (f) GDPR."],
        ["h2", "Cookies and local storage"],
        ["p", "This website does not use cookies for analytics, advertising or tracking. If you choose a language, that choice is stored in your browser's local storage so that the site opens in your language next time. This is strictly necessary for a function you requested and is not sent to us. Details are in our cookie policy."],
        ["h2", "Fonts and external resources"],
        ["p", "All fonts and scripts are hosted on our own server. No data is sent to Google Fonts or other third-party content networks when you view this website."],
        ["h2", "Your rights"],
        ["ul", ["Access to your data (Art. 15 GDPR)", "Rectification (Art. 16 GDPR)", "Erasure (Art. 17 GDPR)", "Restriction of processing (Art. 18 GDPR)", "Data portability (Art. 20 GDPR)", "Objection to processing based on legitimate interests (Art. 21 GDPR)"]],
        ["p", "You also have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU member state of your habitual residence or place of work the Belgian Data Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection des données), Rue de la Presse 35, 1000 Brussels, www.dataprotectionauthority.be."],
        ["h2", "Changes"],
        ["p", "We update this policy when our website or the law changes. The current version is always available on this page."]
      ]
    },

    cookies: {
      label: "Legal", h1: "Cookie Policy", lead: "Short version: we use no tracking, analytics or advertising cookies.", updated: "Last updated: October 2026",
      draft: "",
      blocks: [
        ["h2", "What we use"],
        ["p", "This website sets no cookies. It stores one item in your browser's local storage, and only if you choose a language yourself:"],
        ["ul", ["**lexora-lang** — your chosen language (for example \"de\"). Purpose: open the site in that language next time. Stored until you delete it. Not sent to us or to anyone else."]],
        ["p", "Because this storage is strictly necessary for a function you explicitly requested, no consent banner is required for it."],
        ["h2", "What we don't use"],
        ["ul", ["No analytics (for example Google Analytics)", "No advertising or social media pixels", "No embedded videos, maps or third-party fonts", "No cross-site tracking of any kind"]],
        ["h2", "Forms"],
        ["p", "When you send one of our forms, your entry is transmitted to our form provider. Sending a form does not set cookies on this website. See the privacy policy for details."],
        ["h2", "Your settings"],
        ["p", "You can view and delete the stored language preference at any time under **Privacy settings** in the footer, or by clearing your browser's site data."]
      ]
    },

    imprint: {
      label: "Legal", h1: "Legal Notice", lead: "Provider information for lexoradigital.com.", updated: "Last updated: October 2026",
      draft: "",
      blocks: [
        ["h2", "Provider"],
        ["p", "**Lexora Digital**  \nRue Jean Robbie 44  \n1060 Saint-Gilles (Bruxelles), Belgium  \nRepresented by: Goran Kolouh, Founder & Director"],
        ["h2", "Contact"],
        ["p", "General: info@lexoradigital.com  \nData protection: gdpr@lexoradigital.com  \nFounder: kolouh@lexoradigital.com"],
        ["h2", "VAT identification number"],
        ["p", "17636920948"],
        ["h2", "US company"],
        ["p", "**Lexora Digital C-Corp.**  \n1401 Pennsylvania Ave  \nWilmington, DE 19806  \nDelaware, USA"],
        ["h2", "Responsible for content"],
        ["p", "Responsible for journalistic and editorial content (§ 18(2) MStV): Goran Kolouh, Rue Jean Robbie 44, 1060 Saint-Gilles (Bruxelles), Belgium"],
        ["h2", "Consumer dispute resolution"],
        ["p", "We are not willing or obliged to take part in dispute resolution proceedings before a consumer arbitration board."],
        ["h2", "Liability for content and links"],
        ["p", "We create the content of this website with care but cannot guarantee that it is complete, correct and up to date. Articles and compliance overviews are general information and not legal advice. We are not responsible for the content of external websites we link to."]
      ]
    },

    accessibility: {
      label: "Legal", h1: "Accessibility Statement", lead: "We want this website to be usable by everyone.", updated: "Last updated: October 2026",
      draft: "",
      blocks: [
        ["h2", "Our goal"],
        ["p", "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA."],
        ["h2", "What we have done"],
        ["ul", ["Semantic page structure with headings, landmarks and a skip link", "Full keyboard navigation with visible focus indicators", "Text contrast checked against WCAG AA", "Animations reduced or switched off when your device asks for reduced motion", "Forms with visible labels and clear error messages", "Descriptive text alternatives for images"]],
        ["h2", "Known limitations"],
        ["ul", ["The animated planet is decorative and hidden from screen readers.", "Concept project screenshots contain small text that is described in the surrounding text rather than read out in full."]],
        ["h2", "Feedback"],
        ["p", "If you find a barrier on this website, please tell us at info@lexoradigital.com. We will reply and work on a solution."],
        ["h2", "Status"],
        ["p", "This statement is based on a self-assessment carried out in October 2026."]
      ]
    }
  },

  form: {
    optional: "(optional)", privacyLink: "privacy policy", note: "We reply in your language.",
    js: {
      required: "Please fill in this field.", email: "Please enter a valid email address.", url: "Please enter a valid website address, e.g. example.com.",
      consent: "Please confirm so that we can process your request.",
      fix: "Please check the highlighted fields.", sending: "Sending…",
      error: "Something went wrong. Please try again — or email us directly.",
      notConnected: "This form is not connected yet. Please email us directly for now."
    },
    contact: {
      title: "Tell us about your project", intro: "Fields marked optional can be left empty.",
      submit: "Send message", subject: "New enquiry via lexoradigital.com",
      consent: "I agree that Lexora Digital may use my details to answer my enquiry. More in the {privacy}.",
      success: ["Thank you — your message has been sent.", "We will reply as soon as possible, in your language."],
      f: { name: "Name", email: "Email", company: "Business name", language: "Preferred language", service: "What can we help with?", budget: "Budget", message: "Your message", messagePh: "What would you like to achieve?", choose: "Please choose" },
      services: [["web", "Website (design & development)"], ["design", "Creative & design services"], ["compliance", "GDPR & cookie consultation"], ["check", "GDPR & cookie check / €99 fix"], ["translation", "Translation"], ["other", "Something else"]],
      budgets: [["<500", "Under €500"], ["500-1500", "€500–1,500"], ["1500-5000", "€1,500–5,000"], ["5000+", "Over €5,000"], ["unsure", "Not sure yet"]]
    },
    check: {
      title: "Request your free check", intro: "We send the result to your email address.",
      submit: "Check my website for free", subject: "GDPR & cookie check request",
      consent: "I agree that my details are used only to carry out the check and send me the result. More in the {privacy}.",
      success: ["Thank you — your check request has been received.", "We will send the result to your email address. If we find issues, you'll receive an offer for the €99 fix — nothing changes on your website without your go-ahead."],
      f: { website: "Website address", email: "Email for the result", country: "Country of your business", platform: "Website platform", message: "Anything we should know?", choose: "Please choose" },
      countries: [["DE", "Germany"], ["AT", "Austria"], ["CH", "Switzerland"], ["NL", "Netherlands"], ["BE", "Belgium"], ["ES", "Spain"], ["HR", "Croatia"], ["UK", "United Kingdom"], ["EU", "Other EU country"], ["other", "Other"]],
      platforms: [["wordpress", "WordPress"], ["wix", "Wix"], ["squarespace", "Squarespace"], ["shopify", "Shopify"], ["webflow", "Webflow"], ["jimdo", "Jimdo"], ["html", "Custom / HTML"], ["unknown", "I don't know"]]
    }
  },

  footer: {
    pos: "An independent digital studio for websites, digital compliance, translation and design — working with businesses across Europe and beyond.",
    studio: "Studio", services: "Services", legal: "Legal", email: "Email", emailPh: "email address",
    privacy: "Privacy Policy", cookies: "Cookie Policy", imprint: "Legal Notice", accessibility: "Accessibility", settings: "Privacy settings", langs: "Languages"
  },
  privacyDialog: {
    title: "Privacy settings",
    p: "This website does not use analytics, advertising or tracking cookies, and it loads no third-party fonts or scripts. There is nothing to consent to.",
    rows: [["Strictly necessary", "Always active"], ["Analytics", "Not used"], ["Marketing", "Not used"]],
    pref: "If you choose a language, it is remembered in your browser's local storage so the site opens in that language next time. It is never sent to us.",
    prefSet: "Stored language preference: %s", prefNone: "No language preference stored.",
    clear: "Clear stored preference", close: "Close", more: "Read the cookie policy"
  },
  notFound: {
    title: "Page not found — Lexora Digital",
    h1: "This page has drifted *out of orbit.*",
    lead: "The page you are looking for doesn't exist or has moved. Let's get you back on course.",
    home: "Back to the homepage", contact: "Contact us"
  }
};
