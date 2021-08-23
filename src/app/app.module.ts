import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanticaQuotesComponent } from './quantica-quotes/quantica-quotes.component';
import { GoalDetailComponent } from './quantica-detail/quantica-detail.component';
import { QuanticaDetailsComponent } from './quantica-details/quantica-details.component';
import { ImpactactionDirective } from './impactaction.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuanticaQuotesComponent,
    GoalDetailComponent,
    QuanticaDetailsComponent,
    ImpactactionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
