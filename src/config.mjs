// Site-wide configuration.
export const SITE_URL = "https://lexoradigital.com";
export const BRAND = "Lexora Digital";
export const TAGLINE = "WEB · LAW · LANGUAGE · DESIGN";

// ---------------------------------------------------------------------------
// PROFILES — used in the structured data (schema.org "sameAs") so search engines
// can connect these profiles to the brand and to the founder. Clean URLs only (no ?utm… tracking).
// ---------------------------------------------------------------------------
export const ORG_PROFILES = [
  "https://www.linkedin.com/company/lexoradigitalcom/",
  "https://www.instagram.com/lexora_digital/",
  "https://www.trustpilot.com/review/lexoradigital.com"
];
export const FOUNDER = {
  name: "Goran Kolouh",
  jobTitle: "Founder & Director",
  url: "https://kolouch.pro/",
  profiles: [
    "https://kolouch.pro/",
    "https://gorankolouch.medium.com/",
    "https://substack.com/@gorankolouch",
    "https://www.upwork.com/freelancers/~01fd19597aba5eb0ff",
    "https://lexoradigital.gumroad.com/"
  ]
};

// ---------------------------------------------------------------------------
// SHOP — Notion templates sold on Gumroad. Plain links only: no Gumroad script or overlay is loaded,
// so the site stays free of third-party scripts and cookies. Text per product lives in src/i18n/<lang>.mjs → pages.shop.items.
// ---------------------------------------------------------------------------
export const SHOP_URL = "https://lexoradigital.gumroad.com/";
export const SHOP = [
  { key: "bundle", url: "https://lexoradigital.gumroad.com/l/eu-compliance-bundle", price: 69.99 },
  { key: "gdpr", url: "https://lexoradigital.gumroad.com/l/gdpr-compliance-kit", price: 29.99 },
  { key: "ai", img: "ai-toolkit", url: "https://lexoradigital.gumroad.com/l/ai-compliance-toolkit", price: 29.99 },
  { key: "policy", url: "https://lexoradigital.gumroad.com/l/ai-workplace-policy-pack", price: 29.99 },
  { key: "pay", url: "https://lexoradigital.gumroad.com/l/pay-transparency-kit", price: 29.99 },
  { key: "vendor", url: "https://lexoradigital.gumroad.com/l/vendor-ai-supplier-kit", price: 29.99 }
];

export const LANGS = [
  { code: "en", native: "English", ready: true },
  { code: "de", native: "Deutsch", ready: true },
  { code: "nl", native: "Nederlands", ready: true },
  { code: "es", native: "Español", ready: true },
  { code: "hr", native: "Hrvatski", ready: true }
];
export const DEFAULT_LANG = "en";

// Service pages, in menu order
export const SERVICES = ["web", "compliance", "check", "language", "creative"];

// ---------------------------------------------------------------------------
// FORMS — paste your Formspree form IDs here (formspree.io → New form → ID like "xyzabcd").
// While an ID is empty, the form shows a clear "not connected yet" message instead of pretending to send.
// Formspree IDs are public by design (they appear in every form), so they are safe in this file.
// ---------------------------------------------------------------------------
export const FORMS = {
  contact: "mzedwzrr",   // general contact & project enquiries
  check: "xgaoqval"    // GDPR, Cookies & Co. website check
};

// ---------------------------------------------------------------------------
// PLANET VIDEO — optional. Put the files in public/assets/video/ and fill in the paths,
// e.g. { mp4: "/assets/video/planet.mp4", webm: "/assets/video/planet.webm", mobile: "/assets/video/planet-640.mp4" }.
// While empty, the still planet image is used with a lightweight CSS animation.
// ---------------------------------------------------------------------------
export const PLANET_VIDEO = { mp4: "/assets/video/planet-1000.mp4", webm: "/assets/video/planet-1000.webm", mobile: "/assets/video/planet-640.mp4", mobileWebm: "/assets/video/planet-640.webm" };
