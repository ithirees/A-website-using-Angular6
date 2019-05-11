import { Component, OnInit } from "@angular/core";

import { MenuService } from "src/app/shared/menu.service";
import { orderCartService } from "../order.service";
import { orderList } from "src/app/shared/order.model";

@Component({
  selector: "cuisine-orderfood",
  templateUrl: "./orderfood.component.html",
  styleUrls: ["./orderfood.component.css"]
})
export class OrderfoodComponent implements OnInit {
  constructor(private menu: MenuService, private ordercart: orderCartService) {}
  MENU: object;
  TITLE: object;

  getJsonData() {
    this.menu.getJson().subscribe(data => {
      this.MENU = data;
      this.TITLE = this.MENU["menu"];
    });
  }

  addToCart(event) {
    let price = Number(
      (<HTMLSpanElement>event.target).textContent.substring(3)
    );
    let name = (<HTMLSpanElement>event.target).nextElementSibling.textContent;
    let locateContent = (<HTMLSpanElement>(
      event.target
    )).parentElement.parentElement.parentElement.id.substring(5);
    let menuTitle = this.MENU[this.TITLE[locateContent]];
    for (let item in menuTitle) {
      if (menuTitle[item].name === name) {
        let id = item;
        if (
          menuTitle[id].name === name &&
          Number(menuTitle[id].price) === price
        ) {
          let validorder = new orderList(name, price);
          this.ordercart.setState(validorder);
        }
        break;
      }
    }
  }

  ngOnInit() {
    this.getJsonData();
  }
}
