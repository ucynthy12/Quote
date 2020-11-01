import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  showForm: boolean;
  toggleForm() {
    this.showForm = !this.showForm;
  }
  quote: Quote[] = [
    new Quote(1, "Stephen Hawking", "God not only plays dice, He throws them in the corner where you can't see them", new Date(2020, 9, 27), 0, 0),
    new Quote(2, "ROBERT FROST", "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day", new Date(2020, 9, 30), 0, 0),
    new Quote(3, "Maya Angelou", "There is no greater agony than bearing an untold story inside you", new Date(2020, 9, 29), 0, 0),
  ]
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date(quote.datePosted);
    this.quote.push(quote)
    console.log(this.quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote: "${this.quote[index].quotes}"?`)

      if (toDelete) {
        this.quote.splice(index, 1)
      }
    }
  }

  sortedQuote() {
    return this.quote.sort((a, b) =>
      (b.numberOfLikes - a.numberOfLikes) ? 1 : (a.numberOfLikes - b.numberOfLikes) ? -1 : 0);

  }


  highestVote() {
    for (let uQuotes of this.quote) {
      if ((this.quote.indexOf(uQuotes) === 0) && (uQuotes.numberOfLikes > 0)) {
        return uQuotes.quotes
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
