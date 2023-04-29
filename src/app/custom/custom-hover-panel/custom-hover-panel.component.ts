import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document.service';
import { PipoDisplayListView, PipoDisplayListViewItem } from '../../../model/pipo.model';
import { PipoDataService } from '../../service/homeservices/pipo.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'custom-hover-panel',
  templateUrl: './custom-hover-panel.component.html',
  styleUrls: ['./custom-hover-panel.component.scss']
})
export class CustomHoverPanelComponent implements OnInit {
  @Input('pipoid') pipoID: any = '';
  SbData: any = [];
  inWardData: any = [];
  inwardRemitanceAmount: number = 0;
  inwardBalanceAmount: number = 0;
  balanceAmount: number = 0
  SbAmountAndCurrency: any = [];
  filtervisible: boolean = false
  startDate: any = '';
  endDate: any = '';
  item: any = [];
  PDF_URL: any = '';
  public pipoArrayList: Array<PipoDisplayListViewItem> = [];
  public pipoDisplayListData: PipoDisplayListView;
  public pipoData?: any = [];

  constructor(private documentService: DocumentService,
    private pipoDataService: PipoDataService,
    private sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.pipoID, 'dfsjdgfdsdsgfdshfdsgfdsfds')
    this.getPIPOData(this.pipoID)

    this.documentService.getPipo().subscribe(
      (res: any) => {
        console.log('HEre ResponseAmani####', res);
        this.item = res.data;
        this.pipoDisplayListData = this.pipoDataService.setPipoData(res.data, 'export');
        this.pipoDataService.pipo$.subscribe((data) => {
          for (let value of data) {
            this.pipoArrayList.push(value);
          }
        });
      },
      (err) => console.log(err, '**********')
    );
  }

  getSBDetails(id) {
    this.documentService.getSBDetailsByPIPO(id).subscribe((Sbres: any) => {
      this.SbData = Sbres;
      console.log("SbData", this.SbData)
      let result: any = [];
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
    // this.documentService.getInwardDetailsByPIPO(id).subscribe((inwardRes: any) => {
    //   this.inWardData = inwardRes
    //   this.inwardRemitanceAmount = this.inWardData.reduce((accum, item) => accum + item.amount, 0)
    //   this.inwardBalanceAmount = this.pipoData.amount - this.inwardRemitanceAmount
    // })
  }

  getPIPOData(id) {
    this.documentService.getPipoByid(id).subscribe((pipoRes: any) => {
      console.log("-->", pipoRes)
      this.pipoData = pipoRes
      this.getSBDetails(this.pipoID)
      this.getInwardData(this.pipoID)
    }
    )
  }
  openUploadWithType(type) {
    this.navigate('export', type, this.pipoData.pi_poNo, this.pipoData.buyerName, this.pipoData._id);
  }
  navigate(file, document, pi_poNo, buyerName, pipo_id) {
    this.router.navigate(['/home/upload', {
      file: file,
      document: document,
      pipo: pi_poNo,
      pipo_id: pipo_id,
      bene: buyerName,
      index: 0
    },
    ])
  }
  openDoc(a: any) {
    this.PDF_URL ='';
    setTimeout(() => { this.PDF_URL = a; }, 500)
    console.log(a, 'openDoc');
  }
}
