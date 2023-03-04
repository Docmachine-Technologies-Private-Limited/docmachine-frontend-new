import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DocumentService } from "../../service/document.service";

@Component({
  selector: 'app-view-pipo',
  templateUrl: './view-pipo.component.html',
  styleUrls: ['./view-pipo.component.scss']
})
export class ViewPipoComponent implements OnInit {
  pipoID;
  SbData: any = [];
  inWardData: any = [];
  inwardRemitanceAmount:number=0;
  inwardBalanceAmount:number=0;
  balanceAmount:number=0
  pipoData:any;

  SbAmountAndCurrency: any = [];
  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router,


  ) {
    this.pipoID = this.route.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {
    this.getPIPOData(this.pipoID)
  }



  getSBDetails(id) {
    this.documentService.getSBDetailsByPIPO(id).subscribe((Sbres: any) => {
      this.SbData = Sbres;
      console.log("SbData", this.SbData)
      let result:any = [];
      this.SbData.reduce(function (res, value) {
        if (!res[value.fobCurrency]) {
          res[value.fobCurrency] = {
            fobCurrency: value.fobCurrency, fobValue: 0
          };
          result.push(res[value.fobCurrency])
        }
        res[value.fobCurrency].fobValue += value.fobValue
          ;
        return res;
      }, {});
      this.SbAmountAndCurrency = result
    })
  }

  getInwardData(id) {
    this.documentService.getInwardDetailsByPIPO(id).subscribe((inwardRes: any) => {
      this.inWardData= inwardRes
      this.inwardRemitanceAmount = this.inWardData.reduce((accum,item) => accum + item.amount, 0)
      this.inwardBalanceAmount = this.pipoData.amount - this.inwardRemitanceAmount
    }
    )
  }

  getPIPOData(id) {
    this.documentService.getPipoByid(id).subscribe((pipoRes: any) => {
      console.log("-->",pipoRes)
      this.pipoData = pipoRes
      this.getSBDetails(this.pipoID)
      this.getInwardData(this.pipoID)
    }
    )
  }

  //hiding info box
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';


  openDoc(a) {
    console.log(a);
    if (a == 'Advance Payment') {

    }
    // else if (a == 'Direct Import') {
    //   console.log('hello')
    //   this.router.navigate(['home/direct-import-payment', {
    //     file: this.SbData.pi_poNo, bene: this.SbData.benneName, amount: this.SbData.amount
    //   }]);
    // }
    else if (a == 'Collection Bill') {

    } else if (a == 'packing Credit Request') {
      //this.router.navigate(['home/packingCreditRequest']);
    } else if (a == 'Letter of Credit') {
      // if (this.SbData.lcIssuance && this.SbData.lcIssuance1) {
      //   this.buttonToggle1 = !this.buttonToggle1
      //   console.log('dhhh')


    }

  }



  viewDetails ()
  {
    console.log("pipoData",this.pipoData)
    this.router.navigate(['home/pipo-export',{ id: this.pipoData?.pi_poNo,page:'details', index:0,pipo_id:this.pipoData._id}]);
    // pipoDocExport;id=PO01;page=details;index=0
    // pipoDocExport;id=PO01;page=details;index=0
    // this.router.navigate([
    //   'home/pipoDocExport',
    //   {
    //     id: selectedRowValues.pi_poNo,
    //     page: 'details',
    //     index: i,
    //   },
    // ]);
    // pipoDocExport;id=PO01;page=details;index=0
  }


}
