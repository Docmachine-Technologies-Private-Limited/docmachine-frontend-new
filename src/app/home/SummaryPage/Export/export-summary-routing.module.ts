import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { OtherDocumentsComponent } from './other-documents/other-documents.component';
import { CommercialComponent } from './commercial/commercial.component';
import { DestructionComponent } from './destruction/destruction.component';
import { BillOfExchangeComponent } from './bill-of-exchange/bill-of-exchange.component';
import { AirwayBLCopyComponent } from './airway-blcopy/airway-blcopy.component';
import { InwardRemittanceAdviceSummaryComponent } from './inward-remittance-advice/inward-remittance-advice.component';
import { ExportOpinionReportsComponent } from './opinion-reports/opinion-reports.component';
import { ExportTryPartyAgreementsComponent } from './try-party-agreements/try-party-agreements.component';
import { MasterServiceComponent } from './master-service/master-service.component';
import { LetterOfCreditExportLCComponent } from './letter-of-credit-export-lc/letter-of-credit-export-lc.component';
import { InsuranceDocumentComponent } from './insurance-document/insurance-document.component';
import { DebitNoteSummaryComponent } from './debit-note/debit-note.component';
import { CreditNoteSummaryComponent } from './credit-note/credit-note.component';
import { ExportBilllodgementreferencenumberadvicecopySummaryComponent } from './export-billlodgementreferencenumberadvicecopy-summary/export-billlodgementreferencenumberadvicecopy-summary.component';
import { ExportRealisationCertificateSummaryComponent } from './export-realisation-certificate-summary/export-realisation-certificate-summary.component';
import { ExportSwiftCopyDocumentSummaryComponent } from './export-swift-copy-document-summary/export-swift-copy-document-summary.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { InwardRemittanceDisposalComponent } from './inward-remittance-disposal/inward-remittance-disposal.component';
import { PipoExportComponent } from './pipo-export/pipo-export.component';
import { SubBillLodgementComponent } from './sub-bill-lodgement/sub-bill-lodgement.component';
import { ExportCertificateofOriginComponent } from './certificateof-origin/certificateof-origin.component';
import { SBIRMMatchOffComponent } from './sbirmmatch-off/sbirmmatch-off.component';

const routes: Routes = [
  { path: "Pipo", component: PipoExportComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Shipping-bill", component: ViewDocumentComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "packing-list", component: OtherDocumentsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "commercial", component: CommercialComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "destruction", component: DestructionComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "bill-of-exchange", component: BillOfExchangeComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "airway-bl-copy", component: AirwayBLCopyComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "inward-remittance-advice", component: InwardRemittanceAdviceSummaryComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "opinion-report", component: ExportOpinionReportsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "try-party", component: ExportTryPartyAgreementsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "master-services", component: MasterServiceComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "letterofcredit-lc", component: LetterOfCreditExportLCComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "insurance-document", component: InsuranceDocumentComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "debit-note", component: DebitNoteSummaryComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "credit-note", component: CreditNoteSummaryComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Bill-Lodgement-Referance-AdviceCopy", component: ExportBilllodgementreferencenumberadvicecopySummaryComponent, canActivate: [MemberGuard] },
  { path: "Realisation-Cretificate", component: ExportRealisationCertificateSummaryComponent, canActivate: [MemberGuard] },
  { path: "Swift-Copy-Documents", component: ExportSwiftCopyDocumentSummaryComponent, canActivate: [MemberGuard] },
  { path: 'Inward-Remittance-Disposal', component: InwardRemittanceDisposalComponent, canActivate: [MemberGuard] },
  { path: "Sub-bill-Lodgement", component: SubBillLodgementComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "export-certificate-of-origin", component: ExportCertificateofOriginComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "SB-IRM-Match-Off", component: SBIRMMatchOffComponent, pathMatch: "full", canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportRoutingModule { }
