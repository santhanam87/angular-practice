import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';

import { TodoFooterComponent } from './todo-footer.component';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFooterComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the callback with the added title', () => {
    const testTitle = 'new test title';
    component.todoTitle.setValue(testTitle);
    component.onAdd.pipe(first()).subscribe(({ title }: { title: string }) => {
      expect(title).toEqual(testTitle);
    });
    component.addNewTodo({ preventDefault: () => {} } as SubmitEvent);
  });
});
