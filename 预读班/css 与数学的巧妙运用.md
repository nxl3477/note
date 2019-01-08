## 图片裁切动画
> 利用clip-path 的小技巧做出类似相框的效果

> 关键的css
```
.avatar {
    clip-path: polygon(0 0,  100% 0, 100% 100%, 0 100%);
    transition: all 0.5s;
    
}
.avatar:hover {
    transition: all 0.5s;
    clip-path: polygon(50% 0,  100% 50%, 50% 100%, 0 50%);
}
```

## 计算图片旋转后扩大倍数
> 要的效果

![image](CE843FE8A2324361B73463D37AC0D5E3)

> 要说的比较多， 就手写了, 字贼丑，对不住看官老爷

![image](F602B5CDEBEA4DD6B37BE0EAEF0F0EA9)



## 计算圆角空白的阴影填充距离

> 需要解决的问题， 边边角角的空白

![image](F1273EBB4A5E4320B76215E221D47BF5)


> 最终效果

![image](51A7C3D5F4B540F1A44CE3C03E1D2C38)


> 计算过程

![image](83F3E93B9B8E4744A062FAF68818E8A0)