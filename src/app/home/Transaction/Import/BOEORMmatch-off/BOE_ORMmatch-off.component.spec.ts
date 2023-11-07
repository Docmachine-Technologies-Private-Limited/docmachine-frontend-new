import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOE_ORMMMatchOffComponent } from './BOE_ORMmatch-off.component';

describe('BOE_ORMMMatchOffComponent', () => {
  let component: BOE_ORMMMatchOffComponent;
  let fixture: ComponentFixture<BOE_ORMMMatchOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BOE_ORMMMatchOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BOE_ORMMMatchOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
