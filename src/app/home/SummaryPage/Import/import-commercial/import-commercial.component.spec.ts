import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommercialComponent } from './import-commercial.component';

describe('ImportCommercialComponent', () => {
  let component: ImportCommercialComponent;
  let fixture: ComponentFixture<ImportCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
