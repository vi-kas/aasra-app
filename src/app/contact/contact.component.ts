import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
  styles: [
    `
      .container-bg {
        widht: 100%;
        height: 600px;
        padding: 2em;
      }
      ,
      .container {
        display: block;
        width: 500px;
        padding: 2em;
      }
    `,
  ],
})
export class ContactComponent {
  contact: IContact;

  public slides = [
    { src: '../assets/images/aasraImg1.jpg' },
    { src: '../assets/images/aasraImg2.jpg' },
    { src: '../assets/images/aasraImg3.jpg' },
  ];

  constructor(private router: Router) {}

  saveContactForm(values: IContact) {
    console.log(values);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
