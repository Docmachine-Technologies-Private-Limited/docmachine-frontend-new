import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemittanceComponent } from './edit-remittance.component';

describe('EditRemittanceComponent', () => {
  let component: EditRemittanceComponent;
  let fixture: ComponentFixture<EditRemittanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRemittanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
