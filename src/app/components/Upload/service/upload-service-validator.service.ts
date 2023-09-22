import { ElementRef, Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PipoDataService } from '../../../service/homeservices/pipo.service';
import { UserService } from '../../../service/user.service';
import { DocumentService } from '../../../service/document.service';
import { AuthGuard } from '../../../service/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceValidatorService implements OnInit {
  dynamicFormGroup: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  BL_COPY_LIST: any = [];
  COMMERICAL_NO: any = [];
  ORM_BY_PARTY_NAME: any = [];
  ORM_SELECTION_DATA: any = [];
  BOE_LIST: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  BENEFICIARY_DETAILS: any = [];
  BENEFICIARY_ADDRESS_DETAILS: any = [];
  INWARD_REMITTANCE_NAME_LIST: any = [];
  ConsigneeNameList: any = [];
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SHIPPING_BILL_MASTER_DATA: any = [];
  SUBMIT_ERROR: boolean = false;
  origin: any = [];
  commodity: any = [];
  location: any = [];
  bankDetail: any = [];
  Id: any = '';
  BANK_NAME_LIST_GLOABL: any = [];
  FIELDS_DATA: any = [];
  LOGIN_TOEKN: any = '';
  userData: any = [];
  BUYER_NOT_EXITS: boolean = false;
  BENEFICIARY_NOT_EXITS: boolean = false;
  SELECTED_PIPO: any = [];
  SELECTED_PIPO_ID: any = [];
  ToChargesAccountdata: any = [];
  ToCreditAccountdata: any = [];
  BANK_LIST_DROPDOWN: any = [];
  CommericalNo: ElementRef | any;
  BUYER_DETAILS_MASTER: any = [];
  COMPANY_INFO: any = [];
  CHECK_BOX_BANK_LIST:any=[];

  constructor(public pipoDataService: PipoDataService,
    public documentService: DocumentService,
    public authGuard: AuthGuard,
    public userService: UserService) {
  }

  ngOnInit(): void {
  }

  async loaddata() {
    return new Promise(async (reslove, reject) => {
      let token = this.authGuard.loadFromLocalStorage();
      this.LOGIN_TOEKN = token;
      if (token != undefined) {
        this.CURRENCY_LIST = this.documentService.getCurrencyList();
        let USER_DATA: any = await this.userService.getUserDetail();
        await this.userService.getUserDetail().then((res: any) => {
          this.userData = res?.result;
          console.log(this.userData, 'asdasdasdasdasdasdasdasdasdasdasd')
        });
        if (USER_DATA?.result?.sideMenu == 'import') {
          if (this.documentService?.PI_PO_NUMBER_LIST?.PIPO_NO?.length != this.documentService?.PI_PO_NUMBER_LIST?.PI_PO_BENNE_NAME?.length ||
            (this.documentService?.PI_PO_NUMBER_LIST?.PIPO_NO?.length == 0 || this.documentService?.PI_PO_NUMBER_LIST?.PI_PO_BENNE_NAME?.length == 0)) {
            this.documentService.getPipoListNo('export', []);
          }
          await this.userService.getBene(1).subscribe((res: any) => {
            this.BENEFICIARY_DETAILS = [];
            this.ConsigneeNameList = [];

            res.data?.forEach(element => {
              if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
                this.ConsigneeNameList.push({ value: element?.ConsigneeName })
              }
              this.BENEFICIARY_DETAILS.push({ value: element.benneName, id: element?._id, Address: element?.beneAdrs })
            });
            if (this.BENEFICIARY_DETAILS.length == 0) {
              this.BENEFICIARY_NOT_EXITS = true;
            } else {
              this.BENEFICIARY_NOT_EXITS = false;
            }
            console.log('Benne Detail111', this.ConsigneeNameList, this.BENEFICIARY_DETAILS);
          }, (err) => console.log('Error', err));

          await this.documentService.getBoe(1).subscribe((res: any) => {
            this.SHIPPING_BUNDEL = [];
            this.origin = [];
            console.log('Master Data File', res);
            res.data.forEach((element, i) => {
              element?.pipo.forEach((ele, j) => {
                this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
              });
              this.origin[i] = { value: element.origin, id: element?._id };
            });
            console.log('Master Country', this.SHIPPING_BUNDEL, this.origin);
          }, (err) => console.log(err));
          await reslove(true)
        } else if (USER_DATA?.result?.sideMenu == 'export') {
          if (this.documentService?.PI_PO_NUMBER_LIST?.PIPO_NO?.length != this.documentService?.PI_PO_NUMBER_LIST?.PI_PO_BUYER_NAME?.length ||
            (this.documentService?.PI_PO_NUMBER_LIST?.PIPO_NO?.length == 0 || this.documentService?.PI_PO_NUMBER_LIST?.PI_PO_BUYER_NAME?.length == 0)) {
            this.documentService.getPipoListNo('export', this.SELECTED_PIPO?.length != 0 ? this.SELECTED_PIPO : []);
          }
          await this.userService.getBuyer(1).subscribe((res: any) => {
            this.BUYER_DETAILS_MASTER = res?.data;
            this.BUYER_DETAILS = [];
            this.ConsigneeNameList = [];
            res.data?.forEach(element => {
              if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
                this.ConsigneeNameList.push({ value: element?.ConsigneeName })
              }
              this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
            });
            if (this.BUYER_DETAILS.length == 0) {
              this.BUYER_NOT_EXITS = true;
            } else {
              this.BUYER_NOT_EXITS = false;
            }
            console.log('getBuyer Details', res, this.ConsigneeNameList, this.BUYER_DETAILS);
          }, (err) => console.log('Error', err));
          this.documentService.getMaster(1).subscribe((res: any) => {
            console.log('Master Data File', res);
            this.SHIPPING_BILL_MASTER_DATA = res?.data;
            this.origin = [];
            this.SHIPPING_BUNDEL = [];
            res.data.forEach((element, i) => {
              element?.pipo?.forEach((ele, j) => {
                if (element?.sbno != null && element?.sbno != undefined && element?.sbno != '') {
                  this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id, amount: element?.fobValue });
                }
              });
              this.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
            });
            console.log('Master Country', this.SHIPPING_BUNDEL, this.origin);
          }, (err) => console.log(err));

          this.documentService.getInward_remittanceName().subscribe(async (res: any) => {
            this.INWARD_REMITTANCE_NAME_LIST = res?.data;
            console.log(res, 'getInward_remittanceName')
          })
          await reslove(true)
        } else {
          reslove(true)
        }

        await this.userService.getTeam().subscribe(async (data: any) => {
          this.COMPANY_INFO = data?.data;
          console.log(data['data'][0]);
          this.location = [];
          this.commodity = [];
          data['data'][0]['location']?.forEach(element => {
            this.location.push({ value: element?.loc })
          });
          data['data'][0]['commodity']?.forEach(element => {
            this.commodity.push({ value: element?.como })
          });
          this.commodity = this.removeDuplicates(this.commodity, 'value');
          this.location = this.removeDuplicates(this.location, 'value')
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
            this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
            this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId] = [];
          }
          for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
            this.bankDetail[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            this.ToChargesAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            this.ToCreditAccountdata[data['data'][0]['bankDetails'][index]?.BankUniqueId].push({
              value: data['data'][0]['bankDetails'][index],
              text: data['data'][0]['bankDetails'][index]?.accType + ' | ' + data['data'][0]['bankDetails'][index]?.accNumber,
              org: data['data'][0]['bankDetails'][index]
            })
            if (this.BANK_LIST_DROPDOWN.filter((item: any) => item?.value?.includes(data['data'][0]['bankDetails'][index]?.bank))?.length == 0) {
              this.BANK_LIST_DROPDOWN.push({
                value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId,
              })
            }
          }
        }, (error) => { console.log('error'); });
      } else {
        reslove(true);
      }
    })
  }

  async buildForm(model: any, id: any) {
    return new Promise((resolve, reject) => {
      this.loaddata().then(async (res: any) => {
        console.log("BANK_NAME_LIST_GLOABL", res, this.BANK_NAME_LIST_GLOABL)
        if (res == true) {
          const formGroupFields = await this.getFormControlsFields(model, id);
          this.dynamicFormGroup[id] = await new FormGroup(formGroupFields?.formGroupFields);
          this.FIELDS_DATA[id] = formGroupFields?.fields;
          console.log(this.dynamicFormGroup, formGroupFields, model, 'dynamicFormGroup');
          await this.dynamicFormGroup;
          await resolve(this.dynamicFormGroup);
        }
      })
    })
  }


  setBankList(data: any) {
    this.BANK_NAME_LIST_GLOABL = [];
    setTimeout(() => {
      this.BANK_NAME_LIST_GLOABL = data;
    }, 200);
  }

  async getFormControlsFields(model: any, formid: any) {
    const formGroupFields = {};
    let fields: any = [];
    for (let field of Object.keys(model)) {
      const fieldProps: any = model[field];
      if (fieldProps?.type == "formArray") {
        var temp: any = [];
        var tempFormGroup: any = [];
        let count: number = 0;
        fieldProps?.formGroup.forEach(element => {
          for (let field2 of Object.keys(element)) {
            temp.push({ ...element[field2], fieldName: field2, index: count });
            tempFormGroup.push(new FormGroup({
              [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false },
                this.setRequired(element[field2]?.minLength, element[field2]?.maxLength,
                  element[field2]?.rules, formid, fieldProps)[element[field2]?.typeOf != undefined ? element[field2]?.typeOf : element[field2]?.type])
            }));
            count++;
          }
        });
        fieldProps['NewformGroup'] = temp;
        fieldProps['RemoveListIndex'] = [{ START_INDEX: -1, LAST_INDEX: -1 }];
        if (fieldProps?.AutoFill == true && fieldProps?.AutoFill != undefined) {
          formGroupFields[field] = await new FormArray(tempFormGroup, hasDuplicateFormArray(fieldProps?.EqualList));
          fieldProps['ExtraValue'] = '';
          fieldProps['fieldName_More'] = field + '_Extra';
          fields.push({ ...fieldProps, fieldName: field });
        } else {
          formGroupFields[field] = await new FormArray(tempFormGroup);
          fieldProps['ExtraValue'] = '';
          fieldProps['fieldName_More'] = field + '_Extra';
          fields.push({ ...fieldProps, fieldName: field });
        }
      } else if (fieldProps?.type == "OptionMultiCheckBox" && fieldProps?.option != undefined) {
        var temp: any = [];
        var tempFormGroup: any = [];
        var temp1: any = [];
        var ORDER_KEYS: any = [];

        fieldProps?.option?.forEach(async (element) => {
          let optiontemp: any = {};
          let OptiontempFormGroup: any = {};
          element?.forEach(optionelement => {
            optiontemp[optionelement?.name] = ({ ...optionelement, fieldName: optionelement?.name });
            OptiontempFormGroup[optionelement?.name] = new FormControl({ value: optionelement?.value || "", disabled: optionelement?.disabled != undefined ? true : false },
              this.setRequired(optionelement?.minLength, optionelement?.maxLength, optionelement?.rules, formid, fieldProps)[optionelement?.typeOf != undefined ? optionelement?.typeOf : optionelement?.type])
          });
          await temp.push(optiontemp);
          await tempFormGroup.push(new FormGroup(OptiontempFormGroup, null));
        });
        fieldProps?.option1?.forEach(async (element) => {
          let optiontemp: any = {};
          let OptiontempFormGroup: any = {};
          element?.forEach(optionelement => {
            optiontemp[optionelement?.name] = ({ ...optionelement, fieldName: optionelement?.name });
            OptiontempFormGroup[optionelement?.name] = new FormControl({ value: optionelement?.value || "", disabled: optionelement?.disabled != undefined ? true : false },
              this.setRequired(optionelement?.minLength,
                optionelement?.maxLength, optionelement?.rules, formid, fieldProps)[optionelement?.typeOf != undefined ? optionelement?.typeOf : optionelement?.type])
          });
          await temp1.push(optiontemp);
          await tempFormGroup.push(new FormGroup(OptiontempFormGroup, null));
        });
        fieldProps['NewOption'] = temp;
        fieldProps['NewOption1'] = temp1;
        fieldProps['ExtraValue'] = '';
        fieldProps['fieldName_More'] = field + '_Extra';
        formGroupFields[field] = await new FormArray(tempFormGroup)
        fields.push({ ...fieldProps, fieldName: field });
      } else if (fieldProps?.type == "formGroup" && fieldProps?.formArray != undefined) {
        var temp: any = [];
        var tempFormGroup: any = [];
        var ORDER_KEYS: any = [];
        fieldProps?.formArray?.forEach(async (element, index) => {
          let optiontemp: any = {};
          let OptiontempFormGroup: any = {};
          ORDER_KEYS[index] = [];
          element?.forEach(optionelement => {
            ORDER_KEYS[index].push(optionelement?.name?.toString());
            optiontemp[optionelement?.name?.toString()] = ({ ...optionelement, fieldName: optionelement?.name });
            OptiontempFormGroup[optionelement?.name?.toString()] = new FormControl({ value: optionelement?.value || "", disabled: optionelement?.disabled != undefined ? true : false },
              this.setRequired(optionelement?.minLength,
                optionelement?.maxLength, optionelement?.rules, formid, fieldProps)[optionelement?.typeOf != undefined ? optionelement?.typeOf : optionelement?.type])
          });
          await temp.push(optiontemp);
          await tempFormGroup.push(new FormGroup(OptiontempFormGroup, null));
        });
        fieldProps['NewformArray'] = temp;
        fieldProps['ExtraValue'] = '';
        fieldProps['OrderKey'] = ORDER_KEYS;
        fieldProps['fieldName_More'] = field + '_Extra';
        formGroupFields[field] = await new FormArray(tempFormGroup);
        fields.push({ ...fieldProps, fieldName: field });
        console.log('formGroup', fields)
      } else {
        formGroupFields[field] = new FormControl({ value: fieldProps.value, disabled: fieldProps?.disabled != undefined ? true : false },
          this.setRequired(fieldProps?.minLength, fieldProps?.maxLength, fieldProps?.rules, formid, fieldProps)[fieldProps?.typeOf != undefined ? fieldProps?.typeOf : fieldProps?.type]);
        fieldProps['ExtraValue'] = '';
        fieldProps['fieldName_More'] = field + '_Extra';
        fields.push({ ...fieldProps, fieldName: field });
      }
    }
    console.log(fields, formGroupFields, 'hghjgjhghjgjh')
    return { formGroupFields: formGroupFields, fields: fields };
  }

  ControlSetValue(id: any, key: any, value: any) {
    console.log(value, 'asdasdasdasds')
    this.FIELDS_DATA[id]?.[key]?.setValue(value);
  }

  setValueFromArray(id: any, form: any, fieldName: any, OptionfieldIndex: any, FormOptionfieldName: any, value: any) {
    const myForm: any = form?.controls[fieldName] as FormGroup;
    let currentVal = value;
    myForm.value[OptionfieldIndex][FormOptionfieldName] = currentVal;
    myForm['touched'] = true;
    myForm['status'] = 'VALID';
    this.dynamicFormGroup[id].get(fieldName).clearValidators(); // 6. Clear All Validators
    this.dynamicFormGroup[id].get(fieldName).updateValueAndValidity();
  }

  ConfirmedValidator(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  setRequired(minLength: any, maxLength: any, rule: any, formid: any, field: any) {
    return {
      text: rule?.required == true ?
        [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)],
      textarea: rule?.required == true ?
        [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)],
      date: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)],
      Address: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(200)],
      number: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)],
      buyer: [rule?.required == true ? Validators.required : ''],
      ShippingBill: rule?.required == true ? [Validators.required] : [],
      ImagesList: rule?.required == true ? [Validators.required] : [],
      consignee: rule?.required == true ? [Validators.required] : [],
      commodity: rule?.required == true ? [Validators.required] : [],
      origin: rule?.required == true ? [Validators.required] : [],
      location: rule?.required == true ? [Validators.required] : [],
      PaymentType: rule?.required == true ? [Validators.required] : [],
      Bank: rule?.required == true ? [Validators.required] : [],
      BankList: rule?.required == true ? [Validators.required] : [],
      currency: rule?.required == true ? [Validators.required] : [],
      CommericalNo: rule?.required == true ? [Validators.required] : [],
      typedocument: rule?.required == true ? [Validators.required] : [],
      PaymentTermType: rule?.required == true ? [Validators.required] : [],
      undefined: rule?.required == true ? [Validators.required] : [],
      MatchedValue: rule?.required == true ? [Validators.required] : [],
      Underlying: rule?.required == true ? [Validators.required] : [],
      BuySell: rule?.required == true ? [Validators.required] : [],
      IncoTerm: rule?.required == true ? [Validators.required] : [],
      MultiCheckBox: rule?.required == true ? [Validators.required] : [],
      OptionMultiCheckBox: rule?.required == true ? [Validators.required] : [],
      RemitterName: rule?.required == true ? [Validators.required] : [],
      formGroup: rule?.required == true ? [Validators.required] : [],
      benne: rule?.required == true ? [Validators.required] : [],
      CommericalListCheckBox: rule?.required == true ? [Validators.required] : [],
      BLCopy: rule?.required == true ? [Validators.required] : [],
      AdvanceInfo: [],
      NotRequired: [],
      ALPHA_NUMERIC: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20), alphaNumericValidator] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50), alphaNumericValidator],
      email: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(100)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(100)],
      password: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)],
      confirmPassword: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50), hasDuplicateControl({ key: 'confirmPassword', equalkey: 'password' }, this.dynamicFormGroup, formid)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50), hasDuplicateControl({ key: 'confirmPassword', equalkey: 'password' }, this.dynamicFormGroup, formid)],
      checkbox: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(50)]
    }
  }

  removeDuplicates(data: any, key: any) {
    let newArray: any = [];
    let uniqueObject: any = {};
    for (let i in data) {
      let objTitle = data[i][key];
      uniqueObject[objTitle] = data[i];
    }
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }
    return newArray;
  }

  max_length_validator(id: any, fieldName: any) {
    if ((this.dynamicFormGroup[id]?.controls[fieldName]?.value?.length > this.dynamicFormGroup[id]?.controls[fieldName]?.errors?.['maxlength']?.requiredLength)) {
      return false;
    }
    return true;
  }
  max_length_validatorFormArray(id: any, formGroupKey: any, index: any, fieldName: any) {
    if ((this.dynamicFormGroup[id]?.controls[formGroupKey]?.controls[index]?.controls[fieldName]?.value?.length > this.dynamicFormGroup[id]?.controls[formGroupKey]?.controls[index]?.controls[fieldName]?.errors?.['maxlength']?.requiredLength)) {
      return false;
    }
    return true;
  }

  counter = 0;
  buildNewFormArray(field, index, element: any, formid: any, GroupLabel: any, MAX_LIMIT: any): any {
    return new Promise(async (resolve, reject) => {
      this.counter = GroupLabel.length + 1;
      var temp: any = [];
      var tempFormGroup: any = [];
      let count: number = this.FIELDS_DATA[formid][index]['NewformGroup'].length;
      let count1: number = this.FIELDS_DATA[formid][index]['NewformGroup'].length;
      for (let field2 of Object.keys(element)) {
        temp.push({ ...element[field2], fieldName: field2, index: count });
        this.FIELDS_DATA[formid][index]['NewformGroup'].push({ ...element[field2], fieldName: field2, index: count });
        tempFormGroup.push(new FormGroup({
          [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false },
            this.setRequired(element[field2]?.minLength, element[field2]?.maxLength, element[field2]?.rules, formid, field2)[element[field2]?.typeOf != undefined ? element[field2]?.typeOf : element[field2]?.type])
        }));
        count++;
      }
      await this.FIELDS_DATA[formid][index]['formGroup'].push({ ... this.FIELDS_DATA[formid][index]['formGroup'][0], fieldName: field });
      await this.FIELDS_DATA[formid][index]['RemoveListIndex'].push({ START_INDEX: count1, LAST_INDEX: count1 + MAX_LIMIT?.MAX_LIMIT });
      await GroupLabel.push(GroupLabel[0].replace('1', GroupLabel?.length + 1));
      await resolve(await tempFormGroup);
    });
  }

  async addNewFormArray(id: any, index: any, fieldName: any) {
    let optiontemp: any = {};
    let OptiontempFormGroup: any = {};
    let dumpformdata: any = this.FIELDS_DATA[id][index]?.NewformArray[this.FIELDS_DATA[id][index]?.NewformArray?.length - 1];
    for (const key in dumpformdata) {
      const fieldProps: any = dumpformdata[key];
      optiontemp[fieldProps?.name] = ({ ...fieldProps, fieldName: fieldProps?.name });
      OptiontempFormGroup[fieldProps?.name] = new FormControl({ value: "", disabled: fieldProps?.disabled != undefined ? true : false },
        this.setRequired(fieldProps?.minLength, fieldProps?.maxLength, fieldProps?.rules, id, fieldProps)[fieldProps?.typeOf != undefined ? fieldProps?.typeOf : fieldProps?.type])
    }
    this.dynamicFormGroup[id]?.controls[fieldName]?.controls?.push(new FormGroup(OptiontempFormGroup));
    this.dynamicFormGroup[id]?.controls[fieldName]?.value?.push(this.emptyvalue(this.dynamicFormGroup[id]?.controls[fieldName]?.value[this.dynamicFormGroup[id]?.controls[fieldName]?.value?.length - 1]));
    this.FIELDS_DATA[id][index]['NewformArray']?.push(optiontemp);
    this.FIELDS_DATA[id][index]['OrderKey']?.push(this.FIELDS_DATA[id][index]['OrderKey'][this.FIELDS_DATA[id][index]['OrderKey']?.length - 1]);
    await this.FIELDS_DATA[id][index]?.GroupLabel?.push(this.FIELDS_DATA[id][index]?.GroupLabel[0]?.replace('1', this.FIELDS_DATA[id][index]?.GroupLabel?.length + 1));
    console.log('New formGroup', this.FIELDS_DATA, this.dynamicFormGroup[id])
  }

  emptyvalue(data: any) {
    var temp: any = {};
    for (const key in data) {
      temp[key] = ''
    }
    return temp;
  }

  async removeNewFormArray(id: any, index: any, fieldName: any, OptionfieldIndex: any) {
    this.dynamicFormGroup[id]?.controls[fieldName]?.controls?.splice(OptionfieldIndex, 1);
    this.dynamicFormGroup[id]?.controls[fieldName]?.value?.splice(OptionfieldIndex, 1);
    this.FIELDS_DATA[id][index]['NewformArray']?.splice(OptionfieldIndex, 1);
    this.FIELDS_DATA[id][index]['NewformArray']?.forEach((element, index) => {
      this.FIELDS_DATA[id][index]?.GroupLabel?.push(this.FIELDS_DATA[id][index]?.GroupLabel[0]?.replace('1', (index + 1)));
    });
    console.log('New formGroup', this.FIELDS_DATA, this.dynamicFormGroup[id])
  }

  removeFormArray(formGroupKey, index, labelIndex: any, formid: any, MAX_LIMIT: any): any {
    return new Promise(async (resolve, reject) => {
      if (index != 0) {
        let indexstore: any = this.FIELDS_DATA[formid][index]['RemoveListIndex'][labelIndex];
        for (var i = indexstore?.LAST_INDEX; i-- > indexstore?.START_INDEX;) {
          this.dynamicFormGroup[formid]?.controls[formGroupKey]?.removeAt(i)
        }
        await this.FIELDS_DATA[formid][index]['formGroup']?.splice(labelIndex, 1);
        await this.FIELDS_DATA[formid][index]['GroupLabel']?.splice(labelIndex, 1)

        for (let i = indexstore?.LAST_INDEX - 1; i >= indexstore?.START_INDEX; i--) {
          this.FIELDS_DATA[formid][index]['NewformGroup']?.splice(i, 1);
        }

        for (let i = this.FIELDS_DATA[formid][index]['RemoveListIndex']?.length - 1; i >= labelIndex; i--) {
          this.FIELDS_DATA[formid][index]['RemoveListIndex']?.splice(i, 1);
        }

        if (indexstore?.START_INDEX != MAX_LIMIT?.MAX_LIMIT) {
          this.FIELDS_DATA[formid][index]['NewformGroup']?.forEach((element, index) => {
            element['index'] = index;
          });
          this.FIELDS_DATA[formid][index]['GroupLabel']?.forEach((element, i) => {
            let tempelement = this.FIELDS_DATA[formid][index]['GroupLabel'][0]?.replace('1', '');
            this.FIELDS_DATA[formid][index]['GroupLabel'][i] = tempelement + ' ' + (i + 1);
          });
          this.removeIndexUpdate(this.FIELDS_DATA[formid][index]['RemoveListIndex'], MAX_LIMIT?.MAX_LIMIT);
        }
      }
      await resolve('');
    });
  }

  removeIndexUpdate(data: any, MAX_LIMIT: any) {
    data?.forEach(element => {
      for (const key in element) {
        if (element?.START_INDEX != MAX_LIMIT && element?.START_INDEX != -1) {
          element[key] = element[key] - MAX_LIMIT
        }
      }
    });
  }

  removeUpdateFormValue(data: any, MAX_LIMIT: any) {
    data?.forEach(element => {
      for (const key in element) {
        if (element?.START_INDEX != MAX_LIMIT && element?.START_INDEX != -1) {
          element[key] = element[key] - MAX_LIMIT
        }
      }
    });
  }

  setInputVisibilty(formid: any, index: any, key, value: any) {
    this.FIELDS_DATA[formid][index][key] = value;
  }
}

