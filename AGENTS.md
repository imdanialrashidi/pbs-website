# Client Demo Factory — agent instructions

This repository is a reusable, static-first, Persian-first starter for client
website demos. It is not a finished client site and not a page-builder, CMS, or
plugin framework. Work in one of two modes:

- **Starter maintenance:** improve shared components, tokens, docs, or deployment
  without coupling them to one client.
- **New client demo:** copy this repository, add a client config, content,
  imagery, and theme, and reuse the existing components.

For client-brief intake, content-truth standards, and design-review guidance,
also read [DEMO_AGENT_GUIDE.md](DEMO_AGENT_GUIDE.md). It is supplementary
guidance; its repository-status sections describe the pre-build starting point.
This file and [README.md](README.md) own current repository facts and commands.

## Sources of truth

| Area | Owner |
| --- | --- |
| Setup, commands, customization, deployment | [README.md](README.md) |
| Agent rules and quality bar | this file |
| Client content, section mix, navigation | `src/config/clients/*.ts` |
| Active client selection | `src/config/site.ts` |
| Typed content contract | `src/config/types.ts` |
| Page composition, anchors, navigation | `src/lib/sections.ts` |
| Design tokens and font CSS | `src/lib/theme.ts`, `src/lib/fonts.ts` |
| Locale, direction, interface copy, formatting | `src/lib/language.ts`, `src/lib/format.ts` |
| Image roles and derived sizes | `src/lib/images.ts` |
| Client interaction modules | `src/lib/client/` |
| Shared visual system | `src/styles/global.css` |
| Reusable UI and sections | `src/components/ui/`, `src/components/sections/` |
| Deployment base/site derivation | `astro.config.mjs` |
| Pages workflow | `.github/workflows/deploy.yml` |
| Asset provenance | [CREDITS.md](CREDITS.md) |

Read the relevant owner before changing a contract. Do not create a second
competing instruction document for build, deployment, or design rules.

## First actions

1. Read `README.md` and this file. Read `DEMO_AGENT_GUIDE.md` when the task is a
   client demo or a starter-improvement task.
2. Inspect `git status`, `package.json`, the active config, and the relevant
   component before editing.
3. Identify the narrowest owning layer: content/config, theme tokens, section
   composition, UI primitive, or deployment.
4. Make the change and run the narrowest relevant check, then the full build.
5. Inspect the complete diff. Do not commit, push, publish, or deploy unless the
   user explicitly asks.

## Architecture rules

- **Config first.** Client names, copy, URLs, images, calls to action, section
  order, and navigation belong in `SiteConfig`.
- **Components are client-agnostic.** Shared components receive `site`; they do
  not import a client config or contain client names, copy, colours, or images.
- **Theme tokens own visual identity.** Change colours, fonts, radii, spacing,
  and hero variant in the client `theme`. Do not scatter client overrides in
  components or append client CSS to `global.css`.
- **Locale and direction are config.** `meta.locale` drives `<html lang>`,
  interface copy, and Intl formatting; `meta.direction` defaults from the locale.
  Fixed interface labels belong in `src/lib/language.ts`, not in components. Persian
  is the reference locale; keep it working when changing shared layout.
- **Sections are assembled by id.** `site.sections` controls order and presence;
  `src/lib/sections.ts` derives each slot's anchor, heading id and navigation
  entry, and `src/components/sections/index.ts` is the registry. A listed
  section without content is dropped, and a fragment link with no rendered
  target fails the build. Navigation is labels keyed by section, not anchors.
- **Sections receive their slot.** A section module takes `{ site, section }` and
  uses `section.id` and `section.headingId`; it does not hardcode its DOM ids.
- **Reuse before adding.** Use `Button`, `Figure`, `Section`, `SectionHeading`,
  `Eyebrow`, `Logo`, and the existing design classes. Add a new section only when
  an existing section cannot express the required content; register it and add
  its type.
- **No unnecessary abstraction.** No page-builder engine, plugin layer, global
  store, CMS, or speculative framework. Keep the system understandable.
- **No dead code.** Remove unused CSS, components, config fields, and assets when
  replacing behavior.

The supported section ids are `hero`, `statement`, `story`, `services`,
`features`, `gallery`, `pricing`, `testimonials`, `faq`, and `contact`.
`hero` is required. See the README for their data contract and the adding-new-
section procedure.

## Client demo workflow

1. Copy the repository into a client-specific workspace or repository. Do not
   overwrite the canonical examples with client-specific content.
2. Copy an example in `src/config/clients/` and register it in
   `src/config/site.ts`; its registry key is the value `CLIENT` selects.
3. Set `meta.locale`, `meta.direction` when the default is not right, `sections`,
   `navigation` (labels keyed by section), and `headerAction`. Remove sections
   the client does not need; anchors and nav entries follow `sections`
   automatically, and a fragment link without a rendered target fails the build.
   Override interface wording through `ui` only when the locale default is wrong
   for the client.
4. Write approved copy in the client's language, including punctuation,
   numerals, and dates. If facts, prices, people, addresses, policies, or reviews
   are not approved, keep clearly fictional demo content and the demo note.
   Never fabricate a real company's address, credentials, or claims.
