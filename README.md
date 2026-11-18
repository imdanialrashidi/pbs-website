# PBS | Practical Business Solutions

The public website for **PBS**, an independent, early-stage B2B digital
solutions team. Persian is the reference locale at the deployment root; English
is a real LTR page at `/en/`. The portfolio is a route pair at `/work/` and
`/en/work/`; the about page and four service pages extend the same bilingual
build. All pages are prerendered in the same static Astro build.

Production is served at **https://pbsmarketing.ir** (apex). The custom domain is
pinned in `public/CNAME`; `astro.config.mjs` derives the absolute site URL and
the root base from it.

The site is deliberately static: no backend, CMS, database, analytics, remote
font service, third-party script or fake inquiry submission. Contact actions
open a verified external channel when one is configured, and show an honest
"details coming soon" state when it is not. The website is light-only: there is
no theme toggle, localStorage theme, dark stylesheet or automatic OS-dark
variant. The closing contact/footer and one small statement panel are deliberate
navy surfaces.

## Stack

- Astro `7.4.12`, static output
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
| `/about/` | `fa-IR` | RTL | `src/config/pbs/about.ts` |
| `/en/about/` | `en` | LTR | `src/config/pbs/about.ts` |
| `/services/websites/` | `fa-IR` | RTL | `src/config/pbs/service-pages.ts` |
| `/en/services/websites/` | `en` | LTR | `src/config/pbs/service-pages.ts` |
| `/services/apps/` | `fa-IR` | RTL | `src/config/pbs/service-pages.ts` |
| `/en/services/apps/` | `en` | LTR | `src/config/pbs/service-pages.ts` |
| `/services/automation/` | `fa-IR` | RTL | `src/config/pbs/service-pages.ts` |
| `/en/services/automation/` | `en` | LTR | `src/config/pbs/service-pages.ts` |
| `/services/growth/` | `fa-IR` | RTL | `src/config/pbs/service-pages.ts` |
| `/en/services/growth/` | `en` | LTR | `src/config/pbs/service-pages.ts` |
| `/work/` | `fa-IR` | RTL | `src/config/pbs/work.ts` |
| `/en/work/` | `en` | LTR | `src/config/pbs/work.ts` |
| `/404.html` | `fa-IR` | RTL | `src/pages/404.astro` |
| `/sitemap.xml` | | | `src/pages/sitemap.xml.ts` |
| `/robots.txt` | | | `src/pages/robots.txt.ts` |

> **Release blocker:** the four public contact identifiers are intentionally
> empty because PBS has not supplied verified values. All four channels currently
> show a truthful non-clickable "details coming soon" state. Before a public
> launch, either fill [`src/config/pbs/contact.ts`](src/config/pbs/contact.ts)
> with verified values, rebuild and test the links, or explicitly accept the
> pending state. Do not substitute guessed handles or numbers.

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

Verify the production custom domain and the GitHub Pages project path:

```sh
npm run verify                     # with public/CNAME: https://pbsmarketing.ir/
npm run preview                    # serve the production build at the root

# Compatibility regression only; rebuild production afterwards.
SITE_URL=https://imdanialrashidi.github.io BASE_PATH=/pbs-website/ npm run build
BASE_PATH=/pbs-website/ npm run preview
```

Open the URL printed by Astro. The preview command must receive the same
`BASE_PATH` as the build. After the project-path regression, run
`npm run verify` again so `dist/` contains the production-domain build.

## Project map

