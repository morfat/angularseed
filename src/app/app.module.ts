import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { LoginComponent } from './accounts/login/login.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AccountsComponent } from './layouts/accounts/accounts.component';
import { LandingComponent } from './public/landing/landing.component';

import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown.directive';

@NgModule({
  declarations: [
    NAV_DROPDOWN_DIRECTIVES,
    AppComponent,
    PublicComponent,
    SecureComponent,
    LoginComponent,
    DashboardComponent,
    AccountsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
