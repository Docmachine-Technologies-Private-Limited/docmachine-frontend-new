import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSwiftCopyDocumentComponent } from './import-swift-copy-document.component';

describe('ImportSwiftCopyDocumentComponent', () => {
  let component: ImportSwiftCopyDocumentComponent;
  let fixture: ComponentFixture<ImportSwiftCopyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSwiftCopyDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportSwiftCopyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
