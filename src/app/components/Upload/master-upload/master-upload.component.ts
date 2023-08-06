import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../service/upload-service-validator.service';
import { UserService } from '../../../service/user.service';
import { ShippingBillComponent } from '../../../components/Upload/Export/shipping-bill/shipping-bill.component';
import { InsurancedocumentsComponent } from '../../../components/Upload/Export/insurancedocuments/insurancedocuments.component';
import { LetterofCreditComponent } from '../../../components/Upload/Export/letterof-credit/letterof-credit.component';
import { MasterServiceAgreementsComponent } from '../../../components/Upload/Export/master-service-agreements/master-service-agreements.component';
import { TripartyAgreementsComponent } from '../../../components/Upload/Export/triparty-agreements/triparty-agreements.component';
import { AirwayBlCopyComponent } from '../../../components/Upload/Export/airway-bl-copy/airway-bl-copy.component';
import { BillOfExchangesComponent } from '../../../components/Upload/Export/bill-of-exchanges/bill-of-exchanges.component';
import { DestructionCertificatesComponent } from '../../../components/Upload/Export/destruction-certificates/destruction-certificates.component';
import { PackingListInvoicesComponent } from '../../../components/Upload/Export/packing-list-invoices/packing-list-invoices.component';
import { CommercialInvoicesComponent } from '../../../components/Upload/Export/commercial-invoices/commercial-invoices.component';
import { OpinionReportsComponent } from '../../../components/Upload/Export/opinion-reports/opinion-reports.component';
import { InwardRemittanceAdviceComponent } from '../../../components/Upload/Export/inward-remittance-advice/inward-remittance-advice.component';
import { CreditNoteComponent } from '../../../components/Upload/Export/credit-note/credit-note.component';
import { DebitNotesComponent } from '../../../components/Upload/Export/debit-note/debit-note.component';
import { PIPOSComponent } from '../../../components/Upload/Export/pipos/pipos.component';
import { ExportBilllodgementreferencenumberadvicecopyComponent } from '../../../components/Upload/Export/export-billlodgementreferencenumberadvicecopy/export-billlodgementreferencenumberadvicecopy.component';
import { ExportRealisationCertificateComponent } from '../../../components/Upload/Export/export-realisation-certificate/export-realisation-certificate.component';
import { ExportSwiftCopyDocumentComponent } from '../../../components/Upload/Export/export-swift-copy-document/export-swift-copy-document.component';
import { InwardUploadDocumentsComponent } from '../../../components/Upload/Export/Inward-Remittance-Disposal/inward-upload-doc.component';


import { OtherDocumentsComponent } from '../../../home/SummaryPage/Export/other-documents/other-documents.component';
import { CommercialComponent } from '../../../home/SummaryPage/Export/commercial/commercial.component';
import { DestructionComponent } from '../../../home/SummaryPage/Export/destruction/destruction.component';
import { BillOfExchangeComponent } from '../../../home/SummaryPage/Export/bill-of-exchange/bill-of-exchange.component';
import { AirwayBLCopyComponent } from '../../../home/SummaryPage/Export/airway-blcopy/airway-blcopy.component';
import { InwardRemittanceAdviceSummaryComponent } from '../../../home/SummaryPage/Export/inward-remittance-advice/inward-remittance-advice.component';
import { ExportOpinionReportsComponent } from '../../../home/SummaryPage/Export/opinion-reports/opinion-reports.component';
import { ExportTryPartyAgreementsComponent } from '../../../home/SummaryPage/Export/try-party-agreements/try-party-agreements.component';
import { MasterServiceComponent } from '../../../home/SummaryPage/Export/master-service/master-service.component';
import { LetterOfCreditExportLCComponent } from '../../../home/SummaryPage/Export/letter-of-credit-export-lc/letter-of-credit-export-lc.component';
import { InsuranceDocumentComponent } from '../../../home/SummaryPage/Export/insurance-document/insurance-document.component';
import { DebitNoteSummaryComponent } from '../../../home/SummaryPage/Export/debit-note/debit-note.component';
import { CreditNoteSummaryComponent } from '../../../home/SummaryPage/Export/credit-note/credit-note.component';
import { ViewDocumentComponent } from '../../../home/SummaryPage/Export/view-document/view-document.component';
import { PipoExportComponent } from '../../../home/SummaryPage/Export/pipo-export/pipo-export.component';

