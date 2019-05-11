import { Component, OnInit } from "@angular/core";

import { MenuService } from "../shared/menu.service";

@Component({
  selector: "cuisine-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor(private menu: MenuService) {}
  MENU: object;
  TITLE: object;
  TitleId: object;

  scrollIntoView(e: Event) {
    let element = (<HTMLElement>e.target).textContent;
    let viewElement = "";
    for (let item in this.TITLE) {
      if (element === this.TITLE[item]) {
        viewElement = "menuTitle" + item;
        break;
      }
    }
    setTimeout(() => {
      let scrollElement = document.querySelector(`#${viewElement}`);
      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end"
      });
    }, 200);
  }

  ngOnInit() {
    this.menu.getJson().subscribe(data => {
      this.MENU = data;
      this.TITLE = this.MENU["menu"];
      this.TitleId = JSON.parse(JSON.stringify(this.TITLE));
      for (let item in this.TitleId) {
        this.TitleId[item] = this.TitleId[item].replace(/\s/g, "");
      }
    });
  }
}
