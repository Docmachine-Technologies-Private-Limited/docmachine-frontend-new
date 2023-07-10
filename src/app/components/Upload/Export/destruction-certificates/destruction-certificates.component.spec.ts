import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionCertificatesComponent } from './destruction-certificates.component';

describe('DestructionCertificatesComponent', () => {
  let component: DestructionCertificatesComponent;
  let fixture: ComponentFixture<DestructionCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestructionCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
