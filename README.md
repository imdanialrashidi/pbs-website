# Client Demo Factory

A small, static-first, Persian-first starter for producing premium, mobile-first
client website demos quickly. One Astro application, one typed client
configuration, and a library of reusable editorial sections. Change the config,
imagery, and design tokens; keep the components.

Persian is the default language and the reference implementation: RTL layout,
Persian typography, Persian numerals, localised interface strings, and a
self-hosted Persian font pairing. The same components still render a clean LTR
English site from the other two configs.

The repository ships with three complete fictional examples:

- **Naranj House** — the default Persian, RTL coastal guesthouse demo.
- **Casa Marea** — a warm, serif-led English coastal guesthouse demo.
- **Atelier Sora** — a dark, grotesque-led English interior studio demo.

All three use the same components and differ through their client configuration.

## Stack

- Astro `7.4.4`, static output
- TypeScript `5.9.3` with Astro's strict config
- Tailwind CSS `4.3.3` through the Vite plugin
- Lucide icons via `@lucide/astro`
- Astro's built-in image optimization (`sharp`)
- Persian-first RTL with locale-aware UI strings, numerals, and typography
- Native CSS transitions, scroll-driven enhancement, and `prefers-reduced-motion`
- Native `<dialog>` and `<details>` for interaction; no UI framework or hydration
- GitHub Actions deployment to GitHub Pages

No CMS, backend, analytics, external font service, or runtime image dependency is
included.

## Requirements

- Node.js `>=22.23.4` (the deploy workflow uses Node 24)
- npm `12.2.1` (declared in `packageManager`; the lockfile is committed)

```sh
npm ci
npm run dev
```

Open <http://localhost:4321>. The default client is Naranj House (Persian, RTL).
For the English reference site:

```sh
CLIENT=casa-marea npm run dev
```

## Commands

```sh
npm run dev          # local development server
npm run check        # Astro + TypeScript diagnostics
npm run build        # production build in dist/
npm run preview      # serve the production build
npm run verify       # check, then build
npm run build:alt    # build the alternate English example (Atelier Sora)
```

Switch the active client for any Astro command with `CLIENT`:

```sh
CLIENT=naranj-house npm run dev   # Persian, RTL (the default)
CLIENT=casa-marea npm run dev     # English, LTR
CLIENT=atelier-sora npm run build # English, LTR
```

This is POSIX shell syntax. On Windows, set the environment variable in the
shell session or use a small wrapper script. The active client is selected at
build time; only that client is rendered.

## Project map

```text
src/
  config/
    types.ts                 typed contract for every client
    site.ts                  active client switch and registry
    clients/
      naranj-house.ts        default Persian RTL hospitality example
      casa-marea.ts          English hospitality example
      atelier-sora.ts        English studio example
  lib/
    sections.ts              page composition: section slots, anchors, navigation
    language.ts              interface dictionaries, direction, page language
    format.ts                locale-aware number and date formatting
    images.ts                figure roles, full-size and social image derivation
    fonts.ts                 self-hosted font faces and font stacks
    theme.ts                 themeFor(theme) -> CSS + font preloads
    url.ts                   deployment-base-aware href helpers
    client/                  menu, lightbox and demo-form modules
  styles/global.css          design system, layout, interactions, motion
  components/
    ui/                      Button, Figure, ImageFallback, Section, SectionHeading, Logo, Icon
    layout/                  Header (mobile <dialog>) and Footer
    sections/                reusable page sections + registry
  layouts/BaseLayout.astro   head, metadata, social image, page shell
  pages/index.astro          composes sections from the active client config
  pages/404.astro            branded static not-found page
  assets/images/             local, licensed photography
  assets/fonts/              self-hosted WOFF2 files + licences
public/                      favicon, apple touch icon, robots.txt, .nojekyll
.github/workflows/deploy.yml GitHub Pages deployment
```

## Create a client demo

Work from a copy of this repository for each client. Do not turn the canonical
starter into one client's site.

1. **Read the brief.** Identify the primary action, required sections, visual
   direction, content facts, and any assets supplied by the client.
2. **Copy an example config** in `src/config/clients/` and rename it, for example
   `src/config/clients/north-house.ts`.
