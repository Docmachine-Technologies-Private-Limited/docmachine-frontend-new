import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedSingUpComponent } from './role-based-sing-up.component';

describe('RoleBasedSingUpComponent', () => {
  let component: RoleBasedSingUpComponent;
  let fixture: ComponentFixture<RoleBasedSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleBasedSingUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleBasedSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
