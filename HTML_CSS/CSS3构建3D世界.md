>经典网站         
>[https://720yun.com/](https://720yun.com/)         
>[http://www.h5doo.com/](http://www.h5doo.com/)

>css3d 的库 css3d-engine
>JS 3d 的库 parallax.js [轻量级的视差引擎]
## 
## 陀螺仪
>角度传感器, 是不同于加速计(G-sensor)的, 他的测量物理是偏转、倾斜时的转动角度.在手机上, 仅用加速计没办法测量或重构出完整的3D动作, 测不到转动的动作, G-sensor只能检测轴向的线性动作.但陀螺仪则可以对转动、偏转的动作做很好的测量, 这样就可以精确分析判断出使用者的实际动作. 而后根据动作, 可以对手机做相应的操作

##  陀螺仪角度
>真实开发中, 数值偏移可能会比较大, 需要开发者适当控制
* 沿 z 轴转对应图中的gamma值 ( 0, 360 )
* 沿 x 轴转对应图中的beta值 ( -180, 180 )
* 沿 y 轴转对应图中的alpha值 ( -90, 90 )

![图片](https://uploader.shimo.im/f/WJfubRaSLT07Wd5Q.png!thumbnail)



# 相关api 
* deviceorientation  
>设备的物理方向信息, 表示为一系列本地坐标系的旋角
* devicemotion
>提供设备的加速信息
* compassneedscalibration
>用于通知Web站点使用罗盘信息校准上诉事件

### 监听用户旋转
```
 window.addEventListener('deviceorientation', (event) => {
      // 处理 event.alpha 、 event.beta 及event.gamma
      console.log(event.alpha)
    }, true)

```

### 获取罗盘校准
>需要罗盘校准的情况下调用,  否者出现 alpha, gamma 等值不正确的情况
```
 window.addEventListener('compassneedscalibration', (event) => {
    alert('你的罗盘需要校准')
    // 清除默认事件
    event.preventDefault()
```
### })

获取重力加速度
>静止的话使用 event.acceleration
>比如扔出手机时, 建议使用 event.rotationRate
```
window.addEventListener('devicemotion', (event) => {
  // 处理event.acceleration
  // x(y,z) : 设备在x(y,z) 方向上的移动加速度值
  // event.accelerationIncludingGravity
  // 考虑了中立加速度后设备在x(y,z)
  // event.rotationRate
  // alpha, beta, gamma: 设备绕x, y, z 轴旋转的角度
}, true)
```


## 重力公式
>重力加速度是一个物体受重力作用的情况下所具有的加速度
>与位置有关; ( G = mg ) (其中 g= 9.80665 m/s^2,  为标准重力加速度)


## 简单的摇一摇实现代码
```
 // --------------摇一摇实践----------------
  var speed = 30; // speed
  var x = y = z = lastX = lastY = lastZ = 0
  function deviceMotionHandler(eventData) {
    var acceleration = event.accelerationIncludingGravity
    x = acceleration.x
    y = acceleration.y
    z = acceleration.z
    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed ) {
      // 简单的摇一摇触发代码
      alert(1)
    }
  }

```


## 造物节3D效果原理简单描述
>先转后推, 首先将一张大图切为9份,  然后每张图旋转40度,  然后并将其推至合适位置

![图片](https://uploader.shimo.im/f/gVgiD8GPdTIfF0DV.png!thumbnail)

### 集合Touch事件交互
>用户对于3d实景的一些交互操作, 利用 touchstart 和 touchmove 事件做相应处理
>![图片](https://uploader.shimo.im/f/jYxmXXSWbVstu0j7.png!thumbnail)

# 造物节效果实现流程
## 一、 载入图片, 定位至统一位置
>因为20张图片被定位到统一地方, 所以所有图片都叠在一起了
>
>此时效果


![图片](https://uploader.shimo.im/f/RkUIlZPXQ3sHXGqs.png!thumbnail)

## 二、依照Y轴旋转图片
>先说下为什么要依照y轴:  我们需要把图片围绕成一个环形, 类似于 木桶的每一块木板,   图片就是木板, 按图片的顺序旋转自各自的角度, 目前也是原地旋转, 所以图片依旧叠加在一起
>
>素材有20张图片, 那每张的旋转角度就是 360 / 20 = 18度, 每张旋转的度数在前一张的基础上累加 18 度, 
>
>这里注意注意注意: 因为是按图片中心的Y轴旋转, 所以同一个度数会有两张图片,  比如: 0度的图片, 头在0度, 尾在90度,    然后当轮到头在90度的图片时, 他的尾在 0 度, 所以会有同一个度数两张图片的现象
>
>此时效果

![图片](https://uploader.shimo.im/f/uvEXPEEFTGg3wvxO.png!thumbnail)

>为了方便理解, 切换成上帝视角, ,  所有图片围绕中心点旋转

![图片](https://uploader.shimo.im/f/dlrPQ0PYpCUzMDc0.png!thumbnail)![图片](https://uploader.shimo.im/f/9sOoS92Xfn4U0qMa.png!thumbnail)

## 三、将图片沿着各自Z轴向外推
>现在木板(也就是每一张图片)是穿插在一起的, 我们需要让他们远离中心点, 拉开距离, 让他,们边缘连接而不是这样交叉在一起,  才能形成一个圆

### 先了解每一块木板怎么推
>简单的画了个前后的效果图,  用的是上帝视角, 也就是你低头看一个木桶的视角

![图片](https://uploader.shimo.im/f/fXGv09PtZR8ZQcEH.png!thumbnail)
### 如何计算该推多少距离
>做一道三角函数数学题
>
>画的角度不太对别介意

![图片](https://uploader.shimo.im/f/8q1dGT07hEgSxwSj.png!thumbnail)
>设一共12条线,  每条长200px(此时的长就对应图片的宽) ,  求将橙线移动到图中最终位置的距离 "黑线",
```
// 先求旋转度数
// 然后取度数的一半
360 / 12 / 2 = 15 度
// 得知直角底边长度
200 / 2 = 100px
// 根据度数得知 tan, 顺便说下, tan是对边比邻边
tan15°= 0.26794
// 求出黑线
100PX / 黑线 = 0.26794
黑线约等于 373.2px
```

## js计算时注意
1. Math.tan 接收的是弧度单位
2. Math.PI 表示的是一个 Π
3. 360度 = 2Π 
>计算出每张图片之间的形成的弧度
```
 // 假设图片数量是 8 张
// 因为 360 = 2Π
// 1度 = Π / 180
// 每份的角度是
const deg = 360 / 8 // 此时为 45
// 一份的弧度就是 每份弧度 * 旋转角度的一半
// 最后结果就等于 Π / 图片数量
( Math.PI / 180 ) * ( 45 / 2 )  ==>  Math.PI / 8
```



