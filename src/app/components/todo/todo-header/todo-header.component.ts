import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  @Input() total!: number;
  @Input() completed!: number;
  ngOnInit(): void {}
}
