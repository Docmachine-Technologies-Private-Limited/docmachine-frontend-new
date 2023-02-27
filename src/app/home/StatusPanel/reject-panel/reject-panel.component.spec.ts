import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPanelComponent } from './reject-panel.component';

describe('RejectPanelComponent', () => {
  let component: RejectPanelComponent;
  let fixture: ComponentFixture<RejectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
