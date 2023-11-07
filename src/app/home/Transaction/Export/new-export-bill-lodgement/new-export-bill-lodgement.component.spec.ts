import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExportBillLodgementComponent } from './new-export-bill-lodgement.component';

describe('NewExportBillLodgementComponent', () => {
  let component: NewExportBillLodgementComponent;
  let fixture: ComponentFixture<NewExportBillLodgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExportBillLodgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExportBillLodgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
