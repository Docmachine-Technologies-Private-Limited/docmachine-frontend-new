import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirwayBlCopyComponent } from './airway-bl-copy.component';

describe('AirwayBlCopyComponent', () => {
  let component: AirwayBlCopyComponent;
  let fixture: ComponentFixture<AirwayBlCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirwayBlCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirwayBlCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
