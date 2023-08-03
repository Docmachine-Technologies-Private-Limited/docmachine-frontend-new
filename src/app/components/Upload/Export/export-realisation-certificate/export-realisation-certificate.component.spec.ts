import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRealisationCertificateComponent } from './export-realisation-certificate.component';

describe('ExportRealisationCertificateComponent', () => {
  let component: ExportRealisationCertificateComponent;
  let fixture: ComponentFixture<ExportRealisationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRealisationCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportRealisationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
