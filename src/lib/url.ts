import type { SiteConfig } from "../config/types";

/** The deployment base, always with a leading and trailing slash. */
const rawBase = import.meta.env.BASE_URL;
export const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

/** Prefix a root-relative path with the deployment base. */
function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  if (path === "/") return base;
  return `${base}${path.replace(/^\//, "")}`;
}

/** A base-independent locale route, normalised to a trailing slash. */
function localeRoute(path: string): string {
  const rootRelative = path.startsWith("/") ? path : `/${path}`;
  return rootRelative.endsWith("/") ? rootRelative : `${rootRelative}/`;
}

/**
 * The one rule for root-scoped links. An in-page fragment is resolved through
 * the deployment base so it still lands on the site from the 404 page; a
 * root-relative path is base-prefixed; anything else is left alone.
 *
 * For links inside a localised page use `localeHref()`: on `/en/`, a fragment
 * must stay on `/en/` rather than jumping back to the Persian page.
 */
export function href(target: string): string {
  if (target.startsWith("#")) return `${base}${target}`;
  if (target.startsWith("/")) return withBase(target);
  return target;
}

/** The base-aware URL of a locale's landing page. */
export function localeHome(site: Pick<SiteConfig, "meta">): string {
  return withBase(localeRoute(site.meta.path ?? "/"));
}

/**
 * Resolve a config link inside the current locale. Fragments become
 * `/base/en/#anchor` on the English page and `/base/#anchor` on Persian.
 * Root-relative paths and external URLs keep the normal rules.
 */
export function localeHref(
  site: Pick<SiteConfig, "meta">,
  target: string,
): string {
  if (target.startsWith("#")) return `${localeHome(site)}${target}`;
  if (target.startsWith("/")) return withBase(target);
  return target;
}

/**
 * A page path that is safe to run through the deployment base more than once:
 * asset URLs and `Astro.url.pathname` already carry it.
 */
export function pagePath(pathname: string): string {
  const root = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!root) return pathname;
  if (pathname === root || pathname.startsWith(`${root}/`)) return pathname;
  return withBase(pathname);
}
