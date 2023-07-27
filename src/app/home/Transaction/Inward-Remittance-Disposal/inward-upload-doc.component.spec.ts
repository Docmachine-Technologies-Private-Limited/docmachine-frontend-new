import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardUploadDocComponent } from './inward-upload-doc.component';

describe('InwardUploadDocComponent', () => {
  let component: InwardUploadDocComponent;
  let fixture: ComponentFixture<InwardUploadDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardUploadDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InwardUploadDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
