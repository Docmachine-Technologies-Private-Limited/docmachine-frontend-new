import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvanceOutwardRemittanceA2Component } from './new-advance-outward-remittance-a2.component';

describe('NewAdvanceOutwardRemittanceA2Component', () => {
  let component: NewAdvanceOutwardRemittanceA2Component;
  let fixture: ComponentFixture<NewAdvanceOutwardRemittanceA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdvanceOutwardRemittanceA2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdvanceOutwardRemittanceA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
