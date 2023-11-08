import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBuyerCreditTransactionComponent } from './new-buyer-credit-transaction.component';

describe('NewBuyerCreditTransactionComponent', () => {
  let component: NewBuyerCreditTransactionComponent;
  let fixture: ComponentFixture<NewBuyerCreditTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBuyerCreditTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBuyerCreditTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
