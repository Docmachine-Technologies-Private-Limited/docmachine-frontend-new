import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvanceImportPaymentsComponent } from './new-advance-import-payments.component';

describe('NewAdvanceImportPaymentsComponent', () => {
  let component: NewAdvanceImportPaymentsComponent;
  let fixture: ComponentFixture<NewAdvanceImportPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdvanceImportPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdvanceImportPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
