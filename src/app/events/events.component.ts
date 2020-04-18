import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/services/toastr.service';

@Component({
  selector: 'events',
  template: `
    <div>
      <h2>Here are our upcoming events</h2>
      <event-thumbnail
        (eventClick)="handleClickEvent($event)"
        *ngFor="let event of events"
        [event]="event"
      ></event-thumbnail>
    </div>
  `,
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleClickEvent(data) {
    console.log('Received:', data);
    this.toastrService.success('success', data);
  }
}
