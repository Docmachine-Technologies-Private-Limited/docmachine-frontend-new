import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import $ from 'jquery'
declare var kendo: any;

@Component({
  selector: 'federal-bank-exportletterhead',
  templateUrl: './exportoldletterhead.component.html',
  styleUrls: ['./exportoldletterhead.component.scss']
})
export class OldFederalBankExportletterheadComponent implements OnInit, OnChanges {
  @Input('data') data: any = [];
  LETTER_HEAD_IMAGE: any = '';
  PREVIWES_URL: any = ''
  @Output('url') url = new EventEmitter();
  constructor(private userService: UserService) { }
  timeout:any=''
  
  ngOnInit(): void {
    this.userService.getUserDetail().then((status: any) => {
      this.userService.getTeambyId(status?.result?.companyId).subscribe((res: any) => {
        console.log(res, 'getTeamByUser');
        if (res?.data[0]?.letterHead != '' && res?.data[0]?.letterHead != undefined) {
          this.LETTER_HEAD_IMAGE = res?.data[0]?.letterHead;
          clearTimeout(this.timeout);
          this.timeout=setTimeout(() => {
            $(document).ready(async () => {
              await kendo.pdf.defineFont({
                "DejaVu Sans": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans.ttf",
                "DejaVu Sans|Bold": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Bold.ttf",
                "DejaVu Sans|Bold|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
                "DejaVu Sans|Italic": "https://kendo.cdn.telerik.com/2016.2.607/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf",
                "WebComponentsIcons": "https://kendo.cdn.telerik.com/2017.1.223/styles/fonts/glyphs/WebComponentsIcons.ttf"
              });
              if ($("#federal-bank-letter-head-2")[0] != undefined) {
                await kendo.drawing.drawDOM($("#federal-bank-letter-head-2")[0], {
                  paperSize: "A4",
                  margin: [10, 0, 0, 0],
                  scale: 0.7,
                }).then(async function (group) {
                  return await kendo.drawing.exportPDF(group, {
                    paperSize: "A4",
                    margin: [10, 0, 0, 0],
                  });
                }).done(async (pdfdata) => {
                  await this.url.emit(pdfdata);
                });
              }
            });
          },1000);
        }
      })
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.data?.currentValue;
    console.log(changes, 'asdasdasdasdasdasds');
  }
}
