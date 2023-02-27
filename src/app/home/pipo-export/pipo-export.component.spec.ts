import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipoExportComponent } from './pipo-export.component';

describe('PipoExportComponent', () => {
  let component: PipoExportComponent;
  let fixture: ComponentFixture<PipoExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipoExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipoExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
