import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTransactionReportComponent } from './export-transaction-report.component';

describe('ExportTransactionReportComponent', () => {
  let component: ExportTransactionReportComponent;
  let fixture: ComponentFixture<ExportTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportTransactionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
