import {RouterModule, Routes} from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {ChangeDetectComponent} from './change-detect/change-detect.component';
import {BindingComponent} from './binding/binding';
import {EventsComponent} from './events/events';

const routes: Routes = [
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'changedetect',
    component: ChangeDetectComponent
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'events',
    component: EventsComponent
  }
];

export const routing = RouterModule.forRoot(routes);
