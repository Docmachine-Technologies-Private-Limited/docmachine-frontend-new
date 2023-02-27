import { Component, OnInit,Injectable,Input } from '@angular/core';
import $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  HEADER_TITLE: string = 'Tree View';
  OBJECT_KEYS:any=[];
  @Input('data') data:any = [];
  @Input('title') title:any = [];
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
    this.OBJECT_KEYS=Object.keys(this.data);
    this.HEADER_TITLE = this.title;
  }
  TreeViewComponent_Open() {
   $('.tree-component').css('display', 'block')
  }
  hide() {
    $('.tree-component').css('display', 'none')
  }
}
