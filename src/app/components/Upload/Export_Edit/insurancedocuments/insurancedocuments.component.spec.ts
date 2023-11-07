import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsurancedocumentsComponent } from './insurancedocuments.component';

describe('EditInsurancedocumentsComponent', () => {
  let component: EditInsurancedocumentsComponent;
  let fixture: ComponentFixture<EditInsurancedocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsurancedocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInsurancedocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
