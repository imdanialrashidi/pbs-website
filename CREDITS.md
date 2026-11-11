# Credits and asset provenance

## PBS brand assets

The PBS logo, favicon set, touch icon and social preview were supplied by the
PBS owner in `public/brand/` and copied to the public paths used by the site
(`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`,
`icon-512.png`, `og-image.png`). They are used only for PBS and are not
redrawn, stretched, recoloured or substituted with another company's mark.

| Asset | Use | Provenance |
| --- | --- | --- |
| `public/brand/Logo/pbs-logo-on-light.svg` | Light header and mobile-menu logo: PBS Navy wordmark with cyan spark | Owner-supplied PBS vector |
| `public/brand/Logo/pbs-logo-primary-dark.svg` | Footer logo: transparent white wordmark with cyan spark | Owner-supplied PBS vector |
| `public/brand/Logo/pbs-logo-tagline-dark.svg` | Full name-and-tagline variant retained for dark brand surfaces outside the website | Owner-supplied PBS vector |
| `public/brand/Favicon/favicon.svg` | Browser icon source | Owner-supplied PBS vector |
| `public/brand/Favicon/*.png` | Apple touch and manifest icons | Owner-supplied PBS exports |
| `public/brand/pbs-og-image-1200x630.png` | Source for `public/og-image.png` | Owner-supplied PBS social card |

The wider owner-supplied library, including mono and wordmark-only variants,
remains in `public/brand/` for the owner's future use. The usage note is
`public/brand/web-usage-fa.md`. Confirm final trademark and asset ownership with
the owner; this file does not grant a licence.

## Fonts

The public PBS pages use two self-hosted variable WOFF2 files. Both families are
licensed under the SIL Open Font License 1.1, and the full licence texts are
committed alongside the files in `src/assets/fonts/licenses/`.

| Font | Role | Source | Licence |
| --- | --- | --- | --- |
| Vazirmatn | Persian display, body and emphasis (Arabic + Latin) | [Vazirmatn](https://github.com/rastikerdar/vazirmatn), v33.003 | [OFL 1.1](https://openfontlicense.org) |
| Inter | English display, body and emphasis (Latin subset) | [Inter](https://github.com/rsms/inter) / Google Fonts Latin variable subset (v20) | [OFL 1.1](https://openfontlicense.org) |

The Inter file is the Google Fonts Latin variable subset (v20), downloaded on
2026-11-08 from the Google Fonts CSS service; its original project is
[rsms/inter](https://github.com/rsms/inter). The Vazirmatn file is the official
variable WEB font from the v33.003 release.

These are the only font files in the repository. There are no starter or demo
families, and no font is loaded from a remote service at runtime.

## Icons and original graphics

Icons come from [Lucide](https://lucide.dev) through the `@lucide/astro` package
and are inlined at build time. Lucide is ISC licensed.

The conceptual scope map in `src/components/sections/SystemMap.astro` and the
portfolio empty-state document in `src/components/work/WorkPage.astro` are
original HTML/CSS compositions made for PBS. They are not stock illustrations.

## Photography

The PBS public pages currently use no photography. The only image assets are the
owner-supplied brand logo and social preview.

If a future project cover is added, it must belong to that real project and be
published with permission. Add its local source, photographer or owner, licence
and any usage restriction to this file before shipping. Do not add stock images
of people, offices or dashboards to imply a history or client base PBS does not
have.

## Content and claims

PBS business facts are taken from the confirmed briefs
[`docs/PBS_Business_DNA.md`](docs/PBS_Business_DNA.md) and
[`docs/PBS_Design_System.md`](docs/PBS_Design_System.md). Public copy does not
invent clients, project counts, staff numbers, offices, awards, certifications,
revenue or performance results.

The portfolio in `src/config/pbs/work.ts` publishes only real work with
permission. While `projects` is empty, the page shows an honest publication
state and is marked `noindex`; no fictional client, screenshot or case study is
used to fill it.
