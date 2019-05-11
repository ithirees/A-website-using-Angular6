import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuisine-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  gallery: string[];

  ngOnInit() {
    this.gallery = [
      '../assets/gallery/1.jpg',
      '../assets/gallery/2.jpg',
      '../assets/gallery/3.jpg',
      '../assets/gallery/4.jpg',
    ];
  }

}
