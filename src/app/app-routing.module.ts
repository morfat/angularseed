import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import {PublicComponent} from './layouts/public/public.component'
import {SecureComponent} from './layouts/secure/secure.component'
import {AccountsComponent} from './layouts/accounts/accounts.component'

import {PUBLIC_ROUTES,SECURE_ROUTES,ACCOUNTS_ROUTES} from './app.routes';


const routes: Routes = [
   
    { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
    { path: '', component: AccountsComponent, data: { title: 'Accounts Views' }, children: ACCOUNTS_ROUTES },
    { path: '', component: SecureComponent,  data: { title: 'Secure Views' }, children: SECURE_ROUTES }, //canActivate: [Guard],

    { path: '**', redirectTo: '', pathMatch: 'full', }, //match any other

];


@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule] //makes router directives available for use in Appmodule components that will need them

})
export class AppRoutingModule { }

