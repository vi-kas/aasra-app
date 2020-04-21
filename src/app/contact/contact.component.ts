import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact: IContact;

  constructor(private router: Router) {}

  saveContactForm(values: IContact) {
    console.log(values);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
