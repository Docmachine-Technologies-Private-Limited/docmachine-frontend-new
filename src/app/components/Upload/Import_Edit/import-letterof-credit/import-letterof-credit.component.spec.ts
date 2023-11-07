import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportLetterofCreditComponent } from './import-letterof-credit.component';

describe('ImportLetterofCreditComponent', () => {
  let component: ImportLetterofCreditComponent;
  let fixture: ComponentFixture<ImportLetterofCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportLetterofCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportLetterofCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
