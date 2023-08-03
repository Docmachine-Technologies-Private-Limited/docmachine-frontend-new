import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBilllodgementreferencenumberadvicecopySummaryComponent } from './import-billlodgementreferencenumberadvicecopy-summary.component';

describe('ImportBilllodgementreferencenumberadvicecopySummaryComponent', () => {
  let component: ImportBilllodgementreferencenumberadvicecopySummaryComponent;
  let fixture: ComponentFixture<ImportBilllodgementreferencenumberadvicecopySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportBilllodgementreferencenumberadvicecopySummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBilllodgementreferencenumberadvicecopySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
