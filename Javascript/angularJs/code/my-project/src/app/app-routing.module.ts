
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  // 重定向
 {
    path: "demo",
    loadChildren: './demo/demo.module#DemoModule'
  },
  {
    path: "async",
    loadChildren: './async/async.module#AsyncModule'
  },
  {
    path: "error",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
