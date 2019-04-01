import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpResponse } from '@angular/common/http';
import { AngularMaterialService } from 'src/app/services/angular-material.service';
import { RouterService } from 'src/app/services/router.service';
import { ViewActionService } from 'src/app/services/view-action.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCrudentials: boolean = false;

  constructor(private authenticateService: AuthenticateService,
              private angularMaterialService: AngularMaterialService,
              private routerService: RouterService,
              private viewActionService: ViewActionService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    this.authenticateService.login(form.value.login, form.value.password).then(
      (response: HttpResponse<any>) => {
        this.authenticateService.setUserLoggedIn(true);
        this.routerService.redirectToRoot();
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
