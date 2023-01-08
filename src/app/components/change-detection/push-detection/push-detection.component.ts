import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { List } from 'immutable';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-push-detection',
  templateUrl: './push-detection.component.html',
  styleUrls: ['./push-detection.component.scss'],
})
export class PushDetectionComponent {
  label = '';
  @Input() childInput: List<string> | null = null;
  @Output() changeInputString = new EventEmitter<string>();
  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.changeInputString.emit(this.label);
      this.label = '';
    }
  }
}
