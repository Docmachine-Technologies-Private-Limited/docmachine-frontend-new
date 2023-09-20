import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingBillComponent } from './shipping-bill/shipping-bill.component';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { InsurancedocumentsComponent } from './insurancedocuments/insurancedocuments.component';
import { LetterofCreditComponent } from './letterof-credit/letterof-credit.component';
import { MasterServiceAgreementsComponent } from './master-service-agreements/master-service-agreements.component';
import { TripartyAgreementsComponent } from './triparty-agreements/triparty-agreements.component';
import { AirwayBlCopyComponent } from './airway-bl-copy/airway-bl-copy.component';
import { BillOfExchangesComponent } from './bill-of-exchanges/bill-of-exchanges.component';
import { DestructionCertificatesComponent } from './destruction-certificates/destruction-certificates.component';
import { PackingListInvoicesComponent } from './packing-list-invoices/packing-list-invoices.component';
import { CommercialInvoicesComponent } from './commercial-invoices/commercial-invoices.component';
import { OpinionReportsComponent } from './opinion-reports/opinion-reports.component';
import { InwardRemittanceAdviceComponent } from './inward-remittance-advice/inward-remittance-advice.component';
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { DebitNotesComponent } from './debit-note/debit-note.component';
import { PIPOSComponent } from './pipos/pipos.component';
import { ExportBilllodgementreferencenumberadvicecopyComponent } from './export-billlodgementreferencenumberadvicecopy/export-billlodgementreferencenumberadvicecopy.component';
import { ExportRealisationCertificateComponent } from './export-realisation-certificate/export-realisation-certificate.component';
import { ExportSwiftCopyDocumentComponent } from './export-swift-copy-document/export-swift-copy-document.component';
import { InwardUploadDocumentsComponent } from './Inward-Remittance-Disposal/inward-upload-doc.component';
import { ExportCertificateOfOriginComponent } from './export-certificate-of-origin/export-certificate-of-origin.component';

const routes: Routes = [
  // Export Upload
  { path: "Shippingbill", component: ShippingBillComponent, canActivate: [MemberGuard] },
  { path: "Insurancedocuments", component: InsurancedocumentsComponent, canActivate: [MemberGuard] },
  { path: "LetterofCredit", component: LetterofCreditComponent, canActivate: [MemberGuard] },
  { path: "MasterServiceAgreements", component: MasterServiceAgreementsComponent, canActivate: [MemberGuard] },
  { path: "TripartyAgreements", component: TripartyAgreementsComponent, canActivate: [MemberGuard] },
  { path: "AirwayBlCopy", component: AirwayBlCopyComponent, canActivate: [MemberGuard] },
  { path: "BillOfExchanges", component: BillOfExchangesComponent, canActivate: [MemberGuard] },
  { path: "DestructionCertificates", component: DestructionCertificatesComponent, canActivate: [MemberGuard] },
  { path: "PackingListInvoices", component: PackingListInvoicesComponent, canActivate: [MemberGuard] },
  { path: "CommercialInvoices", component: CommercialInvoicesComponent, canActivate: [MemberGuard] },
  { path: "OpinionReports", component: OpinionReportsComponent, canActivate: [MemberGuard] },
  { path: "InwardRemittanceAdvice", component: InwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
  { path: "InwardRemittanceAdvice/:id?", component: InwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
  { path: "CreditNoteDocument", component: CreditNoteComponent, canActivate: [MemberGuard] },
  { path: "DebitNoteDocument", component: DebitNotesComponent, canActivate: [MemberGuard] },
  { path: "PIPO", component: PIPOSComponent, canActivate: [MemberGuard] },
  { path: "Bill-Lodgement-Referance-AdviceCopy", component: ExportBilllodgementreferencenumberadvicecopyComponent, canActivate: [MemberGuard] },
  { path: "Realisation-Cretificate", component: ExportRealisationCertificateComponent, canActivate: [MemberGuard] },
  { path: "Swift-Copy-Documents", component: ExportSwiftCopyDocumentComponent, canActivate: [MemberGuard] },
  { path: "Upload-Inward-Remittance-Disposal", component: InwardUploadDocumentsComponent, canActivate: [MemberGuard] },
  { path: "Certificate-of-Origin", component: ExportCertificateOfOriginComponent, canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportUploadRoutingModule { }
