import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-carousal',
  templateUrl: './bsCaraousal.component.html',
  styles: [
    `
      .carousel-inner > .carousel-item > img {
        width: 100%;
        height: 80%;
      }
    `,
  ],
})
export class BSCarousalComponent {
  constructor() {}
}
