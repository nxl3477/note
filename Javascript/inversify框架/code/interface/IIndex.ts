// 提供给Service 的接口
import { Model } from "../model/User"

export interface IIndex {
  // 返回 User 类型
  getUser(id: string) : Model.User
}