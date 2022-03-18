import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcIsurenceComponent } from './lc-isurence.component';

describe('LcIsurenceComponent', () => {
  let component: LcIsurenceComponent;
  let fixture: ComponentFixture<LcIsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcIsurenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcIsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