3. **Register it** in `src/config/site.ts` under `clients`; the registry key is
   the value `CLIENT` selects.
4. **Select and order sections** in the config's `sections` array. See the
   section reference below. Write `navigation` as labels keyed by section
   (`{ label, section }`); anchors are derived, so a nav item cannot point at a
   section that does not render. Set `meta.locale` and, if needed,
   `meta.direction`; `rtl` is inferred for Persian, Arabic, Hebrew, and Urdu
   locales.
5. **Write the content** in the config. Keep names, offers, prices, policies, and
   testimonials in one place. If the client supplied no real facts, keep the
   demo wording and the demo disclosure.
6. **Set the visual direction** through `theme`. Change the fonts, palette,
   radii, content width, section spacing, and the `hero.variant`. Persian demos
   start from the variable `estedad` face for display, body, and emphasis.
   Do not add client-specific CSS to shared components.
7. **Add local images** under `src/assets/images/` and import them in the config.
   Provide alt text, captions where useful, and `position` for crops. Record
   provenance in `CREDITS.md`.
8. **Run the checks** below at 360, 390, 768, and 1440 widths, including the
   primary interaction paths.
9. **Build and preview** the production output, including the deployment base
   path. Do not publish unless that is explicitly requested.

Keep `demo.enabled` and the fictional-content note until the site contains only
approved real client information. The contact form is simulated; keep its demo
note unless a real form endpoint is implemented and tested.

## Sections

Sections are selected by `sections: SectionId[]`. The ids are declared once in
`src/config/types.ts`; `src/lib/sections.ts` maps each one to its content key and
derives the DOM id, the anchor, the heading id and the navigation entry. The
supported ids and their configuration keys are:

| Section | Config key | Notes |
| --- | --- | --- |
| `hero` | `hero` | Required first view; `split` or `immersive` variant |
| `statement` | `statement` | Optional full-bleed image quote |
| `story` | `story` | Editorial about section with facts and optional signature |
| `services` | `services` | Responsive four-column or list service treatment |
| `features` | `features` | Numbered places/process list |
| `gallery` | `gallery` | CSS-column gallery with accessible lightbox |
| `pricing` | `pricing` | Editorial rate/engagement rows, not a card grid |
| `testimonials` | `testimonials` | Lead quote + supporting notes |
| `faq` | `faq` | Native accessible `<details>` |
| `contact` | `contact` | Contact details + simulated booking/inquiry form |

To remove a section, remove its id from `sections` and leave or delete its data.
Its navigation entry disappears with it. To reorder, reorder the ids. A listed
section with no content is dropped rather than rendered empty, and any fragment
link that no longer has a target fails the build with the dead links listed.

To add a section:

1. Add its id to `sectionIds` and its optional content type to `SiteConfig` in
   `src/config/types.ts`.
2. Add its content key to `sectionContentKeys` in `src/lib/sections.ts`.
3. Create `src/components/sections/MySection.astro` that accepts
   `{ site, section }` and uses `section.id` / `section.headingId` for its ids.
4. Register it in `src/components/sections/index.ts`; the `satisfies` check
   fails until the registry is complete.
5. Add the content and the id to the active client config, plus a
   `{ label, section }` navigation entry.

Use existing UI primitives and tokens first. New sections should stay
client-agnostic and receive all copy through `site`.

## Branding and design tokens

All client-specific visual choices live in `theme`:

- `colors`: canvas, surface, ink, muted, accent, accent ink, line, tint,
  on-image text, footer background, footer ink
- `fonts`: display, body, and emphasis faces from `src/lib/fonts.ts`
- `shape`: media/button radii and the arched hero option
- `layout`: content width, gutters, and section spacing

`src/lib/theme.ts` exposes `themeFor(theme)`, which returns the CSS and the font
preloads in one call. Custom-property names are derived from the token names
(`accentInk` becomes `--c-accent-ink`), and one traversal feeds both the
`@font-face` rules and the preload list. `global.css` consumes those custom
properties directly (`var(--c-accent)`).

### Language, direction, and interface strings

- `meta.locale` is the BCP 47 tag used for `<html lang>`, Open Graph, number and
  date formatting, and the interface dictionary. Use `fa-IR` for the Persian
  demo.
