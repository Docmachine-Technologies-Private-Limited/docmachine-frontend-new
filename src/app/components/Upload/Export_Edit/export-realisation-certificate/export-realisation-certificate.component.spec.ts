import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExportRealisationCertificateComponent } from './export-realisation-certificate.component';

describe('EditExportRealisationCertificateComponent', () => {
  let component: EditExportRealisationCertificateComponent;
  let fixture: ComponentFixture<EditExportRealisationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExportRealisationCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExportRealisationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
