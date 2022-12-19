import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from '../../pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from '../../shared-Data-Servies/shared-data.service';
import {SharedHomeModule} from "../../shared-home.module";
import {ExportHomeComponent} from "./export-home.component";
import { UploadDocComponent } from './upload-doc/upload-doc.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ExportHomeComponent,
    UploadDocComponent,
  ],
  imports: [
    SharedHomeModule,
    NgSelectModule,
    RouterModule.forChild([
      {
        path: "",
        component: ExportHomeComponent,
        pathMatch: "full"
      },
      
    ]),
    ModalModule.forRoot(),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class ExportHomeModule { }
