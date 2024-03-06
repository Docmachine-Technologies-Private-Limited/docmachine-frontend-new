import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCouponProductComponent } from './add-coupon-product.component';

describe('AddCouponProductComponent', () => {
  let component: AddCouponProductComponent;
  let fixture: ComponentFixture<AddCouponProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCouponProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCouponProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
