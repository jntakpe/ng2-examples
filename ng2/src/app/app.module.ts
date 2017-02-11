import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {routing} from './app.routes';
import {ChangeDetectComponent} from './change-detect/change-detect.component';
import {BindingComponent} from './binding/binding';
import {EventsComponent} from './events/events';
import {LocalVarComponent} from './local-var/local-var.component';
import {StructComponent} from './struct/struct';
import {DirTplComponent} from './dirtpl/dir-tpl.component';
import {PipesComponent} from './pipes/pipes.component';
import {FromNowPipe} from './pipes/from-now.pipe';
import {DiComponent} from './di/di.component';
import {GithubService} from './github.service';
import {TestComponent} from './component/test.component';
import {LogDirective} from './component/log.directive';
import {ItemComponent} from './component/item.component';
import {GeneratedComponent} from './generated/generated.component';
import {GithubComponent} from './github/github.component';
import {TplFormComponent} from './tpl-form/tpl-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ChangeDetectComponent,
    BindingComponent,
    EventsComponent,
    LocalVarComponent,
    StructComponent,
    DirTplComponent,
    PipesComponent,
    FromNowPipe,
    DiComponent,
    TestComponent,
    LogDirective,
    ItemComponent,
    GeneratedComponent,
    GithubComponent,
    TplFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
