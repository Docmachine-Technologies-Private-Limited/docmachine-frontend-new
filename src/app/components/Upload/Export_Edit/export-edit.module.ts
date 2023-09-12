import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditExportUploadRoutingModule } from './export-edit-routing.module';
import { EditShippingBillComponent } from './shipping-bill/shipping-bill.component';
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
import { SharedHomeModule } from '../../../home/shared-home.module';
import { EditInwardUploadDocumentsComponent } from './Inward-Remittance-Disposal/inward-upload-doc.component';

@NgModule({
  declarations: [
    EditShippingBillComponent,
    EditCreditNoteComponent,
    EditInsurancedocumentsComponent,
    EditLetterofCreditComponent,
    EditMasterServiceAgreementsComponent,
    EditTripartyAgreementsComponent,
    EditOpinionReportsComponent,
    EditInwardRemittanceAdviceComponent,
    EditAirwayBlCopyComponent,
    EditBillOfExchangesComponent,
    EditDestructionCertificatesComponent,
    EditPackingListInvoicesComponent,
    EditCommercialInvoicesComponent,
    EditDebitNotesComponent,
    EditPIPOSComponent,
    EditExportSwiftCopyDocumentComponent,
    EditExportBilllodgementreferencenumberadvicecopyComponent,
    EditExportRealisationCertificateComponent,
    EditInwardUploadDocumentsComponent,
  ],
  imports: [
    CommonModule,
    EditExportUploadRoutingModule,
    SharedHomeModule
  ]
})
export class EditExportUploadModule { }
