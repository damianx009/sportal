import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { user } from 'src/app/_models/user';
import { AngularMaterialService } from 'src/app/services/angular-material.service';
import { ViewActionService } from 'src/app/services/view-action.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  url: string;
  loading = false;
  submitted = false;
  error: boolean = false;

  user: user = new user();

  constructor(
    private authenticateService: AuthenticateService,
    private router: Router,
    private angularMaterialService: AngularMaterialService,
    private routerService: RouterService,
    private viewActionService: ViewActionService,
    private route: ActivatedRoute
  ) {

    if (this.authenticateService.userLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);


    this.authenticateService.register(this.user).then(
      (response: HttpResponse<any>) => {
        console.log(response);
        this.angularMaterialService.openSnackBar("Zostałeś zarejestrowany !");
       this.router.navigate(['/']);
      }
    )
  }
}