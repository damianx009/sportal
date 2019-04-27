import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { HttpResponse } from '@angular/common/http';
import { AngularMaterialService } from 'src/app/services/angular-material.service';
import { RouterService } from 'src/app/services/router.service';
import { ViewActionService } from 'src/app/services/view-action.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acceptregister',
  templateUrl: './acceptregister.component.html',
  styleUrls: ['./acceptregister.component.css']
})
export class AcceptRegisterComponent {

}
