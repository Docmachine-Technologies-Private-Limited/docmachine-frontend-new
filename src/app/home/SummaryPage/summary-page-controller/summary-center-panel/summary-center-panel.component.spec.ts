import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCenterPanelComponent } from './summary-center-panel.component';

describe('SummaryCenterPanelComponent', () => {
  let component: SummaryCenterPanelComponent;
  let fixture: ComponentFixture<SummaryCenterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryCenterPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryCenterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
