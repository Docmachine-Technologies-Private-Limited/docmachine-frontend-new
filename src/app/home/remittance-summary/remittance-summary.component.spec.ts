import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceSummaryComponent } from './remittance-summary.component';

describe('RemittanceSummaryComponent', () => {
  let component: RemittanceSummaryComponent;
  let fixture: ComponentFixture<RemittanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemittanceSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemittanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
