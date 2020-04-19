import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      name: 'Vikas',
      userName: userName,
    };
  }

  updateCurrentUser(name: string, userName: string) {
    this.currentUser.name = name;
    this.currentUser.userName = userName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
