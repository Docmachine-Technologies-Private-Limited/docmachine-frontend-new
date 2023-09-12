import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLetterofCreditComponent } from './letterof-credit.component';

describe('EditLetterofCreditComponent', () => {
  let component: EditLetterofCreditComponent;
  let fixture: ComponentFixture<EditLetterofCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLetterofCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLetterofCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
