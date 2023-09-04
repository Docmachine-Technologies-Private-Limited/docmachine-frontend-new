import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryLeftPanelComponent } from './summary-left-panel.component';

describe('SummaryLeftPanelComponent', () => {
  let component: SummaryLeftPanelComponent;
  let fixture: ComponentFixture<SummaryLeftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryLeftPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
