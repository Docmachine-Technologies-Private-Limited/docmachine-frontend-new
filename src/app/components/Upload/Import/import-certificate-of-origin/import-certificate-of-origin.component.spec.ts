import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCertificateOfOriginComponent } from './import-certificate-of-origin.component';

describe('ImportCertificateOfOriginComponent', () => {
  let component: ImportCertificateOfOriginComponent;
  let fixture: ComponentFixture<ImportCertificateOfOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCertificateOfOriginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportCertificateOfOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
