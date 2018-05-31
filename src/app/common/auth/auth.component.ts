import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';

export class AuthComponent implements CanActivate {
  public name = 'Vasya';

  constructor() { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
    return confirm('Вы уверены, что хотите перейти?');
  }


}
