import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import * as Services from '../services/index';
import * as Components from '../components/index';

@NgModule({
  declarations: [
    AppComponent,
    Components.SolutionListComponent,
    Components.SolutionCardComponent,
    Components.SolutionConfigComponent,
    Components.RawArgConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Services.HttpClient, Services.SolutionProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
