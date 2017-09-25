import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignedInComponent } from './signed-in.component';

const routes: Routes = [
  {
    path : '', component : SignedInComponent,
    children : [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'test-page', loadChildren: './test-page/test-page.module#TestPageModule' },
      { path: 'socket-io', loadChildren: './socket-io/socket-io.module#SocketIoModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignedInRoutingModule { }
