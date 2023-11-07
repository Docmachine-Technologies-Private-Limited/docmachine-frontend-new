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
  selector: 'import-airway-bl-copy',
  templateUrl: './import-airway-bl-copy.component.html',
  styleUrls: ['./import-airway-bl-copy.component.scss', '../../commoncss/common.component.scss']
})
export class ImportAirwayBlCopyComponent implements OnInit {
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
      this.pipourl1 = args[1].data;
      this.validator.buildForm({
        CommercialNumber: {
          type: "CommericalNo",
          value: "",
          label: "Select Commercial Invoice",
          rules: {
            required: true,
          }
        },
        airwayBlCopydate: {
          type: "date",
          value: "",
          label: "Airway / BlCopy Date",
          rules: {
            required: true,
          }
        },
        airwayBlCopyNumber: {
          type: "text",
          value: "",
          label: "Airway / BlCopy Number",
          rules: {
            required: true,
          }
        },
      }, 'ImportAirwayBlCopy');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    e.value.file = 'import';
    console.log('this is console of blcopy', e.value);
    e.value.pipo = this.pipoArr;
    e.value.blCopyDoc = this.pipourl1;
    e.value.buyerName = this.BUYER_LIST;
    e.value.CommercialNumber = this.CommercialNumber
    e.value.sbNo = '';
    e.value.sbRef = [];
    console.log(e.value, 'onSubmitblCopy');
    this.documentService.getInvoice_No({
      airwayBlCopyNumber: e.value.airwayBlCopyNumber
    }, 'airwayblcopies').subscribe((resp: any) => {
      console.log('creditNoteNumber Invoice_No', resp)
      if (resp.data.length == 0) {
        this.documentService.addAirwayBlcopyFile(e.value).subscribe((res: any) => {
          this.toastr.success(`addAirwayBlcopy Document Added Successfully`);
          let updatedData = {
            "blcopydetails": [
              res.data._id,
            ], "airwayBlCopyRef": [
              res.data._id,
            ],
          }
          this.userService.updateManyPipo(this.pipoArr, 'airwayBlcopy', this.pipourl1, updatedData).subscribe((data) => {
            console.log(data);
            this.router.navigate(['home/Summary/Import/Airway-bl-Copy']);
          },
            (error) => {
              console.log('error');
            }
          );
        },
          (err) => console.log('Error adding pipo')
        );
      } else {
        this.toastr.error(`Please check this airwayblcopies no. : ${e.value.airwayBlCopyNumber} already exit...`);
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
      this.COMMERCIAL_LIST = [];
      this.changedCommercial(this.pipoArr)
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

  changedCommercial(pipo: any) {
    this.documentService.getCommercialByFiletype('import', pipo).subscribe((res: any) => {
      this.validator.COMMERICAL_NO=[];
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
