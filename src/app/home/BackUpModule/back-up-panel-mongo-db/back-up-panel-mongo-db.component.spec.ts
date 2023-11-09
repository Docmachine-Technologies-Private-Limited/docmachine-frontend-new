import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUpPanelMongoDBComponent } from './back-up-panel-mongo-db.component';

describe('BackUpPanelMongoDBComponent', () => {
  let component: BackUpPanelMongoDBComponent;
  let fixture: ComponentFixture<BackUpPanelMongoDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackUpPanelMongoDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackUpPanelMongoDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
