import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAirwayBlCopyComponent } from './airway-bl-copy.component';

describe('EditAirwayBlCopyComponent', () => {
  let component: EditAirwayBlCopyComponent;
  let fixture: ComponentFixture<EditAirwayBlCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAirwayBlCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAirwayBlCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
