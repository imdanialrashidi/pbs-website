# PBS | Practical Business Solutions

The public website for **PBS**, an independent, early-stage B2B digital
solutions team. Persian is the reference locale at the deployment root; English
is a real LTR page at `/en/`. The portfolio is a second route pair at `/work/`
and `/en/work/`. All pages are prerendered in the same static Astro build.

The site is deliberately static: no backend, CMS, database, analytics, remote
font service, third-party script or fake inquiry submission. Contact actions
open a verified external channel when one is configured, and show an honest
"details coming soon" state when it is not. The website is light-only: there is
no theme toggle, localStorage theme, dark stylesheet or automatic OS-dark
variant. The closing contact/footer and one small statement panel are deliberate
navy surfaces.

## Stack

- Astro `7.4.4`, static output
- TypeScript `5.9.3` with Astro's strict config
- Lucide icons via `@lucide/astro`, inlined at build time
- Self-hosted Vazirmatn (Persian) and Inter (English) variable WOFF2 fonts
- Native `<dialog>` for the mobile menu, native `<details>` for FAQ items
- GitHub Actions deployment to GitHub Pages

No UI framework, CSS framework, hydration island, image CDN or runtime remote
asset is used.

## Routes

| Route | Locale | Direction | Source |
| --- | --- | --- | --- |
| `/` | `fa-IR` | RTL | `src/config/pbs/fa.ts` |
| `/en/` | `en` | LTR | `src/config/pbs/en.ts` |
| `/work/` | `fa-IR` | RTL | `src/config/pbs/work.ts` |
| `/en/work/` | `en` | LTR | `src/config/pbs/work.ts` |
| `/404.html` | `fa-IR` | RTL | `src/pages/404.astro` |
| `/sitemap.xml` | | | `src/pages/sitemap.xml.ts` |
| `/robots.txt` | | | `src/pages/robots.txt.ts` |

> **Owner action before a public launch:** the four public contact identifiers are
> intentionally empty because PBS has not supplied verified values. All four
> channels currently show a truthful non-clickable "details coming soon" state.
> Fill [`src/config/pbs/contact.ts`](src/config/pbs/contact.ts), rebuild, and
> verify the links as described below. Do not substitute guessed handles or
> numbers.

## Requirements and commands

- Node.js `>=22.23.4` (the deploy workflow uses Node 24)
- npm `12.2.1` (declared in `packageManager`; the lockfile is committed)

```sh
npm ci
npm run dev          # local development
npm run check        # Astro + TypeScript diagnostics
npm run build        # production static build in dist/
npm run preview      # serve the production build
npm run verify       # npm run check && npm run build
```

Verify the GitHub Pages project path before claiming deployment compatibility:

```sh
SITE_URL=https://imdanialrashidi.github.io BASE_PATH=/pbs-website/ npm run build
BASE_PATH=/pbs-website/ npm run preview
```

Open the URL printed by Astro including `/pbs-website/`. The preview command
must receive the same `BASE_PATH` as the build.

## Project map

