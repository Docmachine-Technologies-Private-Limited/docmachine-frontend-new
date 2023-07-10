import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfExchangesComponent } from './bill-of-exchanges.component';

describe('BillOfExchangesComponent', () => {
  let component: BillOfExchangesComponent;
  let fixture: ComponentFixture<BillOfExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfExchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillOfExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
