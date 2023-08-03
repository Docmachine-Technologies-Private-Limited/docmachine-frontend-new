import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hdfcbankREMITTANCEADVANCEAGAINSTComponent } from './remittanceadvanceagainst.component';

describe('hdfcbankREMITTANCEADVANCEAGAINSTComponent', () => {
  let component: hdfcbankREMITTANCEADVANCEAGAINSTComponent;
  let fixture: ComponentFixture<hdfcbankREMITTANCEADVANCEAGAINSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hdfcbankREMITTANCEADVANCEAGAINSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hdfcbankREMITTANCEADVANCEAGAINSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
