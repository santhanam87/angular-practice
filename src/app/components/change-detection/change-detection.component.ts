import { Component } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
})
export class ChangeDetectionComponent {
  childInput: List<string> = List(['Child Input String']);
  onChildInputChange(updatedString: string) {
    return this.childInput.unshift(updatedString);
  }
}
