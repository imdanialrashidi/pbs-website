import type { PageKey, SiteConfig, WorkProject } from "../config/types";
import { href } from "./url";

export interface SchemaInput {
  site: SiteConfig;
  siteUrl: URL;
  canonical: string;
  title: string;
  description: string;
  pageKey: PageKey;
  imageUrl?: string;
  extra?: unknown[];
}

/** A truthful sales contact point, emitted only after a channel is verified. */
function contactPointFor(site: SiteConfig): Record<string, unknown> | undefined {
  const phone = site.contactLinks?.phone;
  const whatsapp = site.contactLinks?.whatsapp;
  if (!phone?.href && !whatsapp?.href) return undefined;

  const point: Record<string, unknown> = {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: { "@type": "Country", name: "Iran" },
    availableLanguage: ["fa", "en"],
  };

  const phoneNumber = phone?.display ?? phone?.href?.replace(/^tel:/, "");
  if (phoneNumber) point.telephone = phoneNumber;
  if (whatsapp?.href) point.url = whatsapp.href;

  return point;
}

/**
 * One JSON-LD graph per indexable page. It describes only what the page
 * actually contains: the organisation, the site, the page, and the FAQ when
 * the FAQ section is on the home page.
 */
export function buildStructuredData(input: SchemaInput): Record<string, unknown> {
  const { site, siteUrl, canonical, title, description, pageKey, imageUrl, extra } = input;
  const homeUrl = new URL(href("/"), siteUrl).href;
  const organizationId = `${homeUrl}#organization`;
  const websiteId = `${homeUrl}#website`;
  const pageId = `${canonical}#webpage`;
  const logoUrl = new URL(href("/icon-512.png"), siteUrl).href;
  const contactPoint = contactPointFor(site);
  const locales = [...new Set((site.localeLinks ?? []).map((link) => link.locale))];
  const websiteLanguages = locales.length > 0 ? locales : [site.meta.locale];
  const pageType =
    pageKey === "work" ? "CollectionPage" : pageKey === "about" ? "AboutPage" : "WebPage";

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizationId,
    name: site.brand.fullName ?? site.brand.name,
    alternateName: [site.brand.name, "Practical Business Solutions"],
    url: homeUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 512,
      height: 512,
    },
    slogan: "Practical Business Solutions",
    areaServed: {
      "@type": "Country",
      name: "Iran",
    },
    knowsAbout: site.services?.items.map((item) => item.title) ?? [],
    ...(contactPoint ? { contactPoint } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: homeUrl,
    name: site.brand.fullName ?? site.brand.name,
    inLanguage: websiteLanguages.length === 1 ? websiteLanguages[0] : websiteLanguages,
    publisher: { "@id": organizationId },
  };

  const webpage = {
    "@type": pageType,
    "@id": pageId,
    url: canonical,
    name: title,
    description,
    inLanguage: site.meta.locale,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: imageUrl
      ? { "@type": "ImageObject", url: imageUrl }
      : undefined,
  };

  const nodes: unknown[] = [organization, website, webpage];

  if (pageKey === "home" && site.faq) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      url: canonical,
      name: site.faq.headline.lead + (site.faq.headline.accent ?? "") + (site.faq.headline.tail ?? ""),
      mainEntity: site.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (extra?.length) nodes.push(...extra);

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function breadcrumbSchema(
  canonical: string,
  homeUrl: string,
  homeLabel: string,
  currentLabel: string,
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: canonical,
      },
    ],
  };
}

export function workItemListSchema(
  canonical: string,
  projects: WorkProject[],
  name: string,
  siteUrl: URL,
): Record<string, unknown> | undefined {
  if (projects.length === 0) return undefined;

  return {
    "@type": "ItemList",
    "@id": `${canonical}#projects`,
    name,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.summary,
      url: project.href
        ? new URL(href(project.href), siteUrl).href
        : `${canonical}#${project.slug}`,
    })),
  };
}

/** Structured data for a service detail page. Only visible page facts are used. */
export function serviceSchema(
  canonical: string,
  serviceName: string,
  description: string,
  siteUrl: URL,
): Record<string, unknown> {
  const homeUrl = new URL(href("/"), siteUrl).href;

  return {
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: serviceName,
    serviceType: serviceName,
    description,
    url: canonical,
    provider: { "@id": `${homeUrl}#organization` },
    areaServed: { "@type": "Country", name: "Iran" },
  };
}
