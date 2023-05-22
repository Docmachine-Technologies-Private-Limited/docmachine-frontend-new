import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvanceOutwardRemittanceA2Component } from './add-advance-outward-remittance-a2.component';

describe('AddAdvanceOutwardRemittanceA2Component', () => {
  let component: AddAdvanceOutwardRemittanceA2Component;
  let fixture: ComponentFixture<AddAdvanceOutwardRemittanceA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvanceOutwardRemittanceA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvanceOutwardRemittanceA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
