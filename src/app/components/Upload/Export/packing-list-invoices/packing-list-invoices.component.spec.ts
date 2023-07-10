import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListInvoicesComponent } from './packing-list-invoices.component';

describe('PackingListInvoicesComponent', () => {
  let component: PackingListInvoicesComponent;
  let fixture: ComponentFixture<PackingListInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingListInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingListInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
