import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBillOfExchangesComponent } from './import-bill-of-exchanges.component';

describe('ImportBillOfExchangesComponent', () => {
  let component: ImportBillOfExchangesComponent;
  let fixture: ComponentFixture<ImportBillOfExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBillOfExchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBillOfExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
