import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

import { App } from './app';
//import { Tasks } from './tasks/tasks';
import { User } from './user/user';
import { Header } from './header/header';

//import { Card } from './shared/card/card';
//import { NewTask } from './tasks/new-task/new-task';
//import { Task } from './tasks/task/task';



@NgModule({
    declarations: [App,Header, User],
    bootstrap: [App],
    imports: [BrowserModule,  SharedModule, TasksModule],
})
export class AppModule {}