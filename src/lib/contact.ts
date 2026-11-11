import type { ContactChannelId, ContactLinkValue } from "../config/types";
import type { PbsContactIdentifiers } from "../config/pbs/contact";

/**
 * Turns the editable contact identifiers into safe public links.
 *
 * A channel without a valid identifier returns no `href`; the component then
 * renders a disabled/coming-soon state instead of a dead or invented link.
 */

export type ContactLink = ContactLinkValue;

const EMPTY: ContactLink = { external: false };

function whatsappLink(raw: string): ContactLink {
  const digits = raw.trim().replace(/[\s()-]/g, "").replace(/^\+/, "");
  if (!/^\d{8,15}$/.test(digits)) return EMPTY;
  return {
    href: `https://wa.me/${digits}`,
    external: true,
    display: `+${digits}`,
  };
}

function phoneLink(raw: string): ContactLink {
  const value = raw.trim();
  if (!/^\+?[\d\s()-]{7,20}$/.test(value)) return EMPTY;
  const digits = value.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return EMPTY;
  return {
    href: `tel:${value.replace(/[^\d+]/g, "")}`,
    external: false,
    display: value,
  };
}

function profileLink(raw: string): ContactLink {
  const value = raw.trim();
  if (!value) return EMPTY;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return EMPTY;
    const path = url.pathname.replace(/\/+$/, "");
    if (!path) return EMPTY;
    const host = url.hostname.replace(/^www\./, "");
    return {
      href: url.href,
      external: true,
      display: `${host}${path}`,
    };
  } catch {
    return EMPTY;
  }
}

export function resolveContactChannel(
  id: ContactChannelId,
  raw: string,
): ContactLink {
  switch (id) {
    case "whatsapp":
      return whatsappLink(raw);
    case "phone":
      return phoneLink(raw);
    case "telegram":
    case "bale":
      return profileLink(raw);
  }
}

export function resolveContactChannels(
  identifiers: PbsContactIdentifiers,
): Record<ContactChannelId, ContactLink> {
  return {
    whatsapp: resolveContactChannel("whatsapp", identifiers.whatsapp),
    bale: resolveContactChannel("bale", identifiers.bale),
    telegram: resolveContactChannel("telegram", identifiers.telegram),
    phone: resolveContactChannel("phone", identifiers.phone),
  };
}
