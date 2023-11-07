import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTripartyAgreementsComponent } from './import-triparty-agreements.component';

describe('ImportTripartyAgreementsComponent', () => {
  let component: ImportTripartyAgreementsComponent;
  let fixture: ComponentFixture<ImportTripartyAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportTripartyAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportTripartyAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
