# PBS website | agent instructions

This repository is the production public website for **PBS | Practical Business
Solutions**, an independent, early-stage B2B digital solutions team. It is
Persian-first with a real English LTR page and a separate portfolio route,
statically built for GitHub Pages.

For content truth and the PBS offer, read
[`docs/PBS_Business_DNA.md`](docs/PBS_Business_DNA.md). For colour, typography,
logo and interaction standards, read
[`docs/PBS_Design_System.md`](docs/PBS_Design_System.md).

## Sources of truth

| Area | Owner |
| --- | --- |
| Setup, commands, content editing, deployment | [README.md](README.md) |
| Agent rules and quality bar | this file |
| Persian homepage content, metadata, narrative | `src/config/pbs/fa.ts` |
| English homepage content, metadata, narrative | `src/config/pbs/en.ts` |
| Portfolio content for both locales | `src/config/pbs/work.ts` |
| Shared PBS palette, shape, locale links, resolved contacts | `src/config/pbs/shared.ts` |
| Public contact identifiers | `src/config/pbs/contact.ts` |
| PBS locale registry | `src/config/site.ts` |
| Typed content contract | `src/config/types.ts` |
| Page composition, anchors, navigation | `src/lib/sections.ts`, `src/lib/navigation.ts` |
| Public page route table and locale alternates | `src/lib/routes.ts` |
| Locale, direction, interface copy, formatting | `src/lib/language.ts`, `src/lib/format.ts` |
| Contact-link validation | `src/lib/contact.ts` |
| Base-aware URL rules | `src/lib/url.ts` |
| Structured data | `src/lib/schema.ts`, `src/components/seo/JsonLd.astro` |
| Theme tokens and font CSS | `src/lib/theme.ts`, `src/lib/fonts.ts` |
| Client interaction modules | `src/lib/client/` |
| Shared visual system | `src/styles/global.css` |
| Reusable UI and sections | `src/components/ui/`, `src/components/sections/` |
| Portfolio composition | `src/components/work/WorkPage.astro` |
| Deployment base/site derivation | `astro.config.mjs` |
| Sitemap and robots routes | `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` |
| Pages workflow | `.github/workflows/deploy.yml` |
| Asset provenance and licences | [CREDITS.md](CREDITS.md) |

Read the relevant owner before changing a contract. Do not create a second
competing instruction document for build, deployment, or design rules.

## First actions

1. Read `README.md` and this file. Read the PBS briefs for anything involving
   claims, services, positioning or visual identity.
2. Inspect `git status`, `package.json`, both PBS locale configs, the work config,
   and the relevant component before editing.
3. Identify the narrowest owning layer: content/config, contact config, theme
   tokens, section composition, UI primitive, routes, or deployment.
4. Make the change and run the narrowest relevant check, then the full build and
   the project-base build.
5. Inspect the complete diff. Do not commit, push, publish, or deploy unless the
   user explicitly asks.

## Architecture rules

- **Two locale homepages and one portfolio route pair, one build.** Persian is
  `/` and `/en/`; the portfolio is `/work/` and `/en/work/`. All are prerendered.
  Do not turn English into a client-only toggle or a separate `CLIENT` build.
- **Config first.** PBS copy, metadata, navigation, section order, contact
  channel labels and calls to action belong in the locale configs. The portfolio
  copy belongs in `src/config/pbs/work.ts`. The four public contact identifiers
  belong only in `src/config/pbs/contact.ts`.
- **Components are client-agnostic.** Shared components receive `site`; they do
  not import a locale config or contain PBS copy, colours, or contact values.
- **Theme tokens own visual identity.** Change palette, shape and spacing in
  `src/config/pbs/shared.ts`; do not scatter colour overrides through components.
  The website is light-only. `section--deep` and the footer are one scoped token
  mapping for the closing contact/footer statement, not a second theme.
- **Locale and direction are config.** `meta.locale` drives `<html lang>`,
  interface copy and Intl formatting. `meta.direction` defaults from the locale.
  Fixed interface labels belong in `src/lib/language.ts`.
- **Locale links stay local.** Use `href()` for public assets and root routes.
  Use `localeHref(site, target)` for every in-page fragment or config action
  that targets the locale homepage. Use `localePageHref(site, page)` for a page
  route, and `pagePath()` only when a path may already carry the base. On
  `/en/`, `#contact` must become `/en/#contact`; never let it jump to the Persian
  root. Controls that must remain on the current document (the skip link and the
  work-page back-to-top link) use a plain `#fragment`.
- **Metadata is per page and locale.** Each page has its own title, description,
  canonical, Open Graph locale and absolute `hreflang` set. The English
  canonical must never point at the Persian page. `x-default` is Persian.
- **Sections are assembled by id.** `site.sections` controls order and presence;
  `src/lib/sections.ts` derives each slot's anchor, heading id and navigation
  entry, and `src/components/sections/index.ts` is the registry. A listed section
  without content is dropped, and a fragment link with no rendered target fails
  the build.
