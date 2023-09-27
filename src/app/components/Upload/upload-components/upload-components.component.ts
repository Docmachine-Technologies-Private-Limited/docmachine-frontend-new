import { AfterViewInit, Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'upload-components',
  templateUrl: './upload-components.component.html',
  styleUrls: ['./upload-components.component.scss']
})
export class UploadComponentsComponent implements OnInit, AfterViewInit {
  SUBMIT_ERROR: boolean = false;
  @Input('label') label: any = '';
  @Input('labelStyle') labelStyle: any = '';
  @Input('FormStyle') FormStyle: any = '';
  @Input('MainStyle') MainStyle: any = '';
  @Input('id') id: any = '';
  @Input('SubmitButtonStyle') SubmitButtonStyle: any = '';
  @Input('TypeOfValue') TypeOfValue: any = 'Normal';
  @Input('SubmitName') SubmitName: any = 'Submit';
  @Input('AddNewRequried') AddNewRequried: boolean = false;
  @Output('SubmitEvent') SubmitEvent: any = new EventEmitter();
  @Output('AddNewBank') AddNewBank: any = new EventEmitter();
  @Output('RawValueEvent') RawValue: any = new EventEmitter();
  @Output('BankEvent') BankEvent: any = new EventEmitter();
  @Output('YesNoCheckBoxEvent') YesNoCheckBoxEvent: any = new EventEmitter();
  @Output('SHIPPING_BILL_EVENT') SHIPPING_BILL_EVENT: any = new EventEmitter();
  @Output('BL_COPY_EVENT') BL_COPY_EVENT: any = new EventEmitter();
  @Input('HIDE_BACKGROUND') HIDE_BACKGROUND: boolean = true;
  @Input('HIDE_SUBMIT_BUTTON') HIDE_SUBMIT_BUTTON: boolean = true;
  @Input('KEY_ENTER_ENABLED') KEY_ENTER_ENABLED: any = false;
  @Input('ADD_NEW_BUTTON_VISIBLE') ADD_NEW_BUTTON_VISIBLE: boolean = false;
  @ViewChild('BuyerNotFoundPanel') BuyerNotFound: ElementRef | any;
  @ViewChild('BeneficiaryNotFoundPanel') BeneficiaryNotFound: ElementRef | any
  @ViewChildren('CommericalNo') CommericalNo: QueryList<NgSelectComponent>;
  @Input('morecontent') morecontent: boolean = false;
  @Input('BUTTON_PANEL_SHOW') BUTTON_PANEL_SHOW: boolean = false;

