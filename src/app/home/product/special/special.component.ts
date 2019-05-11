import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/shared/menu.service";
import { Router } from "@angular/router";

import { orderList } from "src/app/shared/order.model";
import { orderCartService } from "src/app/order/order.service";

declare var $: any;

@Component({
  selector: "cuisine-special",
  templateUrl: "./special.component.html",
  styleUrls: [
    "../../../order/orderfood/orderfood.component.css",
    "./special.component.css"
  ]
})
export class SpecialComponent implements OnInit {
  constructor(
    private menu: MenuService,
    private ordercart: orderCartService,
    private router: Router
  ) {}
  TITLE: object;
  MENU: object;
  SPECIAL: orderList[] = [];

  slickSlider() {
    $(".slick-slider").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: 0,
      autoplay: true,
      nextArrow: false,
      prevArrow: false
    });
  }
  addToCart(e) {
    let price = Number(
      (<HTMLSpanElement>event.target).textContent.substring(3)
    );
    let name = (<HTMLSpanElement>event.target).nextElementSibling.textContent;
    let item: orderList;
    for (item of this.SPECIAL) {
      if (item.name === name && Number(item.price) === price) {
        let validorder = new orderList(name, price);
        this.ordercart.setState(validorder);
        this.router.navigate(["/order"]);
        break;
      }
    }
  }

  ngOnInit() {
    this.menu.getJson().subscribe(
      data => {
        this.MENU = data;
        this.TITLE = this.MENU["menu"];
        for (let i = 0; i < 8; i++) {
          let rand = Math.round(Math.random() * 6);
          this.SPECIAL.push(this.MENU[this.TITLE[i]][rand]);
        }
      },
      error => console.log("Error: ", error),
      () => {
        setTimeout(() => {
          this.slickSlider();
        }, 10);
      }
    );
  }
}
