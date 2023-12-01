import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAFormComponent } from './ca-form.component';

describe('CAFormComponent', () => {
  let component: CAFormComponent;
  let fixture: ComponentFixture<CAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
