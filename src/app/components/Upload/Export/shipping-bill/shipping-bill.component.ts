import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ShippingBill } from '../../../../../model/shippingBill.model';
import { UserService } from '../../../../service/user.service';
import { DocumentService } from '../../../../service/document.service';
import { DateFormatService } from '../../../../DateFormat/date-format.service';

@Component({
  selector: 'app-shipping-bill',
  templateUrl: './shipping-bill.component.html',
  styleUrls: ['./shipping-bill.component.scss']
})
export class ShippingBillComponent implements OnInit {
  publicUrl: any = '';
  UPLOAD_FORM: any = [];
  CURRENCY_LIST:any=[];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public userService: UserService) { }

  ngOnInit(): void {
    this.CURRENCY_LIST=this.documentService.getCurrencyList();
    this.userService.getBuyer(1).subscribe((res: any) => {
        res.data?.forEach(element => {
          if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
            this.ConsigneeNameList.push({value: element?.ConsigneeName})
          }
          this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
        });
        console.log('Benne Detail111', this.ConsigneeNameList, this.BUYER_DETAILS);
      },
      (err) => console.log('Error', err)
    );
  }

  response(args: any) {
    this.publicUrl = '';
    setTimeout(() => {
      this.publicUrl = this.sanitizer.bypassSecurityTrustResourceUrl(args[1].publicUrl);
      this.UPLOAD_FORM = new ShippingBill(args[1]?.data);
      this.UPLOAD_FORM['leodate'] = this.date_format.formatDate(this.UPLOAD_FORM['leodate'], '-');
      let removeother: any = this.date_format.removeUnadvantageText(this.UPLOAD_FORM['sbdate'], '__—_—');
      console.log(this.UPLOAD_FORM, removeother, 'removeUnadvantageText');
      this.UPLOAD_FORM['sbdate'] = this.date_format.formatDate(this.date_format.removeAllUnderscore(removeother), '-')
      console.log(this.UPLOAD_FORM,'UPLOAD_FORM')
    }, 200);
    console.log(args, 'sdfhsdfkjsdfhsdkfsdhfkdjsfhsdk')
  }
  onSubmit(value:any){
    console.log(value,'value')
  }
}
