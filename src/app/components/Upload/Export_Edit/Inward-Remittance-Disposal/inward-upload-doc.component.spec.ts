import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInwardUploadDocumentsComponent } from './inward-upload-doc.component';

describe('EditInwardUploadDocumentsComponent', () => {
  let component: EditInwardUploadDocumentsComponent;
  let fixture: ComponentFixture<EditInwardUploadDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInwardUploadDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInwardUploadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
