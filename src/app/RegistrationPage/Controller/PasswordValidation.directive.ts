import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
declare var $: any;

@Directive({
    selector: '[PasswordValidation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true }]
})
export class PasswordValidationDirective implements Validator {
    constructor(public ref: ElementRef, private renderer: Renderer2) {
    }
    validate(control: FormControl) {
        let valid: any = null;
        $('.exclamation,.error-msg').remove();
        this.validateTest(control, (val: any) => {
            if (val == null) {
                if (control?.value == null || control?.value == undefined) {
                    valid = null;
                }
            } else {
                valid = val;
            }
        })
        return valid;
    }

    async validateTest(control: FormControl, CallBack: any) {
        $('.exclamation,.error-msg').remove();
        let valid: any = null;
        if (control.value != null && control.value != undefined && control.value != '') {
            if ((control?.dirty || control?.touched)) {
                valid = this.checkPasswordValidity(control.value)
                if (valid != null) {
                    const icon = document.createElement('i');
                    this.renderer.setAttribute(icon, "class", 'fas fa-exclamation-circle exclamation');
                    this.renderer.setAttribute(icon, "style", `
                      position: absolute;
                      top: ${(this.ref.nativeElement?.clientHeight / 2) - 8}px;
                      left: ${this.ref.nativeElement?.clientWidth - 25}px;
                      z-index:99;
                      color: red;`);
                    this.renderer.insertBefore(this.ref.nativeElement.parentNode, icon, this.ref.nativeElement);
                    this.ref.nativeElement.style['padding-right'] = '25px';
                    this.ref.nativeElement.parentNode.style['position'] = 'relative'

                    const ErrorMessageTag = document.createElement('p');
                    this.renderer.setAttribute(ErrorMessageTag, "class", 'error-msg');
                    this.renderer.setAttribute(ErrorMessageTag, "style", `
                      position: absolute;
                      top: 0px;
                      left: 20px;
                      font-size:10px;
                      z-index:99;
                      color: red;`);
                    let TextNode = document.createTextNode(valid);
                    ErrorMessageTag.appendChild(TextNode);
                    this.renderer.insertBefore(this.ref.nativeElement.parentNode, ErrorMessageTag, this.ref.nativeElement);
                } else {
                    const icon = document.createElement('i');
                    this.renderer.setAttribute(icon, "class", 'fa fa-check exclamation');
                    this.renderer.setAttribute(icon, "style", `
                      position: absolute;
                      top: ${(this.ref.nativeElement?.clientHeight / 2) - 8}px;
                      left: ${this.ref.nativeElement?.clientWidth - 25}px;
                      z-index:99;
                      color: green;`);
                    this.renderer.insertBefore(this.ref.nativeElement.parentNode, icon, this.ref.nativeElement);
                    this.ref.nativeElement.style['padding-right'] = '25px';
                    this.ref.nativeElement.parentNode.style['position'] = 'relative'
                }
            } else {
                CallBack(null);
            }
        } else {
            CallBack(null);
        }
    }

    checkPasswordValidity(value) {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return "Password must not contain Whitespaces.";
        }

        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return "Password must have at least one Uppercase Character.";
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return "Password must have at least one Lowercase Character.";
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return "Password must contain at least one Digit.";
        }
        const isContainsSymbol =
            /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
            return "Password must contain at least one Special Symbol.";
        }
        const isValidLength = /^.{10,16}$/;
        if (!isValidLength.test(value)) {
            return "Password must be 10-16 Characters Long.";
        }
        return null;
    }
}