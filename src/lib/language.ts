import type { Direction, SiteConfig, UiStrings } from "../config/types";
import { localeFormatters, type LocaleFormatters } from "./format";

/**
 * The page language: interface copy for the locale, the direction and language
 * tag it implies, and locale-aware formatting, built once from the config.
 *
 * Callers stop threading `site.meta.locale`: they ask the page language for the
 * string, the digit, the date or the direction they need. Nested overrides are
 * merged from the shape of the dictionary, so a new group needs no code here.
 */

export interface PageLanguage extends LocaleFormatters {
  /** Interface copy, with `{brand}` and friends interpolated. */
  readonly t: UiStrings;
  /** BCP 47 tag for `<html lang>` and form controls. */
  readonly lang: string;
  readonly direction: Direction;
  /** Open Graph locale value: underscores, not hyphens. */
  readonly ogLocale: string;
}

/**
 * Open Graph locale values: `language_TERRITORY` where possible. `en` alone is
 * not a valid Open Graph locale, so the English page declares `en_US`.
 */
export function ogLocaleFor(locale: string): string {
  const [language, region] = locale.replace(/_/g, "-").split("-");
  const lang = language.toLowerCase();
  if (!region) return lang === "en" ? "en_US" : lang;
  return `${lang}_${region.toUpperCase()}`;
}

const fa: UiStrings = {
  skipToContent: "رفتن به محتوای اصلی",
  primaryNavigation: "ناوبری اصلی",
  openMenu: "باز کردن منو",
  closeMenu: "بستن منو",
  siteMenu: "منوی سایت",
  mobileNavigation: "ناوبری موبایل",
  footerNavigation: "ناوبری پاورقی",
  explore: "بخش‌ها",
  backToTop: "بازگشت به بالا",
  contact: "تماس",
  languageSwitch: "تغییر زبان",
  work: "نمونه‌کارها",
  opensInNewTab: "در پنجرهٔ جدید باز می‌شود",
  openChannel: "شروع گفتگو",
  contactPending: "جزئیات به‌زودی",
  contactUnavailable:
    "کانال‌های ارتباطی رسمی PBS در حال نهایی شدن است. تا آن زمان، هیچ شماره یا حسابی به‌عنوان تماس PBS تأیید نشده است.",
  staticNoTracking: "سایت ایستا، بدون ردیابی.",
  notFound: {
    eyebrow: "صفحه پیدا نشد",
    title: "این صفحه پیدا نشد.",
    body: "نشانی صفحه تغییر کرده یا هرگز اینجا نبوده است. به خانه برگردید و مسیر را از نو پیدا کنید.",
    back: "بازگشت به {brand}",
  },
};

const en: UiStrings = {
  skipToContent: "Skip to content",
  primaryNavigation: "Primary",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  siteMenu: "Site menu",
  mobileNavigation: "Mobile",
  footerNavigation: "Footer",
  explore: "Explore",
  backToTop: "Back to top",
  contact: "Contact",
  languageSwitch: "Language",
  work: "Work",
  opensInNewTab: "Opens in a new tab",
  openChannel: "Start conversation",
  contactPending: "Details coming soon",
  contactUnavailable:
    "PBS is finalizing its official contact channels. Until then, no number or account has been confirmed as a PBS contact.",
  staticNoTracking: "Static site, no tracking.",
  notFound: {
    eyebrow: "Page not found",
    title: "This page could not be found.",
    body: "The address may have changed, or the page was never here. Return to the homepage and find your way from there.",
    back: "Back to {brand}",
  },
};

const dictionaries = { fa, en } as const;

/** Persian is the reference locale; every other locale falls back to English. */
function languageOf(locale: string): keyof typeof dictionaries {
  return locale.toLowerCase().startsWith("fa") ? "fa" : "en";
}

const rtlLanguages = new Set(["ar", "ckb", "dv", "fa", "he", "ku", "ps", "ur", "yi"]);

function directionFor(locale: string): Direction {
  const language = locale.toLowerCase().split(/[-_]/)[0];
  return rtlLanguages.has(language) ? "rtl" : "ltr";
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Merge an override over a default, at any depth the dictionary happens to have. */
function mergeValue(base: unknown, override: unknown): unknown {
  if (!isPlainObject(base) || !isPlainObject(override)) return override;

  const merged: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    merged[key] = key in merged ? mergeValue(merged[key], value) : value;
  }
  return merged;
}

/** Replace `{token}` placeholders with the values the page actually has. */
function interpolate<T>(value: T, tokens: Record<string, string>): T {
  if (typeof value === "string") {
    return value.replace(/\{(\w+)\}/g, (match, key: string) => tokens[key] ?? match) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => interpolate(item, tokens)) as unknown as T;
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, interpolate(child, tokens)]),
    ) as unknown as T;
  }
  return value;
}

/** Build the page language from the active config. */
export function pageLanguage(
  site: Pick<SiteConfig, "meta" | "ui" | "brand">,
): PageLanguage {
  const { locale } = site.meta;
  const base = dictionaries[languageOf(locale)];
  const copy = (site.ui ? mergeValue(base, site.ui) : base) as UiStrings;

  return {
    t: interpolate(copy, { brand: site.brand.name }),
    lang: locale,
    direction: site.meta.direction ?? directionFor(locale),
    ogLocale: ogLocaleFor(locale),
    ...localeFormatters(locale),
  };
}
