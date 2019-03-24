import { controller, interfaces, httpGet, Router, inject, TAGS, TYPE, provideThrowable } from '../ioc/ioc'
import { IIndex } from '../interface/IIndex'
import { Model } from '../model/User';

@controller("/test")
// 向外注入 自带的TYPE方法会帮你处理 类名 IndexController
@provideThrowable(TYPE.Controller, "TestController")
// 遵循solid原则，  实现controller 接口， 来自封装的 inversify
export default class TestController implements  interfaces.Controller {
  @httpGet("/page")
  // 一个私有的方法，  ctx 也要有类型， 是啥类型？ 从koa-router 里找
  // next 是一个Promise类型， 类型为泛型， 
  // 整个方法返回一个 promise
  private async index(ctx: Router.IRouterContext, next: () => Promise<any>):Promise<any> {
    ctx.body = await ctx.render('index')

  }
}