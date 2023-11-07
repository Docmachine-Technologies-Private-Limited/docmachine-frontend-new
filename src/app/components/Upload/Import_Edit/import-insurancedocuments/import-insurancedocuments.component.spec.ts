import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInsurancedocumentsComponent } from './import-insurancedocuments.component';

describe('ImportInsurancedocumentsComponent', () => {
  let component: ImportInsurancedocumentsComponent;
  let fixture: ComponentFixture<ImportInsurancedocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportInsurancedocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportInsurancedocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
