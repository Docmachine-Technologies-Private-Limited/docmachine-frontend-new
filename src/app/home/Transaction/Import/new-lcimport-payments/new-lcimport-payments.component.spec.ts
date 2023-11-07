import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLCImportPaymentsComponent } from './new-lcimport-payments.component';

describe('NewLCImportPaymentsComponent', () => {
  let component: NewLCImportPaymentsComponent;
  let fixture: ComponentFixture<NewLCImportPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLCImportPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLCImportPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
