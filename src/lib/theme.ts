import type { FontFaceKey, Theme } from "../config/types";
import { fontFaces } from "./fonts";

/**
 * The theme module: one config block in, everything the layout needs out.
 *
 * Custom-property names are derived from the token names, so adding a colour is
 * a config change and nothing else. The face set is computed once and serves
 * both the `@font-face` rules and the preload list. This site has one light
 * theme; `color-scheme` is declared here so OS dark preference cannot switch it.
 */

export interface ThemeOutput {
  /** `@font-face` rules and the theme's custom properties. */
  css: string;
  /** Font files the page should preload, in face order. */
  preloads: string[];
}

/** `accentInk` → `accent-ink`, `footerBg` → `footer-bg`. */
function kebabCase(name: string): string {
  return name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function fontRule(face: (typeof fontFaces)[FontFaceKey]): string {
  return `@font-face{font-family:"${face.family}";src:url("${face.src}") format("woff2");font-style:${face.style};font-weight:${face.weight};font-display:swap}`;
}

export function themeFor(theme: Theme): ThemeOutput {
  const faces = [
    ...new Set<FontFaceKey>([
      theme.fonts.display,
      theme.fonts.body,
      theme.fonts.emphasis,
    ]),
  ].map((key) => fontFaces[key]);

  const display = fontFaces[theme.fonts.display];
  const body = fontFaces[theme.fonts.body];
  const emphasis = fontFaces[theme.fonts.emphasis];

  const colors = Object.entries(theme.colors).map(
    ([name, value]) => `  --c-${kebabCase(name)}:${value};`,
  );

  const css = `${faces.map(fontRule).join("\n")}
:root{
  color-scheme:only light;
${colors.join("\n")}
  --type-display:${display.stack};
  --type-body:${body.stack};
  --type-emphasis:${emphasis.stack};
  --emphasis-style:${emphasis.style === "italic" ? "italic" : "normal"};
  --emphasis-weight:${emphasis.style === "italic" ? "inherit" : "600"};
  --shape-media:${theme.shape.media};
  --shape-button:${theme.shape.button};
  --content-width:${theme.layout.contentWidth};
  --gutter:${theme.layout.gutter};
  --section-space:${theme.layout.sectionSpace};
}`;

  return { css, preloads: faces.map((face) => face.src) };
}
