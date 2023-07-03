import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdpmsReconComponent } from './idpms-recon.component';

describe('IdpmsReconComponent', () => {
  let component: IdpmsReconComponent;
  let fixture: ComponentFixture<IdpmsReconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdpmsReconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdpmsReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
