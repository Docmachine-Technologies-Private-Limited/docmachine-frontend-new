import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  DropzoneModule,
} from "ngx-dropzone-wrapper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { ConfirmDialogService } from "../confirm-dialog/confirm-dialog.service";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from './pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from './shared-Data-Servies/shared-data.service';
import { CommonModule } from "@angular/common";
import { FilternewPipe } from './filterpipo/filternew.pipe';
import { FilterdatePipe } from './datefilter/filterdate.pipe';
import { NumberToWordsPipe } from "./pipe/number-to-words.pipe";
import { PDFVIEWERComponent } from "../pdf-viewer/pdf-viewer.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { FiterbuyerPipe } from "./Export/fiterbuyer.pipe";
import { CustomDropdownComponent } from '.././custom/custom-dropdown/custom-dropdown.component'
import { NgSelectModule } from "@ng-select/ng-select";
import { FilterToggleDirective } from "../custom/Filter/filter-toggle.directive";
import { PipoDataService } from "../service/homeservices/pipo.service";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from '@angular/material/radio';
import { CustomModelComponent } from '../custom/custom-model/custom-model.component';
import { MergePdfService } from "../service/MergePdf/merge-pdf.service";
import { NgDropdownCustomComponent } from "../custom/ng-dropdown-custom/ng-dropdown-custom.component";
import { NgCustomCarouselComponent } from '../custom/ng-custom-carousel/ng-custom-carousel.component';
import { CarouselItemDirective } from '../custom/ng-custom-carousel/carousel-item.directive';
import { CarouselItemElementDirective } from '../custom/ng-custom-carousel/carousel-item-element.directive';
import { CustomsliderComponent } from '../custom/customslider/customslider.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgCustomTooltipsComponent } from "../custom/ng-custom-tooltips/ng-custom-tooltips.component";
import { CustomHeaderTooltipsComponent } from "../custom/ng-custom-tooltips/custom-header-tooltips/custom-header-tooltips.component";
import { CustomFooterTooltipsComponent } from "../custom/ng-custom-tooltips/custom-footer-tooltips/custom-footer-tooltips.component";
import { CustomContentTooltipsComponent } from "../custom/ng-custom-tooltips/custom-content-tooltips/custom-content-tooltips.component";
import { NgCustomCardModelComponent } from "../custom/ng-custom-card-model/ng-custom-card-model.component";
import { LetterheadComponent } from "../custom/letterhead/ExportLetterHead/letterhead.component";
import { ImportLetterheadComponent } from "../custom/letterhead/ImportLetterHead/ImportLetterhead.component";
import { CustomHoverPanelComponent } from '../custom/custom-hover-panel/custom-hover-panel.component';
import { CustomConfirmDialogModelComponent } from '../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component'
import { NgCustomInputComponent } from "../custom/ng-custom-input/ng-custom-input.component";
import { CustomStatusProgressBarComponent } from "../custom/custom-status-progress-bar/custom-status-progress-bar.component";
import { MatPaginatorModule } from '@angular/material/paginator'
import { CustomExpansionPanelComponent } from "../custom/custom-expansion-panel/custom-expansion-panel.component";
import { CustomTableExpansionPanelComponent } from "../custom/custom-expansion-panel/custom-table-expansion-panel/custom-table-expansion-panel.component";
import { CustomJPXSchedulerComponent } from "../custom-jpxscheduler/custom-jpxscheduler.component";
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { CustomComponentsUploadComponent } from "../custom/custom-components-upload/custom-components-upload.component";
import { UploadPopUpComponent } from "../components/Upload/upload-pop-up/upload-pop-up.component";
import { CustomSlicePipePipe } from "../custom/custom-pipe/custom-slice-pipe/custom-slice-pipe.pipe";
import { UploadComponentsComponent } from "../components/Upload/upload-components/upload-components.component";
import { UploadServiceValidatorService } from "../components/Upload/service/upload-service-validator.service";
import { DynamicErrorComponent } from "../components/dynamic-error/dynamic-error.component";
import { InnerDynamicErrorComponent } from "../components/Upload/upload-components/inner-dynamic-error/inner-dynamic-error.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TemplateMainPageComponent } from '../components/template-main-page/template-main-page.component';
import { CustomCheckboxComponent } from "../custom/custom-checkbox/custom-checkbox.component";
import { CustomRadioComponent } from "../custom/custom-radio/custom-radio.component";
import { GlobalsAccessService } from "../components/Upload/service/globals-access.service";
import { UploadHeaderComponent } from "../components/Upload/upload-components/upload-components-header/upload-components-header.component";
import { NgCustomDropdownComponent } from "../custom/ng-custom-dropdown/ng-custom-dropdown.component";
import { NgInputComponent } from "../custom/ng-input/ng-input.component";
import { FederalBankREMITTANCEADVANCEAGAINSTComponent } from "./AllBankFormat/FederalBank/remittanceadvanceagainst/remittanceadvanceagainst.component";
import { FederalBankBillSubmissionFormatComponent } from "./AllBankFormat/FederalBank/bill-submission-format/bill-submission-format.component";
import { ExportInwardRemittanceDisposalFormatComponent } from "./AllBankFormat/FederalBank/export-inward-remittance-disposal-format/export-inward-remittance-disposal-format.component";
import { FederalBankRevisedFormA2BANKFormatComponent } from "./AllBankFormat/FederalBank/revised-form-a2-bank-format/revised-form-a2-bank-format.component";
import { hdfcbankREMITTANCEADVANCEAGAINSTComponent } from "./AllBankFormat/HDFC-Bank/remittanceadvanceagainst/remittanceadvanceagainst.component";
import { hdfcbankBillSubmissionFormatComponent } from "./AllBankFormat/HDFC-Bank/export-bill-submission-format/export-bill-submission-format.component";
import { hdfcbankInwardRemittanceDisposalFormatComponent } from "./AllBankFormat/HDFC-Bank/export-inward-remittance-disposal-format/export-inward-remittance-disposal-format.component";
import { hdfcbankRevisedFormA2BANKFormatComponent } from "./AllBankFormat/HDFC-Bank/export-revised-form-a2-bank-format/export-revised-form-a2-bank-format.component";
import { CommonOpenPopUpDirective } from "../custom/custom-model/CustomPopupOpen/open-pop-up.directive";
import { PopupOpenDirective } from "../custom/PopupOpen/popup-open.directive";
import { FederalBankExportletterheadComponent } from "./AllBankFormat/FederalBank/exportletterhead/exportletterhead.component";
import { DirectExportPaymentComponent } from "./AllBankFormat/HDFC-Bank/direct-import-payment/direct-import-payment.component";
import { FederalBankDirectImportPaymentComponent } from "./AllBankFormat/FederalBank/direct-import-payment/direct-import-payment.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { CustomMatStepperModule } from "../components/custom-mat-stepper/custom-mat-stepper.module";
import { CustomModelHeaderComponent } from "../custom/custom-model/custom-model-header/custom-model-header.component";
import { MoreContentComponent } from "../components/Upload/upload-components/more-content/more-content.component";
import { ExportBillLodgementData } from "./Transaction/Export/new-export-bill-lodgement/export-bill-lodgemet-data";
import { NgCustomFilterPopupComponent } from "../custom/ng-custom-filter-popup/ng-custom-filter-popup.component";
import { OldFederalBankExportletterheadComponent } from "./AllBankFormat/FederalBank/exportletterheadold/exportoldletterhead.component";
import { CustomNgContentHeaderComponent } from "../components/Upload/upload-components/upload-components-header/custom-ng-content-header/custom-ng-content-header.component";
import { TooltipsCustomNgComponent } from "../custom/tooltips-custom-ng/tooltips-custom-ng.component";
import { SummaryTransactionUIHeaderComponent } from "../custom/SummaryTransactionUI/summary-transaction-uiheader/summary-transaction-uiheader.component";
import { SummaryTransactionUIComponent } from "../custom/SummaryTransactionUI/summary-transaction-ui.component";
import { UploadPopUpLocalFileComponent } from "../components/Upload/upload-pop-up-local-file/upload-pop-up-local-file.component";
import { filterAnyTablePagination } from "../service/v1/Api/filterAnyTablePagination";
import { TableServiceController } from "../service/v1/TableServiceController";
import { ExportHomeControllerData } from "./Transaction/Export/Controller/ExportHome-Controller";

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    FilternewPipe,
    FilterdatePipe,
    FiterbuyerPipe,
    NumberToWordsPipe,
    CustomDropdownComponent,
    PDFVIEWERComponent,
    FilterToggleDirective,
    CommonOpenPopUpDirective,
    PopupOpenDirective,
    TreeViewComponent,
    CustomModelComponent,
    NgDropdownCustomComponent,
    NgCustomCarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CustomsliderComponent,
    NgCustomTooltipsComponent,
    CustomHeaderTooltipsComponent,
    CustomFooterTooltipsComponent,
    CustomContentTooltipsComponent,
    NgCustomCardModelComponent,
    LetterheadComponent,
    ImportLetterheadComponent,
    CustomHoverPanelComponent,
    CustomConfirmDialogModelComponent,
    NgCustomInputComponent,
    CustomStatusProgressBarComponent,
    CustomExpansionPanelComponent,
    CustomTableExpansionPanelComponent,
    CustomJPXSchedulerComponent,
    CustomComponentsUploadComponent,
    UploadPopUpComponent,
    DynamicErrorComponent,
    CustomSlicePipePipe,
    UploadComponentsComponent,
    InnerDynamicErrorComponent,
    TemplateMainPageComponent,
    CustomCheckboxComponent,
    CustomRadioComponent,
    UploadHeaderComponent,
    NgCustomDropdownComponent,
    NgInputComponent,
    FederalBankREMITTANCEADVANCEAGAINSTComponent,
    FederalBankBillSubmissionFormatComponent,
    ExportInwardRemittanceDisposalFormatComponent,
    FederalBankRevisedFormA2BANKFormatComponent,
    hdfcbankREMITTANCEADVANCEAGAINSTComponent,
    hdfcbankBillSubmissionFormatComponent,
    hdfcbankInwardRemittanceDisposalFormatComponent,
    hdfcbankRevisedFormA2BANKFormatComponent,
    FederalBankExportletterheadComponent,
    DirectExportPaymentComponent,
    FederalBankDirectImportPaymentComponent,
    CustomModelHeaderComponent,
    MoreContentComponent,
    NgCustomFilterPopupComponent,
    OldFederalBankExportletterheadComponent,
    CustomNgContentHeaderComponent,
    TooltipsCustomNgComponent,
    SummaryTransactionUIHeaderComponent,
    SummaryTransactionUIComponent,
    UploadPopUpLocalFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    DragDropModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTabsModule,
    PdfViewerModule,
    NgSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    ModalModule.forRoot(),
    MatPaginatorModule,
    jqxSchedulerModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    CustomMatStepperModule,
  ],
  entryComponents: [ModalContentComponent1],
  providers: [
    ConfirmDialogService,
    NgbModal,
    ExportBillLodgementData,
    SharedDataService,
    PipoDataService,
    TableServiceController,
    TreeViewComponent,
    MergePdfService,
    UploadServiceValidatorService,
    GlobalsAccessService,
    filterAnyTablePagination,
    ExportHomeControllerData
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FilternewPipe,
    FilterdatePipe,
    FiterbuyerPipe,
    NumberToWordsPipe,
    CommonModule,
    FormsModule,
    DropzoneModule,
    DragDropModule,
    MatProgressBarModule,
    MatTabsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgSelectModule,
    CustomDropdownComponent,
    PDFVIEWERComponent,
    FilterToggleDirective,
    TreeViewComponent,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    CustomModelComponent,
    NgDropdownCustomComponent,
    NgCustomCarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CustomsliderComponent,
    MatStepperModule,
    NgCustomTooltipsComponent,
    CustomHeaderTooltipsComponent,
    CustomFooterTooltipsComponent,
    CustomContentTooltipsComponent,
    NgCustomCardModelComponent,
    LetterheadComponent,
    ImportLetterheadComponent,
    CustomHoverPanelComponent,
    CustomConfirmDialogModelComponent,
    NgCustomInputComponent,
    CustomStatusProgressBarComponent,
    MatPaginatorModule,
    CustomExpansionPanelComponent,
    CustomTableExpansionPanelComponent,
    CustomJPXSchedulerComponent,
    jqxSchedulerModule,
    CustomComponentsUploadComponent,
    UploadPopUpComponent,
    DynamicErrorComponent,
    CustomSlicePipePipe,
    UploadComponentsComponent,
    InnerDynamicErrorComponent,
    TemplateMainPageComponent,
    CustomCheckboxComponent,
    CustomRadioComponent,
    UploadHeaderComponent,
    NgCustomDropdownComponent,
    NgInputComponent,
    FederalBankREMITTANCEADVANCEAGAINSTComponent,
    FederalBankBillSubmissionFormatComponent,
    ExportInwardRemittanceDisposalFormatComponent,
    FederalBankRevisedFormA2BANKFormatComponent,
    hdfcbankREMITTANCEADVANCEAGAINSTComponent,
    hdfcbankBillSubmissionFormatComponent,
    hdfcbankInwardRemittanceDisposalFormatComponent,
    hdfcbankRevisedFormA2BANKFormatComponent,
    CommonOpenPopUpDirective,
    PopupOpenDirective,
    FederalBankExportletterheadComponent,
    DirectExportPaymentComponent,
    FederalBankDirectImportPaymentComponent,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    CustomMatStepperModule,
    CustomModelHeaderComponent,
    MoreContentComponent,
    NgCustomFilterPopupComponent,
    OldFederalBankExportletterheadComponent,
    CustomNgContentHeaderComponent,
    TooltipsCustomNgComponent,
    SummaryTransactionUIHeaderComponent,
    SummaryTransactionUIComponent,
    UploadPopUpLocalFileComponent,
  ],
})
export class SharedHomeModule { }