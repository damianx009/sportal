import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { RouterService } from './router.service';
import { AngularMaterialService } from './angular-material.service';
import { TOKEN_LABEL, AUTHS_LABEL, USERNAME_LABEL } from '../consts/cookie.const';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService{

  userNameChange: EventEmitter<string> = new EventEmitter();
  userAuthsChange: EventEmitter<string> = new EventEmitter();

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

  getUserPrincipal() {
    this.http.get('/api/protected/username').toPromise()
      .then((response: any) => {
        console.log(response);
        this.setUsername(response.name)
        this.setUserAuthorities(response.authorities);
      });
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn = userLoggedIn;
  }

  logout() {
    localStorage.removeItem(TOKEN_LABEL);
    this.cookieService.removeAll();
    this.setUserLoggedIn(false);
    this.routerService.redirectToRoot();
    this.angularMaterialService.openSnackBar('Zostałeś wylogowany...');
  }

  getToken() {
    let token: string;
    if (localStorage.getItem(TOKEN_LABEL)) {
      token = localStorage.getItem(TOKEN_LABEL)
    } else {
      token = this.cookieService.get(TOKEN_LABEL);
    }
    return token;
  }

  storeTokenInLocalStorage() {
    localStorage.setItem(TOKEN_LABEL, this.getToken());
    this.cookieService.remove(TOKEN_LABEL);
  }

  checkToken():Promise<any> {
    return this.http.get('/api/protected/checkToken').toPromise();
  }


  setUsername(name: string) {
    this.cookieService.put(USERNAME_LABEL, name);
    this.userNameChange.emit(name);
  }

  setUserAuthorities(authorities: {authority:string}[]) {
    let auths: string[] = [];

    for (let i = 0; i< authorities.length; i ++) {
      auths.push(authorities[i].authority)
    }

    const authslist: string = auths.join(':');

    this.cookieService.put(AUTHS_LABEL, authslist);
    this.userAuthsChange.emit(authslist);
  }
}
