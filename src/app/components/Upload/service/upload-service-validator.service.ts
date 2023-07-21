import { Injectable, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PipoDataService } from '../../../service/homeservices/pipo.service';
import { UserService } from '../../../service/user.service';
import { DocumentService } from '../../../service/document.service';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceValidatorService implements OnInit {
  dynamicFormGroup: any = [];
  fields: any = [];
  model = {};
  SHIPPING_BILL_LIST: any = [];
  COMMERICAL_NO: any = [];
  ORM_BY_PARTY_NAME: any = [];
  ORM_SELECTION_DATA: any = [];
  BOE_LIST: any = [];
  CURRENCY_LIST: any = [];
  BUYER_DETAILS: any = [];
  BUYER_ADDRESS_DETAILS: any = [];
  BENEFICIARY_DETAILS: any = [];
  BENEFICIARY_ADDRESS_DETAILS: any = [];
  ConsigneeNameList: any = [];
  PIPO_DATA: any = [];
  pipourl1: any = '';
  pipoArr: any = [];
  BUYER_LIST: any = [];
  CommercialNumber: any = [];
  COMMERCIAL_LIST: any = [];
  commerciallist: any = [];
  SHIPPING_BUNDEL: any = [];
  SUBMIT_ERROR: boolean = false;
  origin: any = [];
  commodity: any = [];
  location: any = [];
  bankDetail: any = [];
  Id: any = '';
  BANK_NAME_LIST_GLOABL: any = [];

  constructor(public pipoDataService: PipoDataService,
    public documentService: DocumentService,
    public userService: UserService) {
  }

  ngOnInit(): void {
  }

  async loaddata() {
    this.CURRENCY_LIST = this.documentService.getCurrencyList();
    let USER_DATA: any = await this.userService.getUserDetail();
    this.SHIPPING_BUNDEL = [];
    this.origin = [];
    this.BUYER_DETAILS = [];
    this.ConsigneeNameList = [];
    this.BENEFICIARY_DETAILS = [];
    this.location = [];
    this.commodity = [];

    if (USER_DATA?.result?.sideMenu == 'import') {
      this.userService.getBene(1).subscribe((res: any) => {
        res.data?.forEach(element => {
          if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
            this.ConsigneeNameList.push({ value: element?.ConsigneeName })
          }
          this.BENEFICIARY_DETAILS.push({ value: element.benneName, id: element?._id, Address: element?.beneAdrs })
        });
        console.log('Benne Detail111', this.ConsigneeNameList, this.BENEFICIARY_DETAILS);
      }, (err) => console.log('Error', err));

      this.documentService.getBoe(1).subscribe((res: any) => {
        console.log('Master Data File', res);
        res.data.forEach((element, i) => {
          element?.pipo.forEach((ele, j) => {
            this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id });
          });
          this.origin[i] = { value: element.origin, id: element?._id };
        });
        console.log('Master Country', this.SHIPPING_BUNDEL, this.origin);
      }, (err) => console.log(err));
    } else if (USER_DATA?.result?.sideMenu == 'export') {
      this.userService.getBuyer(1).subscribe((res: any) => {
        res.data?.forEach(element => {
          if (element?.ConsigneeName != undefined && element?.ConsigneeName != '') {
            this.ConsigneeNameList.push({ value: element?.ConsigneeName })
          }
          this.BUYER_DETAILS.push({ value: element.buyerName, id: element?._id, Address: element?.buyerAdrs })
        });
        console.log('getBuyer Details', this.ConsigneeNameList, this.BUYER_DETAILS);
      }, (err) => console.log('Error', err));
      this.documentService.getMaster(1).subscribe((res: any) => {
        console.log('Master Data File', res);
        res.data.forEach((element, i) => {
          element?.pipo?.forEach((ele, j) => {
            this.SHIPPING_BUNDEL.push({ pipo: ele, id: ele?._id, sbno: element?.sbno, SB_ID: element?._id });
          });
          this.origin[i] = { value: element?.countryOfFinaldestination, id: element?._id };
        });
        console.log('Master Country', this.SHIPPING_BUNDEL, this.origin);
      }, (err) => console.log(err));
    }

    this.userService.getTeam().subscribe(async (data) => {
      console.log(data['data'][0]);
      data['data'][0]['location']?.forEach(element => {
        this.location.push({ value: element?.loc })
      });
      data['data'][0]['commodity']?.forEach(element => {
        this.commodity.push({ value: element?.como })
      });
      this.commodity = this.removeDuplicates(this.commodity, 'value');
      this.location = this.removeDuplicates(this.location, 'value')
      console.log(this.location);
      console.log(this.commodity);
      for (let index = 0; index < data['data'][0]['bankDetails'].length; index++) {
        this.bankDetail.push({ value: data['data'][0]['bankDetails'][index]?.bank, id: data['data'][0]['bankDetails'][index]?.BankUniqueId })
      }
    }, (error) => { console.log('error'); });
  }

  async buildForm(model: any, id: any) {
    this.fields[id] = [];
    console.log("BANK_NAME_LIST_GLOABL", this.BANK_NAME_LIST_GLOABL)
    const formGroupFields = await this.getFormControlsFields(model, id);
    this.dynamicFormGroup[id] = await new FormGroup(formGroupFields);
    console.log(this.dynamicFormGroup, 'dynamicFormGroup');
    return await this.dynamicFormGroup;
  }


  setBankList(data: any) {
    this.BANK_NAME_LIST_GLOABL=[];
    setTimeout(() => {
      this.BANK_NAME_LIST_GLOABL = data;
    }, 200);
  }

  async getFormControlsFields(model: any, formid: any) {
    const formGroupFields = {};
    for (let field of Object.keys(model)) {
      let id: any = field;
      const fieldProps: any = model[field];
      if (fieldProps?.type != "formArray") {
        formGroupFields[field] = new FormControl(fieldProps.value,
          this.setRequired(fieldProps?.minLength, fieldProps?.maxLength, fieldProps?.rules, formid)[fieldProps?.typeOf != undefined ? fieldProps?.typeOf : fieldProps?.type]);
        this.fields[formid].push({ ...fieldProps, fieldName: field });
      } else {
        var temp: any = [];
        var tempFormGroup: any = [];
        let count: number = 0;
        fieldProps?.formGroup.forEach(element => {
          for (let field2 of Object.keys(element)) {
            temp.push({ ...element[field2], fieldName: field2, index: count });
            tempFormGroup.push(new FormGroup({
              [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false },
                this.setRequired(element[field2]?.minLength, element[field2]?.maxLength, element[field2]?.rules, formid)[element[field2]?.typeOf != undefined ? element[field2]?.typeOf : element[field2]?.type])
            }));
            count++;
          }
        });
        fieldProps['NewformGroup'] = temp;
        fieldProps['RemoveListIndex'] = [{ START_INDEX: -1, LAST_INDEX: -1 }];
        if (fieldProps?.AutoFill == true && fieldProps?.AutoFill != undefined) {
          formGroupFields[field] = await new FormArray(tempFormGroup, hasDuplicateFormArray(fieldProps?.EqualList));
          this.fields[formid].push({ ...fieldProps, fieldName: field });
          console.log(id, fieldProps, tempFormGroup, this.fields[formid], 'hghjgjhghjgjh if')
        } else {
          formGroupFields[field] = await new FormArray(tempFormGroup);
          this.fields[formid].push({ ...fieldProps, fieldName: field });
          console.log(id, fieldProps, tempFormGroup, this.fields[formid], 'hghjgjhghjgjh else')
        }
      }
    }
    console.log(this.fields, formGroupFields, 'hghjgjhghjgjh')
    return formGroupFields;
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

  setRequired(minLength: any, maxLength: any, rule: any, formid: any) {
    return {
      text: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)],
      date: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)],
      Address: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(200)],
      number: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)],
      buyer: [rule?.required == true ? Validators.required : ''],
      ShippingBill: rule?.required == true ? [Validators.required] : [],
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
      AdvanceInfo: [],
      NotRequired: [],
      ALPHA_NUMERIC: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20), alphaNumericValidator] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20), alphaNumericValidator],
      email: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(100)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(100)],
      password: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)],
      confirmPassword: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20), hasDuplicateControl({ key: 'confirmPassword', equalkey: 'password' }, this.dynamicFormGroup, formid)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20), hasDuplicateControl({ key: 'confirmPassword', equalkey: 'password' }, this.dynamicFormGroup, formid)],
      checkbox: rule?.required == true ? [Validators.required, minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)] :
        [minLength != undefined ? Validators.minLength(minLength) : Validators.minLength(0), maxLength != undefined ? Validators.maxLength(maxLength) : Validators.maxLength(20)]
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
      let count: number = this.fields[formid][index]['NewformGroup'].length;
      let count1: number = this.fields[formid][index]['NewformGroup'].length;
      for (let field2 of Object.keys(element)) {
        temp.push({ ...element[field2], fieldName: field2, index: count });
        this.fields[formid][index]['NewformGroup'].push({ ...element[field2], fieldName: field2, index: count });
        tempFormGroup.push(new FormGroup({
          [field2]: new FormControl({ value: element[field2]?.value || "", disabled: element[field2]?.disabled != undefined ? true : false },
            this.setRequired(element[field2]?.minLength, element[field2]?.maxLength, element[field2]?.rules, formid)[element[field2]?.typeOf != undefined ? element[field2]?.typeOf : element[field2]?.type])
        }));
        count++;
      }
      await this.fields[formid][index]['formGroup'].push({ ...this.fields[formid][index]['formGroup'][0], fieldName: field });
      await this.fields[formid][index]['RemoveListIndex'].push({ START_INDEX: count1, LAST_INDEX: count1 + MAX_LIMIT?.MAX_LIMIT });
      await GroupLabel.push(GroupLabel[0].replace('1', GroupLabel?.length + 1));
      await resolve(await tempFormGroup);
    });
  }

  removeFormArray(formGroupKey, index, labelIndex: any, formid: any, MAX_LIMIT: any): any {
    return new Promise(async (resolve, reject) => {
      if (index != 0) {
        let indexstore: any = this.fields[formid][index]['RemoveListIndex'][labelIndex];
        for (var i = indexstore?.LAST_INDEX; i-- > indexstore?.START_INDEX;) {
          this.dynamicFormGroup[formid]?.controls[formGroupKey]?.removeAt(i)
        }
        await this.fields[formid][index]['formGroup']?.splice(labelIndex, 1);
        await this.fields[formid][index]['GroupLabel']?.splice(labelIndex, 1)

        for (let i = indexstore?.LAST_INDEX - 1; i >= indexstore?.START_INDEX; i--) {
          this.fields[formid][index]['NewformGroup']?.splice(i, 1);
        }

        for (let i = this.fields[formid][index]['RemoveListIndex']?.length - 1; i >= labelIndex; i--) {
          this.fields[formid][index]['RemoveListIndex']?.splice(i, 1);
        }

        if (indexstore?.START_INDEX != MAX_LIMIT?.MAX_LIMIT) {
          this.fields[formid][index]['NewformGroup']?.forEach((element, index) => {
            element['index'] = index;
          });
          this.fields[formid][index]['GroupLabel']?.forEach((element, i) => {
            let tempelement = this.fields[formid][index]['GroupLabel'][0]?.replace('1', '');
            this.fields[formid][index]['GroupLabel'][i] = tempelement + ' ' + (i + 1);
          });
          this.removeIndexUpdate(this.fields[formid][index]['RemoveListIndex'], MAX_LIMIT?.MAX_LIMIT);
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
    this.fields[formid][index][key] = value;
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