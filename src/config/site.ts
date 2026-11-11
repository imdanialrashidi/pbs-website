import type { SiteConfig, WorkPageContent } from "./types";
import { pbsFa } from "./pbs/fa";
import { pbsEn } from "./pbs/en";
import { pbsWork } from "./pbs/work";

/**
 * The two public PBS locales, rendered in the same static build.
 *
 * `fa` is the reference page at the deployment root; `en` lives at `/en/`.
 * The work page is a second route pair with its own content.
 */
export const pbsSites = {
  fa: pbsFa,
  en: pbsEn,
} satisfies Record<"fa" | "en", SiteConfig>;

export const pbsWorkPages = pbsWork satisfies Record<"fa" | "en", WorkPageContent>;

/** Persian is the site default, also used by the static 404 page. */
export const site = pbsSites.fa;
