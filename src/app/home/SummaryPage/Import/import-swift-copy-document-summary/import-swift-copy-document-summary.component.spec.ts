import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSwiftCopyDocumentSummaryComponent } from './import-swift-copy-document-summary.component';

describe('ImportSwiftCopyDocumentSummaryComponent', () => {
  let component: ImportSwiftCopyDocumentSummaryComponent;
  let fixture: ComponentFixture<ImportSwiftCopyDocumentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSwiftCopyDocumentSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSwiftCopyDocumentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
