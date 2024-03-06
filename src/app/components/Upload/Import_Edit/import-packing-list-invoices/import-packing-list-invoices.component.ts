import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'edit-import-packing-list-invoices',
  templateUrl: './import-packing-list-invoices.component.html',
  styleUrls: ['./import-packing-list-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class EditImportPackingListInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  btndisabled: boolean = true;
  PIPO_DATA: any = [];
  INVOICE_LIST: any = {
    sno: '1',
    invoiceno: '',
    amount: '',
    currency: ''
  };
  pipourl1: any = '';
  pipoArr: any = [];
  dynamicFormGroup: FormGroup;
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  data: any = '';

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
    });
  }
  
  response(args: any) {
    console.log(args, args?.length, "argsShippingbill")
    if (args?.length == undefined) {
      this.Edit(args);
    } else {
      this.ReUplod(args)
    }
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  Edit(args: any) {
    this.publicUrl = '';
    this.PipoInfo(this.data?.pipo[0]?._id)
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.packingDoc);
      this.validator.buildForm({
        boe: {
          type: "BOE",
          value: this.data?.boeRef[0],
          label: "Select Bill Of Entry",
          rules: {
            required: true,
          }
        },
        packingListNumber: {
          type: "text",
          value: args?.packingListNumber,
          label: "Packing List Number*",
          rules: {
            required: true,
          }
        },
        // AdditionalDocuments: {
        //   type: "AdditionalDocuments",
        //   value: [],
        //   label: "Add More Documents",
        //   rules: {
        //     required: false,
        //   },
        //   id: "AdditionalDocuments",
        //   url: "member/uploadImage",
        //   items: [0]
        // },
      }, 'Importpackinglist');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  ReUplod(args: any) {
    this.publicUrl = '';
    this.PipoInfo(this.data?.pipo[0]?._id)
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        boe: {
          type: "BOE",
          value: this.data?.boeRef[0],
          label: "Select Bill Of Entry",
          rules: {
            required: true,
          }
        },
        packingListNumber: {
          type: "text",
          value: this.data?.packingListNumber,
          label: "Packing List Number*",
          rules: {
            required: true,
          }
        },
        // AdditionalDocuments: {
        //   type: "AdditionalDocuments",
        //   value: [],
        //   label: "Add More Documents",
        //   rules: {
        //     required: false,
        //   },
        //   id: "AdditionalDocuments",
        //   url: "member/uploadImage",
        //   items: [0]
        // },
      }, 'Importpackinglist');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  
  PipoInfo(id:any){
    this.documentService.getPipoById(id).subscribe((res: any) => {
      this.PIPO_DATA = res?.data[0];
      this.validator.BOE_LIST = res?.data[0]?.boeRef;
      console.log(res, "getPipoById")
    })
  }
  
  onSubmit(e: any) {
    console.log(e, 'value')
    let selectedBOE = e?.value?.boe;
    e.value.boe = selectedBOE?.sbno;
    e.value.boeRef = [selectedBOE?._id];
    if (this.data?.packingListNumber != e.value.packingListNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Packing List Number`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            packingListNumber: e.value.packingListNumber
          }, 'commercials').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.packingDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updatePackingList(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Packing List Added Successfully`);
                this.router.navigate(['home/Summary/Import/Packing-List']);
                console.log('Packing List Added Successfully');
              });
            } else {
              this.toastr.error(`Please check this Packing List Number : ${e.packingListNumber} already exit...`);
            }
          });
        }
      });
    } else {
      e.value.packingDoc = this.publicUrl?.changingThisBreaksApplicationSecurity;
      this.documentService.updatePackingList(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Packing List Added Successfully`);
        this.router.navigate(['home/Summary/Import/Packing-List']);
        console.log('Packing List Added Successfully');
      });
    }
   
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      if (this.BUYER_LIST.includes(event?.id[1]) == false) {
        this.BUYER_LIST.push(event?.id[1])
      }
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.COMMERCIAL_LIST = [];
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.documentService.getBoebyPipo(this.BUYER_LIST[0]).subscribe((res: any) => {
        this.validator.BOE_LIST = res?.data;
        console.log(res, 'getBoebyPipo')
      })
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
