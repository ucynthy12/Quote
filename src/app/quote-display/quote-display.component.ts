import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {
  showForm: boolean;
  toggleForm() {
    this.showForm = !this.showForm;
  }
  quote: Quote[] = [
    new Quote(1, "Stephen Hawking", "God not only plays dice, He throws them in the corner where you can't see them", new Date(2020, 9, 27), 0, 0),
    new Quote(2, "ROBERT FROST", "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.", new Date(2020, 9, 30), 0, 0)
  ]
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date(quote.datePosted);
    this.quote.push(quote)
    console.log(this.quote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
