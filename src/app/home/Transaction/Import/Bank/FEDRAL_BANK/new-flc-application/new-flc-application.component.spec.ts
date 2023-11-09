import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFLCApplicationComponent } from './new-flc-application.component';

describe('NewFLCApplicationComponent', () => {
  let component: NewFLCApplicationComponent;
  let fixture: ComponentFixture<NewFLCApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFLCApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFLCApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
