import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageHeaderComponent } from './summary-page-header.component';

describe('SummaryPageHeaderComponent', () => {
  let component: SummaryPageHeaderComponent;
  let fixture: ComponentFixture<SummaryPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
