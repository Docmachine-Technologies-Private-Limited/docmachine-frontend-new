import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPackingListInvoicesComponent } from './import-packing-list-invoices.component';

describe('ImportPackingListInvoicesComponent', () => {
  let component: ImportPackingListInvoicesComponent;
  let fixture: ComponentFixture<ImportPackingListInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPackingListInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportPackingListInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
