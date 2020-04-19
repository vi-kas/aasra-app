import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e02365;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private name: FormControl;
  private userName: FormControl;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.name = new FormControl(
      this.authService.currentUser.name,
      Validators.required
    );
    this.userName = new FormControl(
      this.authService.currentUser.userName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      name: this.name,
      userName: this.userName,
    });
  }

  validateUserName() {
    return this.userName.valid || this.userName.touched;
  }

  saveProfile(values) {
    console.log('saveProfile called.');
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(values.userName, values.password);
      this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
