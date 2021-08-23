import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Quantica-quote } from '../quantica-quote';
@Component({
  selector: 'app-quantica-quotes-form',
  templateUrl: './quantica-quotes-form.component.html',
  styleUrls: ['./quantica-quotes-form.component.css']
})
export class QuanticaQuotesFormComponent implements OnInit {
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
