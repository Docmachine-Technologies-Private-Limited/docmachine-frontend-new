import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImporEditRoutingModule } from './import-edit-routing.module';
import { EditBOEComponent } from "./import-BOE/boe.component";
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
import { SharedHomeModule } from '../../../home/shared-home.module';
import { EditImportCertificateOfOriginComponent } from './import-certificate-of-origin/import-certificate-of-origin.component';

@NgModule({
  declarations: [
    EditBOEComponent,
    EditImportCreditNoteComponent,
    EditImportInsurancedocumentsComponent,
    EditImportLetterofCreditComponent,
    EditImportTripartyAgreementsComponent,
    EditImportOpinionReportComponent,
    EditImportOutwardRemittanceAdviceComponent,
    EditImportAirwayBlCopyComponent,
    EditImportBillOfExchangesComponent,
    EditImportDestructionCertificatesComponent,
    EditImportPackingListInvoicesComponent,
    EditImportCommercialInvoicesComponent,
    EditImportDebitNotesComponent,
    EditImportMasterServiceAgreementsComponent,
    EditImportOpinionReportComponent,
    EditImportPIPOSComponent,
    EditImportBilllodgementreferencenumberadvicecopyComponent,
    EditImportRealisationCertificateComponent,
    EditImportSwiftCopyDocumentComponent,
    EditImportCertificateOfOriginComponent
  ],
  imports: [
    CommonModule,
    ImporEditRoutingModule,
    SharedHomeModule
  ]
})
export class ImporEditModule { }
