import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ConfirmDialogService } from "../../../confirm-dialog/confirm-dialog.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent1 } from '../../pipo-doc-export/pipo-doc-export.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedDataService } from '../../shared-Data-Servies/shared-data.service';
import {SharedHomeModule} from "../../shared-home.module";
import {BillLodgementComponent} from "./bill-lodgement.component";
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    BillLodgementComponent,
  ],
  imports: [
    SharedHomeModule,
    NgSelectModule,
    RouterModule.forChild([
      {
        path: "",
        component:BillLodgementComponent,
      }
    ]),
  ],
  entryComponents: [ModalContentComponent1],
  providers: [ConfirmDialogService, NgbModal,SharedDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BillLodgementModule { }
