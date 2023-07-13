import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceValidatorService {

  constructor() { }
  
  getMAX_MIN_LENGTH() {
    return {
      text: [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      date: [Validators.required, Validators.minLength(0), Validators.maxLength(10)],
      Adrress: [Validators.required, Validators.minLength(10), Validators.maxLength(200)],
      buyer: [Validators.required],
      ShippingBill: [Validators.required],
      consignee: [Validators.required],
      commodity: [Validators.required],
      origin: [Validators.required],
      location: [Validators.required],
      PaymentType: [Validators.required],
      Bank: [Validators.required]
    }
  }
}
