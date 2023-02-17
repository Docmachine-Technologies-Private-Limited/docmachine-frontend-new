import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
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
    TreeViewComponent
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
    ModalModule.forRoot(),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService,PipoDataService,TreeViewComponent],
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
    TreeViewComponent,
    MatExpansionModule
  ],
})
export class SharedHomeModule { }
