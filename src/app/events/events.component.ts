import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { TOASTR_TOKEN, IToastr } from '../common/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClickEvent(data) {
    console.log('Received:', data);
    this.toastr.success('success', data);
  }
}
