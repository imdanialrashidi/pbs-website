import type { PageKey, SectionId, SiteConfig } from "../config/types";
import { localePageHref } from "./routes";
import { pageFor } from "./sections";
import { localeHref } from "./url";

export interface ResolvedNavigationItem {
  label: string;
  href: string;
  current: boolean;
  section?: SectionId;
  page?: PageKey;
}

/**
 * Resolve authored navigation into real links for the page being rendered.
 * Section links go to the locale home anchor. Page links stay inside the
 * current locale and mark the current page.
 */
export function navigationFor(
  site: SiteConfig,
  pageKey: PageKey,
): ResolvedNavigationItem[] {
  const rendered = new Set(pageFor(site).sections.map((section) => section.id));

  return site.navigation.flatMap((item): ResolvedNavigationItem[] => {
    if ("section" in item) {
      if (!rendered.has(item.section)) return [];
      return [
        {
          label: item.label,
          href: localeHref(site, `#${item.section}`),
          current: false,
          section: item.section,
        },
      ];
    }

    return [
      {
        label: item.label,
        href: localePageHref(site, item.page),
        current: item.page === pageKey,
        page: item.page,
      },
    ];
  });
}
