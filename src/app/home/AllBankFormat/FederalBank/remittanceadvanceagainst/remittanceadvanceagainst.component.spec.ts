import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalBankREMITTANCEADVANCEAGAINSTComponent } from './remittanceadvanceagainst.component';

describe('FederalBankREMITTANCEADVANCEAGAINSTComponent', () => {
  let component: FederalBankREMITTANCEADVANCEAGAINSTComponent;
  let fixture: ComponentFixture<FederalBankREMITTANCEADVANCEAGAINSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederalBankREMITTANCEADVANCEAGAINSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederalBankREMITTANCEADVANCEAGAINSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
