
## 项目思路

遵循`solid`原则， `service` 通过 `@provide` 装饰器暴露出来，  通过构造注入的方式， 使用参数修饰器`@inject` 自动导入指定的`service`, 

`service`首先要实现接口， 然后数据和方法的数据类型要和 `Model`中定义的一致， `Model`是一个`namespace`s


其他的细节只是实现 ioc 的一些繁琐步骤， 理解思路， 一同百通