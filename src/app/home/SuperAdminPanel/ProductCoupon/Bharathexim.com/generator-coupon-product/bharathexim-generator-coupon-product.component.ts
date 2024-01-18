import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import moment from 'moment';
import { UploadServiceValidatorService } from '../../../../../components/Upload/service/upload-service-validator.service';
import { DocumentService } from '../../../../../service/document.service';
import { filterAnyTablePagination } from '../../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'bharathexim-generator-coupon-product',
  templateUrl: './bharathexim-generator-coupon-product.component.html',
  styleUrls: ['./bharathexim-generator-coupon-product.component.scss']
})
export class BharatheximGeneratorCouponProductComponent implements OnInit {

  @Output('SubmitButtonEvent') SubmitButtonEvent: any = new EventEmitter<any>();

  constructor(public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public documentService: DocumentService,
    public filteranytablepagination: filterAnyTablePagination) { }

  CouponCodeDetails: any = []
  ngOnInit(): void {
    this.response(null)
  }

  response(args: any) {
    setTimeout(() => {
      this.validator.buildForm({
        couponCodeName: {
          type: "InputButton",
          value: "",
          label: "Coupon Code Name",
          rules: {
            required: true,
          },
          ButtonText: 'Generator',
          callback: (item: any) => {
            item?.form?.controls['couponCodeName']?.setValue(this.generateId())
            console.log(item, "dsfdsfdshfgfjsgjgdhjdfgdjf")
          }
        },
        TrailDays: {
          type: "number",
          value: "",
          label: "Free Trail Days",
          rules: {
            required: true,
          }
        },
        date1: {
          type: "date",
          value: "",
          label: "Start Date",
          rules: {
            required: true,
          }
        },
        date2: {
          type: "date",
          value: "",
          label: "End Date",
          rules: {
            required: true,
          }
        },
      }, 'AirwayBlCopy');
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  AddCoupon(e: any, REST_FORM) {
    this.documentService.getInvoice_No({
      couponCodeName: e.value.couponCodeName
    }, 'CouponCodeProduct').subscribe((resp: any) => {
      console.log('CouponCodeProduct name', resp)
      if (resp.data.length == 0) {
        e.value.StartDate = moment(e.value.date1).format('dddd, MMMM DD, YYYY h:mm A')
        e.value.EndDate = moment(e.value.date2).format('dddd, MMMM DD, YYYY h:mm A')
        this.documentService.addBharatheximCouponCode2(e.value).subscribe((res: any) => {
          if (res?.status == true) {
            this.SubmitButtonEvent.emit({ status: true, REST_FORM: REST_FORM })
            this.toastr.success("Added Successfully")
          } else {
            this.SubmitButtonEvent.emit({ status: false, REST_FORM: REST_FORM })
          }
        });
      }
    })
  }

  randomString(len, an?) {
    an = an && an.toLowerCase();
    var str = "", i = 0, min = an == "a" ? 10 : 0, max = an == "n" ? 10 : 62;
    for (; i++ < len;) {
      var r = Math.random() * (max - min) + min << 0;
      str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
    }
    return str.toUpperCase();
  }

  mathRandom() {
    let a = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    return a.toString().length == 4 ? a : this.mathRandom();
  }

  generateId() {
    return 'NEWYEAR-' + this.randomString(4) + '-' + this.mathRandom();
  }

}
