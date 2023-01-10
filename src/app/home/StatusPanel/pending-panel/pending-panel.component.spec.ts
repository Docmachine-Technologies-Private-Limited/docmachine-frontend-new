import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingPanelComponent } from './pending-panel.component';

describe('PendingPanelComponent', () => {
  let component: PendingPanelComponent;
  let fixture: ComponentFixture<PendingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
