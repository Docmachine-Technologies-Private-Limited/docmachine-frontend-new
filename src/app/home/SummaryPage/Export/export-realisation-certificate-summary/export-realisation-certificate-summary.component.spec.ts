import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRealisationCertificateSummaryComponent } from './export-realisation-certificate-summary.component';

describe('ExportRealisationCertificateSummaryComponent', () => {
  let component: ExportRealisationCertificateSummaryComponent;
  let fixture: ComponentFixture<ExportRealisationCertificateSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRealisationCertificateSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportRealisationCertificateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
