import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSummaryHeaderComponent } from './child-summary-header.component';

describe('ChildSummaryHeaderComponent', () => {
  let component: ChildSummaryHeaderComponent;
  let fixture: ComponentFixture<ChildSummaryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSummaryHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
