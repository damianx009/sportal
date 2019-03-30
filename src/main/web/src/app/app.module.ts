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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
