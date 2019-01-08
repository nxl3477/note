## 圣杯布局
>html 文档模式需要是过渡类型的 html:xt, 不要使用H5的头, 因为早期是给ie 用的
>利用浮动实现最基本的三栏 
>html结构:
```
<div class="left">左</div>
<div class="right">右</div>
<div class="middle">中</div>
```

### 存在的问题
>类似京东首页处三栏,  中间的Banner 相当重要, html又是从上到下执行, 会导致banner最后加载, 体验相当不友好
>
>所以我们需要把middle 提前
>
>所以诞生了双飞翼布局
## 双飞翼布局
>为了避免外部盒子模型影响, 所以在middle 中插入一个 dom , 为left和 right让出空间, 
```
  <style>
  * {
    margin: 0;
    padding: 0;
  } 
  div{
    height: 150px;
  }
  .left {
    width: 300px;
    background: orange;
    float:left;
    margin-left: -100%;
  }
  .right {
    width: 200px;
    float:right;
    background: blue;
    margin-left: -200px;
  }
  .middle {
    float: left;
    width: 100%;
    background: yellow;
    
  }
  .inner {
    margin-left: 300px;
  }
  </style>
</head>
<body>
  <div class="middle">
    <div class="inner">中</div>
  </div>
  <div class="left">左</div>
  <div class="right">右</div>
</body>

```


## 等高布局
>这个等高布局在 双飞翼布局基础上修改的
* 将padding-bottom 设置为 9999px;  改变元素的盒模型, 让其有背景
* 将margin-bottom 设置为9999px;   为了不影响下方布局
* 父容器overflow: hidden;           隐藏掉过多的部分

```
<style>
  * {
    margin: 0;
    padding: 0;
  } 
  .left {
    width: 300px;
    background: orange;
    float:left;
    margin-left: -100%;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
  .right {
    width: 200px;
    float:right;
    background: blue;
    margin-left: -200px;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
  .middle {
    float: left;
    width: 100%;
    background: yellow;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
  }
  .inner {
    margin-left: 300px;
  }
  .container {
    overflow: hidden;
  }
  </style>
</head>
<body>
  <div class="container">
    <div class="middle">
      <div class="inner">中</div>
    </div>
    <div class="left">左
      <p>等高测试</p>
    </div>
    <div class="right">右</div>
  </div>
</body>

```


