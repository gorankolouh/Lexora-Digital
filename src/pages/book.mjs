// Book companion pages: free Excel workbooks for readers of the compliance handbooks.
// Linked from the ebooks (QR code + link). Not in the menu or sitemap, noindex: the files are a reader bonus.
import { esc, fmt, path, icon } from "../lib.mjs";
import { pageHero, head, band, disclaimer } from "../components.mjs";

const sec = (inner, cls = "", id = "") => `<section class="section ${cls}"${id ? ` aria-labelledby="${id}"` : ""}><div class="wrap">${inner}</div></section>`;
const kb = (bytes) => `${Math.max(1, Math.round(bytes / 1024))} KB`;

export const BOOKS = {
  "en-handbook-2027": {
    lang: "en",
    slug: "handbook-2027/",
    dir: "/downloads/handbook-2027/en/",
    zip: "Excel-Workbooks_Chapters-1-10_EN.zip",
    meta: { title: "Companion Excel workbooks — The European Business Compliance Handbook 2027 | Lexora Digital",
            desc: "Free Excel workbooks for readers of The European Business Compliance Handbook, 2027 Edition: one workbook per chapter, with automatic deadlines and checks." },
    label: "Book companion",
    h1: "Companion Excel *workbooks*",
    lead: "Free for readers of **The European Business Compliance Handbook — 2027 Edition**. One workbook per chapter, one sheet per record in the book.",
    zipCta: "Download all 10 workbooks (ZIP)",
    listH: "Download by chapter",
    listLead: "Each file opens in Microsoft Excel or LibreOffice Calc. No sign-up, no tracking.",
    insideH: "What's inside each workbook",
    inside: [
      "**One sheet per record** from the book (1A–10G), with the same field names, so the book and the workbook line up.",
      "**Fictional example rows** from the book, so you can see what a good entry looks like — overwrite or delete them.",
      "**Automatic calculations** in grey *(auto)* columns: request deadlines, NIS2 24 h / 72 h / final-report deadlines, risk scores, pay-gap percentage, overdue checks.",
      "**Pre-filled catalogues**: AI checkpoints, pay-transparency actions, whistleblowing setup tasks, NIS2 controls, WCAG checks, e-invoicing tasks and invoice fields.",
      "**Dropdowns and warning colours** — red for overdue, amber for due within 30 days.",
      "An **overview sheet** with a legend and links to every sheet."
    ],
    chapters: [
      ["Chapter-01_GDPR-compliance.xlsx", "1 · GDPR compliance", "Processing records, data subject requests, breaches, processors, cookie audit"],
      ["Chapter-02_Vendor-and-AI-supplier-assessment.xlsx", "2 · Vendor and AI supplier assessment", "Supplier register and assessment log"],
      ["Chapter-03_AI-compliance-toolkit.xlsx", "3 · AI compliance toolkit", "AI inventory, privacy checkpoints, actions, learning, incidents, reviews"],
      ["Chapter-04_AI-workplace-policy.xlsx", "4 · AI workplace policy", "Tool requests and policy acknowledgements"],
      ["Chapter-05_Pay-transparency.xlsx", "5 · Pay transparency", "Job evaluation, pay data, pay-gap assessment, requests, actions, sign-off"],
      ["Chapter-06_Whistleblower-channels.xlsx", "6 · Whistleblower channels", "Setup tasks, handlers, national rules, confidential case record"],
      ["Chapter-07_NIS2-cybersecurity.xlsx", "7 · NIS2 cybersecurity", "Scope, registration, roles, controls, risks, suppliers, incidents, evidence"],
      ["Chapter-08_European-Accessibility-Act.xlsx", "8 · European Accessibility Act", "Scope, authorities, assets, WCAG tests, barriers, feedback, burden assessment"],
      ["Chapter-09_Digital-Services-Act.xlsx", "9 · Digital Services Act", "Service classification, notices and decisions, contact points"],
      ["Chapter-10_E-invoicing-readiness.xlsx", "10 · E-invoicing readiness", "Applicability, mandates, action plan, invoice fields, providers, partners, sign-off"]
    ],
    bandH: "Want it done for you?",
    bandLead: "Lexora Digital puts these records into practice for your business — websites, GDPR and cookie fixes, translation for EU markets.",
    bandCta: "Contact us",
    bandAlt: "EU compliance kits",
    disclaimer: "The workbooks are organisational tools and do not replace legal advice. Laws, deadlines and national rules change — check the current position before important decisions."
  }
};

