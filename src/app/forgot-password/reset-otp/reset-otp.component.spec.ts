import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetOTPComponent } from './reset-otp.component';

describe('ResetOTPComponent', () => {
  let component: ResetOTPComponent;
  let fixture: ComponentFixture<ResetOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetOTPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
