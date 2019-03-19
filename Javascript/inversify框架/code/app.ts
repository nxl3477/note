// inversify 只提供了非常简陋的express版本， 所以需要找封装版
import { InversifyKoaServer } from 'inversify-koa-utils'

// 创建容器
import {Container} from "./ioc/ioc"
// 获取容器的实例
const container = new Container()

container.load()

// 创建服务， 传入容器
let server = new InversifyKoaServer(container)

// 这里配置中间件
server.setConfig(app => {
  // 静态资源
}).setErrorConfig(() => {
  // 容错
})

// 产出app
let app = server.build()

// 监听服务
app.listen(3000, () => {
  console.log("http://localhost:3000")
})
