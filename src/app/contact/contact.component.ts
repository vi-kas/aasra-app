import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from './contact.model';

@Component({
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contact: IContact;

  constructor(private router: Router) {}

  ngOnInit() {}

  saveContactForm(values: IContact) {
    console.log(values);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
