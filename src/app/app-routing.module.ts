import { HomeModule } from './home/home.module';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { SignupRoutingModule } from './signup/signup-routing.module';
import { SigninRoutingModule } from './signIn/signin-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: '../app/home/home.module#HomeModule'},
  {
    path: '**',
    component: PageNotFoundComponent  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    SignupRoutingModule,
    SigninRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
