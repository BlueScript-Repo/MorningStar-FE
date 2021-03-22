import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
=======

import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PackageCustomizatonModule } from './package-customizaton/package-customizaton.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
>>>>>>> 810969d3a5ebd80ec0116130c8d96c095de1ddff
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
=======
    PackageCustomizatonModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
>>>>>>> 810969d3a5ebd80ec0116130c8d96c095de1ddff
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