5. Choose a visual direction. At minimum reconsider the palette, display/body
   fonts, radii, hero variant, and section order. A rebrand should not look like
   the same layout with a different accent colour.
6. Add local imagery with a documented licence. Import it into the config; use
   `alt`, `caption`, and `position`. Update `CREDITS.md`.
7. Verify the mobile composition first, then 768 and 1440 widths, then the
   production and base-path builds.
8. Keep the demo disclosures (`demo.enabled`, form note) unless all fictional
   content has been replaced with approved real content and the client has
   confirmed the wording.

Do not hardcode a client name, price, or testimonial into a component. Do not
edit the Naranj House, Casa Marea, or Atelier Sora examples to create a one-off
client; add a new config so the examples remain useful reference material.

## Visual quality bar

- Start with a strong first mobile viewport: offer, supporting line, and a
  visible primary action.
- Typography must carry hierarchy: deliberate display scale, readable body
  sizes, and controlled line lengths. Do not use tiny text to create elegance.
- For Persian, use a Persian face with genuine Arabic-script shaping, a looser
  line height, and no letter-spacing or uppercase transformation. Let the
  headline wrap at phrase boundaries rather than inside an accented phrase.
- Favour editorial composition, asymmetry, full-bleed imagery, rules, and
  generous spacing over repeated card grids.
- Use at most one or two visual ideas (for example, an arched hero and a serif
  italic accent) and apply them consistently.
- Avoid generic gradient hero backgrounds, neon, excessive blur, glassmorphism,
  scroll-jacking, and animation for its own sake.
- Every interactive control must do something meaningful. Clearly label
  simulated forms and demo content.
- Meet WCAG-minded basics: semantic headings, labels, focus visibility, 44px
  touch targets, sufficient contrast, keyboard operation, and reduced motion.
- In RTL, check that the menu order, form labels, prices, icons, gallery arrows,
  and footer mirror correctly. Use logical CSS properties, not physical
  `left`/`right`, and isolate Latin identifiers with `<bdi dir="ltr">`.
- Treat every viewport from 360px up as a designed state, not a squeezed desktop.

## Images, fonts, and dependencies

- Store licensed images locally in `src/assets/images/` and import them in the
  client config. Do not use remote image URLs at runtime.
- Use `Figure` with a role (`hero`, `banner`, `scene`, `figure`, `thumb`) — or
  Astro `<Image>` plus a preset from `src/lib/images.ts` where the composition
  needs its own markup. Presets own widths, sizes, quality and priority; hero
  images may be eager/high priority, everything below the fold stays lazy.
  Preserve intrinsic dimensions/aspect ratio.
- Always write meaningful alt text. If an image is unknown or absent, use the
  designed fallback (`Figure` renders it; `ImageFallback` is the shared markup)
  rather than a broken source.
- Fonts are local WOFF2 files registered in `src/lib/fonts.ts`. Include the
  licence in `src/assets/fonts/licenses/` and update `CREDITS.md`. Estedad covers
  Persian/Arabic and Latin; the other faces are Latin-only. Add a subset when the
  client language needs another script.
- Do not add a dependency unless the requirement cannot be met with native HTML,
  CSS, and the existing Astro API. No UI framework by default; no animation or
  carousel library; no icon library duplication.
- No analytics, remote font/CDN, chat widget, map embed, or third-party script
  without an explicit user requirement and a performance/consent review.

## Deployment requirements

- Output must stay static (`output: "static"`). No server runtime or rewrites.
- `astro.config.mjs` derives `site` and `base` from `SITE_URL` / `BASE_PATH`, a
  `public/CNAME` custom domain, or `GITHUB_REPOSITORY`. Keep that precedence.
- All links and root-relative public assets must go through `href()` (or
  `pagePath()` for paths that may already carry the base) in `src/lib/url.ts`.
  Config links stay plain fragments (`#contact`); the module resolves them
  through the base. Never hardcode `/repository-name/`.
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
npm run verify
CLIENT=casa-marea npm run build
CLIENT=atelier-sora npm run build
```

Expected: no TypeScript/Astro diagnostics, a clean `dist/` build, and successful
Persian-default and English builds. For a base-path claim, also run the subpath
build above and load it in a browser.

Before delivery, verify as applicable:

- 360, 390, 768, and 1440 widths with no horizontal overflow or clipped CTAs,
  in both RTL (Persian default) and LTR (English).
- Menu open/close, Escape, focus containment, and 44px targets.
- FAQ keyboard operation.
- Gallery open, next/previous, Escape, focus return, and full-image load.
- Empty and complete form submission with the simulated-success message.
- `prefers-reduced-motion: reduce` leaves content visible.
- Production asset URLs and social/canonical URLs use the intended base.
- No request failures, console errors, broken images, or unintended network
  requests.
- Diff contains no stray debug code, unused assets, or unrelated changes.

Do not claim Lighthouse/performance results that were not measured. Use the
production build, not the dev server, for performance and base-path claims. Fix
verified defects; stop after two repair rounds and report the remaining issue
rather than weakening a check.

## Delivery boundary

Report what changed, which acceptance criteria passed, exact commands and exit
codes, and any unverified gap. Do not commit, push, open a pull request, publish,
or deploy unless explicitly requested. Preserve unrelated user changes.
