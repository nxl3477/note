# 原理分析
> 先用rotate旋转， 然后使用translateZ将他们各自往后推， 同淘宝造物节原理



# 实践

## 首先创建好6个面的dom
```
<div class="box">
    <div class="wall01"></div>
    <div class="wall02"></div>
    <div class="wall03"></div>
    <div class="wall04"></div>
    <div class="wall05"></div>
    <div class="wall06"></div>
</div>
```

## 设置旋转中心及环境

```
.box {
    top: 400px;
    left: 400px;
    width: 300px;
    position: relative;
    // 如果使用 50% 会导致动化出问题
    transform-origin: 150px 150px;  
    /* 使被转换的子元素保留其 3D 转换 */
    transform-style:preserve-3d;
    animation: nxl 6s infinite linear;
}
```
## 将子元素定位至左上角
```
.box > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
}
```

## 旋转各个子元素
> 依照筛子的对立面旋转角度
* 1 对 6
* 2 对 4
* 3 对 5


> 猜想把1 放顶部， 则6在底部

* 1 按X轴旋转 90 度
* 6 按X轴旋转 180 度

> 2、3、4、5 面则在侧面， 所以各自按Y轴旋转90度
* 2 转 0度
* 3 转 90 度
* 4 转 180 度
* 5 转 270 度

## 推动各个子元素
> 旋转好之后就可以按 Z轴将各自的位置往后推了

```
.wall01 {
    transform:rotateX(90deg) translateZ(150px);
}
.wall02 {
    transform:rotateY(0deg) translateZ(150px);
}

.wall03 {
    transform:rotateY(90deg) translateZ(150px);
}

.wall04 {
    transform:rotateY(180deg) translateZ(150px);
}

.wall05 {
    transform:rotateY(270deg) translateZ(150px);
}

.wall06 {
    transform:rotateX(270deg) translateZ(150px);
}

```





## 给父级盒子加上简单的旋转动画
```
@keyframes nxl {
    0% {
        transform: rotateX(2deg) rotateY(2deg);
    }

    25% {
        transform: rotateX(180deg) rotateY(0deg);
    }

    50% {
        transform: rotateX(180deg) rotateY(360deg);
    }

    75% {
        transform: rotateX(540deg) rotateY(540deg);
    }

    100% {
        transform: rotateX(720deg) rotateY(720deg);
    }
}
```








