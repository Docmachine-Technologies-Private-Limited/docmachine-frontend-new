import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDestructionComponent } from './import-destruction.component';

describe('ImportDestructionComponent', () => {
  let component: ImportDestructionComponent;
  let fixture: ComponentFixture<ImportDestructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDestructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
