import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
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
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClickEvent(data) {
    console.log('Received:', data);
    this.toastrService.success('success', data);
  }
}
