import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DocumentService } from '../../../service/document.service';
import { UploadServiceValidatorService } from '../service/upload-service-validator.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'master-upload',
  templateUrl: './master-upload.component.html',
  styleUrls: ['./master-upload.component.scss']
})
export class MasterUploadComponent implements OnInit {
  PIPOLIST: any = [];
  @ViewChild('appendcontainer', { read: ViewContainerRef }) container: ViewContainerRef;
  SELECTED_ID: any = 'export-shipping';
  USER_DATA:any=[];
  
  constructor(public documentservice: DocumentService,
    public userService: UserService,
    public validator: UploadServiceValidatorService) { }

async ngOnInit() {
    this.USER_DATA = await this.userService.getUserDetail();
    this.SELECTED_ID = this.USER_DATA?.result?.sideMenu=='export'?'export-shipping':'Bill-Of-Entry';
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
    setTimeout(() => {
      this.SELECTED_ID = event?.tab?._viewContainerRef?.element?.nativeElement?.id;
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
  
  PipoUpload() {
    this.validator.SELECTED_PIPO = [];
    setTimeout(() => {
      this.validator.SELECTED_PIPO = ['jgjhgjhg'];
      this.documentservice.getPipoListNo('export', this.validator.SELECTED_PIPO?.length != 0 ? this.validator.SELECTED_PIPO : []);
    }, 200);
  }
  
  reloadPipo(){
    this.ngOnInit();
  }
  
  
  // Summary Page
  onSummaryTabChanged(event) {
    this.SELECTED_ID = '';
    setTimeout(() => {
      this.SELECTED_ID = event?.tab?._viewContainerRef?.element?.nativeElement?.id;
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
  
}
