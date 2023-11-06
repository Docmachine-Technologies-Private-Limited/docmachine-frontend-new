import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollectionImportPaymentsComponent } from './new-collection-import-payments.component';

describe('NewCollectionImportPaymentsComponent', () => {
  let component: NewCollectionImportPaymentsComponent;
  let fixture: ComponentFixture<NewCollectionImportPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCollectionImportPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCollectionImportPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
