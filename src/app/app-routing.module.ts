import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './signed-in/signed-in.module#SignedInModule',
    canActivate : [AuthGuard]
  },
  { path : 'login', loadChildren : './login/login.module#LoginModule' },
  { path : 'register', loadChildren : './register/register.module#RegisterModule' },
  { path : 'forget-password', loadChildren : './forget-password/forget-password.module#ForgetPasswordModule' },
  { path : 'reset-password', loadChildren : './reset-password/reset-password.module#ResetPasswordModule' },
  { path : 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path : '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
