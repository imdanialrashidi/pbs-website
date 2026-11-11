import vazirmatnArabicLatin from "../assets/fonts/vazirmatn-arabic-latin.woff2?url";
import interLatin from "../assets/fonts/inter-latin.woff2?url";
import type { FontFaceKey } from "../config/types";

interface FontFace {
  family: string;
  stack: string;
  /** File URL processed by Vite, including the deployment base. */
  src: string;
  style: "normal" | "italic";
  weight: string;
}

/**
 * Only the two faces the PBS pages use. Keeping this map small means the
 * build emits two WOFF2 files, not a font library.
 */
export const fontFaces: Record<FontFaceKey, FontFace> = {
  vazirmatn: {
    family: "Vazirmatn",
    stack: '"Vazirmatn", "Segoe UI", Tahoma, "Noto Sans Arabic", sans-serif',
    src: vazirmatnArabicLatin,
    style: "normal",
    weight: "100 900",
  },
  inter: {
    family: "Inter",
    stack: '"Inter", "Segoe UI", system-ui, sans-serif',
    src: interLatin,
    style: "normal",
    weight: "100 900",
  },
};
