import type { ImageMetadata } from "astro";

/**
 * The sections a page can be assembled from. This array is the single source
 * of truth: the union, the registry and the config all derive from it.
 */
export const sectionIds = [
  "hero",
  "statement",
  "story",
  "services",
  "features",
  "gallery",
  "pricing",
  "testimonials",
  "faq",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

/** Page direction. Persian, Arabic, Hebrew, and Urdu demos use `rtl`. */
export type Direction = "rtl" | "ltr";

export type FontFaceKey =
  | "fraunces"
  | "frauncesItalic"
  | "manrope"
  | "bricolage"
  | "estedad";

export type IconName =
  | "arrow-up-right"
  | "arrow-right"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "phone"
  | "close"
  | "menu"
  | "mail"
  | "map-pin"
  | "clock"
  | "coffee"
  | "bike"
  | "wine"
  | "sun"
  | "waves"
  | "compass"
  | "leaf"
  | "users"
  | "expand"
  | "plus";

export interface Headline {
  lead: string;
  accent?: string;
  tail?: string;
}

export interface Action {
  label: string;
  href: string;
  variant?: "accent" | "solid" | "outline" | "quiet";
}

export interface ImageContent {
  src?: ImageMetadata;
  alt: string;
  caption?: string;
  /** CSS object-position, e.g. "50% 30%". */
  position?: string;
}

/**
 * Interface copy that is not part of the client's marketing content.
 * Defaults live in `src/lib/i18n.ts`; a client can override any field.
 */
export interface UiStrings {
  skipToContent: string;
  primaryNavigation: string;
  openMenu: string;
  closeMenu: string;
  siteMenu: string;
  mobileNavigation: string;
  footerNavigation: string;
  explore: string;
  elsewhere: string;
  findUs: string;
  backToTop: string;
  contact: string;
  staticNoTracking: string;
  imageUnavailable: string;
  contactDetails: {
    email: string;
    address: string;
    hours: string;
    phone: string;
  };
  form: {
    name: string;
    email: string;
    arrival: string;
    departure: string;
    guests: string;
    projectType: string;
    message: string;
    messagePlaceholder: string;
    submitHint: string;
    successFallback: string;
    guestOptions: Array<{ value: string; label: string }>;
    projectTypeFallback: string;
  };
  gallery: {
    open: string;
    viewer: string;
    close: string;
    previous: string;
    next: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    back: string;
  };
}

/** Every nested object can be overridden field by field; arrays are replaced whole. */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

/** Overrides for the locale's default interface strings. */
export type UiOverrides = DeepPartial<UiStrings>;

export interface Theme {
  mode: "light" | "dark";
  colors: {
    canvas: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accentInk: string;
    line: string;
    tint: string;
    onImage: string;
    footerBg: string;
    footerInk: string;
  };
  fonts: {
    display: FontFaceKey;
    body: FontFaceKey;
    emphasis: FontFaceKey;
  };
  shape: {
    media: string;
    button: string;
    heroArch: boolean;
  };
  layout: {
    contentWidth: string;
    gutter: string;
    sectionSpace: string;
  };
}

export interface HeroContent {
  variant: "split" | "immersive";
  eyebrow: string;
  headline: Headline;
  intro: string;
  image: ImageContent;
  actions: Action[];
  facts: Array<{ label: string; value: string }>;
}

export interface StatementContent {
  eyebrow: string;
  quote: string;
  attribution: string;
  image?: ImageContent;
}

export interface StoryContent {
  eyebrow: string;
  headline: Headline;
  paragraphs: string[];
  image: ImageContent;
  facts: Array<{ label: string; value: string }>;
  signature?: string;
  signatureNote?: string;
  action?: Action;
}

export interface ServicesContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  note?: string;
  items: Array<{
    icon: IconName;
    title: string;
    description: string;
    meta?: string;
  }>;
}

export interface FeaturesContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  items: Array<{
    icon?: IconName;
    title: string;
    description: string;
    meta?: string;
  }>;
}

export interface GalleryContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  note?: string;
  items: Array<{
    image?: ImageMetadata;
    alt: string;
    caption?: string;
    position?: string;
  }>;
}

export interface PricingContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  note?: string;
  plans: Array<{
    name: string;
    description: string;
    price: string;
    unit?: string;
    badge?: string;
    meta?: string[];
    action?: Action;
  }>;
  action?: Action;
}

export interface TestimonialsContent {
  eyebrow: string;
  headline: Headline;
  note?: string;
  items: Array<{
    quote: string;
    name: string;
    detail: string;
  }>;
}

export interface FaqContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ContactContent {
  eyebrow: string;
  headline: Headline;
  intro: string;
  details: {
    email: string;
    phone?: string;
    address: string;
    hours: string;
  };
  form: {
    kind: "booking" | "inquiry";
    title: string;
    note: string;
    submitLabel: string;
    success: string;
    projectTypes?: string[];
  };
}

export interface FooterContent {
  tagline: string;
  photoCredit: {
    label: string;
    href: string;
  };
}

export interface SiteConfig {
  brand: {
    name: string;
    mark: "tide" | "frame" | "sun";
    descriptor: string;
    location: string;
  };
  meta: {
    title: string;
    description: string;
    /** BCP 47 language tag, e.g. "fa-IR" or "en". */
    locale: string;
    /** Optional; defaults to the script direction of `locale`. */
    direction?: Direction;
    keywords?: string[];
  };
  /** Optional overrides for the locale's interface strings. */
  ui?: UiOverrides;
  demo: {
    enabled: boolean;
    note: string;
  };
  theme: Theme;
  /**
   * Navigation labels keyed by section. The anchor is derived, so a nav item
   * can never point at a section that does not render.
   */
  navigation: Array<{ label: string; section: SectionId }>;
  headerAction?: Action;
  hero: HeroContent;
  statement?: StatementContent;
  story?: StoryContent;
  services?: ServicesContent;
  features?: FeaturesContent;
  gallery?: GalleryContent;
  pricing?: PricingContent;
  testimonials?: TestimonialsContent;
  faq?: FaqContent;
  contact?: ContactContent;
  footer: FooterContent;
  sections: SectionId[];
}
