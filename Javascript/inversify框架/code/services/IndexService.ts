import { IIndex } from './../interface/IIndex';
import { Model } from '../model/User';
import { provide, TAGS } from '../ioc/ioc'

// provide提供:  让其可注入， 也就是让整个类注入到container
@provide(TAGS.IndexService)  // 以 TAGS.IndexService 注册
// 实现接口
export class IndexService implements IIndex {
  private userStorage : Model.User[] = [
    {
      email: "123123@qq.com",
      name: "五大路"
    },
    {
      email: "12asdadad@qq.com",
      name: "哈哈哈"
    }
  ]

  //  报错的话是因为    “ 其声明类型不为 "void" 或 "any" 的函数必须返回值”
  public getUser(id:string) : Model.User {
    // 定义一个 Model.User 的类型
    let result : Model.User
    // 从私有的变量里取出整个 id的数据 --- 模拟下读取数据库
    result = this.userStorage[id]
    return result 
  }
}