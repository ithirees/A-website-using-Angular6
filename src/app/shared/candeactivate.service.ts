import { Observable } from "rxjs";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

export interface canDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class canDeactivateGuard
  implements CanDeactivate<canDeactivateComponent> {
  canDeactivate(
    component: canDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
