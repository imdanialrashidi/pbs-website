import bricolageLatin from "../assets/fonts/bricolage-grotesque-latin.woff2?url";
import frauncesLatin from "../assets/fonts/fraunces-latin.woff2?url";
import frauncesItalicLatin from "../assets/fonts/fraunces-italic-latin.woff2?url";
import manropeLatin from "../assets/fonts/manrope-latin.woff2?url";
import estedadArabicLatin from "../assets/fonts/estedad-arabic-latin.woff2?url";
import type { FontFaceKey } from "../config/types";

interface FontFace {
  family: string;
  stack: string;
  /** File URL processed by Vite, including the deployment base. */
  src: string;
  style: "normal" | "italic";
  weight: string;
}

export const fontFaces: Record<FontFaceKey, FontFace> = {
  fraunces: {
    family: "Fraunces",
    stack: '"Fraunces", "Iowan Old Style", "Palatino Linotype", Georgia, serif',
    src: frauncesLatin,
    style: "normal",
    weight: "100 900",
  },
  frauncesItalic: {
    family: "Fraunces",
    stack: '"Fraunces", "Iowan Old Style", "Palatino Linotype", Georgia, serif',
    src: frauncesItalicLatin,
    style: "italic",
    weight: "100 900",
  },
  manrope: {
    family: "Manrope",
    stack: '"Manrope", "Avenir Next", "Segoe UI", system-ui, sans-serif',
    src: manropeLatin,
    style: "normal",
    weight: "200 800",
  },
  bricolage: {
    family: "Bricolage Grotesque",
    stack: '"Bricolage Grotesque", "Arial Narrow", "Helvetica Neue", Arial, sans-serif',
    src: bricolageLatin,
    style: "normal",
    weight: "200 800",
  },
  estedad: {
    family: "Estedad",
    stack: '"Estedad", "Segoe UI", Tahoma, "Noto Sans Arabic", sans-serif',
    src: estedadArabicLatin,
    style: "normal",
    weight: "100 900",
  },
};
