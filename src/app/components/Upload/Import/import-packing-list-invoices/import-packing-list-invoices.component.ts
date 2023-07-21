import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'app-packing-list-invoices',
  templateUrl: './import-packing-list-invoices.component.html',
  styleUrls: ['./import-packing-list-invoices.component.scss','../../commoncss/common.component.scss']
})
export class ImportPackingListInvoicesComponent implements OnInit {
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

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
    this.CURRENCY_LIST = this.documentService.getCurrencyList();
    this.userService.getBuyer(1).subscribe((res: any) => {
      res.data?.forEach(element => {
        if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
          this.ConsigneeNameList.push({ value: element?.ConsigneeName })
        }
        this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
      });
      console.log('Benne Detail111', this.ConsigneeNameList, this.BUYER_DETAILS);
    }, (err) => console.log('Error', err));
    this.documentService.getMaster(1).subscribe((res: any) => {
      console.log('Master Data File', res);
      res.data.forEach((element, i) => {
        element?.pipo.forEach((ele, j) => {
          this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id });
        });
      });
    }, (err) => console.log(err));
    await this.pipoDataService.getPipoList('export').then(async (data) => {
      console.log(data, 'data..................')
      this.pipoDataService.pipolistModel$.subscribe((data) => {
        this.PIPO_DATA = data;
        console.log(data, 'data2222..................')
      });
    });
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        boe: {
          type: "BOE",
          value: "",
          label: "Select Bill Of Entry",
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
        currency: {
          type: "currency",
          value: "",
          label: "Currency*",
          rules: {
            required: true,
          }
        },
        packingListAmount: {
          type: "text",
          value: "",
          label: "Packing List Amount",
          rules: {
            required: true,
          }
        }
      }, 'Importpackinglist');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    let selectedBOE = e?.value?.boe;
    e.value.pipo = this.pipoArr;
    console.log('pipoarrya', this.pipoArr);
    e.value.packingDoc = this.pipourl1;
    console.log('pipodoc', this.pipourl1);
    e.value.buyerName = this.BUYER_LIST;
    e.value.currency = e.value?.currency?.type;
    e.value.boe = selectedBOE?.sbno;
    e.value.boeRef = [selectedBOE?._id];
    this.documentService.getInvoice_No({
      packingListNumber: e.value.packingListNumber
    }, 'packinglists').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addPackingList(e.value).subscribe(
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
              selectedBOE?.boeNumber,
              selectedBOE?._id
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
                  e.value,
                  selectedBOE?.boeNumber,
                  selectedBOE?._id
                ).subscribe(
                  (data) => {
                    console.log('king123');
                    console.log('DATA', data);
                    this.router.navigate(['/home/import-packing-list']);
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
        this.toastr.error(`Please check this packing-list no. : ${e.value.packingListNumber} already exit...`);
      }
    });
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