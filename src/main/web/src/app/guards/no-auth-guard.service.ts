import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{

  constructor(private authService: AuthenticateService,
              private routerService: RouterService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

    if (this.authService.getToken()) {
      this.routerService.redirectToRoot();
      return false;
    }
    else {
      return true;
    }
  }
}
