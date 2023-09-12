import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackingListInvoicesComponent } from './packing-list-invoices.component';

describe('EditPackingListInvoicesComponent', () => {
  let component: EditPackingListInvoicesComponent;
  let fixture: ComponentFixture<EditPackingListInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPackingListInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPackingListInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
