import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterOfCreditImportLCComponent } from './letter-of-credit-import-lc.component';

describe('LetterOfCreditImportLCComponent', () => {
  let component: LetterOfCreditImportLCComponent;
  let fixture: ComponentFixture<LetterOfCreditImportLCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterOfCreditImportLCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterOfCreditImportLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
