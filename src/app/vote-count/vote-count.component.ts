
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {
  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();   

  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfDislikes++;
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
