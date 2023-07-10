import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialInvoicesComponent } from './commercial-invoices.component';

describe('CommercialInvoicesComponent', () => {
  let component: CommercialInvoicesComponent;
  let fixture: ComponentFixture<CommercialInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
