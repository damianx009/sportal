import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './custom-components/login/login.component';
import { FooterComponent } from './custom-components/footer/footer.component';

const routes: Routes = [
  { path: '', component: FooterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
