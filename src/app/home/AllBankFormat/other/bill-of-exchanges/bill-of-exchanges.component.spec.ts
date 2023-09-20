import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatBillOfExchangesComponent } from './bill-of-exchanges.component';

describe('FormatBillOfExchangesComponent', () => {
  let component: FormatBillOfExchangesComponent;
  let fixture: ComponentFixture<FormatBillOfExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatBillOfExchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatBillOfExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
