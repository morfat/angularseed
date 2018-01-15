
import {Routes} from '@angular/router';

import {LoginComponent} from './accounts/login';
import {DashboardComponent} from './secure/dashboard/';


export const ACCOUNTS_ROUTES: Routes=[
    {path:'login',component:LoginComponent},
    //{path:'',redirectTo:'/login',pathMatch:'full'}
  ];

export const SECURE_ROUTES: Routes=[
    {path:'dashboard',component:DashboardComponent},
    //{path:'',redirectTo:'/dashboard',pathMatch:'full'}
  ];
  