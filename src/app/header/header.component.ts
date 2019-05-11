import { Component, OnInit, Renderer2 } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { MenuService } from "../shared/menu.service";

@Component({
  selector: "cuisine-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private menu: MenuService
  ) {}
  TITLE: object;

  ngOnInit() {
    this.menu.getJson().subscribe(data => {
      this.TITLE = data["menu"];
    });
  }
}
