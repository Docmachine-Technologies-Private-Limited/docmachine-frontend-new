import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAirwayBlCopyComponent } from './import-airway-bl-copy.component';

describe('ImportAirwayBlCopyComponent', () => {
  let component: ImportAirwayBlCopyComponent;
  let fixture: ComponentFixture<ImportAirwayBlCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportAirwayBlCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportAirwayBlCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
