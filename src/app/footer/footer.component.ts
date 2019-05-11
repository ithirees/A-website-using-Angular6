import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cuisine-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  getDate() {
    let date:Date = new Date();
    return date.getFullYear();
  }
  constructor() { }

  ngOnInit() {
  }

}
