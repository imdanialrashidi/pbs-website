import type { Direction, SiteConfig, UiStrings } from "../config/types";
import { localeFormatters, type LocaleFormatters } from "./format";

/**
 * The page language: interface copy for the locale, the direction and language
 * tag it implies, and locale-aware formatting — built once from the config.
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

const fa: UiStrings = {
  skipToContent: "رفتن به محتوای اصلی",
  primaryNavigation: "ناوبری اصلی",
  openMenu: "باز کردن منو",
  closeMenu: "بستن منو",
  siteMenu: "منوی سایت",
  mobileNavigation: "ناوبری موبایل",
  footerNavigation: "ناوبری پاورقی",
  explore: "بخش‌ها",
  elsewhere: "لینک‌های دیگر",
  findUs: "نشانی",
  backToTop: "بازگشت به بالا",
  contact: "تماس",
  staticNoTracking: "سایت ایستا، بدون ردیابی.",
  imageUnavailable: "تصویر در دسترس نیست",
  contactDetails: {
    email: "ایمیل",
    address: "نشانی",
    hours: "ساعت پاسخگویی",
    phone: "تلفن",
  },
  form: {
    name: "نام",
    email: "ایمیل",
    arrival: "تاریخ ورود",
    departure: "تاریخ خروج",
    guests: "مهمان‌ها",
    projectType: "نوع پروژه",
    message: "پیام",
    messagePlaceholder: "چند خط دربارهٔ سفر، تاریخ‌ها یا پروژه بنویسید.",
    submitHint: "بدون حساب کاربری، بدون پرداخت، بدون ذخیرهٔ داده.",
    successFallback: "این فرم نمایشی است و اطلاعاتی ارسال نمی‌شود.",
    guestOptions: [
      { value: "1", label: "یک مهمان" },
      { value: "2", label: "دو مهمان" },
      { value: "3", label: "سه مهمان" },
      { value: "4", label: "چهار مهمان" },
    ],
    projectTypeFallback: "عمومی",
  },
  gallery: {
    open: "باز کردن عکس:",
    viewer: "نمایشگر عکس",
    close: "بستن نمایشگر عکس",
    previous: "عکس قبلی",
    next: "عکس بعدی",
  },
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
  elsewhere: "Elsewhere",
  findUs: "Find us",
  backToTop: "Back to top",
  contact: "Contact",
  staticNoTracking: "Static site, no tracking.",
  imageUnavailable: "Image unavailable",
  contactDetails: {
    email: "Email",
    address: "Where to find us",
    hours: "When we answer",
    phone: "Telephone",
  },
  form: {
    name: "Name",
    email: "Email",
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    projectType: "Project type",
    message: "Message",
    messagePlaceholder: "A few lines about the trip, the dates, or the project.",
    submitHint: "No account, no payment, no data stored.",
    successFallback: "This demo form does not send data.",
    guestOptions: [
      { value: "1", label: "One guest" },
      { value: "2", label: "Two guests" },
      { value: "3", label: "Three guests" },
      { value: "4", label: "Four guests" },
    ],
    projectTypeFallback: "General",
  },
  gallery: {
    open: "Open photograph:",
    viewer: "Photograph viewer",
    close: "Close photograph viewer",
    previous: "Previous photograph",
    next: "Next photograph",
  },
  notFound: {
    eyebrow: "Page not found",
    title: "Lost at sea.",
    body: "The address may have changed, or the page was never here. The house is still where you left it.",
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
    ogLocale: locale.replace("-", "_"),
    ...localeFormatters(locale),
  };
}
