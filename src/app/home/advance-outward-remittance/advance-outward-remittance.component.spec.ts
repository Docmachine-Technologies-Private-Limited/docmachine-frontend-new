import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceOutwardRemittanceComponent } from './advance-outward-remittance.component';

describe('AdvanceOutwardRemittanceComponent', () => {
  let component: AdvanceOutwardRemittanceComponent;
  let fixture: ComponentFixture<AdvanceOutwardRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceOutwardRemittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceOutwardRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
