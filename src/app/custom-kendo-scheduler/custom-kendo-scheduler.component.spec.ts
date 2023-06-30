import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomKendoSchedulerComponent } from './custom-kendo-scheduler.component';

describe('CustomKendoSchedulerComponent', () => {
  let component: CustomKendoSchedulerComponent;
  let fixture: ComponentFixture<CustomKendoSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomKendoSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomKendoSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
