import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent {
  @Output() onAdd = new EventEmitter<{ title: string }>();
  todoTitle = new FormControl();
  addNewTodo = (event: SubmitEvent) => {
    event.preventDefault();
    this.onAdd.emit({ title: this.todoTitle.value });
    this.todoTitle.reset();
  };
}
