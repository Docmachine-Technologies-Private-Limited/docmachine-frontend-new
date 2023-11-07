import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'export-packing-list-invoices',
  templateUrl: './packing-list-invoices.component.html',
  styleUrls: ['./packing-list-invoices.component.scss', '../../commoncss/common.component.scss']
})
export class PackingListInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  btndisabled: boolean = true;
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
  SUBMIT_ERROR: boolean = false;
  PIPO_DATA:any=[];
  
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: "",
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        packingListNumber: {
          type: "text",
          value: "",
          label: "Packing List Number*",
          rules: {
            required: true,
          }
        },
      }, 'ExportPackingList');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value Packing')
    e.file = 'export';
    let selectedShippingBill = this.validator?.SHIPPING_BUNDEL?.filter((item: any) => item?.SB_ID === e?.sbNo)[0];
    e.pipo = this.pipoArr;
    e.packingDoc = this.pipourl1;
    e.buyerName = this.BUYER_LIST;
    e.currency = e?.currency;
    e.sbNo = selectedShippingBill?.sbno;
    e.sbRef = [selectedShippingBill?._id];
    this.documentService.getInvoice_No({
      packingListNumber: e.packingListNumber
    }, 'packinglists').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addPackingList(e).subscribe(
          (res: any) => {
            this.toastr.success(`Packing List Added Successfully`);
            console.log('Packing List Added Successfully');
            let updatedDataSB = {
              "packingdetails": [
                res.data._id,
              ],
            }
            this.documentService.updateMasterBySb(
              updatedDataSB,
              selectedShippingBill?.sbno,
              selectedShippingBill?._id
            ).subscribe((data) => {
              console.log('updateMasterBySbupdateMasterBySb', data);
            }, (error) => {
              console.log('error');
            }
            );
            let updatedData = {
              "packingListRef": [
                res.data._id,
              ],
            }
            this.userService.updateManyPipo(this.pipoArr, "packingList", this.pipourl1, updatedData).subscribe((data) => {
              console.log(data);
              this.documentService
                .updateMasterBySb(
                  e,
                  selectedShippingBill?.sbno,
                  selectedShippingBill?._id
                ).subscribe(
                  (data) => {
                    console.log('king123');
                    console.log('DATA', data);
                    this.router.navigate(['home/Summary/Export/packing-list']);
                  },
                  (error) => {
                    console.log('error');
                  }
                );
            }, (error) => {
              console.log('error');
            }
            );
          },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this packing-list no. : ${e.packingListNumber} already exit...`);
      }
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.documentService.getPipoById(event?._id).subscribe((res: any) => {
        this.PIPO_DATA=res?.data[0];
        console.log(res, "getPipoById")
      })
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
