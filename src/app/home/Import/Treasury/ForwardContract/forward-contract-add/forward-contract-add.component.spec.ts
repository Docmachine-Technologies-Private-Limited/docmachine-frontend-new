import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardContractAddComponent } from './forward-contract-add.component';

describe('ForwardContractAddComponent', () => {
  let component: ForwardContractAddComponent;
  let fixture: ComponentFixture<ForwardContractAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardContractAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardContractAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
