import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterServiceAgreementsComponent } from './master-service-agreements.component';

describe('MasterServiceAgreementsComponent', () => {
  let component: MasterServiceAgreementsComponent;
  let fixture: ComponentFixture<MasterServiceAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterServiceAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterServiceAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
