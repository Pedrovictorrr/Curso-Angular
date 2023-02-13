import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './pages/first-component/first-component.component';
import { ParentDataComponent } from './pages/parent-data/parent-data.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { IfRenderComponent } from './pages/if-render/if-render.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EmiterComponent } from './pages/emiter/emiter.component';
import { ChangeNumberComponent } from './pages/change-number/change-number.component';
import { ListRenderComponent } from './pages/list-render/list-render.component';
import { PipesPipe } from './pages/pipes.pipe';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesPipe,
    PipesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
