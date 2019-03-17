import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name:string = "吴大龙";
  age:number = 30;
  email:string = "123132@qq.com"
  address: Address;
  hobbies: string[];
  isEdit: boolean;
  constructor() { 
    console.log("constructor run ...")
  }

  // 初始化完成的生命周期
  ngOnInit() {
    console.log("ngOnInit run ...")
    this.address = {
      street: "定四路",
      city: "北京",
      state: "昌平区"
    }
    this.hobbies = ["写代码", "看电影"]
  }

  onTest() {
    console.log(123)
    this.hobbies.push("new Hobby")
  }

  deleteHobby(index) {
    this.hobbies.splice(index, 1)
  }

  addHobby(hobby) {
    this.hobbies.push(hobby)
    // 干掉表单的刷新默认事件
    return false
  }


  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

// 接口
interface Address {
  street: string;
  city: string;
  state: string;
}