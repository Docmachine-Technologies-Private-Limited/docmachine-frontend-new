import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImportHomeTransactionComponent } from './new-import-home-transaction.component';

describe('NewImportHomeTransactionComponent', () => {
  let component: NewImportHomeTransactionComponent;
  let fixture: ComponentFixture<NewImportHomeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewImportHomeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewImportHomeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
