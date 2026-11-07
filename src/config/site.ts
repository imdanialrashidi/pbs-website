import type { SiteConfig } from "./types";
import { atelierSora } from "./clients/atelier-sora";
import { casaMarea } from "./clients/casa-marea";
import { naranjHouse } from "./clients/naranj-house";

/**
 * The active demo is selected at build time:
 *
 *   npm run dev                         # Persian, RTL default
 *   CLIENT=casa-marea npm run dev       # English, LTR
 *   CLIENT=atelier-sora npm run dev
 *   npm run build:alt
 *
 * Add a config under clients/, register it here, and it is available
 * through the CLIENT switch. Shared components never import a client.
 */
const clients = {
  "naranj-house": naranjHouse,
  "casa-marea": casaMarea,
  "atelier-sora": atelierSora,
} satisfies Record<string, SiteConfig>;

const requested = import.meta.env.CLIENT || "naranj-house";

if (!(requested in clients)) {
  throw new Error(
    `Unknown CLIENT "${requested}". Available clients: ${Object.keys(clients).join(", ")}.`,
  );
}

export const site = clients[requested as keyof typeof clients];
export { clients };
