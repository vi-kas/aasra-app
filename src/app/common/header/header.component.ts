import { Component } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.components.html',
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}
}
