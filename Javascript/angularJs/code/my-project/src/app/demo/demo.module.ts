import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { demoRoutes } from './demo.routes';
import { DemochildComponent } from '../demochild/demochild.component';

@NgModule({
  declarations: [DemoComponent, DemochildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes)
  ]
})
export class DemoModule { }
