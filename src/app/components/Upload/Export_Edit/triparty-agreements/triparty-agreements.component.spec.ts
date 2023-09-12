import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTripartyAgreementsComponent } from './triparty-agreements.component';

describe('EditTripartyAgreementsComponent', () => {
  let component: EditTripartyAgreementsComponent;
  let fixture: ComponentFixture<EditTripartyAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTripartyAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTripartyAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
