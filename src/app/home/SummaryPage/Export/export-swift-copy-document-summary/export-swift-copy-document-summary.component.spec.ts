import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSwiftCopyDocumentSummaryComponent } from './export-swift-copy-document-summary.component';

describe('ExportSwiftCopyDocumentSummaryComponent', () => {
  let component: ExportSwiftCopyDocumentSummaryComponent;
  let fixture: ComponentFixture<ExportSwiftCopyDocumentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportSwiftCopyDocumentSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportSwiftCopyDocumentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