```text
src/
  config/
    pbs/
      fa.ts              Persian homepage copy, metadata and navigation
      en.ts              English homepage copy, metadata and navigation
      service-pages.ts   four service detail pages for both locales
      about.ts           about page copy for both locales
      work.ts            portfolio copy for both locales
      shared.ts          palette, shape, locale links, resolved contacts
      contact.ts         THE editable public contact identifiers
    site.ts              PBS locale, service, about and work-page registries
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
    pages/               ServicePage, AboutPage and their route wrappers
    work/                WorkPage and project-card presentation
    seo/                 JsonLd
    ui/                  Button, Logo, Section, headings, breadcrumb and icons
  pages/
    index.astro          Persian homepage at the deployment root
    en/index.astro       English homepage at /en/
    about/               Persian about page
    en/about/            English about page
    services/            four Persian service detail pages
    en/services/         four English service detail pages
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
  CNAME                  production custom domain: pbsmarketing.ir
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
  includes reciprocal `hreflang` links plus `x-default` for every indexable
  page. The portfolio is included only when both locale portfolios contain at
  least one real project.
- `src/pages/robots.txt.ts` generates `/robots.txt` with the absolute sitemap URL
  for the current deployment base. On a project-path GitHub Pages deployment,
  crawlers still read `robots.txt` only from the origin root; see the deployment
  note below.
- `src/lib/schema.ts` generates JSON-LD from visible content: Organization,
  WebSite, WebPage, FAQPage on the homepage, Service plus BreadcrumbList on a
  service page, AboutPage plus BreadcrumbList on the about page, and breadcrumb
  plus ItemList on a published portfolio page. No ratings, prices or client
  claims are invented.
- Every indexable page has a self-referencing canonical. The portfolio is
  `noindex, follow` while empty.
- Titles and descriptions are specific to each page and stay within a useful
  search-result length. Headings follow one `h1` per page and a logical hierarchy.

### Search discoverability

Production uses the apex custom domain, so `robots.txt` and `sitemap.xml` are
served at the origin root and crawlers discover the sitemap normally. The
generated files contain absolute `https://pbsmarketing.ir/...` URLs derived from
`public/CNAME` (or `SITE_URL`).

After the first successful deployment, submit
`https://pbsmarketing.ir/sitemap.xml` in Google Search Console and Bing Webmaster
Tools.

A project-path build at `https://<owner>.github.io/<repo>/` still has the
origin-root `robots.txt` limitation. Use it only for compatibility testing, not
for the public launch.

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

Production is the apex custom domain **https://pbsmarketing.ir**, served by
GitHub Pages at the site root and delivered through Cloudflare.
`public/CNAME` is the build input that makes `astro.config.mjs` use
`site: "https://pbsmarketing.ir"` and `base: "/"`. Because
the site publishes from a custom GitHub Actions workflow, Pages ignores a
`CNAME` file in the artifact: the same domain must also be set under
**Settings → Pages → Custom domain**. Do not add a second domain file or
hardcode the host in components.

The included [Pages workflow](.github/workflows/deploy.yml) is pinned to full
commit SHAs, installs from the lockfile, runs `npm run verify`, and requests only
the permissions Pages needs. A push to `main` or a manual workflow run publishes
the build. This repository change does **not** deploy it.

### Why Cloudflare sits in front of Pages

Every GitHub Pages custom domain is served from the same Fastly edge
(`185.199.108-111.153`, Frankfurt for this zone). From Iranian consumer networks
that edge is throttled and frequently reset mid-response, so a page never
finishes loading even though the host is healthy. Measured from Tehran on
2026-11-15:

| Request | Result |
| --- | --- |
| `https://pbsmarketing.ir/` (59 KB HTML) | stalls after 1-15 KB, times out |
| `https://pbsmarketing.ir/_astro/*.woff2` (111 KB) | stalls after 21 KB |
| `https://pbsmarketing.ir/robots.txt` (69 B) | `200` in 0.5 s |
| `pbsmarketing.ir` from 8 public nodes (IL, IT, PL, PT, RO, RU, SE, UA) | `200` in 0.18-0.33 s |
| `https://cdnjs.cloudflare.com/...js` (Cloudflare, 600 KB) | `200` in 1.1 s |
| `https://www.cloudflare.com/` (Cloudflare, 1.3 MB) | `200` in 1.7 s |

The build, the DNS and the certificate are fine; the last mile to GitHub Pages
is not. Cloudflare terminates that last mile on an edge Iranian networks can
reach, and adds HTTP/3, Brotli, edge caching and a proxy that keeps answering
while the origin is slow. Pages keeps serving the artifact; it stops being the
public entry point.

**Never** leave `pbsmarketing.ir` or `www.pbsmarketing.ir` on **DNS only** (grey
cloud) in production. That is the configuration that times out.

### One-time DNS setup in Cloudflare

The `.ir` registrar delegates the zone to Cloudflare (`lila` and `vicky`
nameservers). All public records live in that zone.

| Type | Name | Content | Proxy status |
| --- | --- | --- | --- |
| `A` | `@` | `185.199.108.153` | **Proxied** |
| `A` | `@` | `185.199.109.153` | **Proxied** |
| `A` | `@` | `185.199.110.153` | **Proxied** |
| `A` | `@` | `185.199.111.153` | **Proxied** |
| `CNAME` | `www` | `imdanialrashidi.github.io` | **Proxied** |

