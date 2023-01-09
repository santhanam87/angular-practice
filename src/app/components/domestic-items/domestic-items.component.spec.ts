import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticItemsComponent } from './domestic-items.component';

describe('DomesticItemsComponent', () => {
  let component: DomesticItemsComponent;
  let fixture: ComponentFixture<DomesticItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
