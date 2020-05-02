import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.components.html',
  styles: [
    `
      .footer {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 1em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
        background-color: #e81a5b;
        background-size: 20px 20px;
      }

      .footer-content {
        margin-left: 10%;
        width: 80%;
      }

      /* Footer */
      .copyright-text {
        width: 100%;
        text-align: center;
        font-size: 0.8em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: white;
      }

      .copyright {
        margin-top: 1em;
      }
    `,
  ],
})
export class FooterComponent {}
