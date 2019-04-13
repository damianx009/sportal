import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './custom-components/login/login.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { FaqComponent } from './custom-components/faq/faq.component';
import { NoAuthGuard } from './guards/no-auth-guard.service';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: FooterComponent},
  { path: 'help',
    component: FaqComponent,
    canActivate: [AuthGuard], 
    data: {
      roles: ['ROLE_CUSTOMER', 'ROLE_TEST']
    }
  },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
