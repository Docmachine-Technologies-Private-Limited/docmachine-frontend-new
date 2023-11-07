import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCertificateofOriginComponent } from './certificateof-origin.component';

describe('ExportCertificateofOriginComponent', () => {
  let component: ExportCertificateofOriginComponent;
  let fixture: ComponentFixture<ExportCertificateofOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCertificateofOriginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCertificateofOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
