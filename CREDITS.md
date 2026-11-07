# Credits and asset provenance

## Photography

All photography is stored locally in `src/assets/images/` and was downloaded from
[Unsplash](https://unsplash.com) on 2026-10-31. The images were cropped, resized,
stripped of metadata, and colour-graded for a consistent editorial treatment.
The [Unsplash License](https://unsplash.com/license) permits free commercial use
and does not require attribution. Photographer names were not embedded in the
downloaded source URLs, so only the verifiable source URL is recorded here.

| Local file | Subject | Source |
| --- | --- | --- |
| `coast.jpg` | Atlantic beach at sunset | <https://images.unsplash.com/photo-1473116763249-2faaef81ccda> |
| `terrace.jpg` | Restaurant terrace over water | <https://images.unsplash.com/photo-1559339352-11d035aa65de> |
| `house.jpg` | Timber-and-glass house among trees | <https://images.unsplash.com/photo-1600607688969-a5bfcd646154> |
| `living.jpg` | Bright living room with linen seating | <https://images.unsplash.com/photo-1600210492486-724fe5c67fb0> |
| `bedroom.jpg` | Bedroom with linen, plants, and woven light | <https://images.unsplash.com/photo-1615874959474-d609969a20ed> |
| `dining.jpg` | Dark timber dining room | <https://images.unsplash.com/photo-1600607687920-4e2a09cf159d> |
| `cooking.jpg` | Hands preparing herbs on a board | <https://images.unsplash.com/photo-1551218808-94e220e084d2> |
| `cafe.jpg` | Café interior with timber tables | <https://images.unsplash.com/photo-1521017432531-fbd92d768814> |
| `cove.jpg` | Turquoise cove framed by pines | <https://images.unsplash.com/photo-1510414842594-a61c69b5ae57> |

When replacing images for a client, add the new provenance here. Do not add
remote image URLs to the site at runtime; commit licensed files locally instead.

## Fonts

Fonts are self-hosted as variable WOFF2 files in `src/assets/fonts/`. They are
licensed under the SIL Open Font License 1.1. The full licence texts are kept
alongside the fonts in `src/assets/fonts/licenses/`.

| Font | Role | Source | Licence |
| --- | --- | --- | --- |
| Estedad | Persian display, body, and emphasis (Arabic + Latin) | [Estedad](https://github.com/aminabedi68/Estedad) | [OFL 1.1](https://openfontlicense.org) |
| Fraunces | English display and emphasis | [Google Fonts](https://fonts.google.com/specimen/Fraunces) | [OFL 1.1](https://openfontlicense.org) |
| Manrope | English body and UI | [Google Fonts](https://fonts.google.com/specimen/Manrope) | [OFL 1.1](https://openfontlicense.org) |
| Bricolage Grotesque | English alternate display | [Google Fonts](https://fonts.google.com/specimen/Bricolage+Grotesque) | [OFL 1.1](https://openfontlicense.org) |

The Latin faces were obtained from the Google Fonts CSS endpoint. Estedad came
from its official GitHub repository as a variable WOFF2. If a client needs
Cyrillic, another Arabic-script language, or an additional character set, add
the appropriate subset and record its source in this file.

## Icons

Icons come from [Lucide](https://lucide.dev) through the `@lucide/astro` package
and are inlined at build time. Lucide is ISC licensed.

## Content

Naranj House, Casa Marea, and Atelier Sora are fictional businesses created for
this starter. Names, locations, rates, policies, guest notes, client notes, and
project names are illustrative demo content, not real business claims. The
footer of the default site and the demo notes beside the forms state this. The
photographs are shared across the demos; the Persian alt text describes the
image rather than claiming a real location. Keep the disclosures when the content
is fictional, or replace all fictional content with approved real client content
before removing them.
