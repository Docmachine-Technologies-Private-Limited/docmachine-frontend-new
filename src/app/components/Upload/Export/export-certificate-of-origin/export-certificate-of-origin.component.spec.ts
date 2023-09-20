import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCertificateOfOriginComponent } from './export-certificate-of-origin.component';

describe('ExportCertificateOfOriginComponent', () => {
  let component: ExportCertificateOfOriginComponent;
  let fixture: ComponentFixture<ExportCertificateOfOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCertificateOfOriginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCertificateOfOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
