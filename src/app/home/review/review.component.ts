import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';

@Component({
  selector: 'cuisine-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews:Review[] = [
    new Review("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    , "Charles Dickens, America"),
    new Review("Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", "John Green, Canada"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
