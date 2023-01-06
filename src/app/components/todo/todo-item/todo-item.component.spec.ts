import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = { title: '', completed: false, order: 1 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the callback on change of the checkbox', () => {
    component.onStatusChange.pipe(first()).subscribe((response) => {
      expect(response).toEqual({ completed: false, order: 1 });
    });
    component.onTodoClick();
  });
});