- **Sections receive their slot.** A section module takes `{ site, section }` and
  uses `section.id` and `section.headingId`; it does not hardcode its DOM ids.
- **Reuse before adding.** Use `Button`, `Section`, `SectionHeading`, `Eyebrow`,
  `Logo` and the existing design classes. Add a new section only when an existing
  section cannot express the required content; register it and add its type.
- **No unnecessary abstraction.** No page-builder, CMS, global store, backend,
  UI framework or speculative dependency.
- **No dead code.** Remove unused CSS, components, config fields and assets when
  replacing behavior. There is no retained starter library.

The supported section ids are `hero`, `definition`, `services`, `patterns`,
`features`, `reasons`, `faq` and `contact`. PBS renders all of them in this order:
`hero`, `services`, `patterns`, `features`, `reasons`, `definition`, `faq`,
`contact`. `hero` is required.

## Portfolio truth

The portfolio is a real page, not a template section. A project may enter
`work.projects` only when:

- the work is real and PBS actually delivered it;
- the client has allowed publication, including any client name;
- the problem, scope and outcome can be described without inventing details;
- any cover image is supplied by the owner or captured with permission.

While either locale's `projects` is empty, both portfolio routes render an honest
publication state and are `noindex`. The sitemap excludes them. Do not add fictional clients, invented
screenshots, demo case studies or placeholder metrics to make the page look
full. An empty portfolio is better than a false one.

## PBS content truth

PBS is independent from Noveno. It is an early-stage, currently two-person team
(sales and technical delivery), not a registered legal company. Its preferred
clients are larger companies, but fit depends on capacity, procurement and
contractual requirements. Client acquisition starts through direct sales,
introductions and referrals. International work is an aspiration, not a proven
track record.

Public copy must not invent or imply:

- clients, completed projects, published portfolio work, testimonials or
  references that are not real and permitted;
- project counts, revenue, years in business, staff beyond the two current roles;
- offices, addresses, certifications, awards, credentials or enterprise status;
- legal incorporation, tax registration or a licence PBS does not hold;
- guaranteed ROI, sales, rankings, error-free delivery or unlimited support.

The capabilities are scoped websites and landing pages, manageable business
apps/panels/dashboards, automation and integrations, and selected digital-growth
execution the team can actually deliver. Full-service marketing, highly complex
or critical enterprise systems, and 24/7 infrastructure are outside the current
default scope. Say what is excluded as well as what is included.

`patterns` describes capability patterns, not client case studies. Keep that
distinction explicit. `reasons` describes method and capacity, not unverified
achievements. The FAQ must continue to answer pricing, portfolio and legal-status
questions truthfully.

## Contact channels

There are exactly four public channels: WhatsApp, Bale, Telegram and phone.

- `src/config/pbs/contact.ts` is the single editable source. Leave a value empty
  if it is not verified.
- The site shows a clearly non-clickable "details coming soon" state for an empty
  or invalid value. Never invent a number, handle, Bale URL format or account.
- WhatsApp uses a digits-only international number through `https://wa.me/`.
- Phone uses a valid `tel:` link and keeps a human-readable display value.
- Telegram and Bale require an explicit verified `https://` profile URL.
- Messenger links open in a new tab with `noopener noreferrer`; phone links do
  not. Invalid or unsafe values must produce no link.
- The header CTA and contact section must state the pending state clearly when no
  channel is available. Do not add a fake form, success message, email inbox, API
  or storage.
- Do not hardcode a contact value in a component, locale config or doc snippet.

## Visual quality bar

- Start with a strong first mobile viewport: what PBS does, a supporting line,
  and a usable primary action.
- Typography carries hierarchy. Use Vazirmatn for Persian with genuine
  Arabic-script shaping, looser line height, no letter-spacing and no uppercase.
  Use Inter for English. The header uses the owner-supplied on-light logo; the
  footer uses the owner-supplied transparent on-dark variant.
- Favour editorial composition, asymmetry, rules and generous spacing over
  repeated card grids. The current site uses a light editorial hero with a
  conceptual scope map, measured service rows, an illustrative scenario ledger,
  a four-step process, a compact PBS identity aside, an FAQ and a single deep
  contact/footer closing. Cyan is a small structural accent, not a text colour
  on white.
- The website is light-only. Do not add a theme toggle, a dark theme, a
  `prefers-color-scheme` dark branch or an automatic OS-driven theme. A compact
  navy statement panel and the closing contact/footer are the only deep areas.
- Avoid generic gradient heroes, neon, excessive glassmorphism, fake dashboards,
  stock technology people, fabricated statistics and animation for its own sake.
  The sticky light header may use one restrained translucent surface with a
  solid fallback.
- Every interactive control must do something meaningful. A disabled contact
  channel is not a button.
- Meet WCAG-minded basics: semantic headings, focus visibility, 44px targets,
  contrast, keyboard operation and reduced motion.
- In RTL, check that menu order, navigation, labels, icons and footer mirror
  correctly. Use logical CSS properties and isolate Latin identifiers with
  `<bdi dir="ltr">`.
- Treat 360px up as a designed state. Check 360, 390, 768, 1024, 1120 and 1440
  widths.

