// Journal articles — English. Block types: p, h2, h3, ul, quote, note, check (checklist).
export default [
  {
    slug: "copy-privacy-policy",
    tag: "GDPR",
    cta: "check",
    t: "Can you copy another website's privacy policy?",
    mt: "Can You Copy a Privacy Policy? The Risks Under EU Law",
    d: "Short answer: no. Why privacy policies can be protected by copyright, why a copied policy is almost always wrong under the GDPR, and how to get one that fits your website in six steps.",
    lead: "Copy a competitor's privacy policy, swap in your company name, done? It saves ten minutes and can cost far more. Here is what copyright law and the GDPR say, and how to quickly get a privacy policy that actually matches your website.",
    date: "November 2026", iso: "2026-11-14",
    blocks: [
      ["p", "Anyone launching a website knows the temptation. The privacy policy is the last missing page, a competitor has a nice one, so it gets copied: new name, new address, publish. This is exactly how businesses end up with legal letters, and with privacy policies that describe someone else's website."],
      ["quote", "A privacy policy describes your data processing, not somebody else's."],

      ["h2", "The short answer"],
      ["check", [
        "Copying another website's privacy policy **word for word is generally not allowed**. Legal texts can be protected by copyright.",
        "Even where copyright doesn't apply, a copied policy is **almost always factually wrong**, because it lists another site's tools. An inaccurate privacy notice breaches the GDPR.",
        "**Free templates and generators are fine**, but only on their terms, which often include a visible credit link.",
        "The only safe policy is one that reflects **your actual services, forms and processes** and is kept up to date."
      ]],

      ["h2", "Risk 1: copyright"],
      ["p", "Privacy policies look like forms, but they aren't. Whoever writes one decides on structure, selection and wording, and Article 12 GDPR demands exactly that effort: information must be concise, transparent and written in clear and plain language. Under EU law, a text is protected when it is the author's own intellectual creation, a standard set by the Court of Justice in Infopaq (C-5/08)."],
      ["p", "German courts have applied this to privacy policies. In 2023 the Higher Regional Court of Munich (OLG München, decision of 3 March 2023, 6 W 1491/22) held, after a summary review, that the privacy policy in question was a copyright-protected literary work. The case is a common one: a provider offered a **free template** on condition that users display a credit link. The website owner used it without the link, and the provider claimed a licence fee. The template itself was fine. Ignoring the licence condition was the problem."],
      ["p", "The usual consequences of infringement are a cease-and-desist demand, damages (often calculated as a retroactive licence fee) and the other side's legal costs. Not every standard sentence is protected, and the mandatory information itself belongs to no one. What is protected is the specific wording and arrangement of a text."],

      ["h2", "Risk 2: the copied policy is wrong"],
      ["p", "The bigger problem is usually the content. Article 13 GDPR requires information about **your** processing, including:"],
      ["ul", [
        "the identity and contact details of the controller and, where applicable, the data protection officer",
        "the purposes and legal basis of each processing activity, including the legitimate interests relied on",
        "the recipients, such as your host, newsletter tool, booking system or payment provider",
        "transfers to non-EU countries such as the US, and the safeguards used",
        "how long data is kept, or the criteria for deciding",
        "the data subject's rights, the right to withdraw consent and the right to complain to a supervisory authority"
      ]],
      ["p", "A copied policy describes another website. The typical result: it mentions Google Analytics you don't use while your Meta Pixel is missing, names the wrong host, leaves out your contact form or booking tool, and lists retention periods that don't match what you do."],
      ["p", "That means mandatory information is missing or false. Data protection authorities can act on it, and breaches of the transparency rules fall under the higher fine bracket of Article 83(5) GDPR (up to €20 million or 4% of worldwide annual turnover). For small businesses fines are usually far lower, or authorities simply order a fix, but the bracket shows how seriously the law treats transparency."],
      ["p", "In Germany there is a second front. On 27 March 2025 the Federal Court of Justice (BGH, I ZR 186/17 and others) confirmed that consumer associations and competitors can pursue GDPR breaches through unfair-competition claims, and that the information duties in Articles 12 and 13 GDPR are market-conduct rules. For businesses selling into the German market, an inaccurate privacy policy is therefore more than a regulatory issue."],

      ["h2", "What about templates, generators or AI?"],
      ["p", "Templates and generators from law firms and specialist providers are a legitimate route, especially for small websites. Read the **licence terms**: free use is often tied to a visible credit or limited to your own site. Remove the credit and you are in the same position as the website owner in the Munich case."],
      ["p", "A generator also only knows your website as well as you answer its questions. Tick every box to be safe, or forget a service, and you are back to a policy that doesn't match reality."],
      ["p", "And AI? A chatbot will write a privacy policy in seconds. The core problem remains: it doesn't know which services your website loads, it tends to fill gaps with plausible but wrong details, and it can reproduce wording from other people's templates. Useful as a draft, never as a finished text."],

      ["h2", "Six steps to a privacy policy that fits"],
      ["check", [
        "**Take inventory.** Which services does your website actually load? Hosting, fonts, maps, videos, analytics, forms, newsletter, chat, shop and payments. Your browser's developer tools (the “Network” tab) show which external servers are contacted when a page loads.",
        "**Describe each service.** Purpose, legal basis, recipient, international transfers and retention period.",
        "**Use a reputable template with a valid licence.** A template or generator is fine if you meet its conditions, such as keeping the credit link.",
        "**Check it against your website.** The cookie banner, forms and embedded content must match the policy. If it says “no analytics cookies”, none may be set.",
        "**Keep it current.** Every new tool or form goes into the policy straight away. A “last updated” date helps you and your visitors.",
        "**Get it reviewed when in doubt.** For a binding legal assessment of your specific case, a lawyer is the right person to ask."
      ]],

      ["h2", "Frequently asked questions"],
      ["h3", "Can I reuse a few sentences from another policy?"],
      ["p", "Short, purely factual standard sentences and the legally required information are generally not protected. Stitching together whole paragraphs from several policies raises the risk and rarely produces a coherent text. A properly licensed template plus your own details works better."],
      ["h3", "I copied my privacy policy. What should I do now?"],
      ["p", "Replace it with your own accurate policy as soon as possible. If you have already received a legal letter, don't ignore it: note the deadline, and don't sign a pre-written cease-and-desist declaration without having it checked by a lawyer."],
      ["h3", "Does the same apply to terms and conditions and the legal notice?"],
      ["p", "The principle is the same. Terms and conditions can also be protected by copyright. A legal notice (in Germany, the Impressum under § 5 DDG) consists mostly of mandatory facts, so copying gains you little, and wrong details there are a separate risk."],

      ["note", "Not sure your privacy policy matches your website? Our **free GDPR & cookie check** compares it with the services your website actually loads, and we fix any issues from €99."]
    ],
    sources: [
      ["OLG München, decision of 3 March 2023 – 6 W 1491/22: copyright protection of privacy policies (German, gesetze-bayern.de)", "https://www.gesetze-bayern.de/Content/Document/Y-300-Z-GRURRS-B-2023-N-24700"],
      ["CJEU, Infopaq International, C-5/08 (EUR-Lex)", "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62008CJ0005"],
      ["BGH press release no. 59/2025 on the judgments of 27 March 2025 (German)", "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025059.html"],
      ["GDPR – Regulation (EU) 2016/679, Articles 12, 13 and 83 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"]
    ]
  },
  {
    slug: "ai-chats-court-company-data",
    tag: "AI & GDPR",
    t: "Your Team's AI Chats Could End Up in Court",
    mt: "Your Team's AI Chats Could End Up in Court",
    d: "A US court ordered OpenAI to hand over 20 million ChatGPT conversations. What that means for European SMEs — and five steps to protect your company data.",
    lead: "Most businesses treat AI chats like thinking out loud. Legally, they are closer to emails sitting on someone else's server — and a US court has just shown that they can be demanded in litigation.",
    date: "November 2026", iso: "2026-11-14",
    blocks: [
      ["p", "In January 2026, a US federal judge upheld an order requiring OpenAI to hand over 20 million ChatGPT conversations to the New York Times and other publishers in a copyright lawsuit. The logs were de-identified and shared under a protective order. Still, the message for every business is clear: what your team types into an AI tool is a record, and records can be demanded."],
      ["quote", "Treat AI chats as business records today — whichever way the courts go."],

      ["h2", "The legal gap nobody planned for"],
      ["p", "In a new paper for the Journal of Free Speech Law, Caroline De Cock puts her finger on the problem. Human rights law has long protected two spaces. One is your inner thoughts, the *forum internum*, protected absolutely. The other is what you say in public, the *forum externum*, which the state may limit for good reasons."],
      ["p", "That split worked while thinking left no trace. Today people draft, test ideas and voice half-formed worries in a chatbot. Every one of those steps is stored by a provider and can be requested in litigation."],
      ["p", "De Cock proposes a third space between thought and speech: the **forum interstitiale**. It would cover provisional, unshared steps in someone's reasoning — a search, a draft, an argument tried out and dropped. Courts, she argues, ask the wrong question when they ask whether a chatbot is \"like\" a lawyer or a therapist. The better question is what the person was doing. Usually, they were thinking."],
      ["p", "It is a strong argument, but for now it remains a proposal. No court or legislature has adopted it. Until one does, businesses have to plan for the law as it stands."],

      ["h2", "Why this matters for a European SME"],
      ["p", "A US copyright case may seem far from a consultancy in Cologne or a logistics firm in Rotterdam. In practice it touches you in four ways."],
      ["ul", [
        "**Your data sits with US providers.** Most popular AI tools are run by US companies. Their logs can become evidence in US proceedings, whatever your EU contract says about confidentiality.",
        "**The GDPR applies to what employees paste in.** Client names, CVs and health details typed into a chatbot are personal data. You need a legal basis, a processor agreement where the provider acts as processor, and a clear retention period (Articles 5, 28 and 32 GDPR).",
        "**Trade secrets need reasonable steps.** Under the EU Trade Secrets Directive (2016/943), information only counts as a trade secret if you take reasonable steps to keep it secret. Letting staff paste pricing models or source code into consumer chatbots weakens that position.",
        "**The AI Act expects AI literacy.** Since February 2025, organisations that use AI systems must take measures to build AI literacy among the people who use them (Article 4). A written AI-use policy is the simplest way to show it."
      ]],

      ["h2", "The commercial risk, in plain terms"],
      ["p", "The danger is rarely one dramatic leak. It is the slow build-up of sensitive material in places you do not control: a sales manager drafting a tender, an HR officer summarising a dismissal file, a founder asking for a second opinion on a contract."],
      ["p", "If a dispute arises, the other side will ask where your documents live. \"In our employees' chatbot histories\" is not an answer you want to give."],

      ["h2", "Five steps to take this quarter"],
      ["check", [
        "**Write a one-page AI-use policy.** Approved tools, what may never be entered (client personal data, trade secrets, legal files) and who to ask when unsure.",
        "**Use business accounts, not personal ones.** Team and enterprise plans usually offer processor agreements, admin controls and opt-outs from model training. Check each provider's terms.",
        "**Set retention to the minimum.** Turn off chat history where you can, or set short automatic deletion. De Cock's advice to AI providers applies to you too: keep less.",
        "**Separate identity from content.** Where possible, use tools or settings that pseudonymise users, so a disclosed log does not point straight to a named employee or client.",
        "**Train your team once, then remind them.** A 30-minute session on what not to paste covers the AI-literacy duty and prevents most problems."
      ]],

      ["h2", "The point"],
      ["p", "The law may one day recognise that a conversation with an AI is part of how we think, and deserves strong protection. De Cock makes a persuasive case that it should. But no business should bet its client data on a legal theory that does not yet exist."],
      ["note", "Need an AI-use policy or a GDPR check of the AI tools your team uses? Our *Compliance-Handbuch für KMU* covers GDPR, the AI Act, NIS2 and the DSA — and we set it up for you in practice. **Get in touch**."]
    ],
    sources: [
      ["Cybersecurity News — Judge orders OpenAI to release 20 million anonymised ChatGPT chats (Jan 2026)", "https://cybersecuritynews.com/openai-20-million-chatgpt-chats/"],
      ["eWeek — OpenAI ordered to hand over 20M ChatGPT logs", "https://www.eweek.com/news/openai-chatgpt-logs-new-york-times-copyright-mdl/"],
      ["GDPR — Regulation (EU) 2016/679 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2016/679/oj"],
      ["Trade Secrets Directive — Directive (EU) 2016/943 (EUR-Lex)", "https://eur-lex.europa.eu/eli/dir/2016/943/oj"],
      ["AI Act — Regulation (EU) 2024/1689 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"]
    ]
  },
  {
    slug: "ai-agents-human-judgment",
    tag: "AI",
    t: "Who Holds the Anchor? Why AI Agents Still Need Human Judgment",
    mt: "Why AI Agents Still Need Human Judgment",
    d: "A new research paper argues that no AI system can fully vouch for itself. What that means for oversight, for the EU AI Act — and for any business using AI agents.",
    lead: "AI agents now write code, draft reports and run whole workflows. A new preprint argues that however capable they become, one thing cannot be automated away: a person or institution that decides what the system is for — and checks that it still is.",
    date: "November 2026", iso: "2026-11-05",
    blocks: [
      ["p", "Google says three quarters of its new code is now generated by AI and approved by engineers. Output is growing much faster than anyone's capacity to review it. And when review fails, the damage is real:"],
      ["ul", [
        "**Fabricated sources.** A Deloitte report delivered to the Australian government contained an invented quotation from a federal court judgment. A university researcher, not the firm, caught it.",
        "**Fake citations at scale.** Early in 2026, roughly one biomedical paper in 277 cited a work that does not exist.",
        "**Irreversible actions.** Replit's coding agent deleted a production database during a code freeze, without authorisation.",
        "**Blame-shifting.** Air Canada argued that its chatbot was responsible for its own statements. The tribunal rejected that: the company answers for what its system says."
      ]],
      ["p", "The paper \"The Ineliminable Anchor\", by Junjie Li, Zhaoyuan Ma and colleagues, offers a framework for deciding where human judgment has to sit in these systems. Here is what it says, and why it matters for anyone deploying AI in Europe."],
      ["quote", "Execution and routine checks can be automated. Deciding what counts as success cannot."],

      ["h2", "The anchor: where outside judgment enters"],
      ["p", "An **anchor** is any point where trusted information from outside an AI system enters it: a verified identity, reliable reference data, an authorised specification, or a person's sign-off."],
      ["p", "The authors propose that anyone designing AI oversight answers three questions, in this order:"],
      ["ul", [
        "**Reference.** What trusted information does this judgment need — and can the system's own records supply it?",
        "**Check.** Who checks, and how often?",
        "**Authority.** Who may set or change the goal, and who signs off?"
      ]],
      ["p", "The order matters. Most debates jump straight to \"keep a human in the loop\". The anchor framework first asks what that human would need to know for the check to mean anything."],

      ["h2", "Why a system cannot vouch for itself"],
      ["p", "The central claim is that an AI's own records can look identical whether it stayed on track or drifted from its goal."],
      ["p", "Take a citation in a bibliography. A complete-looking entry — authors, title, journal, year — reads the same whether the paper is real or invented. No amount of scrutiny of the citing document settles it. Only a search of the actual literature does. That search is an anchor."],
      ["p", "The authors prove this formally: if two runs leave the same record but differ in whether the goal was kept, no monitor that reads only that record can judge both correctly. Adding more monitors that read the same record does not help."],
      ["p", "A second result goes further. Whether a system will keep its goal over an unlimited future cannot be decided in advance by any algorithm — the proof reduces it to Turing's halting problem. Certification before launch is therefore never complete. Checks also have to happen while the system runs."],

      ["h2", "How often to check"],
      ["p", "If one check at the end is not enough, how far apart should checks be? The paper offers a simple rule of thumb based on how reliable each step is."],
      ["p", "Suppose each step an agent takes — one edit-test-retry cycle, say — succeeds 95% of the time. The chance that a whole run of steps is correct shrinks with every step. To keep that chance above 50% between checks, you need a checkpoint at least every **13 steps**. At 99% reliability the spacing grows to 68 steps; demand 90% confidence at 95% reliability and you need a check every 2 steps."],
      ["p", "This matches field data. METR found that frontier agents completed nearly all tasks that take a person under four minutes, but fewer than 10% of tasks that take more than about four hours. Long tasks need checks spread along the way — and always before irreversible actions."],

      ["h2", "Five tiers: where humans belong"],
      ["p", "Not every task needs the same oversight. The paper sorts tasks into five tiers, and one task can touch several at once:"],
      ["ul", [
        "**1. Mechanically verifiable** — proof checking, compiling code, payment reconciliation. The anchor sits at design time: review the specification and the verifier.",
        "**2. Statistically auditable** — recommendations, classification, content triage. The anchor sits in audit design: sampling, reference labels, monitoring.",
        "**3. Long-chain, open-ended** — long-running agents, autonomous driving, automated operations. Spaced checkpoints, checks before irreversible steps, automatic safeguards.",
        "**4. Goal-setting** — research agendas, product definition, policy goals. The human principal keeps authority over the goal; AI advises.",
        "**5. Accountability-terminal** — medical sign-off, judicial decisions, safety-critical release. A final human sign-off by someone with real control."
      ]],
      ["p", "Automation and human control are not opposites. Routine checking can be automated in the first three tiers. Deciding what the system is for stays with people in the last two."],

      ["h2", "The legal angle: oversight that actually works"],
      ["p", "Europe has already written human oversight into law. **Article 14 of the EU AI Act** requires high-risk AI systems to be designed so that natural persons can oversee them effectively, in proportion to the risks, the level of autonomy and the context of use. Article 14(4) lists what overseers must be able to do, from understanding the system's limits to stopping it."],
      ["p", "The anchor framework adds a warning: a name on an oversight form is not oversight. A human check only works if the person has three things:"],
      ["ul", [
        "**Evidence** — the reference information the system itself lacks;",
        "**Time** — enough to respond before the consequences land;",
        "**Powers** — real authority to override or abort."
      ]],
      ["p", "Without them, operators risk becoming what researcher Madeleine Elish calls \"moral crumple zones\": the people who absorb the blame for a failure they had no real power to prevent."],
      ["p", "The research also cautions against assuming that people always improve the result. A meta-analysis of 106 experiments found that human–AI teams outperformed humans alone, but on average did worse than the better of the two working alone. Reviewers sometimes miss AI errors and sometimes turn correct outputs into wrong ones. The authors' answer: measure how well each human checkpoint actually performs, and report it."],

      ["h2", "What this means for businesses"],
      ["check", [
        "**Map your references.** For each AI decision, ask what trusted data would prove it right — and whether the system can actually see it.",
        "**Space your checks.** Long agent runs need checkpoints along the way, not only a final review.",
        "**Gate irreversible actions.** Deleting data, sending money or filing documents should always pass a check first.",
        "**Name the principal.** Decide who may set and revise the AI's goals, and write it down.",
        "**Equip the reviewer.** Give overseers the evidence, time and authority to intervene — otherwise the oversight is decoration."
      ]],

      ["h2", "The point"],
      ["p", "The paper is not anti-automation. Execution, verification and routine decisions can all be delegated, and the room for automation grows as AI improves. What cannot be delegated is the link back to human authority over purpose. Human judgment is not an optional safety layer on top of an AI system. It is part of its structure."],
      ["note", "Bringing AI agents or chatbots into your business? We help you set up the oversight, documentation and privacy side under the EU AI Act and the GDPR — **get in touch**."]
    ],
    sources: [
      ["Li, Liu, Zhang, Xu & Ma — The Ineliminable Anchor (arXiv:2610.41682, preprint)", "https://arxiv.org/abs/2610.41682"],
      ["AI Act — Regulation (EU) 2024/1689, Article 14 (EUR-Lex)", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
      ["METR — Measuring AI ability to complete long tasks", "https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/"]
    ]
  },
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
