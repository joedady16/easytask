import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Header } from './header/header'; // Uncomment if using standalone components
// import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
//import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterOutlet, Header, User, Tasks], // Uncomment if using standalone components
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

