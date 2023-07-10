import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentsUploadComponent } from './custom-components-upload.component';

describe('CustomComponentsUploadComponent', () => {
  let component: CustomComponentsUploadComponent;
  let fixture: ComponentFixture<CustomComponentsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponentsUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
