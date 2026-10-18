// Site-wide configuration.
export const SITE_URL = "https://lexoradigital.com";
export const BRAND = "Lexora Digital";
export const TAGLINE = "WEB · LAW · LANGUAGE · DESIGN";

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
