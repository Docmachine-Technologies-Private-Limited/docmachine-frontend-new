import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRealisationCertificateSummaryComponent } from './import-realisation-certificate-summary.component';

describe('ImportRealisationCertificateSummaryComponent', () => {
  let component: ImportRealisationCertificateSummaryComponent;
  let fixture: ComponentFixture<ImportRealisationCertificateSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportRealisationCertificateSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportRealisationCertificateSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
