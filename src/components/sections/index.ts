import Contact from "./Contact.astro";
import Definition from "./Definition.astro";
import Faq from "./Faq.astro";
import Features from "./Features.astro";
import Hero from "./Hero.astro";
import Patterns from "./Patterns.astro";
import Reasons from "./Reasons.astro";
import Services from "./Services.astro";
import type { SectionId } from "../../config/types";

/**
 * Every supported section id mapped to the module that renders it.
 * `satisfies` makes a missing or orphaned entry a type error.
 */
export const sectionComponents = {
  hero: Hero,
  definition: Definition,
  services: Services,
  patterns: Patterns,
  features: Features,
  reasons: Reasons,
  faq: Faq,
  contact: Contact,
} satisfies Record<SectionId, unknown>;
