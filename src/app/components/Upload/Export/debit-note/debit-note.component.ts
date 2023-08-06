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
  selector: 'export-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['./debit-note.component.scss','../../commoncss/common.component.scss']
})
export class DebitNotesComponent implements OnInit {
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
      console.log('Master Country', this.SHIPPING_BUNDEL);
    }, (err) => console.log(err));
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        commercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Commerical Number*",
          rules: {
            required: true,
          }
        },
        debitNoteNumber: {
          type: "text",
          value: "",
          label: "Debit Note Number*",
          rules: {
            required: true,
          }
        },
        currency: {
          type: "currency",
          value: "",
          label: "Currency",
          rules: {
            required: true,
          }
        },
        totalDebitAmount: {
          type: "text",
          value: "",
          label: "Debit Note Amount",
          rules: {
            required: true,
          }
        }
      }, 'DebitNoteExport');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    const selectedShippingBill: any = e.value?.commercialNumber
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.currency = e.value?.currency?.type;
    e.value.file = 'export';
    e.value.commercialNumber = e.value?.commercialNumber?.value;
    e.value.DebitNote = this.pipourl1;
    console.log(e.value, selectedShippingBill);
    this.documentService.getInvoice_No({
      debitNoteNumber: e.value.debitNoteNumber
    }, 'debitnotes').subscribe((resp: any) => {
      console.log('debitNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addDebit(e.value).subscribe((res: any) => {
          this.toastr.success(`debit Note Document Added Successfully`);
          let updatedDataSB = {
            "debitnotedetails": [
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
            "blcopyRefs": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'export', this.pipourl1, updatedData)
            .subscribe(
              (data) => {
                console.log(' credit Note document', this.pipourl1);
                console.log(data);
                this.documentService
                  .updateMasterBySb(
                    e.value,
                    selectedShippingBill[0]?.sbno,
                    selectedShippingBill[0]?.sbid
                  ).subscribe(
                    (data) => {
                      console.log('DATA', data);
                      this.router.navigate(['home/Summary/Export/debit-note']);
                    },
                    (error) => {
                      console.log('error');
                    }
                  );
              },
              (error) => {
                console.log('error');
              }
            );
        },
          (err) => console.log('Error adding pipo'));
      } else {
        this.toastr.error(`Please check this debit note no. : ${e.value.debitNoteNumber} already exit...`);
      }
    });
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0]=(event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('export', pipo).subscribe((res: any) => {
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0] });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },
      (err) => {
        console.log(err)
      }
    );
  }
}
