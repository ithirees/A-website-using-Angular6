import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OrderComponent } from "./order.component";
import { canDeactivateGuard } from "../shared/candeactivate.service";

const route: Routes = [
    {
        path: '',
        component: OrderComponent,
        canDeactivate: [canDeactivateGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})
export class OrderRoutingModule {}