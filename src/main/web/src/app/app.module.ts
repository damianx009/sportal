import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { LoginComponent } from './custom-components/login/login.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { PageNotFoundComponent } from './custom-components/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './custom-components/navigation/header/header.component';
import { SidenavListComponent } from './custom-components/navigation/sidenav-list/sidenav-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpHeadersConfigInterceptor } from './interceptors/http-headers-config.interceptor';
import { FaqComponent } from './custom-components/faq/faq.component';
import { AgmCoreModule } from '@agm/core';
import { HomeViewComponent } from './custom-components/home-view/home-view.component';
import { RegisterComponent } from './custom-components/login/register/register.component';
import { AcceptRegisterComponent } from './custom-components/login/register/acceptregister/acceptregister.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AcceptRegisterComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidenavListComponent,
    FaqComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGWO_MHhFm_yRmGtw-lWkUG6UsH7Xv58I',
      libraries: ["places"]
    })
  ],
  providers: [CookieService,
              { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
