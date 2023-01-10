import { Component, OnInit } from '@angular/core';
import { LinkedList } from 'src/app/dataStructure/linkedList';
import { Employees } from 'src/app/data/employees';

type Employee = {
  key: string;
  email: string;
  gender: string;
  name: string;
};

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss'],
})
export class LinkedListComponent {
  employeeList: LinkedList<Employee> | null = null;
  employeeNames: string[] = [];
  constructor() {
    this.employeeList = new LinkedList<Employee>();
    Employees.forEach((employee) => this.employeeList?.insertAtTail(employee));
    this.employeeNames = this.getEmployeesName();
    console.info(this.getEmployeeByKey('63bce0db2f5b1ec6978ae15e'));
  }
  getEmployeesName() {
    let node = this.employeeList?.head;
    let names = [];
    while (node != null) {
      names.push(node.data.name);
      node = node.next;
    }
    return names;
  }
  getEmployeeByKey(key: string): Employee | null {
    return this.employeeList?.findByKey(key)?.data || null;
  }
}
