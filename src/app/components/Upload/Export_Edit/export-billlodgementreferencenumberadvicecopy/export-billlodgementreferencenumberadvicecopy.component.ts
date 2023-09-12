import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'app-export-billlodgementreferencenumberadvicecopy',
  templateUrl: './export-billlodgementreferencenumberadvicecopy.component.html',
  styleUrls: ['./export-billlodgementreferencenumberadvicecopy.component.scss', '../../commoncss/common.component.scss']
})
export class EditExportBilllodgementreferencenumberadvicecopyComponent implements OnInit {
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
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  @Input('Transaction_id') Transaction_id: any = '';
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
      console.log(this.data, "EditInwardUploadDocumentsComponent")
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        sbNo: {
          type: "text",
          value: args?.SbRef[0]?.sbno,
          label: "Select Shipping Bill",
          disabled: true,
          rules: {
            required: true,
          }
        },
        blcopyrefNumber: {
          type: "text",
          value: args?.blcopyrefNumber,
          label: "BlCopyRef Number*",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: args?.amount,
          label: "BlCopyRef Amount*",
          rules: {
            required: true,
          }
        }
      }, 'exportbilllodgementreferencenumberadvicecopy');
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'export';
    console.log(e.value, 'onSubmitblCopy');
    this.documentService.updateBlcopyref(e.value, this.data?._id).subscribe((res: any) => {
      console.log(res, 'addBlcopyref');
      this.toastr.success(`Blcopyref Document Updated Successfully`);
      this.router.navigate(['home/Summary/Export/Bill-Lodgement-Referance-AdviceCopy']);
    },
      (err) => console.log('Error adding pipo')
    );
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
