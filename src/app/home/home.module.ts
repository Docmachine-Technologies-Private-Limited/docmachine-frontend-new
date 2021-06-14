import { InwardRemittanceComponent } from "./yesBank/inwardRemittance/inwardRemittance.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UploadComponent } from "./upload/upload.component";
import {
  DropzoneModule,
  DropzoneConfigInterface,
  DROPZONE_CONFIG,
} from "ngx-dropzone-wrapper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AgainstAdvanceComponent } from "./yesBank/against-advance/against-advance.component";
import { RequestLetterComponent } from "./yesBank/request-letter/request-letter.component";
import { LetterOfCreditComponent } from "./yesBank/letter-of-credit/letter-of-credit.component";
import { LetterOfCreditImportComponent } from "./yesBank/letter-of-credit-import/letter-of-credit-import.component";
import { A2cumAplicationComponent } from "./axisBank/a2cum-aplication/a2cum-aplication.component";
import { AdvanceRemitanceComponent } from "./axisBank/advance-remitance/advance-remitance.component";
import { CreateBeneComponent } from "./create-bene/create-bene.component";
import { ManageCustomerComponent } from "./manage-customer/manage-customer.component";
import { EditBeneComponent } from "./edit-bene/edit-bene.component";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { DashboardTaskComponent } from "./dashboard-task/dashboard-task.component";
import { RequestComponent } from "./request/request.component";
import { EditCompanyComponent } from "./edit-company/edit-company.component";
import { OutwardRemittanceComponent } from "./outward-remittance/outward-remittance.component";
import { NumberToWordsPipe } from "./pipe/number-to-words.pipe";
import { FbgWavierComponent } from "./axisBank/fbg-wavier/fbg-wavier.component";
import { TestComponent } from "./test/test/test.component";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  acceptedFiles: "image/*",
  maxFilesize: 3,
  createImageThumbnails: true,
};
// import {LocalStorageService} from '../../shared/services/localstorage.service';
// import {SharedProjectsModule} from '../../shared/shared.projects.module';
// import {ProposalsService} from '../../shared/services/proposals.service';
// import {CommentsService} from '../../shared/services/comments.service';
// import {SharedProfileModule} from '../freelancerprofile/shared.profile.module';

@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent,
    UploadComponent,
    InwardRemittanceComponent,
    AgainstAdvanceComponent,
    RequestLetterComponent,
    LetterOfCreditComponent,
    LetterOfCreditImportComponent,
    A2cumAplicationComponent,
    AdvanceRemitanceComponent,
    CreateBeneComponent,
    ManageCustomerComponent,
    EditBeneComponent,
    ManageUserComponent,
    DashboardTaskComponent,
    RequestComponent,
    EditCompanyComponent,
    OutwardRemittanceComponent,
    NumberToWordsPipe,
    FbgWavierComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    DragDropModule,
    MatProgressBarModule,
    MatTabsModule,
    // BrowserModule,

    // SharedProjectsModule,
    // SharedProfileModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: SidenavComponent,
        children: [
          {
            path: "dashboard",
            component: DashboardComponent,
            pathMatch: "full",
          },
          {
            path: "dashboardTask",
            component: DashboardTaskComponent,
            pathMatch: "full",
          },
          { path: "upload", component: UploadComponent, pathMatch: "full" },
          {
            path: "manageCustomer",
            component: ManageCustomerComponent,
            pathMatch: "full",
          },
          {
            path: "createBene",
            component: CreateBeneComponent,
            pathMatch: "full",
          },
          {
            path: "inwardRemittance/:boeNumber",
            component: InwardRemittanceComponent,
            pathMatch: "full",
          },
          {
            path: "againstAdvance",
            component: AgainstAdvanceComponent,
            pathMatch: "full",
          },
          {
            path: "requestLetter",
            component: RequestLetterComponent,
            pathMatch: "full",
          },
          {
            path: "letterOfCredit",
            component: LetterOfCreditComponent,
            pathMatch: "full",
          },
          {
            path: "letterOfCreditImport",
            component: LetterOfCreditImportComponent,
            pathMatch: "full",
          },
          {
            path: "a2cumApplication",
            component: A2cumAplicationComponent,
            pathMatch: "full",
          },
          {
            path: "advance-remittance",
            component: AdvanceRemitanceComponent,
            pathMatch: "full",
          },
          {
            path: "editBene/:id",
            component: EditBeneComponent,
            pathMatch: "full",
          },

          {
            path: "manageUser",
            component: ManageUserComponent,
            pathMatch: "full",
          },
          {
            path: "requestLetter1",
            component: RequestComponent,
            pathMatch: "full",
          },
          {
            path: "account",
            component: EditCompanyComponent,
            pathMatch: "full",
          },
          {
            path: "advance-outward-remittance",
            component: OutwardRemittanceComponent,
            pathMatch: "full",
          },
          {
            path: "fbg-wavier",
            component: FbgWavierComponent,
            pathMatch: "full",
          },
          {
            path: "test",
            component: TestComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //   exports: [SharedProjectsModule]
  exports: [MatProgressBarModule, MatTabsModule],
})
export class HomeModule {}
