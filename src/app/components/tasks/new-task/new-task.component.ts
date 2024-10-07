import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  title = signal('');
  description = signal('');
  taskDate = signal('');

  onClose() {
    this.close.emit();
  }

  onAdd() {

  }
}
