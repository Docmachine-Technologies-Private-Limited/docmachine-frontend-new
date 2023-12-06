import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwardUploadDocumentsComponent } from './Outward-upload-doc.component';

describe('OutwardUploadDocumentsComponent', () => {
  let component: OutwardUploadDocumentsComponent;
  let fixture: ComponentFixture<OutwardUploadDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutwardUploadDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutwardUploadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
