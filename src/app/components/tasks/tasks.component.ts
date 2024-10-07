import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-task';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input() inputName?: string;
  @Input() inputId?: string;
  @Output() complete = new EventEmitter<string>();
  isAddingTask = false;
  tasks = dummyTasks;

  get title() {
    return this.inputName + "'s Tasks";
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.inputId);
  }

  // create new tasks list without the selectedId
  onDelete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  // create a new task
  onAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
