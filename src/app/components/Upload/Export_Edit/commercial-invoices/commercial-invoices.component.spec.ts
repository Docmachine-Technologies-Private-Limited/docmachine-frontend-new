import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommercialInvoicesComponent } from './commercial-invoices.component';

describe('EditCommercialInvoicesComponent', () => {
  let component: EditCommercialInvoicesComponent;
  let fixture: ComponentFixture<EditCommercialInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCommercialInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCommercialInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
