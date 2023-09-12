import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDestructionCertificatesComponent } from './import-destruction-certificates.component';

describe('ImportDestructionCertificatesComponent', () => {
  let component: ImportDestructionCertificatesComponent;
  let fixture: ComponentFixture<ImportDestructionCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDestructionCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDestructionCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
