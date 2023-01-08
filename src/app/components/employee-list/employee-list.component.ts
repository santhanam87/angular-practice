import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeData } from '../../types/types';
import { List } from 'immutable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  @Input() employeeList: List<EmployeeData> | null = null;
  constructor() {}
}
