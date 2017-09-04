import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { SignedOutComponent } from './signed-out/signed-out.component';

@NgModule({
  declarations: [
    AppComponent,
    SignedInComponent,
    SignedOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
