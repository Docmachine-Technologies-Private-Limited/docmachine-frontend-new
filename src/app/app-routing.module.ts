import { HomeModule } from "./home/home.module";
import { SidenavComponent } from "./home/sidenav/sidenav.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";

import { SignupRoutingModule } from "./signup/signup-routing.module";
import { SigninRoutingModule } from "./signIn/signin-routing.module";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { AddMemberComponent } from "./add-member/add-member.component";

import { CreateTeam1Component } from "./create-team1/create-team1.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { PowerAdminComponent } from "./power-admin/power-admin.component";
import { NewUserComponent } from "./new-user/new-user.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  { path: "home", loadChildren: () => import('../app/home/home.module').then(mod => mod.HomeModule) },
  {
    path: "forgotpassword",
    component: ForgotPasswordComponent,
    pathMatch: "full",
  },
  {
    path: "updatePassword/:id",
    component: UpdatePasswordComponent,
    pathMatch: "full",
  },
  //{ path: 'createTeam',component: CreateTeamComponent, pathMatch: 'full'},
  { path: "createTeam", component: CreateTeam1Component, pathMatch: "full" },
  { path: "addMember", component: AddMemberComponent, pathMatch: "full" },
  { path: "newUser", component: NewUserComponent, pathMatch: "full" },
  { path: "powerAdmin", component: PowerAdminComponent, pathMatch: "full" },

  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    SignupRoutingModule,
    SigninRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
