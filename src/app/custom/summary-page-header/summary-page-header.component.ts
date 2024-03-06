import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'summary-page-header',
  templateUrl: './summary-page-header.component.html',
  styleUrls: ['./summary-page-header.component.scss']
})
export class SummaryPageHeaderComponent implements OnInit {
  @Input('Length') Length:number=0;
  @Input('ngcontent') ngcontent:boolean=false;
  @Input('TITLE') TITLE:any='';
  @Output('exportToExcel') exportToExcel:any= new EventEmitter();
  @Output('reset') reset:any= new EventEmitter();
  @Output('onSubmit') onSubmit:any= new EventEmitter();
  @Input('RouterLink') RouterLink:any;
  @Input('FILTER_FORM') FILTER_FORM:any='';
  @Input('OTHER_BUTTON_NAME') OTHER_BUTTON_NAME:any='';
  @Input('OtherRouterLink') OtherRouterLink:any;

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  
  navigate(url:any){
    this.router.navigate(url);
  }

  exportToExcelClick(){
    this.exportToExcel.emit('done')
  }
  
  ResetClick(){
    this.reset.emit('done')
  }
  
  onSubmitClick($event){
    this.onSubmit.emit($event)
  }
}
