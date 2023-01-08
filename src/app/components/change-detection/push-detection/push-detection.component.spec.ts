import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushDetectionComponent } from './push-detection.component';

describe('PushDetectionComponent', () => {
  let component: PushDetectionComponent;
  let fixture: ComponentFixture<PushDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
