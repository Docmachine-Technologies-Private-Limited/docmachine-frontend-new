import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitNotesComponent } from './debit-note.component';

describe('DebitNoteComponent', () => {
  let component: DebitNotesComponent;
  let fixture: ComponentFixture<DebitNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});