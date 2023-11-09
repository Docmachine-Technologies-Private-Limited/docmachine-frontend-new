import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPopUpLocalFileComponent } from './upload-pop-up-local-file.component';

describe('UploadPopUpLocalFileComponent', () => {
  let component: UploadPopUpLocalFileComponent;
  let fixture: ComponentFixture<UploadPopUpLocalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPopUpLocalFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPopUpLocalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
