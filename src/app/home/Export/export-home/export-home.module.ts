import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from '../../pipo-doc-export/pipo-doc-export.component';
import { SharedDataService } from '../../shared-Data-Servies/shared-data.service';
import {SharedHomeModule} from "../../shared-home.module";
import {ExportHomeComponent} from "./export-home.component";
import { UploadDocComponent } from './upload-doc/upload-doc.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    ExportHomeComponent,
  ],
  imports: [
    SharedHomeModule,
    CommonModule,
    RouterModule.forChild([{
        path: "",
        component: ExportHomeComponent
      }
    ]),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExportHomeModule { }
