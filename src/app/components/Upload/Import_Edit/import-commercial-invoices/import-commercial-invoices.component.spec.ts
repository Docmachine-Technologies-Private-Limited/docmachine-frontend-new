import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommercialInvoicesComponent } from './import-commercial-invoices.component';

describe('ImportCommercialInvoicesComponent', () => {
  let component: ImportCommercialInvoicesComponent;
  let fixture: ComponentFixture<ImportCommercialInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommercialInvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportCommercialInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