BOOKS["de-handbuch-2027"] = {
  lang: "de",
  slug: "handbuch-2027/",
  dir: "/downloads/handbuch-2027/de/",
  zip: "Excel-Arbeitsmappen_Kapitel-1-10_DE.zip",
  meta: { title: "Excel-Arbeitsmappen zum Compliance-Handbuch für KMU 2027 | Lexora Digital",
          desc: "Kostenlose Excel-Arbeitsmappen für Leserinnen und Leser des Compliance-Handbuchs für KMU, Ausgabe 2027: eine Arbeitsmappe je Kapitel, mit automatischen Fristen." },
  label: "Zum Buch",
  h1: "Excel-*Arbeitsmappen* zum Buch",
  lead: "Kostenlos für Leserinnen und Leser des **Compliance-Handbuchs für KMU — Ausgabe 2027**. Eine Arbeitsmappe je Kapitel, ein Blatt je Formular aus dem Buch.",
  zipCta: "Alle 10 Arbeitsmappen herunterladen (ZIP)",
  listH: "Download je Kapitel",
  listLead: "Jede Datei öffnet sich in Microsoft Excel oder LibreOffice Calc. Ohne Anmeldung, ohne Tracking.",
  insideH: "Das steckt in jeder Arbeitsmappe",
  inside: [
    "**Ein Blatt je Formular** aus dem Buch, mit denselben Spalten – Buch und Arbeitsmappe passen zusammen.",
    "**Beispielzeilen** aus dem Buch, damit Sie sehen, wie ein guter Eintrag aussieht – einfach überschreiben oder löschen.",
    "**Automatische Berechnungen** in den grauen Spalten: Fristen nach DSGVO, HinSchG und NIS2, Risikostufen, Entgeltlücke, Ampeln für Überfälliges.",
    "**Vorbereitete Kataloge**: NIS2-Maßnahmen, WCAG-Prüfkatalog, Einrichtungs- und Umsetzungs-Checklisten, E-Rechnungs-Pflichtangaben.",
    "**Auswahllisten und Warnfarben** – Rot für überfällig, Gelb für fällig in den nächsten 30 Tagen.",
    "Ein **Übersichtsblatt** mit Legende und Links zu allen Blättern."
  ],
  chapters: [
    ["Kapitel-01_DSGVO.xlsx", "1 · DSGVO-Compliance-Kit", "Verarbeitungsverzeichnis, Betroffenenanfragen, Datenpannen, Auftragsverarbeiter, Cookie-Audit"],
    ["Kapitel-02_Dienstleister-KI-Anbieter.xlsx", "2 · Dienstleister- & KI-Anbieterprüfung", "Dienstleisterverzeichnis und Prüfprotokoll"],
    ["Kapitel-03_KI-Compliance.xlsx", "3 · KI-Compliance-Toolkit", "KI-Tool-Register, DSGVO-Prüfpunkte, Schulungsnachweis, Vorfälle, Freigabe"],
    ["Kapitel-04_KI-Richtlinie.xlsx", "4 · KI-Richtlinien-Paket", "KI-Tool-Anträge, Schulungen und Bestätigungen"],
    ["Kapitel-05_Entgelttransparenz.xlsx", "5 · Entgelttransparenz-Kit", "Entgeltbänder, Entgeltdaten, Entgeltlücken-Rechner, Auskunftsersuchen, Checkliste"],
    ["Kapitel-06_Hinweisgeberschutz.xlsx", "6 · Hinweisgeberschutz-Kit", "Einrichtungs-Checkliste, Meldestelle, Rechtslage, Fallregister"],
    ["Kapitel-07_NIS2.xlsx", "7 · NIS2-Compliance-Kit", "Betroffenheit, Behörden, Rollen, Maßnahmen, Risiken, Lieferanten, Vorfälle, Nachweise"],
    ["Kapitel-08_Barrierefreiheit.xlsx", "8 · Barrierefreiheits-Kit", "Anwendungsbereich, Behörden, digitale Angebote, WCAG-Katalog, Mängel, Rückmeldungen"],
    ["Kapitel-09_Digital-Services-Act.xlsx", "9 · DSA-Kit", "Betroffenheits-Check, Meldungen & Entscheidungen, Kontaktstellen"],
    ["Kapitel-10_E-Rechnung.xlsx", "10 · E-Rechnungs-Kit", "Betroffenheit, Pflichten & Fristen, Umsetzungsplan, Pflichtangaben, Software, Partner"]
  ],
  bandH: "Lieber umsetzen lassen?",
  bandLead: "Lexora Digital setzt die Anforderungen für Ihr Unternehmen um – Websites, DSGVO- und Cookie-Korrekturen, Übersetzungen für EU-Märkte.",
  bandCta: "Kontakt aufnehmen",
  bandAlt: "Compliance-Kits",
  disclaimer: "Die Arbeitsmappen sind Organisationswerkzeuge und ersetzen keine Rechtsberatung. Gesetze, Fristen und Behördenpraxis ändern sich – prüfen Sie vor wichtigen Entscheidungen den aktuellen Stand."
};

export function bookPage(t, key, sizes) {
  const b = BOOKS[key];
  const crumbs = [[path(t, "home"), t.ui.home], [null, b.label]];
  const zipHref = `${b.dir}${b.zip}`;
  return [
    pageHero({ label: b.label, glyph: "§", h1: b.h1, lead: b.lead, crumbs,
      extra: `<div class="hero-cta rise d4"><a class="btn btn-lime" href="${zipHref}" download>${icon("download", 16, 2)}<span>${esc(b.zipCta)}</span></a></div><p class="small dim rise d4">ZIP · ${kb(sizes[b.zip] || 0)}</p>` }),
    sec(`${head({ h2: b.listH, lead: b.listLead, id: "b1" })}
      <ul class="kit-others reveal">${b.chapters.map(([file, title, sub]) => `<li><a class="link" href="${b.dir}${file}" download>${icon("download", 15, 1.8)} ${esc(title)}</a><span class="small dim">${esc(sub)} · XLSX · ${kb(sizes[file] || 0)}</span></li>`).join("")}</ul>`, "rule", "b1"),
    sec(`${head({ h2: b.insideH, id: "b2" })}
      <ul class="kit-inside reveal">${b.inside.map((l) => `<li>${icon("check", 16, 2)}<span>${fmt(l)}</span></li>`).join("")}</ul>`, "rule", "b2"),
    band({ h2: b.bandH, lead: b.bandLead, actions: [{ href: path(t, "contact"), label: b.bandCta, primary: true }, { href: path(t, "shop"), label: b.bandAlt }] }),
    `<div class="wrap fine">${disclaimer(b.disclaimer)}</div>`
  ].join("\n");
}
