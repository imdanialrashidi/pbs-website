import Contact from "./Contact.astro";
import Faq from "./Faq.astro";
import Features from "./Features.astro";
import Gallery from "./Gallery.astro";
import Hero from "./Hero.astro";
import Pricing from "./Pricing.astro";
import Services from "./Services.astro";
import Statement from "./Statement.astro";
import Story from "./Story.astro";
import Testimonials from "./Testimonials.astro";
import type { SectionId } from "../../config/types";

/**
 * Every supported section id mapped to the module that renders it.
 * `satisfies` makes a missing or orphaned entry a type error.
 */
export const sectionComponents = {
  hero: Hero,
  statement: Statement,
  story: Story,
  services: Services,
  features: Features,
  gallery: Gallery,
  pricing: Pricing,
  testimonials: Testimonials,
  faq: Faq,
  contact: Contact,
} satisfies Record<SectionId, unknown>;
