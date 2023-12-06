import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBillLodgementComponent } from './import-bill-lodgement.component';

describe('ImportBillLodgementComponent', () => {
  let component: ImportBillLodgementComponent;
  let fixture: ComponentFixture<ImportBillLodgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBillLodgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBillLodgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
