

<h1 align="center">
  <a href="https://ui.dev">
    <img
      src="img/typescript-icon.png"
      alt="TypeScript" width="600" />
  </a>
</h1>
<h2 align="center">توضیحات برای تنظیمات در فایل tsconfig.json</h2>


### ✅ نحوه کار با فایل tsconfig.json
 با دستور زیر تایپ اسکریپت در سیستم نصب میشود: 
```shell
npm i -g typescript
```

 با دستور زیر میشه نسخه typescript رو متوجه شد: 
```shell
tsc -v
```
 با دستور زیر فایل ایجاد میشود: 
```shell
tsc --init
```
 با دستور زیر تبدیل ts به js انجام میشود: 
```shell
tsc
```

##

### ✅ لیست آپشن ها
[Target](https://github.com/golismero96/TypeScript#target) . [RootDir](https://github.com/golismero96/TypeScript#rootdir) . [SourceMap](https://github.com/golismero96/TypeScript#sourcemap) . [OutDir](https://github.com/golismero96/TypeScript#outdir) . [RemoveComments](https://github.com/golismero96/TypeScript#removecomments) . [NoUnusedLocals](https://github.com/golismero96/TypeScript#nounusedlocals) . [NoUnusedParameters](https://github.com/golismero96/TypeScript#nounusedparameters) . [NoImplicitReturns](https://github.com/golismero96/TypeScript#noimplicitreturns) . [StrictNullChecks](https://github.com/golismero96/TypeScript#strictnullchecks) . [AllowUnreachableCode](https://github.com/golismero96/TypeScript#allowUnreachableCode)
##

### ✅ توضیحات کامل برای آپشن ها

### Target
تایپ اسکریپت به کدام نسخه جاوااسکریپت تبدیل بشه.

### RootDir
تایپ اسکریپت ها رو از کدام دایرکتوری بخونه.

### SourceMap
هنگام تولید فایل جاوااسکریپت ، نسخه مپ هم برای مرورگرها تولید شود.

این فایل نقشه حاوی اطلاعاتی است که به ابزارهای توسعه و اشکال‌زدایی کمک می‌کند تا بتوانند کد جاوااسکریپت فشرده‌شده و مینیفای شده را بازسازی و خوانایی راحت‌تری در اشکال‌زدایی ارائه دهند.
به طور کلی، فایل نقشه (.map) برای اشکال‌زدایی، توسعه و پیدا کردن خطاها در کدهای جاوااسکریپت فشرده و مینیفای شده بسیار مفید است.

### OutDir
بعد از تبدیل به جاوااسکریپت ، در کدام دایرکتوری نوشته شود

### RemoveComments
حذف تمام کامنت های موجود در برنامه قبل از تبدیل شدن به جاوااسکریپت.

💢 کامنت ها از داخل کدهای تایپ اسکریپت حذف نمیشه

### NoUnusedLocals
اگر متغیری اعلام شود ولی استفاده نشود، اخطار میدهد.

### NoUnusedParameters
اگر به تابعی پارامتری ارسال شود ولی به هر دلیلی استفاده نشود، اخطار میدهد.

### NoImplicitReturns
اگر برای تابعی خروجی تعیین نشود، اخطار میدهد.


### StrictNullChecks
بعنوان مثال اگر تابعی منتظر متغیری با نوع رشته باشه ولی متغیری با نوع دیگر برایش ارسال شود، خطا میدهد.

برای عدم دریافت خطا، باید این آپشن رو برابر با false قرار داد
```shell
function greet(name: string) {
  console.log(name.toUpperCase());
}
greet(null);
```
البته دستور strict نیز این خطا را اعلام میکند ولی برای غیر فعال کردن از این آپشن استفاده میشود.

💢 غیر فعال کردن این اخطار اصلا توصیه نمیشه.



### AllowUnreachableCode
اگر کدی وجود داشته باشد که پروسه اجرا به آن قطعه کد نرسد با غیر فعال کردن این گزینه هشدار داده میشود که این کد قابل دسترسی نیست.
```shell
allowUnreachableCode: false // هشدار برای کدهای غیر قابل دسترسی 

allowUnreachableCode: true // عدم هشدار برای کدهای غیر قابل دسترسی
```

### NoImplicitOverride
اگر بخواهیم در کلاس فرزند یک متد از کلاس والد را override کنیم باید قبل از نام متد حتما کلمه override را بنویسیم.
```shell
noImplicitOverride: false // اگر override نوشته نشود خطایی داده نمیشود

noImplicitOverride: true // اگر override نوشته نشود خطا داده میشود
```
```shell
override get fullName(): string {
  return `Professor: ${super.fullName}`;
}
```
