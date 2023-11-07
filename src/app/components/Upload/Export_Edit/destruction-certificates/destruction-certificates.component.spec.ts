import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDestructionCertificatesComponent } from './destruction-certificates.component';

describe('EditDestructionCertificatesComponent', () => {
  let component: EditDestructionCertificatesComponent;
  let fixture: ComponentFixture<EditDestructionCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDestructionCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDestructionCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
