import type { SiteConfig } from "../types";
import bedroom from "../../assets/images/bedroom.jpg";
import cafe from "../../assets/images/cafe.jpg";
import coast from "../../assets/images/coast.jpg";
import cooking from "../../assets/images/cooking.jpg";
import cove from "../../assets/images/cove.jpg";
import dining from "../../assets/images/dining.jpg";
import house from "../../assets/images/house.jpg";
import living from "../../assets/images/living.jpg";
import terrace from "../../assets/images/terrace.jpg";

/**
 * English example 1: a fictional small guesthouse on the Alentejo coast.
 * Kept as the reference LTR client after the Persian default was added.
 * All business details, rates, and guest notes are demo content.
 */
export const casaMarea = {
  brand: {
    name: "Casa Marea",
    mark: "tide",
    descriptor: "A guesthouse by the Atlantic",
    location: "Comporta, Portugal",
  },
  meta: {
    title: "Casa Marea — a guesthouse by the Atlantic",
    description:
      "Six quiet rooms, a long table, and the Atlantic at the end of the path. A fictional coastal guesthouse in Comporta, Portugal.",
    locale: "en",
    direction: "ltr",
    keywords: ["guesthouse", "Comporta", "Portugal", "coastal stay", "boutique hotel"],
  },
  demo: {
    enabled: true,
    note: "Casa Marea is a fictional business. Names, rates, and guest notes are examples for this template.",
  },
  theme: {
    mode: "light",
    colors: {
      canvas: "#f2ebdf",
      surface: "#f8f2e8",
      ink: "#20221b",
      muted: "#636255",
      accent: "#a74527",
      accentInk: "#fff8ee",
      line: "#d8ccba",
      tint: "#e8ddcb",
      onImage: "#fbf6eb",
      footerBg: "#20221b",
      footerInk: "#f2ebdf",
    },
    fonts: {
      display: "fraunces",
      body: "manrope",
      emphasis: "frauncesItalic",
    },
    shape: {
      media: "0.125rem",
      button: "999px",
      heroArch: true,
    },
    layout: {
      contentWidth: "78rem",
      gutter: "clamp(1.25rem, 4vw, 2.75rem)",
      sectionSpace: "clamp(5rem, 10vw, 8.5rem)",
    },
  },
  navigation: [
    { label: "The house", section: "story" },
    { label: "At the house", section: "services" },
    { label: "The coast", section: "features" },
    { label: "Gallery", section: "gallery" },
    { label: "Rooms", section: "pricing" },
  ],
  headerAction: {
    label: "Check dates",
    href: "#contact",
    variant: "solid",
  },
  hero: {
    variant: "split",
    eyebrow: "Comporta, Portugal · Six rooms",
    headline: {
      lead: "A house for ",
      accent: "slow mornings",
      tail: " by the sea.",
    },
    intro:
      "Six rooms, a long table, and the Atlantic at the end of the path. Come for the quiet; stay for the light.",
    image: {
      src: coast,
      alt: "The Atlantic at sunset, seen from the beach below Casa Marea.",
      caption: "The beach path, just before eight.",
      position: "50% 55%",
    },
    actions: [
      { label: "Check availability", href: "#contact", variant: "accent" },
      { label: "Inside the house", href: "#story", variant: "outline" },
    ],
    facts: [
      { label: "Rooms", value: "Six" },
      { label: "To the sea", value: "4 min walk" },
      { label: "Season", value: "Apr—Oct" },
    ],
  },
  statement: {
    eyebrow: "A note from the house",
    quote:
      "We kept the house simple: stone floors, linen, good coffee, and the sound of the surf. Everything else can wait.",
    attribution: "Inês & Tomás, hosts",
    image: {
      src: terrace,
      alt: "The terrace at golden hour, with tables set for dinner above the water.",
      caption: "The terrace, before dinner.",
      position: "50% 50%",
    },
  },
  story: {
    eyebrow: "The house",
    headline: {
      lead: "A quiet house, ",
      accent: "built around",
      tail: " the light.",
    },
    paragraphs: [
      "Casa Marea began as a family house among the pines, a few steps from the dunes. We kept its bones — stone floors, deep windows, a fig tree that refuses to move — and made the rest simpler.",
      "There are six rooms, a living room with a record player, and a long table where breakfast turns into a second coffee. No lobby, no television, no schedule. Just enough room to hear yourself think.",
    ],
    image: {
      src: house,
      alt: "Casa Marea's timber-and-glass house among pine trees.",
      caption: "The house, from the garden.",
      position: "50% 55%",
    },
    facts: [
      { label: "Rooms", value: "Six, each with a private bathroom" },
      { label: "Breakfast", value: "Included, served until 11" },
      { label: "The beach", value: "Four minutes on foot" },
      { label: "Children", value: "Welcome in the Garden rooms" },
    ],
    signature: "Inês & Tomás",
    signatureNote: "Your hosts, and the ones who make breakfast.",
    action: { label: "What's included", href: "#services", variant: "quiet" },
  },
  services: {
    eyebrow: "At the house",
    headline: {
      lead: "Small comforts, ",
      accent: "deliberately few.",
    },
    intro:
      "We aren't a hotel with a menu of extras. These are the things we do well, every day.",
    items: [
      {
        icon: "coffee",
        title: "Breakfast at the long table",
        description:
          "Bread from the village, eggs from a neighbour's hens, fruit from the garden. Coffee as long as you like.",
        meta: "Daily · 08:00—11:00",
      },
      {
        icon: "wine",
        title: "The honesty bar",
        description:
          "A short list of Portuguese wine, cold beer, and a decent gin. Write it down; we'll settle up at the end.",
        meta: "Portuguese wine · local beer",
      },
      {
        icon: "bike",
        title: "Bikes by the gate",
        description:
          "Five bicycles, two of them with baskets. The beach path is flat, and the rice fields are even flatter.",
        meta: "Five bikes · first come",
      },
      {
        icon: "leaf",
        title: "A house that rests",
        description:
          "No televisions, no lobby music, no turn-down service. Morning coffee is the only appointment.",
        meta: "No TVs · no lobby music",
      },
    ],
    note: "Open April through October. For the rest of the year, the house is ours.",
  },
  features: {
    eyebrow: "Out there",
    headline: {
      lead: "The coast, the rice fields, ",
      accent: "and nowhere in particular.",
    },
    intro:
      "Comporta is best explored without an itinerary. These are the places we keep going back to.",
    items: [
      {
        icon: "waves",
        title: "The beach path",
        description:
          "Follow the boardwalk through the dunes. At the end: a long stretch of sand, a few fishermen, and nothing else.",
        meta: "4 minutes on foot",
      },
      {
        icon: "sun",
        title: "The rice fields",
        description:
          "Old salt flats and rice paddies turn gold in late summer. Go at sunset, when the light does the work.",
        meta: "10 minutes by bike",
      },
      {
        icon: "compass",
        title: "Cais da Carrasqueira",
        description:
          "A stilted fishing pier over the mudflats. Arrive early for coffee at the end of the road and the first light on the water.",
        meta: "25 minutes by car",
      },
    ],
  },
  gallery: {
    eyebrow: "The house, in pictures",
    headline: {
      lead: "Light, linen, ",
      accent: "and a little salt.",
    },
    intro: "A few corners of the house and the coast around it. Tap any photograph to look closer.",
    items: [
      {
        image: cove,
        alt: "Turquoise water in a small cove framed by pine-covered cliffs.",
        caption: "The cove, fifteen minutes north.",
      },
      {
        image: living,
        alt: "A bright living room with linen sofas, timber floors, and tall windows.",
        caption: "The long room, mid-morning.",
        position: "50% 55%",
      },
      {
        image: bedroom,
        alt: "A calm bedroom with linen bedding, a woven pendant light, and plants.",
        caption: "Garden room, before breakfast.",
      },
      {
        image: dining,
        alt: "A dark timber dining room with candlelight and an open kitchen beyond.",
        caption: "Dinner, when the light goes.",
      },
      {
        image: cooking,
        alt: "Hands slicing herbs and mushrooms on a wooden board.",
        caption: "Something from the garden.",
      },
      {
        image: cafe,
        alt: "A quiet cafe with timber tables, shelves, and pendant lights.",
        caption: "The bar, after the beach.",
      },
    ],
  },
  pricing: {
    eyebrow: "Stay",
    headline: {
      lead: "Six rooms. ",
      accent: "No two the same.",
    },
    intro:
      "Rates include breakfast, the bikes, and a very slow start. Two-night minimum from June to September.",
    plans: [
      {
        name: "Dune",
        description: "Garden-facing, queen bed, walk-in shower.",
        price: "€185",
        unit: "per night",
        meta: ["24 m²", "Sleeps 2", "Garden view"],
        action: { label: "Ask about Dune", href: "#contact", variant: "quiet" },
      },
      {
        name: "Garden",
        description: "A private terrace, king bed, and an outdoor shower.",
        price: "€245",
        unit: "per night",
        badge: "Best for longer stays",
        meta: ["31 m²", "Sleeps 2", "Private terrace"],
        action: { label: "Ask about Garden", href: "#contact", variant: "quiet" },
      },
      {
        name: "The Loft",
        description: "The top floor, an ocean view, and a tub by the window.",
        price: "€310",
        unit: "per night",
        meta: ["38 m²", "Sleeps 2", "Ocean view"],
        action: { label: "Ask about the Loft", href: "#contact", variant: "quiet" },
      },
    ],
    note: "Rates are illustrative demo content. A light supper is served on Thursdays; tell us about allergies when you book.",
    action: { label: "Ask about availability", href: "#contact", variant: "outline" },
  },
  testimonials: {
    eyebrow: "Guest notes",
    headline: {
      lead: "What people ",
      accent: "take home.",
    },
    note: "Guest notes are illustrative demo content, not real reviews.",
    items: [
      {
        quote:
          "We came for three nights and spent most of them doing nothing. It was exactly the point.",
        name: "Maya R.",
        detail: "London · June",
      },
      {
        quote:
          "The long table is where the trip happened. We met people we still write to.",
        name: "Daniel & Camille",
        detail: "Paris · September",
      },
      {
        quote: "No TV, no schedule. I read two books and slept like a stone.",
        name: "Sofia M.",
        detail: "Porto · May",
      },
    ],
  },
  faq: {
    eyebrow: "Good to know",
    headline: {
      lead: "Questions, ",
      accent: "answered.",
    },
    items: [
      {
        question: "How do I get there?",
        answer:
          "Comporta is about ninety minutes from Lisbon by car. We can arrange a transfer; parking is on site.",
      },
      {
        question: "Is breakfast included?",
        answer:
          "Yes. Bread, eggs, fruit, coffee, and something warm from the oven, served until eleven.",
      },
      {
        question: "Are children welcome?",
        answer:
          "Little ones are welcome in the Garden rooms. Tell us what you need and we'll make the room work.",
      },
      {
        question: "Can I book the whole house?",
        answer:
          "Yes, for up to twelve guests with a three-night minimum. Email us and we'll send the details.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Two weeks' notice for a full refund; fifty percent within two weeks. Dates can be moved once, subject to availability.",
      },
    ],
  },
  contact: {
    eyebrow: "Come stay",
    headline: {
      lead: "Tell us when ",
      accent: "you'd like to arrive.",
    },
    intro:
      "We answer enquiries ourselves, usually within a day. Tell us a little about the trip and we'll take it from there.",
    details: {
      email: "stay@casamarea.example",
      address: "Between the rice fields and the sea, Comporta, Portugal",
      hours: "Enquiries daily, 09:00—18:00 WEST",
    },
    form: {
      kind: "booking",
      title: "Enquiry",
      note: "This is a demo form. Nothing is sent or stored.",
      submitLabel: "Send enquiry",
      success:
        "This is a demo, so your enquiry has not been sent. In a real build, it would land in the house's inbox.",
    },
  },
  footer: {
    tagline: "A guesthouse by the Atlantic. A fictional demo brand, made to show what a small hotel website can feel like.",
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
