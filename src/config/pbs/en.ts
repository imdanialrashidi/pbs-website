import type { SiteConfig } from "../types";
import { localeLinks, pbsContactLinks, pbsThemeBase } from "./shared";

/**
 * PBS, English and LTR. Written for an English-speaking business reader, not
 * copied word for word from Persian. Same verified facts, no claimed
 * international track record.
 */
export const pbsEn = {
  brand: {
    name: "PBS",
    mark: "tide",
    descriptor: "Practical Business Solutions",
    logo: {
      src: "/brand/Logo/pbs-logo-on-light.svg",
      width: 747,
      height: 251,
      alt: "PBS | Practical Business Solutions",
    },
    logoOnDark: {
      src: "/brand/Logo/pbs-logo-primary-dark.svg",
      width: 747,
      height: 251,
      alt: "PBS | Practical Business Solutions",
    },
  },
  meta: {
    title: "PBS | Websites, business apps and automation",
    description:
      "PBS is an independent B2B digital solutions team building websites, business apps and workflow automation with a clear scope and practical delivery.",
    locale: "en",
    direction: "ltr",
    path: "/en/",
    keywords: [
      "B2B digital solutions",
      "business website design",
      "business applications",
      "management dashboards",
      "workflow automation",
      "PBS",
      "Practical Business Solutions",
    ],
    socialImage: {
      src: "/og-image.png",
      alt: "PBS, practical digital solutions for business",
      width: 1200,
      height: 630,
    },
  },
  localeLinks: localeLinks("en"),
  contactLinks: pbsContactLinks,
  theme: {
    ...pbsThemeBase,
    fonts: {
      display: "inter",
      body: "inter",
      emphasis: "inter",
    },
  },
  navigation: [
    { label: "Services", section: "services" },
    { label: "Process", section: "features" },
    { label: "Why PBS", section: "reasons" },
    { label: "FAQ", section: "faq" },
  ],
  headerAction: {
    label: "Discuss a project",
    href: "#contact",
    variant: "primary",
  },
  hero: {
    eyebrow: "Independent B2B digital solutions team",
    headline: {
      lead: "From a business problem to a ",
      accent: "digital solution you can use",
      tail: ".",
    },
    intro:
      "Websites, custom panels and software, and automation for teams that need a usable outcome and a clear scope.",
    actions: [
      { label: "Discuss a project", href: "#contact", variant: "primary" },
      { label: "See our services", href: "#services", variant: "secondary" },
    ],
    scopeMap: {
      title: "From problem to outcome",
      stamp: "PBS / SCOPE",
      input: "Business problem",
      layers: [
        {
          label: "Customer path",
          title: "Website and landing",
          detail: "Message, content and contact path",
        },
        {
          label: "Operations",
          title: "Panel and dashboard",
          detail: "Roles, status and reporting",
        },
        {
          label: "Connection",
          title: "Automation",
          detail: "Data flow and less manual work",
        },
      ],
      output: "Usable handover",
      caption: "A conceptual view of PBS scope, not a real project.",
    },
  },
  services: {
    eyebrow: "Services",
    headline: {
      lead: "Four paths, each with a ",
      accent: "defined output and boundary",
      tail: ".",
    },
    intro:
      "Every path starts with a specific problem and ends with something usable. If your need sits outside these four, we say so early.",
    labels: {
      problem: "Problem",
      deliverables: "Deliverables",
      boundary: "Scope boundary",
    },
    items: [
      {
        title: "Websites and landing pages",
        problem:
          "The site or campaign needs a clear message, an obvious contact path and content the team can maintain.",
        description:
          "A company site, campaign landing page or focused redesign with a clear content structure and contact path.",
        deliverables: [
          "Responsive pages",
          "Contact path and form",
          "Content panel where agreed",
          "Launch guide",
        ],
        boundary: "Search ranking, sales or campaign results are not guaranteed.",
      },
      {
        title: "Business panels and software",
        problem:
          "Information is spread across spreadsheets, email and chat, and every follow-up needs manual copying.",
        description:
          "An internal panel, dashboard or request-tracking tool with explicit roles, access and workflow.",
        deliverables: [
          "Roles and access",
          "Workflow",
          "Dashboard and reporting",
          "Usage documentation",
        ],
        boundary:
          "Critical systems, sensitive financial tools and 24/7 support are outside the default scope.",
      },
      {
        title: "Automation and integrations",
        problem:
          "Repeated work and duplicate data entry consume capacity and increase the chance of error.",
        description:
          "Connect tools and automate defined workflows after checking access, reliability and the recovery path.",
        deliverables: [
          "API or tool connection",
          "Notifications and automated reports",
          "Error and recovery path",
          "Workflow documentation",
        ],
        boundary:
          "Third-party access and reliability are assessed before work starts.",
      },
      {
        title: "Scoped digital growth execution",
        problem:
          "Traffic or a campaign exists, but lead capture, follow-up and measurement are not connected.",
        description:
          "A landing page, short form and follow-up connection, limited to what can be delivered and measured.",
        deliverables: [
          "Campaign landing page",
          "Lead capture form",
          "Follow-up connection",
          "Agreed success measure",
        ],
        boundary:
          "Full campaign management, ongoing content production and guaranteed sales are not in scope.",
      },
    ],
    note:
      "This is a statement of capability, not a commitment to accept every project. Capacity, complexity and contractual requirements are assessed for each inquiry.",
  },
  patterns: {
    eyebrow: "Example scenarios",
    headline: {
      lead: "Recognise the problem, ",
      accent: "see the likely output",
      tail: ".",
    },
    intro: "Four common situations that often begin with a scoped digital solution.",
    note: "These are illustrative scenarios, not client case studies or promised results.",
    labels: {
      problem: "Current situation",
      output: "Likely output",
      capability: "Example scenario",
    },
    items: [
      {
        title: "The site exists, the message and contact path do not.",
        description:
          "The website is old or the copy has no clear point. The form, phone number and next step are not connected into one path.",
        outcome:
          "A company site with a clear message, a deliberate contact path and maintainable content.",
        meta: "Website · UX · Forms",
      },
      {
        title: "Requests are lost between spreadsheets, email and chat.",
        description:
          "No single tool holds the status of each request, so follow-up depends on memory and scattered messages.",
        outcome:
          "A single panel with roles, statuses and reporting, plus documentation and an error path.",
        meta: "Panel · Workflow",
      },
      {
        title: "Repetitive work is consuming the team.",
        description:
          "Duplicate entry, manual reminders and monthly reporting take time away from delivery.",
        outcome:
          "Connected tools, notifications and automated reports with a defined recovery path.",
        meta: "Automation · Integration",
      },
      {
        title: "The campaign has traffic, but lead capture is vague.",
        description:
          "Traffic arrives, but the form, follow-up and success measure are not connected into one clear flow.",
        outcome:
          "A landing page, short form and follow-up connection with an agreed success measure.",
        meta: "Landing page · Lead capture",
      },
    ],
  },
  features: {
    eyebrow: "How we work",
    headline: {
      lead: "A clear path from ",
      accent: "discovery to handover",
      tail: ".",
    },
    intro:
      "Four fixed stages; the size of each depends on the project. Build does not start without a written scope.",
    items: [
      {
        title: "Discover",
        description:
          "Clarify the problem, users, constraints and success criteria in a structured conversation.",
        meta: "01",
      },
      {
        title: "Scope",
        description:
          "Write down deliverables, exclusions, dependencies and the handover approach.",
        meta: "02",
      },
      {
        title: "Build",
        description:
          "Design and implement in a reviewable environment, with review at each stage and out-of-scope changes recorded.",
        meta: "03",
      },
      {
        title: "Review and handover",
        description:
          "Test, document, transfer access and provide a usage guide. Support afterwards follows the agreed arrangement.",
        meta: "04",
      },
    ],
  },
  reasons: {
    eyebrow: "Why PBS",
    headline: {
      lead: "Clarity before ",
      accent: "any claim",
      tail: ".",
    },
    intro:
      "PBS is an independent two-person team: one commercial role and one technical role. We take on a limited number of projects at a time so scope and delivery stay reviewable.",
    quote: "We do not make claims larger than the work.",
    quoteAttribution: "A working principle at PBS",
    items: [
      {
        title: "Problem before tools",
        description:
          "Technology follows the project need, not the other way around.",
        meta: "Decision",
      },
      {
        title: "Limited capacity",
        description:
          "Two people and a limited number of projects. If capacity is not there, we say so before work starts.",
        meta: "Capacity",
      },
      {
        title: "An explicit scope",
        description:
          "You know what is delivered, what is excluded and how changes are assessed.",
        meta: "Scope",
      },
      {
        title: "No added claims",
        description:
          "Until work can be published with permission, we do not present it as a case study.",
        meta: "Evidence",
      },
    ],
  },
  definition: {
    eyebrow: "Our name",
    headline: {
      lead: "PBS stands for ",
      accent: "Practical Business Solutions",
      tail: ".",
    },
    intro: "The name is a filter for project decisions, not a slogan.",
    words: [
      {
        initial: "P",
        english: "Practical",
        label: "Usable",
        description: "An outcome the team can use, maintain and own.",
      },
      {
        initial: "B",
        english: "Business",
        label: "Grounded",
        description: "Start with the problem, the user and the business outcome.",
      },
      {
        initial: "S",
        english: "Solutions",
        label: "Delivered",
        description: "A defined, documented and transferable deliverable.",
      },
    ],
    closing:
      "Every project decision is tested against those three questions: is it practical, is it tied to the business, and can it be delivered?",
  },
  faq: {
    eyebrow: "Practical questions",
    headline: {
      lead: "What is useful to know ",
      accent: "before we start",
      tail: ".",
    },
    intro:
      "Short answers, no added promises. If your question is not here, raise it through the contact section.",
    action: {
      label: "Still have a question?",
      href: "#contact",
      variant: "quiet",
    },
    items: [
      {
        question: "What kind of projects do you take on?",
        answer:
          "Websites and landing pages, scoped business panels and software, automation and integrations, and limited digital-growth execution. Every project depends on capacity, complexity and the requirements of the engagement.",
      },
      {
        question: "Do you have public case studies?",
        answer:
          "The work page publishes only projects we have permission to show. Until a project can be published, we discuss the method, scope and the kind of deliverables instead.",
      },
      {
        question: "How is project pricing set?",
        answer:
          "We do not offer a fixed price without a defined scope. After an initial call and discovery, the estimate reflects the work, risk, dependencies and agreed support. Third-party service costs are stated separately.",
      },
      {
        question: "What is outside the default scope?",
        answer:
          "Highly complex or critical systems, 24/7 infrastructure support and full-service marketing are outside the default scope. If your need falls outside it, we say so clearly.",
      },
      {
        question: "How long does a project take?",
        answer:
          "It depends on scope, feedback and technical dependencies. A staged timeline is included in the proposal; changes outside the scope carry their own time and cost.",
      },
      {
        question: "Is PBS a registered company?",
        answer:
          "PBS currently operates as an independent brand and team and is not a registered legal entity. Contract, invoicing, enterprise procurement and eligibility requirements are reviewed before any engagement begins.",
      },
      {
        question: "Do you support the work after launch?",
        answer:
          "Yes, but only inside a defined arrangement. Unlimited or free support is not the default commitment; the period, service level and cost are written into that agreement.",
      },
      {
        question: "Do you work with clients outside Iran?",
        answer:
          "PBS is focused on the Iranian market today. International work is an aspiration, not a proven track record; any cross-border engagement would be assessed for legal, payment and data requirements first.",
      },
    ],
  },
  contact: {
    eyebrow: "Start a conversation",
    headline: {
      lead: "Tell us the problem. We will be ",
      accent: "straight about fit",
      tail: ".",
    },
    intro:
      "Start with the problem, the people who use the solution and the main constraint. If a channel is not active yet, that status is shown openly here.",
    prep: {
      title: "Three things to prepare",
      items: [
        "The problem in one sentence",
        "The users or team involved",
        "The time, budget or tool constraints",
      ],
    },
    availabilityNote: "Choose one of the available channels below to start.",
    note:
      "This page does not send messages. Selecting a channel opens a conversation in that app or on that number.",
    channels: [
      {
        id: "whatsapp",
        label: "WhatsApp",
        description: "A quick message about the problem or project",
        pendingLabel: "Number coming soon",
      },
      {
        id: "bale",
        label: "Bale",
        description: "A conversation in the Bale messenger",
        pendingLabel: "Profile coming soon",
      },
      {
        id: "telegram",
        label: "Telegram",
        description: "A conversation in Telegram",
        pendingLabel: "Profile coming soon",
      },
      {
        id: "phone",
        label: "Phone",
        description: "A direct call about the project",
        pendingLabel: "Number coming soon",
      },
    ],
  },
  footer: {
    tagline: "Practical digital solutions for real business challenges.",
    disclosure:
      "PBS is an independent brand and team. It is not currently a registered legal entity.",
  },
  sections: ["hero", "services", "patterns", "features", "reasons", "definition", "faq", "contact"],
} satisfies SiteConfig;
