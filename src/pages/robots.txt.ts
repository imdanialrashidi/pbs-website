import type { APIRoute } from "astro";
import { href } from "../lib/url";

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
  const siteUrl = site ?? new URL(url.origin);
  const sitemap = new URL(href("/sitemap.xml"), siteUrl).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
