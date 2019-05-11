import { Component, OnInit } from '@angular/core';
import { carouselList } from '../shared/carousel.model';


@Component({
  selector: 'cuisine-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel:carouselList[] = [
    new carouselList('../assets/home/slideshow1.jpg',
    'Indian Cuisine 1'),
    new carouselList('../assets/home/slideshow2.jpg',
    'Indian Cuisine 2'),
    new carouselList('../assets/home/slideshow3.jpg',
    'Indian Cuisine 3'),
    new carouselList('../assets/home/slideshow4.png',
    'Indian Cuisine 4'),
    new carouselList('../assets/home/slideshow5.jpg',
    'Indian Cuisine 5'),
    new carouselList('../assets/home/slideshow6.jpg',
    'Indian Cuisine 6'),
    new carouselList('../assets/home/slideshow7.jpg',
    'Indian Cuisine 7'),
    new carouselList('../assets/home/slideshow8.jpg',
    'Indian Cuisine 8'),
    new carouselList('../assets/home/slideshow9.jpg',
    'Indian Cuisine 9'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
