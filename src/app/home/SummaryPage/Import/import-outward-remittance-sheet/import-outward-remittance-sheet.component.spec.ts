import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportOutwardRemittanceSheetComponent } from './import-outward-remittance-sheet.component';

describe('ImportOutwardRemittanceSheetComponent', () => {
  let component: ImportOutwardRemittanceSheetComponent;
  let fixture: ComponentFixture<ImportOutwardRemittanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportOutwardRemittanceSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportOutwardRemittanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