```text
src/
  config/
    pbs/
      fa.ts              Persian homepage copy, metadata and navigation
      en.ts              English homepage copy, metadata and navigation
      work.ts            portfolio copy for both locales
      shared.ts          palette, shape, locale links, resolved contacts
      contact.ts         THE editable public contact identifiers
    site.ts              PBS locale and work-page registries
    types.ts             typed content and configuration contract
  lib/
    contact.ts           validated contact-link resolution
    format.ts            locale-aware number and year formatting
    language.ts          interface copy, direction, Open Graph locale
    navigation.ts        resolves authored navigation for the current page
    routes.ts            public page paths and locale alternates
    schema.ts            JSON-LD generated from visible page content
    sections.ts          page composition, anchors, dead-link checks
    theme.ts             theme tokens and font preload list
    fonts.ts             self-hosted font faces
    url.ts               base-aware href helpers
    client/menu.ts       mobile menu behaviour
    client/section-nav.ts current-section highlight
  components/
    layout/              Header, Footer, LanguageSwitch
    sections/            Hero, Definition, Services, Patterns, Features,
                         Reasons, Faq, Contact, SystemMap
    work/                WorkPage and project-card presentation
    seo/                 JsonLd
    ui/                  Button, Logo, Section, headings and icons
  pages/
    index.astro          Persian homepage at the deployment root
    en/index.astro       English homepage at /en/
    work/index.astro     Persian portfolio at /work/
    en/work/index.astro  English portfolio at /en/work/
    404.astro            static not-found page
    sitemap.xml.ts       generated sitemap with hreflang alternates
    robots.txt.ts        generated robots file with the sitemap URL
  styles/global.css      shared reset, layout, header, footer and primitives
public/
  brand/                 owner-supplied PBS logo and brand library
  favicon.svg            PBS favicon
  favicon-32.png         small PNG favicon
  apple-touch-icon.png   PBS touch icon
  icon-192.png           manifest icon
  icon-512.png           manifest icon
  site.webmanifest       installable-site metadata
  og-image.png           1200 × 630 social preview
.github/workflows/deploy.yml
docs/PBS_Business_DNA.md
docs/PBS_Design_System.md
```

## Content and localization

The Persian and English homepages are separate typed content files. The
portfolio has its own content file for both locales. Edit them together; do not
translate word for word at the expense of clarity, and do not make a claim in one
locale that the other avoids. PBS facts live in the two briefs under `docs/`.

Key fields:

- `meta.locale` and `meta.direction` drive `<html lang>`/`dir` and locale
  formatting. `meta.path` drives the locale home route. Canonical URLs come from
  the built page path plus the deployment base.
- `localeLinks` publishes the two locales. `src/lib/routes.ts` maps a page key
  (`home`, `work`) to the equivalent path in each locale, so the language switch
  and `hreflang` agree.
- `navigation` can contain section entries and page entries. Section anchors are
  derived by `src/lib/sections.ts`; page entries resolve through
  `localePageHref()`. A fragment link without a rendered target fails the build.
- `patterns` is an illustrative scenario ledger and `reasons` describes working
  principles and capacity. Neither is a client case study or a claim of results.
  The portfolio is the only place for real, permitted project work.
- The hero uses an original conceptual scope map rendered as HTML and CSS. It
  shows the kinds of work PBS combines; it is not a dashboard, real project or
  performance claim.

### Portfolio policy

`src/config/pbs/work.ts` is intentionally empty in `projects` right now. While it
is empty:

- both portfolio routes render an honest publication state;
- both routes are `noindex, follow`;
- the sitemap excludes them;
- the header and footer still link to the page.

To publish a real project, add a `WorkProject` object with a title, summary,
problem, scope, outcome and optional client/year/cover/live URL. Use a cover
under `public/` only when the image belongs to the project and publication is
allowed. The page becomes indexable and enters the sitemap automatically when
the project is added to both locale portfolios. Never add a fictional project, invented screenshot
or client name without permission.

### Links and the deployment base

- Use `href()` for root-relative public assets and routes.
- Use `localeHref(site, target)` for any in-page fragment or config action.
  On `/en/`, `#contact` must resolve to `/en/#contact`, not the Persian root.
- Use `localePageHref(site, page)` for a page route in the current locale.
- Use `pagePath()` only for a path that may already carry the base.
- Keep canonical and `hreflang` URLs absolute and self-referential. The English
  canonical must never point at the Persian page.
- `src/lib/url.ts` and `src/lib/routes.ts` own these rules. Do not hardcode
  `/pbs-website/`.

## Configure the public contact channels

**One source of truth:** [`src/config/pbs/contact.ts`](src/config/pbs/contact.ts).
No phone number, handle or profile URL should appear anywhere else.

| Field | Expected value | Empty behaviour |
| --- | --- | --- |
| `whatsapp` | International number, digits only including country code, e.g. `989121234567` | Non-clickable "details coming soon" |
| `phone` | Number as it should read, e.g. `+98 21 1234 5678` | Non-clickable "details coming soon" |
| `telegram` | Full verified `https://` public profile URL | Non-clickable "details coming soon" |
| `bale` | Full verified `https://` public profile URL supplied by PBS | Non-clickable "details coming soon" |

