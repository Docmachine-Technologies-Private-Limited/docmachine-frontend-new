import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTableExpansionPanelComponent } from './custom-table-expansion-panel.component';

describe('CustomTableExpansionPanelComponent', () => {
  let component: CustomTableExpansionPanelComponent;
  let fixture: ComponentFixture<CustomTableExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTableExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTableExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
