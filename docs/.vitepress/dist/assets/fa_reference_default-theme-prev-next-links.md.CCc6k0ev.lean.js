import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.BZKEZbQD.js";const o=JSON.parse('{"title":"پیوندهای قبلی و بعدی","description":"","frontmatter":{},"headers":[],"relativePath":"fa/reference/default-theme-prev-next-links.md","filePath":"fa/reference/default-theme-prev-next-links.md","lastUpdated":null}'),t={name:"fa/reference/default-theme-prev-next-links.md"};function l(p,s,h,r,k,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="prev-next-links" tabindex="-1">پیوندهای قبلی و بعدی <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;پیوندهای قبلی و بعدی {#prev-next-links}&quot;">​</a></h1><p>شما می‌توانید متن و پیوند برای صفحات قبلی و بعدی را سفارشی‌سازی کنید (نمایش داده شده در پایین صفحه مستندات). این مفید است اگر می‌خواهید متن دیگری را در این قسمت نمایش دهید که با آنچه در نوار کناری دارید، متفاوت باشد. همچنین، ممکن است مفید باشد که فوتر را غیرفعال کنید یا به یک صفحه لینک کنید که در نوار کناری شما وجود ندارد.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>نوع: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>جزئیات:</p><p>مشخص می‌کند متن/لینکی که برای لینک به صفحه قبلی نمایش داده خواهد شد. اگر این را در frontmatter تنظیم نکنید، متن/لینک از تنظیمات نوار کناری استخراج خواهد شد.</p></li><li><p>مثال‌ها:</p><ul><li><p>برای فقط سفارشی‌سازی متن:</p><div class="language-yaml vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;شروع کنید | مارک‌داون&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>برای سفارشی‌سازی هم متن و هم لینک:</p><div class="language-yaml vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;مارک‌داون&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>برای مخفی کردن صفحه قبلی:</p><div class="language-yaml vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p>مشابه <code>prev</code> اما برای صفحه بعدی.</p>`,6)]))}const g=a(t,[["render",l]]);export{o as __pageData,g as default};
