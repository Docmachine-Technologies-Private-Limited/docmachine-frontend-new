import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportUploadRoutingModule } from './export-upload-routing.module';
import { ShippingBillComponent } from './shipping-bill/shipping-bill.component';
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
import { SharedHomeModule } from '../../../home/shared-home.module';
import { InwardUploadDocumentsComponent } from './Inward-Remittance-Disposal/inward-upload-doc.component';
import { EdpmsReconComponent } from '../../../home/edpms-recon/edpms-recon.component';
import { ExportCertificateOfOriginComponent } from './export-certificate-of-origin/export-certificate-of-origin.component';
import { FormatBillOfExchangesComponent } from './bill-of-exchanges-create/bill-of-exchanges-create.component';

@NgModule({
  declarations: [
    ShippingBillComponent,
    CreditNoteComponent,
    InsurancedocumentsComponent,
    LetterofCreditComponent,
    MasterServiceAgreementsComponent,
    TripartyAgreementsComponent,
    OpinionReportsComponent,
    InwardRemittanceAdviceComponent,
    AirwayBlCopyComponent,
    BillOfExchangesComponent,
    DestructionCertificatesComponent,
    PackingListInvoicesComponent,
    CommercialInvoicesComponent,
    DebitNotesComponent,
    PIPOSComponent,
    ExportSwiftCopyDocumentComponent,
    ExportBilllodgementreferencenumberadvicecopyComponent,
    ExportRealisationCertificateComponent,
    InwardUploadDocumentsComponent,
    EdpmsReconComponent,
    ExportCertificateOfOriginComponent,
    FormatBillOfExchangesComponent
  ],
  imports: [
    CommonModule,
    ExportUploadRoutingModule,
    SharedHomeModule
  ]
})
export class ExportUploadModule { }
