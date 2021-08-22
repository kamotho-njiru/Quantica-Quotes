import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { QuanticaQuotes } from './quantica-quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:QuanticaQuotes[]=[
    new QuanticaQuotes(1,'Kamotho','Endurance','When life gives you lemons make lemonades.','Samuel Njiru', new Date(2021,8,22),0,0),
    new QuanticaQuotes(2, 'Lucy','life-skill','There is no coming to consciousness.','Mwai Kibaki' ,new Date(2021,8,22),0,0),
    new QuanticaQuotes(3,'Faith','Philosophy','Who looks outside,dreams; who looks inside,awakes','Carl Jung'),new Date(2021,8,22),0,0),
    new QuanticaQuotes(4,'Kamau','Mathematics','Mathematics is the queen of the science','Ga') new Date(2021,8,22)
  ]
  
  
  
}
