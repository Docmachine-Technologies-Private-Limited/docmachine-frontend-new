import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvanceOutwardRemittanceComponent } from './add-advance-outward-remittance.component';

describe('AddAdvanceOutwardRemittanceComponent', () => {
  let component: AddAdvanceOutwardRemittanceComponent;
  let fixture: ComponentFixture<AddAdvanceOutwardRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdvanceOutwardRemittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvanceOutwardRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