## Fonts, images and dependencies

- PBS uses locally hosted Vazirmatn and Inter variable WOFF2 files under
  `src/assets/fonts/`, registered in `src/lib/fonts.ts` and licensed under OFL
  1.1. There is no runtime Google Fonts or CDN request.
- Keep the licence text with the font and update `CREDITS.md` when changing it.
- The PBS public pages use no stock photography. The hero scope map and the work
  page empty-state are original CSS/SVG compositions. Project covers may be
  added only for real, permitted work.
- Owner-supplied brand assets live under `public/brand/`. The header uses
  `public/brand/Logo/pbs-logo-on-light.svg`; the footer uses
  `public/brand/Logo/pbs-logo-primary-dark.svg`. Do not redraw, stretch or
  recolour either file; keep their aspect ratio and clear space. Favicons,
  manifest icons and the social image are documented in README and CREDITS.
- Do not add a dependency unless native HTML, CSS and the existing Astro API
  cannot meet the requirement. No UI framework, carousel or animation library.
  Tailwind is not a dependency.
- No analytics, remote font/CDN, chat widget, map embed or third-party script
  without an explicit requirement and a performance/consent review.

## SEO rules

- Both homepage locales and both portfolio locales have self-referencing
  canonicals when indexable, reciprocal `hreflang` entries and an `x-default`
  pointing at Persian.
- `src/pages/sitemap.xml.ts` is the only sitemap source. It includes the work
  pages only when both locale portfolios have at least one project. Do not
  hand-maintain a second sitemap.
- `src/pages/robots.txt.ts` references the absolute sitemap URL for the current
  deployment base.
- JSON-LD is generated from visible content only: Organization, WebSite, WebPage,
  FAQPage on the homepage, and breadcrumb plus ItemList on a published work page.
  Do not add ratings, reviews, prices or client claims that are not in the page.
- Do not add meta keywords as a substitute for useful copy. Keep the real title,
  description, headings and body text aligned with the page intent.

## Deployment requirements

- Output must stay static (`output: "static"`). No server runtime or rewrites.
- `astro.config.mjs` derives `site` and `base` from `SITE_URL` / `BASE_PATH`, a
  `public/CNAME` custom domain, or `GITHUB_REPOSITORY`. Keep that precedence.
- All links and root-relative public assets must go through `href()`,
  `localeHref()`, `localePageHref()` or `pagePath()` in `src/lib/`. Config links
  stay plain fragments (`#contact`). Never hardcode `/pbs-website/`.
- The Pages workflow must remain pinned to full commit SHAs, use least-privilege
  permissions, install from the lockfile, and run `npm run verify`.
- Test a project-page subpath before claiming deployment compatibility:

```sh
SITE_URL=https://OWNER.github.io BASE_PATH=/REPO/ npm run build
BASE_PATH=/REPO/ npm run preview
```

- GitHub Pages has no server-side fallback. Preserve the static `404.html` and
  in-page navigation.
- Deployment configuration is not permission to deploy.

## Commands and verification

Run from the repository root:

```sh
npm ci
npm run check
npm run build
npm run verify
SITE_URL=https://imdanialrashidi.github.io BASE_PATH=/pbs-website/ npm run build
BASE_PATH=/pbs-website/ npm run preview
```

Expected: no Astro/TypeScript diagnostics, a clean static build with `/`,
`/en/`, `/work/`, `/en/work/`, `/404.html`, `/sitemap.xml` and `/robots.txt`,
and no missing assets under the project base path.

Before delivery, verify as applicable:

- 360, 390, 768, 1024, 1120 and 1440 widths with no horizontal overflow or
  clipped CTAs, in both Persian RTL and English LTR.
- Every route is independently prerendered with the correct title, description,
  canonical, `hreflang` and `x-default`; language switch and locale-local anchors
  work under the project base path. An empty portfolio is `noindex` and absent
  from the sitemap.
- Menu open/close, Escape, focus containment/return, and 44px targets.
- FAQ keyboard operation and open/closed state.
- Contact channels with verified test values (links, safe targets, phone) and
  with empty values (no links, honest pending state). Restore empty values after
  the test if real identifiers have not been supplied.
- `prefers-reduced-motion: reduce` leaves content visible; no-JS navigation and
  FAQ remain usable.
- Production asset URLs, fonts, logo, favicon, manifest, Open Graph, JSON-LD,
  sitemap, robots and static 404 use the intended base.
- No request failures, console errors, broken images, or unintended network
  requests.
- Diff contains no stray debug code, fake contact details, fake portfolio
  entries, unused assets or unrelated changes.

Do not claim Lighthouse/performance results that were not measured. Use the
production build, not the dev server, for performance and base-path claims. Fix
verified defects; stop after two repair rounds and report the remaining issue
rather than weakening a check.

## Delivery boundary

Report what changed, which acceptance criteria passed, exact commands and exit
codes, and any unverified gap. Do not commit, push, open a pull request, publish,
or deploy unless explicitly requested. Preserve unrelated user changes.
