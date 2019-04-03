import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './custom-components/login/login.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { FaqComponent } from './custom-components/faq/faq.component';

const routes: Routes = [
  { path: '', component: FooterComponent},
  { path: 'help', component: FaqComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
