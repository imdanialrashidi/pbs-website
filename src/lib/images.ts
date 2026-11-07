import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Image presentation.
 *
 * A caller names what an image is for and gets the responsive policy with it:
 * widths, sizes, ratio, quality, priority and format live here, not at the call
 * site. The same module derives the full-size URL the lightbox swaps in and the
 * social card the layout shares.
 */

export type FigureRole = "hero" | "banner" | "scene" | "figure" | "thumb";

export interface FigurePreset {
  ratio: string;
  sizes: string;
  widths: number[];
  quality: number;
  priority: boolean;
}

const presets = {
  hero: {
    ratio: "4 / 5",
    sizes: "(min-width: 900px) 41vw, 100vw",
    widths: [480, 720, 960, 1280, 1600],
    quality: 84,
    priority: true,
  },
  banner: {
    ratio: "16 / 9",
    sizes: "100vw",
    widths: [640, 960, 1280, 1600, 2000],
    quality: 84,
    priority: true,
  },
  scene: {
    ratio: "16 / 9",
    sizes: "100vw",
    widths: [480, 720, 960, 1440, 1920],
    quality: 80,
    priority: false,
  },
  figure: {
    ratio: "4 / 3",
    sizes: "(min-width: 900px) 50vw, 100vw",
    widths: [480, 640, 960, 1280, 1600],
    quality: 82,
    priority: false,
  },
  thumb: {
    ratio: "4 / 3",
    sizes: "(min-width: 1120px) 31vw, (min-width: 560px) 47vw, 100vw",
    widths: [360, 540, 720, 1080],
    quality: 80,
    priority: false,
  },
} satisfies Record<FigureRole, FigurePreset>;

export function figurePreset(role: FigureRole): FigurePreset {
  return presets[role];
}

/** The largest image worth serving to the lightbox. */
export async function fullSize(image: ImageMetadata): Promise<string> {
  const rendered = await getImage({
    src: image,
    width: Math.min(1800, image.width),
    format: "webp",
    quality: 82,
  });
  return rendered.src;
}

/** The 1200 × 630 card social tags point at. */
export async function socialCard(image: ImageMetadata): Promise<string> {
  const rendered = await getImage({
    src: image,
    width: 1200,
    height: 630,
    fit: "cover",
    format: "jpg",
    quality: 82,
  });
  return rendered.src;
}
