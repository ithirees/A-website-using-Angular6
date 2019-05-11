import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class MenuService {
  configUrl = "assets/menu.json";

  constructor(private http: HttpClient) {}
  getJson() {
    return this.http.get(this.configUrl).pipe(map(res => res));
  }
}
