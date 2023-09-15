import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeneficiaryNameAdminMemberComponent } from './add-beneficiary-name-admin-member.component';

describe('AddBeneficiaryNameAdminMemberComponent', () => {
  let component: AddBeneficiaryNameAdminMemberComponent;
  let fixture: ComponentFixture<AddBeneficiaryNameAdminMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeneficiaryNameAdminMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBeneficiaryNameAdminMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
