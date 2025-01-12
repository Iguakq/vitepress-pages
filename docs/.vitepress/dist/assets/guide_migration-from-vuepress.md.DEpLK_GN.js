import{_ as a,c as t,a2 as o,o as i}from"./chunks/framework.BZKEZbQD.js";const p=JSON.parse('{"title":"Migration from VuePress","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-vuepress.md","filePath":"en/guide/migration-from-vuepress.md","lastUpdated":null}'),s={name:"guide/migration-from-vuepress.md"};function r(n,e,l,d,c,u){return i(),t("div",null,e[0]||(e[0]=[o(`<h1 id="migration-from-vuepress" tabindex="-1">Migration from VuePress <a class="header-anchor" href="#migration-from-vuepress" aria-label="Permalink to &quot;Migration from VuePress&quot;">​</a></h1><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;Config&quot;">​</a></h2><h3 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;">​</a></h3><p>The sidebar is no longer automatically populated from frontmatter. You can <a href="https://github.com/vuejs/vitepress/issues/572#issuecomment-1170116225" target="_blank" rel="noreferrer">read the frontmatter yourself</a> to dynamically populate the sidebar. <a href="https://github.com/vuejs/vitepress/issues/96" target="_blank" rel="noreferrer">Additional utilities for this</a> may be provided in the future.</p><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h2><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h3><p>Unlike VuePress, VitePress handles <a href="./asset-handling#base-url"><code>base</code></a> of your config automatically when you use static image.</p><p>Hence, now you can render images without <code>img</code> tag.</p><div class="language-diff vp-adaptive-theme"><button title="Copy code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- &lt;img :src=&quot;$withBase(&#39;/foo.png&#39;)&quot; alt=&quot;foo&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ ![foo](/foo.png)</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For dynamic images you still need <code>withBase</code> as shown in <a href="./asset-handling#base-url">Base URL guide</a>.</p></div><p>Use <code>&lt;img.*withBase\\(&#39;(.*)&#39;\\).*alt=&quot;([^&quot;]*)&quot;.*&gt;</code> regex to find and replace it with <code>![$2]($1)</code> to replace all the images with <code>![](...)</code> syntax.</p><hr><p>more to follow...</p>`,13)]))}const m=a(s,[["render",r]]);export{p as __pageData,m as default};
