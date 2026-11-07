/** The deployment base, always with a leading and trailing slash. */
const rawBase = import.meta.env.BASE_URL;
export const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

/** Prefix a root-relative path with the deployment base. */
function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  if (path === "/") return base;
  return `${base}${path.replace(/^\//, "")}`;
}

/**
 * The one rule for links. An in-page fragment is resolved through the
 * deployment base so it still lands on the site from the 404 page; a
 * root-relative path is base-prefixed; anything else is left alone.
 */
export function href(target: string): string {
  if (target.startsWith("#")) return `${base}${target}`;
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
