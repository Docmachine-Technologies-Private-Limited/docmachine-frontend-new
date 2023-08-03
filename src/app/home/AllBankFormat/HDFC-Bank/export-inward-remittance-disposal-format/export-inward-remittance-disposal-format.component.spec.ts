import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hdfcbankInwardRemittanceDisposalFormatComponent } from './export-inward-remittance-disposal-format.component';

describe('hdfcbankInwardRemittanceDisposalFormatComponent', () => {
  let component: hdfcbankInwardRemittanceDisposalFormatComponent;
  let fixture: ComponentFixture<hdfcbankInwardRemittanceDisposalFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hdfcbankInwardRemittanceDisposalFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hdfcbankInwardRemittanceDisposalFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
