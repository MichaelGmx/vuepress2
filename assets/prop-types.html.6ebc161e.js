import{_ as e,r as p,o as t,c as o,a as n,b as c,e as i,d as s}from"./app.eb229427.js";const l={},r=i(`<h1 id="prop-types" tabindex="-1"><a class="header-anchor" href="#prop-types" aria-hidden="true">#</a> Prop-Types</h1><p>v15.5\u540E\uFF0C\u88AB\u5B98\u65B9 \u4ECEreact\u4E2D \u5355\u72EC\u51FA\u6765 <code>prop-types</code></p><h4 id="\u9879\u76EE\u5185-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u5185-\u5B89\u88C5" aria-hidden="true">#</a> \u9879\u76EE\u5185 \u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> i prop-types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7B80\u5355\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u793A\u4F8B" aria-hidden="true">#</a> \u7B80\u5355\u793A\u4F8B\uFF1A</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u9650\u5B9A\u7684\u7EC4\u4EF6</span>

<span class="token comment">// \u5F15\u5165 prop-types</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Greeting</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Greeting<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// name \u5FC5\u987B\u662F\u5B57\u7B26\u4E32</span>
Greeting<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Greeting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165 \u7EC4\u4EF6</span>
<span class="token keyword">import</span> Greeting <span class="token keyword">from</span> <span class="token string">&#39;../components/Greeting&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Example</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> name2 <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \u6B63\u5E38  Greeting, Jack */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting name<span class="token operator">=</span><span class="token punctuation">{</span>name1<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* console \u4F1A\u62A5\u9519\uFF0C\u63D0\u793A name \u9700\u8981\u5B57\u7B26\u4E32\u7C7B\u578B\u503C */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting name<span class="token operator">=</span><span class="token punctuation">{</span>name2<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBE\u7F6E\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u8BBE\u7F6E\u9ED8\u8BA4\u503C</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u9650\u5B9A\u7684\u7EC4\u4EF6</span>

<span class="token comment">// \u5F15\u5165 prop-types</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Greeting</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Greeting<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// name \u5FC5\u987B\u662F\u5B57\u7B26\u4E32</span>
Greeting<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string
<span class="token punctuation">}</span>
<span class="token comment">// \u9ED8\u8BA4\u503C</span>
Greeting<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Stranger&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Greeting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165 \u7EC4\u4EF6</span>
<span class="token keyword">import</span> Greeting <span class="token keyword">from</span> <span class="token string">&#39;../components/Greeting&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Example</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \u6B63\u5E38  Greeting, Jack */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting name<span class="token operator">=</span><span class="token punctuation">{</span>name1<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* \u6B63\u5E38  Greeting, Stranger */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BBE\u7F6E\u5FC5\u987B" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5FC5\u987B" aria-hidden="true">#</a> \u8BBE\u7F6E\u5FC5\u987B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u8BBE\u7F6E\u9650\u5B9A\u7684\u7EC4\u4EF6</span>

<span class="token comment">// \u5F15\u5165 prop-types</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EC4\u4EF6</span>
<span class="token keyword">const</span> <span class="token function-variable function">Greeting</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Greeting<span class="token punctuation">,</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// name \u5FC5\u987B\u662F\u5B57\u7B26\u4E32\uFF0C\u4E14\u5FC5\u987B\u542B\u6709\u6B64\u53C2\u6570</span>
Greeting<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Greeting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5F15\u5165 \u7EC4\u4EF6</span>
<span class="token keyword">import</span> Greeting <span class="token keyword">from</span> <span class="token string">&#39;../components/Greeting&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Example</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name1 <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* \u6B63\u5E38  Greeting, Jack */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting name<span class="token operator">=</span><span class="token punctuation">{</span>name1<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token punctuation">{</span><span class="token comment">/* console\u62A5\u9519\uFF0C\u63D0\u793A \u5FC5\u987B\u662Fstring\u7C7B\u578B\uFF0C\u4E14name\u53C2\u6570\u5FC5\u586B */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Greeting <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),d=s("\u53C2\u8003\uFF1A"),u=n("br",null,null,-1),k={href:"https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u5B98\u65B9 prop-types Doc");function m(b,g){const a=p("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[d,u,n("a",k,[v,c(a)])])])}var h=e(l,[["render",m],["__file","prop-types.html.vue"]]);export{h as default};
