import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../../../types';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: ITask ;

  private tasksService = inject(TasksService);

  onDelete() {
    this.tasksService.removeTask(this.task.id.toString());
  }
}
