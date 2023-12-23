import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

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
  @Input('RE_UPLOAD') RE_UPLOAD: boolean = false;
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
  SHOW_HIDE: boolean = false
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public filteranytablepagination: filterAnyTablePagination,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  PIPODATA: any = [];

  ngOnInit(): void {
    this.filteranytablepagination.PaginationfilterAnyTable({}, { limit: 10000 }, 'pi_po').subscribe((res: any) => {
      res?.data?.forEach(element => {
        element['Checked'] = false;
      });
      this.documentService.getPipoListNoFilter(res?.data);
      this.PIPODATA = res?.data;
      console.log(this.PIPO_TARANSACTION, res, "PIPO_TARANSACTION")
    })
    this.validator.loaddata().then((res) => {
      this.LoadCompleted.emit(res);
      console.log(this.validator?.USER_DATA?.result?.sideMenu,"this.validator?.userData?.sideMenu")
      if (this.validator?.USER_DATA?.result?.sideMenu=='export') {
        setTimeout(() => {
          this.validator.buildForm({
            buyer: {
              type: "Newbuyer",
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
          }, 'EXPORT_FILTER');
          console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
        }, 200);
      }else{
        setTimeout(() => {
          this.validator.buildForm({
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
          }, 'IMPORT_FILTER');
          console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
        }, 200);
      }
    });
   
   
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
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  
  NEXT_BUTTON:boolean=false;
  clickPipoNext(event: any, index, data) {
    if (event?.target.checked == true) {
      this.btndisabled = false;
      this.UploadHeaderEvent.emit(data);
      this.NEXT_BUTTON=true;
    } else {
      event.target.checked = false
      this.btndisabled = true;
      this.NEXT_BUTTON=false
    }
    this.PIPO_DATA.forEach((element, i) => {
      if (i != index) {
        element['Checked'] = false;
      }
    });
    console.log(event, data, 'sdfsdfdsfdfdsfdsfdsfdsf')
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
    const removeEmptyValues = (object) => {
      let newobject: any = {}
      for (const key in object) {
        if (object[key] != '' && object[key] != null && object[key] != undefined && object[key] != false ) {
          if (typeof object[key] == "object") {
            newobject[key]={}
            for (const key1 in object[key]) {
              if (object[key][key1] != '' && object[key][key1] != null && object[key][key1] != undefined) {
                newobject[key][key1] = object[key][key1];
              }
            }
            if (newobject[key]=undefined || newobject[key]==null) {
                delete newobject[key];
            }
          } else {
            newobject[key] = object[key];
          }
        }
      }
      return newobject;
    };
    let removeBlackObject = removeEmptyValues(query)
    removeBlackObject = removeEmptyValues(removeBlackObject)

    console.log(removeBlackObject, 'removeBlackObject')
    this.filteranytablepagination.PaginationfilterAnyTable(removeBlackObject, { limit: 10000 }, 'pi_po').subscribe((res: any) => {
      this.documentService.PI_PO_NUMBER_LIST=[];
      res?.data?.forEach(element => {
        element['Checked'] = false;
      });
      this.documentService.getPipoListNoFilter(res?.data);
      this.PIPODATA = res?.data
      console.log(this.PIPO_TARANSACTION, res, "PIPO_TARANSACTION")
    })
    console.log(value, "NgCustomFilterPopup")
  }
  
  Reset(){
    this.filteranytablepagination.PaginationfilterAnyTable({}, { limit: 10000 }, 'pi_po').subscribe((res: any) => {
      res?.data?.forEach(element => {
        element['Checked'] = false;
      });
      this.documentService.getPipoListNoFilter(res?.data);
      this.PIPODATA = res?.data;
      console.log(this.PIPO_TARANSACTION, res, "PIPO_TARANSACTION")
    })
  }
  
}
