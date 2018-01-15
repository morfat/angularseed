import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';

import { SecureComponent } from './layouts/secure/secure.component';
import { LoginComponent } from './accounts/login/login.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AccountsComponent } from './layouts/accounts/accounts.component';

import { NAV_DROPDOWN_DIRECTIVES } from './directives/nav-dropdown.directive';

@NgModule({
  declarations: [
    NAV_DROPDOWN_DIRECTIVES,
    AppComponent,
   
    SecureComponent,
    LoginComponent,
    DashboardComponent,
    AccountsComponent,
   
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
