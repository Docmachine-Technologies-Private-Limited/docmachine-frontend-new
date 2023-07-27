import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomDropdownComponent } from './ng-custom-dropdown.component';

describe('NgCustomDropdownComponent', () => {
  let component: NgCustomDropdownComponent;
  let fixture: ComponentFixture<NgCustomDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
