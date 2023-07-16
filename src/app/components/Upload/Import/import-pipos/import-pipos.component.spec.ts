import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPIPOSComponent } from './import-pipos.component';

describe('ImportPIPOSComponent', () => {
  let component: ImportPIPOSComponent;
  let fixture: ComponentFixture<ImportPIPOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPIPOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportPIPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
