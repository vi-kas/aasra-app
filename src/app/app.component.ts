import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <header></header>
    <router-outlet></router-outlet>
    <footer></footer>`,
  styles: [
    `
      .wrapper {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        margin: 0 auto -10px; /* the bottom margin is the negative value of the footer's height */
      }
      .footer,
      .push {
        height: 10px; /* .push must be the same height as .footer */
      }
    `,
  ],
})
export class AppComponent {
  title = 'aasra-app';
}
