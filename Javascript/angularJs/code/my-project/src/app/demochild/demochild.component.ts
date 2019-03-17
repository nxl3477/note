import { DemochildService } from './demochild.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demochild',
  templateUrl: './demochild.component.html',
  styleUrls: ['./demochild.component.scss']
})
export class DemochildComponent implements OnInit {
  data: any = {
    id: 0
  }
  // 注入好 Route服务
  constructor(public activeRoute: ActivatedRoute, private DemochildService: DemochildService) {}

  ngOnInit() {
    // 订阅参数
    this.activeRoute.params.subscribe(
      params => this.getPost(params["id"])
    )
  }

  // 挂载到data上
  public getPost(id:number) {
    console.warn(id)
    this.data.id = id
  }

}
