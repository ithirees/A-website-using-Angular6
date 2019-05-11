import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { ReviewComponent } from "./review/review.component";
import { ProductComponent } from "./product/product.component";
import { SpecialComponent } from "./product/special/special.component";

@NgModule({
    declarations: [
        HomeComponent,
        ReviewComponent,
        ProductComponent,
        SpecialComponent
    ],
    imports: [CommonModule]
})

export class HomeModule {}