export function hasDuplicateFormArray(data: any): ValidatorFn {
  return (formArray: FormArray | any): { [key: string]: any } | null | any => {
    if (formArray?.controls?.[data?.index]?.controls?.[data?.key]?.value != formArray?.controls?.[data?.equalindex]?.controls?.[data?.equalkey]?.value) {
      formArray?.controls?.[data?.equalindex]?.controls?.[data?.equalkey]?.setErrors({ matched: data?.errormsg })
      return null;
    } else {
      return null;
    }
  };
}

export function hasAmountLessThanFormArray(control: FormControl): ValidationErrors | null {
  console.log(control, "hasAmountLessThanFormArray")
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
  const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }
  return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

export function hasAmountGreaterThanFormArray(control: FormControl): ValidationErrors | null {
  console.log(control, "hasAmountGreaterThanFormArray")
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
  const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }
  return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

export function RemoveValidator(): ValidatorFn {
  return (formArray: FormArray | any): { [key: string]: any } | null | any => {
    console.log(formArray, 'formArray')
    return null
  };
}

export function hasDuplicateControl(data: any, forms: any, id: any): ValidationErrors {
  return (formArray: FormControl | any): { [key: string]: any } | null | any => {
    console.log(formArray, forms, 'formArray')
    if (forms[id] != undefined) {
      if (forms[id]?.controls[data?.key] != undefined && forms[id]?.controls[data?.equalkey] != undefined) {
        if (forms[id]?.controls[data?.key]?.value != forms[id]?.controls[data?.equalkey]?.value) {
          return { matched: 'Password and Confirm Password must be match.' };
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
}


export function alphaNumericValidator(control: FormControl): ValidationErrors | null {
  const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
  const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }
  return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}

export function alphaValidator(control: FormControl): ValidationErrors | null {
  const ALPHA_REGEX = /^[a-zA-Z_]*$/;
  const ALPHA_VALIDATION_ERROR = { alphaError: 'only alphabets values are allowed' }
  return ALPHA_REGEX.test(control.value) ? null : ALPHA_VALIDATION_ERROR;
}

export function EmailValidator(control: FormControl): ValidationErrors | null {
  const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
  const EMAIL_VALIDATION_ERROR = { emailError: 'Please insert/enter a valid email address.' }
  return EMAIL_REGEX.test(control.value) ? null : EMAIL_VALIDATION_ERROR;
}

export function PasswordValidator(control: FormControl): ValidationErrors | null {
  const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
  const EMAIL_VALIDATION_ERROR = { emailError: 'Please insert/enter a valid email address.' }
  return EMAIL_REGEX.test(control.value) ? null : EMAIL_VALIDATION_ERROR;
}

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: 'Password and Confirm Password must be match.' });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

// PasswordStrengthValidator
export const PasswordStrengthValidator = function (control: AbstractControl): ValidationErrors | null {
  let value: string = control.value || '';
  if (!value) {
    return null
  }
  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine Upper case characters,current value ${value}` };
  }
  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine lower case characters,current value ${value}` };
  }
  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine number characters,current value ${value}` };
  }
  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `text has to contine special character,current value ${value}` };
  }
  return null;
}