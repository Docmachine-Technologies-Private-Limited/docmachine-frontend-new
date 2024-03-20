import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTransactionReportComponent } from './import-transaction-report.component';

describe('ImportTransactionReportComponent', () => {
  let component: ImportTransactionReportComponent;
  let fixture: ComponentFixture<ImportTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTransactionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
