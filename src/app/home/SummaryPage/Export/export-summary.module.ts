import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportRoutingModule } from './export-summary-routing.module';
import { SharedHomeModule } from '../../shared-home.module';
import { PipoDocumentsComponent } from '../Import/pipo-documents/pipo-documents.component';
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
import { ExportSwiftCopyDocumentSummaryComponent } from './export-swift-copy-document-summary/export-swift-copy-document-summary.component';
import { ExportBilllodgementreferencenumberadvicecopySummaryComponent } from './export-billlodgementreferencenumberadvicecopy-summary/export-billlodgementreferencenumberadvicecopy-summary.component';
import { ExportRealisationCertificateSummaryComponent } from './export-realisation-certificate-summary/export-realisation-certificate-summary.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { InwardRemittanceDisposalComponent } from './inward-remittance-disposal/inward-remittance-disposal.component';
import { SubBillLodgementComponent } from './sub-bill-lodgement/sub-bill-lodgement.component';

@NgModule({
  declarations: [
    PipoDocumentsComponent,
    OtherDocumentsComponent,
    CommercialComponent,
    DestructionComponent,
    BillOfExchangeComponent,
    AirwayBLCopyComponent,
    InwardRemittanceAdviceSummaryComponent,
    ExportOpinionReportsComponent,
    ExportTryPartyAgreementsComponent,
    MasterServiceComponent,
    LetterOfCreditExportLCComponent,
    InsuranceDocumentComponent,
    DebitNoteSummaryComponent,
    CreditNoteSummaryComponent,
    ExportSwiftCopyDocumentSummaryComponent,
    ExportBilllodgementreferencenumberadvicecopySummaryComponent,
    ExportRealisationCertificateSummaryComponent,
    ViewDocumentComponent,
    InwardRemittanceDisposalComponent,
    SubBillLodgementComponent
  ],
  imports: [
    CommonModule,
    ExportRoutingModule,
    SharedHomeModule
  ]
})
export class ExportSummaryModule { }
