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
  templateUrl: './packing-list-invoices.component.html',
  styleUrls: ['./packing-list-invoices.component.scss','../../commoncss/common.component.scss']
})
export class PackingListInvoicesComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  btndisabled: boolean = true;
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
  SUBMIT_ERROR:boolean=false;
  
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
      },'ExportPackingList');
      console.log(this.UPLOAD_FORM, 'UPLOAD_FORM')
    }, 200);

    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(e: any) {
    console.log(e, 'value')
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR=false;
      e.value.file = 'export';
      let selectedBOE = this.validator.SHIPPING_BILL_LIST.filter((item: any) => item?._id === e?.value?.sbNo)[0];
      e.value.pipo = this.pipoArr;
      console.log('pipoarrya', this.pipoArr);
      e.value.packingDoc = this.pipourl1;
      console.log('pipodoc', this.pipourl1);
      e.value.buyerName = this.BUYER_LIST;
      e.value.currency = e.value?.currency?.type;
      e.value.sbNo = selectedBOE?.sbno;
      e.value.sbRef = [selectedBOE?._id];      
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
                selectedBOE?.sbno,
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
                        selectedBOE?.sbno,
                        selectedBOE?._id
                      ).subscribe(
                        (data) => {
                          console.log('king123');
                          console.log('DATA', data);
                          this.router.navigate(['/home/packing-list']);
                        },
                        (error) => {
                          console.log('error');
                        }
                      );
                  },(error) => {
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
    } else {
      this.SUBMIT_ERROR=true
    }
  }

  clickPipo(event: any) {
    if (event != undefined) {
      this.btndisabled = false;
      this.pipoArr = [event?._id]
      console.log('Array List', this.pipoArr);
      this.BUYER_LIST[0]=(event?.id[1])
      this.BUYER_LIST = this.BUYER_LIST?.filter(n => n);
      this.pipoDataService.getShippingNo(event?._id, 'export');
      this.validator.SHIPPING_BILL_LIST = [];
      for (let j = 0; j < this.validator.SHIPPING_BUNDEL.length; j++) {
        if (this.validator.SHIPPING_BUNDEL[j]?.id == event?._id) {
          this.validator.SHIPPING_BILL_LIST.push({
            sbno: this.validator.SHIPPING_BUNDEL[j]?.sbno,
            _id: this.validator.SHIPPING_BUNDEL[j]?.SB_ID
          });
        }
      }
    } else {
      this.btndisabled = true;
    }
    console.log(event, 'sdfsdfdsfdfdsfdsfdsfdsf')
  }

}
