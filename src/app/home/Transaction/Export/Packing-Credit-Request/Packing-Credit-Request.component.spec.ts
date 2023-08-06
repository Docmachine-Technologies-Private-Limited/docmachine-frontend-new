import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectDispatchComponent } from './New-Direct-Dispatch.component';

describe('NewDirectDispatchComponent', () => {
  let component: NewDirectDispatchComponent;
  let fixture: ComponentFixture<NewDirectDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDirectDispatchComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDirectDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
