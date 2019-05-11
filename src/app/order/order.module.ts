import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { OrderComponent } from "./order.component";
import { OrderfoodComponent } from "./orderfood/orderfood.component";
import { OrdercartComponent } from "./ordercart/ordercart.component";

import { OrderRoutingModule } from "./order-routing.module";

import { canDeactivateGuard } from "../shared/candeactivate.service";

@NgModule({
  declarations: [OrderComponent, OrderfoodComponent, OrdercartComponent],
  imports: [CommonModule, FormsModule, OrderRoutingModule],
  providers: [canDeactivateGuard]
})
export class OrderModule {}
