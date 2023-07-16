import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import {
  DropzoneModule,
  DropzoneConfigInterface,
  DROPZONE_CONFIG,
} from "ngx-dropzone-wrapper";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { SignupModule } from "./signup/signup.module";
import { SigninModule } from "./signIn/signin.module";
import { AppComponent } from "./app.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { CreateTeam1Component } from "./create-team1/create-team1.component";
import { AddMemberComponent } from "./add-member/add-member.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { RouterModule } from "@angular/router";
import { NewUserComponent } from './new-user/new-user.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NotVerifiedComponent } from './not-verified/not-verified.component';
import { MembersigninComponent } from './membersignin/membersignin.component';
import { PdfComponent } from './pdf/pdf.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { WindowInformationService } from './service/window-information.service'
import { InterceptorService } from './service/interceptor.service';
import { TwofactorauthComponent } from './shared/components/twofactorauth/twofactorauth.component';
import { HomeModule } from "./home/home.module";
import { CheckboxComponentsComponent } from "./home/checkbox-components/checkbox-components.component";
import { CustomConfirmDialogModelService } from './custom/custom-confirm-dialog-model/custom-confirm-dialog-model.service'
import { CustomdropdownservicesService } from "./custom/custom-dropdown/customdropdownservices.service";
import { AprrovalPendingRejectTransactionsService } from './service/aprroval-pending-reject-transactions.service';
import { AuthorizationComponent } from './Authorization/authorization/authorization.component';
import { AdminGuard } from "./service/RolePermission/Admin/admin.guard";
import { SuperGuard } from "./service/RolePermission/SuperAdmin/super.guard";
import { MemberGuard } from "./service/RolePermission/Member/member.guard";
import { AdminMemberGuard } from "./service/RolePermission/AdminMember/admin-member.guard";
import { DateFormatService } from "./DateFormat/date-format.service"
import { JoinPipePipe } from './join-pipe.pipe';
import { ResetOTPComponent } from './forgot-password/reset-otp/reset-otp.component';
import { BehaviorSubjectListService } from "./home/CommanSubjectApi/BehaviorSubjectListService/BehaviorSubjectList.service";
import { RoleVerifyEmailComponent } from './RoleVerifyEmail/role-verify-email/role-verify-email.component';
import { UploadServiceValidatorService } from "./components/Upload/service/upload-service-validator.service";
import { PipoDataService } from "./service/homeservices/pipo.service";
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  acceptedFiles: "image/*",
  maxFilesize: 3,
  createImageThumbnails: true,
};
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    CreateTeamComponent,
    CreateTeam1Component,
    AddMemberComponent,
    UpdatePasswordComponent,
    NewUserComponent,
    VerifyEmailComponent,
    NotVerifiedComponent,
    MembersigninComponent,
    PdfComponent,
    TwofactorauthComponent,
    CheckboxComponentsComponent,
    AuthorizationComponent,
    JoinPipePipe,
    ResetOTPComponent,
    RoleVerifyEmailComponent
  ],
  providers: [
    WindowInformationService,
    CustomConfirmDialogModelService,
    CustomdropdownservicesService,
    AprrovalPendingRejectTransactionsService,
    AdminGuard,
    SuperGuard,
    MemberGuard,
    AdminMemberGuard,
    DateFormatService,
    BehaviorSubjectListService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DropzoneModule,
    DragDropModule,
    SharedModule,
    SignupModule,
    BsDatepickerModule.forRoot(),
    SigninModule,
    AppRoutingModule,
    HomeModule,
    NgSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class AppModule {
  constructor(public behaviorsubjectlist: BehaviorSubjectListService) {
    this.behaviorsubjectlist.callAllCommonApi();
  }
}