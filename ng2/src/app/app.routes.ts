import {Route, RouterModule, Routes} from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component';

const interpolation: Route = {
  path: 'interpolation',
  component: InterpolationComponent
};

const routes: Routes = [
  interpolation
];

export const routing = RouterModule.forRoot(routes);
