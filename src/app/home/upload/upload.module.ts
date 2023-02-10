import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  DropzoneModule,
} from "ngx-dropzone-wrapper";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ConfirmDialogService } from "../../confirm-dialog/confirm-dialog.service";
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from '../pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from '../shared-Data-Servies/shared-data.service';
import {SharedHomeModule} from "../shared-home.module";
import {UploadComponent} from "./upload.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { CreateNoteComponent } from './Import/create-note/create-note.component';
import { DebitNoteComponent } from './Import/debit-note/debit-note.component';
import { ExportCreditNoteComponent } from './Export/export-credit-note/export-credit-note.component';
import { ExportDebitNoteComponent } from './Export/export-debit-note/export-debit-note.component';
import { MatDatepickerModule } from '@angular/material/datepicker'

import {  MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    UploadComponent,
    CreateNoteComponent,
    DebitNoteComponent,
    ExportCreditNoteComponent,
    ExportDebitNoteComponent
  ],
  imports: [
    SharedHomeModule,
    NgSelectModule,
    MatProgressBarModule,
    MatNativeDateModule,MatButtonModule,MatDialogModule, MatInputModule, MatFormFieldModule ,
    MatTabsModule,
    MatDatepickerModule,
    RouterModule.forChild([
      {
        path: "",
        component: UploadComponent,
        pathMatch: "full"
      },
    ]),
    ModalModule.forRoot(),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //   exports: [SharedProjectsModule]
  exports: [],
})
export class UploadModule { }
