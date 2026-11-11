import type { LocaleLink, PageKey, SiteConfig } from "../config/types";
import { href } from "./url";

/**
 * Public page routes. One page key maps to the same page in both locales,
 * which keeps the language switch, hreflang and sitemap in agreement.
 *
 * Paths are base-independent; `href()` adds the deployment base at render.
 */
export const pagePaths: Record<PageKey, Record<"fa" | "en", string>> = {
  home: { fa: "/", en: "/en/" },
  work: { fa: "/work/", en: "/en/work/" },
};

export function localeKeyOf(site: Pick<SiteConfig, "meta">): "fa" | "en" {
  return site.meta.locale.toLowerCase().startsWith("fa") ? "fa" : "en";
}

/** Base-aware URL for a page in the locale that owns this config. */
export function localePageHref(
  site: Pick<SiteConfig, "meta">,
  page: PageKey,
): string {
  return href(pagePaths[page][localeKeyOf(site)]);
}

/**
 * The locale routes for a specific page. The returned paths still need the
 * deployment base; `LanguageSwitch` and the layout resolve them with `href()`.
 */
export function pageAlternates(
  site: Pick<SiteConfig, "localeLinks" | "meta">,
  page: PageKey,
): LocaleLink[] {
  const current = localeKeyOf(site);

  return (site.localeLinks ?? []).map((link) => ({
    ...link,
    path: pagePaths[page][link.key],
    current: link.key === current,
  }));
}
