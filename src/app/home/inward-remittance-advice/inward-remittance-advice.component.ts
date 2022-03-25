import { Component, ElementRef, OnInit, resolveForwardRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from 'src/app/service/document.service';
import { UserService } from 'src/app/service/user.service';
import {Router} from '@angular/router';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss']
})
export class InwardRemittanceAdviceComponent implements OnInit {

  @ViewChild('epltable', { static: false }) epltable: ElementRef;
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
  Comoval: any = 'Commodity';
  Locval: any = 'Location';
  nameSearch : string = 'Commodity';
  origin: any = [];
  item5: any;
  Originval: any = "origin";
  item3 : any;
  pipoValue: any = 'Select PI/PO';

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private documentService : DocumentService,
    private router: Router,

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
          let exchangeRate = element.exchangeRate.replace(/,/g,"");
          this.item1[i].convertedAmount = (amount * exchangeRate).toFixed(2);


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

    this.userService.getTeam().subscribe(
      (data) => {
        console.log('llllllllllllllllllllllllllllllll');
        console.log(data['data'][0]);
        this.location = data['data'][0]['location'];
        this.commodity = data['data'][0]['commodity'];
        console.log(this.location);
        console.log("jsadffhsjshd", this.commodity);
        console.log("team data", data);

        //this.router.navigate(['/addMember'], { queryParams: { id: data['data']._id } })
      },
      (error) => {
        console.log('error');
      }
    );

    this.documentService.getMaster(1).subscribe((res: any) => {
      console.log("Master Data File", res);
      // this.origin = res['data'][0]['countryOfFinaldestination']
      // console.log("jainshailendra",this.origin);
      (this.item5 = res.data);
      this.item5.forEach((element, i) => {
        this.origin[i] = element.countryOfFinaldestination
      })
      console.log("Master Country", this.origin)

      // this.origin.forEach((element, i)=>{
      //   this.origin[i].ori = element[i]
      // })
      // console.log("Master Country2", this.origin)
  },
    (err) => console.log(err)
    );

    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log("HEre Response", res), (this.item3 = res.data);

      },
      (err) => console.log(err)
    );
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

  newIrAdvice() {
    console.log('upload');
    this.router.navigate(['home/upload', { file: 'export', document: 'irAdvice' }]);
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =  xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'Forex Advice.xlsx');
   }

}
