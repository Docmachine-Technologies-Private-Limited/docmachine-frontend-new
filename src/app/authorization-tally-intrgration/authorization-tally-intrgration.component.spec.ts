import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationTallyIntrgrationComponent } from './authorization-tally-intrgration.component';

describe('AuthorizationTallyIntrgrationComponent', () => {
  let component: AuthorizationTallyIntrgrationComponent;
  let fixture: ComponentFixture<AuthorizationTallyIntrgrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizationTallyIntrgrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizationTallyIntrgrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
