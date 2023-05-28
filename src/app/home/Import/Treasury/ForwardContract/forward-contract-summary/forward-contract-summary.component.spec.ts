import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardContractSummaryComponent } from './forward-contract-summary.component';

describe('ForwardContractSummaryComponent', () => {
  let component: ForwardContractSummaryComponent;
  let fixture: ComponentFixture<ForwardContractSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardContractSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardContractSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
