import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  cancel() {
    this.router.navigate(['/events']);
  }
}
