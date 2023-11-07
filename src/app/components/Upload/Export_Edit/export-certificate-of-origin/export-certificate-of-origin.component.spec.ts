import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExportCertificateOfOriginComponent } from './export-certificate-of-origin.component';

describe('EditExportCertificateOfOriginComponent', () => {
  let component: EditExportCertificateOfOriginComponent;
  let fixture: ComponentFixture<EditExportCertificateOfOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExportCertificateOfOriginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExportCertificateOfOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
