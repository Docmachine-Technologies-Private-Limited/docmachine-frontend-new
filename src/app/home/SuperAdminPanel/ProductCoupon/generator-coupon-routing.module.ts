import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCouponProductComponent } from './add-coupon-product/add-coupon-product.component';
import { SuperGuard } from '../../../service/RolePermission/SuperAdmin/super.guard';
import { GeneratorCouponProductComponent } from './generator-coupon-product/generator-coupon-product.component';

const routes: Routes = [
  { path: "Add", component: AddCouponProductComponent, canActivate: [SuperGuard] },
  { path: "Generator", component: GeneratorCouponProductComponent, canActivate: [SuperGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratorCouponRoutingModule { }
