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
![图片](https://uploader.shimo.im/f/OOPneTAmZkgFAmgy.png!thumbnail)

## BFC 块级格式化上下文
### BFC描述
![图片](https://uploader.shimo.im/f/JPJ8wZi9WNsTIzYq.png!thumbnail)

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

![图片](https://uploader.shimo.im/f/exrfxb168oAATClO.png!thumbnail)

## CSS 分层
>用于规范css层级
* BEM
* SMACSS
* SUIT
* ACSS
* ITCSS 

