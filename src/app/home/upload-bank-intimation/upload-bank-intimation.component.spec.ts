import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBankIntimationComponent } from './upload-bank-intimation.component';

describe('UploadBankIntimationComponent', () => {
  let component: UploadBankIntimationComponent;
  let fixture: ComponentFixture<UploadBankIntimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBankIntimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBankIntimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
