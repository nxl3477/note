## 弹性盒模型和Reset的选择
* flex模型
    * *的杀伤力太大, 不建议
* 使用 Reset.css 重置、 Normalize.css修复、 Neat.css 集合了重置和修复
* 移动端布局要重置盒模型, 加上这句代码
```
html {
  box-sizing: border-box;
}
*, *:before, *:after{
  // 继承至html
  box-sizing: inherit;
}
```

## 图标选择
* cssicon 
* iconfont

## css Hint
1. 不要使用多个class选择元素，如a.foo.boo，这在ie6及以下不能正确解析
2. 移除空的css规则，如a{}
3. 正确的使用显示属性，如display:inline不要和width，height，float，margin,padding同时使用，display:inline-block不要和float同时使用等
4. 避免过多的浮动，当浮动次数超过十次时，会显示警告
5. 避免使用过多的字号，当字号声明超过十种时，显示警告
6. 避免使用过多web字体，当使用超过五次时，显示警告
7. 避免使用id作为样式选择器
8. 标题元素只定义一次
9. 使用width:100%时要小心
10. 属性值为0时不要写单位
11. 各浏览器专属的css属性要有规范，例如.foo{-moz-border-radius:5px;border-radius:5px}
12. 避免使用看起来像正则表达式的css3选择器
13. 遵守盒模型规则

## BFC 块级格式化上下文
### BFC描述

* Box: CSS布局的基本单位
Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个
Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类
型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容
器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：


* block-level box:display 属性为 block, list-item, table 的元素，会生成 block-levelbox。并且参与 block fomatting context；

* inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成inline-level box。并且参与 inline formatting context；
*  Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他
元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting
context (简称BFC)和 Inline formatting context (简称IFC)。






### 哪些元素会产生BFC
* 根元素
* float属性不为None
* position为absolute 或 fixed
* display为inline-block , table-cell, table-caption, flex, inline-flex
* overflow不为visible, 比如: hidden
### BFC布局规则
1. 每个元素的margin box的左边, 与包含块border box 的左边相接触(对于从左往右的格式化, 否则相反). 即使存在浮动也是如此
2. BFC的区域不会与float box 重叠
3. 父元素是BFC, 计算高度时, 内部的浮动元素也会跟着被计算
### 使用场景
*  防止垂直Margin重叠      给被重叠的dom添加 overflow: hidden 
  * 原因是两个元素在同一个BFC下是重叠的,   只要在单独创建BFC就可避免重叠
* 清除浮动                       给父容器添加 overflow: hidden


### 总结
>两个BFC之间的区域不重叠, 各自独立
* IFC    内联元素   内联格式化上下文
* FFC   弹性盒子   自适应格式化上下文
* GFC  Grid布局    网格布局格式化上下文


其实以上的几个例子都体现了，BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

* IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC的line
box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)

* FFC(Flex Formatting Contexts)直译为"自适应格式化上下文"，display值
为flex或者inline-flex的元素将会生成自适应容器（flex container），

* GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"，
当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列
（grid columns）为每一个网格项目（grid item）定义位置和空间。




## CSS 分层
>用于规范css层级
* BEM
* SMACSS
* SUIT
* ACSS
* ITCSS 

