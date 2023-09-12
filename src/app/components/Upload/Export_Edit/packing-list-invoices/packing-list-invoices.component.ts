import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'edit-export-packing-list-invoices',
  templateUrl: './packing-list-invoices.component.html',
  styleUrls: ['./packing-list-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class EditPackingListInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  btndisabled: boolean = true;
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
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
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args.packingDoc);
      this.validator.buildForm({
        sbNo: {
          type: "text",
          value: args?.sbNo,
          label: "Select Shipping Bill",
          disabled: true,
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
        currency: {
          type: "currency",
          value: args?.currency,
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        packingListAmount: {
          type: "text",
          value: args?.packingListAmount,
          label: "Packing List Amount",
          rules: {
            required: true,
          }
        }
      }, 'ExportPackingList');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR = false;
      e.value.file = 'export';
      e.value.currency = e.value?.currency?.type!=undefined?e.value?.currency?.type:e.value?.currency;
      this.documentService.updatePackingList(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Packing List Added Successfully`);
        console.log('Packing List Added Successfully');
        this.router.navigate(['home/Summary/Export/packing-list']);
      }, (err) => console.log('Error adding pipo'));
    } else {
      this.SUBMIT_ERROR = true
    }
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.validator.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
        if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.validator.SHIPPING_BILL_LIST.push(this.validator.SHIPPING_BUNDEL[j]);
        }
      }
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

}