import { BOEComponent } from "../../../components/Upload/Import/import-BOE/boe.component";
import { ImportInsurancedocumentsComponent } from '../../../components/Upload/Import/import-insurancedocuments/import-insurancedocuments.component';
import { ImportLetterofCreditComponent } from '../../../components/Upload/Import/import-letterof-credit/import-letterof-credit.component';
import { ImportTripartyAgreementsComponent } from '../../../components/Upload/Import/import-triparty-agreements/import-triparty-agreements.component';
import { ImportMasterServiceAgreementsComponent } from '../../../components/Upload/Import/import-master-service-agreements/import-master-service-agreements.component';
import { ImportAirwayBlCopyComponent } from '../../../components/Upload/Import/import-airway-bl-copy/import-airway-bl-copy.component';
import { ImportBillOfExchangesComponent } from '../../../components/Upload/Import/import-bill-of-exchanges/import-bill-of-exchanges.component';
import { ImportDestructionCertificatesComponent } from '../../../components/Upload/Import/import-destruction-certificates/import-destruction-certificates.component';
import { ImportPackingListInvoicesComponent } from '../../../components/Upload/Import/import-packing-list-invoices/import-packing-list-invoices.component';
import { ImportCommercialInvoicesComponent } from '../../../components/Upload/Import/import-commercial-invoices/import-commercial-invoices.component';
import { ImportOpinionReportComponent } from '../../../components/Upload/Import/import-opinion-reports/import-opinion-reports.component';
import { ImportOutwardRemittanceAdviceComponent } from '../../../components/Upload/Import/import-outward-remittance-advice/import-inward-remittance-advice.component';
import { ImportCreditNoteComponent } from '../../../components/Upload/Import/import-credit-note/import-credit-note.component';
import { ImportDebitNotesComponent } from '../../../components/Upload/Import/import-debit-note/import-debit-note.component';
import { ImportPIPOSComponent } from '../../../components/Upload/Import/import-pipos/import-pipos.component';
import { ImportBilllodgementreferencenumberadvicecopyComponent } from '../../../components/Upload/Import/import-billlodgementreferencenumberadvicecopy/import-billlodgementreferencenumberadvicecopy.component';
import { ImportRealisationCertificateComponent } from '../../../components/Upload/Import/import-realisation-certificate/import-realisation-certificate.component';
import { ImportSwiftCopyDocumentComponent } from '../../../components/Upload/Import/import-swift-copy-document/import-swift-copy-document.component';

import $ from 'jquery'

@Component({
  selector: 'master-upload',
  templateUrl: './master-upload.component.html',
  styleUrls: ['./master-upload.component.scss']
})
export class MasterUploadComponent implements OnInit {
  PIPOLIST: any = [];
  SELECTED_ID: any = 'export-shipping';
  USER_DATA: any = [];
  ComponentsList: any = {
    ExportUpload: [
      ShippingBillComponent,
      CreditNoteComponent,
      DebitNotesComponent,
      InsurancedocumentsComponent,
      LetterofCreditComponent,
      MasterServiceAgreementsComponent,
      TripartyAgreementsComponent,
      OpinionReportsComponent,
      InwardRemittanceAdviceComponent,
      AirwayBlCopyComponent,
      BillOfExchangesComponent,
      DestructionCertificatesComponent,
      CommercialInvoicesComponent,
      PackingListInvoicesComponent,
      PIPOSComponent,
      ExportBilllodgementreferencenumberadvicecopyComponent,
      ExportRealisationCertificateComponent,
      InwardUploadDocumentsComponent,
      ExportSwiftCopyDocumentComponent
    ],
    ExportSummary: [
      ViewDocumentComponent,
      CreditNoteSummaryComponent,
      DebitNoteSummaryComponent,
      InsuranceDocumentComponent,
      LetterOfCreditExportLCComponent,
      MasterServiceComponent,
      ExportTryPartyAgreementsComponent,
      ExportOpinionReportsComponent,
      InwardRemittanceAdviceSummaryComponent,
      AirwayBLCopyComponent,
      BillOfExchangeComponent,
      DestructionComponent,
      CommercialComponent,
      OtherDocumentsComponent,
      PipoExportComponent
    ],
    ImportUpload: [
      BOEComponent,
      ImportCreditNoteComponent,
      ImportDebitNotesComponent,
      ImportInsurancedocumentsComponent,
      ImportLetterofCreditComponent,
      ImportMasterServiceAgreementsComponent,
      ImportTripartyAgreementsComponent,
      ImportOpinionReportComponent,
      ImportOutwardRemittanceAdviceComponent,
      ImportAirwayBlCopyComponent,
      ImportBillOfExchangesComponent,
      ImportDestructionCertificatesComponent,
      ImportCommercialInvoicesComponent,
      ImportPackingListInvoicesComponent
    ],
    ImportSummary: [],
  }

