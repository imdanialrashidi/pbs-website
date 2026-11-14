import type { AboutPageContent } from "../types";

/**
 * About pages for both locales. This page is the public trust statement: who
 * PBS is, how work is scoped, what is excluded, the legal status, and what the
 * site does with data. It repeats no client claim and no performance result.
 */
const fa: AboutPageContent = {
  meta: {
    title: "دربارهٔ PBS | تیم، روش کار و محدوده",
    description:
      "PBS یک تیم مستقل دو نفره است؛ یک نقش تجاری و یک نقش فنی. روش کار، محدودهٔ پروژه، شفافیت دربارهٔ وضعیت حقوقی و رویکرد به داده را بشناسید.",
  },
  breadcrumb: {
    label: "مسیر صفحه",
    home: "خانه",
    current: "دربارهٔ PBS",
  },
  eyebrow: "دربارهٔ PBS",
  headline: {
    lead: "کوچک، مستقل، ",
    accent: "با محدودهٔ روشن",
    tail: ".",
  },
  intro:
    "PBS یک برند و تیم مستقل است، نه یک آژانس بزرگ با لایه‌های مدیریتی. همین کوچکی، محدوده و تحویل را قابل بررسی‌تر می‌کند.",
  sections: [
    {
      title: "PBS چیست؟",
      body: "PBS یک تیم مستقل و در حال شکل‌گیری است: یک نقش تجاری و یک نقش فنی. تمرکز ما روی پروژه‌های دیجیتال محدود و قابل تحویل است، نه فهرستی از ادعاهای بزرگ‌تر از ظرفیت.",
      points: [
        "تمرکز روی پروژه‌های محدود و قابل بازبینی",
        "شفافیت دربارهٔ آنچه انجام نمی‌دهیم",
        "تحویل قابل استفاده و مستند",
      ],
    },
    {
      title: "چطور کار می‌کنیم؟",
      body: "هر پروژه با شناخت مسئله شروع می‌شود. پیش از ساخت، دامنه، خروجی‌ها، موارد خارج از دامنه و وابستگی‌ها نوشته می‌شوند. تحویل مرحله‌ای است تا تغییر مسیر زودهنگام روشن شود.",
      points: [
        "شناخت پیش از پیشنهاد",
        "دامنهٔ نوشته‌شده",
        "ساخت قابل بازبینی",
        "تحویل و راهنمای استفاده",
      ],
    },
    {
      title: "چه چیزی در دامنه است؟",
      body: "وب‌سایت و لندینگ، پنل و نرم‌افزار داخلی با دامنهٔ محدود، اتوماسیون و یکپارچه‌سازی، و اجرای محدود رشد دیجیتال.",
      points: [
        "هر پروژه به ظرفیت، پیچیدگی و الزامات همکاری بستگی دارد",
        "سیستم‌های حیاتی و پشتیبانی ۲۴/۷ در دامنهٔ پیش‌فرض نیستند",
        "پذیرش هر پروژه پیش از شروع بررسی می‌شود",
      ],
      note: "این فهرست توانمندی است، نه تعهد به پذیرش هر پروژه.",
    },
    {
      title: "وضعیت حقوقی و انتشار کار",
      body: "PBS در حال حاضر به‌عنوان برند و تیم مستقل فعالیت می‌کند و شخصیت حقوقی ثبت‌شده‌ای ندارد. الزامات قرارداد، صورت‌حساب، خرید سازمانی و امکان همکاری پیش از شروع هر پروژه بررسی می‌شود.",
      points: [
        "هیچ مشتری، پروژه یا عددی بدون اجازهٔ انتشار منتشر نمی‌شود",
        "نمونه‌کارها فقط با تأیید و اجازهٔ انتشار وارد سایت می‌شوند",
        "خالی بودن نمونه‌کارها یعنی هنوز پروژه‌ای برای انتشار تأیید نشده است",
      ],
    },
    {
      title: "داده و حریم خصوصی",
      body: "این سایت ایستا است: فرم، حساب کاربری، تحلیل بازدیدکننده یا کوکی ردیابی ندارد. لینک‌های تماس، وقتی فعال شوند، به سرویس‌های خارجی باز می‌شوند و سیاست خودشان را دارند.",
      points: [
        "هیچ داده‌ای در این سایت ذخیره نمی‌شود",
        "هیچ ابزار تحلیلی یا تبلیغاتی بارگذاری نمی‌شود",
        "جزئیات تماس فقط پس از تأیید منتشر می‌شود",
      ],
    },
  ],
  closing: {
    title: "اگر مسئله‌تان روشن است، از همان شروع کنیم.",
    body: "یک توضیح کوتاه از مسئله، مخاطب و محدودیت‌ها کافی است.",
    action: {
      label: "دربارهٔ پروژه صحبت کنیم",
      href: "#contact",
      variant: "primary",
    },
  },
};

const en: AboutPageContent = {
  meta: {
    title: "About PBS | Team, method and scope",
    description:
      "PBS is an independent two-person team with one commercial and one technical role. Read how we scope work, what we take on and how we handle data.",
  },
  breadcrumb: {
    label: "Breadcrumb",
    home: "Home",
    current: "About PBS",
  },
  eyebrow: "About PBS",
  headline: {
    lead: "Small, independent, ",
    accent: "with a defined scope",
    tail: ".",
  },
  intro:
    "PBS is an independent brand and team, not a large agency with layers of management. That smallness is deliberate: it keeps scope and delivery reviewable.",
  sections: [
    {
      title: "What PBS is",
      body: "PBS is an early-stage independent team with one commercial role and one technical role. We focus on scoped digital projects we can actually deliver, not a list of claims larger than the team.",
      points: [
        "A limited number of reviewable projects",
        "Clarity about what we do not do",
        "A usable, documented handover",
      ],
    },
    {
      title: "How we work",
      body: "Every project starts with understanding the problem. Before build, we write down the scope, deliverables, exclusions and dependencies. Delivery is staged so a change of direction is visible early.",
      points: [
        "Discovery before a proposal",
        "A written scope",
        "A reviewable build",
        "Handover and a usage guide",
      ],
    },
    {
      title: "What is in scope",
      body: "Websites and landing pages, scoped business panels and internal software, automation and integrations, and limited digital-growth execution.",
      points: [
        "Every project depends on capacity, complexity and the engagement requirements",
        "Critical systems and 24/7 support are outside the default scope",
        "Every project is assessed before work starts",
      ],
      note: "This is a statement of capability, not a commitment to accept every project.",
    },
    {
      title: "Legal status and publishing work",
      body: "PBS currently operates as an independent brand and team and is not a registered legal entity. Contract, invoicing, enterprise procurement and eligibility requirements are reviewed before any engagement begins.",
      points: [
        "No client, project or number is published without permission",
        "Work enters the site only after approval and publication permission",
        "An empty public portfolio means no project has been cleared for publication yet",
      ],
    },
    {
      title: "Data and privacy",
      body: "This site is static: it has no form, user account, visitor analytics or tracking cookie. Contact links, when they are active, open external services that have their own policies.",
      points: [
        "No data is stored by this site",
        "No analytics or advertising tool is loaded",
        "Contact details are published only after verification",
      ],
    },
  ],
  closing: {
    title: "If the problem is clear, let us start there.",
    body: "A short description of the problem, audience and constraints is enough.",
    action: {
      label: "Discuss a project",
      href: "#contact",
      variant: "primary",
    },
  },
};

export const aboutPages = { fa, en } as const;
