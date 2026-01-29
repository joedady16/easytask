import { Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import { UserProps } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})

export class User {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `./assets/users/${this.selectedUser().avatar}`);

  //=================================================
  //Decorator approach:
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) user!: UserProps; //{ // <== Alternative approach to pass user object
  //  id: string;
  //  name: string;
  //  avatar: string; 
  // }; 
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>(); // <== Traditional output approach and adding <string> is a good practice but not required
  // select = output<string>(); // <== New signal-based output approach
  //=================================================
   get imagePath() {
    return `./assets/users/${this.user.avatar}`;
  }

  //=================================================
  //data container; signal approach:
  // avatar = input.required<string>();
  // name = input.required<string>(); 

  // imagePath = computed(() => `./assets/users/${this.avatar}`);
  //=================================================

  // get userImagePath() {
  //   return `./assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //    this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }
}
