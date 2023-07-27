import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBillOfExchangeComponent } from './import-bill-of-exchange.component';

describe('ImportBillOfExchangeComponent', () => {
  let component: ImportBillOfExchangeComponent;
  let fixture: ComponentFixture<ImportBillOfExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBillOfExchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBillOfExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
