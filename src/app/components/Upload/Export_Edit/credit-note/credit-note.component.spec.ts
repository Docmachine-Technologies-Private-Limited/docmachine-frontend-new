import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreditNoteComponent } from './credit-note.component';

describe('EditCreditNoteComponent', () => {
  let component: EditCreditNoteComponent;
  let fixture: ComponentFixture<EditCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreditNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
