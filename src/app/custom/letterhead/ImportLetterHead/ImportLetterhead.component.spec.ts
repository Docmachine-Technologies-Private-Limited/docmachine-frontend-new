import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLetterheadComponent } from './ImportLetterhead.component';

describe('ImportLetterheadComponent', () => {
  let component: ImportLetterheadComponent;
  let fixture: ComponentFixture<ImportLetterheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLetterheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportLetterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
