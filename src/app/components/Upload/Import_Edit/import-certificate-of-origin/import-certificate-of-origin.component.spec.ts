import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImportCertificateOfOriginComponent } from './import-certificate-of-origin.component';

describe('EditImportCertificateOfOriginComponent', () => {
  let component: EditImportCertificateOfOriginComponent;
  let fixture: ComponentFixture<EditImportCertificateOfOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImportCertificateOfOriginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImportCertificateOfOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
