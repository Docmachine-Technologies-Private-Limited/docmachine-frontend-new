import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportBOEComponent } from './boe/boe.component';
import { MemberGuard } from '../../../service/RolePermission/Member/member.guard';
import { ImportsCreditNoteComponent } from './import-credit-note/imports-credit-note.component';
import { ImportDebitNoteComponent } from './import-debit-note/import-debit-note.component';
import { ImportInsuranceComponent } from './import-insurance/import-insurance.component';
import { ImportTriPartyComponent } from './import-tri-party/import-tri-party.component';
import { ImportRealisationCertificateSummaryComponent } from './import-realisation-certificate-summary/import-realisation-certificate-summary.component';
import { ImportBilllodgementreferencenumberadvicecopySummaryComponent } from './import-billlodgementreferencenumberadvicecopy-summary/import-billlodgementreferencenumberadvicecopy-summary.component';
import { ImportSwiftCopyDocumentSummaryComponent } from './import-swift-copy-document-summary/import-swift-copy-document-summary.component';
import { ImportOtherDocumentsComponent } from './import-other-documents/import-other-documents.component';
import { ImportCommercialComponent } from './import-commercial/import-commercial.component';
import { ImportDestructionComponent } from './import-destruction/import-destruction.component';
import { ImportBillOfExchangeComponent } from './import-bill-of-exchange/import-bill-of-exchange.component';
import { ImportAirwayBlcopyComponent } from './import-airway-blcopy/import-airway-blcopy.component';
import { ImportOutwardRemittanceSheetComponent } from './import-outward-remittance-sheet/import-outward-remittance-sheet.component';
import { ImportOpinionReportsComponent } from './import-opinion-reports/import-opinion-reports.component';
import { ImportMasterServiceComponent } from './import-master-service/import-master-service.component';
import { LetterOfCreditImportLCComponent } from './import-letter-of-credit/letter-of-credit-import-lc.component';
import { PipoDocumentsComponent } from './pipo-documents/pipo-documents.component';
import { OutwardRemittanceDisposalComponent } from './Outward-remittance-disposal/outward-remittance-disposal.component';
import { ImportCertificateofOriginComponent } from './certificateof-origin/certificateof-origin.component';

const routes: Routes = [
  { path: "boe", component: ImportBOEComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Pipo", component: PipoDocumentsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Credit", component: ImportsCreditNoteComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Debit", component: ImportDebitNoteComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Insurance-Document", component: ImportInsuranceComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "TripartyAgreements", component: ImportTriPartyComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Import-certificate-of-origin", component: ImportCertificateofOriginComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Bill-Lodgement-Referance-AdviceCopy", component: ImportBilllodgementreferencenumberadvicecopySummaryComponent, canActivate: [MemberGuard] },
  { path: "Realisation-Cretificate", component: ImportRealisationCertificateSummaryComponent, canActivate: [MemberGuard] },
  { path: "Swift-Copy-Documents", component: ImportSwiftCopyDocumentSummaryComponent, canActivate: [MemberGuard] },
  { path: "Packing-List", component: ImportOtherDocumentsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Commercial", component: ImportCommercialComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Destruction", component: ImportDestructionComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Bill-Of-Exchange", component: ImportBillOfExchangeComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Airway-bl-Copy", component: ImportAirwayBlcopyComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Outward-Remittance-Advice", component: ImportOutwardRemittanceSheetComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Opinion-Report", component: ImportOpinionReportsComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Master-Services", component: ImportMasterServiceComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Letter-Of-Credit-Lc", component: LetterOfCreditImportLCComponent, pathMatch: "full", canActivate: [MemberGuard] },
  { path: "Outward-Remittance-Disposal", component: OutwardRemittanceDisposalComponent, pathMatch: "full", canActivate: [MemberGuard] },
  // { path: "edit-pipo/:doc_type/:id", component: ImportEditPipoComponent, pathMatch: "full", canActivate: [MemberGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
