import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/services/common/common.service';
import { TODO } from './types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: TODO[] = [];
  completed: number = 0;
  constructor(private _commonServices: CommonService) {}
  onTodoAdd = ({ title }: { title: string }) => {
    this.todos.push({ title, order: this.todos.length, completed: false });
  };
  onTodoStatusChange = ({
    order,
    completed,
  }: {
    order: number;
    completed: boolean;
  }) => {
    this.todos[order] = { ...this.todos[order], completed: !completed };
    this.completed = this.todos.filter(({ completed }) => completed).length;
  };
  ngOnInit(): void {
    console.info(this._commonServices.getTestValue());
  }
}
