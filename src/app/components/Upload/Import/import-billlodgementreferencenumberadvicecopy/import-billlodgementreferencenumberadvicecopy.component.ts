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
  selector: 'app-import-billlodgementreferencenumberadvicecopy',
  templateUrl: './import-billlodgementreferencenumberadvicecopy.component.html',
  styleUrls: ['./import-billlodgementreferencenumberadvicecopy.component.scss','../../commoncss/common.component.scss']
})
export class ImportBilllodgementreferencenumberadvicecopyComponent implements OnInit {
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
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  UPLOAD_STATUS:boolean=false;
  
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public route: ActivatedRoute,
    public validator: UploadServiceValidatorService,
    public userService: UserService) { }

  async ngOnInit() {
    var Transaction_id: any = this.route.snapshot.paramMap.get('Transaction_id');
    var Transaction_pipoid: any = this.route.snapshot.paramMap.get('pipo');
    console.log(Transaction_pipoid, Transaction_id)
    var temp_pipo: any = this.route.snapshot.paramMap.get('pipo')?.split(',');
    if (temp_pipo?.length != 0) {
      this.btndisabled = false;
      this.validator.documentService.PI_PO_NUMBER_LIST = {
        PI_PO_BUYER_NAME: [],
        PI_PO_BENNE_NAME: [],
        PIPO_TRANSACTION: [],
        PIPO_NO: []
      };
      this.validator.CommonLoadTransaction(temp_pipo);;
      this.validator.UPLOAD_STATUS = this.route.snapshot.paramMap.get('upload') == 'true' ? true : false;
      this.UPLOAD_STATUS=this.route.snapshot.paramMap.get('upload')=='true'?true:false  
    }
    console.log(temp_pipo, this.UPLOAD_STATUS,"temp_pipo")
  }
  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
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
      }, 'importbilllodgementreferencenumberadvicecopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.file = 'import';
    this.documentService.getInvoice_No({
      blcopyrefNumber: e.value.blcopyrefNumber
    }, 'blcopyref').subscribe((resp: any) => {
      console.log('blcopyref Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addBlcopyref(e.value).subscribe((res: any) => {
          this.toastr.success(`Blcopyref Document Added Successfully`);
          let updatedData = {
            "blcopyRefs": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData)
            .subscribe(
              (data) => {
                console.log('Blcopyref Document document', this.pipourl1);
                console.log(data);
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
                     this.router.navigate(['home/Summary/Import/Bill-Lodgement-Referance-AdviceCopy']);
                  });
                } else {
                   this.router.navigate(['home/Summary/Import/Bill-Lodgement-Referance-AdviceCopy']);
                }
               
              },
              (error) => {
                console.log('error');
              }
            );
        },
          (err) => console.log('Error adding Blcopyref Document'));
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
      this.BUYER_LIST[0]=(event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}