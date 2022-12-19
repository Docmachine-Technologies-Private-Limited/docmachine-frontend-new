import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBillLodgementComponent } from './sub-bill-lodgement.component';

describe('SubBillLodgementComponent', () => {
  let component: SubBillLodgementComponent;
  let fixture: ComponentFixture<SubBillLodgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubBillLodgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBillLodgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
