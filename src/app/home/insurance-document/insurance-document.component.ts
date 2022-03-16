import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../service/user.service'

@Component({
  selector: 'app-insurance-document',
  templateUrl: './insurance-document.component.html',
  styleUrls: ['./insurance-document.component.scss']
})
export class InsuranceDocumentComponent implements OnInit {

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
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.documentService.getInsurance().subscribe(
      (res: any) => {
        console.log('HEre Response', res);
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

  openInsuranceDoc(content){
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

  viewID(a){
  console.log(666666666666666, a)
  this.viewData = this.sanitizer.bypassSecurityTrustResourceUrl(
    a['doc']
  );
  }

  toSave(data, index){
    this.optionsVisibility[index] = false;
    console.log(data);
    this.documentService.updateInsurance(data, data._id ).subscribe(
      (data) => {
        console.log('king123');
        this.toastr.success('Insurance Document Row Is Updated Successfully.');
        console.log(data)
      },
      (error) => {
        // this.toastr.error('Invalid inputs, please check!');
        console.log('error');
      }
    );


  }

  toEdit(index){
    this.optionsVisibility[index] = true;
    this.toastr.warning('Insurance Document Row Is In Edit Mode');
  }

}
