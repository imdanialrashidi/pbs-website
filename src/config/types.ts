/**
 * The sections a page can be assembled from. This array is the single source
 * of truth: the union, the registry and the config all derive from it.
 */
export const sectionIds = [
  "hero",
  "definition",
  "services",
  "patterns",
  "features",
  "reasons",
  "faq",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

/** Page direction. Persian uses `rtl`; English uses `ltr`. */
export type Direction = "rtl" | "ltr";

/** The four public contact channels PBS publishes. */
export type ContactChannelId = "whatsapp" | "bale" | "telegram" | "phone";

/** Published page routes. A page key maps to one route per locale. */
export type PageKey = "home" | "work";

/** A locale route. `path` is base-independent, for example `/en/work/`. */
export interface LocaleLink {
  /** Config key of the locale, used to resolve page routes. */
  key: "fa" | "en";
  /** BCP 47 tag used for `hreflang` and the link's `lang` attribute. */
  locale: string;
  /** Full language name, used as the link's accessible title. */
  label: string;
  /** Compact switch label, for example `FA` or `EN`. */
  shortLabel: string;
  /** Base-independent path for the current page. */
  path: string;
  current?: boolean;
  /** The route search engines should use when no language matches. */
  xDefault?: boolean;
}

export type FontFaceKey = "vazirmatn" | "inter";

export type IconName =
  | "arrow-up-right"
  | "phone"
  | "close"
  | "menu"
  | "plus"
  | "message-circle"
  | "messages-square"
  | "send";

export interface Headline {
  lead: string;
  accent?: string;
  tail?: string;
}

export interface Action {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
}

/**
 * Interface copy that is not part of the client's marketing content.
 * Defaults live in `src/lib/language.ts`; a client can override any field.
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
  backToTop: string;
  contact: string;
  languageSwitch: string;
  work: string;
  opensInNewTab: string;
  openChannel: string;
  contactPending: string;
  contactUnavailable: string;
  staticNoTracking: string;
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

/**
 * The PBS website is light-only. `deep`, `deepSurface` and the footer tokens
 * exist for the single closing statement area and the footer, not for a theme
 * switch; nested components keep using the same semantic names there.
 */
export interface Theme {
  colors: {
    canvas: string;
    surface: string;
    tint: string;
    ink: string;
    muted: string;
    line: string;
    action: string;
    actionInk: string;
    actionHover: string;
    accent: string;
    accentInk: string;
    deep: string;
    deepSurface: string;
    deepInk: string;
    deepMuted: string;
    footerBg: string;
    footerInk: string;
    focus: string;
  };
  fonts: {
    display: FontFaceKey;
    body: FontFaceKey;
    emphasis: FontFaceKey;
  };
  shape: {
    media: string;
    button: string;
  };
  layout: {
    contentWidth: string;
    gutter: string;
    sectionSpace: string;
  };
}

/**
 * A conceptual scope map for the hero. It explains the kinds of work PBS
 * combines; it is not a real project or a performance dashboard.
 */
export interface HeroScopeMap {
  title: string;
  stamp: string;
  input: string;
  layers: Array<{ label: string; title: string; detail: string }>;
  output: string;
  caption: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: Headline;
  intro: string;
  actions: Action[];
  scopeMap: HeroScopeMap;
}

/** The name behind the initials, explained as a working principle. */
export interface DefinitionContent {
  eyebrow: string;
  headline: Headline;
  intro: string;
  words: Array<{
    initial: string;
    english: string;
    label: string;
    description: string;
  }>;
  closing: string;
}

/**
 * Capability patterns: typical problems and the kind of output they lead to.
 * They are explicitly not client case studies.
 */
export interface PatternsContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  note?: string;
  labels: {
    problem: string;
    output: string;
    capability: string;
  };
  items: Array<{
    title: string;
    description: string;
    outcome: string;
    meta?: string;
  }>;
}

export interface ReasonsContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  quote?: string;
  quoteAttribution?: string;
  items: Array<{
    title: string;
    description: string;
    meta?: string;
  }>;
}

