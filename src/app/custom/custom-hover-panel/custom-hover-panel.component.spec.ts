import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHoverPanelComponent } from './custom-hover-panel.component';

describe('CustomHoverPanelComponent', () => {
  let component: CustomHoverPanelComponent;
  let fixture: ComponentFixture<CustomHoverPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHoverPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHoverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
