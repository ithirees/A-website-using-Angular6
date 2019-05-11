import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs";

import { orderCartService } from "./order.service";
import { MenuService } from "../shared/menu.service";
import { orderList } from "../shared/order.model";

declare var $: any;

@Component({
  selector: "cuisine-order",
  templateUrl: "./order.component.html",
  styleUrls: [
    "../home/product/special/special.component.css",
    "../menu/menu.component.css",
    "./order.component.css"
  ]
})
export class OrderComponent implements OnInit {
  constructor(private menu: MenuService, private ordercart: orderCartService) {}
  TITLE: object;
  MENU: object;
  SPECIAL: orderList[] = [];
  @ViewChild('orderFoodItems') orderFoodItems:ElementRef;

  validTransaction: boolean = true;

  scrollViewOrder(){
    this.orderFoodItems.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  slickSlider() {
    $(".slick-slider").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: 0,
      autoplay: true,
      autoplayspeed: 600,
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
        break;
      }
    }
  }

  validityCheck(value) {
    this.validTransaction = value;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.validTransaction) {
      let deactivateConfirm = window.confirm(
        "This will discard all your Cart changes. Do you want to continue?"
      );
      if (deactivateConfirm == true){
        this.ordercart.setState(null);
        return true;
      }
      else {return false;}
    }
    return true;
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
        }, 1);
      }
    );
  }
}
