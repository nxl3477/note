# Web Components

* Custom Elements
  * 定制元素， 也就是自定义的元素，像vue的组件
* HTML Imports
  * 支持import 方式引用组件
* HTML Templates
  * 可以实现把dom结构写好
* Shadow DOM
  * 沙箱dom ， 外部的css不会影响其


## Custom Elements
提供⼀一种⽅方式让开发者可以⾃自定义 HTML 元素，包括特定的组成，样式和⾏行行为。

```
class ButtonHelloElement extends HTMLButtonElement {
    constructor() {
      super()
      this.addEventListener('click', () => {
        alert('hello world')
      })
    }
  }
  customElements.define('button-hello', ButtonHelloElement, {
    extends: 'button'
  })
</script>
<button id="button-hello">hello world</button>
```

## HTML Imports
HTML Imports 是⼀一种在 HTMLs 中引⽤用以及复⽤用其他的HTML ⽂文档的⽅方式。这个 Import 很漂亮，可以简单理理解为我们常⻅见的模板中的 include 之类的作⽤用。

听说这个标准后来被废弃了
```
<link rel="import" href=“/components/header.html">
const link = document.querySelector('link[rel=import]')
const header = link.import;
const pulse = header.querySelector(‘div.logo');
//获取 import 的 HTML 的 document
const d = document.currentScript.ownerDocument
```

## HTML Templates
⽤用过 handlebars 的⼈人都知道有这么⼀一个东⻄西: `<script id="template" type="text/x-handlebars-template"></script>`那么 HTML Templates 便便是把这个东⻄西官⽅方标准化，提供了了⼀一个 template 标签来存放以后需要但是暂时不不渲染的 HTML 代码。

```
<template id="template"><p>Smile!</p></template>
<script>
  let num = 3;
  const fragment = document.getElementById('template').content.cloneNode(true);
  while (num-- > 1) {
    fragment.firstChild.before(fragment.firstChild.cloneNode(true));
    fragment.firstChild.textContent += fragment.lastChild.textContent;
  }
  document.body.appendChild(fragment);
</script>
```


## Shadow DOM

Shadow DOM 最本质的需求是需要⼀一个隔离组件代码作⽤用域的东⻄西，例例如我组件代码的 CSS 不不能影响其他组件之类的，⽽而iframe ⼜又太重并且可能有各种奇怪问题。旨在提供⼀一种更更好地组织⻚页⾯面元素的⽅方式，来为⽇日趋复杂的⻚页⾯面应⽤用提供强⼤大⽀支持，避免代码间的相互影响。
```
const div = document.getElementById('id')
const shadowRoot = div.createShadowRoot()
const span = document.createElement('span')
span.textContent = 'hello world'
shadowRoot.appendChild(span)
```

x-foo::shadow > span 可以匹配到 #top 元素
x-foo /deep/ span 可以匹配到 #not-top 和 #top 元素
:host(.foo) 匹配 `<x-foo>` 元素