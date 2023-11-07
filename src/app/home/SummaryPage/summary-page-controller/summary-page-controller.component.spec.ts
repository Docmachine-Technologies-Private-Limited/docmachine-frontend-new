import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageControllerComponent } from './summary-page-controller.component';

describe('SummaryPageControllerComponent', () => {
  let component: SummaryPageControllerComponent;
  let fixture: ComponentFixture<SummaryPageControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPageControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryPageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
