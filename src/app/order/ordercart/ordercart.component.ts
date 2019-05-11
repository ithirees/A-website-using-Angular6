import {
  Component,
  OnInit,
  DoCheck,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

import { orderList } from "src/app/shared/order.model";
import { orderCartService } from "../order.service";

@Component({
  selector: "cuisine-ordercart",
  templateUrl: "./ordercart.component.html",
  styleUrls: ["./ordercart.component.css"]
})
export class OrdercartComponent implements OnInit, DoCheck {
  constructor(private neworder: orderCartService) {}

  @Output("validity")
  validTransaction = new EventEmitter();
  @ViewChild('ordercart') ordercart:ElementRef;

  name: string;
  cartList: orderList[] = [];
  totalprice: number;
  validOrder: boolean;
  checkout: boolean;
  cartitemtotal: number;

  removeitem(e: Event) {
    let index = Number(
      (<HTMLElement>e.target).parentElement.parentElement.classList[1].slice(-1)
    );
    this.cartList.splice(index, 1);
    this.cartitemtotal = this.cartList.length;
  }

  calculate() {
    this.totalprice = 0;
    this.cartList.forEach(item => {
      this.totalprice += item.price * item.quantity;
    });
    return this.totalprice;
  }

  orderCart() {
    this.ordercart.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end"
    });
  }

  completeTransaction() {
    this.validOrder = true;
    this.checkout = true;
    this.validTransaction.emit(this.validOrder);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.cartitemtotal = 0;
    this.validOrder = false;
    this.checkout = false;
    this.totalprice = 0;
    this.neworder.getState().subscribe((data: orderList) => {
      if (data) {
        data.quantity = 1;
        if (this.cartList.length === 0) {
          this.cartList.push(data);
          this.cartitemtotal = this.cartList.length;
        } else {
          let logged = false;
          for (let item of this.cartList) {
            if (item.name === data.name && item.price === data.price) {
              logged = true;
              let itemIndex = this.cartList.findIndex(
                index => index.name === item.name
              );
              item.quantity++;
              break;
            }
          }
          if (!logged) {
            this.cartList.push(data);
            this.cartitemtotal = this.cartList.length;
          }
        }
      }
    });
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.calculate();
    if (this.cartList.length) {
      if (this.checkout) this.validOrder = true;
      else this.validOrder = false;
    } else {
      this.validOrder = true;
    }
    this.validTransaction.emit(this.validOrder);
  }
}
