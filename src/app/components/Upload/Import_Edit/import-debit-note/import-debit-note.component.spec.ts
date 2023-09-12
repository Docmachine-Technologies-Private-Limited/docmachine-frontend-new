import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDebitNotesComponent } from './import-debit-note.component';

describe('DebitNoteComponent', () => {
  let component: ImportDebitNotesComponent;
  let fixture: ComponentFixture<ImportDebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDebitNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