Rules enforced by [`src/lib/contact.ts`](src/lib/contact.ts):

- WhatsApp builds `https://wa.me/<digits>` only from 8 to 15 digits.
- Phone builds `tel:` only from a valid number; the displayed value stays human-readable.
- Telegram and Bale accept an explicit `https:` URL only. The site does not guess
  Bale URL formats or invent handles.
- Messenger links open in a new tab with `noopener noreferrer`; phone links do not.
- Any invalid or empty value falls back to the pending state. There is no dead
  button, placeholder number or fake account.
- The main CTA scrolls to the contact section. When no channel is configured,
  that section states clearly that the official channels are being finalized.

There is no contact form, email endpoint, API or storage in the PBS site.

## SEO

- `src/pages/sitemap.xml.ts` generates the sitemap from `src/lib/routes.ts` and
  includes reciprocal `hreflang` links plus `x-default`. The portfolio is
  included only when both locale portfolios contain at least one real project.
- `src/pages/robots.txt.ts` generates `/robots.txt` with the absolute sitemap URL
  for the current deployment base.
- `src/lib/schema.ts` generates JSON-LD from visible content: Organization,
  WebSite, WebPage, FAQPage on the homepage, and breadcrumb plus ItemList on a
  published portfolio page. No ratings, prices or client claims are invented.
- Every indexable page has a self-referencing canonical. The portfolio is
  `noindex, follow` while empty.
- Titles and descriptions are specific to each page and stay within a useful
  search-result length. Headings follow one `h1` per page and a logical hierarchy.

## Brand assets

The owner-supplied PBS brand library is preserved under `public/brand/`. The
header and footer use two approved variants:

- `public/brand/Logo/pbs-logo-on-light.svg` in the light header and mobile menu.
  It is the PBS Navy wordmark with the cyan spark; intrinsic size `747 × 251`.
- `public/brand/Logo/pbs-logo-primary-dark.svg` in the footer. It is the
  transparent white wordmark with the cyan spark; intrinsic size `747 × 251`.
- `public/brand/Logo/pbs-logo-tagline-dark.svg` remains in the owner's library
  for dark brand surfaces outside this website.

The logo files are not redrawn, stretched, recoloured or colour-filtered. Each
locale config declares both `brand.logo` (light surfaces) and `brand.logoOnDark`
(the footer), and the `Logo` component preserves the intrinsic aspect ratio.

Public metadata and install icons use:

- `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png`
- `public/icon-192.png`, `public/icon-512.png`, `public/site.webmanifest`
- `public/og-image.png` (1200 × 630), referenced as `meta.socialImage`

To replace a logo, update the file and the matching `brand.logo` or
`brand.logoOnDark` width/height in both locale configs. Keep the transparent
ratio; do not stretch it. To replace the social preview, update
`public/og-image.png` and keep the `1200 × 630` crop. The original brand files
also include the usage notes in `public/brand/web-usage-fa.md`.

## Fonts

PBS uses:

- **Vazirmatn** for Persian (Arabic + Latin coverage), OFL 1.1
- **Inter** for English (Latin variable subset), OFL 1.1

Both are local variable WOFF2 files in `src/assets/fonts/` with their full
licence texts in `src/assets/fonts/licenses/`. They are registered in
`src/lib/fonts.ts`; the active theme chooses one family per locale and preloads
only that file. There is no Google Fonts or CDN request at runtime.

Font provenance is recorded in [CREDITS.md](CREDITS.md). When changing a face,
add the WOFF2 and licence, register it, update the locale theme, and record it in
CREDITS.

## Design tokens and page sections

`src/config/pbs/shared.ts` owns the shared light palette, shape, content width
and spacing. `src/lib/theme.ts` emits one light theme (`color-scheme: only
light`). The contact section scopes semantic tokens for its intentional deep
surface; the footer does the same. There is no `paper` alternate palette, dark
token set or theme switch.

