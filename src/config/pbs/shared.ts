import type { LocaleLink, Theme } from "../types";
import { resolveContactChannels } from "../../lib/contact";
import { pagePaths } from "../../lib/routes";
import { pbsContactIdentifiers } from "./contact";

/** Resolved once; both locale configs receive the same safe links. */
export const pbsContactLinks = resolveContactChannels(pbsContactIdentifiers);

/**
 * The light-only PBS palette, shape and rhythm shared by both locales.
 *
 * `action` is the navy used for primary actions and interactive text.
 * `accent` is cyan and is only ever a small structural mark, never body text
 * on white. The deep tokens belong to the closing contact/footer statement.
 */
export const pbsThemeBase: Omit<Theme, "fonts"> = {
  colors: {
    canvas: "#FFFFFF",
    surface: "#FFFFFF",
    tint: "#F4F7FB",
    ink: "#111827",
    muted: "#526176",
    line: "#E7ECF3",
    action: "#062B73",
    actionInk: "#FFFFFF",
    actionHover: "#041633",
    accent: "#33D6E8",
    accentInk: "#062B73",
    deep: "#062B73",
    deepSurface: "#0B1730",
    deepInk: "#FFFFFF",
    deepMuted: "#D7E5F4",
    footerBg: "#041633",
    footerInk: "#EAF3FF",
    focus: "#062B73",
  },
  shape: {
    media: "0.875rem",
    button: "0.625rem",
  },
  layout: {
    contentWidth: "75rem",
    gutter: "clamp(1.05rem, 4vw, 2.5rem)",
    sectionSpace: "clamp(3.5rem, 7vw, 6.5rem)",
  },
};

const localeRoutes = {
  fa: { key: "fa", locale: "fa-IR", label: "فارسی", shortLabel: "FA" },
  en: { key: "en", locale: "en", label: "English", shortLabel: "EN" },
} as const;

/**
 * The two published locales and which one is current. `x-default` always
 * points at Persian, the reference locale. Paths come from the route table so
 * a page never invents a second URL scheme.
 */
export function localeLinks(current: keyof typeof localeRoutes): LocaleLink[] {
  return (Object.entries(localeRoutes) as Array<
    [keyof typeof localeRoutes, (typeof localeRoutes)[keyof typeof localeRoutes]]
  >).map(([key, route]) => ({
    ...route,
    path: pagePaths.home[key],
    current: key === current,
    xDefault: key === "fa",
  }));
}
