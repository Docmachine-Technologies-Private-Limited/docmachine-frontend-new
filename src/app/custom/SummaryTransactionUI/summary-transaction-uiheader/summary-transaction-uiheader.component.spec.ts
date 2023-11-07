import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTransactionUIHeaderComponent } from './summary-transaction-uiheader.component';

describe('SummaryTransactionUIHeaderComponent', () => {
  let component: SummaryTransactionUIHeaderComponent;
  let fixture: ComponentFixture<SummaryTransactionUIHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTransactionUIHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryTransactionUIHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
