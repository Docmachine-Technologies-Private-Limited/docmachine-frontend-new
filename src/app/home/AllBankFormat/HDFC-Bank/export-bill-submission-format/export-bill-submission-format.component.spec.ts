import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hdfcbankBillSubmissionFormatComponent } from './export-bill-submission-format.component';

describe('hdfcbankBillSubmissionFormatComponent', () => {
  let component: hdfcbankBillSubmissionFormatComponent;
  let fixture: ComponentFixture<hdfcbankBillSubmissionFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hdfcbankBillSubmissionFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hdfcbankBillSubmissionFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
