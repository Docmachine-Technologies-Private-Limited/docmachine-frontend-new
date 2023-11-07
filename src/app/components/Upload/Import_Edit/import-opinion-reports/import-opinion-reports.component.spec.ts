import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOpinionReportComponent } from './import-opinion-reports.component';

describe('ImportOpinionReportComponent', () => {
  let component: ImportOpinionReportComponent;
  let fixture: ComponentFixture<ImportOpinionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOpinionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOpinionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
