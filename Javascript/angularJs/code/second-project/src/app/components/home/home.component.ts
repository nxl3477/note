import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:any;
  user:Object = {
    name: '',
    email: '',
    phone: ''
  };
  data:any[] = [];
  constructor( public dataService: DataService) { 
    this.dataService.getHttpUsers().subscribe(users => {
      this.users = users
    })
  }

  ngOnInit() {
  }

  // 表单触发的提交事件
  onSubmit() {
    this.dataService.addHttpUser(this.user).subscribe(user => {
      this.users.unshift(user)
    })
    event.preventDefault();
    
  }
}
