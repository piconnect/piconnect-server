import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    AuthGuard
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
