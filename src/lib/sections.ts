import type { SectionId, SiteConfig } from "../config/types";

/**
 * Page composition.
 *
 * A section id is asserted in exactly one place — this module — and everything
 * else derives from it: the DOM id, the anchor every link points at, the
 * heading id `aria-labelledby` refers to, and the navigation entry. A link to a
 * section that does not render fails the build instead of shipping.
 */

export interface SectionSlot {
  readonly id: SectionId;
  /** The section's DOM id and in-page anchor. */
  readonly anchor: `#${SectionId}`;
  /** The DOM id of its heading, referenced by `aria-labelledby`. */
  readonly headingId: `${SectionId}-title`;
}

export interface PageNavigationItem {
  readonly label: string;
  readonly anchor: `#${SectionId}`;
}

export interface Page {
  /** Sections that render, in config order. */
  readonly sections: SectionSlot[];
  /** Authored labels, kept only for sections that render. */
  readonly navigation: PageNavigationItem[];
}

/** The config key that carries each section's content. */
const sectionContentKeys = {
  hero: "hero",
  statement: "statement",
  story: "story",
  services: "services",
  features: "features",
  gallery: "gallery",
  pricing: "pricing",
  testimonials: "testimonials",
  faq: "faq",
  contact: "contact",
} as const satisfies Record<SectionId, keyof SiteConfig>;

/** Anchors that exist for every page, whether or not a section renders. */
const pageAnchors = new Set(["#main"]);

function slotOf(id: SectionId): SectionSlot {
  return { id, anchor: `#${id}`, headingId: `${id}-title` };
}

/**
 * The sections that will render: listed in `sections`, in order, and backed by
 * content. A listed section with no content is dropped rather than rendered
 * empty, so nothing can link to a blank target.
 */
export function sectionsFor(site: SiteConfig): SectionSlot[] {
  if (new Set(site.sections).size !== site.sections.length) {
    throw new Error(`SiteConfig.sections lists a section twice: ${site.sections.join(", ")}`);
  }

  const sections = site.sections
    .filter((id) => Boolean(site[sectionContentKeys[id]]))
    .map(slotOf);

  if (!sections.some((section) => section.id === "hero")) {
    throw new Error('SiteConfig.sections must include "hero" and give it content.');
  }

  return sections;
}

/** True when the section is configured and will render. */
export function hasSection(page: Page, id: SectionId): boolean {
  return page.sections.some((section) => section.id === id);
}

/** Every fragment link the config asks for, wherever it sits. */
function* fragmentLinks(value: unknown): Generator<string> {
  if (Array.isArray(value)) {
    for (const item of value) yield* fragmentLinks(item);
    return;
  }
  if (!value || typeof value !== "object") return;

  for (const [key, child] of Object.entries(value)) {
    if (key === "href" && typeof child === "string" && child.startsWith("#")) {
      yield child;
    }
    yield* fragmentLinks(child);
  }
}

function assertLinksResolve(site: SiteConfig, anchors: Set<string>): void {
  const dead = [...new Set(fragmentLinks(site))].filter((link) => !anchors.has(link));

  if (dead.length > 0) {
    throw new Error(
      `Dead in-page links: ${dead.join(", ")}. ` +
        `Anchors on this page: ${[...anchors].join(", ")}. ` +
        `Add the section to SiteConfig.sections with content, or fix the link.`,
    );
  }
}

/** The page the app should render for this config. */
export function pageFor(site: SiteConfig): Page {
  const sections = sectionsFor(site);
  const anchors = new Set([...pageAnchors, ...sections.map((section) => section.anchor)]);

  assertLinksResolve(site, anchors);

  const rendered = new Set(sections.map((section) => section.id));
  const navigation = site.navigation
    .filter((item) => rendered.has(item.section))
    .map((item) => ({ label: item.label, anchor: `#${item.section}` as const }));

  return { sections, navigation };
}