  Account_Type: any = [{
    type: 'OD-over draft'
  }, {
    type: 'CC-cash credit'
  }, {
    type: 'CA-Current account'
  }, {
    type: 'EEFC - Exchange earner Foreign currency'
  }, {
    type: 'PCFC- packing credit Foreign currency'
  }, {
    type: 'EBRD- Bill discounting accoun'
  }];
  LOGIN_TOEKN: any = '';
  POPUP_VISIBLILTY: any = {
    BuyerNotFound: '',
    BeneficiaryNotFound: ''
  }
  HS_CODE_DATA: any = [];

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
    this.HS_CODE_DATA = this.documentService.getHSCODE();
    this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
  }

  get onClickButton() {
    return $('.submit-button#' + this.id).click();
  }

  onSubmit(event: any, e: any, type: any) {
    console.log(e, 'from value')
    event.preventDefault();
    if (e?.status == 'VALID') {
      if (this.TypeOfValue == "Normal") {
        this.SubmitEvent.emit(e);
      } else {
        this.SubmitEvent.emit(this.getRawValue);
      }
      this.SUBMIT_ERROR = false;
      this.RawValue.emit(this.getRawValue);
    } else {
      this.RawValue.emit(false);
      this.SUBMIT_ERROR = true;
    }
  }

  get getRawValue() {
    return this.validator.dynamicFormGroup[this.id]?.getRawValue()
  }

  get geForm() {
    return this.validator.dynamicFormGroup[this.id];
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
    console.log(this.AUTOFILL_INPUT_NAME_LIST, "AUTOFILL_INPUT_NAME_LIST")
    this.AUTOFILL_INPUT_NAME_LIST = data;
  }

  autofillCommerical(Commericaldata: any, AUTOFILL_INPUT_NAME_LIST: any) {
    console.log(Commericaldata, this.AUTOFILL_INPUT_NAME_LIST, "AUTOFILL_INPUT_NAME_LIST")
    AUTOFILL_INPUT_NAME_LIST.forEach(element => {
      this.validator.dynamicFormGroup[this.id]?.controls[element?.name]?.controls[element?.index]?.controls[element?.input]?.setValue(Commericaldata?.data[element?.key])
    });
  }

  CreateFormBank() {
    setTimeout(() => {
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
    }, 200);
  }

  addNewBank(e: any, panel: any) {
    this.documentService.addNewBankInfo({ value: e?.value?.BankName, BankUniqueId: this.initialName(this.removeAllSpecialChar(e?.value?.BankName)) }).subscribe(async (res: any) => {
      this.validator.BANK_NAME_LIST_GLOABL = await this.documentService.getBankNameList();
      this.toastr.success(res?.message);
      panel?.displayHidden;
    })
  }

  onAddNewBank() {
    this.AddNewBank.emit(true);
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
      console.log('sdasjdasdkjagsdkjasdgaskdjagsdasdaskjdgasdkasdgaskdgasds', this.BuyerNotFound, this.BeneficiaryNotFound)
    } else {
      this.LOGIN_TOEKN = ''
    }
  }

  ToHSCode_Selected: any = [];
  ToHSCode(event: any, value: any, index: any) {
    if (event?.target?.checked == true) {
      this.ToHSCode_Selected[index] = value;
    } else {
      this.ToHSCode_Selected[index] = '';
    }
  }

  ALL_DATA_HSCODE: any = '';
  DoneButton() {
    let temp2: any = [];
    this.ToHSCode_Selected.forEach(element => {
      temp2.push(element?.hscode);
    });
    this.ALL_DATA_HSCODE = temp2.join(',');
    this.setValue(this.ALL_DATA_HSCODE, this.HSCODE_FEILD_FORM?.field);
  }

  filtertimeout: any = ''
  FILTER_HS_CODE_DATA: any = [];
  filterHSCode(value: any) {
    clearTimeout(this.filtertimeout);
    this.filtertimeout = setTimeout(() => {
      this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA.filter((item: any) => item?.hscode?.indexOf(value) != -1 || item?.description?.toLowerCase()?.indexOf(value?.toLowerCase()) != -1);
      if (this.FILTER_HS_CODE_DATA.length == 0) {
        this.FILTER_HS_CODE_DATA = this.HS_CODE_DATA;
      }
    }, 200);
  }

  HSCODE_FEILD_FORM: any = {
    id: '',
    field: ''
  }

  ValueAdd(id: any, field: any) {
    this.HSCODE_FEILD_FORM['id'] = id;
    this.HSCODE_FEILD_FORM['field'] = field;
  }

  IMAGE_UPLOAD_LIST: any = [];
  onUploadChanges(event: any, autofill: any) {
    if (event.target.files.length > 0) {
      event.target.files.forEach(element => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          this.IMAGE_UPLOAD_LIST.push({
            name: element?.name,
            buffer: fileReader.result
          })
        }
        fileReader.readAsDataURL(element);
      });
      this.validator.dynamicFormGroup[this.id]?.controls[autofill?.key]?.setValue(this.IMAGE_UPLOAD_LIST);
    }
  }
  removeImage(index: any, autofill: any) {
    this.IMAGE_UPLOAD_LIST.splice(index, 1);
    this.validator.dynamicFormGroup[this.id]?.controls[autofill?.key]?.setValue(this.IMAGE_UPLOAD_LIST);
  }
  HideShowInput(event: any, item: any) {
    if (item[event] != undefined) {
      item[event]?.forEach(element => {
        const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(element));
        if (index != -1 && item[event] != undefined) {
          this.validator.FIELDS_DATA[this.id][index]['disabled'] = true;
          this.validator.dynamicFormGroup[this.id]?.controls[element]?.disable();
        } else {
          this.validator.FIELDS_DATA[this.id][index]['disabled'] = false;
          this.validator.dynamicFormGroup[this.id]?.controls[element]?.enable();
        }
      });
    } else {
      for (const key in item) {
        const element = item[key];
        element.forEach(fieldNameelement => {
          const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(fieldNameelement));
          if (index != -1 && item[event] != undefined) {
            this.validator.FIELDS_DATA[this.id][index]['disabled'] = true;
            this.validator.dynamicFormGroup[this.id]?.controls[fieldNameelement]?.disable();
          } else {
            this.validator.FIELDS_DATA[this.id][index]['disabled'] = false;
            this.validator.dynamicFormGroup[this.id]?.controls[fieldNameelement]?.enable();
          }
        });
      }
    }
  }

  HideShowInputCheckBox(bool: any, item: any) {
    if (item != undefined) {
      if (bool == true) {
        item.forEach(element => {
          const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(element));
          if (index != -1) {
            this.validator.FIELDS_DATA[this.id][index]['disabled'] = true;
            this.validator.dynamicFormGroup[this.id]?.controls[element]?.disable();
          }
        });
      } else {
        item.forEach(element => {
          const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(element));
          if (index != -1) {
            this.validator.FIELDS_DATA[this.id][index]['disabled'] = false;
            this.validator.dynamicFormGroup[this.id]?.controls[element]?.enable();
          }
        });
      }
    }
  }

  onLabelNameChange(event: any, item: any) {
    console.log(item, item[event], event, "onLabelNameChange if")
    if (item[event] != undefined) {
      for (const key in item[event]) {
        const element = item[event][key];
        const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(key));
        if (index != -1) {
          if (element['type'] = "formGroup") {
            this.validator.FIELDS_DATA[this.id][index]["NewformArray"]?.forEach(NewformArrayelement => {
              let ObjectKEYS: any = Object.keys(NewformArrayelement);
              const formGroupindex = ObjectKEYS?.findIndex(val => val.includes(element?.name));
              if (formGroupindex != -1) {
                NewformArrayelement[element?.name]["label"] = element?.labelChange
              }
            });
          }
        }
      }
    } else {
      for (const key in item["default"]) {
        const element = item["default"][key];
        const index = this.validator.FIELDS_DATA[this.id]?.findIndex(val => val?.fieldName?.includes(key));
        if (index != -1) {
          if (element['type'] = "formGroup") {
            this.validator.FIELDS_DATA[this.id][index]["NewformArray"]?.forEach(NewformArrayelement => {
              let ObjectKEYS: any = Object.keys(NewformArrayelement);
              const formGroupindex = ObjectKEYS?.findIndex(val => val.includes(element?.name));
              if (formGroupindex != -1) {
                NewformArrayelement[element?.name]["label"] = element?.labelChange
              }
            });
          }
        }
      }
    }
  }

  AutoFillCurrency(value: any, autofillitem: any) {
    if (autofillitem != undefined && autofillitem != null && autofillitem != '') {
      if (autofillitem?.type == "formGroup") {
        this.validator.dynamicFormGroup[this.id]?.controls[autofillitem?.CONTROLS_NAME]?.controls?.forEach(element => {
          element?.controls[autofillitem?.SetInputName]?.setValue(value?.type);
        });
      } else {
        this.validator.dynamicFormGroup[this.id]?.controls[autofillitem?.CONTROLS_NAME]?.controls?.setValue(value?.type);
      }
    }
  }

  onSHIPPING_BILL_EVENT(value: any) {
    this.SHIPPING_BILL_EVENT.emit(value);
  }

  onBL_COPY_EVENT(value: any) {
    this.BL_COPY_EVENT.emit(value);
  }

  CommericalListCheckBoxList: any = [];
  onCommericalListCheckBox(event, fieldName, index, item: any) {
    if (event?.checked == true) {
      this.CommericalListCheckBoxList.push(item);
    } else {
      this.CommericalListCheckBoxList.splice(index, 1);
    }
    this.validator.dynamicFormGroup[this.id].controls[fieldName].setValue(this.CommericalListCheckBoxList);
    console.log(event, item, this.CommericalListCheckBoxList, "CommericalListCheckBox")
  }

  onBankCheckBox(event, fieldName, item: any, ItemChecked) {
    this.validator.CHECK_BOX_BANK_LIST.forEach(element => {
      element['checked'] = false;
    });
    if (event?.checked == true) {
      ItemChecked['checked'] = true;
    } else {
      ItemChecked['checked'] = false;
    }
    this.BankEvent.emit(item);
    this.validator.dynamicFormGroup[this.id].controls[fieldName].setValue(item);
    console.log(event, item, this.CommericalListCheckBoxList, "CommericalListCheckBox")
  }

  BANK_CHECKBOX(value: any) {
    console.log(value, this.validator?.bankDetail[value?.id], this.validator?.bankDetail, "BANK_CHECKBOX")
    this.validator.CHECK_BOX_BANK_LIST = this.validator?.bankDetail[value?.id];
    this.validator.CHECK_BOX_BANK_LIST.forEach(element => {
      element['checked'] = false;
    });
  }

  YesNoFunction(value: any,name:any) {
    this.setValue(value,name)
    this.YesNoCheckBoxEvent.emit(value);
  }
}