import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLcInsuranceComponent } from './new-lc-insurance.component';

describe('NewLcInsuranceComponent', () => {
  let component: NewLcInsuranceComponent;
  let fixture: ComponentFixture<NewLcInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLcInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLcInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
