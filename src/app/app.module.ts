import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { MenuService } from "./shared/menu.service";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { ReserveModule } from "./reservation/reservation.module";
import { orderCartService } from "./order/order.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ReserveModule
  ],
  providers: [MenuService, orderCartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
