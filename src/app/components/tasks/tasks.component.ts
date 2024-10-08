import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-task';
import { NewTaskComponent } from './new-task/new-task.component';
import { type ITask } from '../../../types';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input() inputName?: string;
  @Input() inputId!: string;
  @Output() complete = new EventEmitter<string>();
  isAddingTask = false;

  // dependency injection
  constructor(private tasksService: TasksService) {}

  get title() {
    return this.inputName + "'s Tasks";
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTask(this.inputId);
  }

  // create a new task
  onAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
