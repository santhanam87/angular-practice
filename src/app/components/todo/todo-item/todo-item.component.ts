import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TODO } from '../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: TODO;
  @Output() onStatusChange = new EventEmitter<{
    completed: boolean;
    order: number;
  }>();
  onTodoClick = () => {
    const { completed, order } = this.todo;
    this.onStatusChange.emit({ completed, order });
  };
}
