import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class orderCartService {
  ordertaken = new BehaviorSubject<any>(null);

  setState(state: any) {
    this.ordertaken.next(state);
  }

  getState(): Observable<any> {
    return this.ordertaken.asObservable();
  }
}
