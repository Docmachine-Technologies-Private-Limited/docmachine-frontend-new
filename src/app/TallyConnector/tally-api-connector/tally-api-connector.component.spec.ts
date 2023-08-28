import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyApiConnectorComponent } from './tally-api-connector.component';

describe('TallyApiConnectorComponent', () => {
  let component: TallyApiConnectorComponent;
  let fixture: ComponentFixture<TallyApiConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TallyApiConnectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyApiConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
