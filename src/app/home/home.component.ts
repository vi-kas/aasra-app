import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container-bg {
        widht: 100%;
        margin: auto 0;
        height: 800px;
        padding: 2em;
        padding-bottom: 4em;
      }
      ,
      .container {
        display: block;
        width: 100%;
        padding: 2em;
      }
    `,
  ],
})
export class HomeComponent {
  public slides = [
    { src: '../assets/images/aasraImg1.jpg' },
    { src: '../assets/images/aasraImg2.jpg' },
    { src: '../assets/images/aasraImg3.jpg' },
  ];
}
