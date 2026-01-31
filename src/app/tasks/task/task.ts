import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskModel } from './task.model';
import { Card } from "../../shared/card/card";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  //imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskModel; 
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService);


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
