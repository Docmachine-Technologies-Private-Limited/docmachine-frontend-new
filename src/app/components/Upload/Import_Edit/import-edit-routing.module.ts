import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBOEComponent } from "./import-BOE/boe.component";
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { EditImportInsurancedocumentsComponent } from './import-insurancedocuments/import-insurancedocuments.component';
import { EditImportLetterofCreditComponent } from './import-letterof-credit/import-letterof-credit.component';
import { EditImportTripartyAgreementsComponent } from './import-triparty-agreements/import-triparty-agreements.component';
import { EditImportMasterServiceAgreementsComponent } from './import-master-service-agreements/import-master-service-agreements.component';
import { EditImportAirwayBlCopyComponent } from './import-airway-bl-copy/import-airway-bl-copy.component';
import { EditImportBillOfExchangesComponent } from './import-bill-of-exchanges/import-bill-of-exchanges.component';
import { EditImportDestructionCertificatesComponent } from './import-destruction-certificates/import-destruction-certificates.component';
import { EditImportPackingListInvoicesComponent } from './import-packing-list-invoices/import-packing-list-invoices.component';
import { EditImportCommercialInvoicesComponent } from './import-commercial-invoices/import-commercial-invoices.component';
import { EditImportOpinionReportComponent } from './import-opinion-reports/import-opinion-reports.component';
import { EditImportOutwardRemittanceAdviceComponent } from './import-outward-remittance-advice/import-inward-remittance-advice.component';
import { EditImportCreditNoteComponent } from './import-credit-note/import-credit-note.component';
import { EditImportDebitNotesComponent } from './import-debit-note/import-debit-note.component';
import { EditImportPIPOSComponent } from './import-pipos/import-pipos.component';
import { EditImportBilllodgementreferencenumberadvicecopyComponent } from './import-billlodgementreferencenumberadvicecopy/import-billlodgementreferencenumberadvicecopy.component';
import { EditImportRealisationCertificateComponent } from './import-realisation-certificate/import-realisation-certificate.component';
import { EditImportSwiftCopyDocumentComponent } from './import-swift-copy-document/import-swift-copy-document.component';

const routes: Routes = [
 // Import Upload
 { path: "Boe", component: EditBOEComponent, canActivate: [MemberGuard] },
 { path: "Insurancedocuments", component: EditImportInsurancedocumentsComponent, canActivate: [MemberGuard] },
 { path: "LetterofCredit", component: EditImportLetterofCreditComponent, canActivate: [MemberGuard] },
 { path: "MasterServiceAgreements", component: EditImportMasterServiceAgreementsComponent, canActivate: [MemberGuard] },
 { path: "TripartyAgreements", component: EditImportTripartyAgreementsComponent, canActivate: [MemberGuard] },
 { path: "AirwayBlCopy", component: EditImportAirwayBlCopyComponent, canActivate: [MemberGuard] },
 { path: "BillOfExchanges", component: EditImportBillOfExchangesComponent, canActivate: [MemberGuard] },
 { path: "DestructionCertificates", component: EditImportDestructionCertificatesComponent, canActivate: [MemberGuard] },
 { path: "PackingListInvoices", component: EditImportPackingListInvoicesComponent, canActivate: [MemberGuard] },
 { path: "CommercialInvoices", component: EditImportCommercialInvoicesComponent, canActivate: [MemberGuard] },
 { path: "OpinionReports", component: EditImportOpinionReportComponent, canActivate: [MemberGuard] },
 { path: "OutwardRemittanceAdvice", component: EditImportOutwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
 { path: "OutwardRemittanceAdvice/:id?", component: EditImportOutwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
 { path: "CreditNoteDocument", component: EditImportCreditNoteComponent, canActivate: [MemberGuard] },
 { path: "DebitNoteDocument", component: EditImportDebitNotesComponent, canActivate: [MemberGuard] },
 { path: "PIPO", component: EditImportPIPOSComponent, canActivate: [MemberGuard] },
 { path: "Bill-Lodgement-Referance-AdviceCopy", component: EditImportBilllodgementreferencenumberadvicecopyComponent, canActivate: [MemberGuard] },
 { path: "Realisation-Cretificate", component: EditImportRealisationCertificateComponent, canActivate: [MemberGuard] },
 { path: "Swift-Copy-Documents", component: EditImportSwiftCopyDocumentComponent, canActivate: [MemberGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImporEditRoutingModule { }
