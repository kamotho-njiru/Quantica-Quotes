import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanticaQuotesComponent } from './quantica-quotes/quantica-quotes.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { QuanticaDetailsComponent } from './quantica-details/quantica-details.component';
import { ImpactactionDirective } from './impactaction.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuanticaQuotesFormComponent } from './quantica-quotes-form/quantica-quotes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanticaQuotesComponent,
    GoalDetailComponent,
    QuanticaDetailsComponent,
    ImpactactionDirective,
    DateCountPipe,
    QuanticaQuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
