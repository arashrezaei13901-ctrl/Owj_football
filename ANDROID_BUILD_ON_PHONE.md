# ساخت APK برای OWJ فقط با گوشی

1. این پروژه را در یک GitHub repository آپلود کن.
2. در GitHub به Settings > Variables and secrets > Actions برو و یک Repository variable بساز:
   Name: OWJ_API_BASE_URL
   Value: آدرس واقعی سرور OWJ، مثلا https://your-server.example.com
3. به Actions برو.
4. Workflow به نام Build OWJ Android APK را انتخاب کن.
5. روی Run workflow بزن.
6. بعد از اتمام، در بخش Artifacts فایل OWJ-debug-apk را دانلود کن.
7. داخل ZIP دانلودشده فایل app-debug.apk قرار دارد؛ آن را روی گوشی نصب کن.

نکته: اگر هنوز سرور آنلاین OWJ را راه‌اندازی نکرده‌ای، می‌توانی متغیر OWJ_API_BASE_URL را خالی بگذاری تا رابط برنامه باز شود، اما ثبت‌نام آنلاین/پنل مدیریت تا زمان راه‌اندازی سرور کار نخواهد کرد.
