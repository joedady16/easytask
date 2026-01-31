import { NgModule } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { Tasks } from './tasks';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports: [Tasks],
  imports: [CommonModule, FormsModule, SharedModule]
})




export class TasksModule {}