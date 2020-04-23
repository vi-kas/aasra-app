import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.components.html',
  styles: [
    `
      .sticky {
        overflow: hidden;
        background-color: white;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
      }
    `,
  ],
})
export class HeaderComponent {}
