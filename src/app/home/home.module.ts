import { SidenavComponent } from "./sidenav/sidenav.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ConfirmDialogService } from "../confirm-dialog/confirm-dialog.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from './pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from './shared-Data-Servies/shared-data.service';
import { SharedHomeModule } from "./shared-home.module";
import { AgainstAdvanceComponent } from "./yesBank/against-advance/against-advance.component";
import { RequestLetterComponent } from "./yesBank/request-letter/request-letter.component";
import { LetterOfCreditImportComponent } from "./yesBank/letter-of-credit-import/letter-of-credit-import.component";
import { A2cumAplicationComponent } from "./axisBank/a2cum-aplication/a2cum-aplication.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { AdvanceRemitanceComponent } from "./axisBank/advance-remitance/advance-remitance.component";
import { CreateBeneComponent } from "./create-bene/create-bene.component";
import { EditBeneComponent } from "./edit-bene/edit-bene.component";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { RequestComponent } from "./request/request.component";
import { OutwardRemComponent } from './outward-rem/outward-rem.component';
import { CaDocumentsComponent } from './ca-documents/ca-documents.component';
import { InwardRemmitanceComponent } from './inward-remmitance/inward-remmitance.component';
import { InwardRemmitancep0103Component } from './yesBank/inward-remmitancep0103/inward-remmitancep0103.component';
import { CompletedExportComponent } from './Export/completed-export/completed-export.component';
import { BuyersLodgeComponent } from './yesBank/buyers-lodge/buyers-lodge.component';
import { PowerAdminComponent } from './power-admin/power-admin.component';
import { EditBuyerComponent } from './edit-buyer/edit-buyer.component';
import { TestComponent } from './test/test/test.component';
import { HelpComponent } from './help/help.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { InwardRemittanceComponent } from "./yesBank/inwardRemittance/inwardRemittance.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { ProgressBarModule } from "angular-progress-bar"
import { PipoExportComponent } from './pipo-export/pipo-export.component';
import { EditPipoComponent } from './edit-pipo/edit-pipo.component';
import { ViewPipoComponent } from './view-pipo/view-pipo.component';
import { AddPipoComponent } from './add-pipo/add-pipo.component';
import { UploadBankIntimationComponent } from './upload-bank-intimation/upload-bank-intimation.component';
import { FooterComponent } from './footer/footer.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { InwardRemittanceBoeComponent } from './yesBank/inward-remittance-boe/inward-remittance-boe.component';
import { TradeRequestLetterComponent } from './yesBank/trade-request-letter/trade-request-letter.component';
import { FbgBuyerFileComponent } from './yesBank/fbg-waiver-file/fbg-buyer-file.component';
import { AdvanceRemitanceFbgComponent } from './axisBank/advance-remitance-fbg/advance-remitance-fbg.component';
import { DirectImportAxisComponent } from './axisBank/direct-import-axis/direct-import-axis.component';
import { BuyersCreditAxisComponent } from './axisBank/buyers-credit-axis/buyers-credit-axis.component';
import { LetterOfCreditImportAxisComponent } from './axisBank/letter-of-credit-import-axis/letter-of-credit-import-axis.component';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmDialogBoxComponent } from './confirm-dialog-box/confirm-dialog-box.component';
import { UploadDocComponent } from "./Export/export-home/upload-doc/upload-doc.component";
import { ExcelDownloaderCompComponent } from "./excel-downloader-comp/excel-downloader-comp.component";
import { DatatableComponent } from "./datatable/datatable.component";
import { SubBillLodgementComponent } from "./Export/sub-bill-lodgement/sub-bill-lodgement.component";
import { ApprovalPanelComponent } from "./StatusPanel/approval-panel/approval-panel.component";
import { PendingPanelComponent } from './StatusPanel/pending-panel/pending-panel.component';
import { RejectPanelComponent } from './StatusPanel/reject-panel/reject-panel.component';
import { AdminGuard } from "../service/RolePermission/Admin/admin.guard";
import { SuperGuard } from "../service/RolePermission/SuperAdmin/super.guard";
import { MemberGuard } from "../service/RolePermission/Member/member.guard";
import { CreateNoteComponent } from "./upload/Import/create-note/create-note.component";
import { DebitNoteComponent } from "./upload/Import/debit-note/debit-note.component";
import { ExportCreditNoteComponent } from "./upload/Export/export-credit-note/export-credit-note.component";
import { ExportDebitNoteComponent } from "./upload/Export/export-debit-note/export-debit-note.component";
import { ImportBillOfExchangeComponent } from "./import-bill-of-exchange/import-bill-of-exchange.component";
import { RemittanceFlowComponent } from './remittance-flow/remittance-flow.component';
import { AdminMemberGuard } from "../service/RolePermission/AdminMember/admin-member.guard";
import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance/add-advance-outward-remittance.component';
import { UserProfilesComponent } from "./user-profiles/user-profiles.component";
import { EmailValidatorDirective } from './Validator/email/email-validator.directive';
import { PhoneValidatorDirective } from './Validator/phone/phone-validator.directive';
import { EditRemittanceComponent } from './edit-remittance/edit-remittance.component';
import { RemittanceSummaryComponent } from './remittance-summary/remittance-summary.component';
import { AddRemittanceComponent } from './add-remittance/add-remittance.component';
import { ImportOpinionReportsComponent } from "./import-opinion-reports/import-opinion-reports.component";
import { EditCompanyComponent } from "./edit-company/edit-company.component";
import { LetterOfCreditImportLCComponent } from "./letter-of-credit-import-lc/letter-of-credit-import-lc.component";
import { MasterServiceComponent } from "./master-service/master-service.component";
import { ImportMasterServiceComponent } from "./import-master-service/import-master-service.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NewBillUnderCollectionComponent } from "./new-bill-under-collection/Bill-Under-Collection.component";
import { NewDirectDispatchComponent } from "./New-Direct-Dispatch/New-Direct-Dispatch.component";
import { ImportNewDirectDispatchComponent } from "./Import-New-Direct-Dispatch/Import-New-Direct-Dispatch.component";
import { MergePdfListService } from "./merge-pdf-list.service";
import { BoeBillService } from '../service/homeservices/BoeBill/boe-bill.service';
import { ImportDirectPaymentComponent } from './Import-Direct-Payment/Import-Direct-Payment.component';
import { PackingCreditRequestComponent } from './Packing-Credit-Request/Packing-Credit-Request.component';
import { TransactionDashboardComponent } from "../transaction-dashboard/transaction-dashboard.component";
import { DocumentService } from "../service/document.service";
import { UserService } from "../service/user.service";
import { AuthenticateService } from "../service/authenticate.service";
import { AuthGuard } from "../service/authguard.service";
import { AdminPanelComponent } from './AdminPanel/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ManageUserComponent,
    FbgBuyerFileComponent,
    OutwardRemComponent,
    CaDocumentsComponent,
    InwardRemmitanceComponent,
    InwardRemmitancep0103Component,
    UploadBankIntimationComponent,
    CompletedExportComponent,
    PowerAdminComponent,
    ModalContentComponent1,
    HelpComponent,
    TermsAndConditionComponent,
    PipoExportComponent,
    EditPipoComponent,
    ViewPipoComponent,
    AddPipoComponent,
    FooterComponent,
    ConfirmDialogBoxComponent,
    ExcelDownloaderCompComponent,
    SubBillLodgementComponent,
    ApprovalPanelComponent,
    PendingPanelComponent,
    RejectPanelComponent,
    RemittanceFlowComponent,
    EditBuyerComponent,
    EditBeneComponent,
    UserProfilesComponent,
    PhoneValidatorDirective,
    EmailValidatorDirective,
    EditRemittanceComponent,
    RemittanceSummaryComponent,
    AddRemittanceComponent,
    AddAdvanceOutwardRemittanceComponent,
    EditCompanyComponent,
    NewBillUnderCollectionComponent,
    NewDirectDispatchComponent,
    ImportNewDirectDispatchComponent,
    ImportDirectPaymentComponent,
    PackingCreditRequestComponent,
    TransactionDashboardComponent,
    AdminPanelComponent
  ],
  imports: [
    SharedHomeModule,
    MatProgressBarModule,
    MatNativeDateModule, MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatTableModule,
    NgSelectModule,
    MatPaginatorModule,
    NgApexchartsModule,
    ProgressBarModule,
    ReactiveFormsModule,
    PdfViewerModule,
    RouterModule.forChild([
      {
        path: "",
        component: SidenavComponent,
        children: [
          { path: "dashboardTask", loadChildren: () => import('./dashboard-task/dashboard-task.module').then(mod => mod.DashboardTaskModule) },
          { path: "upload", loadChildren: () => import('./upload/upload.module').then(mod => mod.UploadModule), canActivate: [MemberGuard] },
          {
            path: "manage-customer",
            loadChildren: () => import('./manage-customer/manage-customer.module').then(mod => mod.ManageCustomerModule),
            canActivate: [AdminGuard]
          },
          { path: "createBene", loadChildren: () => import('./create-bene/create-bene.module').then(mod => mod.CreateBeneModule), canActivate: [MemberGuard] },
          { path: "pipo-doc", loadChildren: () => import('./pipo-documents/pipo-documents.module').then(mod => mod.PipoDocumentsModule), canActivate: [MemberGuard] },
          { path: "boe", loadChildren: () => import('./boe/boe.module').then(mod => mod.BoeModule), canActivate: [MemberGuard] },
          { path: "importCredit", loadChildren: () => import('./imports-credit-note/imports-credit-note.module').then(mod => mod.ImportsCreditNoteModule), canActivate: [MemberGuard] },
          { path: "importDebit", loadChildren: () => import('./import-debit-note/import-debit-note.module').then(mod => mod.ImportDebitNoteModule), canActivate: [MemberGuard] },
          { path: "importInsurance", loadChildren: () => import('./import-insurance/imports-insurance.module').then(mod => mod.ImportsInsuranceModule), canActivate: [MemberGuard] },
          { path: "importTriParty", loadChildren: () => import('./import-tri-party/imports-tri-party.module').then(mod => mod.ImportsTriPartyModule) },
          { path: "advance-outward-remittance", loadChildren: () => import('./advance-outward-remittance/advance-outward-remittance.module').then(mod => mod.AdvanceOutwardRemittanceModule), canActivate: [MemberGuard] },
          { path: "direct-import-payment", loadChildren: () => import('./direct-import-payment/direct-import-payment.module').then(mod => mod.DirectImportPaymentModule), canActivate: [MemberGuard] },
          { path: "a2cum-application-yesbank", loadChildren: () => import('./yesBank/a2cum-application-yes-bank/a2cum-application-yes-bank.module').then(mod => mod.A2cumApplicationYesBankModule), canActivate: [MemberGuard] },
          { path: "fbg-waiver", loadChildren: () => import('./yesBank/advance-fbg-wavier/fbg-wavier.module').then(mod => mod.FbgWavierModule), canActivate: [MemberGuard] },
          { path: "lc-isurance", loadChildren: () => import('./lc-isurence/lc-isurance.module').then(mod => mod.LcIsuranceModule), canActivate: [MemberGuard] },
          { path: "buyer-credit", loadChildren: () => import('./buyers-credit-request/buyers-credit-request-module').then(mod => mod.BuyersCreditRequestModule), canActivate: [MemberGuard] },
          { path: "bill-under-collection", loadChildren: () => import('./bill-under-collection/bill-under-collection.module').then(mod => mod.BillUnderCollectionModule), canActivate: [MemberGuard] },
          { path: "pipo-export", loadChildren: () => import('./pipo-doc-export/pipo-doc-export.module').then(mod => mod.PipoDocExportModule), canActivate: [MemberGuard] },
          { path: "packing-list", loadChildren: () => import('./other-documents/other-documents.module').then(mod => mod.OtherDocumentsModule), canActivate: [MemberGuard] },
          { path: "import-packing-list", loadChildren: () => import('./import-other-documents/import-other-documents.module').then(mod => mod.ImportOtherDocumentsModule), canActivate: [MemberGuard] },
          { path: "commercial", loadChildren: () => import('./commercial/commercial.module').then(mod => mod.CommercialModule), canActivate: [MemberGuard] },
          { path: "import-commercial", loadChildren: () => import('./import-commercial/import-commercial.module').then(mod => mod.ImportCommercialModule), canActivate: [MemberGuard] },
          { path: "destruction", loadChildren: () => import('./destruction/destruction.module').then(mod => mod.DestructionModule), canActivate: [MemberGuard] },
          { path: "import-destruction", loadChildren: () => import('./import-destruction/import-destruction.module').then(mod => mod.ImportDestructionModule), canActivate: [MemberGuard] },
          { path: "bill-of-exchange", loadChildren: () => import('./bill-of-exchange/bill-of-exchange.module').then(mod => mod.BillOfExchangeModule), canActivate: [MemberGuard] },
          { path: "import-bill-of-exchange", loadChildren: () => import('./import-bill-of-exchange/import-bill-of-exchange.module').then(mod => mod.ImportBillOfExchangeModule), canActivate: [MemberGuard] },
          { path: "airway-bl-copy", loadChildren: () => import('./airway-blcopy/airway-blcopy.module').then(mod => mod.AirwayBlcopyModule), canActivate: [MemberGuard] },
          { path: "import-airway-bl-copy", loadChildren: () => import('./import-airway-blcopy/import-airway-blcopy.module').then(mod => mod.ImportAirwayBlcopyModule), canActivate: [MemberGuard] },
          { path: "inward-remittance-advice", loadChildren: () => import('./inward-remittance-advice/inward-remittance-advice.module').then(mod => mod.InwardRemittanceAdviceModule), canActivate: [MemberGuard] },
          { path: "outward-remittance-advice", loadChildren: () => import('./import-outward-remittance-sheet/outward-remittance-advice.module').then(mod => mod.OutwardRemittanceAdviceModule), canActivate: [MemberGuard] },
          { path: "opinion-report", loadChildren: () => import('./opinion-reports/opinion-reports.module').then(mod => mod.OpinionReportsModule), canActivate: [MemberGuard] },
          { path: "import-opinion-report", loadChildren: () => import('./import-opinion-reports/import-opinion-reports.module').then(mod => mod.ImportOpinionReportsModule), canActivate: [MemberGuard] },
          { path: "try-party", loadChildren: () => import('./try-party-agreements/try-party-agreements.module').then(mod => mod.TryPartyAgreementsModule), canActivate: [MemberGuard] },
          { path: "master-services", loadChildren: () => import('./master-service/master-service.module').then(mod => mod.MasterServiceModule), canActivate: [MemberGuard] },
          { path: "import-master-services", loadChildren: () => import('./import-master-service/import-master-service.module').then(mod => mod.ImportMasterServiceModule), canActivate: [MemberGuard] },
          { path: "letterofcredit-lc", loadChildren: () => import('./letter-of-credit-export-lc/letter-of-credit-export-lc.module').then(mod => mod.LetterOfCreditExportLcModule), canActivate: [MemberGuard] },
          { path: "letterofcredit-import-lc", loadChildren: () => import('./letter-of-credit-import-lc/letter-of-credit-import-lc.module').then(mod => mod.LetterOfCreditImportLCModule), canActivate: [MemberGuard] },
          { path: "insurance-document", loadChildren: () => import('./insurance-document/insurance-document.module').then(mod => mod.InsuranceDocumentModule), canActivate: [MemberGuard] },
          { path: "debit-note", loadChildren: () => import('./debit-note/debit-note.module').then(mod => mod.DebitNoteModule), canActivate: [MemberGuard] },
          { path: "credit-note", loadChildren: () => import('./credit-note/credit-note.module').then(mod => mod.CreditNoteModule), canActivate: [MemberGuard] },
          { path: "view-document", loadChildren: () => import('./view-document/view-document.module').then(mod => mod.ViewDocumentModule), canActivate: [MemberGuard] },
          { path: "edpms-recon-table", loadChildren: () => import('./edpms-recon-table/edpms-recon-table.module').then(mod => mod.EdpmsReconTableModule), canActivate: [MemberGuard] },
          { path: "edpms-recon", loadChildren: () => import('./edpms-recon/edpms-recon.module').then(mod => mod.EdpmsReconModule), canActivate: [MemberGuard] },
          { path: "bill-lodgement", loadChildren: () => import('./Export/bill-lodgement/bill-lodgement.module').then(mod => mod.BillLodgementModule), canActivate: [MemberGuard] },
          { path: "packing-credit-request", loadChildren: () => import('./Export/packing-credit/packing-credit.module').then(mod => mod.PackingCreditModule), canActivate: [MemberGuard] },
          { path: "export-home", loadChildren: () => import('./Export/export-home/export-home.module').then(mod => mod.ExportHomeModule), canActivate: [MemberGuard] },
          { path: "completed-task", loadChildren: () => import('./completed-task/completed-task.module').then(mod => mod.CompletedTaskModule), canActivate: [MemberGuard] },
          { path: "tasks", loadChildren: () => import('./all-task/all-task.module').then(mod => mod.AllTaskModule), canActivate: [MemberGuard] },
          { path: "letter-of-credit", loadChildren: () => import('./yesBank/letter-of-credit/letter-of-credit.module').then(mod => mod.LetterOfCreditModule), canActivate: [MemberGuard] },
          { path: "Pdf-Upload", component: UploadDocComponent },
          {
            path: "Excel-Downloader",
            component: ExcelDownloaderCompComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          { path: "account", component: EditCompanyComponent, canActivate: [AdminMemberGuard] },
          {
            path: "user-profiles",
            component: UserProfilesComponent,
            pathMatch: "full",
            canActivate: [AdminMemberGuard]
          },
          {
            path: "data-table",
            component: DatatableComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Sub-bill-Lodgement",
            component: SubBillLodgementComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "createBene",
            component: CreateBeneComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "inwardRemittance",
            component: InwardRemittanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },

          {
            path: "edit-remittance",
            component: EditRemittanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "add-remittance",
            component: AddRemittanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "remittance-summary",
            component: RemittanceSummaryComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "pipo",
            component: PipoExportComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "view-pipo/:id",
            component: ViewPipoComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "add-pipo/:doc_type",
            component: AddPipoComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "edit-pipo/:doc_type/:id",
            component: EditPipoComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "againstAdvance",
            component: AgainstAdvanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "requestLetter",
            component: RequestLetterComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "letterOfCreditImport",
            component: LetterOfCreditImportComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "letterOfCreditImportAxis",
            component: LetterOfCreditImportAxisComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "a2cumApplication",
            component: A2cumAplicationComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "advance-remittance",
            component: AdvanceRemitanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "editBene/:id",
            component: EditBeneComponent,
            pathMatch: "full",
            canActivate: [AdminGuard]
          },
          {
            path: "editBuyer/:id",
            component: EditBuyerComponent,
            pathMatch: "full",
            canActivate: [AdminGuard]
          },
          {
            path: "upload-bank-intimation",
            component: UploadBankIntimationComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },

          {
            path: "test",
            component: TestComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "manageUser",
            component: ManageUserComponent,
            pathMatch: "full",
            canActivate: [AdminGuard]
          },
          {
            path: "requestLetter1",
            component: RequestComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },

          // { path: "fbg-wavier", loadChildren: () => import('./yesBank/advance-fbg-wavier/fbg-wavier.module').then(mod => mod.FbgWavierModule) },
          {
            path: "advance-remittance-fbg",
            component: AdvanceRemitanceFbgComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "direct-import-axis",
            component: DirectImportAxisComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          // {
          //   path: "completedTask/:id",
          //   component: CompletedTaskComponent,
          //   pathMatch: "full",
          // },
          {
            path: "inwardRemittanceBoe",
            component: InwardRemittanceBoeComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          // {
          //   path: "paymentAcceptance",
          //   component: PaymentAcceptanceLetterComponent,
          //   pathMatch: "full",
          // },
          {
            path: "tradeRequestLetter",
            component: TradeRequestLetterComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          { path: "payment-acceptance", loadChildren: () => import('./yesBank/payment-acceptance-letter/payment-acceptance.module').then(mod => mod.PaymentAcceptanceModule), canActivate: [MemberGuard] },
          {
            path: "buyersCreditAxis",
            component: BuyersCreditAxisComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },

          {
            path: "fbg-wavier-file/:id",
            component: FbgBuyerFileComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "outwardRemitance",
            component: OutwardRemComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "inwardRemmitance",
            component: InwardRemmitanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "caDocuments/:file",
            component: CaDocumentsComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          // {
          //   path: "tasks/:file",
          //   component: AllTaskComponent,
          //   pathMatch: "full",
          // },
          {
            path: "inwardRemmitancep0103",
            component: InwardRemmitancep0103Component,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "completedExport/:id",
            component: CompletedExportComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "BuyersLodge",
            component: BuyersLodgeComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "powerAdmin/:file",
            component: PowerAdminComponent,
            pathMatch: "full",
            canActivate: [SuperGuard]
          },
          {
            path: "help",
            component: HelpComponent,
            pathMatch: "full",
          },
          {
            path: "t&c",
            component: TermsAndConditionComponent,
            pathMatch: "full",
          },
          {
            path: "approvalpanel",
            component: ApprovalPanelComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "pendingpanel",
            component: PendingPanelComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          }, {
            path: "rejectpanel",
            component: RejectPanelComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          }, {
            path: "ImportCredit",
            component: CreateNoteComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ImportDebit",
            component: DebitNoteComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ImportBillOfExchange",
            component: ImportBillOfExchangeComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ImportOpinionReports",
            component: ImportOpinionReportsComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "letterOfCreditLCImport",
            component: LetterOfCreditImportLCComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "MasterService",
            component: MasterServiceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ImportMasterService",
            component: ImportMasterServiceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ExportCredit",
            component: ExportCreditNoteComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "ExportDebit",
            component: ExportDebitNoteComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "remittance-flow",
            component: RemittanceFlowComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "add-advance-outward-remittance",
            component: AddAdvanceOutwardRemittanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Import-Direct-Payment",
            component: ImportDirectPaymentComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "new-Bill-Under-Collection",
            component: NewBillUnderCollectionComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "direct-dispatch",
            component: NewDirectDispatchComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Packing-Credit-Request-New",
            component: PackingCreditRequestComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "import-direct-dispatch",
            component: ImportNewDirectDispatchComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          }, {
            path: "Transaction-Dashboard/:id",
            component: TransactionDashboardComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          { path: "AdminPanel", pathMatch: "full",component:AdminPanelComponent, canActivate: [MemberGuard] },
        ],
      },
    ]),
    ModalModule.forRoot(),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal, SharedDataService, MergePdfListService, BoeBillService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MatProgressBarModule, MatTabsModule, SharedHomeModule],
})
export class HomeModule implements OnInit {
  userData: any = [];
  userActivity;

  constructor(
    private router: Router, public doc: DocumentService,
    private userService: UserService,
    public authservice: AuthenticateService,
    public authGuard: AuthGuard) {
  }
  ngOnInit(): void {
    console.log('gfdgdgfdgfdgf')

  };
}
