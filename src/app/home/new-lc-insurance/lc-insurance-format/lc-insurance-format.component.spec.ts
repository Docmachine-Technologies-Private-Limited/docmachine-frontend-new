import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcInsuranceFormatComponent } from './lc-insurance-format.component';

describe('LcInsuranceFormatComponent', () => {
  let component: LcInsuranceFormatComponent;
  let fixture: ComponentFixture<LcInsuranceFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcInsuranceFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcInsuranceFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
