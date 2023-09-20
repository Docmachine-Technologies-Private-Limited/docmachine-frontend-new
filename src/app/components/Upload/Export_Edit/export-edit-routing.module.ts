import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditShippingBillComponent } from './shipping-bill/shipping-bill.component';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { EditInsurancedocumentsComponent } from './insurancedocuments/insurancedocuments.component';
import { EditLetterofCreditComponent } from './letterof-credit/letterof-credit.component';
import { EditMasterServiceAgreementsComponent } from './master-service-agreements/master-service-agreements.component';
import { EditTripartyAgreementsComponent } from './triparty-agreements/triparty-agreements.component';
import { EditAirwayBlCopyComponent } from './airway-bl-copy/airway-bl-copy.component';
import { EditBillOfExchangesComponent } from './bill-of-exchanges/bill-of-exchanges.component';
import { EditDestructionCertificatesComponent } from './destruction-certificates/destruction-certificates.component';
import { EditPackingListInvoicesComponent } from './packing-list-invoices/packing-list-invoices.component';
import { EditCommercialInvoicesComponent } from './commercial-invoices/commercial-invoices.component';
import { EditOpinionReportsComponent } from './opinion-reports/opinion-reports.component';
import { EditInwardRemittanceAdviceComponent } from './inward-remittance-advice/inward-remittance-advice.component';
import { EditCreditNoteComponent } from './credit-note/credit-note.component';
import { EditDebitNotesComponent } from './debit-note/debit-note.component';
import { EditPIPOSComponent } from './pipos/pipos.component';
import { EditExportBilllodgementreferencenumberadvicecopyComponent } from './export-billlodgementreferencenumberadvicecopy/export-billlodgementreferencenumberadvicecopy.component';
import { EditExportRealisationCertificateComponent } from './export-realisation-certificate/export-realisation-certificate.component';
import { EditExportSwiftCopyDocumentComponent } from './export-swift-copy-document/export-swift-copy-document.component';
import { EditInwardUploadDocumentsComponent } from './Inward-Remittance-Disposal/inward-upload-doc.component';
import { EditExportCertificateOfOriginComponent } from './export-certificate-of-origin/export-certificate-of-origin.component';

const routes: Routes = [
  // Export Upload
  { path: "Shippingbill", component: EditShippingBillComponent, canActivate: [MemberGuard] },
  { path: "Insurancedocuments", component: EditInsurancedocumentsComponent, canActivate: [MemberGuard] },
  { path: "LetterofCredit", component: EditLetterofCreditComponent, canActivate: [MemberGuard] },
  { path: "MasterServiceAgreements", component: EditMasterServiceAgreementsComponent, canActivate: [MemberGuard] },
  { path: "TripartyAgreements", component: EditTripartyAgreementsComponent, canActivate: [MemberGuard] },
  { path: "AirwayBlCopy", component: EditAirwayBlCopyComponent, canActivate: [MemberGuard] },
  { path: "BillOfExchanges", component: EditBillOfExchangesComponent, canActivate: [MemberGuard] },
  { path: "DestructionCertificates", component: EditDestructionCertificatesComponent, canActivate: [MemberGuard] },
  { path: "PackingListInvoices", component: EditPackingListInvoicesComponent, canActivate: [MemberGuard] },
  { path: "CommercialInvoices", component: EditCommercialInvoicesComponent, canActivate: [MemberGuard] },
  { path: "OpinionReports", component: EditOpinionReportsComponent, canActivate: [MemberGuard] },
  { path: "InwardRemittanceAdvice", component: EditInwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
  { path: "InwardRemittanceAdvice/:id?", component: EditInwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
  { path: "CreditNoteDocument", component: EditCreditNoteComponent, canActivate: [MemberGuard] },
  { path: "DebitNoteDocument", component: EditDebitNotesComponent, canActivate: [MemberGuard] },
  { path: "PIPO", component: EditPIPOSComponent, canActivate: [MemberGuard] },
  { path: "Bill-Lodgement-Referance-AdviceCopy", component: EditExportBilllodgementreferencenumberadvicecopyComponent, canActivate: [MemberGuard] },
  { path: "Realisation-Cretificate", component: EditExportRealisationCertificateComponent, canActivate: [MemberGuard] },
  { path: "Swift-Copy-Documents", component: EditExportSwiftCopyDocumentComponent, canActivate: [MemberGuard] },
  { path: "Inward-Remittance-Disposal", component: EditInwardUploadDocumentsComponent, canActivate: [MemberGuard] },
  { path: "Certificate-of-Origin", component: EditExportCertificateOfOriginComponent, canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditExportUploadRoutingModule { }
