import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportNewDirectDispatchComponent } from './Import-New-Direct-Dispatch.component';

describe('NewDirectDispatchComponent', () => {
  let component: ImportNewDirectDispatchComponent;
  let fixture: ComponentFixture<ImportNewDirectDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportNewDirectDispatchComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportNewDirectDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
