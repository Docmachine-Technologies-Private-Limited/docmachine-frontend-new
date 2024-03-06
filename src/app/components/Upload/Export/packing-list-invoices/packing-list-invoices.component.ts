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
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

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
    public filteranytablepagination: filterAnyTablePagination,
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
      let PIPO_ID_ARRAY: any = [];
      let PI_PO_BUYER_NAME_PI_PO_BENNE_NAME: any = [];
      event?.forEach(element => {
        PIPO_ID_ARRAY.push(element?._id)
        PI_PO_BUYER_NAME_PI_PO_BENNE_NAME.push(element?.id[1])
      });
      
      this.pipoArr = PIPO_ID_ARRAY?.filter(function(item, pos) {return PIPO_ID_ARRAY.indexOf(item) == pos});
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST = PI_PO_BUYER_NAME_PI_PO_BENNE_NAME
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.LoadShippingBill(this.pipoArr);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  
  LoadShippingBill(pipoArr: any) {
    this.filteranytablepagination.PaginationfilterAnyTable({
      pipo: pipoArr
    }, { limit: 20 }, 'masterrecord').subscribe((res: any) => {
      console.log(res, "LoadShippingBill")
      this.validator.SHIPPING_BILL_MASTER_DATA = res?.data;
      this.validator.origin = [];
      this.validator.SHIPPING_BUNDEL = [];
      this.validator.SHIPPING_BILL_LIST = [];
      res?.data?.forEach((element, i) => {
        if (element?.sbno != null && element?.sbno != undefined && element?.sbno != '') {
          this.validator.SHIPPING_BUNDEL.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
          this.validator.SHIPPING_BILL_LIST.push({ pipo: element?.pipo[0], id: element?.pipo[0]?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
        }
        this.validator.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
      });
      console.log('Master Country', this.validator.SHIPPING_BUNDEL, this.validator.origin);
    })
  }
}
