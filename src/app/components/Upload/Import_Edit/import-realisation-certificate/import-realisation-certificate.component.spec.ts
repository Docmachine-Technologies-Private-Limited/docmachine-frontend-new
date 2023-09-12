import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRealisationCertificateComponent } from './import-realisation-certificate.component';

describe('ImportRealisationCertificateComponent', () => {
  let component: ImportRealisationCertificateComponent;
  let fixture: ComponentFixture<ImportRealisationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportRealisationCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportRealisationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
