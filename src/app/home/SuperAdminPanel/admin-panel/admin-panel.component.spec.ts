import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminPanelComponent } from './admin-panel.component';

describe('AdminPanelComponent', () => {
  let component: SuperAdminPanelComponent;
  let fixture: ComponentFixture<SuperAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
