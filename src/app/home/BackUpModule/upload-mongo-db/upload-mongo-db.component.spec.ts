import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMongoDbComponent } from './upload-mongo-db.component';

describe('UploadMongoDbComponent', () => {
  let component: UploadMongoDbComponent;
  let fixture: ComponentFixture<UploadMongoDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMongoDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMongoDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
