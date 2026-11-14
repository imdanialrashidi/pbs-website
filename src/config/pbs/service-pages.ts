import type { ServicePageContent, ServicePageKey } from "../types";

/**
 * Service detail pages, one route pair per capability.
 *
 * These pages describe the same four capabilities as the homepage, but with
 * enough depth to stand on their own: the problem, the scope, the deliverables,
 * the boundary and the working method. No client, result or metric is claimed
 * unless it is real and permitted.
 */
const fa: Record<ServicePageKey, ServicePageContent> = {
  "service-websites": {
    meta: {
      title: "طراحی وب‌سایت شرکتی و لندینگ | PBS",
      description:
        "طراحی و ساخت وب‌سایت شرکتی، لندینگ‌پیج و بازطراحی با پیام روشن، مسیر تماس مشخص و محتوای قابل نگهداری. دامنه و خروجی پیش از شروع نوشته می‌شود.",
    },
    breadcrumb: {
      label: "مسیر صفحه",
      home: "خانه",
      current: "وب‌سایت و لندینگ",
    },
    eyebrow: "وب‌سایت و لندینگ",
    headline: {
      lead: "وب‌سایت شرکتی، ",
      accent: "با پیام و مسیر تماس روشن",
      tail: ".",
    },
    intro:
      "سایت شما باید در چند ثانیه بگوید چه کاری انجام می‌دهید، برای چه کسی و قدم بعدی چیست. طراحی خوب بدون این سه، فقط ظاهر است.",
    problem: {
      title: "سایت هست، اما پیام و مسیر تماس روشن نیست.",
      body: "خیلی از سایت‌های شرکتی فهرست خدمات دارند، اما در چند ثانیه نمی‌گویند برای چه کسی ساخته شده‌اند، چه مشکلی را حل می‌کنند و بازدیدکننده باید چه کاری انجام دهد.",
      signals: [
        "صفحهٔ اصلی بیشتر شبیه فهرست خدمات است تا یک پیشنهاد روشن.",
        "مسیر تماس در چند جای مختلف پخش شده و قدم بعدی مشخص نیست.",
        "تیم نمی‌تواند متن یا ساختار صفحه را بدون کمک فنی به‌روز کند.",
      ],
    },
    scope: {
      title: "چه چیزی ساخته می‌شود؟",
      intro:
        "دامنه بر اساس تصمیم‌های واقعی پروژه تعیین می‌شود، نه بر اساس فهرست بلند امکانات.",
      items: [
        {
          title: "سایت شرکتی",
          description: "ساختار صفحه‌ها، پیام اصلی، معرفی خدمات و مسیر تماس.",
        },
        {
          title: "لندینگ کمپین",
          description: "یک صفحهٔ متمرکز با پیام واحد و اقدام مشخص.",
        },
        {
          title: "بازطراحی محدود",
          description: "اصلاح ساختار، خوانایی و مسیر تماس بدون بازنویسی کل سایت.",
        },
        {
          title: "ساختار محتوا",
          description: "تعیین اینکه هر صفحه چه چیزی باید بگوید و چه چیزی لازم ندارد.",
        },
      ],
    },
    deliverables: {
      title: "خروجی‌ها",
      items: [
        "صفحه‌های واکنش‌گرا برای موبایل و دسکتاپ",
        "مسیر تماس و فرم در صورت نیاز",
        "پنل محتوا در صورت توافق",
        "راهنمای راه‌اندازی و تحویل",
      ],
      note: "فهرست نهایی و موارد خارج از دامنه در پیشنهاد نوشته می‌شود.",
    },
    boundaries: {
      title: "مرزهای پیش‌فرض",
      items: [
        "رتبهٔ جست‌وجو، فروش یا نتیجهٔ کمپین تضمین نمی‌شود.",
        "تولید مستمر محتوا و مدیریت کامل کمپین جزو دامنه نیست.",
        "سیستم‌های حیاتی و یکپارچه‌سازی‌های بسیار پیچیده جداگانه بررسی می‌شوند.",
      ],
      note: "اگر نیاز بیرون از این محدوده باشد، پیش از شروع صریح گفته می‌شود.",
    },
    process: {
      title: "مسیر کار",
      intro: "چهار مرحلهٔ ثابت؛ اندازهٔ هر مرحله به پروژه بستگی دارد.",
      items: [
        {
          title: "شناخت",
          description: "مسئله، مخاطب، محدودیت‌ها و معیار موفقیت را روشن می‌کنیم.",
        },
        {
          title: "دامنه",
          description: "صفحه‌ها، خروجی‌ها، موارد خارج از دامنه و وابستگی‌ها نوشته می‌شوند.",
        },
        {
          title: "ساخت",
          description: "طراحی و پیاده‌سازی در محیط قابل بازبینی، با بازخورد مرحله‌ای.",
        },
        {
          title: "تحویل",
          description: "آزمایش، مستندسازی، انتقال دسترسی و راهنمای استفاده.",
        },
      ],
    },
    faq: {
      title: "پرسش‌های رایج",
      items: [
        {
          question: "متن سایت را شما می‌نویسید؟",
          answer:
            "ساختار و پیش‌نویس را می‌توانیم آماده کنیم؛ تأیید نهایی محتوا، ادعاها و لحن با تیم شماست.",
        },
        {
          question: "سایت فعلی را می‌توان بازطراحی کرد؟",
          answer:
            "بله، اگر ساختار فعلی قابل نگهداری باشد. دامنهٔ بازطراحی محدود تعیین می‌شود.",
        },
        {
          question: "چقدر طول می‌کشد؟",
          answer:
            "به تعداد صفحه‌ها، محتوا و بازخوردها بستگی دارد. زمان‌بندی مرحله‌ای در پیشنهاد می‌آید.",
        },
        {
          question: "پشتیبانی بعد از تحویل دارید؟",
          answer:
            "فقط در چارچوب توافق مشخص؛ پشتیبانی نامحدود یا رایگان تعهد پیش‌فرض نیست.",
        },
      ],
    },
    related: {
      title: "مسیرهای مرتبط",
      items: [
        { label: "پنل اختصاصی و نرم‌افزار", page: "service-apps" },
        { label: "اتوماسیون و یکپارچه‌سازی", page: "service-automation" },
        { label: "اجرای محدود رشد دیجیتال", page: "service-growth" },
      ],
    },
    closing: {
      title: "سایت فعلی‌تان چه چیزی را روشن نمی‌کند؟",
      body: "یک توضیح کوتاه از مسئله و مخاطب کافی است تا بگوییم این کار در دامنهٔ PBS قرار می‌گیرد یا نه.",
      action: {
        label: "دربارهٔ پروژه صحبت کنیم",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-apps": {
    meta: {
      title: "پنل اختصاصی و نرم‌افزار کسب‌وکار | PBS",
      description:
        "طراحی و ساخت پنل اختصاصی، داشبورد و ابزار داخلی با نقش‌ها، گردش‌کار و گزارش مشخص. دامنهٔ محدود و تحویل مرحله‌ای، بدون وعدهٔ سیستم‌های حیاتی.",
    },
    breadcrumb: {
      label: "مسیر صفحه",
      home: "خانه",
      current: "پنل و نرم‌افزار",
    },
    eyebrow: "پنل و نرم‌افزار",
    headline: {
      lead: "پنل اختصاصی برای ",
      accent: "کار روزمرهٔ تیم",
      tail: ".",
    },
    intro:
      "وقتی کار بین اکسل، ایمیل و پیام پخش می‌شود، یک ابزار داخلی ساده می‌تواند وضعیت و مسئولیت را روشن کند.",
    problem: {
      title: "کار بین اکسل، ایمیل و پیام گم می‌شود.",
      body: "وقتی وضعیت درخواست‌ها در چند ابزار پخش است، پیگیری به حافظهٔ افراد وابسته می‌شود. یک پنل داخلی ساده می‌تواند وضعیت، مسئولیت و قدم بعدی را در یک جا نشان دهد.",
      signals: [
        "هر درخواست در یک کانال متفاوت ثبت می‌شود.",
        "گزارش‌ها دستی ساخته می‌شوند و با واقعیت فاصله دارند.",
        "دسترسی و نقش‌ها مشخص نیست.",
      ],
    },
    scope: {
      title: "چه چیزی ساخته می‌شود؟",
      intro:
        "دامنه بر اساس یک گردش‌کار مشخص تعیین می‌شود، نه فهرست بی‌پایان قابلیت‌ها.",
      items: [
        {
          title: "پنل درخواست",
          description: "ثبت، وضعیت، مسئول و تاریخ‌های مهم.",
        },
        {
          title: "داشبورد",
          description: "نمای فشرده از کارهای باز، تأخیرها و شاخص‌های توافق‌شده.",
        },
        {
          title: "ابزار داخلی",
          description: "یک گردش‌کار مشخص برای تیم، بدون پیچیدگی اضافه.",
        },
        {
          title: "نقش و دسترسی",
          description: "تعیین اینکه چه کسی چه چیزی را می‌بیند و تغییر می‌دهد.",
        },
      ],
    },
    deliverables: {
      title: "خروجی‌ها",
      items: [
        "پنل واکنش‌گرا",
        "نقش‌ها و دسترسی",
        "گردش‌کار و گزارش",
        "مستندسازی استفاده",
      ],
      note: "فهرست نهایی و موارد خارج از دامنه در پیشنهاد نوشته می‌شود.",
    },
    boundaries: {
      title: "مرزهای پیش‌فرض",
      items: [
        "سیستم‌های حیاتی، مالی حساس و پشتیبانی ۲۴/۷ جزو دامنهٔ پیش‌فرض نیستند.",
        "مهاجرت دادهٔ پیچیده جداگانه بررسی می‌شود.",
        "اپلیکیشن موبایل بومی تعهد پیش‌فرض نیست.",
      ],
      note: "نیاز امنیتی و الزامات داده پیش از شروع بررسی می‌شود.",
    },
    process: {
      title: "مسیر کار",
      intro: "چهار مرحلهٔ ثابت؛ اندازهٔ هر مرحله به پروژه بستگی دارد.",
      items: [
        {
          title: "شناخت",
          description: "گردش‌کار فعلی، نقش‌ها، داده و محدودیت‌ها را روشن می‌کنیم.",
        },
        {
          title: "دامنه",
          description: "خروجی‌ها، موارد خارج از دامنه و وابستگی‌ها نوشته می‌شوند.",
        },
        {
          title: "ساخت",
          description: "پیاده‌سازی مرحله‌ای در محیط قابل بازبینی، با بازخورد تیم.",
        },
        {
          title: "تحویل",
          description: "آزمایش، مستندسازی، انتقال دسترسی و راهنمای استفاده.",
        },
      ],
    },
    faq: {
      title: "پرسش‌های رایج",
      items: [
        {
          question: "اپلیکیشن موبایل هم می‌سازید؟",
          answer:
            "دامنهٔ پیش‌فرض وب است. اپ موبایل فقط اگر در دامنهٔ پروژه و پس از بررسی فنی توافق شود.",
        },
        {
          question: "به سیستم‌های ما وصل می‌شود؟",
          answer:
            "اگر دسترسی و API موجود باشد، اتصال بررسی می‌شود. دسترسی طرف سوم پیش از شروع ارزیابی می‌شود.",
        },
        {
          question: "کد و دسترسی بعد از تحویل چه می‌شود؟",
          answer:
            "تحویل، مالکیت و دسترسی در توافق نوشته می‌شود؛ بدون توافق روشن، تعهد اضافه نمی‌کنیم.",
        },
        {
          question: "داده‌های حساس را نگه می‌دارید؟",
          answer:
            "سیستم‌های مالی حساس و داده‌های پرخطر جزو دامنهٔ پیش‌فرض نیستند. نیاز امنیتی پیش از شروع بررسی می‌شود.",
        },
      ],
    },
    related: {
      title: "مسیرهای مرتبط",
      items: [
        { label: "وب‌سایت و لندینگ", page: "service-websites" },
        { label: "اتوماسیون و یکپارچه‌سازی", page: "service-automation" },
        { label: "اجرای محدود رشد دیجیتال", page: "service-growth" },
      ],
    },
    closing: {
      title: "کدام کار روزمره بیشترین زمان را می‌گیرد؟",
      body: "یک توضیح کوتاه از گردش‌کار فعلی و نقطهٔ درد کافی است تا دامنهٔ ممکن را بررسی کنیم.",
      action: {
        label: "دربارهٔ پروژه صحبت کنیم",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-automation": {
    meta: {
      title: "اتوماسیون و یکپارچه‌سازی فرایند | PBS",
      description:
        "اتصال ابزارها و خودکارسازی گردش‌کارهای مشخص، با بررسی دسترسی، پایداری و مسیر بازیابی. مناسب تیم‌هایی که کار تکراری و خطای دستی را کم می‌کنند.",
    },
    breadcrumb: {
      label: "مسیر صفحه",
      home: "خانه",
      current: "اتوماسیون",
    },
    eyebrow: "اتوماسیون و یکپارچه‌سازی",
    headline: {
      lead: "کار تکراری را از ",
      accent: "مسیر تیم حذف کنید",
      tail: ".",
    },
    intro:
      "اتوماسیون زمانی ارزش دارد که مسیر، دسترسی و رفتار در خطا روشن باشد. اتصال بیشتر همیشه بهتر نیست.",
    problem: {
      title: "کار تکراری، زمان تیم را می‌خورد.",
      body: "ورود دوبارهٔ داده، یادآوری دستی و گزارش‌های تکراری هم زمان می‌برند و هم خطا ایجاد می‌کنند. اتوماسیون زمانی ارزش دارد که مسیر، دسترسی و رفتار در خطا روشن باشد.",
      signals: [
        "یک داده در چند ابزار کپی می‌شود.",
        "یادآوری‌ها و گزارش‌ها دستی هستند.",
        "وقتی یک اتصال قطع می‌شود، مسیر بازیابی مشخص نیست.",
      ],
    },
    scope: {
      title: "چه چیزی ساخته می‌شود؟",
      intro:
        "دامنه بر اساس یک جریان مشخص و قابل نگهداری تعیین می‌شود.",
      items: [
        {
          title: "اتصال ابزارها",
          description: "API یا اتصال موجود، با بررسی دسترسی و محدودیت‌ها.",
        },
        {
          title: "گردش‌کار مشخص",
          description: "یک جریان تعریف‌شده، نه زنجیرهٔ بی‌پایان.",
        },
        {
          title: "اعلان و گزارش",
          description: "پیام، یادآوری و گزارش خودکار در نقاط مشخص.",
        },
        {
          title: "مسیر خطا",
          description: "تشخیص خطا، ثبت وضعیت و راه بازیابی.",
        },
      ],
    },
    deliverables: {
      title: "خروجی‌ها",
      items: [
        "اتصال API یا ابزار",
        "اعلان و گزارش خودکار",
        "مسیر خطا و بازیابی",
        "مستندسازی گردش‌کار",
      ],
      note: "فهرست نهایی و موارد خارج از دامنه در پیشنهاد نوشته می‌شود.",
    },
    boundaries: {
      title: "مرزهای پیش‌فرض",
      items: [
        "پایداری و دسترسی طرف سوم پیش از شروع ارزیابی می‌شود.",
        "پشتیبانی ۲۴/۷ و نظارت شبانه‌روزی تعهد پیش‌فرض نیست.",
        "اتوماسیون بدون مسیر بازیابی تحویل نمی‌شود.",
      ],
      note: "اگر نیاز به نظارت حیاتی باشد، بیرون از این دامنه بررسی می‌شود.",
    },
    process: {
      title: "مسیر کار",
      intro: "چهار مرحلهٔ ثابت؛ اندازهٔ هر مرحله به پروژه بستگی دارد.",
      items: [
        {
          title: "شناخت",
          description: "جریان فعلی، ابزارها، دسترسی‌ها و نقاط خطا را روشن می‌کنیم.",
        },
        {
          title: "دامنه",
          description: "گام‌های خودکار، موارد خارج از دامنه و وابستگی‌ها نوشته می‌شوند.",
        },
        {
          title: "ساخت",
          description: "اتصال و آزمایش در محیط قابل بازبینی، با سناریوهای خطا.",
        },
        {
          title: "تحویل",
          description: "مستندسازی، انتقال دسترسی و راهنمای نگهداری.",
        },
      ],
    },
    faq: {
      title: "پرسش‌های رایج",
      items: [
        {
          question: "با چه ابزارهایی کار می‌کنید؟",
          answer:
            "بستگی به دسترسی و API دارد. فهرست ابزارها در شناخت اولیه بررسی می‌شود.",
        },
        {
          question: "اگر API تغییر کند چه می‌شود؟",
          answer:
            "تغییرات طرف سوم خارج از کنترل ماست؛ اثر آن و مسیر نگهداری در توافق مشخص می‌شود.",
        },
        {
          question: "نظارت ۲۴/۷ دارید؟",
          answer:
            "نه در دامنهٔ پیش‌فرض. اگر نیاز حیاتی باشد، خارج از این دامنه بررسی می‌شود.",
        },
        {
          question: "چطور از خطا مطمئن می‌شویم؟",
          answer:
            "مسیر خطا، ثبت وضعیت و بازیابی بخشی از خروجی است. بدون این مسیر، اتوماسیون تحویل نمی‌شود.",
        },
      ],
    },
    related: {
      title: "مسیرهای مرتبط",
      items: [
        { label: "پنل اختصاصی و نرم‌افزار", page: "service-apps" },
        { label: "وب‌سایت و لندینگ", page: "service-websites" },
        { label: "اجرای محدود رشد دیجیتال", page: "service-growth" },
      ],
    },
    closing: {
      title: "کدام کار را می‌شود حذف کرد؟",
      body: "یک توضیح کوتاه از جریان فعلی و ابزارها کافی است تا امکان و محدودیت‌ها را بررسی کنیم.",
      action: {
        label: "دربارهٔ پروژه صحبت کنیم",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-growth": {
    meta: {
      title: "اجرای محدود لندینگ و رشد دیجیتال | PBS",
      description:
        "اجرای محدود لندینگ، فرم کوتاه و اتصال پیگیری، با معیار موفقیت توافق‌شده. مدیریت کامل کمپین، تولید محتوای مستمر و تضمین فروش در دامنهٔ پیش‌فرض نیست.",
    },
    breadcrumb: {
      label: "مسیر صفحه",
      home: "خانه",
      current: "رشد دیجیتال",
    },
    eyebrow: "رشد دیجیتال",
    headline: {
      lead: "یک لندینگ، یک مسیر ",
      accent: "قابل اندازه‌گیری",
      tail: ".",
    },
    intro:
      "لندینگ بدون پیام واحد، فرم بدون پیگیری و کمپین بدون معیار موفقیت، تلاش را پخش می‌کند. اجرای محدود روی همین نقاط تمرکز دارد.",
    problem: {
      title: "ترافیک هست، اما مسیر سرنخ روشن نیست.",
      body: "لندینگ بدون پیام واحد، فرم بدون پیگیری و کمپین بدون معیار موفقیت، تلاش را پخش می‌کند. اجرای محدود روی همین نقاط تمرکز دارد.",
      signals: [
        "صفحهٔ فرود چند پیام و چند اقدام دارد.",
        "فرم کوتاه است، اما پیگیری مشخص نیست.",
        "معیار موفقیت پیش از شروع نوشته نشده است.",
      ],
    },
    scope: {
      title: "چه چیزی ساخته می‌شود؟",
      intro:
        "دامنه فقط شامل چیزهایی است که می‌توان اجرا و اندازه‌گیری کرد.",
      items: [
        {
          title: "لندینگ متمرکز",
          description: "یک پیام، یک مخاطب و یک اقدام اصلی.",
        },
        {
          title: "فرم کوتاه",
          description: "کمترین دادهٔ لازم برای شروع گفتگو.",
        },
        {
          title: "اتصال پیگیری",
          description: "مسیر تماس یا ابزار پیگیری، در حد توافق.",
        },
        {
          title: "معیار موفقیت",
          description: "یک شاخص روشن که قابل اندازه‌گیری باشد.",
        },
      ],
    },
    deliverables: {
      title: "خروجی‌ها",
      items: [
        "لندینگ کمپین",
        "فرم جذب سرنخ",
        "اتصال پیگیری",
        "معیار موفقیت توافق‌شده",
      ],
      note: "فهرست نهایی و موارد خارج از دامنه در پیشنهاد نوشته می‌شود.",
    },
    boundaries: {
      title: "مرزهای پیش‌فرض",
      items: [
        "مدیریت کامل کمپین و تولید مستمر محتوا جزو دامنه نیست.",
        "تضمین فروش، رتبه یا نرخ تبدیل ارائه نمی‌شود.",
        "ابزار تبلیغاتی و بودجهٔ رسانه جدا از دامنهٔ اجراست.",
      ],
      note: "اگر نیاز بیرون از این محدوده باشد، پیش از شروع صریح گفته می‌شود.",
    },
    process: {
      title: "مسیر کار",
      intro: "چهار مرحلهٔ ثابت؛ اندازهٔ هر مرحله به پروژه بستگی دارد.",
      items: [
        {
          title: "شناخت",
          description: "مخاطب، پیام، مسیر فعلی و معیار موفقیت را روشن می‌کنیم.",
        },
        {
          title: "دامنه",
          description: "صفحه، فرم، اتصال‌ها و موارد خارج از دامنه نوشته می‌شوند.",
        },
        {
          title: "ساخت",
          description: "لندینگ و اتصال پیگیری در محیط قابل بازبینی ساخته می‌شوند.",
        },
        {
          title: "تحویل",
          description: "آزمایش، مستندسازی و تحویل معیار سنجش.",
        },
      ],
    },
    faq: {
      title: "پرسش‌های رایج",
      items: [
        {
          question: "تبلیغات هم اجرا می‌کنید؟",
          answer:
            "دامنهٔ پیش‌فرض اجرای محدود است، نه مدیریت کامل کمپین. اگر نیاز بزرگ‌تر باشد، صریح گفته می‌شود.",
        },
        {
          question: "چه معیاری برای موفقیت؟",
          answer:
            "پیش از شروع یک معیار قابل اندازه‌گیری توافق می‌شود؛ بدون آن، اجرا شروع نمی‌شود.",
        },
        {
          question: "نتیجه تضمینی دارید؟",
          answer: "نه. رتبه، فروش یا نرخ تبدیل تضمین نمی‌شود.",
        },
        {
          question: "چقدر طول می‌کشد؟",
          answer:
            "به دامنه، محتوا و اتصال‌ها بستگی دارد؛ زمان‌بندی در پیشنهاد می‌آید.",
        },
      ],
    },
    related: {
      title: "مسیرهای مرتبط",
      items: [
        { label: "وب‌سایت و لندینگ", page: "service-websites" },
        { label: "پنل اختصاصی و نرم‌افزار", page: "service-apps" },
        { label: "اتوماسیون و یکپارچه‌سازی", page: "service-automation" },
      ],
    },
    closing: {
      title: "کدام صفحه باید بهتر کار کند؟",
      body: "یک توضیح کوتاه از مخاطب، پیام و اقدام فعلی کافی است تا دامنهٔ اجرای محدود را بررسی کنیم.",
      action: {
        label: "دربارهٔ پروژه صحبت کنیم",
        href: "#contact",
        variant: "primary",
      },
    },
  },
};

const en: Record<ServicePageKey, ServicePageContent> = {
  "service-websites": {
    meta: {
      title: "B2B Website & Landing Page Design | PBS",
      description:
        "PBS designs and builds B2B websites and landing pages with a clear message, a deliberate contact path and content the team can maintain.",
    },
    breadcrumb: {
      label: "Breadcrumb",
      home: "Home",
      current: "Website and landing page design",
    },
    eyebrow: "Websites and landing pages",
    headline: {
      lead: "A website that explains ",
      accent: "what you do and what happens next",
      tail: ".",
    },
    intro:
      "Your site has a few seconds to explain the offer, who it is for and the next step. Design without those three is only decoration.",
    problem: {
      title: "The site exists, but the message and contact path do not.",
      body: "Many company sites list services without saying who they are for, what problem they solve and what a visitor should do next. The result is traffic without a clear path to a conversation.",
      signals: [
        "The homepage reads like a service list, not a clear offer.",
        "Contact routes are scattered and the next step is unclear.",
        "The team cannot update copy or structure without technical help.",
      ],
    },
    scope: {
      title: "What gets built",
      intro:
        "Scope follows the decisions the project actually needs, not a long feature list.",
      items: [
        {
          title: "Company website",
          description: "Page structure, core message, service presentation and contact path.",
        },
        {
          title: "Campaign landing page",
          description: "One focused page with one message and one primary action.",
        },
        {
          title: "Focused redesign",
          description: "Improve structure, readability and contact flow without rebuilding everything.",
        },
        {
          title: "Content structure",
          description: "Decide what each page must say, and what it does not need.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Responsive pages for mobile and desktop",
        "Contact path and form where needed",
        "Content panel where agreed",
        "Launch and handover guide",
      ],
      note: "The final list and exclusions are written into the proposal.",
    },
    boundaries: {
      title: "Default boundaries",
      items: [
        "Search ranking, sales and campaign results are not guaranteed.",
        "Ongoing content production and full campaign management are out of scope.",
        "Critical systems and highly complex integrations are assessed separately.",
      ],
      note: "If your need sits outside this boundary, we say so before work starts.",
    },
    process: {
      title: "How it runs",
      intro: "Four fixed stages; the size of each depends on the project.",
      items: [
        {
          title: "Discover",
          description: "Clarify the problem, audience, constraints and success criteria.",
        },
        {
          title: "Scope",
          description: "Write down pages, deliverables, exclusions and dependencies.",
        },
        {
          title: "Build",
          description: "Design and implement in a reviewable environment with staged feedback.",
        },
        {
          title: "Handover",
          description: "Test, document, transfer access and provide a usage guide.",
        },
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        {
          question: "Do you write the website copy?",
          answer:
            "We can prepare the structure and a first draft. Final claims, tone and approval stay with your team.",
        },
        {
          question: "Can you redesign an existing site?",
          answer:
            "Yes, if the current structure is maintainable. The redesign is kept to a defined scope.",
        },
        {
          question: "How long does it take?",
          answer:
            "It depends on the number of pages, content and feedback. A staged timeline is included in the proposal.",
        },
        {
          question: "Do you support the site after launch?",
          answer:
            "Only inside a defined arrangement. Unlimited or free support is not the default commitment.",
        },
      ],
    },
    related: {
      title: "Related paths",
      items: [
        { label: "Business panels and software", page: "service-apps" },
        { label: "Automation and integrations", page: "service-automation" },
        { label: "Scoped digital growth execution", page: "service-growth" },
      ],
    },
    closing: {
      title: "What does your current site fail to make clear?",
      body: "A short description of the problem and audience is enough for us to say whether this fits PBS.",
      action: {
        label: "Discuss a project",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-apps": {
    meta: {
      title: "Custom Business Panels & Software | PBS",
      description:
        "PBS builds scoped business panels, dashboards and internal tools with explicit roles, workflow and reporting, plus a documented handover.",
    },
    breadcrumb: {
      label: "Breadcrumb",
      home: "Home",
      current: "Business panels and software",
    },
    eyebrow: "Business panels and software",
    headline: {
      lead: "An internal tool that makes ",
      accent: "the work visible",
      tail: ".",
    },
    intro:
      "When work is spread across spreadsheets, email and chat, a small internal tool can make status and ownership clear.",
    problem: {
      title: "Work is lost between spreadsheets, email and chat.",
      body: "When request status lives in several tools, follow-up depends on memory. A focused internal panel can show status, ownership and the next step in one place.",
      signals: [
        "Each request is recorded in a different channel.",
        "Reports are assembled by hand and drift from reality.",
        "Roles and access are not explicit.",
      ],
    },
    scope: {
      title: "What gets built",
      intro:
        "Scope is built around one defined workflow, not an endless feature list.",
      items: [
        {
          title: "Request panel",
          description: "Intake, status, owner and important dates.",
        },
        {
          title: "Dashboard",
          description: "A compact view of open work, delays and agreed indicators.",
        },
        {
          title: "Internal tool",
          description: "One clear workflow for the team, without unnecessary complexity.",
        },
        {
          title: "Roles and access",
          description: "Define who can see and change what.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Responsive panel",
        "Roles and access",
        "Workflow and reporting",
        "Usage documentation",
      ],
      note: "The final list and exclusions are written into the proposal.",
    },
    boundaries: {
      title: "Default boundaries",
      items: [
        "Critical systems, sensitive financial tools and 24/7 support are out of scope.",
        "Complex data migration is assessed separately.",
        "A native mobile app is not a default commitment.",
      ],
      note: "Security and data requirements are reviewed before work starts.",
    },
    process: {
      title: "How it runs",
      intro: "Four fixed stages; the size of each depends on the project.",
      items: [
        {
          title: "Discover",
          description: "Clarify the current workflow, roles, data and constraints.",
        },
        {
          title: "Scope",
          description: "Write down deliverables, exclusions and dependencies.",
        },
        {
          title: "Build",
          description: "Implement in stages in a reviewable environment with team feedback.",
        },
        {
          title: "Handover",
          description: "Test, document, transfer access and provide a usage guide.",
        },
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        {
          question: "Do you build mobile apps?",
          answer:
            "The default scope is web. A mobile app is considered only when it is explicitly in scope and the technical review supports it.",
        },
        {
          question: "Can it connect to our systems?",
          answer:
            "If access and an API exist, the integration is assessed. Third-party access is reviewed before work starts.",
        },
        {
          question: "What happens to the code and access after handover?",
          answer:
            "Handover, ownership and access are written into the agreement. We do not add commitments without a clear agreement.",
        },
        {
          question: "Do you hold sensitive data?",
          answer:
            "Sensitive financial systems and high-risk data are outside the default scope. Security requirements are reviewed first.",
        },
      ],
    },
    related: {
      title: "Related paths",
      items: [
        { label: "Websites and landing pages", page: "service-websites" },
        { label: "Automation and integrations", page: "service-automation" },
        { label: "Scoped digital growth execution", page: "service-growth" },
      ],
    },
    closing: {
      title: "Which daily task takes the most time?",
      body: "A short description of the current workflow and the pain point is enough to assess a possible scope.",
      action: {
        label: "Discuss a project",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-automation": {
    meta: {
      title: "Workflow Automation & Integrations | PBS",
      description:
        "PBS connects tools and automates defined workflows after checking access, reliability and the recovery path. Clear scope, documented handover.",
    },
    breadcrumb: {
      label: "Breadcrumb",
      home: "Home",
      current: "Automation and integrations",
    },
    eyebrow: "Automation and integrations",
    headline: {
      lead: "Less repetitive work, ",
      accent: "one connected flow",
      tail: ".",
    },
    intro:
      "Automation is useful when the path, access and failure behaviour are clear. More connections are not always better.",
    problem: {
      title: "Repetitive work is consuming the team.",
      body: "Duplicate entry, manual reminders and repeated reports take time and create errors. Automation is useful when the path, access and failure behaviour are clear.",
      signals: [
        "The same data is copied into several tools.",
        "Reminders and reports are manual.",
        "When a connection fails, there is no defined recovery path.",
      ],
    },
    scope: {
      title: "What gets built",
      intro:
        "Scope follows one defined, maintainable flow.",
      items: [
        {
          title: "Tool connection",
          description: "An existing API or connection, with access and limits checked.",
        },
        {
          title: "Defined workflow",
          description: "One specified flow, not an endless chain.",
        },
        {
          title: "Notifications and reports",
          description: "Messages, reminders and automated reports at defined points.",
        },
        {
          title: "Failure path",
          description: "Error detection, status recording and a recovery route.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "API or tool connection",
        "Notifications and automated reports",
        "Error and recovery path",
        "Workflow documentation",
      ],
      note: "The final list and exclusions are written into the proposal.",
    },
    boundaries: {
      title: "Default boundaries",
      items: [
        "Third-party reliability and access are assessed before work starts.",
        "24/7 support and round-the-clock monitoring are not default commitments.",
        "Automation is not handed over without a recovery path.",
      ],
      note: "If critical monitoring is required, it is assessed outside this scope.",
    },
    process: {
      title: "How it runs",
      intro: "Four fixed stages; the size of each depends on the project.",
      items: [
        {
          title: "Discover",
          description: "Clarify the current flow, tools, access and failure points.",
        },
        {
          title: "Scope",
          description: "Write down automated steps, exclusions and dependencies.",
        },
        {
          title: "Build",
          description: "Connect and test in a reviewable environment with failure scenarios.",
        },
        {
          title: "Handover",
          description: "Document, transfer access and provide a maintenance guide.",
        },
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        {
          question: "Which tools do you work with?",
          answer:
            "It depends on access and the API. The tool list is reviewed during initial discovery.",
        },
        {
          question: "What if an API changes?",
          answer:
            "Third-party changes are outside our control. Their impact and the maintenance path are written into the agreement.",
        },
        {
          question: "Do you provide 24/7 monitoring?",
          answer:
            "Not in the default scope. If critical monitoring is required, it is assessed outside this scope.",
        },
        {
          question: "How do you handle errors?",
          answer:
            "The failure path, status recording and recovery are part of the deliverable. Automation is not handed over without them.",
        },
      ],
    },
    related: {
      title: "Related paths",
      items: [
        { label: "Business panels and software", page: "service-apps" },
        { label: "Websites and landing pages", page: "service-websites" },
        { label: "Scoped digital growth execution", page: "service-growth" },
      ],
    },
    closing: {
      title: "Which task could be removed?",
      body: "A short description of the current flow and tools is enough to assess the possible automation and its limits.",
      action: {
        label: "Discuss a project",
        href: "#contact",
        variant: "primary",
      },
    },
  },
  "service-growth": {
    meta: {
      title: "Scoped Digital Growth Execution | PBS",
      description:
        "PBS builds a focused landing page, short form and follow-up connection with an agreed success measure. Full campaign management is out of scope.",
    },
    breadcrumb: {
      label: "Breadcrumb",
      home: "Home",
      current: "Digital growth execution",
    },
    eyebrow: "Digital growth execution",
    headline: {
      lead: "A landing page with ",
      accent: "a measurable next step",
      tail: ".",
    },
    intro:
      "A landing page without one message, a form without follow-up and a campaign without a success measure spread the effort. Scoped execution focuses on those points.",
    problem: {
      title: "There is traffic, but the lead path is unclear.",
      body: "A landing page without one message, a form without follow-up and a campaign without a success measure spread the effort. Scoped execution focuses on those points.",
      signals: [
        "The landing page has several messages and several actions.",
        "The form is short, but follow-up is undefined.",
        "The success measure was not written before launch.",
      ],
    },
    scope: {
      title: "What gets built",
      intro:
        "Scope contains only what can be delivered and measured.",
      items: [
        {
          title: "Focused landing page",
          description: "One message, one audience and one primary action.",
        },
        {
          title: "Short form",
          description: "The minimum information needed to start a conversation.",
        },
        {
          title: "Follow-up connection",
          description: "A contact path or follow-up tool, within the agreed boundary.",
        },
        {
          title: "Success measure",
          description: "One clear indicator that can be measured.",
        },
      ],
    },
    deliverables: {
      title: "Deliverables",
      items: [
        "Campaign landing page",
        "Lead capture form",
        "Follow-up connection",
        "Agreed success measure",
      ],
      note: "The final list and exclusions are written into the proposal.",
    },
    boundaries: {
      title: "Default boundaries",
      items: [
        "Full campaign management and ongoing content production are out of scope.",
        "Sales, ranking or conversion rates are not guaranteed.",
        "Advertising tools and media budget sit outside the execution scope.",
      ],
      note: "If your need sits outside this boundary, we say so before work starts.",
    },
    process: {
      title: "How it runs",
      intro: "Four fixed stages; the size of each depends on the project.",
      items: [
        {
          title: "Discover",
          description: "Clarify the audience, message, current path and success measure.",
        },
        {
          title: "Scope",
          description: "Write down the page, form, connections and exclusions.",
        },
        {
          title: "Build",
          description: "Build the landing page and follow-up connection in a reviewable environment.",
        },
        {
          title: "Handover",
          description: "Test, document and hand over the success measure.",
        },
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        {
          question: "Do you run advertising campaigns?",
          answer:
            "The default scope is limited execution, not full campaign management. A larger need is stated clearly and assessed separately.",
        },
        {
          question: "How is success measured?",
          answer:
            "One measurable indicator is agreed before work starts. Without it, execution does not start.",
        },
        {
          question: "Do you guarantee results?",
          answer:
            "No. Ranking, sales and conversion rates are not guaranteed.",
        },
        {
          question: "How long does it take?",
          answer:
            "It depends on scope, content and connections. A timeline is included in the proposal.",
        },
      ],
    },
    related: {
      title: "Related paths",
      items: [
        { label: "Websites and landing pages", page: "service-websites" },
        { label: "Business panels and software", page: "service-apps" },
        { label: "Automation and integrations", page: "service-automation" },
      ],
    },
    closing: {
      title: "Which page needs to work better?",
      body: "A short description of the audience, message and current action is enough to assess a scoped execution.",
      action: {
        label: "Discuss a project",
        href: "#contact",
        variant: "primary",
      },
    },
  },
};

export const servicePages = { fa, en } as const;
