import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomJPXSchedulerComponent } from './custom-jpxscheduler.component';

describe('CustomJPXSchedulerComponent', () => {
  let component: CustomJPXSchedulerComponent;
  let fixture: ComponentFixture<CustomJPXSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomJPXSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomJPXSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
