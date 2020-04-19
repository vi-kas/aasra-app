import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e02365;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  userName;
  password;
  mouseoverLogin;

  login(values) {
    console.log('login called.');
    this.authService.loginUser(values.userName, values.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
