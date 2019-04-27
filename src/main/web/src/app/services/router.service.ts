import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  redirectToRoot() {
    this.router.navigate(["/"]);
  }

  redirectToLoginPage() {
    this.router.navigate(["/login"]);
  }
  
  redirectToRegisterPage() {
    this.router.navigate(["/register"]);
  }

  redirectToAcceptRegisterPage() {
    this.router.navigate(["/acceptregister"]);
  }

  loginAndRedirectToUrl(url: string) {
    this.router.navigate(["/login"], { queryParams: {url: url}});
  }
}
