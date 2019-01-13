# Yii的MVC快速理解
YII的MVC结构是这样的
M 在 models 目录主要控制数据管理逻辑的操作， 处理规范
c 在 Controllers 目录， 主要控制路由以及用户的交互
v 在 views 目录， 控制页面的样式，显示的静态页内容

基本流程
用户访问 -> controllers 接收 -> 数据先交给model处理 -> 根据model返回的数据来选择 相应的views
## 路由访问形式
> ?r=site/entry

r 可以理解为router, router为site下的entry
它会去 'siteController' 文件下访问 `actionEntry` 方法 

## 命名规范
view 的文件对应的 controllers 控制器需要在view 的文件名后加上`Controller`

**像是这组**
* view -> site  
* controllers -> siteControllers


## 命名空间
命名空间用于区别不同文件
比如有两个文件都有一个类叫`apple`
如果你直接引入会导致php分不清你要调用哪个

所以我们需要区分开来， 就要改成这样的写法
```
$apple = new a\b\c\Apple();
$apple = new a\b\e\Apple();
```
但是这样写又太麻烦了， 可以不可以只定义一次
当然可以， php给我们提供了Use方法， 只需声明一次就可以默认使用次命名空间
```
use a\b\c\Apple;
$apple = new  Apple();
```
当遇到两个类有相同类容易冲突时还可起别名`as`
```
use a\b\j\Apple as Japple;
$apple2 = new Japple;
```

当然Yii的命名空间并不代表你不需要`require_once`导入了， 只不过是 Yii框架帮们自动处理了这些


## 全局可访问的单例
表达式 Yii::$app 代表应用实例。 同时它也是一个服务定位器， 能提供 request，response，db 等等特定功能的组件。 
