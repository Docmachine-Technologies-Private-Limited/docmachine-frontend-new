import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerCreditPanelComponent } from './Buyer-Credit-Panel.component';

describe('BuyerCreditPanelComponent', () => {
  let component: BuyerCreditPanelComponent;
  let fixture: ComponentFixture<BuyerCreditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerCreditPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerCreditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
