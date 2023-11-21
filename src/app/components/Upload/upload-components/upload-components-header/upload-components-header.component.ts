import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import $ from 'jquery'

@Component({
  selector: 'upload-components-header',
  templateUrl: './upload-components-header.component.html',
  styleUrls: ['./upload-components-header.component.scss', '../../commoncss/common.component.scss']
})
export class UploadHeaderComponent implements OnInit {
  @Output('UploadHeaderEvent') UploadHeaderEvent: any = new EventEmitter();
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  @Input('id') id: any = '';
  @Input('title') title: any = '';
  @Input('PIPO_TARANSACTION') PIPO_TARANSACTION: boolean = false;
  @Input('PIPO_DISABLED') PIPO_DISABLED: boolean = true;
  @Input('PIPO_VISIBLE') PIPO_VISIBLE: boolean = false;
  @Input('UPLOAD_BUTTON') UPLOAD_BUTTON: boolean = true;
  @Input('HIDE_OPTION') HIDE_OPTION: boolean = true;
  @Output('LoadCompleted') LoadCompleted: any = new EventEmitter();
  EXPORT_FORM: any = {
    buyer: {
      type: "buyer",
      value: "",
      label: "Select Buyer",
      rules: {
        required: false,
      }
    },
    fromdate: {
      type: "date",
      value: "",
      label: "Select Date From",
      rules: {
        required: false,
      }
    },
    todate: {
      type: "date",
      value: "",
      label: "Select Date To",
      rules: {
        required: false,
      }
    },
  }

  IMPORT_FORM: any = {
    benneName: {
      type: "benne",
      value: "",
      label: "Select Beneficiary",
      rules: {
        required: false,
      }
    },
    fromdate: {
      type: "date",
      value: "",
      label: "Select Date From",
      rules: {
        required: false,
      }
    },
    todate: {
      type: "date",
      value: "",
      label: "Select Date To",
      rules: {
        required: false,
      }
    },
  }

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }


  ngOnInit(): void {
    this.validator.loaddata().then((res)=>this.LoadCompleted.emit(res));
    console.log(this.PIPO_TARANSACTION,"PIPO_TARANSACTION")
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('clickPipo', this.pipoArr);
      this.UploadHeaderEvent.emit(event)
    } else {
      this.btndisabled = true;
    }
    console.log(event,'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  routechanged(text: any) {
    this.router.navigate([text]);
  }

  onSubmit(value: any) {
    let query: any = { date: { $gte: value?.value?.fromdate, $lte: value?.value?.todate } };
    if (value?.value?.buyer != null && value?.value?.buyer != undefined) {
      query["buyerName"] = value?.value?.buyer?.value
    } else if (value?.value?.benneName != null && value?.value?.benneName != undefined) {
      query["benneName"] = value?.value?.benneName?.value
    }
    this.validator.documentService?.getPipoNoFilter(query).subscribe((res: any) => {
      this.validator.documentService?.getPipoListNoFilter(res?.data);
      console.log(res?.data, "getPipoNoFilter")
    });
    console.log(value, "NgCustomFilterPopup")
  }
}
