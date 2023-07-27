import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOpinionReportsComponent } from './import-opinion-reports.component';

describe('ImportOpinionReportsComponent', () => {
  let component: ImportOpinionReportsComponent;
  let fixture: ComponentFixture<ImportOpinionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOpinionReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOpinionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
