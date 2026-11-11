import type { WorkPageContent } from "../types";

/**
 * The public portfolio page.
 *
 * A project enters `projects` only when the work is real, the client has
 * allowed publication, and the problem, scope and outcome can be described
 * without inventing anything. An empty list is intentional: the page and its
 * publication standard exist, but no work is claimed until it can be shown.
 */
export const workFa: WorkPageContent = {
  meta: {
    title: "نمونه‌کارهای PBS | پروژه‌های وب، نرم‌افزار و اتوماسیون",
    description:
      "نمونه‌کارهای PBS؛ پروژه‌هایی که با اجازهٔ انتشار، همراه با مسئله، محدوده و خروجی معرفی می‌شوند.",
  },
  eyebrow: "نمونه‌کارها",
  headline: {
    lead: "نمونه‌کارهایی که می‌توان ",
    accent: "بررسی کرد",
    tail: ".",
  },
  intro:
    "هر پروژه با یک مسئلهٔ مشخص شروع می‌شود. اینجا پروژه‌هایی را منتشر می‌کنیم که اجازهٔ انتشار دارند و می‌توانیم مسئله، محدوده و خروجی را شفاف توضیح دهیم.",
  breadcrumb: {
    label: "مسیر صفحه",
    home: "خانه",
    current: "نمونه‌کارها",
  },
  empty: {
    label: "در حال انتشار",
    title: "نمونه‌کارها در حال انتشار",
    body:
      "جزئیات پروژه‌ها فقط پس از تأیید و با اجازهٔ انتشار منتشر می‌شود. تا آن زمان می‌توانید دربارهٔ روش کار، محدوده و خروجی‌های ممکن بپرسید.",
    action: {
      label: "دربارهٔ پروژه بپرسید",
      href: "#contact",
      variant: "primary",
    },
  },
  publishing: {
    title: "هر نمونه‌کار چه چیزی را نشان می‌دهد؟",
    intro:
      "به‌جای تصویرهای بی‌قاعده، هر پروژه با چهار بخش روشن منتشر می‌شود:",
    items: [
      "مسئله و زمینهٔ پروژه",
      "محدودهٔ کار و نقش PBS",
      "خروجی و وضعیت تحویل",
      "موارد خارج از محدوده یا درس‌های پروژه",
    ],
    note:
      "بدون اجازهٔ انتشار، نام مشتری و جزئیات پروژه منتشر نمی‌شود.",
  },
  labels: {
    project: "پروژه",
    challenge: "مسئله",
    scope: "محدوده",
    outcome: "خروجی",
    visit: "مشاهدهٔ پروژه",
  },
  closing: {
    title: "پروژه‌ای برای بررسی دارید؟",
    body:
      "اگر می‌خواهید بدانید مسئلهٔ شما در کدام دسته قرار می‌گیرد، با یک توضیح کوتاه شروع کنید.",
    action: {
      label: "راه‌های تماس",
      href: "#contact",
      variant: "secondary",
    },
  },
  projects: [],
};

export const workEn: WorkPageContent = {
  meta: {
    title: "PBS Work | Selected web, app and automation projects",
    description:
      "Selected PBS work, published with permission and documented through the problem, scope and outcome.",
  },
  eyebrow: "Selected work",
  headline: {
    lead: "Selected work you can ",
    accent: "inspect",
    tail: ".",
  },
  intro:
    "Every project starts with a defined problem. This page publishes work we have permission to show, with the problem, scope and outcome explained clearly.",
  breadcrumb: {
    label: "Breadcrumb",
    home: "Home",
    current: "Work",
  },
  empty: {
    label: "In progress",
    title: "Work is being prepared for publication",
    body:
      "Project details are published only after approval and with permission. Until then, you can ask about our process, scope and typical deliverables.",
    action: {
      label: "Ask about a project",
      href: "#contact",
      variant: "primary",
    },
  },
  publishing: {
    title: "What each project page shows",
    intro:
      "Instead of unlabelled screenshots, each project is documented in four parts:",
    items: [
      "The problem and context",
      "The scope and PBS's role",
      "The outcome and delivery status",
      "What fell outside the scope, or what the project taught us",
    ],
    note:
      "Client names and project details are not published without permission.",
  },
  labels: {
    project: "Project",
    challenge: "Problem",
    scope: "Scope",
    outcome: "Outcome",
    visit: "View project",
  },
  closing: {
    title: "Have a project to review?",
    body:
      "If you want to know where your problem fits, start with a short description.",
    action: {
      label: "Contact options",
      href: "#contact",
      variant: "secondary",
    },
  },
  projects: [],
};

export const pbsWork = {
  fa: workFa,
  en: workEn,
} as const;
