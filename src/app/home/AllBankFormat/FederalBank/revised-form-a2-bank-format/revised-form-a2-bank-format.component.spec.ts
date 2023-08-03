import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalBankRevisedFormA2BANKFormatComponent } from './revised-form-a2-bank-format.component';

describe('FederalBankRevisedFormA2BANKFormatComponent', () => {
  let component: FederalBankRevisedFormA2BANKFormatComponent;
  let fixture: ComponentFixture<FederalBankRevisedFormA2BANKFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FederalBankRevisedFormA2BANKFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FederalBankRevisedFormA2BANKFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
