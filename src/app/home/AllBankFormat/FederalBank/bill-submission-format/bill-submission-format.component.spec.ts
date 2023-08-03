import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalBankBillSubmissionFormatComponent } from './bill-submission-format.component';

describe('FederalBankBillSubmissionFormatComponent', () => {
  let component: FederalBankBillSubmissionFormatComponent;
  let fixture: ComponentFixture<FederalBankBillSubmissionFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederalBankBillSubmissionFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederalBankBillSubmissionFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
