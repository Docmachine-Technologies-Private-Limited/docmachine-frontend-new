import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharatheximCreatePlanComponent } from './bharathexim-create-plan.component';

describe('BharatheximCreatePlanComponent', () => {
  let component: BharatheximCreatePlanComponent;
  let fixture: ComponentFixture<BharatheximCreatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BharatheximCreatePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BharatheximCreatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
