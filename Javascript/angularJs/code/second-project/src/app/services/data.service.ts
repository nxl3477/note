import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// 需要依赖这个模块使用 map方法
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

  // 引入 http 
  constructor(private http: HttpClient) {
  }

  // 其他组件想要拿到数据的方法
  // getUsers() {
  //   // 创建观察者对象
  //   this.data = new Observable(observer => {
  //     // 模拟接口异步
  //     setTimeout(() => {
  //       observer.next(1)
  //     }, 1000)
  //     setTimeout(() => {
  //       observer.next(2)
  //     }, 2000)
  //     setTimeout(() => {
  //       observer.next(3)
  //     }, 3000)
  //     setTimeout(() => {
  //       observer.next(4)
  //     }, 4000)
  //     setTimeout(() => {
  //       // 终结操作
  //       observer.complete()
  //     }, 5000)
  //   })

  //   return this.data
  // }

  getHttpUsers() {
    // 新的Map使用方法
    const squareValues = map(res => res)
    const result = this.http.get("http://jsonplaceholder.typicode.com/users")
    return squareValues(result)

  }

  addHttpUser(user) {
    // const 
    return this.http.post("http://jsonplaceholder.typicode.com/users", user)
  }
}