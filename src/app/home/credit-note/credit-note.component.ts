import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})
export class CreditNoteComponent implements OnInit {

  public item : any;
  public item1 = [];
  public viewData : any;
  public closeResult: string;

  constructor(
    private documentService : DocumentService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('HEre Response', res);
        this.item = res.data;
        for (let value of this.item) {
          if (value['file'] == 'export') {
            console.log('a');
            this.item1.push(value);
            console.log(this.item1)
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
    a['creditNote']
  );
}
}
