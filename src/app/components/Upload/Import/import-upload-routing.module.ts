import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BOEComponent } from "../Import/import-BOE/boe.component";
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { ImportInsurancedocumentsComponent } from './import-insurancedocuments/import-insurancedocuments.component';
import { ImportLetterofCreditComponent } from './import-letterof-credit/import-letterof-credit.component';
import { ImportTripartyAgreementsComponent } from './import-triparty-agreements/import-triparty-agreements.component';
import { ImportMasterServiceAgreementsComponent } from './import-master-service-agreements/import-master-service-agreements.component';
import { ImportAirwayBlCopyComponent } from './import-airway-bl-copy/import-airway-bl-copy.component';
import { ImportBillOfExchangesComponent } from './import-bill-of-exchanges/import-bill-of-exchanges.component';
import { ImportDestructionCertificatesComponent } from './import-destruction-certificates/import-destruction-certificates.component';
import { ImportPackingListInvoicesComponent } from './import-packing-list-invoices/import-packing-list-invoices.component';
import { ImportCommercialInvoicesComponent } from './import-commercial-invoices/import-commercial-invoices.component';
import { ImportOpinionReportComponent } from './import-opinion-reports/import-opinion-reports.component';
import { ImportOutwardRemittanceAdviceComponent } from './import-outward-remittance-advice/import-inward-remittance-advice.component';
import { ImportCreditNoteComponent } from './import-credit-note/import-credit-note.component';
import { ImportDebitNotesComponent } from './import-debit-note/import-debit-note.component';
import { ImportPIPOSComponent } from './import-pipos/import-pipos.component';
import { ImportBilllodgementreferencenumberadvicecopyComponent } from './import-billlodgementreferencenumberadvicecopy/import-billlodgementreferencenumberadvicecopy.component';
import { ImportRealisationCertificateComponent } from './import-realisation-certificate/import-realisation-certificate.component';
import { ImportSwiftCopyDocumentComponent } from './import-swift-copy-document/import-swift-copy-document.component';

const routes: Routes = [
 // Import Upload
 { path: "Boe", component: BOEComponent, canActivate: [MemberGuard] },
 { path: "Insurancedocuments", component: ImportInsurancedocumentsComponent, canActivate: [MemberGuard] },
 { path: "LetterofCredit", component: ImportLetterofCreditComponent, canActivate: [MemberGuard] },
 { path: "MasterServiceAgreements", component: ImportMasterServiceAgreementsComponent, canActivate: [MemberGuard] },
 { path: "TripartyAgreements", component: ImportTripartyAgreementsComponent, canActivate: [MemberGuard] },
 { path: "AirwayBlCopy", component: ImportAirwayBlCopyComponent, canActivate: [MemberGuard] },
 { path: "BillOfExchanges", component: ImportBillOfExchangesComponent, canActivate: [MemberGuard] },
 { path: "DestructionCertificates", component: ImportDestructionCertificatesComponent, canActivate: [MemberGuard] },
 { path: "PackingListInvoices", component: ImportPackingListInvoicesComponent, canActivate: [MemberGuard] },
 { path: "CommercialInvoices", component: ImportCommercialInvoicesComponent, canActivate: [MemberGuard] },
 { path: "OpinionReports", component: ImportOpinionReportComponent, canActivate: [MemberGuard] },
 { path: "OutwardRemittanceAdvice", component: ImportOutwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
 { path: "OutwardRemittanceAdvice/:id?", component: ImportOutwardRemittanceAdviceComponent, canActivate: [MemberGuard] },
 { path: "CreditNoteDocument", component: ImportCreditNoteComponent, canActivate: [MemberGuard] },
 { path: "DebitNoteDocument", component: ImportDebitNotesComponent, canActivate: [MemberGuard] },
 { path: "PIPO", component: ImportPIPOSComponent, canActivate: [MemberGuard] },
 { path: "Bill-Lodgement-Referance-AdviceCopy", component: ImportBilllodgementreferencenumberadvicecopyComponent, canActivate: [MemberGuard] },
 { path: "Realisation-Cretificate", component: ImportRealisationCertificateComponent, canActivate: [MemberGuard] },
 { path: "Swift-Copy-Documents", component: ImportSwiftCopyDocumentComponent, canActivate: [MemberGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportUploadRoutingModule { }
