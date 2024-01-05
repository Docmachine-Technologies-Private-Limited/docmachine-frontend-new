import { SidenavComponent } from "./sidenav/sidenav.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
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
import { PipoExportComponent } from './SummaryPage/Export/pipo-export/pipo-export.component';
import { ViewPipoComponent } from './view-pipo/view-pipo.component';
import { AddPipoComponent } from './add-pipo/add-pipo.component';
import { UploadBankIntimationComponent } from './upload-bank-intimation/upload-bank-intimation.component';
import { FooterComponent } from './footer/footer.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { ReactiveFormsModule } from "@angular/forms";
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
import { ExcelDownloaderCompComponent } from "./excel-downloader-comp/excel-downloader-comp.component";
import { DatatableComponent } from "./datatable/datatable.component";
import { AdminGuard } from "../service/RolePermission/Admin/admin.guard";
import { SuperGuard } from "../service/RolePermission/SuperAdmin/super.guard";
import { MemberGuard } from "../service/RolePermission/Member/member.guard";
import { CreateNoteComponent } from "./upload/Import/create-note/create-note.component";
import { DebitNoteComponent } from "./upload/Import/debit-note/debit-note.component";
import { ExportCreditNoteComponent } from "./upload/Export/export-credit-note/export-credit-note.component";
import { ExportDebitNoteComponent } from "./upload/Export/export-debit-note/export-debit-note.component";
import { RemittanceFlowComponent } from './remittance-flow/remittance-flow.component';
import { AdminMemberGuard } from "../service/RolePermission/AdminMember/admin-member.guard";
import { UserProfilesComponent } from "./user-profiles/user-profiles.component";
import { EmailValidatorDirective } from './Validator/email/email-validator.directive';
import { PhoneValidatorDirective } from './Validator/phone/phone-validator.directive';
import { EditRemittanceComponent } from './edit-remittance/edit-remittance.component';
import { RemittanceSummaryComponent } from './remittance-summary/remittance-summary.component';
import { AddRemittanceComponent } from './add-remittance/add-remittance.component';
import { EditCompanyComponent } from "./edit-company/edit-company.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NewBillUnderCollectionComponent } from "./new-bill-under-collection/Bill-Under-Collection.component";
import { ImportNewDirectDispatchComponent } from "./Import-New-Direct-Dispatch/Import-New-Direct-Dispatch.component";
import { MergePdfListService } from "./merge-pdf-list.service";
import { BoeBillService } from '../service/homeservices/BoeBill/boe-bill.service';
import { AdminPanelComponent } from './AdminPanel/admin-panel/admin-panel.component';
import { SuperAdminPanelComponent } from './SuperAdminPanel/admin-panel/admin-panel.component';
import { ForwardContractAddComponent } from './Import/Treasury/ForwardContract/forward-contract-add/forward-contract-add.component';
import { ForwardContractSummaryComponent } from './Import/Treasury/ForwardContract/forward-contract-summary/forward-contract-summary.component';
import { RoleBasedSingUpComponent } from "../RoleBased/role-based-sing-up/role-based-sing-up.component";
import { CustomJPXSchedulerComponent } from "../custom-jpxscheduler/custom-jpxscheduler.component";
import { MasterUploadComponent } from "../components/Upload/master-upload/master-upload.component";
import { EdpmsReconComponent } from "./edpms-recon/edpms-recon.component";
import { IdpmsReconComponent } from "./idpms-recon/idpms-recon.component";
import { ExportUploadModule } from "../components/Upload/Export/export-upload.module";
import { ImportUploadModule } from "../components/Upload/Import/import-upload.module";
import { ExportSummaryModule } from "./SummaryPage/Export/export-summary.module";
import { ImportSummaryModule } from "./SummaryPage/Import/import-summary.module";
import { ImportTransactionModule } from "./Transaction/Import/import-transaction.module";
import { ExportTransactionModule } from "./Transaction/Export/export-transaction.module";
import { TallyApiConnectorComponent } from "../TallyConnector/tally-api-connector/tally-api-connector.component";
import { ContactuspanelComponent } from "./contactuspanel/contactuspanel.component";
import { ContactusTechnicalComponent } from "./contactuspanel/contactus-technical/contactus-technical.component";
import { ContactusProductOptionComponent } from "./contactuspanel/contactus-product-option/contactus-product-option.component";
import { AddBuyerNameAdminMemberComponent } from "./manage-customer/add-buyer-name-admin-member/add-buyer-name-admin-member.component";
import { AddBeneficiaryNameAdminMemberComponent } from "./manage-customer/add-beneficiary-name-admin-member/add-beneficiary-name-admin-member.component";
import { BackUpPanelMongoDBComponent } from "./BackUpModule/back-up-panel-mongo-db/back-up-panel-mongo-db.component";
import { CAFormComponent } from "./15_CA_15_CB/ca-form/ca-form.component";
import { LiveTradeAppComponent } from "../RoleBased/LiveTradeApp/LiveTradeApp.component";
import { GeneratorCouponProductComponent } from "./SuperAdminPanel/ProductCoupon/generator-coupon-product/generator-coupon-product.component";

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
    AddPipoComponent,
    TermsAndConditionComponent,
    PipoExportComponent,
    ViewPipoComponent,
    FooterComponent,
    ConfirmDialogBoxComponent,
    ExcelDownloaderCompComponent,
    RemittanceFlowComponent,
    EditBuyerComponent,
    EditBeneComponent,
    UserProfilesComponent,
    PhoneValidatorDirective,
    EmailValidatorDirective,
    EditRemittanceComponent,
    RemittanceSummaryComponent,
    AddRemittanceComponent,
    EditCompanyComponent,
    NewBillUnderCollectionComponent,
    ImportNewDirectDispatchComponent,
    AdminPanelComponent,
    SuperAdminPanelComponent,
    ForwardContractAddComponent,
    ForwardContractSummaryComponent,
    RoleBasedSingUpComponent,
    MasterUploadComponent,
    TallyApiConnectorComponent,
    ContactuspanelComponent,
    ContactusTechnicalComponent,
    ContactusProductOptionComponent,
    AddBuyerNameAdminMemberComponent,
    AddBeneficiaryNameAdminMemberComponent,
    BackUpPanelMongoDBComponent,
    CAFormComponent,
    LiveTradeAppComponent,
    GeneratorCouponProductComponent
  ],
  imports: [
    SharedHomeModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatTableModule,
    NgSelectModule,
    MatPaginatorModule,
    NgApexchartsModule,
    ProgressBarModule,
    ReactiveFormsModule,
    PdfViewerModule,
    ExportUploadModule,
    ImportUploadModule,
    ExportSummaryModule,
    ImportSummaryModule,
    ExportTransactionModule,
    ImportTransactionModule,
    RouterModule.forChild([
      {
        path: "",
        component: SidenavComponent,
        children: [
          { path: "dashboardTask", loadChildren: () => import('./dashboard-task/dashboard-task.module').then(mod => mod.DashboardTaskModule) },
          { path: "upload", loadChildren: () => import('./upload/upload.module').then(mod => mod.UploadModule), canActivate: [MemberGuard] },
          { path: "manage-customer", loadChildren: () => import('./manage-customer/manage-customer.module').then(mod => mod.ManageCustomerModule), canActivate: [AdminMemberGuard] },
          { path: "createBene", loadChildren: () => import('./create-bene/create-bene.module').then(mod => mod.CreateBeneModule), canActivate: [MemberGuard] },
          { path: "upload-documents/Export", loadChildren: () => import('../components/Upload/Export/export-upload.module').then(mod => mod.ExportUploadModule), canActivate: [MemberGuard] },
          { path: "upload-documents/Import", loadChildren: () => import('../components/Upload/Import/import-upload.module').then(mod => mod.ImportUploadModule), canActivate: [MemberGuard] },

          { path: "Summary/Export", loadChildren: () => import('./SummaryPage/Export/export-summary.module').then(mod => mod.ExportSummaryModule), canActivate: [MemberGuard] },
          { path: "Summary/Import", loadChildren: () => import('./SummaryPage/Import/import-summary.module').then(mod => mod.ImportSummaryModule), canActivate: [MemberGuard] },
          { path: "Summary/Export/Edit", loadChildren: () => import('../components/Upload/Export_Edit/export-edit.module').then(mod => mod.EditExportUploadModule), canActivate: [MemberGuard] },
          { path: "Summary/Import/Edit", loadChildren: () => import('../components/Upload/Import_Edit/import-edit.module').then(mod => mod.ImporEditModule), canActivate: [MemberGuard] },

          { path: "Status", loadChildren: () => import('./StatusPanel/status-panel.module').then(mod => mod.StatusPanelModule), canActivate: [MemberGuard] },
          
          { path: "Transaction/Export", loadChildren: () => import('./Transaction/Export/export-transaction.module').then(mod => mod.ExportTransactionModule), canActivate: [MemberGuard] },
          { path: "Transaction/Import", loadChildren: () => import('./Transaction/Import/import-transaction.module').then(mod => mod.ImportTransactionModule), canActivate: [MemberGuard] },
          
          { path: "advance-outward-remittance", loadChildren: () => import('./advance-outward-remittance/advance-outward-remittance.module').then(mod => mod.AdvanceOutwardRemittanceModule), canActivate: [MemberGuard] },
          { path: "direct-import-payment", loadChildren: () => import('./direct-import-payment/direct-import-payment.module').then(mod => mod.DirectImportPaymentModule), canActivate: [MemberGuard] },
          { path: "a2cum-application-yesbank", loadChildren: () => import('./yesBank/a2cum-application-yes-bank/a2cum-application-yes-bank.module').then(mod => mod.A2cumApplicationYesBankModule), canActivate: [MemberGuard] },
          { path: "fbg-waiver", loadChildren: () => import('./yesBank/advance-fbg-wavier/fbg-wavier.module').then(mod => mod.FbgWavierModule), canActivate: [MemberGuard] },
          { path: "lc-isurance1", loadChildren: () => import('./lc-isurence/lc-isurance.module').then(mod => mod.LcIsuranceModule), canActivate: [MemberGuard] },
          { path: "buyer-credit", loadChildren: () => import('./buyers-credit-request/buyers-credit-request-module').then(mod => mod.BuyersCreditRequestModule), canActivate: [MemberGuard] },
          { path: "bill-under-collection", loadChildren: () => import('./bill-under-collection/bill-under-collection.module').then(mod => mod.BillUnderCollectionModule), canActivate: [MemberGuard] },
          { path: "pipo-export", loadChildren: () => import('./pipo-doc-export/pipo-doc-export.module').then(mod => mod.PipoDocExportModule), canActivate: [MemberGuard] },
          { path: "edpms-recon", component: EdpmsReconComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "idpms-recon-table", loadChildren: () => import('./idpms-recon-table/idpms-recon-table.module').then(mod => mod.IdpmsReconTableModule), canActivate: [MemberGuard] },
          { path: "idpms-recon", component: IdpmsReconComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "completed-task", loadChildren: () => import('./completed-task/completed-task.module').then(mod => mod.CompletedTaskModule), canActivate: [MemberGuard] },
          { path: "tasks", loadChildren: () => import('./all-task/all-task.module').then(mod => mod.AllTaskModule), canActivate: [MemberGuard] },
          { path: "letter-of-credit", loadChildren: () => import('./yesBank/letter-of-credit/letter-of-credit.module').then(mod => mod.LetterOfCreditModule), canActivate: [MemberGuard] },
          { path: "Excel-Downloader", component: ExcelDownloaderCompComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "account", component: EditCompanyComponent, canActivate: [AdminMemberGuard] },
          { path: "user-profiles", component: UserProfilesComponent, pathMatch: "full", canActivate: [AdminMemberGuard] },
          { path: "data-table", component: DatatableComponent, pathMatch: "full", canActivate: [MemberGuard] },
         
          { path: "createBene", component: CreateBeneComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "TallyApiConnector", component: TallyApiConnectorComponent, pathMatch: "full", canActivate: [AdminMemberGuard] },
          { path: "inwardRemittance", component: InwardRemittanceComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "AddBuyerNameAdminMember", component: AddBuyerNameAdminMemberComponent, pathMatch: "full", canActivate: [MemberGuard] },
          { path: "AddBeneficiaryNameAdminMember", component: AddBeneficiaryNameAdminMemberComponent, pathMatch: "full", canActivate: [MemberGuard] },
          {
            path: "edit-remittance",
            component: EditRemittanceComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "eportal.incometax.gov.in",
            component: CAFormComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "backup-mongodb",
            component: BackUpPanelMongoDBComponent,
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
            path: "Contact-Us",
            component: ContactuspanelComponent,
            pathMatch: "full",
            canActivate: [AdminMemberGuard]
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
          {
            path: "inwardRemittanceBoe",
            component: InwardRemittanceBoeComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
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
            path: "new-Bill-Under-Collection",
            component: NewBillUnderCollectionComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "import-direct-dispatch",
            component: ImportNewDirectDispatchComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Forward-Contract-Summary",
            component: ForwardContractSummaryComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Forward-Contract-Add",
            component: ForwardContractAddComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "master-upload",
            component: MasterUploadComponent,
            pathMatch: "full",
            canActivate: [MemberGuard]
          },
          {
            path: "Sheduler-Calender",
            component: CustomJPXSchedulerComponent,
            pathMatch: "full",
            canActivate: [AdminMemberGuard]
          },
          { path: "SuperAdminPanel", pathMatch: "full", component: SuperAdminPanelComponent, canActivate: [SuperGuard] },
          { path: "AdminPanel", pathMatch: "full", component: AdminPanelComponent, canActivate: [AdminGuard] },
          { path: "RoleBase", component: RoleBasedSingUpComponent, pathMatch: "full", canActivate: [SuperGuard] },
          { path: "LiveTradeApp", component: LiveTradeAppComponent, pathMatch: "full", canActivate: [SuperGuard] },
        ],
      },
    ]),
    ModalModule.forRoot(),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal, SharedDataService, MergePdfListService, BoeBillService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MatProgressBarModule,
    MatTabsModule,
    SharedHomeModule,
  ],
})
export class HomeModule {

}
