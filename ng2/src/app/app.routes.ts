import {RouterModule, Routes} from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {ChangeDetectComponent} from './change-detect/change-detect.component';
import {BindingComponent} from './binding/binding';
import {EventsComponent} from './events/events';
import {LocalVarComponent} from './local-var/local-var.component';
import {StructComponent} from './struct/struct';
import {DirTplComponent} from './dirtpl/dir-tpl.component';
import {DiComponent} from './di/di.component';
import {PipesComponent} from './pipes/pipes.component';

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
  },
  {
    path: 'local-var',
    component: LocalVarComponent
  },
  {
    path: 'struct',
    component: StructComponent
  },
  {
    path: 'dirtpl',
    component: DirTplComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'di',
    component: DiComponent
  }
];

export const routing = RouterModule.forRoot(routes);
