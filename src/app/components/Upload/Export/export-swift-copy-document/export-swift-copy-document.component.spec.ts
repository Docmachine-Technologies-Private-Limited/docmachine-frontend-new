import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSwiftCopyDocumentComponent } from './export-swift-copy-document.component';

describe('ExportSwiftCopyDocumentComponent', () => {
  let component: ExportSwiftCopyDocumentComponent;
  let fixture: ComponentFixture<ExportSwiftCopyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportSwiftCopyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportSwiftCopyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
