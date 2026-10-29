// Journal articles — English. Block types: p, h2, h3, ul, quote, note, check (checklist).
export default [
  {
    slug: "gdpr-website-legal-document",
    tag: "GDPR",
    t: "Your Website Is Already a Legal Document",
    d: "GDPR and cookie rules are not a banner you add at the end. They are design decisions, and the cheapest time to make them is before the first line of code.",
    lead: "GDPR and cookie rules are not a banner you add at the end. They are design decisions — and the cheapest time to make them is before the first line of code.",
    date: "October 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Most of the websites I check are not non-compliant because their owners don't care. They are non-compliant because the law arrived last. The design was approved, the developer built it, the site went live — and then someone remembered the cookie banner and pasted one on top."],
      ["p", "That order is the problem. By the time the banner arrives, the fonts are already loading from a server in another country, the map is already setting cookies, the analytics script is already firing before anyone has clicked anything. The banner becomes a decoration placed over decisions that were made without it."],
      ["quote", "A website is not a brochure with a privacy policy attached. Every element on it is a decision about someone else's data."],

      ["h2", "Every element is a legal decision"],
      ["p", "When you build a website, you are not only choosing how it looks. You are choosing which companies receive your visitors' data, when and on what legal basis. A few ordinary examples:"],
      ["ul", [
        "**Web fonts.** Loading fonts directly from a third-party server sends each visitor's IP address to that provider. In 2022 a German court (LG München I) awarded a visitor damages for exactly this. Hosting the fonts yourself costs nothing and removes the issue.",
        "**Embedded videos and maps.** A YouTube video or Google Map can set cookies and contact external servers the moment the page loads. A simple \"click to load\" placeholder solves it.",
        "**Analytics.** Tracking tools that store identifiers on the device generally need consent first. Privacy-friendly, cookieless setups often don't — that is a design choice, not a legal technicality.",
        "**Contact forms.** Every form is a collection point for personal data. Who receives the submissions, where are they stored, for how long?",
        "**Chat widgets, newsletter tools, booking systems.** Each one is usually a processor that needs a contract (Article 28 GDPR) and a line in your privacy notice."
      ]],
      ["p", "None of this is exotic. It is the normal anatomy of a business website. That is exactly why legal knowledge belongs in the brief, next to the colour palette and the sitemap."],

      ["h2", "What the law actually asks"],
      ["p", "Stripped of jargon, the rules for a typical business website come down to a handful of principles:"],
      ["ul", [
        "**Consent before non-essential cookies.** Under the ePrivacy rules (Article 5(3) of the ePrivacy Directive, implemented nationally — in Germany by § 25 TDDDG), storing or reading information on a visitor's device requires consent unless it is strictly necessary for the service they asked for.",
        "**Real consent, not a trick.** The Court of Justice of the EU ruled in **Planet49** (2019) that pre-ticked boxes are not valid consent. European regulators expect \"reject\" to be as easy as \"accept\".",
        "**A legal basis for every processing.** Article 6 GDPR: consent, contract, legal obligation, legitimate interest — you need one, and you need to know which.",
        "**Transparency.** Article 13 GDPR: tell people, in plain language, what you collect, why, who receives it and how long you keep it.",
        "**Privacy by design and by default.** Article 25 GDPR literally requires data protection to be built into the system from the start. The law itself says: design first, not patch later.",
        "**Care with transfers outside the EU.** Many tools send data to the US. The EU–US Data Privacy Framework (since July 2023) covers certified companies, but you still need to know which tools you use and on what basis."
      ]],

      ["h2", "Why retrofitting costs more"],
      ["p", "The headline risk is the GDPR fine: up to €20 million or 4% of worldwide annual turnover. For a small business, that is rarely the realistic threat. The realistic threats are smaller and more frequent:"],
      ["ul", [
        "warning letters from competitors or associations — common in Germany and Austria;",
        "claims for non-material damages from visitors under Article 82 GDPR;",
        "complaints to the data protection authority, which then asks questions you must answer;",
        "and the quiet cost: rebuilding parts of a site that could have been built correctly the first time."
      ]],
      ["p", "Replacing an embedded map, re-hosting fonts, rewiring analytics and rewriting the privacy notice after launch takes longer than doing it during the build. Legal knowledge, applied early, is simply cheaper."],

      ["h2", "What is changing — and what is not"],
      ["p", "In November 2025 the European Commission proposed a \"Digital Omnibus\" that would, among other things, move cookie rules into the GDPR and introduce some exemptions, for example for certain audience measurement. As of October 2026 this part is **still a draft**: the Council has not agreed its negotiating position, and nothing has been adopted."],
      ["p", "The practical rule is simple: **build for the law in force, not for a proposal.** The current consent rules apply today. If the rules change, a site that was designed with clean consent logic is also the easiest one to adjust."],

      ["h2", "A short checklist for your next website"],
      ["check", [
        "List every third-party service the site will load — before design is approved.",
        "Host fonts and essential scripts yourself where you can.",
        "Put videos, maps and social embeds behind a click-to-load placeholder.",
        "Block non-essential cookies until consent; make \"reject\" as visible as \"accept\".",
        "Sign processor agreements with form, hosting, newsletter and chat providers.",
        "Write the privacy notice from the actual setup — not from a template."
      ]],

      ["h2", "The point"],
      ["p", "Law is not the enemy of good design. Clean, fast websites that load only what they need tend to be both more compliant and more pleasant to use. The best time to think about GDPR is when you are still deciding what the site will be. After that, you are no longer designing — you are repairing."],
      ["note", "Want to know where your current website stands? Our **free GDPR & cookie check** shows what loads, what sets cookies and what needs fixing — and we fix it for you from €99."]
    ],
    sources: [
      ["GDPR — Regulation (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["ePrivacy Directive 2002/58/EC (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2002/58/oj"],
      ["CJEU, Planet49, C-673/17 (2019)", "https://curia.europa.eu/juris/liste.jsf?num=C-673/17"],
      ["European Commission — Digital Omnibus", "https://digital-strategy.ec.europa.eu/en/library/digital-omnibus-regulation-proposal"]
    ]
  },

  {
    slug: "digital-services-act-business",
    tag: "DSA",
    t: "The Digital Services Act Is Not Only About Big Tech",
    d: "The headlines are about record fines for global platforms. But the DSA also decides what happens when your business hosts reviews, sells on a marketplace or has its account suspended.",
    md: "The DSA also decides what happens when your business hosts reviews, sells on a marketplace or has its account suspended. What it means for you.",
    lead: "The headlines are about record fines for global platforms. But the DSA also shapes what happens when your business hosts reviews, sells on a marketplace — or wakes up to a suspended account.",
    date: "October 2026", iso: "2026-10-18",
    blocks: [
      ["p", "In December 2025 the European Commission fined X €120 million under the Digital Services Act. In July 2026 it fined AliExpress €550 million for failing to deal properly with illegal and unsafe products. If you read only the headlines, the DSA looks like a law about a handful of giants."],
      ["p", "It isn't. The giants carry the heaviest obligations, but the DSA is built in layers — and some of those layers reach ordinary businesses in two very different ways: as **providers** of a digital service, and as **users** of the platforms they depend on."],
      ["quote", "You don't need 45 million users to be touched by the DSA. You only need to host someone else's content — or to depend on a platform that does."],

      ["h2", "The layers, in plain language"],
      ["p", "The DSA applies to \"intermediary services\" — services that transmit, store or publish information provided by others. Its obligations stack up:"],
      ["ul", [
        "**All intermediary services** — basic duties such as a point of contact and clear terms and conditions.",
        "**Hosting services** — anyone storing information on behalf of users must offer a way to report illegal content (notice and action, Article 16) and explain decisions to restrict content (statement of reasons, Article 17).",
        "**Online platforms** — hosting services that also make user content public, such as forums, social networks and marketplaces: complaint systems, transparency on advertising, a ban on deceptive interface design (\"dark patterns\", Article 25), protection of minors.",
        "**Very large platforms and search engines** — over 45 million monthly users in the EU: systemic risk assessments, independent audits, data access for researchers."
      ]],
      ["p", "An ordinary company website that presents your own content is usually not an intermediary service at all. But the moment you let others publish — customer reviews, a community forum, listings from other sellers, user uploads — you may have stepped onto the first rungs of this ladder."],

      ["h2", "When your website becomes a host"],
      ["p", "This is where legal knowledge changes the design. Adding a review section or a small marketplace is not only a feature; it is a choice of legal role. If the DSA applies, the build needs a few things that are easy to include at the start and awkward to bolt on later:"],
      ["ul", [
        "a visible way for anyone to report content they believe is illegal;",
        "a process for handling those reports — who looks at them, how fast, and how decisions are recorded;",
        "a short explanation to the user whose content is removed or restricted;",
        "terms and conditions that say, in plain words, what is allowed and how moderation works."
      ]],
      ["p", "There is good news for smaller players: **micro and small enterprises** are exempt from most of the additional obligations for online platforms (Article 19). The basic hosting duties, however, apply regardless of size. Knowing exactly where that line runs saves you from both over-building and under-building."],

      ["h2", "The part most businesses overlook: your rights as a platform user"],
      ["p", "For many businesses, the DSA matters most not as an obligation but as a **tool**. If you sell through a marketplace, advertise on social media or rely on a profile for bookings, the DSA gives you rights you did not have before:"],
      ["ul", [
        "**A reason.** If a platform removes your content, demotes it, suspends your account or stops payments, it must give you a clear statement of reasons (Article 17).",
        "**A complaint.** Online platforms must offer a free internal complaint system, and decisions may not be taken purely automatically (Article 20).",
        "**An independent review.** You can turn to a certified out-of-court dispute settlement body (Article 21).",
        "**Transparency on ads.** Ads must show who is behind them and the main parameters used to target them (Article 26)."
      ]],
      ["p", "In practice, a suspended shop or ad account is often treated as a customer-service problem. It is also a legal one — and a business that can cite the right article in its complaint is far more likely to get a real answer."],

      ["h2", "Selling on marketplaces: traceability"],
      ["p", "Online marketplaces must collect and verify basic information about the traders who sell through them — name, contact details, registration and payment information (Article 30). If you sell on a marketplace, expect these requests and keep your company details consistent everywhere: on your website, your legal notice and your seller profiles. Inconsistency is one of the most common reasons for delays and suspensions."],

      ["h2", "A lesson that reaches every website"],
      ["p", "The DSA's ban on dark patterns formally applies to online platforms. But the principle behind it — don't design interfaces that trick people into choices they didn't intend — also runs through consumer law and data protection law. Pre-selected options, hidden \"reject\" buttons and confusing cancellation flows are increasingly treated as legal problems, not just bad taste. Honest design is becoming a compliance requirement."],

      ["h2", "The point"],
      ["p", "The DSA is a reminder that a digital presence is never only yours. It lives on servers, platforms and marketplaces with their own rules — and now with legal duties towards you. Understanding those rules lets you design features responsibly, and defend your business when a platform gets it wrong."],
      ["note", "Planning a review section, a community or a marketplace? We can design it with the right reporting and moderation flow from day one — **talk to us** about your project."]
    ],
    sources: [
      ["Digital Services Act — Regulation (EU) 2022/2065 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2022/2065/oj"],
      ["European Commission — The Digital Services Act", "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act"],
      ["European Commission — AliExpress fined €550 million (July 2026)", "https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act"],
      ["Goran Kolouh on Medium — The fine that missed the point", "https://gorankolouch.medium.com/the-fine-that-missed-the-point-why-platform-xs-anti-muslim-amplification-is-a-digital-services-b7007ec68ff0"]
    ]
  },

  {
    slug: "eu-ai-act-website",
    tag: "AI Act",
    t: "Your Chatbot Has to Say It Is a Chatbot",
    d: "The EU AI Act's transparency rules apply since 2 August 2026. What changed with the Digital Omnibus, what did not — and what to build into a business website now.",
    md: "The EU AI Act's transparency rules apply since 2 August 2026. What the Digital Omnibus changed — and what to build into a business website now.",
    lead: "The EU AI Act's transparency rules apply since 2 August 2026. Here is what the Digital Omnibus delayed, what it did not — and what a business website should build in now.",
    date: "October 2026", iso: "2026-10-18",
    blocks: [
      ["p", "Many businesses heard one thing about the AI Act this summer: \"it was delayed\". That is half true. The Digital Omnibus, adopted in June and in force since late July 2026, postponed the rules for **high-risk** AI systems. It did not postpone the rules most likely to affect a normal business website."],
      ["p", "If your site has a chatbot, publishes AI-generated images or uses AI to produce content, the relevant obligations already apply."],
      ["quote", "Transparency is the part of the AI Act that reaches almost everyone — and it was never delayed."],

      ["h2", "The timeline, as it stands"],
      ["ul", [
        "**1 August 2024** — the AI Act enters into force.",
        "**2 February 2025** — banned practices (such as manipulative or exploitative AI) and the AI literacy duty apply.",
        "**2 August 2025** — rules for general-purpose AI models apply.",
        "**2 August 2026** — transparency obligations (Article 50) and most remaining rules apply.",
        "**2 December 2026** — new ban on AI systems that generate non-consensual intimate imagery; end of the grace period for machine-readable marking by systems already on the market.",
        "**2 December 2027** — high-risk rules for stand-alone systems (Annex III), such as AI used in hiring or credit decisions — postponed by the Omnibus.",
        "**2 August 2028** — high-risk rules for AI built into regulated products (Annex I)."
      ]],

      ["h2", "What applies to a business website today"],
      ["h3", "1. Chatbots must be recognisable as AI"],
      ["p", "AI systems that interact directly with people must be designed so that people know they are dealing with a machine, unless it is obvious from the context (Article 50(1)). Formally, this duty sits with the provider of the system. In practice, it is your visitors who must be told — so the disclosure belongs in your design: a clear label at the start of the conversation, not a sentence hidden in the privacy policy."],
      ["h3", "2. Deepfakes must be disclosed"],
      ["p", "If you publish AI-generated or manipulated images, audio or video that look real — a realistic \"photo\" of a person, a place or an event — you must disclose that it is artificial (Article 50(4)). Clearly artistic, satirical or fictional work gets a lighter, adapted treatment. A stylised illustration is not the problem; a realistic fake \"customer photo\" is."],
      ["h3", "3. AI-written public-interest text"],
      ["p", "AI-generated text published to inform the public on matters of public interest must be disclosed — unless it has gone through human review and someone holds editorial responsibility. For a business blog, the lesson is simple: keep a human editor in the loop and stand behind what you publish."],
      ["h3", "4. AI literacy in your team"],
      ["p", "Since February 2025, organisations that use AI systems must take measures to build sufficient AI literacy among the people who use them on their behalf (Article 4). The Omnibus softened this — you no longer have to guarantee a specific level for each person — but the duty to take measures remains. A short internal guideline and basic training count."],

      ["h2", "When AI becomes high-risk"],
      ["p", "Some uses are classed as high-risk because they can decide people's opportunities: screening job applications, evaluating employees, assessing creditworthiness, access to education or essential services. If your website or HR process uses AI to rank applicants, you are close to this category. The detailed duties — risk management, documentation, human oversight — now apply from **December 2027**. That is not a reason to wait; it is preparation time."],
      ["p", "It is also where the law still has gaps. As I have argued elsewhere, private employers using AI in hiring are not required to carry out a fundamental-rights impact assessment before deployment — a check the Act does require for credit and insurance. Legal knowledge here means knowing not only what is required, but what is wise."],

      ["h2", "The AI Act does not replace the GDPR"],
      ["p", "A chatbot conversation is full of personal data. The GDPR applies in parallel: you need a legal basis, a processor agreement with the chatbot provider, a line in your privacy notice and a plan for how long conversations are stored. Decisions with legal or similarly significant effects may not be left purely to automated processing (Article 22 GDPR). Most AI compliance problems on websites are, in the end, data protection problems."],

      ["h2", "What fines look like"],
      ["p", "Violating the banned practices can cost up to €35 million or 7% of worldwide turnover; most other breaches, including transparency, up to €15 million or 3%. For SMEs and start-ups, the lower of the two amounts applies. As with the GDPR, the realistic risk for a small business is less a maximum fine than a complaint, a correction order — or lost trust."],

      ["h2", "A short checklist"],
      ["check", [
        "List every AI tool on your website and in your workflows.",
        "Label your chatbot clearly as AI at the start of every conversation.",
        "Disclose realistic AI-generated images, audio and video.",
        "Keep a human editor responsible for published content.",
        "Update your privacy notice and processor agreements for AI tools.",
        "Write a one-page internal AI guideline for your team."
      ]],

      ["h2", "The point"],
      ["p", "AI makes it easy to add impressive features to a website in an afternoon. The law asks a slower question: will the people on the other side know what they are dealing with? Building that honesty into the design from the start is not a burden. It is what makes the feature trustworthy enough to use."],
      ["note", "Adding a chatbot or AI features to your website? We design them with the right disclosures and privacy setup built in — **get in touch**."]
    ],
    sources: [
      ["AI Act — Regulation (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["European Commission — AI Act implementation timeline", "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"],
      ["Gibson Dunn — AI Act Omnibus agreement: postponed high-risk deadlines", "https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/"],
      ["Goran Kolouh on Medium — The algorithm Europe forgot to check", "https://gorankolouch.medium.com/the-algorithm-europe-forgot-to-check-1bc7f0ac18d2"]
    ]
  }
];
