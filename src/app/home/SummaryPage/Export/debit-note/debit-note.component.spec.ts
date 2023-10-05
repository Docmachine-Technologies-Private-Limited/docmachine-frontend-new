import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNoteSummaryComponent } from './debit-note.component';

describe('DebitNoteSummaryComponent', () => {
  let component: DebitNoteSummaryComponent;
  let fixture: ComponentFixture<DebitNoteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitNoteSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitNoteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
