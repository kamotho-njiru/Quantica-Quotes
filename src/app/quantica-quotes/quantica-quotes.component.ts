import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Quote } from '../quantica-quotes';

@Component({
  selector: 'app-quantica-quotes',
  templateUrl: './quantica-quotes.component.html',
  styleUrls: ['./quantica.quotes.component.css']
})
export class Quantica-quotesComponent implements OnInit{
  title = 'welcome to inspirational quotes';
  quotes:QuanticaQuotes[]=[
    new QuanticaQuotes(1,'Kamotho','Endurance','When life gives you lemons make lemonades.','Samuel Njiru', new Date(2021,8,22),0,0),
    new QuanticaQuotes(2, 'Lucy','life-skill','There is no coming to consciousness.','Mwai Kibaki' ,new Date(2021,8,22),0,0),
    new QuanticaQuotes(3,'Faith','Philosophy','Who looks outside,dreams; who looks inside,awakes','Carl Jung',new Date(2021,8,22),0,0),
    new QuanticaQuotes(4,'Kamau','Mathematics','Mathematics is the queen of the science','Gauss Johnna', new Date(2021,8,22),0,0),
    new QuanticaQuotes(5,'Kim','Philosophy','Dont grieve Anything you lose comes round in another form','Mario Antoinette',new Date(2021,8,22),0,0
    new QuanticaQuotes(6,'Antony','Wisdom','I have seen all I have heard all I have forgotten all','Kamotho Njiru', new Date(2021,8,22),0,0),
  ]
}
