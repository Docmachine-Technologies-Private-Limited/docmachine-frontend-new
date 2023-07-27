import { Injectable } from '@angular/core';
import { DocumentService } from '../document.service';
import { UploadServiceValidatorService } from '../../components/Upload/service/upload-service-validator.service';

@Injectable({
  providedIn: 'root'
})

export class ExportCommonDataService {
  EXPORT_AIRWAY_BILL_DATA: any = {
    DATA: [],
    TABLE_DATA: []
  };
  constructor(private documentService: DocumentService,
    public validator: UploadServiceValidatorService) {

  }

  // getAirwaybill() {
  //   this.documentService.getAirwayBlcopy(this.validator.SELECTED_PIPO).subscribe(
  //     (res: any) => {
  //       for (let value of res.data) {
  //         if (value['file'] == 'export') {
  //           this.item.push(value);
  //         }
  //       }
  //       this.AirwayBlCopyTable(this.item)
  //       console.log(res, 'yuyuyuyuyuyuyuuy')
  //     }, (err) => console.log(err)
  //   );
  // }
}
