import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadServiceValidatorService } from '../../service/upload-service-validator.service';
import { CustomConfirmDialogModelComponent } from '../../../../custom/custom-confirm-dialog-model/custom-confirm-dialog-model.component';
import { filterAnyTablePagination } from '../../../../service/v1/Api/filterAnyTablePagination';

@Component({
  selector: 'edit-export-certificate-of-origin',
  templateUrl: './export-certificate-of-origin.component.html',
  styleUrls: ['./export-certificate-of-origin.component.scss', '../../commoncss/common.component.scss']
})
export class EditExportCertificateOfOriginComponent implements OnInit {
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
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  data: any = '';

  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public route: ActivatedRoute,
    public filteranytablepagination: filterAnyTablePagination,
    public CustomConfirmDialogModel: CustomConfirmDialogModelComponent,
    public userService: UserService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = JSON.parse(params["item"]);
      this.response(JSON.parse(params["item"]));
      console.log(this.data, "EditInwardUploadDocumentsComponent")
    });
  }
  
  response(args: any) {
    console.log(args, args?.length, "argsShippingbill")
    if (args?.length == undefined) {
      this.Edit(args);
    } else {
      this.ReUplod(args)
    }
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }

  Edit(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.changedCommercial(this.data?.pipo[0]?._id)
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args?.doc);
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: args?.CommercialNumber,
          label: "Commerical Number",
          rules: {
            required: true,
          }
        },
        CertificateOriginNumber: {
          type: "text",
          value: args?.CertificateOriginNumber,
          label: "Certificate of Origin Number",
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

  ReUplod(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.changedCommercial(this.data?.pipo[0]?._id)
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1]?.publicUrl);
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Commerical Number",
          rules: {
            required: true,
          }
        },
        CertificateOriginNumber: {
          type: "text",
          value: "",
          label: "Certificate of Origin Number",
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
    e.value.CIRef = [this.CommercialFilter(e.value.CommercialNumber?.id)[0]?._id];
    if (this.data?.CertificateOriginNumber != e.value.CertificateOriginNumber) {
      this.CustomConfirmDialogModel.YesDialogModel(`Are you sure update your Certificate of Origin`, 'Comments', (CustomConfirmDialogRes: any) => {
        if (CustomConfirmDialogRes?.value == "Ok") {
          this.documentService.getInvoice_No({
            CertificateOriginNumber: e.value.CertificateOriginNumber
          }, 'CertificateofOrigin').subscribe((resp: any) => {
            console.log('creditNoteNumber Invoice_No', resp)
            if (resp.data.length == 0) {
              e.value.doc = this.publicUrl?.changingThisBreaksApplicationSecurity;
              this.documentService.updateCertificateofOrigin(e.value, this.data?._id).subscribe((res: any) => {
                this.toastr.success(`Certificate of Origin Updated Successfully`);
                console.log('CertificateofOrigin Added Successfully');
                this.router.navigate(['home/Summary/Export/export-certificate-of-origin']);
              }, (err) => console.log('Error adding pipo'));
            }else{
              this.toastr.error(`Please check this Certificate of Origin Number : ${e.value.CertificateOriginNumber} already exit...`);
            }
          });
        }
      });
    } else {
      this.documentService.updateCertificateofOrigin(e.value, this.data?._id).subscribe((res: any) => {
        this.toastr.success(`Certificate of Origin Updated Successfully`);
        console.log('CertificateofOrigin Added Successfully');
        this.router.navigate(['home/Summary/Export/export-certificate-of-origin']);
      }, (err) => console.log('Error adding pipo'));
    }
   
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0] = (event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('export', pipo).subscribe((res: any) => {
      this.COMMERCIAL_LIST = res?.data;
      this.validator.COMMERICAL_NO=[];
      res?.data.forEach(element => {
        this.validator.COMMERICAL_NO.push({ value: element?.commercialNumber, id: element?._id, sbno: element?.sbNo, sbid: element?.sbRef[0], doc: element?.commercialDoc });
      });
      console.log('changedCommercial', res, this.validator.COMMERICAL_NO)
    },(err) => {console.log(err)});
  }
  
  CommercialFilter(id: any) {
    return this.COMMERCIAL_LIST.filter((item: any) => item?._id?.includes(id) == true)
  }

}
