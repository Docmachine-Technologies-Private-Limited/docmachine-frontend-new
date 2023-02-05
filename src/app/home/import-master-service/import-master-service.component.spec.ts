import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMasterServiceComponent } from './import-master-service.component';

describe('ImportMasterServiceComponent', () => {
  let component: ImportMasterServiceComponent;
  let fixture: ComponentFixture<ImportMasterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportMasterServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMasterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
