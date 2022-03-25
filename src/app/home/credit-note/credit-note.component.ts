
import { DocumentService } from 'src/app/service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Data, NavigationStart, Router } from '@angular/router';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})
export class CreditNoteComponent implements OnInit {
  @ViewChild('creditnotes', { static: false }) creditnotes: ElementRef;
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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.documentService.getCredit().subscribe(
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
  this.documentService.updateCredit(data, data._id ).subscribe(
    (data) => {
      console.log('king123');
      this.toastr.success('PI/PO updated successfully.');

    },
    (error) => {
      // this.toastr.error('Invalid inputs, please check!');
      console.log('error');
    }
  );


}
newDebit(){
  this.router.navigate(['home/upload', { file: 'export', document: 'debitNote' }]);
}
exportToExcel() {
  const ws: xlsx.WorkSheet =
  xlsx.utils.table_to_sheet(this.creditnotes.nativeElement);
  const wb: xlsx.WorkBook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
  xlsx.writeFile(wb, 'creditnotes.xlsx');
 }

toEdit(index){
  this.optionsVisibility[index] = true;
  this.toastr.warning('PI/PO Is In Edit Mode');
}
}
