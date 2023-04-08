import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDirectPaymentComponent } from './Import-Direct-Payment.component';

describe('ImportDirectPaymentComponent', () => {
  let component: ImportDirectPaymentComponent;
  let fixture: ComponentFixture<ImportDirectPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDirectPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDirectPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
