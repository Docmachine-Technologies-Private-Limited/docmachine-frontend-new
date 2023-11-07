import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShippingBillComponent } from './shipping-bill.component';

describe('EditShippingBillComponent', () => {
  let component: EditShippingBillComponent;
  let fixture: ComponentFixture<EditShippingBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShippingBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShippingBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
