import { AfterViewInit, Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../service/user.service';
import { DocumentService } from '../../../service/document.service';
import { DateFormatService } from '../../../DateFormat/date-format.service';
import { PipoDataService } from '../../../service/homeservices/pipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadServiceValidatorService } from '../service/upload-service-validator.service';
import $ from 'jquery';
import { AuthGuard } from '../../../service/authguard.service';

@Component({
  selector: 'upload-components',
  templateUrl: './upload-components.component.html',
  styleUrls: ['./upload-components.component.scss']
})
export class UploadComponentsComponent implements OnInit,AfterViewInit {
  SUBMIT_ERROR: boolean = false;
  @Input('id') id: any = '';
  @Input('AddNewRequried') AddNewRequried: boolean = false;
  @Output('SubmitEvent') SubmitEvent: any = new EventEmitter();
  @Input('HIDE_BACKGROUND') HIDE_BACKGROUND: boolean = true;
  @Input('HIDE_SUBMIT_BUTTON') HIDE_SUBMIT_BUTTON: boolean = true;
  @Input('KEY_ENTER_ENABLED') KEY_ENTER_ENABLED: any = false;
  @Input('ADD_NEW_BUTTON_VISIBLE') ADD_NEW_BUTTON_VISIBLE: any = '';
  @ViewChild('BuyerNotFoundPanel') BuyerNotFound: ElementRef | any;
  @ViewChild('BeneficiaryNotFoundPanel') BeneficiaryNotFound: ElementRef | any
  LOGIN_TOEKN: any = '';
  POPUP_VISIBLILTY: any = {
    BuyerNotFound: '',
    BeneficiaryNotFound: ''
  }
  
  constructor(public sanitizer: DomSanitizer,
    public documentService: DocumentService,
    public date_format: DateFormatService,
    public pipoDataService: PipoDataService,
    public toastr: ToastrService,
    public router: Router,
    public validator: UploadServiceValidatorService,
    public authGuard: AuthGuard,
    public userService: UserService) { }

  async ngOnInit() {
  }

  get onClickButton() {
    return $('.submit-button#' + this.id).click();
  }

  onSubmit(event: any, e: any, type: any) {
    console.log(e, 'value')
    event.preventDefault();
    if (e.status == 'VALID') {
      this.SUBMIT_ERROR = false;
      this.SubmitEvent.emit(e);
    } else {
      this.SUBMIT_ERROR = true;
    }
  }

  setFormValue(value: any, index: any, name1: any, name2: any) {
    this.validator.dynamicFormGroup[this.id]?.controls[name1]?.controls[index]?.controls[name2]?.setValue(value)
  }

  setValue(value: any, name1: any) {
    this.validator.dynamicFormGroup[this.id]?.controls[name1]?.setValue(value)
  }

  addFormArray(key1: any, index: any, data: any, GroupLabel: any) {
    this.validator.buildNewFormArray(key1, index, data['formGroup'][0], this.id, GroupLabel, data).then((res: any) => {
      res?.forEach(element => {
        this.validator.dynamicFormGroup[this.id]?.controls[key1].push(element)
      });
    })
  }

  removeFormArray(key1: any, index: any, labelIndex: any, data: any) {
    this.validator.removeFormArray(key1, index, labelIndex, this.id, data).then((res: any) => { })
  }

  AUTOFILL_INPUT_NAME_LIST: any = [];
  ORM_SELECTION(event: any, index: any, data: any, AUTOFILL_INPUT_NAME_LIST: any) {
    if (event.target.checked) {
      this.validator.ORM_SELECTION_DATA = data;
      AUTOFILL_INPUT_NAME_LIST.forEach(element => {
        this.validator.dynamicFormGroup[this.id]?.controls[element?.input]?.setValue(this.validator.ORM_SELECTION_DATA[element?.key]);
      });
    } else {
      this.validator.ORM_SELECTION_DATA = []
      event.target.checked = false;
    }
  }

  dump(data: any) {
    this.AUTOFILL_INPUT_NAME_LIST = data;
  }

  autofillCommerical(Commericaldata: any, AUTOFILL_INPUT_NAME_LIST: any) {
    AUTOFILL_INPUT_NAME_LIST.forEach(element => {
      this.validator.dynamicFormGroup[this.id]?.controls[element?.name]?.controls[element?.index]?.controls[element?.input]?.setValue(Commericaldata?.data[element?.key])
    });
  }

  CreateFormBank() {
    this.validator.buildForm({
      BankName: {
        type: "text",
        value: "",
        label: "Bank Name",
        placeholderText: 'Bank Name',
        rules: {
          required: true,
        },
        maxLength: 200
      },
    }, 'AddNewBankName');
  }

  addNewBank(e: any,panel:any) {
    this.documentService.addNewBankInfo({ value: e?.value?.BankName, BankUniqueId: this.initialName(this.removeAllSpecialChar(e?.value?.BankName)) }).subscribe(async (res: any) => {
      this.validator.BANK_NAME_LIST_GLOABL = await this.documentService.getBankNameList();
      this.toastr.success(res?.message);
      panel?.displayHidden;
    })
  }

  initialName(words) {
    'use strict'
    return words
      .replace(/\b(\w)\w+/g, '$1_')
      .replace(/\s/g, '')
      .replace(/\.$/, '')
      .toUpperCase();
  }

  removeAllSpecialChar(string: any) {
    return string?.replace(/[^a-zA-Z ]/g, "");
  }
  
  ngAfterViewInit() {
    let token = this.authGuard.loadFromLocalStorage();
    if (token != null) {
      this.validator.loaddata().then((res: any) => {
        if (this.validator?.BUYER_DETAILS?.length == 0 && this?.validator?.userData?.sideMenu == 'export') {
          this.POPUP_VISIBLILTY.BuyerNotFound = true;
          this.BuyerNotFound?.displayShow
        } else {
          this.POPUP_VISIBLILTY.BuyerNotFound = false;
          this.BuyerNotFound?.displayHidden
        }

        if (this.validator?.BENEFICIARY_DETAILS?.length == 0 && this?.validator?.userData?.sideMenu == 'import') {
          this.POPUP_VISIBLILTY.BeneficiaryNotFound = true;
          this.BeneficiaryNotFound?.displayShow
        } else {
          this.POPUP_VISIBLILTY.BeneficiaryNotFound = false
          this.BeneficiaryNotFound?.displayHidden
        }
      });
      this.LOGIN_TOEKN = 'asdasasddasds'
      console.log('sdasjdasdkjagsdkjasdgaskdjagsdasdaskjdgasdkasdgaskdgasds',this.BuyerNotFound,this.BeneficiaryNotFound)
    } else {
      this.LOGIN_TOEKN = ''
    }
  }

}