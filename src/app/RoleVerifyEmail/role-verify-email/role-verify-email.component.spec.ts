import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleVerifyEmailComponent } from './role-verify-email.component';

describe('RoleVerifyEmailComponent', () => {
  let component: RoleVerifyEmailComponent;
  let fixture: ComponentFixture<RoleVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleVerifyEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
