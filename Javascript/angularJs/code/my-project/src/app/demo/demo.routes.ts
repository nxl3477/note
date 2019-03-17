import { DemoComponent } from './demo.component';
import { DemochildComponent } from '../demochild/demochild.component';

export const demoRoutes = [{
  path: '',
  component: DemoComponent,
  children: [{
    path: ":id", 
    component: DemochildComponent
  }]
}]