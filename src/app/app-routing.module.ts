import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "menu",
    loadChildren: "./menu/menu.module#MenuModule"
  },
  {
    path: "order",
    loadChildren: "./order/order.module#OrderModule"
  },
  {
    path: "reservation",
    component: ReservationComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent
  },
  {
    path: "**",
    redirectTo: "page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