export interface ServicesContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  note?: string;
  labels: {
    problem: string;
    deliverables: string;
    boundary: string;
  };
  items: Array<{
    title: string;
    problem: string;
    description: string;
    deliverables: string[];
    boundary: string;
  }>;
}

export interface FeaturesContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  items: Array<{
    title: string;
    description: string;
    meta?: string;
  }>;
}

export interface FaqContent {
  eyebrow: string;
  headline: Headline;
  intro?: string;
  action?: Action;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

/** A resolved, safe public link for one contact channel. */
export interface ContactLinkValue {
  href?: string;
  external: boolean;
  display?: string;
}

export interface ContactChannelContent {
  id: ContactChannelId;
  label: string;
  description: string;
  /** Shown instead of a link when no verified identifier is configured. */
  pendingLabel?: string;
}

export interface ContactContent {
  eyebrow: string;
  headline: Headline;
  intro: string;
  /** What a visitor can prepare before opening a channel. */
  prep?: {
    title: string;
    items: string[];
  };
  /** The public channels shown in the PBS contact section. */
  channels?: ContactChannelContent[];
  /** One truth about what is and is not currently available. */
  availabilityNote?: string;
  /** Closing note below the channel list. */
  note?: string;
}

export interface FooterContent {
  tagline: string;
  disclosure?: string;
}

export interface BrandLogo {
  /** Public path, resolved through the deployment base. */
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export interface SocialImage {
  /** Public path, resolved through the deployment base. */
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type NavigationItem =
  | { label: string; section: SectionId }
  | { label: string; page: PageKey };

/** Optional cover for a published project. Lives in `public/` as a file. */
export interface WorkCover {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * A published project. Only real work with permission belongs here; `client`
 * stays optional because permission covers the name as well as the work.
 */
export interface WorkProject {
  slug: string;
  title: string;
  client?: string;
  year?: string;
  summary: string;
  challenge: string;
  scope: string[];
  outcome: string;
  cover?: WorkCover;
  href?: string;
  featured?: boolean;
}

/** Content for the portfolio page in one locale. */
export interface WorkPageContent {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  headline: Headline;
  intro: string;
  breadcrumb: {
    label: string;
    home: string;
    current: string;
  };
  empty: {
    label: string;
    title: string;
    body: string;
    action?: Action;
  };
  publishing: {
    title: string;
    intro?: string;
    items: string[];
    note?: string;
  };
  labels: {
    project: string;
    challenge: string;
    scope: string;
    outcome: string;
    visit: string;
  };
  closing: {
    title: string;
    body: string;
    action?: Action;
  };
  projects: WorkProject[];
}

export interface SiteConfig {
  brand: {
    name: string;
    mark: "tide" | "frame" | "sun";
    descriptor: string;
    /** Approved logo variant for light surfaces. */
    logo?: BrandLogo;
    /** Approved logo variant for the one deep footer surface. */
    logoOnDark?: BrandLogo;
  };
  meta: {
    title: string;
    description: string;
    /** BCP 47 language tag, e.g. "fa-IR" or "en". */
    locale: string;
    /** Optional; defaults to the script direction of `locale`. */
    direction?: Direction;
    keywords?: string[];
    /** Base-independent page route: `/` for Persian, `/en/` for English. */
    path?: string;
    socialImage?: SocialImage;
  };
  /** Routes this site publishes, used by the language switch and hreflang. */
  localeLinks?: LocaleLink[];
  /** Resolved public contact links, built from the single identifier config. */
  contactLinks?: Partial<Record<ContactChannelId, ContactLinkValue>>;
  /** Optional overrides for the locale's interface strings. */
  ui?: UiOverrides;
  theme: Theme;
  /**
   * Navigation entries. Section entries derive their anchor, so they can
   * never point at content that does not render. Page entries use a route key.
   */
  navigation: NavigationItem[];
  headerAction?: Action;
  hero: HeroContent;
  definition: DefinitionContent;
  services?: ServicesContent;
  patterns?: PatternsContent;
  features?: FeaturesContent;
  reasons?: ReasonsContent;
  faq?: FaqContent;
  contact?: ContactContent;
  footer: FooterContent;
  sections: SectionId[];
}
