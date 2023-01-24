import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutwardRemittanceComponent } from './add-outward-remittance.component';

describe('AddOutwardRemittanceComponent', () => {
  let component: AddOutwardRemittanceComponent;
  let fixture: ComponentFixture<AddOutwardRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOutwardRemittanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOutwardRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
