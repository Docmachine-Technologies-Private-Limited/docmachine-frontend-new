import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBillOfExchangesComponent } from './bill-of-exchanges.component';

describe('EditBillOfExchangesComponent', () => {
  let component: EditBillOfExchangesComponent;
  let fixture: ComponentFixture<EditBillOfExchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBillOfExchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBillOfExchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
