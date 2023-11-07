import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMasterServiceAgreementsComponent } from './master-service-agreements.component';

describe('EditMasterServiceAgreementsComponent', () => {
  let component: EditMasterServiceAgreementsComponent;
  let fixture: ComponentFixture<EditMasterServiceAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMasterServiceAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMasterServiceAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
