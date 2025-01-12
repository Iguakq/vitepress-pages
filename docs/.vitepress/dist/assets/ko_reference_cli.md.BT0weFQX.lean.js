import{_ as t,c as a,a2 as s,o as i}from"./chunks/framework.BZKEZbQD.js";const u=JSON.parse('{"title":"명령 줄 인터페이스","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/cli.md","filePath":"ko/reference/cli.md","lastUpdated":null}'),d={name:"ko/reference/cli.md"};function o(r,e,n,c,l,h){return i(),a("div",null,e[0]||(e[0]=[s('<h1 id="command-line-interface" tabindex="-1">명령 줄 인터페이스 <a class="header-anchor" href="#command-line-interface" aria-label="Permalink to &quot;명령 줄 인터페이스 {#command-line-interface}&quot;">​</a></h1><h2 id="vitepress-dev" tabindex="-1"><code>vitepress dev</code> <a class="header-anchor" href="#vitepress-dev" aria-label="Permalink to &quot;`vitepress dev`&quot;">​</a></h2><p>지정된 디렉터리를 루트로 하여 VitePress 개발 서버를 시작합니다. 기본값은 현재 디렉터리입니다. 현재 디렉터리에서 실행할 때 <code>dev</code> 명령은 생략할 수 있습니다.</p><h3 id="usage" tabindex="-1">사용법 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;사용법 {#usage}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 현재 디렉토리에서 시작, `dev` 생략</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 하위 디렉터리에서 시작</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options" tabindex="-1">옵션 <a class="header-anchor" href="#options" aria-label="Permalink to &quot;옵션 {#options}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--open [path]</code></td><td>시작 시 브라우저 열기 (<code>boolean | string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>포트 지정 (<code>number</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Public 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--cors</code></td><td>CORS 활성화</td></tr><tr><td><code>--strictPort</code></td><td>지정된 포트가 이미 사용 중인 경우 종료 (<code>boolean</code>)</td></tr><tr><td><code>--force</code></td><td>옵티마이저가 캐시를 무시하고 다시 번들링하도록 강제 (<code>boolean</code>)</td></tr></tbody></table><h2 id="vitepress-build" tabindex="-1"><code>vitepress build</code> <a class="header-anchor" href="#vitepress-build" aria-label="Permalink to &quot;`vitepress build`&quot;">​</a></h2><p>VitePress 사이트를 프로덕션 빌드합니다.</p><h3 id="usage-1" tabindex="-1">사용법 <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;사용법 {#usage-1}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-1" tabindex="-1">옵션 <a class="header-anchor" href="#options-1" aria-label="Permalink to &quot;옵션 {#options-1}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--mpa</code> (실험적)</td><td>클라이언트 측 하이드레이션 없이 <a href="./../guide/mpa-mode">MPA 모드</a>로 빌드 (<code>boolean</code>)</td></tr><tr><td><code>--base &lt;path&gt;</code></td><td>Public 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--target &lt;target&gt;</code></td><td>트랜스파일 대상 (기본값: <code>&quot;modules&quot;</code>) (<code>string</code>)</td></tr><tr><td><code>--outDir &lt;dir&gt;</code></td><td><strong>cwd</strong> 기준 출력 디렉터리 (기본값: <code>&lt;root&gt;/.vitepress/dist</code>) (<code>string</code>)</td></tr><tr><td><code>--minify [minifier]</code></td><td>minify 활성화/비활성화 또는 사용할 minify 도구 지정 (기본값: <code>&quot;esbuild&quot;</code>) (<code>boolean | &quot;terser&quot; | &quot;esbuild&quot;</code>)</td></tr><tr><td><code>--assetsInlineLimit &lt;number&gt;</code></td><td>바이트 단위의 정적 에셋 base64 인라인 임계값 (기본값: <code>4096</code>) (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-preview" tabindex="-1"><code>vitepress preview</code> <a class="header-anchor" href="#vitepress-preview" aria-label="Permalink to &quot;`vitepress preview`&quot;">​</a></h2><p>프로덕션 빌드를 로컬에서 미리 보기 합니다.</p><h3 id="usage-2" tabindex="-1">사용법 <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;사용법 {#usage-2}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [root]</span></span></code></pre></div><h3 id="options-2" tabindex="-1">옵션 <a class="header-anchor" href="#options-2" aria-label="Permalink to &quot;옵션 {#options-2}&quot;">​</a></h3><table tabindex="0"><thead><tr><th>옵션</th><th>설명</th></tr></thead><tbody><tr><td><code>--base &lt;path&gt;</code></td><td>Public 기본 경로 (기본값: <code>/</code>) (<code>string</code>)</td></tr><tr><td><code>--port &lt;port&gt;</code></td><td>포트 지정 (<code>number</code>)</td></tr></tbody></table><h2 id="vitepress-init" tabindex="-1"><code>vitepress init</code> <a class="header-anchor" href="#vitepress-init" aria-label="Permalink to &quot;`vitepress init`&quot;">​</a></h2><p>현재 디렉터리에서 <a href="./../guide/getting-started#setup-wizard">설정 마법사</a>를 시작합니다.</p><h3 id="usage-3" tabindex="-1">사용법 <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;사용법 {#usage-3}&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div>',23)]))}const b=t(d,[["render",o]]);export{u as __pageData,b as default};
