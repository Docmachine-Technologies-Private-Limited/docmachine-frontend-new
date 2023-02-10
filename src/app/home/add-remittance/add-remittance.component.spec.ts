import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemittanceComponent } from './add-remittance.component';

describe('AddRemittanceComponent', () => {
  let component: AddRemittanceComponent;
  let fixture: ComponentFixture<AddRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemittanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
