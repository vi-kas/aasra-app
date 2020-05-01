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
        background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
          linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
          linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
          linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
          linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
          linear-gradient(
            #1d1d1d 25%,
            #1a1a1a 25%,
            #1a1a1a 50%,
            transparent 50%,
            transparent 75%,
            #242424 75%,
            #242424
          );
        background-color: #131313;
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
