import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Input({required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();
  title = signal('');
  description = signal('');
  taskDate = signal('');

  private taskService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.title(),
      description: this.description(),
      date: this.taskDate(),
    })
    this.close.emit();
  }
}
