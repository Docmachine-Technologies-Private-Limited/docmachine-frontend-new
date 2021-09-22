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
import { OutwardRemittanceComponent } from "./advance-outward-remittance/outward-remittance.component";
import { NumberToWordsPipe } from "./pipe/number-to-words.pipe";
import { FbgWavierComponent } from "./yesBank/advance-fbg-wavier/fbg-wavier.component";
import { DirectImportPaymentComponent } from './direct-import-payment/direct-import-payment.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { InwardRemittanceBoeComponent } from './yesBank/inward-remittance-boe/inward-remittance-boe.component';
import { PaymentAcceptanceLetterComponent } from './yesBank/payment-acceptance-letter/payment-acceptance-letter.component';
import { BillUnderCollectionComponent } from './bill-under-collection/bill-under-collection.component';
import { LcIsurenceComponent } from './lc-isurence/lc-isurence.component';
import { TradeRequestLetterComponent } from './yesBank/trade-request-letter/trade-request-letter.component';
import { BuyersCreditRequestComponent } from './buyers-credit-request/buyers-credit-request.component';
import { FbgBuyerComponent } from './fbg-waiver/fbg-buyer.component';
import { FbgBuyerFileComponent } from './yesBank/fbg-waiver-file/fbg-buyer-file.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { AdvanceRemitanceFbgComponent } from './axisBank/advance-remitance-fbg/advance-remitance-fbg.component';
import { DirectImportAxisComponent } from './axisBank/direct-import-axis/direct-import-axis.component';
import { BuyersCreditAxisComponent } from './axisBank/buyers-credit-axis/buyers-credit-axis.component';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';
import { LetterOfCreditImportAxisComponent } from './axisBank/letter-of-credit-import-axis/letter-of-credit-import-axis.component';
import { OutwardRemComponent } from './outward-rem/outward-rem.component';
import { A2cumApplicationYesBankComponent } from './yesBank/a2cum-application-yes-bank/a2cum-application-yes-bank.component';
import { CaDocumentsComponent } from './ca-documents/ca-documents.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { InwardRemmitanceComponent } from './inward-remmitance/inward-remmitance.component';
import { InwardRemmitancep0103Component } from './yesBank/inward-remmitancep0103/inward-remmitancep0103.component';
import { ExportHomeComponent } from './Export/export-home/export-home.component';
import { BillLodgementComponent } from './Export/bill-lodgement/bill-lodgement.component';
import { CompletedExportComponent } from './Export/completed-export/completed-export.component';
import { PackingCreditComponent } from './Export/packing-credit/packing-credit.component';
import { ConfirmDialogService } from "../confirm-dialog/confirm-dialog.service";

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PipoDocumentsComponent } from './pipo-documents/pipo-documents.component';
// import { TradeRequestTradeComponent } from './yesBank/trade-request-trade/trade-request-trade.component';

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
    DirectImportPaymentComponent,
    CompletedTaskComponent,
    InwardRemittanceBoeComponent,
    PaymentAcceptanceLetterComponent,
    BillUnderCollectionComponent,
    LcIsurenceComponent,
    TradeRequestLetterComponent,
    BuyersCreditRequestComponent,
    FbgBuyerComponent,
    FbgBuyerFileComponent,
    ViewDocumentComponent,
    AdvanceRemitanceFbgComponent,
    DirectImportAxisComponent,
    BuyersCreditAxisComponent,
    DashboardNewComponent,
    LetterOfCreditImportAxisComponent,
    OutwardRemComponent,
    A2cumApplicationYesBankComponent,
    CaDocumentsComponent,
    AllTaskComponent,
    InwardRemmitanceComponent,
    InwardRemmitancep0103Component,
    ExportHomeComponent,
    BillLodgementComponent,
    CompletedExportComponent,
    PackingCreditComponent,
    ConfirmDialogComponent,
    PipoDocumentsComponent
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
          {
            path: "dashboardNew",
            component: DashboardNewComponent,
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
            path: "letterOfCreditImportAxis",
            component: LetterOfCreditImportAxisComponent,
            pathMatch: "full",
          },
          {
            path: "a2cumApplication",
            component: A2cumAplicationComponent,
            pathMatch: "full",
          },
          {
            path: "a2cumApplicationYesbank",
            component: A2cumApplicationYesBankComponent,
            pathMatch: "full",
          },
          {
            path: "advance-remittance/:boeNumber",
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
            path: "fbg-wavier/:id",
            component: FbgWavierComponent,
            pathMatch: "full",
          },
          {
            path: "advance-remittance-fbg/:id",
            component: AdvanceRemitanceFbgComponent,
            pathMatch: "full",
          },
          {
            path: "direct-import-axis/:boeNumber",
            component: DirectImportAxisComponent,
            pathMatch: "full",
          },
          {
            path: "direct-import-payment",
            component: DirectImportPaymentComponent,
            pathMatch: "full",
          },
          {
            path: "completedTask/:id",
            component: CompletedTaskComponent,
            pathMatch: "full",
          },
          {
            path: "inwardRemittanceBoe/:boeNumber",
            component: InwardRemittanceBoeComponent,
            pathMatch: "full",
          },
          {
            path: "paymentAcceptance",
            component: PaymentAcceptanceLetterComponent,
            pathMatch: "full",
          },
          {
            path: "bill-under-collection/:file",
            component: BillUnderCollectionComponent,
            pathMatch: "full",
          },
          {
            path: "lc-isurence/:file",
            component: LcIsurenceComponent,
            pathMatch: "full",
          },
          {
            path: "tradeRequestLetter/:id",
            component: TradeRequestLetterComponent,
            pathMatch: "full",
          },
          {
            path: "buyersCreditAxis/:id",
            component: BuyersCreditAxisComponent,
            pathMatch: "full",
          },
          {
            path: "buyerCredit",
            component: BuyersCreditRequestComponent,
            pathMatch: "full",
          },
          {
            path: "fbgWaiver",
            component: FbgBuyerComponent,
            pathMatch: "full",
          },
          {
            path: "fbg-wavier-file/:id",
            component: FbgBuyerFileComponent,
            pathMatch: "full",
          },
          {
            path: "viewDocument/:file",
            component: ViewDocumentComponent,
            pathMatch: "full",
          },
          {
            path: "outwardRemitance",
            component: OutwardRemComponent,
            pathMatch: "full",
          },
          {
            path: "inwardRemmitance",
            component: InwardRemmitanceComponent,
            pathMatch: "full",
          },
          {
            path: "caDocuments/:file",
            component: CaDocumentsComponent,
            pathMatch: "full",
          },
          {
            path: "tasks/:file",
            component: AllTaskComponent,
            pathMatch: "full",
          },
          {
            path: "inwardRemmitancep0103",
            component: InwardRemmitancep0103Component,
            pathMatch: "full",
          },
          {
            path: "exportHome",
            component: ExportHomeComponent,
            pathMatch: "full",
          },
          {
            path: "billLodgement",
            component: BillLodgementComponent,
            pathMatch: "full",
          },
          {
            path: "completedExport/:id",
            component: CompletedExportComponent,
            pathMatch: "full",
          },
          {
            path: "packingCreditRequest",
            component: PackingCreditComponent,
            pathMatch: "full",
          },
          {
            path: "pipoDoc",
            component: PipoDocumentsComponent,
            pathMatch: "full",
          },
        ],
      },
    ]),
  ],
  providers: [ConfirmDialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //   exports: [SharedProjectsModule]
  exports: [MatProgressBarModule, MatTabsModule, ConfirmDialogComponent],
})
export class HomeModule { }
