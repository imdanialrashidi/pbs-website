import fs from "node:fs";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * Deployment is configured in one place: here.
 *
 * 1. SITE_URL / BASE_PATH environment variables win.
 * 2. A public/CNAME file implies a custom domain at the site root.
 * 3. GitHub Actions values are derived from the repository automatically.
 * 4. Local development falls back to the root path on localhost.
 */
function readCustomDomain() {
  for (const file of ["public/CNAME", "CNAME"]) {
    if (fs.existsSync(file)) {
      return fs.readFileSync(file, "utf8").trim();
    }
  }
  return "";
}

function normaliseBase(value) {
  if (!value || value === "/") return "/";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

const customDomain = readCustomDomain();
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const isUserSite = repository.endsWith(".github.io");

const site =
  process.env.SITE_URL ||
  (customDomain ? `https://${customDomain}` : "") ||
  (owner ? `https://${owner}.github.io` : "http://localhost:4321");

const base = normaliseBase(
  process.env.BASE_PATH ??
    (customDomain || !repository || isUserSite ? "/" : repository),
);

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "ignore",
  compressHTML: true,
  image: {
    // Layouts are owned by the Media component, not injected by Astro.
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.CLIENT": JSON.stringify(process.env.CLIENT || "naranj-house"),
    },
  },
});