  constructor(public documentservice: DocumentService,
    public userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public validator: UploadServiceValidatorService) { }

  async ngOnInit() {
    this.USER_DATA = await this.userService.getUserDetail();
    this.SELECTED_ID = this.USER_DATA?.result?.sideMenu == 'export' ? 'export-shipping' : 'Bill-Of-Entry';
    this.documentservice.getPipoNoList().subscribe((res: any) => {
      console.log(res, 'resssss.................')
      var data: any = res?.data;
      data?.forEach(element => {
        element['isActive'] = false;
      });
      this.PIPOLIST = data;
      console.log(data, 'getPipoListNo');
    })
  }

  onTabChanged(event) {
    this.SELECTED_ID = '';
    console.log(event, $(event?.tab?._viewContainerRef?.element?.nativeElement).attr('index'), 'ghgjhgjgj')
    setTimeout(() => {
      this.SELECTED_ID = event?.tab?._viewContainerRef?.element?.nativeElement?.id;
      this.UploadloadDyanmicComponents(this.ComponentsList[$(event?.tab?._viewContainerRef?.element?.nativeElement).attr('index') as any][event?.index])
    }, 200);
  }

  removeAllActive(index: any, item: any) {
    this.PIPOLIST.forEach((element, i) => {
      if (index != i) {
        element['isActive'] = false;
      }
    });
    this.validator.SELECTED_PIPO = [];
    this.validator.SELECTED_PIPO_ID = '';

    setTimeout(() => {
      this.validator.SELECTED_PIPO_ID = item?._id;
      this.validator.SELECTED_PIPO = [item?.pi_poNo];
      this.documentservice.getPipoListNo('export', this.validator.SELECTED_PIPO?.length != 0 ? this.validator.SELECTED_PIPO : []);
    }, 200);
  }
  onTabToggleChanged(event:any){
    this.validator.SELECTED_PIPO = [];
    this.validator.SELECTED_PIPO_ID = '';
    $('.side-menu-h5').removeClass('Active-SideMenu')
  }
  PipoUpload() {
    this.validator.SELECTED_PIPO = [];
    setTimeout(() => {
      this.validator.SELECTED_PIPO = ['jgjhgjhg'];
      this.documentservice.getPipoListNo('export', this.validator.SELECTED_PIPO?.length != 0 ? this.validator.SELECTED_PIPO : []);
    }, 200);
  }

  reloadPipo() {
    this.ngOnInit();
  }


  // Summary Page
  onSummaryTabChanged(event) {
    this.SELECTED_ID = '';
    console.log(event, $(event?.tab?._viewContainerRef?.element?.nativeElement).attr('index'), 'ghgjhgjgj')
    setTimeout(() => {
      this.SELECTED_ID = event?.tab?._viewContainerRef?.element?.nativeElement?.id;
      this.SummaryloadDyanmicComponents(this.ComponentsList[$(event?.tab?._viewContainerRef?.element?.nativeElement).attr('index') as any][event?.index])
    }, 200);
  }

  removeSummaryAllActive(index: any, item: any) {
    this.PIPOLIST.forEach((element, i) => {
      if (index != i) {
        element['isActive'] = false;
      }
    });
    this.validator.SELECTED_PIPO_ID = '';
    setTimeout(() => {
      this.validator.SELECTED_PIPO_ID = item?._id;
    }, 200);
  }
  @ViewChild('UploadContainer', { read: ViewContainerRef }) UploadContainer: ViewContainerRef;
  componentRef: any = ''
  UploadloadDyanmicComponents(name: any): void {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(name);
    if (this.componentRef != undefined && this.componentRef != '') {
      this.componentRef.destroy();
    }
    this.componentRef = this.UploadContainer.createComponent(dynamicComponentFactory);
    console.log(this.componentRef, this.UploadContainer, 'componentRef')
  }

  @ViewChild('SummaryContainer', { read: ViewContainerRef }) SummaryContainer: ViewContainerRef;
  SummarycomponentRef: any = ''
  SummaryloadDyanmicComponents(name: any): void {
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(name);
    if (this.SummarycomponentRef != undefined && this.SummarycomponentRef != '') {
      this.SummarycomponentRef.destroy();
    }
    this.SummarycomponentRef = this.SummaryContainer.createComponent(dynamicComponentFactory);
    console.log(this.SummarycomponentRef, this.SummaryContainer, this.SummarycomponentRef.instance, 'componentRef')
    this.SummarycomponentRef.instance.PipoId =  this.validator.SELECTED_PIPO_ID;
  }

}
