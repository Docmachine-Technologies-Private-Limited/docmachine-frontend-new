import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLetterofCreditComponent } from './letterof-credit.component';

describe('UploadLetterofCreditComponent', () => {
  let component: UploadLetterofCreditComponent;
  let fixture: ComponentFixture<UploadLetterofCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLetterofCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLetterofCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
