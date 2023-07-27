import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAirwayBlcopyComponent } from './import-airway-blcopy.component';

describe('ImportAirwayBlcopyComponent', () => {
  let component: ImportAirwayBlcopyComponent;
  let fixture: ComponentFixture<ImportAirwayBlcopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportAirwayBlcopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportAirwayBlcopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
