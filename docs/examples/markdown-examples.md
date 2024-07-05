# Markdown 扩展示例

本页面展示了 VitePress 提供的一些内置Markdown扩展功能。

[gis01](https://tongyi.aliyun.com/gis/01)

## 语法高亮

VitePress 集成了由 [Shiki](https://github.com/shikijs/shiki) 支持的语法高亮功能，另外还提供了如行高亮等特性：

**输入**

<pre><div class="tongyi-ui-highlighter global-dark-theme"><span class="tongyi-ui-highlighter-header"><span class="mr-auto first-letter:uppercase text-[color:var(--TY-Text-2)] tongyi-ui-highlighter-lang">Md</span><div class="tongyi-ui-highlighter-right-actions"><div class="tongyi-ui-highlighter-theme-changer"><div class="tongyi-ui-highlighter-theme-changer-btn"><span>深色版本</span><span role="img" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#icon-DownOutlined"></use></svg></span></div></div><svg width="12" height="12" viewBox="0 0 11.199999809265137 11.199999809265137" class="cursor-pointer flex items-center tongyi-ui-highlighter-copy-btn"><g><path d="M11.2,1.6C11.2,0.716344,10.4837,0,9.6,0L4.8,0C3.91634,0,3.2,0.716344,3.2,1.6L4.16,1.6Q4.16,1.3349,4.34745,1.14745Q4.5349,0.96,4.8,0.96L9.6,0.96Q9.8651,0.96,10.0525,1.14745Q10.24,1.3349,10.24,1.6L10.24,6.4Q10.24,6.6651,10.0525,6.85255Q9.8651,7.04,9.6,7.04L9.6,8C10.4837,8,11.2,7.28366,11.2,6.4L11.2,1.6ZM0,4L0,9.6C0,10.4837,0.716344,11.2,1.6,11.2L7.2,11.2C8.08366,11.2,8.8,10.4837,8.8,9.6L8.8,4C8.8,3.11634,8.08366,2.4,7.2,2.4L1.6,2.4C0.716344,2.4,0,3.11634,0,4ZM1.14745,10.0525Q0.96,9.8651,0.96,9.6L0.96,4Q0.96,3.7349,1.14745,3.54745Q1.3349,3.36,1.6,3.36L7.2,3.36Q7.4651,3.36,7.65255,3.54745Q7.84,3.7349,7.84,4L7.84,9.6Q7.84,9.8651,7.65255,10.0525Q7.4651,10.24,7.2,10.24L1.6,10.24Q1.3349,10.24,1.14745,10.0525Z"></path></g></svg></div></span><div><pre><code><span class="comment linenumber react-syntax-highlighter-line-number">1</span><span>```js{</span>4<span>}
</span><span class="comment linenumber react-syntax-highlighter-line-number">2</span><span></span><span>export</span><span></span><span>default</span><span> {
</span><span class="comment linenumber react-syntax-highlighter-line-number">3</span>  data () {
<span class="comment linenumber react-syntax-highlighter-line-number">4</span><span></span><span>return</span><span> {
</span><span class="comment linenumber react-syntax-highlighter-line-number">5</span><span>      msg: </span><span>'高亮显示！'</span><span>
</span><span class="comment linenumber react-syntax-highlighter-line-number">6</span>    }
<span class="comment linenumber react-syntax-highlighter-line-number">7</span>  }
<span class="comment linenumber react-syntax-highlighter-line-number">8</span>}</code></pre></div></div></pre>

<pre><div class="tongyi-ui-highlighter global-dark-theme"><span class="tongyi-ui-highlighter-header"><span class="mr-auto first-letter:uppercase text-[color:var(--TY-Text-2)] tongyi-ui-highlighter-lang"></span><div class="tongyi-ui-highlighter-right-actions"><div class="tongyi-ui-highlighter-theme-changer"><div class="tongyi-ui-highlighter-theme-changer-btn"><span>深色版本</span><span role="img" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#icon-DownOutlined"></use></svg></span></div></div><svg width="12" height="12" viewBox="0 0 11.199999809265137 11.199999809265137" class="cursor-pointer flex items-center tongyi-ui-highlighter-copy-btn"><g><path d="M11.2,1.6C11.2,0.716344,10.4837,0,9.6,0L4.8,0C3.91634,0,3.2,0.716344,3.2,1.6L4.16,1.6Q4.16,1.3349,4.34745,1.14745Q4.5349,0.96,4.8,0.96L9.6,0.96Q9.8651,0.96,10.0525,1.14745Q10.24,1.3349,10.24,1.6L10.24,6.4Q10.24,6.6651,10.0525,6.85255Q9.8651,7.04,9.6,7.04L9.6,8C10.4837,8,11.2,7.28366,11.2,6.4L11.2,1.6ZM0,4L0,9.6C0,10.4837,0.716344,11.2,1.6,11.2L7.2,11.2C8.08366,11.2,8.8,10.4837,8.8,9.6L8.8,4C8.8,3.11634,8.08366,2.4,7.2,2.4L1.6,2.4C0.716344,2.4,0,3.11634,0,4ZM1.14745,10.0525Q0.96,9.8651,0.96,9.6L0.96,4Q0.96,3.7349,1.14745,3.54745Q1.3349,3.36,1.6,3.36L7.2,3.36Q7.4651,3.36,7.65255,3.54745Q7.84,3.7349,7.84,4L7.84,9.6Q7.84,9.8651,7.65255,10.0525Q7.4651,10.24,7.2,10.24L1.6,10.24Q1.3349,10.24,1.14745,10.0525Z"></path></g></svg></div></span><div><pre><code><span class="comment linenumber react-syntax-highlighter-line-number">1</span><span>
</span><span class="comment linenumber react-syntax-highlighter-line-number">2</span>**输出**
<span class="comment linenumber react-syntax-highlighter-line-number">3</span>
<span class="comment linenumber react-syntax-highlighter-line-number">4</span><span>```js{</span>4<span>}
</span><span class="comment linenumber react-syntax-highlighter-line-number">5</span><span></span><span>export</span><span></span><span>default</span><span> {
</span><span class="comment linenumber react-syntax-highlighter-line-number">6</span>  data () {
<span class="comment linenumber react-syntax-highlighter-line-number">7</span><span></span><span>return</span><span> {
</span><span class="comment linenumber react-syntax-highlighter-line-number">8</span><span>      msg: </span><span>'高亮显示！'</span><span>
</span><span class="comment linenumber react-syntax-highlighter-line-number">9</span>    }
<span class="comment linenumber react-syntax-highlighter-line-number">10</span>  }
<span class="comment linenumber react-syntax-highlighter-line-number">11</span>}</code></pre></div></div></pre>

## 自定义容器

**输入**

<pre><div class="tongyi-ui-highlighter global-dark-theme"><span class="tongyi-ui-highlighter-header"><span class="mr-auto first-letter:uppercase text-[color:var(--TY-Text-2)] tongyi-ui-highlighter-lang">Md</span><div class="tongyi-ui-highlighter-right-actions"><div class="tongyi-ui-highlighter-theme-changer"><div class="tongyi-ui-highlighter-theme-changer-btn"><span>深色版本</span><span role="img" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#icon-DownOutlined"></use></svg></span></div></div><svg width="12" height="12" viewBox="0 0 11.199999809265137 11.199999809265137" class="cursor-pointer flex items-center tongyi-ui-highlighter-copy-btn"><g><path d="M11.2,1.6C11.2,0.716344,10.4837,0,9.6,0L4.8,0C3.91634,0,3.2,0.716344,3.2,1.6L4.16,1.6Q4.16,1.3349,4.34745,1.14745Q4.5349,0.96,4.8,0.96L9.6,0.96Q9.8651,0.96,10.0525,1.14745Q10.24,1.3349,10.24,1.6L10.24,6.4Q10.24,6.6651,10.0525,6.85255Q9.8651,7.04,9.6,7.04L9.6,8C10.4837,8,11.2,7.28366,11.2,6.4L11.2,1.6ZM0,4L0,9.6C0,10.4837,0.716344,11.2,1.6,11.2L7.2,11.2C8.08366,11.2,8.8,10.4837,8.8,9.6L8.8,4C8.8,3.11634,8.08366,2.4,7.2,2.4L1.6,2.4C0.716344,2.4,0,3.11634,0,4ZM1.14745,10.0525Q0.96,9.8651,0.96,9.6L0.96,4Q0.96,3.7349,1.14745,3.54745Q1.3349,3.36,1.6,3.36L7.2,3.36Q7.4651,3.36,7.65255,3.54745Q7.84,3.7349,7.84,4L7.84,9.6Q7.84,9.8651,7.65255,10.0525Q7.4651,10.24,7.2,10.24L1.6,10.24Q1.3349,10.24,1.14745,10.0525Z"></path></g></svg></div></span><div><pre><code><span class="comment linenumber react-syntax-highlighter-line-number">1</span><span>::: info
</span><span class="comment linenumber react-syntax-highlighter-line-number">2</span>这是一个信息框。
<span class="comment linenumber react-syntax-highlighter-line-number">3</span>:::
<span class="comment linenumber react-syntax-highlighter-line-number">4</span>
<span class="comment linenumber react-syntax-highlighter-line-number">5</span>::: tip
<span class="comment linenumber react-syntax-highlighter-line-number">6</span>这是一个提示。
<span class="comment linenumber react-syntax-highlighter-line-number">7</span>:::
<span class="comment linenumber react-syntax-highlighter-line-number">8</span>
<span class="comment linenumber react-syntax-highlighter-line-number">9</span>::: warning
<span class="comment linenumber react-syntax-highlighter-line-number">10</span>这是一个警告。
<span class="comment linenumber react-syntax-highlighter-line-number">11</span>:::
<span class="comment linenumber react-syntax-highlighter-line-number">12</span>
<span class="comment linenumber react-syntax-highlighter-line-number">13</span>::: danger
<span class="comment linenumber react-syntax-highlighter-line-number">14</span>这是一个危险警告。
<span class="comment linenumber react-syntax-highlighter-line-number">15</span>:::
<span class="comment linenumber react-syntax-highlighter-line-number">16</span>
<span class="comment linenumber react-syntax-highlighter-line-number">17</span>::: details
<span class="comment linenumber react-syntax-highlighter-line-number">18</span>这是一个详情块。
<span class="comment linenumber react-syntax-highlighter-line-number">19</span>:::</code></pre></div></div></pre>

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险警告。
:::

::: details
这是一个详情块。
:::

## 更多

查看[Markdown扩展功能完整列表](https://vitepress.dev/guide/markdown)的官方文档以了解更多信息。
