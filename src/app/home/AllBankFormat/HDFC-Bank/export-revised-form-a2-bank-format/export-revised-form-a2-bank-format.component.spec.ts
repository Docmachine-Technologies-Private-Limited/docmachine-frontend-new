import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hdfcbankRevisedFormA2BANKFormatComponent } from './export-revised-form-a2-bank-format.component';

describe('hdfcbankRevisedFormA2BANKFormatComponent', () => {
  let component: hdfcbankRevisedFormA2BANKFormatComponent;
  let fixture: ComponentFixture<hdfcbankRevisedFormA2BANKFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ hdfcbankRevisedFormA2BANKFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(hdfcbankRevisedFormA2BANKFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
