import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportUploadRoutingModule } from './import-upload-routing.module';
import { BOEComponent } from "./import-BOE/boe.component";
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
import { SharedHomeModule } from '../../../home/shared-home.module';
import { IdpmsReconComponent } from '../../../home/idpms-recon/idpms-recon.component';

@NgModule({
  declarations: [
    BOEComponent,
    ImportCreditNoteComponent,
    ImportInsurancedocumentsComponent,
    ImportLetterofCreditComponent,
    ImportTripartyAgreementsComponent,
    ImportOpinionReportComponent,
    ImportOutwardRemittanceAdviceComponent,
    ImportAirwayBlCopyComponent,
    ImportBillOfExchangesComponent,
    ImportDestructionCertificatesComponent,
    ImportPackingListInvoicesComponent,
    ImportCommercialInvoicesComponent,
    ImportDebitNotesComponent,
    ImportMasterServiceAgreementsComponent,
    ImportOpinionReportComponent,
    ImportPIPOSComponent,
    ImportBilllodgementreferencenumberadvicecopyComponent,
    ImportRealisationCertificateComponent,
    ImportSwiftCopyDocumentComponent,
    IdpmsReconComponent,
  ],
  imports: [
    CommonModule,
    ImportUploadRoutingModule,
    SharedHomeModule
  ]
})
export class ImportUploadModule { }
