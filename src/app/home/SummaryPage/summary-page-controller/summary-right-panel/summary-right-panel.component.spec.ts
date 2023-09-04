import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRightPanelComponent } from './summary-right-panel.component';

describe('SummaryRightPanelComponent', () => {
  let component: SummaryRightPanelComponent;
  let fixture: ComponentFixture<SummaryRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryRightPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
