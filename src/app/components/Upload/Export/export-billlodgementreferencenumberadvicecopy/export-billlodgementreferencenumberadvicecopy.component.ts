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
export class ExportBilllodgementreferencenumberadvicecopyComponent implements OnInit {
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
  UPLOAD_STATUS: boolean = false;
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public userService: UserService) { }

  TIMEOUT: any = ''
  async ngOnInit() {
    clearTimeout(this.TIMEOUT);
    var TransactionSbRef: any = this.route.snapshot.paramMap.get('SbRef');
    var Transaction_id: any = this.route.snapshot.paramMap.get('Transaction_id');
    var Transaction_pipoid: any = this.route.snapshot.paramMap.get('pipo');
    console.log(TransactionSbRef, Transaction_pipoid, Transaction_id)
    var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
    if (temp_pipo?.length != 0) {
      this.btndisabled = false;
      this.validator.SELECTED_PIPO = temp_pipo;
      this.validator.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false;
      this.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false
      this.validator.documentService.PI_PO_NUMBER_LIST = {
        PI_PO_BUYER_NAME: [],
        PI_PO_BENNE_NAME: [],
        PIPO_TRANSACTION: [],
        PIPO_NO: []
      };
      this.validator.CommonLoadTransaction(temp_pipo);
    }
    console.log(temp_pipo, this.UPLOAD_STATUS, "temp_pipo")
  }


  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        sbNo: {
          type: "ShippingBill",
          value: "",
          label: "Select Shipping Bill",
          rules: {
            required: true,
          }
        },
        blcopyrefNumber: {
          type: "text",
          value: "",
          label: "BlCopyRef Number*",
          rules: {
            required: true,
          }
        },
        amount: {
          type: "text",
          value: "",
          label: "BlCopyRef Amount*",
          rules: {
            required: true,
          }
        }
      }, 'exportbilllodgementreferencenumberadvicecopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    var TransactionSbRef: any = this.route.snapshot.paramMap.get('SbRef');
    if (TransactionSbRef != '' && TransactionSbRef != undefined && TransactionSbRef != null) {
      e.value.SbRef = [TransactionSbRef];
    } else {
      e.value.SbRef = [e?.value?.sbNo];
    }
    e.value.file = 'export';
    console.log(e.value, 'onSubmitblCopy');

    this.documentService.getInvoice_No({
      blcopyrefNumber: e.value.blcopyrefNumber
    }, 'blcopyref').subscribe((resp: any) => {
      console.log('blcopyref Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addBlcopyref(e.value).subscribe((res: any) => {
          console.log(res, 'addBlcopyref');
          this.toastr.success(`Blcopyref Document Added Successfully`);

          let updatedData = {
            "blcopyRef": [
              res.data._id,
            ],
          }
          this.documentService.updateBlCopyRef(
            e?.value?.sbNo,
            updatedData
          ).subscribe((data) => {
            console.log('updateBlCopyRef', data);
          }, (error) => {
            console.log('error');
          })

          this.userService.updateManyPipo(res?.data?.pipo, 'export', this.pipourl1, updatedData)
            .subscribe((dataresp) => {
              console.log('king123');
              console.log(dataresp);

              var Transaction_id: any = this.route.snapshot.paramMap.get('transaction_id');
              if (Transaction_id != '' && Transaction_id != undefined && Transaction_id != null) {
                this.documentService.AnyUpdateTable({
                  _id: Transaction_id
                }, {
                  "LodgementAdviceCopy": [
                    res.data._id,
                  ]
                }, 'ExportTransaction').subscribe((res: any) => { })
                this.documentService.UpdateTransaction({ id: Transaction_id, data: { blCopyRef: e.value } }).subscribe((res: any) => {
                  this.router.navigate(['home/Summary/Export/Bill-Lodgement-Referance-AdviceCopy']);
                });
              } else {
                this.router.navigate(['home/Summary/Export/Bill-Lodgement-Referance-AdviceCopy']);
              }
            },
              (error) => {
                console.log('error');
              }
            );
        },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this Blcopyref no. : ${e.value.blcopyrefNumber} already exit...`);
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
