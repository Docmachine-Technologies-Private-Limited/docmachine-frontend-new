import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from 'src/app/service/document.service';


@Component({
  selector: 'app-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss']
})
export class InwardRemittanceAdviceComponent implements OnInit {

  public optionsVisibility: any = [];
  // public optionsVisibility : boolean = false;
  test;
  public item1: any;
  item4 : any;
  location
  commodity
  recievedAmount
  amount;
  commision;

  constructor(
    private toastr: ToastrService,
    private documentService : DocumentService,

  ) { }

  ngOnInit(): void {
    this.documentService.getIrAdvice(1).subscribe(
      (res: any) => {
        console.log(' data ' + JSON.stringify(res));
        console.log(res), (this.item1 = res.data);
        console.log("shshsh", this.item1[0].amount)
        this.item1.forEach((element, i) => {
          let amount = element.amount.replace(/,/g,"");
          let commision = element.commision.replace(/,/g,"");
          this.item1[i].recievedAmount = (parseInt(amount)) - (parseInt(commision));
          this.item1[i].convertedAmount = element.recievedAmount * element.exchangeRate;

});
        console.log("sjsjs", this.item1)



      },
      (err) => console.log(err)
    );
    // this.documentService.getIrAdvice(user).subscribe(
    //   (res: any) => {
    //     console.log('HEre Response', res);
    //     this.item = res.data;
    //     for (let value of this.item) {
    //       for(let value1 of value.pipo){
    //         const newVal = { ...value };
    //             newVal['pipo1'] = value1
    //             this.item1.push(newVal)
    //           }
    //     }
    //   },
    //   (err) => console.log(err)
    //   );
  }
  toSave(data, index){
    this.optionsVisibility[index] = false;
    console.log('Shailendra',data);
    this.documentService.updateIrAdvice(data, data._id ).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Forex Advice Row Is Updated Successfully.');

      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );


  }

  toEdit(index){
    this.optionsVisibility[index] = true;
    this.toastr.warning('Forex Advice Row Is In Edit Mode');
  }
}
