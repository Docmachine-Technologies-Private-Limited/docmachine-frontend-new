import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomExpansionPanelService } from './custom-expansion-panel.service';

@Component({
  selector: 'custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss']
})
export class CustomExpansionPanelComponent implements OnInit, OnChanges {
  @Input('header') header: any = [];
  @Input('items') items: any = [];
  @Input('data') data: any = [];
  @Input('Keys') Keys: any = [];
  @Input('eventId') eventId: any = '';
  @Input('ViewButton') ViewButton: boolean = true;
  @Input('EditButton') EditButton: boolean = true;
  @Input('DeleteButton') DeleteButton: boolean = true;
  @Input('TableHeaderClass') TableHeaderClass: any = [];

  @Input('Expansionitems') Expansionitems: any = [];
  @Input('Expansionheader') Expansionheader: any = [];
  @Input('Expansionheader2') Expansionheader2: any = [];
  @Input('ExpansionTitle') ExpansionTitle: any = '';
  @Input('ExpansionTitle2') ExpansionTitle2: any = '';
  @Input('ExpansionKeys') ExpansionKeys: any = [];
  @Input('ExpansionKeys2') ExpansionKeys2: any = [];
  @Input('ExpansionShowHide') Expansion: boolean = true;
  @Input('ActionRequired') ActionRequired: boolean = true;

  @Output('ViewChanges') ViewChanges: any = new EventEmitter();
  @Output('EditChanges') EditChanges: any = new EventEmitter();
  @Output('DeleteChanges') DeleteChanges: any = new EventEmitter();
  @Output('event') event: any = new EventEmitter();
  @Output('TrEvent') TrEvent: any = new EventEmitter();
  @Output('ArrowEvent') ArrowEvent: any = new EventEmitter();
  PAGINATOR_DATA: any = [];
  ORIGNAL_DATA: any = [];
  PAGINATOR_TABLE_DATA: any = [];

  constructor(public exp_service: CustomExpansionPanelService) { }

  async ngOnInit() {

  }

  CollapseAll(data: any, key: any, i: any) {
    console.log(this.items, 'sdfdsfdsfdsf')
    this.ArrowEvent.emit({ item: data[i], index: i })
    data.forEach((element, index) => {
      if (index != i) {
        element[key] = false;
      }
    });
  }

  View(data: any, index: any) {
    this.event.emit(null)
    this.ViewChanges.emit({ item: data, index: index });
  }

  Delete(data: any, index: any) {
    this.event.emit(null)
    this.DeleteChanges.emit({ item: data, index: index });
  }

  Edit(data: any, index: any) {
    this.event.emit(null)
    this.EditChanges.emit({ item: data, index: index });
  }

  TdClick(data: any, index: any) {
    this.event.emit({ item: data, index: index });
  }

  TrClickEvent(data: any, index: any) {
    this.TrEvent.emit({ item: data, index: index });
  }
  OBJECT_LENGTH(data: any) {
    return Object.keys(data);
  }

  PAGINATION_EVENT(event: any) {
    this.updatetabledata(event)
    console.log(event, this.ORIGNAL_DATA, this.items, 'PAGINATION_EVENT');
  }

  ngOnChanges(changes: SimpleChanges) {
    let changesdata: any = changes;
    this.ORIGNAL_DATA = changesdata?.items?.currentValue!=undefined?changesdata?.items?.currentValue:[];
    // this.Keys = changesdata?.Keys?.currentValue!=undefined?changesdata?.Keys?.currentValue:[];
    // this.header= changesdata?.header?.currentValue!=undefined?changesdata?.header?.currentValue:[]; 
    // this.ExpansionKeys= changesdata?.ExpansionKeys?.currentValue!=undefined?changesdata?.ExpansionKeys?.currentValue:[];
    // this.ExpansionKeys2=changesdata?.ExpansionKeys2?.currentValue!=undefined?changesdata?.ExpansionKeys2?.currentValue:[];
    // this.ExpansionTitle=changesdata?.ExpansionTitle?.currentValue!=undefined?changesdata?.ExpansionTitle?.currentValue:[];
    // this.ExpansionTitle2=changesdata?.ExpansionTitle2?.currentValue!=undefined?changesdata?.ExpansionTitle2?.currentValue:[];
    // this.Expansionitems=changesdata?.Expansionitems?.currentValue!=undefined?changesdata?.Expansionitems?.currentValue:[];
    // this.Expansionheader=changesdata?.Expansionheader?.currentValue!=undefined?changesdata?.Expansionheader?.currentValue:[];
    // this.Expansionheader2=changesdata?.Expansionheader2?.currentValue!=undefined?changesdata?.Expansionheader2?.currentValue:[];
    console.log(changes, this.ORIGNAL_DATA, 'ngOnChanges');
    setTimeout(() => {
      this.PAGINATOR_DATA = [];
      let lenforloop: number = parseInt(changesdata?.items?.currentValue?.length) / 10;
      for (let index = 0; index < lenforloop; index++) {
        this.PAGINATOR_DATA.push(10 * (index + 1))
      }
      this.PAGINATOR_DATA[this.PAGINATOR_DATA.length - 1] = changesdata?.items?.currentValue?.length;
      if (this.ORIGNAL_DATA.length != 0) {
        this.updatetabledata({ pageIndex: 0, pageSize: this.PAGINATOR_DATA[0], length: this.ORIGNAL_DATA.length })
      }
    }, 300);
  }
  updatetabledata(event) {
    this.PAGINATOR_TABLE_DATA = [];
    for (let index = event?.pageIndex; index < event?.pageSize; index++) {
      const element = this.ORIGNAL_DATA[index];
      this.PAGINATOR_TABLE_DATA.push(element)
    }
  }
}
