import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "cuisine-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: [
    "../home/review/review.component.css",
    "./reservation.component.css"
  ]
})
export class ReservationComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  @ViewChild("reserveform")
  tablereserve: ElementRef;

  checkReservation() {
    let hide = this.tablereserve.nativeElement.children[0];
    let show = this.tablereserve.nativeElement.children[1].children[0];
    let date = (<HTMLInputElement>document.querySelector("#reservedate")).value;
    if (date) {
      this.renderer.setStyle(hide, "animation", "lefthide 1s linear");
      setTimeout(() => {
        this.renderer.setStyle(show, "display", "flex");
        this.renderer.setStyle(show, "position", "relative");
        this.renderer.setStyle(show, "z-index", "1");
        this.renderer.setStyle(
          show,
          "animation",
          "reserveformshow 0.7s linear"
        );
        this.renderer.setStyle(hide, "display", "none");
      }, 500);
      setTimeout(() => {
        this.renderer.setStyle(show, "opacity", "1");
      }, 1200);
    }
    else {
      (<HTMLInputElement>document.querySelector("#reservedate")).focus();
    }
  }

  ngOnInit() {}
}
