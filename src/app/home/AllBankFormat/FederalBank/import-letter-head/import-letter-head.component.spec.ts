import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLetterHeadComponent } from './import-letter-head.component';

describe('ImportLetterHeadComponent', () => {
  let component: ImportLetterHeadComponent;
  let fixture: ComponentFixture<ImportLetterHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLetterHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportLetterHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