- `meta.direction` is optional. It defaults from the locale (`fa`, `ar`, `he`,
  `ur`, and similar languages become `rtl`); set it explicitly when the content
  language and the intended flow differ.
- `src/lib/language.ts` exposes `pageLanguage(site)`: the interface copy (`t`),
  the language tag, the direction, the Open Graph locale, and locale-aware
  `number`, `index` and `year` formatting. Modules call it once and read
  `language.t`; they never hardcode labels or thread `meta.locale` themselves.
- `src/lib/format.ts` owns the formatting rules and is shared with the browser
  modules, so the lightbox counts in the same digits as the menu and footer.
- Override a label for one client with the optional `ui` object. Overrides merge
  with the locale defaults by shape at any depth, so a new group needs no code:

```ts
ui: {
  contact: "تماس با ما",
  form: { guests: "تعداد مهمان" },
  gallery: { next: "تصویر بعدی" },
},
```

- Persian typography is applied with `:lang(fa)` rules at the end of
  `global.css`: looser line height, no tracking or uppercase, larger small
  labels, and a calmer display scale. Layout uses logical properties
  (`margin-inline`, `inset-inline`, `border-inline`), so the same components
  mirror cleanly for English.
- Put Latin identifiers such as emails, phone numbers, and URLs inside
  `<bdi dir="ltr">` in RTL prose. Inputs that accept Latin values use
  `dir="ltr"`. Native `type="date"` controls follow the browser's locale; add a
  Jalali picker only when a client needs one.
- To add another language, add its dictionary in `src/lib/language.ts`, add it
  to `languageOf`, and set the locale in the client config. Modules do not need
  changes.
- `{brand}` in an interface string is interpolated from `brand.name`; no page
  needs to substitute it.

A new colour token needs the theme type, each example config, and the CSS rule
that uses `var(--c-<token>)`. The custom-property name is derived, so no module
change is needed. Avoid ad-hoc colour overrides in individual components.

### Changing fonts

The default Persian theme uses Estedad (display, body, and emphasis). The English
examples use Fraunces + Manrope and Bricolage Grotesque + Manrope. Fonts are
local WOFF2 variable files and are preloaded by the active theme. Estedad covers
Persian/Arabic and Latin, so mixed Persian/English copy keeps one visual voice.

Estedad is an OFL-licensed, modern Iran Sans-style variable typeface. Commercial
faces such as Iran Sans, IRANSansX, and Yekan Bakh are not bundled; if a client
owns a licence, add the WOFF2 and licence text, register it in `src/lib/fonts.ts`,
and use its key in the client theme.

To add a face:

1. Add the licensed WOFF2 file to `src/assets/fonts/` and its licence text to
   `src/assets/fonts/licenses/`.
2. Add an import and metadata entry in `src/lib/fonts.ts`.
3. Add the face key to `FontFaceKey` and use it in the client theme.
4. Update `CREDITS.md`.

Estedad includes Persian/Arabic and Latin glyphs; the other faces are
Latin-only. Add the correct subset and licence when a client's language requires
another script.

## Images

Client images are imported from `src/assets/images/` and passed through the
`Figure` component with a role — `hero`, `banner`, `scene`, `figure` or `thumb` —
so Astro can generate responsive WebP output. The role owns the ratio, widths,
sizes, quality and loading priority; `src/lib/images.ts` holds the presets and
also derives the lightbox's full-size URL and the 1200 × 630 social card. The
hero image is eager and high priority; all gallery and below-the-fold images are
lazy. The gallery lightbox requests the larger image only when opened.

Guidelines:

- Use local, licensed files. Do not use runtime remote image URLs.
- Provide meaningful `alt` text for every image; decorative text should not be
  embedded only in the photograph.
- Use `position` to control crops where the focal point is off-centre.
- Keep enough source resolution for the largest rendered size, but avoid
  unnecessary multi-megabyte originals.
- If an image is omitted, `Figure` renders a designed, accessible fallback whose
  label comes from the page language.
- Update `CREDITS.md` with the source and licence for every new file.

## Interaction and accessibility

- The mobile menu, lightbox and demo form are modules in `src/lib/client/`.
  Templates declare data attributes and call one `init`; the lightbox receives
  its direction and locale from the server and shares the page's index
  formatter.
