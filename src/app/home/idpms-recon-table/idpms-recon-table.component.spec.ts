import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdpmsReconTableComponent } from './idpms-recon-table.component';

describe('IdpmsReconTableComponent', () => {
  let component: IdpmsReconTableComponent;
  let fixture: ComponentFixture<IdpmsReconTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdpmsReconTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdpmsReconTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
