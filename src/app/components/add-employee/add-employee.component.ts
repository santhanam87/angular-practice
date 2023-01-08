import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  label: string = '';
  @Output() add = new EventEmitter<{ label: string }>();
  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit({ label: this.label });
      this.label = '';
    }
  }
}