Current homepage order:

```text
hero → services → patterns → features → reasons → definition → faq → contact
```

The hero carries the offer and primary action; services explain the four
delivery families; patterns are illustrative scenarios; features is the single
four-stage process; reasons holds the working principles; definition is a
compact identity aside; FAQ and the deep contact/footer close the page.

The portfolio pages add a page hero, an honest empty or project state, a
publication standard and a closing contact band.

To add or remove a homepage section, follow the contract in `src/config/types.ts`
and `src/lib/sections.ts`, register it in `src/components/sections/index.ts`, and
add its navigation entry to both locale configs. A listed section without content
is dropped; a dead fragment link fails the build.

## Images and interaction

- The PBS public pages contain no stock photography. The hero scope map and
  portfolio empty state are original CSS compositions. A future project cover
  may be added only for real, permitted work.
- Icons are Lucide line icons rendered inline; no icon runtime dependency is
  shipped to the browser.
- The header is a sticky light surface with a responsive glass treatment and a
  solid `@supports` fallback. It is not a theme switch.
- The mobile menu uses a native `<dialog>`, traps focus, closes on Escape and
  restores focus. Without JavaScript, the button is hidden and a plain navigation
  fallback is shown.
- FAQ items use native `<details>` and need no JavaScript.
- Motion is limited to hover/focus transitions and the short mobile-menu entry.
  There are no scroll-driven reveals; content is never hidden behind an
  animation. Motion is disabled under `prefers-reduced-motion: reduce`.
- Interactive targets are at least 44 px in both axes where the layout allows,
  focus is visible, and contact links use safe external-link attributes.

## Deployment

The included [Pages workflow](.github/workflows/deploy.yml) is pinned to full
commit SHAs, installs from the lockfile, runs `npm run verify`, and requests only
the permissions Pages needs. This repository change does **not** deploy it.

To enable publication later, the owner must:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

`astro.config.mjs` derives `site` and `base` in this order: `SITE_URL` /
`BASE_PATH`, then `public/CNAME`, then GitHub repository values. A project
repository therefore builds at `https://<owner>.github.io/<repo>/`; a
`<owner>.github.io` repository builds at the root. Keep `output: "static"`.

The project-path build above is required before claiming GitHub Pages
compatibility. The static `404.html` is generated; there is no server rewrite.

## Verification

Start from the real scripts:

```sh
npm ci
npm run check
npm run build
SITE_URL=https://imdanialrashidi.github.io BASE_PATH=/pbs-website/ npm run build
BASE_PATH=/pbs-website/ npm run preview
```

Browser checks used for this site:

- 320, 360, 390, 768, 1024, 1120 and 1440 wide; check no horizontal overflow and
  that the headline, supporting line and primary CTA are visible in the first
  360 × 640 and 390 × 844 viewports.
- Persian RTL and English LTR: headings, navigation, footer and language switch
  mirror correctly.
- OS dark preference: the rendered page stays light (white canvas, light header)
  with no theme attributes or theme storage.
- No-JS: the plain navigation is usable, the menu trigger is hidden and FAQ
  details still open.
- Mobile menu open/close, Escape, focus containment/return and 44 px controls.
- FAQ keyboard operation and open/closed state.
- Language switch round-trip between `/` and `/en/`, and between `/work/` and
  `/en/work/`, including locale-local anchors.
- Sticky-header anchor landing: no heading is hidden under the header after
  navigation.
- Contact channels: pending state with empty identifiers; safe links with
  verified identifiers (test in a throwaway build, then restore the empty
  config if the values are not ready).
- `prefers-reduced-motion: reduce` leaves all content visible.
- Production base-path HTML: favicon, manifest, CSS, WOFF2, logo, canonical,
  `hreflang`, Open Graph, JSON-LD, sitemap, robots and the static 404.

Lighthouse and Core Web Vitals were not measured for this build. Do not report
scores that were not actually captured.

## Delivery boundary

This repository does not commit, push, open a pull request, publish, or deploy.
Deployment is a separate, explicitly requested action.
