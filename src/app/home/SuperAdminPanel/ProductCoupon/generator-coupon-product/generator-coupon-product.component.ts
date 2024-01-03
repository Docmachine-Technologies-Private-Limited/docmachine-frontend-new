import { Component, OnInit } from '@angular/core';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';

@Component({
  selector: 'app-generator-coupon-product',
  templateUrl: './generator-coupon-product.component.html',
  styleUrls: ['./generator-coupon-product.component.scss']
})
export class GeneratorCouponProductComponent implements OnInit {

  constructor(public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public documentService: DocumentService,
    public filteranytablepagination: filterAnyTablePagination,) { }

  CouponCodeDetails:any=[]
  ngOnInit(): void {
    this.documentService.GetCouponCodeDetails().subscribe((res:any) => {
      console.log(res, "GetCouponCodeDetails")
      this.CouponCodeDetails=res?.data;
      this.response(null)
    })
  }

  response(args: any) {
    setTimeout(() => {
      this.validator.buildForm({
        couponCodeName: {
          type: "text",
          value: "",
          label: "Coupon Code Name",
          rules: {
            required: true,
          }
        },
        productId: {
          type: "ArrayList_Object",
            value: "",
            label: "Select Product Name",
            rules: {
              required: false,
            },
            item: this.CouponCodeDetails,
            bindLabel: "name"
        },
        discount: {
          type: "text",
          value: "",
          label: "Product Discount",
          rules: {
            required: true,
          }
        },
        discountStatus: {
          type: "text",
          value: "",
          label: "discountStatus",
          rules: {
            required: true,
          }
        },
        originalPrice: {
          type: "text",
          value: "",
          label: "originalPrice",
          rules: {
            required: true,
          }
        },
        finalPrice: {
          type: "text",
          value: "",
          label: "finalPrice",
          rules: {
            required: true,
          }
        },
        expirationTime: {
          type: "text",
          value: "",
          label: "Expiration Date",
          rules: {
            required: true,
          }
        },
      }, 'AirwayBlCopy');
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  AddCoupon(e: any) {
    this.documentService.getInvoice_No({
      name: e.value.name
    }, 'CouponCodeProduct').subscribe((resp: any) => {
      console.log('CouponCodeProduct name', resp)
      if (resp.data.length == 0) {
        this.documentService.addCouponCode(e.value).subscribe((res: any) => {
        
        });
      }
    })
  }

}
