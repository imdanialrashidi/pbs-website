# استفاده از لوگو در سایت | Web usage

## فایل‌ها

- لوگوی کامل با نام: `pbs-logo-tagline-dark.svg` / `pbs-logo-tagline-light.svg`
- لوگوی افقی برای هدر فشرده: `pbs-logo-primary-dark.svg` (روی تیره) / `pbs-logo-on-light.svg` (روی روشن)
- فاوآیکن: `../Favicon/favicon.ico` و `../Favicon/favicon.svg`

## نمونه HTML

```html
<!-- فاوآیکن -->
<link rel="icon" href="/assets/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon-180.png">

<!-- لوگو با نام کامل؛ همیشه نسبت را حفظ کنید -->
<a href="/" class="pbs-brand" aria-label="PBS | Practical Business Solutions">
  <img
    src="/assets/pbs-logo-tagline-dark.svg"
    alt="PBS | Practical Business Solutions"
    width="240" height="106"
    decoding="async">
</a>
```

```css
.pbs-brand {
  display: inline-flex;
  align-items: center;
  /* فضای آزاد: حداقل نصف ارتفاع حروف */
  padding: 12px 16px;
}

.pbs-brand img {
  display: block;
  width: clamp(160px, 18vw, 240px);
  height: auto; /* نسبت تصویر هرگز تغییر نکند */
}
```

## نکات

- برای هدر تیره از نسخه `dark` و برای هدر روشن از نسخه `light` استفاده کنید.
- در حالت دارک/لایت سایت، تصویر لوگو را با CSS عوض کنید یا دو `<picture>` مستقل بگذارید.
- `width` و `height` واقعی را در HTML بنویسید تا Layout Shift رخ ندهد؛ سپس با CSS عرض را کنترل کنید.
- حداقل عرض دیجیتال ۱۲۰ پیکسل است. در موبایل لوگو را کوچک‌تر از این نکنید.
- فاوآیکن را از فایل `.ico` چنداندازه استفاده کنید، نه از لوگوی کامل.
- لوگو را در `background-image` نگذارید؛ برای دسترسی‌پذیری و Alt از `<img>` استفاده کنید.
- روی عکس، لوگو را مستقیم نگذارید؛ از یک لایه Navy با شفافیت یا ناحیه آرام و تیره تصویر استفاده کنید.

## OG / شبکه‌های اجتماعی

```html
<meta property="og:image" content="https://example.com/assets/pbs-og-image-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```

`example.com` را با دامنه واقعی جایگزین کنید. هیچ آدرس یا ادعای غیرواقعی در فایل‌ها جاسازی نشده است.
