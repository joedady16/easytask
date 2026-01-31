import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { NewTaskModel } from '../task/task.model';
import { TaskService } from '../tasks.service';
//import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-new-task',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() addNew  = new EventEmitter<NewTaskModel>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, 
    this.userId
  );
    this.close.emit();
  }
}
