import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CustomExpansionPanelService } from './custom-expansion-panel.service';

@Component({
  selector: 'custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss']
})
export class CustomExpansionPanelComponent implements OnInit {
  @Input('header') header: any = [];
  @Input('items') items: any = [];
  @Input('Keys') Keys: any = [];
  @Input('eventId') eventId: any = '';
  @Input('TableHeaderClass') TableHeaderClass: any = [];

  @Input('Expansionitems') Expansionitems: any = [];
  @Input('Expansionheader') Expansionheader: any = [];
  @Input('ExpansionTitle') ExpansionTitle: any = '';
  @Input('ExpansionKeys') ExpansionKeys: any = [];
  @Input('ExpansionShowHide') Expansion: boolean = true;

  @Output('ViewChanges') ViewChanges: any = new EventEmitter();
  @Output('EditChanges') EditChanges: any = new EventEmitter();
  @Output('DeleteChanges') DeleteChanges: any = new EventEmitter();
  @Output('event') event: any = new EventEmitter();
  @Output('ArrowEvent') ArrowEvent: any = new EventEmitter();
  
  constructor(public exp_service: CustomExpansionPanelService) { }

  ngOnInit(): void {
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
  
  TrClick(data: any, index: any) {
    this.event.emit({ item: data, index: index });
  }
}
