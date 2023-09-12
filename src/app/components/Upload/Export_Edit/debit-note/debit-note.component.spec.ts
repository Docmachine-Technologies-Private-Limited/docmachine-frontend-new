import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDebitNotesComponent } from './debit-note.component';

describe('DebitNoteComponent', () => {
  let component: EditDebitNotesComponent;
  let fixture: ComponentFixture<EditDebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDebitNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
