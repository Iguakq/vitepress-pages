import{_ as a,c as i,a2 as e,o as n}from"./chunks/framework.BZKEZbQD.js";const o=JSON.parse('{"title":"이전/다음 링크","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-prev-next-links.md","filePath":"ko/reference/default-theme-prev-next-links.md","lastUpdated":null}'),l={name:"ko/reference/default-theme-prev-next-links.md"};function t(p,s,h,r,k,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="prev-next-links" tabindex="-1">이전/다음 링크 <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;이전/다음 링크 {#prev-next-links}&quot;">​</a></h1><p>문서 하단에 표시되는 이전 페이지와 다음 페이지의 텍스트와 링크를 커스터마이징 할 수 있습니다. 사이드바에 있는 텍스트와 다른 텍스트를 원할 경우 유용합니다. 또한 푸터를 비활성화하거나 사이드바에 포함되지 않은 페이지로 링크할 때도 유용할 수 있습니다.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>타입: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>세부 사항:</p><p>이전 페이지로 가는 링크에 표시할 텍스트/링크를 지정합니다. 전문에서 이 항목을 설정하지 않으면, 사이드바 구성에서 텍스트/링크가 유추됩니다.</p></li><li><p>예제:</p><ul><li><p>텍스트만 커스터마이징하려면:</p><div class="language-yaml vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;시작하기 | 마크다운&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>텍스트와 링크를 모두 커스터마이즈하려면:</p><div class="language-yaml vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;마크다운 확장 기능&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>이전 페이지를 숨기려면:</p><div class="language-yaml vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p><code>prev</code>와 동일하지만, 다음 페이지에 대한 설정입니다.</p>`,6)]))}const g=a(l,[["render",t]]);export{o as __pageData,g as default};