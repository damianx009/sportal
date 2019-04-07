import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpResponse } from '@angular/common/http';
import { AngularMaterialService } from 'src/app/services/angular-material.service';
import { RouterService } from 'src/app/services/router.service';
import { ViewActionService } from 'src/app/services/view-action.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rememberMe: boolean = false;

  invalidCrudentials: boolean = false;
  url: string;

  constructor(private authenticateService: AuthenticateService,
              private angularMaterialService: AngularMaterialService,
              private routerService: RouterService,
              private viewActionService: ViewActionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.url = queryParams.get("url");
    });
  }


  onSubmit(form: NgForm) {
    this.authenticateService.login(form.value.login, form.value.password).then(
      () => {
        this.authenticateService.setUserLoggedIn(true);
        this.authenticateService.getUserPrincipal();
        if(this.rememberMe) {
          this.authenticateService.storeTokenInLocalStorage();
        }

        if (this.url) {
          this.router.navigate([this.url]);
        } else {
          this.routerService.redirectToRoot();
        }
        this.angularMaterialService.openSnackBar('Zostałeś zalogowany !');
      }
    ).catch(err=> {
        if(this.invalidCrudentials) {
          this.viewActionService.blinkElement('invalid-crudential-alert');
        } else {
          this.invalidCrudentials = true;
        }
      });
  }
}
