/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Client config slug, injected at build time by astro.config.mjs. */
  readonly CLIENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
