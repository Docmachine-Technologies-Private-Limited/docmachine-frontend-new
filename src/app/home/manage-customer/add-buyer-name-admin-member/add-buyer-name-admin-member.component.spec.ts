import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyerNameAdminMemberComponent } from './add-buyer-name-admin-member.component';

describe('AddBuyerNameAdminMemberComponent', () => {
  let component: AddBuyerNameAdminMemberComponent;
  let fixture: ComponentFixture<AddBuyerNameAdminMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyerNameAdminMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBuyerNameAdminMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
