import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportEditPipoComponent } from './edit-pipo.component';

describe('EditPipoComponent', () => {
  let component: ImportEditPipoComponent;
  let fixture: ComponentFixture<ImportEditPipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportEditPipoComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEditPipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
