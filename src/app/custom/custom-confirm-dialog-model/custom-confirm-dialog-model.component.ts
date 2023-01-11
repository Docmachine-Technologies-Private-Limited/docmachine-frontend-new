import { Component, Injectable, OnInit } from '@angular/core';
import $ from 'jquery';
import { Observable } from 'rxjs';
import { CustomConfirmDialogModelService } from './custom-confirm-dialog-model.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-custom-confirm-dialog-model',
  templateUrl: './custom-confirm-dialog-model.component.html',
  styleUrls: ['./custom-confirm-dialog-model.component.scss']
})

export class CustomConfirmDialogModelComponent implements OnInit {
  titleheader:any='Modal title';
  message:'';
  MODEL_TYPE_VIEW:any={
    ConfirmDialog:false,
    DropDownInputConfirmDialog:false,
    InputConfirmDialog:false,
    IframeModel:false
  };
  constructor(public CustomConfirmDialogModel:CustomConfirmDialogModelService) {
    this.HIDE_ALL_MODELS('');
  }

  ConfirmDialogModel(titleheader:any,message:any,callback:any){
    this.HIDE_ALL_MODELS('ConfirmDialog');
    this.CustomConfirmDialogModel.titleheader=titleheader;
    this.CustomConfirmDialogModel.message=message;
    $('.custommodel').css('display', 'block');
  }

  DropDownConfirmDialogModel(titleheader:any,message:any,callback:Function){
    this.HIDE_ALL_MODELS('DropDownInputConfirmDialog');
    $('.input-remove').val('');
    this.CustomConfirmDialogModel.titleheader=titleheader;
    this.CustomConfirmDialogModel.message=message;
    $('.DropDownInputConfirmDialog').css('display', 'block');
    this.CustomConfirmDialogModel.CALLBACKS=callback;
  }
  InputConfirmDialogModel(titleheader:any,message:any,callback:Function){
    this.HIDE_ALL_MODELS('InputConfirmDialog');
    $('.input-remove').val('');
    this.CustomConfirmDialogModel.titleheader=titleheader;
    this.CustomConfirmDialogModel.message=message;
    $('.InputConfirmDialog').css('display', 'block');
    this.CustomConfirmDialogModel.CALLBACKS=callback;
  }
  IframeConfirmDialogModel(titleheader:any,url:any,callback:Function){
    this.HIDE_ALL_MODELS('IframeModel');
    $('.input-remove').val('');
    this.CustomConfirmDialogModel.titleheader=titleheader;
    this.CustomConfirmDialogModel.url=url;
    $('.iframecustommodel').css('display', 'block');
    this.CustomConfirmDialogModel.CALLBACKS=callback;
  }
  YesNoDialogModel(titleheader:any,message:any,callback:Function){
    this.HIDE_ALL_MODELS('YesNoDialogModel');
    $('.input-remove').val('');
    this.CustomConfirmDialogModel.titleheader=titleheader;
    this.CustomConfirmDialogModel.message=message;
    $('.YesNoDialogModel').css('display', 'flex');
    this.CustomConfirmDialogModel.CALLBACKS=callback;
  }
  ngOnInit(): void {
  }

  HIDE_ALL_MODELS(Changekey:any): void {
    for (const key in this.MODEL_TYPE_VIEW) {
      this.MODEL_TYPE_VIEW[key]=false;
    }
    this.MODEL_TYPE_VIEW[Changekey]=true;
  }
  CALLBACKS_CALL(value:any,dump:any){
    this.CustomConfirmDialogModel.CALLBACKS({value:value.Inputdata})
  }
}
