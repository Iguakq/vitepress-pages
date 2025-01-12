import{_ as t,c as a,a2 as s,o as i}from"./chunks/framework.BZKEZbQD.js";const u=JSON.parse('{"title":"رابط خط فرمان","description":"","frontmatter":{},"headers":[],"relativePath":"fa/reference/cli.md","filePath":"fa/reference/cli.md","lastUpdated":null}'),d={name:"fa/reference/cli.md"};function o(r,e,n,l,c,h){return i(),a("div",null,e[0]||(e[0]=[s('<h1 id="command-line-interface" tabindex="-1">رابط خط فرمان <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;رابط خط فرمان {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev` {#vitepress-dev}&quot;">​</a></h2><p>شروع سرور توسعه ویت‌پرس با استفاده از دایرکتوری مشخص به عنوان ریشه. به طور پیش‌فرض از دایرکتوری فعلی استفاده می‌شود. دستور <code>dev</code> همچنین می‌تواند حذف شود زمانی که در دایرکتوری فعلی اجرا می‌شود.</p><h3 id="usage" tabindex="-1">استفاده <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;استفاده {#usage}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># شروع در دایرکتوری فعلی، بدون `dev`</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># شروع در زیردایرکتوری</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options" tabindex="-1">گزینه‌ها <a class="header-anchor" href="#options" aria-label="Permalink to &quot;گزینه‌ها {#options}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>گزینه</th><th>توضیحات</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>باز کردن مرورگر در زمان راه‌اندازی (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>تعیین پورت (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>مسیر پایه عمومی (پیش‌فرض: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>فعال‌سازی CORS</td></tr><tr><td><code>--strictPort</code></td><td>خروج در صورت استفاده از پورت مشخص شده (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>اجبار به نادیده گرفتن حافظه پنهان و بازسازی (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build` {#vitepress-build}&quot;">​</a></h2><p>ساخت سایت ویت‌پرس برای تولید نهایی.</p><h3 id="usage-1" tabindex="-1">استفاده <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;استفاده {#usage-1}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-1" tabindex="-1">گزینه‌ها <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;گزینه‌ها {#options-1}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>گزینه</th><th>توضیحات</th></tr></thead><tbody><tr><td><code>--mpa</code> (آزمایشی)</td><td>ساخت در حالت <a href="./../guide/mpa-mode">MPA</a> بدون هیدراسیون سمت مشتری (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>مسیر پایه عمومی (پیش‌فرض: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>هدف ترنسپایل (پیش‌فرض: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td>دایرکتوری خروجی نسبت به <strong>cwd</strong> (پیش‌فرض: <code>&lt;root&gt;/.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>فعال یا غیرفعال کردن فشرده‌سازی، یا تعیین فشرده‌سازی برای استفاده (پیش‌فرض: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>آستانه تبدیل پایه ۶۴ استاتیک به بایت (پیش‌فرض: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview` {#vitepress-preview}&quot;">​</a></h2><p>پیش‌نمایش محلی برای ساخت تولیدی را نمایش دهید.</p><h3 id="usage-2" tabindex="-1">استفاده <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;استفاده {#usage-2}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-2" tabindex="-1">گزینه‌ها <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;گزینه‌ها {#options-2}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>گزینه</th><th>توضیحات</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>مسیر پایه عمومی (پیش‌فرض: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>تعیین پورت (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init` {#vitepress-init}&quot;">​</a></h2><p>شروع <a href="./../guide/getting-started#setup-wizard">جادوگر راه‌اندازی</a> در دایرکتوری فعلی.</p><h3 id="usage-3" tabindex="-1">استفاده <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;استفاده {#usage-3}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="کپی کد" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div>',23)]))}const b=t(d,[["render",o]]);export{u as __pageData,b as default};