/**
 * PBS public contact identifiers: the single editable source.
 *
 * Leave a value empty until PBS has supplied and verified it. The contact
 * section then renders an honest, non-clickable "details coming soon" state
 * instead of a guessed handle, placeholder number or dead link.
 *
 * - `whatsapp`: international number in digits only, including country code.
 *   Example: "989121234567" (no plus, spaces or dashes).
 * - `phone`: the number as it should be read on the page, with or without a
 *   leading plus. Example: "+98 21 1234 5678".
 * - `telegram`: the full verified public profile URL, including `https://`.
 *   Example: "https://t.me/example".
 * - `bale`: the full verified public profile URL, including `https://`.
 *   PBS must supply the exact URL; the site does not guess Bale URL shapes.
 *
 * These are the only identifiers the public site reads. Do not add a second
 * copy in a component or locale content file.
 */
export interface PbsContactIdentifiers {
  whatsapp: string;
  bale: string;
  telegram: string;
  phone: string;
}

export const pbsContactIdentifiers = {
  whatsapp: "",
  bale: "",
  telegram: "",
  phone: "",
} as const satisfies PbsContactIdentifiers;
