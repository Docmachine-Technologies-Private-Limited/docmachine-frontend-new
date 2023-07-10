import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  DropzoneModule,
} from "ngx-dropzone-wrapper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatExpansionModule } from '@angular/material/expansion';

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
import { PopupOpenDirective } from "../custom/PopupOpen/popup-open.directive";
import { CustomModelComponent } from '../custom/custom-model/custom-model.component';
import { OpenPopUpDirective } from "../custom/custom-model/CustomPopupOpen/open-pop-up.directive";
import { MergePdfService } from "../service/MergePdf/merge-pdf.service";
import { NgDropdownCustomComponent } from "../custom/ng-dropdown-custom/ng-dropdown-custom.component";
import { NgCustomCarouselComponent } from '../custom/ng-custom-carousel/ng-custom-carousel.component';
import { CarouselItemDirective } from '../custom/ng-custom-carousel/carousel-item.directive';
import { CarouselItemElementDirective } from '../custom/ng-custom-carousel/carousel-item-element.directive';
import { CustomsliderComponent } from '../custom/customslider/customslider.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CustomEventDirective } from "../custom/custom-model/custom-event.directive";
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
    PopupOpenDirective,
    OpenPopUpDirective,
    TreeViewComponent,
    CustomModelComponent,
    NgDropdownCustomComponent,
    NgCustomCarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CustomsliderComponent,
    CustomEventDirective,
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
    UploadPopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,
    DragDropModule,
    MatProgressBarModule,
    MatTabsModule,
    PdfViewerModule,
    NgSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    ModalModule.forRoot(),
    MatPaginatorModule,
    jqxSchedulerModule
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal, SharedDataService, PipoDataService, TreeViewComponent, MergePdfService],
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
    PopupOpenDirective,
    OpenPopUpDirective,
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
    CustomEventDirective,
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
    UploadPopUpComponent
  ],
})
export class SharedHomeModule { }