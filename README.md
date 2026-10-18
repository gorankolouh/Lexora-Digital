# Lexora Digital — website

Multilingual static website for **Lexora Digital** · WEB · LAW · LANGUAGE · DESIGN
English, German, Dutch, Spanish and Croatian — 85 pages, zero dependencies.

## Run it

```bash
node build.mjs     # builds the whole site into ./dist
npm run dev        # build + local preview on http://localhost:4321/en/
```

Requires Node 18+. No `npm install` needed.

## Deploy (GitHub → Vercel)

1. Upload everything in this folder to the GitHub repository (`dist/` is not needed — Vercel builds it).
2. In Vercel: **Add New → Project → import the repository → Deploy**. `vercel.json` already sets the build command (`node build.mjs`), the output folder (`dist`), clean URLs and security headers.
3. Add the domain `lexoradigital.com` in Vercel → Project → Settings → Domains.

## Before launch — checklist

### 1. Connect the two forms (Formspree)
1. Create a free account at formspree.io and create **two forms**: "Lexora contact" and "Lexora GDPR check".
2. Set the email address that should receive submissions in each form's settings.
3. Copy each form's ID (the part after `/f/` in `https://formspree.io/f/abcdwxyz`) into `src/config.mjs`:
   ```js
   export const FORMS = { contact: "abcdwxyz", check: "efghijkl" };
   ```
4. Push → Vercel rebuilds. Send one test message from each form.

Until an ID is entered, that form shows "This form is not connected yet — please email us" instead of pretending to send.

### 2. Replace placeholders
Everything that still needs your real information is written as `[[text]]` in the language files and shows on the site with a dashed underline. Search for `[[` in `src/i18n/*.mjs`:
- email address (footer, contact page, legal pages)
- Legal notice / Impressum: name or company, legal form, postal address, VAT ID, responsible person
- Privacy policy: controller details, hosting & form provider confirmation, retention periods, supervisory authority
- VAT status note on the price boxes, payment method on the GDPR check FAQ, reply time on the contact page, number of sections in the €99 starter website

### 3. Have the legal pages reviewed
Privacy policy, cookie policy and legal notice are **drafts** (marked as such on the page). Check the facts and remove the `draft:` line in each language file once they are final.
Note for German-facing services: individual legal advice is reserved for lawyers (RDG). The site consistently describes compliance work as information and technical implementation — keep it that way when editing.

### 4. Planet video (optional)
The planet currently uses the still image `public/assets/img/art/planet-*.webp` with a smooth CSS animation.
To use a video instead: put `planet.mp4` (square, black background, seamless loop, no sound) in `public/assets/video/`
and set `PLANET_VIDEO = { mp4: "/assets/video/planet.mp4", webm: "" }` in `src/config.mjs`.

### 5. Journal
The three guides are shown as "In preparation". Send the article texts and they will be added as full article pages.

## Editing text

All text lives in one file per language: `src/i18n/en.mjs`, `de.mjs`, `nl.mjs`, `es.mjs`, `hr.mjs`. Every file has the same structure — change a sentence in one, then change it in the others.

Formatting inside texts:
- `*text*` → lime serif accent (used in big headlines)
- `~text~` → dimmed text
- `**text**` → bold
- `[[text]]` → visible placeholder

`node tools/check-dicts.mjs` confirms all five language files still have the same structure.

## Structure

```
build.mjs                  builds all pages, root language redirect, 404, sitemap, robots
src/config.mjs             domain, languages, service order, Formspree IDs
src/i18n/<lang>.mjs        all text per language (incl. localised URLs)
src/layout.mjs             <head>, header, footer, privacy dialog
src/components.mjs         shared building blocks (heroes, forms, FAQ, tables…)
src/pages/home.mjs         homepage
src/pages/inner.mjs        all other pages + case studies
public/                    CSS, JS, fonts, images, favicons (copied as-is)
tools/                     helpers: globe data, screenshots, QA scripts (not deployed)
```

## Pages (per language)

Home · Web Design & Development · Digital Compliance · GDPR & Cookie Check (GDPR, Cookies & Co.) · Translation · Creative Services · Work + 3 case studies · Journal · About · Contact · Privacy Policy · Cookie Policy · Legal Notice · Accessibility Statement · custom 404

## Privacy by design

- No analytics, ad pixels or third-party scripts; all fonts self-hosted.
- The only browser storage is `localStorage["lexora-lang"]`, set when a visitor picks a language (strictly necessary, so no consent banner is needed). Visitors can clear it under *Privacy settings* in the footer.
- If you ever add analytics or embeds, you will need a consent banner and must update the cookie and privacy policies.

## Quality checks run

- All 85 pages × desktop (1440px) and mobile (390px): no console errors, no horizontal overflow, no broken internal links (`tools/qa-all.cjs`).
- Forms: validation messages in every language, URL normalisation, "not connected" state, success state with a mocked Formspree response (`tools/qa-forms.cjs`).
- Reduced-motion and no-JavaScript rendering; long German words at 360px.
