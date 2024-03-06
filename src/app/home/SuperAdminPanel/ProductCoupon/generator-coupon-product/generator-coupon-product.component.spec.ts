import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorCouponProductComponent } from './generator-coupon-product.component';

describe('GeneratorCouponProductComponent', () => {
  let component: GeneratorCouponProductComponent;
  let fixture: ComponentFixture<GeneratorCouponProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorCouponProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratorCouponProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
