import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <h2>{{ event.title }}</h2>
      <button class="btn btn-primary" (click)="handleClick()">Like</button>
      <button class="btn btn-info" modal-trigger="fooModal">FooModal</button>
    </div>
    <simple-modal elementId="fooModal" title="{{ event.title }}">
      <div><h2>Something to show here...</h2></div>
    </simple-modal>
  `,
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  eventProperty: string = 'Event Completed.';

  logEventName() {
    console.log('Logging:', this.event.title);
  }

  handleClick() {
    this.eventClick.emit(this.event.title);
  }
}

// <div [routerLink]="['/events', event.id]">
//       <h2>{{ event.title }}</h2>
//       <button class="btn btn-primary" (click)="handleClick()">Like</button>
//       <button class="btn btn-info" modal-trigger="fooModal">FooModal</button>
//     </div>
