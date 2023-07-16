import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMasterServiceAgreementsComponent } from './import-master-service-agreements.component';

describe('ImportMasterServiceAgreementsComponent', () => {
  let component: ImportMasterServiceAgreementsComponent;
  let fixture: ComponentFixture<ImportMasterServiceAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportMasterServiceAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMasterServiceAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
