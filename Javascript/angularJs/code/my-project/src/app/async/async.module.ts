import { asyncRoutes } from './async.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async.component';

@NgModule({
  declarations: [AsyncComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(asyncRoutes)
  ]
})
export class AsyncModule { }
