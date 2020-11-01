import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.css']
})
export class VoteCountComponent implements OnInit {
  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }
  dislikeButtonClick() {
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
