import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReservationComponent } from "./reservation.component";
import { ReserveinfoComponent } from "./reserveinfo/reserveinfo.component";

@NgModule({
    declarations: [
        ReservationComponent,
        ReserveinfoComponent
    ],
    imports: [CommonModule]
})
export class ReserveModule {}