import { controller, interfaces, httpGet, Router, inject, TAGS } from '../ioc/ioc'
import { IIndex } from '../interface/IIndex'

@controller("/")
// 遵循solid原则，  实现controller 接口， 来自封装的 inversify
export default class IndexController implements  interfaces.Controller {
  // 注入service ， 根据 TAGS.IndexService 拿， 因为也是 TAGS.IndexService 注册的
  constructor(@inject(TAGS.IndexService) indexService : IIndex ) {
    this.indexService = new IndexService()
  }

  @httpGet("/")
  // 一个私有的方法，  ctx 也要有类型， 是啥类型？ 从koa-router 里找
  // next 是一个Promise类型， 类型为泛型， 
  // 整个方法返回一个 promise
  private async index(ctx: Router.IRouterContext, next: () => Promise<any>):Promise<any> {
    // render方法是异步的
    ctx.body = await ctx.render('index')


  }
}