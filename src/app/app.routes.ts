
import {Routes} from '@angular/router';

import {LoginComponent} from './accounts/login';
import {DashboardComponent} from './secure/dashboard/';
import {LandingComponent} from './public/landing';


export const ACCOUNTS_ROUTES: Routes=[
    {path:'login',component:LoginComponent},
    //{path:'',redirectTo:'/login',pathMatch:'full'}
  ];


export const PUBLIC_ROUTES: Routes=[
  {path:'',component:LandingComponent},
];

export const SECURE_ROUTES: Routes=[
    {path:'dashboard',component:DashboardComponent},
    //{path:'',redirectTo:'/dashboard',pathMatch:'full'}
  ];
  