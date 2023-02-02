import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfCreditImportLcComponent } from './letter-of-credit-import-lc.component';

describe('LetterOfCreditImportLcComponent', () => {
  let component: LetterOfCreditImportLcComponent;
  let fixture: ComponentFixture<LetterOfCreditImportLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterOfCreditImportLcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterOfCreditImportLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
