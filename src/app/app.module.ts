import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanticaQuotesComponent } from './quantica-quotes/quantica-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanticaQuotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