- No apex `AAAA` records. While the names are proxied, Cloudflare answers `AAAA`
  from its own network; a stored GitHub Pages `AAAA` would only point the origin
  at a host that is unreachable from the networks this proxy exists for.
- `www` points at the repository host, never at the apex, so Cloudflare's
  flattening still has a real origin.
- Remove parked `A`/`CNAME` records for `@` and `www`, and keep `MX`/`TXT`
  records unproxied.

Two things caught people out when this zone was switched over:

- **Universal SSL must be active.** The edge certificate exists per zone, and
  Cloudflare issues it once the zone has a proxied record. If
  **SSL/TLS → Edge Certificates → Universal SSL** still reads *pending* after
  the switch, wait (usually minutes, up to 24 h) before assuming a DNS fault.
- **GitHub will complain about the DNS check.** With the records proxied, Pages
  settings cannot see `185.199.*` and may show a DNS warning. That warning is
  cosmetic: the site, the certificate and `Enforce HTTPS` keep working. It only
  matters when the certificate has to be renewed; see below.

Verify from a machine that can query public DNS:

```sh
dig +short pbsmarketing.ir A          # Cloudflare addresses, not 185.199.*
dig +short www.pbsmarketing.ir        # the same Cloudflare addresses
curl -sSI https://pbsmarketing.ir/ | grep -i -E '^server|^cf-ray'
```

`server: cloudflare` plus a `cf-ray` header means the proxy is on. A `185.199.*`
answer means the record is still DNS only.

### Certificate and proxy order

GitHub issues and renews the Pages certificate itself. The current one covers
`pbsmarketing.ir` and `www.pbsmarketing.ir` (Let's Encrypt, issued 2026-11-15,
expires 2027-02-13). GitHub verifies the domain through DNS, so the order is:

1. Push the release commit to `main`, or run the workflow manually, and set
   **Settings → Pages → Source** to **GitHub Actions**.
2. Add `pbsmarketing.ir` under **Custom domain** while the records are still
   **DNS only**, and wait for the certificate to read **approved** and
   **Enforce HTTPS** to become available.
3. Then switch both records to **Proxied**, set the SSL mode to **Full (strict)**,
   and keep **Enforce HTTPS** on in Pages.

If a renewal ever stalls while proxied, set the records back to **DNS only** for
a day, let GitHub renew, and re-enable the proxy. Check
`https_certificate.expires_at` in
`https://api.github.com/repos/imdanialrashidi/pbs-website/pages` around each
renewal window.

### Cloudflare settings for a static GitHub Pages origin

Set once, in the `pbsmarketing.ir` zone. These replace the server behaviour
GitHub Pages cannot express: caching, headers and redirects.

**SSL/TLS → Overview**
- Encryption mode **Full (strict)**. `Flexible` loops, because Pages already
  force-redirects HTTP to HTTPS.
- **Always Use HTTPS** on, **Automatic HTTPS Rewrites** on.
- **Minimum TLS 1.2**, **TLS 1.3** on, **HTTP/3** on, **0-RTT** on.
- **HSTS** on, `max-age=15552000; includeSubDomains`. Add `preload` only after the
  zone has been stable for months.

**Speed**
- **Brotli** on, **Tiered Cache** on.
- **Rocket Loader**, **Auto Minify**, **Early Hints** off. Pages already serves
  hashed, minified assets, and Rocket Loader only reorders scripts.

**Caching → Cache Rules**
1. `starts_with(http.request.uri.path, "/_astro/")` → *Eligible for cache*, Edge
   TTL **1 year**, Browser TTL **1 year**. Astro hashes these filenames, so a
   cached copy can never be stale. This is the rule that stops a slow origin from
   costing a font download.
2. Optional: everything else → *Eligible for cache*, Edge TTL **1 hour**, Browser
   TTL **respect origin**. Pages caps every origin response at `max-age=600`.
   Enable this rule only together with the purge step below.

**Rules → Redirect Rules**
- `http.host eq "www.pbsmarketing.ir"` → dynamic **301** to
  `concat("https://pbsmarketing.ir", http.request.uri.path)`, *preserve query
  string*. Saves a round trip through Pages' own `www` redirect.

