import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBilllodgementreferencenumberadvicecopySummaryComponent } from './export-billlodgementreferencenumberadvicecopy-summary.component';

describe('ExportBilllodgementreferencenumberadvicecopySummaryComponent', () => {
  let component: ExportBilllodgementreferencenumberadvicecopySummaryComponent;
  let fixture: ComponentFixture<ExportBilllodgementreferencenumberadvicecopySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBilllodgementreferencenumberadvicecopySummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportBilllodgementreferencenumberadvicecopySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
