import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inward-remittance-advice',
  templateUrl: './inward-remittance-advice.component.html',
  styleUrls: ['./inward-remittance-advice.component.scss']
})
export class InwardRemittanceAdviceComponent implements OnInit {

  // public optionsVisibility: any = [];
  public optionsVisibility : boolean = false;

  constructor(
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  toSave(){
    // this.optionsVisibility[index] = false;
    this.optionsVisibility = false
    // console.log(data);
    // this.documentService.updateOpinionReport(data, data._id ).subscribe(
    //   (data) => {
    //     console.log('king123');
    //     this.toastr.success('Opinion Report Row Is Updated Successfully.');

    //   },
    //   (error) => {
    //     // this.toastr.error('Invalid inputs, please check!');
    //     console.log('error');
    //   }
    // );


  }

  toEdit(){
    this.optionsVisibility = true;
    this.toastr.warning('Opinion Report Row Is In Edit Mode');
  }
}
