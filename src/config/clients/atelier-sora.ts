import type { SiteConfig } from "../types";
import bedroom from "../../assets/images/bedroom.jpg";
import cafe from "../../assets/images/cafe.jpg";
import dining from "../../assets/images/dining.jpg";
import house from "../../assets/images/house.jpg";
import living from "../../assets/images/living.jpg";
import terrace from "../../assets/images/terrace.jpg";

/**
 * English example 2: a fictional interior architecture practice.
 * It demonstrates a different section mix, font pairing, theme, hero,
 * and form variant without duplicating any shared component.
 */
export const atelierSora = {
  brand: {
    name: "Atelier Sora",
    mark: "frame",
    descriptor: "Interior architecture & objects",
    location: "Lisbon, Portugal",
  },
  meta: {
    title: "Atelier Sora — interior architecture in Lisbon",
    description:
      "A fictional Lisbon interior architecture practice designing considered homes, hospitality spaces, and objects.",
    locale: "en",
    direction: "ltr",
    keywords: ["interior architecture", "Lisbon", "interior design", "hospitality design"],
  },
  demo: {
    enabled: true,
    note: "Atelier Sora is a fictional practice. Projects, people, and fees are examples for this template.",
  },
  theme: {
    mode: "dark",
    colors: {
      canvas: "#0d1712",
      surface: "#14221b",
      ink: "#f2eee2",
      muted: "#aeb8ae",
      accent: "#e5b78d",
      accentInk: "#182018",
      line: "#2c3b32",
      tint: "#192a21",
      onImage: "#f7f2e6",
      footerBg: "#14221b",
      footerInk: "#f2eee2",
    },
    fonts: {
      display: "bricolage",
      body: "manrope",
      emphasis: "bricolage",
    },
    shape: {
      media: "0rem",
      button: "0rem",
      heroArch: false,
    },
    layout: {
      contentWidth: "82rem",
      gutter: "clamp(1.25rem, 4vw, 2.75rem)",
      sectionSpace: "clamp(4.5rem, 9vw, 8rem)",
    },
  },
  navigation: [
    { label: "Studio", section: "story" },
    { label: "Services", section: "services" },
    { label: "Approach", section: "features" },
    { label: "Work", section: "gallery" },
  ],
  headerAction: {
    label: "Start a project",
    href: "#contact",
    variant: "outline",
  },
  hero: {
    variant: "immersive",
    eyebrow: "Lisbon · Interior architecture",
    headline: {
      lead: "Rooms with a ",
      accent: "point of view.",
    },
    intro:
      "We design interiors that feel inevitable: considered, lived-in, and made to last longer than a trend.",
    image: {
      src: house,
      alt: "A modern timber house set behind a large eucalyptus tree.",
      position: "50% 55%",
    },
    actions: [
      { label: "Start a project", href: "#contact", variant: "accent" },
      { label: "See the work", href: "#gallery", variant: "outline" },
    ],
    facts: [
      { label: "Practice", value: "Lisbon, since 2016" },
      { label: "Scope", value: "Homes, hospitality, objects" },
      { label: "Availability", value: "2027" },
    ],
  },
  statement: {
    eyebrow: "Our point of view",
    quote:
      "A room should not announce itself. It should make the people in it look better.",
    attribution: "Sora — founding note",
  },
  story: {
    eyebrow: "The studio",
    headline: {
      lead: "Considered spaces, ",
      accent: "made slowly.",
    },
    paragraphs: [
      "Atelier Sora is a small studio for interior architecture and objects. We work on homes, small hotels, and the kind of cafés people stay in longer than they planned.",
      "Our approach is quiet but not anonymous. We begin with the light, the way a room is used, and the things already there. Then we draw until the plan feels obvious.",
    ],
    image: {
      src: living,
      alt: "A warm living room with a linen sofa, timber floors, and framed work on the wall.",
      caption: "Casa do Rio, living room.",
      position: "50% 50%",
    },
    facts: [
      { label: "Practice", value: "Lisbon, since 2016" },
      { label: "Scope", value: "Homes, hospitality, objects" },
      { label: "Process", value: "Six to nine months" },
      { label: "Collaboration", value: "Architects welcome" },
    ],
    signature: "The Sora team",
    signatureNote: "Interior architecture, drawn by hand and detailed on site.",
    action: { label: "How we work", href: "#features", variant: "quiet" },
  },
  services: {
    eyebrow: "What we do",
    headline: {
      lead: "From the first sketch ",
      accent: "to the last socket.",
    },
    intro:
      "A full interior practice, or the exact part you need. We work best when we can see a project through.",
    items: [
      {
        icon: "compass",
        title: "Interior architecture",
        description:
          "Spatial planning, joinery, lighting, and the thousand decisions between a drawing and a room.",
        meta: "Homes · Hospitality",
      },
      {
        icon: "leaf",
        title: "Furniture & objects",
        description:
          "Pieces drawn for one room and made with Portuguese workshops. Nothing off the shelf unless it earns its place.",
        meta: "Custom · Small batch",
      },
      {
        icon: "sun",
        title: "Styling & art direction",
        description:
          "The last ten percent: art, textiles, books, and the objects that make a room feel lived in.",
        meta: "Sourcing · Installation",
      },
      {
        icon: "users",
        title: "Collaboration",
        description:
          "We work alongside architects and builders, or lead the interior from first sketch to handover.",
        meta: "Full scope · Partial",
      },
    ],
    note: "Selected projects in Lisbon, Comporta, and Porto. Enquiries for 2027 are open.",
  },
  features: {
    eyebrow: "Approach",
    headline: {
      lead: "Three rooms of ",
      accent: "the same conversation.",
    },
    intro:
      "No moodboards for their own sake. We move between listening, drawing, and making until the answer is obvious.",
    items: [
      {
        title: "Listen",
        description:
          "We start with how you actually live: where the light lands, what you keep, what you're ready to leave behind.",
        meta: "Brief",
      },
      {
        title: "Draw",
        description:
          "Plans, joinery details, material samples. We test ideas at full scale where it matters.",
        meta: "Design",
      },
      {
        title: "Make",
        description:
          "We stay close through site works, sourcing, and installation. The details are the design.",
        meta: "Delivery",
      },
    ],
  },
  gallery: {
    eyebrow: "Selected work",
    headline: {
      lead: "Spaces with ",
      accent: "a little air in them.",
    },
    intro:
      "A few recent rooms and houses. Client names and projects are illustrative demo content.",
    items: [
      {
        image: house,
        alt: "A modern timber house with large windows, set behind a mature tree.",
        caption: "Casa do Rio · Comporta",
      },
      {
        image: dining,
        alt: "A dark dining room with a long timber table and an open kitchen beyond.",
        caption: "Casa do Rio · dining room",
      },
      {
        image: bedroom,
        alt: "A calm bedroom with linen bedding, a woven pendant, and plants.",
        caption: "Hotel Aurora · room 04",
      },
      {
        image: cafe,
        alt: "A café interior with timber tables, shelving, and warm pendant lighting.",
        caption: "Café Central · Lisbon",
      },
      {
        image: terrace,
        alt: "A terrace restaurant looking out over water at golden hour.",
        caption: "Hotel Aurora · terrace",
      },
    ],
  },
  pricing: {
    eyebrow: "Engagements",
    headline: {
      lead: "How we ",
      accent: "work together.",
    },
    intro:
      "Each project begins with a conversation and a clear scope. Fees below are indicative demo content.",
    plans: [
      {
        name: "Room study",
        description: "One room, three directions, and a plan you can build from.",
        price: "from €4,500",
        unit: "per room",
        meta: ["6–8 weeks", "3 directions", "Drawings & sourcing"],
        action: { label: "Discuss a room", href: "#contact", variant: "quiet" },
      },
      {
        name: "Full home",
        description: "Interior architecture from first sketch through installation.",
        price: "from €18,000",
        unit: "per project",
        badge: "Most complete",
        meta: ["6–9 months", "Full documentation", "Site oversight"],
        action: { label: "Discuss a home", href: "#contact", variant: "quiet" },
      },
      {
        name: "Hospitality",
        description: "Hotels, cafés, and spaces that have to work as hard as they look.",
        price: "On request",
        unit: "per project",
        meta: ["Concept", "FF&E", "Opening support"],
        action: { label: "Discuss a space", href: "#contact", variant: "quiet" },
      },
    ],
    note: "Every scope is priced after a first call. We take on a small number of projects each year.",
    action: { label: "Start a conversation", href: "#contact", variant: "outline" },
  },
  testimonials: {
    eyebrow: "Client notes",
    headline: {
      lead: "The quiet ",
      accent: "kind of happy.",
    },
    note: "Client notes are illustrative demo content, not real reviews.",
    items: [
      {
        quote:
          "They didn't impose a look. They watched how we used the house and gave us something better than we could describe.",
        name: "Marta & João",
        detail: "Private house · Comporta",
      },
      {
        quote:
          "The details are the thing: the handle you reach for, the light at breakfast, the place to put a glass down.",
        name: "Hotel Aurora",
        detail: "Hospitality · Lisbon",
      },
      {
        quote: "Our café finally feels like the place we imagined. People stay longer.",
        name: "Café Central",
        detail: "Hospitality · Lisbon",
      },
    ],
  },
  faq: {
    eyebrow: "Good to know",
    headline: {
      lead: "Before ",
      accent: "we begin.",
    },
    items: [
      {
        question: "How does a project start?",
        answer:
          "With a short call and a look at the space. If it feels like a fit, we send a scope and fee proposal within a week.",
      },
      {
        question: "Do you work outside Lisbon?",
        answer:
          "Yes, across Portugal and occasionally further afield. Travel is included in the project fee after the first visit.",
      },
      {
        question: "Can you work with our architect?",
        answer:
          "Often. We can join an existing team or lead the interiors independently. Clear roles at the start make the process easier.",
      },
      {
        question: "Do you supply furniture?",
        answer:
          "We design custom pieces with local makers and source vintage where it fits. Procurement and installation can be part of the scope.",
      },
    ],
  },
  contact: {
    eyebrow: "New projects",
    headline: {
      lead: "Tell us about ",
      accent: "the space.",
    },
    intro:
      "A few lines about the project, the place, and the timing is enough to start. We reply to every enquiry.",
    details: {
      email: "studio@ateliersora.example",
      address: "Lisbon, Portugal",
      hours: "Studio hours, Monday—Friday, 09:00—18:00 WEST",
    },
    form: {
      kind: "inquiry",
      title: "Project enquiry",
      note: "This is a demo form. Nothing is sent or stored.",
      submitLabel: "Send enquiry",
      success:
        "This is a demo, so your enquiry has not been sent. In a real build, it would land in the studio's inbox.",
      projectTypes: ["Home", "Hospitality", "Furniture", "Collaboration"],
    },
  },
  footer: {
    tagline: "Interior architecture and objects, made slowly in Lisbon. A fictional practice built with the Client Demo Factory.",
    photoCredit: {
      label: "Photography",
      href: "https://unsplash.com/license",
    },
  },
  sections: [
    "hero",
    "statement",
    "story",
    "services",
    "features",
    "gallery",
    "pricing",
    "testimonials",
    "faq",
    "contact",
  ],
} satisfies SiteConfig;
