/**
 * Locale-aware formatting, shared by the server and the browser.
 *
 * The same index digits are needed in server-rendered menus and in any future
 * client interaction, so the rule lives in one shared module.
 */

export interface LocaleFormatters {
  /** Number formatting in the page locale; Persian gets Persian digits. */
  number(value: number, options?: Intl.NumberFormatOptions): string;
  /** A zero-padded menu or list index. */
  index(value: number): string;
  /** A copyright year in the locale's calendar. */
  year(date?: Date): string;
}

const indexFormatters = new Map<string, Intl.NumberFormat>();
const yearFormatters = new Map<string, Intl.DateTimeFormat>();

function indexFormatter(locale: string): Intl.NumberFormat {
  let formatter = indexFormatters.get(locale);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, { minimumIntegerDigits: 2, useGrouping: false });
    indexFormatters.set(locale, formatter);
  }
  return formatter;
}

function yearFormatter(locale: string): Intl.DateTimeFormat {
  let formatter = yearFormatters.get(locale);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, { year: "numeric" });
    yearFormatters.set(locale, formatter);
  }
  return formatter;
}

export function localeFormatters(locale: string): LocaleFormatters {
  return {
    number: (value, options) => new Intl.NumberFormat(locale, options).format(value),
    index: (value) => indexFormatter(locale).format(value),
    year: (date = new Date()) => yearFormatter(locale).format(date),
  };
}