- The mobile menu is a native `<dialog>`: focus-trapped, Escape-closable, and
  restores focus.
- FAQ items use native `<details>`; no JavaScript is required.
- The gallery is visible without JavaScript. The lightbox adds keyboard arrows,
  Escape, focus management, and a live caption. Arrow direction follows the
  document direction, so left/right mean the visible previous/next image in both
  RTL and LTR.
- The form is explicitly simulated. It validates natively, prevents submission,
  shows the configured success message, and sends/stores nothing.
- Motion uses transform/opacity, respects `prefers-reduced-motion`, and the
  scroll reveal is progressive enhancement with `animation-timeline`.
- Use semantic headings, visible focus rings, 44px minimum interactive targets,
  and sufficient contrast when changing the palette.
- Directional icons mirror in RTL; do not add physical `left`/`right` rules when
  a logical property expresses the same intent.

If a future demo needs genuinely stateful UI, add one small Svelte island only
when the requirement cannot be met with native HTML. Do not install a UI
framework by default.

## Deployment

### GitHub Pages (project repository)

The included workflow deploys on every push to `main` and can also be run
manually. In the repository, set **Settings → Pages → Source** to **GitHub
Actions**.

`astro.config.mjs` derives both values from the GitHub environment:

- `site`: `https://<owner>.github.io`
- `base`: `/<repository>/`

The workflow pins `actions/checkout`, `withastro/action`, and
`actions/deploy-pages` to commit SHAs, uses Node 24, npm 12.2.1, the committed
lockfile, and runs `npm run verify` before uploading. It requests only the
permissions required for Pages.

### User site or organization site

A repository named `<owner>.github.io` is detected and built at the root path.
No configuration change is needed.

### Custom domain

1. Add the domain as one line in `public/CNAME`, for example
   `demos.example.com`.
2. Configure DNS as documented by GitHub Pages.
3. Keep the Pages source set to GitHub Actions.

`astro.config.mjs` reads `public/CNAME` and sets `site` to the custom domain and
`base` to `/`. Alternatively, override explicitly:

```sh
SITE_URL=https://demos.example.com BASE_PATH=/ npm run build
```

### Local project-path verification

```sh
SITE_URL=https://OWNER.github.io BASE_PATH=/REPO/ npm run build
BASE_PATH=/REPO/ npm run preview
```

Open the URL printed by Astro, including the `/REPO/` path. Anchors, fonts,
favicon, scripts, gallery full images, and social metadata should all resolve
under that prefix. The 404 page is emitted as `dist/404.html` and its button
returns to the site root.

Environment overrides are useful for other static hosts as well. `SITE_URL` is
used for canonical and Open Graph URLs; `BASE_PATH` controls every generated
asset path.

## Verification

Run these from the repository root:

```sh
npm run check
npm run build                    # Persian default
CLIENT=casa-marea npm run build  # English LTR
CLIENT=atelier-sora npm run build
npm run verify
```

Then inspect the production preview:

```sh
npm run preview
```

Recommended browser checks:

- 360px, 390px, 768px, and 1440px widths: no horizontal overflow, readable type,
  primary CTA visible, touch targets at least 44px.
- Repeat the layout checks in both directions: the Persian default is RTL and
  the English configs are LTR. Confirm menu order, form labels, gallery arrows,
  and footer alignment mirror correctly.
- Open/close the mobile menu with touch and Escape; tab focus stays inside.
- Open a gallery image, use arrow keys, close with Escape; the full image loads.
- Open and close FAQ items with keyboard.
- Submit the form empty and complete; verify native validation and the explicit
  simulated-success message.
- Emulate `prefers-reduced-motion: reduce` and confirm content remains visible
  and animation is effectively disabled.
- Build with the repository base path and repeat the link/asset checks.

Lighthouse can be run against the production preview, but mobile 90+ is a goal,
not a guarantee. Report measured results with the viewport, throttling, build
path, and date used.

## Delivery boundary

The starter is ready to be copied for a new client after the checks above pass.
This repository does not commit, push, publish, or deploy. Deployment is a
separate, explicitly approved action.

See [CREDITS.md](CREDITS.md) for photography and font licensing. See
[AGENTS.md](AGENTS.md) for the agent operating rules.
