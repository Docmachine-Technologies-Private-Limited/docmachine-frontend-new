import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  DropzoneModule,
} from "ngx-dropzone-wrapper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatExpansionModule} from '@angular/material/expansion';

import { ConfirmDialogService } from "../confirm-dialog/confirm-dialog.service";
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from './pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from './shared-Data-Servies/shared-data.service';
import {CommonModule} from "@angular/common";
import { FilternewPipe } from './filterpipo/filternew.pipe';
import { FilterdatePipe } from './datefilter/filterdate.pipe';
import { NumberToWordsPipe } from "./pipe/number-to-words.pipe";
import { PDFVIEWERComponent } from "../pdf-viewer/pdf-viewer.component";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { FiterbuyerPipe } from "./Export/fiterbuyer.pipe";
import {CustomDropdownComponent} from '.././custom/custom-dropdown/custom-dropdown.component'
import { NgSelectModule } from "@ng-select/ng-select";
import {FilterToggleDirective} from "../custom/Filter/filter-toggle.directive";
import { PipoDataService } from "../service/homeservices/pipo.service";
import { TreeViewComponent } from "./tree-view/tree-view.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatRadioModule} from '@angular/material/radio';
import { PopupOpenDirective } from "../custom/PopupOpen/popup-open.directive";
import { CustomModelComponent } from '../custom/custom-model/custom-model.component';
import { OpenPopUpDirective } from "../custom/custom-model/CustomPopupOpen/open-pop-up.directive";
import { MergePdfService } from "../service/MergePdf/merge-pdf.service";
import { NgDropdownCustomComponent } from "../custom/ng-dropdown-custom/ng-dropdown-custom.component";
import { NgDropdownPopupControllerDirective } from "../custom/ng-dropdown-custom/ng-dropdown-popup-controller.directive";

import { NgCustomCarouselComponent } from '../custom/ng-custom-carousel/ng-custom-carousel.component';
import { CarouselItemDirective } from '../custom/ng-custom-carousel/carousel-item.directive';
import { CarouselItemElementDirective } from '../custom/ng-custom-carousel/carousel-item-element.directive';
import { CustomsliderComponent } from '../custom/customslider/customslider.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CustomEventDirective } from "../custom/custom-model/custom-event.directive";


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
    NgDropdownPopupControllerDirective,
    NgCustomCarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CustomsliderComponent,
    CustomEventDirective
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
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService,PipoDataService,TreeViewComponent,MergePdfService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //   exports: [SharedProjectsModule]
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
    NgDropdownPopupControllerDirective,
    NgCustomCarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    CustomsliderComponent,
    MatStepperModule,
    CustomEventDirective
  ],
})
export class SharedHomeModule { }
