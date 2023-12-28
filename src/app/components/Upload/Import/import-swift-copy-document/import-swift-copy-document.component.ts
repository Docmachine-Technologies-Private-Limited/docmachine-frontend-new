import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';

@Component({
  selector: 'app-import-swift-copy-document',
  templateUrl: './import-swift-copy-document.component.html',
  styleUrls: ['./import-swift-copy-document.component.scss','../../commoncss/common.component.scss']
})
export class ImportSwiftCopyDocumentComponent implements OnInit {
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
      this.pipourl1 = args[1].publicUrl;
      this.validator.buildForm({
        swiftCopyNumber: {
          type: "text",
          value: "",
          label: "Swift Copy Number*",
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
      }, 'importswiftcopydocument');
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
      swiftCopyNumber: e.value.swiftCopyNumber
    }, 'swiftcopies').subscribe((resp: any) => {
      console.log('swiftcopies Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addSwift(e.value).subscribe((res: any) => {
          this.toastr.success(`swiftcopies Added Successfully`);
          let updatedData = {
            "swiftcopiesRef": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'import', this.pipourl1, updatedData)
            .subscribe(
              (data) => {
                console.log('swiftcopies document', this.pipourl1);
                console.log(data);
                this.router.navigate(['home/Summary/Import/Swift-Copy-Documents']);
              },
              (error) => {
                console.log('error');
              }
            );
        },
          (err) => console.log('Error adding swiftcopies'));
        } else {
          this.toastr.error(`Please check this swiftcopies no. : ${e.value.swiftCopyNumber} already exit...`);
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
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }
}
