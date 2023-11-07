import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExportSwiftCopyDocumentComponent } from './export-swift-copy-document.component';

describe('EditExportSwiftCopyDocumentComponent', () => {
  let component: EditExportSwiftCopyDocumentComponent;
  let fixture: ComponentFixture<EditExportSwiftCopyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExportSwiftCopyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExportSwiftCopyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
