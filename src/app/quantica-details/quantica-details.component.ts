import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Quantica } from './quantica';


@Component({
  selector: 'app-quantica-details',
  templateUrl: './quantica-details.component.html',
  styleUrls: ['./quantica-details.component.css']
})
export class QuanticaDetailsComponent implements OnInit {
  @Input() quoty: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quoty.likes+=1;
  }
  downvote(){
    this.quoty.dislikes+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
