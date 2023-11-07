import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTransactionUIComponent } from './summary-transaction-ui.component';

describe('SummaryTransactionUIComponent', () => {
  let component: SummaryTransactionUIComponent;
  let fixture: ComponentFixture<SummaryTransactionUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTransactionUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryTransactionUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