**Rules → Transform Rules → Modify Response Header** (all incoming requests)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), geolocation=(), microphone=()`
- `X-Frame-Options: SAMEORIGIN`

Pages cannot set response headers; the edge is the only place these can live.

**Do not enable**: Bot Fight Mode (it challenges crawlers), Under Attack Mode as
a permanent setting, Rocket Loader, or any analytics/script injection. The site
ships no third-party request and has no consent layer to gate one.

### Purge the edge after a deploy

Only needed for the optional cache-everything rule. Add two repository secrets:

| Secret | Scope |
| --- | --- |
| `CLOUDFLARE_ZONE_ID` | the `pbsmarketing.ir` zone id |
| `CLOUDFLARE_API_TOKEN` | API token with `Zone → Cache Purge → Purge` only |

The deploy job then purges the zone after `actions/deploy-pages` succeeds. With
no secrets the step is skipped, and Cloudflare keeps respecting the origin's
`max-age=600`.

`astro.config.mjs` derives `site` and `base` in this order: `SITE_URL` /
`BASE_PATH`, then `public/CNAME`, then GitHub repository values. A project
repository without a custom domain builds at
`https://<owner>.github.io/<repo>/`; an `<owner>.github.io` repository builds at
the root. Keep `output: "static"`.

The project-path build is a compatibility regression, not the production shape.
The static `404.html` is generated; there is no server rewrite.

### After launch

1. Confirm `https://pbsmarketing.ir/`, `/en/`, `/about/`, the four service pairs,
   `/work/` and `/404.html` load from a normal mobile connection, not only from
   the office network.
2. Submit `https://pbsmarketing.ir/sitemap.xml` in Google Search Console and Bing
   Webmaster Tools.

### Release checklist

- [ ] `src/config/pbs/contact.ts` holds four verified contact values, or the
      launch explicitly accepts the honest "details coming soon" state.
- [ ] `public/CNAME` contains exactly `pbsmarketing.ir`.
- [ ] The apex `A` records and the `www` `CNAME` are **Proxied** in Cloudflare.
- [ ] `dig +short pbsmarketing.ir A` returns Cloudflare addresses, and
      `curl -sSI https://pbsmarketing.ir/` returns `server: cloudflare`.
- [ ] SSL mode is **Full (strict)** and Pages still has **Enforce HTTPS** on.
- [ ] Pages source is **GitHub Actions** and the custom domain is verified.
- [ ] `npm run verify` passes on the release commit.
- [ ] `https://pbsmarketing.ir/robots.txt` and `/sitemap.xml` are live and
      reference the production host.
- [ ] `/_astro/*` answers with a one-year browser TTL.
- [ ] The sitemap is submitted after DNS is live.

## Verification

Start from the real scripts:

```sh
npm ci
npm run verify
SITE_URL=https://imdanialrashidi.github.io BASE_PATH=/pbs-website/ npm run build
BASE_PATH=/pbs-website/ npm run preview
npm run verify   # restore the production-domain build in dist/
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
- Language switch round-trip between `/` and `/en/`, between `/about/` and
  `/en/about/`, between each `/services/.../` pair, and between `/work/` and
  `/en/work/`, including locale-local anchors.
- Sticky-header anchor landing: no heading is hidden under the header after
  navigation.
- Contact channels: pending state with empty identifiers; safe links with
  verified identifiers (test in a throwaway build, then restore the empty
  config if the values are not ready).
- `prefers-reduced-motion: reduce` leaves all content visible.
- Production HTML at the custom-domain root: favicon, manifest, CSS, WOFF2, logo,
  canonical, `hreflang`, Open Graph, JSON-LD, sitemap, robots and the static 404
  all use `https://pbsmarketing.ir/`.

### Edge checks (production, after the proxy is on)

```sh
curl -sSI https://pbsmarketing.ir/ | grep -i -E '^server|^cf-ray|^cache-control'
asset=$(curl -sS https://pbsmarketing.ir/ | grep -o '/_astro/[^"]*\.css' | head -1)
curl -sSI "https://pbsmarketing.ir$asset" | grep -i -E '^cache-control|^cf-cache-status'
curl -sS -o /dev/null -w 'http=%{http_code} version=%{http_version} total=%{time_total}s size=%{size_download}\n' \
  https://pbsmarketing.ir/
```

Expected: `server: cloudflare`, HTTP/2 or HTTP/3 negotiated, a 59 KB page in about
a second from Iran, and a one-year `cache-control` on the hashed `/_astro/*`
asset. `cf-cache-status: HIT` on the second request confirms the edge cache.

Lighthouse lab results and field Core Web Vitals are not guaranteed by the build
itself. If you report them, use a production build and record the exact URL,
device and date. Do not report scores that were not actually captured.

## Delivery boundary

This repository does not commit, push, open a pull request, publish, or deploy.
Deployment is a separate, explicitly requested action.
