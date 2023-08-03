import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportInwardRemittanceDisposalFormatComponent } from './export-inward-remittance-disposal-format.component';

describe('ExportInwardRemittanceDisposalFormatComponent', () => {
  let component: ExportInwardRemittanceDisposalFormatComponent;
  let fixture: ComponentFixture<ExportInwardRemittanceDisposalFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportInwardRemittanceDisposalFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportInwardRemittanceDisposalFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
