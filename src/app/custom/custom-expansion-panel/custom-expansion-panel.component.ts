import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomExpansionPanelService } from './custom-expansion-panel.service';
import { TableServiceController } from '../../service/v1/TableServiceController';

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
  @Input('FILTER_FORM_VALUE') FILTER_FORM_VALUE: any = [];
  @Input('EXTRA_DATA') EXTRA_DATA: any = [];
  @Input('eventId') eventId: any = '';
  @Input('TableName') TableName: any = '';
  @Input('PageSize') PageSize: number = 0;
  @Input('ExpandTitle1') ExpandTitle1: any = 'Data Show and Hide';
  @Input('ExpandTitle2') ExpandTitle2: any = 'Data Show and Hide';
  @Input('ViewButton') ViewButton: boolean = true;
  @Input('EditButton') EditButton: boolean = true;
  @Input('DeleteButton') DeleteButton: boolean = true;
  @Input('SHOW_TABLE_TBODY') SHOW_TABLE_TBODY: boolean = false;
  @Input('TableHeaderClass') TableHeaderClass: any = [];

  @Input('Expansionitems') Expansionitems: any = [];
  @Input('Expansionheader') Expansionheader: any = [];
  @Input('Expansionheader2') Expansionheader2: any = [];
  @Input('ExpansionTitle') ExpansionTitle: any = '';
  @Input('ExpansionTitle2') ExpansionTitle2: any = '';
  @Input('ExpansionKeys') ExpansionKeys: any = [];
  @Input('ExpansionKeys2') ExpansionKeys2: any = [];
  @Input('TableFormat') TableFormat: any = [];
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

  constructor(public exp_service: CustomExpansionPanelService,
    public filteranytablepagination: TableServiceController) { }

  async ngOnInit() {
    this.PAGINATOR_TABLE_DATA = this.items;
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

  async PAGINATION_EVENT(event: any, tableName: any, TableFormat) {
    await this.filteranytablepagination.LoadTableExport(this.FILTER_FORM_VALUE?.length == 0 ? {} : this.FILTER_FORM_VALUE, { skip: event?.length, limit: event?.pageSize }, tableName, TableFormat,this.EXTRA_DATA)[tableName]()?.then(async (res) => {
      this.PAGINATOR_TABLE_DATA = [];
      setTimeout(() => {
        this.PAGINATOR_TABLE_DATA = res?.items;
      }, 100);
      console.log(event, this.ORIGNAL_DATA, this.items, tableName, res, this.PAGINATOR_TABLE_DATA, res?.items, 'PAGINATION_EVENT');
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    let changesdata: any = changes;
    this.ORIGNAL_DATA = changesdata?.items?.currentValue != undefined ? changesdata?.items?.currentValue : this.PAGINATOR_TABLE_DATA;
    this.PAGINATOR_DATA = [];
    let lenforloop: number = parseInt(changesdata?.PageSize?.currentValue != undefined ? changesdata?.PageSize?.currentValue : this.PageSize) / 10;
    for (let index = 0; index < lenforloop; index++) {
      this.PAGINATOR_DATA.push(10 * (index + 1))
    }
    this.PAGINATOR_DATA[this.PAGINATOR_DATA.length - 1] = changesdata?.PageSize?.currentValue != undefined ? changesdata?.PageSize?.currentValue : this.PageSize;
    this.PAGINATOR_TABLE_DATA = this.ORIGNAL_DATA;
    console.log(changes, this.ORIGNAL_DATA, 'ngOnChanges');
  }

}
