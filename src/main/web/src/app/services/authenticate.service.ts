import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { RouterService } from './router.service';
import { AngularMaterialService } from './angular-material.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService{

  public userLoggedIn: boolean = false;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private routerService: RouterService,
              private angularMaterialService: AngularMaterialService) {
               }

  login(username: string, password: string) {

    let body = {
      "username": username,
      "password": password 
    }

    return this.http.post('/login',body).toPromise();
  }

  checkToken():Promise<any> {
    return this.http.get('/api/protected/checkToken').toPromise();
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn = userLoggedIn;
  }

  logout() {
    localStorage.removeItem('TOKEN');
    this.cookieService.remove('TOKEN');
    this.setUserLoggedIn(false);
    this.routerService.redirectToRoot();
    this.angularMaterialService.openSnackBar('Zostałeś wylogowany...');
  }

  getToken() {
    let token: string;
    if (localStorage.getItem('TOKEN')) {
      token = localStorage.getItem('TOKEN')
    } else {
      token = this.cookieService.get('TOKEN');
    }
    return token;
  }

  storeTokenInLocalStorage() {
    localStorage.setItem('TOKEN', this.getToken());
    this.cookieService.remove('TOKEN');
  }

}
