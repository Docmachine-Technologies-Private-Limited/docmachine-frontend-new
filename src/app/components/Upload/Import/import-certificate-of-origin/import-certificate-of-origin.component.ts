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
  selector: 'upload-import-certificate-of-origin',
  templateUrl: './import-certificate-of-origin.component.html',
  styleUrls: ['./import-certificate-of-origin.component.scss', '../../commoncss/common.component.scss']
})
export class ImportCertificateOfOriginComponent implements OnInit {
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

  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Commerical Number*",
          rules: {
            required: true,
          }
        },
        CertificateOriginNumber: {
          type: "text",
          value: "",
          label: "Certificate of Origin Number*",
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
      }, 'ExportCertificateofOrigin');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    e.value.pipo = this.pipoArr;
    e.value.doc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.CIRef = [this.CommercialFilter(e.value.CommercialNumber?.id)[0]?._id];
    this.documentService.getInvoice_No({
      CertificateOriginNumber: e.value.CertificateOriginNumber
    }, 'CertificateofOrigin').subscribe((resp: any) => {
      console.log('CertificateofOrigin Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addCertificateofOrigin(e.value).subscribe((res: any) => {
          this.toastr.success(`Certificate of Origin Added Successfully`);
          console.log('CertificateofOrigin Added Successfully');
          let updatedData = {
            "CertificateofOriginRef": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'CertificateofOriginRef', this.pipourl1, updatedData).subscribe((data) => {
            console.log(data);
            this.router.navigate(['home/Summary/Import/Import-certificate-of-origin']);
          }, (error) => {
            console.log('error');
          });
        }, (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this sb no. : ${e.value.CertificateOriginNumber} already exit...`);
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
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('import', pipo).subscribe((res: any) => {
      this.COMMERCIAL_LIST = res?.data;
      res?.data.forEach(element => {
        let checkexit = this.validator.COMMERICAL_NO.filter((item: any) => item?.value?.includes(element?.commercialNumber))
        if (checkexit?.length == 0) {
          this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0], doc: element?.commercialDoc });
        }
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },
      (err) => {
        console.log(err)
      }
    );
  }
  CommercialFilter(id: any) {
    return this.COMMERCIAL_LIST.filter((item: any) => item?._id?.includes(id) == true)
  }

}
