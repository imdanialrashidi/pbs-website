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
 * Example client 0 (default): a fictional Persian guesthouse on the Caspian
 * coast. This is the reference implementation for RTL, Persian typography,
 * Persian numerals, and the Persian interface dictionary.
 *
 * All business details, rates, and guest notes are demo content.
 */
export const naranjHouse = {
  brand: {
    name: "خانهٔ نارنج",
    mark: "sun",
    descriptor: "خانه‌ای میان باغ و دریا",
    location: "چابکسر، مازندران",
  },
  meta: {
    title: "خانهٔ نارنج — خانه‌ای میان باغ و دریا",
    description:
      "شش اتاق، یک میز بلند و صدای دریا در انتهای کوچه. یک اقامتگاه خیالی در ساحل خزر، برای نشان دادن حال‌وهوای یک خانهٔ کوچک.",
    locale: "fa-IR",
    direction: "rtl",
    keywords: [
      "خانهٔ مهمان",
      "اقامتگاه",
      "چابکسر",
      "مازندران",
      "ساحل خزر",
      "اقامت آرام",
    ],
  },
  demo: {
    enabled: true,
    note: "خانهٔ نارنج یک کسب‌وکار خیالی است. نام‌ها، نرخ‌ها و یادداشت مهمان‌ها نمونه‌هایی برای این قالب‌اند.",
  },
  theme: {
    mode: "light",
    colors: {
      canvas: "#f3ecdd",
      surface: "#faf5e9",
      ink: "#1d2a24",
      muted: "#5d6a60",
      accent: "#0d6b66",
      accentInk: "#fbf7ec",
      line: "#d7cbb6",
      tint: "#e7ddc9",
      onImage: "#fbf7ec",
      footerBg: "#14231f",
      footerInk: "#f2ebdc",
    },
    fonts: {
      display: "estedad",
      body: "estedad",
      emphasis: "estedad",
    },
    shape: {
      media: "0.25rem",
      button: "999px",
      heroArch: true,
    },
    layout: {
      contentWidth: "78rem",
      gutter: "clamp(1.25rem, 4vw, 2.75rem)",
      sectionSpace: "clamp(4.75rem, 9vw, 8rem)",
    },
  },
  navigation: [
    { label: "خانه", section: "story" },
    { label: "در خانه", section: "services" },
    { label: "دور و بر", section: "features" },
    { label: "گالری", section: "gallery" },
    { label: "اتاق‌ها", section: "pricing" },
  ],
  headerAction: {
    label: "بررسی تاریخ‌ها",
    href: "#contact",
    variant: "solid",
  },
  hero: {
    variant: "split",
    eyebrow: "چابکسر، مازندران · شش اتاق",
    headline: {
      lead: "خانه‌ای برای ",
      accent: "صبح‌های\u00A0آرام",
      tail: " کنار دریا.",
    },
    intro:
      "شش اتاق، یک میز بلند و صدای دریا در انتهای کوچه. برای سکوت بیایید؛ برای نور بمانید.",
    image: {
      src: coast,
      alt: "ساحل شنی در غروب، از مسیر پایین خانه.",
      caption: "مسیر ساحل، کمی پیش از هشت.",
      position: "50% 55%",
    },
    actions: [
      { label: "بررسی اقامت", href: "#contact", variant: "accent" },
      { label: "داخل خانه", href: "#story", variant: "outline" },
    ],
    facts: [
      { label: "اتاق‌ها", value: "شش" },
      { label: "تا دریا", value: "۴ دقیقه پیاده" },
      { label: "فصل", value: "فروردین—مهر" },
    ],
  },
  statement: {
    eyebrow: "یادداشتی از خانه",
    quote:
      "خانه را ساده نگه داشتیم: کف سنگی، پارچهٔ کتان، قهوهٔ خوب و صدای موج. بقیه می‌تواند صبر کند.",
    attribution: "مینا و آرش، میزبان‌ها",
    image: {
      src: terrace,
      alt: "تراس در نور طلایی، با میزهایی چیده‌شده برای شام بالای آب.",
      caption: "تراس، پیش از شام.",
      position: "50% 50%",
    },
  },
  story: {
    eyebrow: "خانه",
    headline: {
      lead: "خانه‌ای آرام، ",
      accent: "در مدار",
      tail: " نور.",
    },
    paragraphs: [
      "خانهٔ نارنج از یک خانهٔ خانوادگی میان باغ‌های نارنج شروع شد، چند قدم تا ساحل. استخوان‌بندی‌اش را نگه داشتیم — کف سنگی، پنجره‌های عمیق، درختی که حاضر نیست جابه‌جا شود — و بقیه را ساده‌تر کردیم.",
      "شش اتاق داریم، یک اتاق نشیمن با گرامافون و یک میز بلند که صبحانه روی آن به قهوهٔ دوم تبدیل می‌شود. نه لابی، نه تلویزیون، نه برنامه. فقط فضای کافی برای اینکه صدای خودتان را بشنوید.",
    ],
    image: {
      src: house,
      alt: "خانهٔ چوبی و شیشه‌ای میان درختان نارنج.",
      caption: "خانه، از سمت باغ.",
      position: "50% 55%",
    },
    facts: [
      { label: "اتاق‌ها", value: "شش اتاق، هر یک با حمام خصوصی" },
      { label: "صبحانه", value: "شامل، تا ساعت ۱۱" },
      { label: "ساحل", value: "چهار دقیقه پیاده" },
      { label: "کودکان", value: "در اتاق‌های باغ پذیرفته می‌شوند" },
    ],
    signature: "مینا و آرش",
    signatureNote: "میزبان‌های شما، و همان‌هایی که صبحانه می‌آورند.",
    action: {
      label: "چیزهایی که شامل اقامت است",
      href: "#services",
      variant: "quiet",
    },
  },
  services: {
    eyebrow: "در خانه",
    headline: {
      lead: "آسایش‌های کوچک، ",
      accent: "به‌عمد کم.",
    },
    intro:
      "ما هتلی با فهرست بلند خدمات نیستیم. این‌ها کارهایی است که هر روز خوب انجام می‌دهیم.",
    items: [
      {
        icon: "coffee",
        title: "صبحانه کنار میز بلند",
        description:
          "نان روستا، تخم‌مرغ محلی، میوهٔ باغ و قهوه‌ای که هرقدر بخواهید.",
        meta: "هر روز · ۸ تا ۱۱",
      },
      {
        icon: "leaf",
        title: "باغ و چای عصرانه",
        description:
          "زیر درختان نارنج، با چای دم‌کشیده و شیرینی خانگی. کتابتان را بیاورید.",
        meta: "هر روز · ۱۷ تا ۱۹",
      },
      {
        icon: "bike",
        title: "دوچرخه کنار دروازه",
        description:
          "پنج دوچرخه، دو تایشان با سبد. مسیر ساحل صاف است و شالیزارها صاف‌تر.",
        meta: "پنج دوچرخه · به ترتیب",
      },
      {
        icon: "users",
        title: "میز بلند",
        description:
          "شام‌های سادهٔ پنجشنبه‌ها دور یک میز. اگر تنها آمده‌اید، جای شما همین‌جاست.",
        meta: "پنجشنبه‌ها · با رزرو",
      },
    ],
    note: "از فروردین تا مهر باز هستیم. باقی سال، خانه مال خودمان است.",
  },
  features: {
    eyebrow: "دور و بر",
    headline: {
      lead: "ساحل، شالیزار ",
      accent: "و هیچ‌جا.",
    },
    intro:
      "چابکسر را بهتر است بی‌برنامه بگردید. این‌ها جاهایی است که خودمان برمی‌گردیم.",
    items: [
      {
        icon: "waves",
        title: "مسیر ساحل",
        description:
          "از مسیر چوبی میان تپه‌های شنی بگذرید. انتهای راه: یک ساحل طولانی، چند ماهیگیر و هیچ‌چیز دیگر.",
        meta: "۴ دقیقه پیاده",
      },
      {
        icon: "sun",
        title: "شالیزار",
        description:
          "شالیزارهای قدیمی آخر تابستان طلایی می‌شوند. غروب بروید، وقتی نور کار را انجام می‌دهد.",
        meta: "۱۰ دقیقه با دوچرخه",
      },
      {
        icon: "compass",
        title: "اسکلهٔ چوبی",
        description:
          "اسکله‌ای روی گل‌ولای، با قهوه در انتهای جاده و اولین نور روی آب. زود برسید.",
        meta: "۲۵ دقیقه با ماشین",
      },
    ],
  },
  gallery: {
    eyebrow: "خانه، در قاب",
    headline: {
      lead: "نور، کتان ",
      accent: "و کمی نمک.",
    },
    intro:
      "گوشه‌هایی از خانه و ساحل اطراف. روی هر عکس بزنید تا نزدیک‌تر ببینید.",
    items: [
      {
        image: cove,
        alt: "آب فیروزه‌ای در خلیجی کوچک، میان صخره‌های پوشیده از درخت.",
        caption: "خلیج، پانزده دقیقه بالاتر.",
      },
      {
        image: living,
        alt: "اتاق نشیمن روشن با مبل‌های کتان، کف چوبی و پنجره‌های بلند.",
        caption: "اتاق بلند، وسط صبح.",
        position: "50% 55%",
      },
      {
        image: bedroom,
        alt: "اتاقی آرام با ملافهٔ کتان، چراغ حصیری و گیاهان.",
        caption: "اتاق باغ، پیش از صبحانه.",
      },
      {
        image: dining,
        alt: "اتاق غذاخوری چوبی تاریک با نور شمع و آشپزخانهٔ باز در پس‌زمینه.",
        caption: "شام، وقتی نور می‌رود.",
      },
      {
        image: cooking,
        alt: "دست‌هایی که سبزی و قارچ را روی تختهٔ چوبی خرد می‌کنند.",
        caption: "چیزی از باغ.",
      },
      {
        image: cafe,
        alt: "کافه‌ای آرام با میزهای چوبی، قفسه‌ها و چراغ‌های آویز.",
        caption: "بوفه، بعد از ساحل.",
      },
    ],
  },
  pricing: {
    eyebrow: "اقامت",
    headline: {
      lead: "شش اتاق. ",
      accent: "هیچ‌کدام شبیه دیگری نیست.",
    },
    intro:
      "نرخ‌ها شامل صبحانه، دوچرخه و یک شروع خیلی آرام است. حداقل دو شب از خرداد تا شهریور.",
    plans: [
      {
        name: "نیل",
        description: "رو به باغ، تخت دونفره، حمام بارانی.",
        price: "۴٬۸۰۰٬۰۰۰",
        unit: "تومان · هر شب",
        meta: ["۲۴ متر", "دو نفر", "رو به باغ"],
        action: {
          label: "پرسش دربارهٔ نیل",
          href: "#contact",
          variant: "quiet",
        },
      },
      {
        name: "نارنج",
        description: "تراس خصوصی، تخت کینگ و حمام روباز.",
        price: "۶٬۲۰۰٬۰۰۰",
        unit: "تومان · هر شب",
        badge: "مناسب اقامت بلندتر",
        meta: ["۳۱ متر", "دو نفر", "تراس خصوصی"],
        action: {
          label: "پرسش دربارهٔ نارنج",
          href: "#contact",
          variant: "quiet",
        },
      },
      {
        name: "مهتاب",
        description: "طبقهٔ بالا، رو به دریا و وان کنار پنجره.",
        price: "۷٬۹۰۰٬۰۰۰",
        unit: "تومان · هر شب",
        meta: ["۳۸ متر", "دو نفر", "رو به دریا"],
        action: {
          label: "پرسش دربارهٔ مهتاب",
          href: "#contact",
          variant: "quiet",
        },
      },
    ],
    note: "نرخ‌ها نمونه‌اند. شام سادهٔ پنجشنبه‌ها با رزرو است؛ حساسیت غذایی را هنگام رزرو بگویید.",
    action: {
      label: "پرسش دربارهٔ اقامت",
      href: "#contact",
      variant: "outline",
    },
  },
  testimonials: {
    eyebrow: "یادداشت مهمان‌ها",
    headline: {
      lead: "چیزی که با خود ",
      accent: "می‌برید.",
    },
    note: "یادداشت‌ها نمونه‌اند و نظر واقعی نیستند.",
    items: [
      {
        quote:
          "برای سه شب آمدیم و بیشترش را هیچ کاری نکردیم. دقیقاً همین را می‌خواستیم.",
        name: "مریم ر.",
        detail: "تهران · خرداد",
      },
      {
        quote:
          "میز بلند همان جایی بود که سفر اتفاق افتاد. با آدم‌هایی آشنا شدیم که هنوز برایشان می‌نویسیم.",
        name: "سارا و امیر",
        detail: "اصفهان · شهریور",
      },
      {
        quote: "نه تلویزیون، نه برنامه. دو کتاب خواندم و مثل سنگ خوابیدم.",
        name: "نیما ک.",
        detail: "شیراز · اردیبهشت",
      },
    ],
  },
  faq: {
    eyebrow: "خوب است بدانید",
    headline: {
      lead: "پرسش‌ها، ",
      accent: "با پاسخ.",
    },
    items: [
      {
        question: "چطور برسیم؟",
        answer:
          "چابکسر حدود سه ساعت از تهران با ماشین است. پارکینگ در خانه داریم و می‌توانیم انتقال از رامسر را هماهنگ کنیم.",
      },
      {
        question: "صبحانه شامل است؟",
        answer:
          "بله. نان، تخم‌مرغ، میوه، قهوه و چیزی گرم از فر، تا ساعت یازده.",
      },
      {
        question: "کودکان هم پذیرفته می‌شوند؟",
        answer:
          "بله، در اتاق‌های باغ. بگویید چه نیاز دارید تا اتاق را آماده کنیم.",
      },
      {
        question: "می‌شود کل خانه را رزرو کرد؟",
        answer:
          "بله، تا دوازده مهمان با حداقل سه شب. ایمیل بزنید تا جزئیات را بفرستیم.",
      },
      {
        question: "شرایط لغو چیست؟",
        answer:
          "دو هفته قبل از ورود، بازگشت کامل؛ کمتر از دو هفته، پنجاه درصد. تاریخ‌ها یک بار و با توجه به ظرفیت قابل جابه‌جایی است.",
      },
    ],
  },
  contact: {
    eyebrow: "بیایید بمانید",
    headline: {
      lead: "بگویید ",
      accent: "چه زمانی",
      tail: " می‌خواهید برسید.",
    },
    intro:
      "خودمان به پرسش‌ها جواب می‌دهیم، معمولاً تا یک روز. کمی از سفر بگویید و بقیه‌اش با ما.",
    details: {
      email: "stay@naranjhouse.example",
      phone: "+98 21 0000 0000",
      address: "چابکسر، جادهٔ ساحلی، کوچهٔ نارنج",
      hours: "هر روز، ۹ تا ۱۸",
    },
    form: {
      kind: "booking",
      title: "درخواست اقامت",
      note: "این فرم نمایشی است. چیزی ارسال یا ذخیره نمی‌شود.",
      submitLabel: "فرستادن درخواست",
      success:
        "این فرم نمایشی است؛ درخواست شما ارسال نشده. در نسخهٔ واقعی، به صندوق خانه می‌رسید.",
    },
  },
  footer: {
    tagline:
      "خانه‌ای میان باغ و دریا. برندی خیالی برای نشان دادن حال‌وهوای یک اقامتگاه کوچک.",
    photoCredit: {
      label: "عکس‌ها",
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
