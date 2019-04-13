import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';
import { RouterService } from '../services/router.service';
import { AngularMaterialService } from '../services/angular-material.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticateService,
              private routerService: RouterService,
              private angularMaterialService: AngularMaterialService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

    const expectedRoles = route.data.roles;

    if (this.authService.getToken()) {
      if(this.authService.hasRole(expectedRoles)) {
        return true;
      } else {
        this.angularMaterialService.openSnackBar('Nie posiadasz uprawnień by przebywać w tym miejscu.');
        this.routerService.redirectToRoot();
        return false;
      }
    }
    else {
      this.routerService.loginAndRedirectToUrl(state.url);
      return false;
    }
  }
}
