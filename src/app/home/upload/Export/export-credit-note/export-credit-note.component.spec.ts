import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCreditNoteComponent } from './export-credit-note.component';

describe('ExportCreditNoteComponent', () => {
  let component: ExportCreditNoteComponent;
  let fixture: ComponentFixture<ExportCreditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCreditNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportCreditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
