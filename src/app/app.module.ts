import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignedInModule } from './signed-in/signed-in.module';
import { SignedOutModule } from './signed-out/signed-out.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignedInModule,
    SignedOutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
