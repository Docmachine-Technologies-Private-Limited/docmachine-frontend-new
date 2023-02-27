import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDebitNoteComponent } from './export-debit-note.component';

describe('ExportDebitNoteComponent', () => {
  let component: ExportDebitNoteComponent;
  let fixture: ComponentFixture<ExportDebitNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDebitNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportDebitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
