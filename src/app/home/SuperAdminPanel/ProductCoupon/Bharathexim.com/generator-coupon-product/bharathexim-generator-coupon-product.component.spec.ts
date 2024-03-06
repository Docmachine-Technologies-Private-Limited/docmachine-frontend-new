import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BharatheximGeneratorCouponProductComponent } from './bharathexim-generator-coupon-product.component';


describe('BharatheximGeneratorCouponProductComponent', () => {
  let component: BharatheximGeneratorCouponProductComponent;
  let fixture: ComponentFixture<BharatheximGeneratorCouponProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BharatheximGeneratorCouponProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BharatheximGeneratorCouponProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
