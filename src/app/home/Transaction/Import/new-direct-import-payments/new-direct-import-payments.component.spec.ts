import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectImportPaymentsComponent } from './new-direct-import-payments.component';

describe('NewDirectImportPaymentsComponent', () => {
  let component: NewDirectImportPaymentsComponent;
  let fixture: ComponentFixture<NewDirectImportPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDirectImportPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDirectImportPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
