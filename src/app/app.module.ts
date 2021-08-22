import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanticaQuotesComponent } from './quantica-quotes/quantica-quotes.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { QuanticaDetailsComponent } from './quantica-details/quantica-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanticaQuotesComponent,
    GoalDetailComponent,
    QuanticaDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
