import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportRoutingModule } from './import-summary-routing.module';
import { ImportBOEComponent } from './boe/boe.component';
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
import { SharedHomeModule } from '../../shared-home.module';

@NgModule({
  declarations: [
    ImportBOEComponent,
    ImportsCreditNoteComponent,
    ImportDebitNoteComponent,
    ImportOtherDocumentsComponent,
    ImportSwiftCopyDocumentSummaryComponent,
    ImportBilllodgementreferencenumberadvicecopySummaryComponent,
    ImportRealisationCertificateSummaryComponent,
    ImportMasterServiceComponent,
    ImportOpinionReportsComponent,
    ImportOutwardRemittanceSheetComponent,
    ImportBillOfExchangeComponent,
    ImportAirwayBlcopyComponent,
    ImportDestructionComponent,
    LetterOfCreditImportLCComponent,
    ImportCommercialComponent,
    ImportTriPartyComponent,
    ImportInsuranceComponent,
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    SharedHomeModule
  ]
})
export class ImportSummaryModule { }
