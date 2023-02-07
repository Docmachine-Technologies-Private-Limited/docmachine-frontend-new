import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOtherDocumentsComponent } from './import-other-documents.component';

describe('ImportOtherDocumentsComponent', () => {
  let component: ImportOtherDocumentsComponent;
  let fixture: ComponentFixture<ImportOtherDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOtherDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOtherDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
