import { Quote } from '../quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() quote: Quote;
  newQuote = new Quote(0, '', '', new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}