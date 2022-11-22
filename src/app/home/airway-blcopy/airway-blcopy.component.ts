import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedDataService } from "../shared-Data-Servies/shared-data.service";
import * as xlsx from 'xlsx';
import {Router}from '@angular/router';
import { DocumentService } from 'src/app/service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-airway-blcopy',
  templateUrl: './airway-blcopy.component.html',
  styleUrls: ['./airway-blcopy.component.scss']
})
export class AirwayBLCopyComponent implements OnInit {

  @ViewChild('airwayBlCopy', { static: false }) airwayBlCopy: ElementRef;
  public item : any;
  public item1 = [];
  public viewData : any;
  public closeResult: string;
  public optionsVisibility: any = [];
  public pipoData: any;
  public id: any;

  constructor(
    private documentService : DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private sharedData : SharedDataService
  ) { }

  ngOnInit(): void {
    this.documentService.getAirwayBlcopy().subscribe(
      (res: any) => {
        console.log('HEre Responsesssssssss', res);
        this.item = res.data;
        for (let value of this.item) {
          for(let value1 of value.pipo){
            const newVal = { ...value };
                newVal['pipo1'] = value1
                this.item1.push(newVal)
              }
        }
      },
      (err) => console.log(err)
      );

  }

  openCreditNote(content){
    this.modalService
    .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
    .result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
}

private getDismissReason(reason: any): string {
console.log('ddhdhdhh');
if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
} else {
  return `with: ${reason}`;
}
}

viewCN(a){
console.log(666666666666666, a)
this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
  a['doc']
);
}

toSave(data, index){
this.optionsVisibility[index] = false;
console.log(data);
this.documentService.updateAirwayBlcopy(data, data._id ).subscribe(
  (data) => {
    console.log('king123');
    this.toastr.success('Airway / BlCopy updated successfully.');

  },
  (error) => {
    // this.toastr.error('Invalid inputs, please check!');
    console.log('error');
  }
);


}
newCredit(){
this.sharedData.changeretunurl('home/airwayBlcopy')
this.router.navigate(['home/upload', { file: 'export', document: 'blCopy' }]);
}
exportToExcel() {
const ws: xlsx.WorkSheet =
xlsx.utils.table_to_sheet(this.airwayBlCopy.nativeElement);
const wb: xlsx.WorkBook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
xlsx.writeFile(wb, 'airwayBlCopy.xlsx');
}

toEdit(index){
this.optionsVisibility[index] = true;
this.toastr.warning('Airway / Blcopy Is In Edit Mode');
}

}
