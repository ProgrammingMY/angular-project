import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task?: ITask ;
  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.task?.id);
  }
}
