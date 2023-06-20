import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStatusProgressBarComponent } from './custom-status-progress-bar.component';

describe('CustomStatusProgressBarComponent', () => {
  let component: CustomStatusProgressBarComponent;
  let fixture: ComponentFixture<CustomStatusProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStatusProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomStatusProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
