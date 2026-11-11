import type { APIRoute } from "astro";
import { pbsWorkPages } from "../config/site";
import { pagePaths } from "../lib/routes";
import { href } from "../lib/url";

export const prerender = true;

const locales = [
  { hreflang: "fa-IR", key: "fa" as const },
  { hreflang: "en", key: "en" as const },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function absolute(siteUrl: URL, path: string): string {
  return new URL(href(path), siteUrl).href;
}

function urlEntry(
  siteUrl: URL,
  path: string,
  alternates: Array<{ hreflang: string; path: string }>,
): string {
  const loc = escapeXml(absolute(siteUrl, path));
  const links = alternates
    .map(
      (alternate) =>
        `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${escapeXml(
          absolute(siteUrl, alternate.path),
        )}" />`,
    )
    .join("\n");

  return `  <url>
    <loc>${loc}</loc>
${links}
  </url>`;
}

export const GET: APIRoute = ({ site, url }) => {
  const siteUrl = site ?? new URL(url.origin);

  const alternatesFor = (page: "home" | "work") => [
    ...locales.map((locale) => ({
      hreflang: locale.hreflang,
      path: pagePaths[page][locale.key],
    })),
    { hreflang: "x-default", path: pagePaths[page].fa },
  ];

  const pages: Array<{ path: string; alternates: Array<{ hreflang: string; path: string }> }> = [
    { path: pagePaths.home.fa, alternates: alternatesFor("home") },
    { path: pagePaths.home.en, alternates: alternatesFor("home") },
  ];

  if (pbsWorkPages.fa.projects.length > 0 && pbsWorkPages.en.projects.length > 0) {
    pages.push(
      { path: pagePaths.work.fa, alternates: alternatesFor("work") },
      { path: pagePaths.work.en, alternates: alternatesFor("work") },
    );
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map((page) => urlEntry(siteUrl, page.path, page.alternates)).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
