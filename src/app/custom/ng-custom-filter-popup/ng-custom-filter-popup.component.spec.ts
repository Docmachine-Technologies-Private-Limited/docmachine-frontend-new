import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomFilterPopupComponent } from './ng-custom-filter-popup.component';

describe('NgCustomFilterPopupComponent', () => {
  let component: NgCustomFilterPopupComponent;
  let fixture: ComponentFixture<NgCustomFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomFilterPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
