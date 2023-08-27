import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { AddMemberComponent } from "./add-member/add-member.component";
import { MatDialogModule } from '@angular/material/dialog';
import { CreateTeam1Component } from "./create-team1/create-team1.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NotVerifiedComponent } from "./not-verified/not-verified.component";
import { MembersigninComponent } from "./membersignin/membersignin.component";
import { PdfComponent } from "./pdf/pdf.component";
import { TwofactorauthComponent } from "./shared/components/twofactorauth/twofactorauth.component";
import { AdminGuard } from "./service/RolePermission/Admin/admin.guard";
import { ResetOTPComponent } from "./forgot-password/reset-otp/reset-otp.component";
import { RoleVerifyEmailComponent } from "./RoleVerifyEmail/role-verify-email/role-verify-email.component";
import { SharedHomeModule } from "./home/shared-home.module";
import { SigninComponent } from "./signIn/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { AuthorizationTallyIntrgrationComponent } from "./authorization-tally-intrgration/authorization-tally-intrgration.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: SigninComponent,
    pathMatch: "full",
  },
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import('../app/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: "forgotpassword",
    component: ForgotPasswordComponent,
    pathMatch: "full",
  },
  {
    path: "resetOTP",
    component: ResetOTPComponent,
    pathMatch: "full",
  },
  {
    path: "2FA",
    component: TwofactorauthComponent,
    pathMatch: "full",
  },
  {
    path: "updatePassword/:id",
    component: UpdatePasswordComponent,
    pathMatch: "full",
  },
  {
    path: "verifyEmail/:id",
    component: VerifyEmailComponent,
    pathMatch: "full",
  },
  {
    path: "RoleVerifyEmail/:id",
    component: RoleVerifyEmailComponent,
    pathMatch: "full",
  },
  { path: "authorization", component: AuthorizationComponent },
  { path: "TallyAuthorization", component: AuthorizationTallyIntrgrationComponent },
  { path: "createTeam", component: CreateTeam1Component, canActivate: [AdminGuard] },
  { path: "addMember", component: AddMemberComponent, pathMatch: "full", canActivate: [AdminGuard] },
  { path: "newUser", component: NewUserComponent, pathMatch: "full" },
  { path: "notVerified", component: NotVerifiedComponent, pathMatch: "full" },
  { path: "membersignin/:id", component: MembersigninComponent, pathMatch: "full" },
  { path: "pdf", component: PdfComponent, pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedHomeModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
