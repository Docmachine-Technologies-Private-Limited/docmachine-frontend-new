import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExportHomeTransactionComponent } from './new-export-home-transaction.component';

describe('NewExportHomeTransactionComponent', () => {
  let component: NewExportHomeTransactionComponent;
  let fixture: ComponentFixture<NewExportHomeTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExportHomeTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExportHomeTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
