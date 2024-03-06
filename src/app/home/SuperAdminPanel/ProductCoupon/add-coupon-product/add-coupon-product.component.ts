import { Component, OnInit } from '@angular/core';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';
import { UploadServiceValidatorService } from '../../../../components/Upload/service/upload-service-validator.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../../../../service/document.service';

@Component({
  selector: 'app-add-coupon-product',
  templateUrl: './add-coupon-product.component.html',
  styleUrls: ['./add-coupon-product.component.scss']
})
export class AddCouponProductComponent implements OnInit {

  constructor(public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public documentService: DocumentService,
    public filteranytablepagination: filterAnyTablePagination,) { }

  ngOnInit(): void {
    this.response(null)
  }

  response(args: any) {
    setTimeout(() => {
      this.validator.buildForm({
        name: {
          type: "text",
          value: "",
          label: "Product Name",
          rules: {
            required: true,
          }
        },
        price: {
          type: "text",
          value: "",
          label: "Product Price",
          rules: {
            required: true,
          }
        },
        description: {
          type: "text",
          value: "",
          label: "Description",
          rules: {
            required: true,
          }
        },
        discount: {
          type: "text",
          value: "",
          label: "Product Discount",
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
