import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHomeModule } from '../../shared-home.module';
import { GeneratorCouponRoutingModule } from './generator-coupon-routing.module';
import { AddCouponProductComponent } from './add-coupon-product/add-coupon-product.component';
import { GeneratorCouponProductComponent } from './generator-coupon-product/generator-coupon-product.component';

@NgModule({
  declarations: [
    AddCouponProductComponent,
    GeneratorCouponProductComponent
  ],
  imports: [
    CommonModule,
    GeneratorCouponRoutingModule,
    SharedHomeModule
  ]
})
export class GeneratorCouponModule { }
