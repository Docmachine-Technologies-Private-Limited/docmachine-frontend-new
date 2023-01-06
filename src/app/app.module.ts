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
// NG Translate
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
import { AppConfig } from '../app/app.config';
import { MembersigninComponent } from './membersignin/membersignin.component';
import { PdfComponent } from './pdf/pdf.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import {WindowInformationService} from './service/window-information.service'
import {InterceptorService} from './service/interceptor.service';
import { TwofactorauthComponent } from './shared/components/twofactorauth/twofactorauth.component';
import { HomeModule } from "./home/home.module";
import { CheckboxComponentsComponent } from "./home/checkbox-components/checkbox-components.component";
import {CustomConfirmDialogModelComponent} from './custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component'
import {CustomConfirmDialogModelService} from './custom/custom-confirm-dialog-model/custom-confirm-dialog-model.service'
import { CustomDropdownComponent } from "./custom/custom-dropdown/custom-dropdown.component";
import { CustomdropdownservicesService } from "./custom/custom-dropdown/customdropdownservices.service";

//import { SidenavComponent } from './home/sidenav/sidenav.component';

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
        CustomConfirmDialogModelComponent,
        CustomDropdownComponent
    ],
    providers: [{ provide: AppConfig },
        WindowInformationService,
        CustomConfirmDialogModelService,
        CustomdropdownservicesService,
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        DropzoneModule,
        DragDropModule,
        SharedModule,
        SignupModule,
        BsDatepickerModule.forRoot(),
        SigninModule,
        AppRoutingModule,
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
export class AppModule { }
